import unittest
from unittest.mock import patch
from datetime import datetime, timedelta, timezone
from scripts.update import parse_forecast_advisory, latlon, get_storm, get_local_forecast, advisory_matches, main, LOCAL_TZ
import json
import tempfile
from pathlib import Path

class TestNHC(unittest.TestCase):
    def test_latlon(self):
        self.assertEqual(latlon('19.5N'),19.5)
        self.assertEqual(latlon('105.4W'),-105.4)
    def test_forecast(self):
        text='''HURRICANE SIMON FORECAST/ADVISORY NUMBER 16
FORECAST VALID 11/1800Z 19.5N 105.4W...NEAR COAST
MAX WIND 125 KT
FORECAST VALID 12/0600Z 20.5N 105.7W...NEAR COAST
MAX WIND 90 KT'''
        points=parse_forecast_advisory(text,'2026-10-11T09:00:00Z')
        self.assertEqual(len(points),2)
        self.assertEqual(points[0]['lon'],-105.4)
        self.assertEqual(points[1]['time'],'2026-10-12T06:00:00Z')
    def test_storm_parser_from_synthetic_nhc_schema(self):
        sample = {'activeStorms':[{'id':'ep202026','name':'Simon','classification':'HU',
            'latitudeNumeric':18.9,'longitudeNumeric':-105.2,'intensity':'130',
            'movementDir':345,'movementSpeed':6,'pressure':'933',
            'lastUpdate':'2026-10-11T12:00:00.000Z',
            'publicAdvisory':{'url':'https://www.nhc.noaa.gov/text/MIATCPEP5.shtml','advNum':'016a'},
            'forecastAdvisory':{'url':'https://www.nhc.noaa.gov/text/MIATCMEP5.shtml','issuance':'2026-10-11T09:00:00.000Z'},
            'forecastGraphics':{'url':'https://www.nhc.noaa.gov/graphics_ep5.shtml'},
            'forecastTrack':None,'trackCone':None}]}
        bulletin='HURRICANE SIMON EP202026\n0900 UTC SUN OCT 11 2026\nFORECAST VALID 11/1800Z 19.5N 105.4W'
        with patch('scripts.update.fetch_json',return_value=sample),patch('scripts.update.fetch_text',return_value=bulletin):
            storm=get_storm()
        self.assertEqual(storm['status'],'active')
        self.assertEqual(storm['winds_mph'],150)
        self.assertEqual(storm['movement_kmh'],9.7)
        self.assertEqual(len(storm['forecast']),1)
    def test_no_other_storm_substitution(self):
        with patch('scripts.update.fetch_json',return_value={'activeStorms':[{'id':'al092026','name':'Isaias'}]}):
            storm=get_storm()
        self.assertEqual(storm['status'],'not_active')
    def test_rollover(self):
        text='FORECAST VALID 01/0600Z 18.4N 104.7W'
        points=parse_forecast_advisory(text,'2026-12-31T21:00:00Z')
        self.assertEqual(points[0]['time'],'2027-01-01T06:00:00Z')

    def test_outlook_and_leap_year(self):
        points=parse_forecast_advisory('FORECAST VALID 29/0600Z 18.0N 104.0W\nOUTLOOK VALID 01/0600Z 19.0N 105.0W','2028-02-28T21:00:00Z')
        self.assertEqual([x['time'] for x in points],['2028-02-29T06:00:00Z','2028-03-01T06:00:00Z'])

    def test_malformed_feed_not_reported_inactive(self):
        for bad in ({}, {'activeStorms':None}, {'activeStorms':[None]}):
            with self.subTest(bad=bad), patch('scripts.update.fetch_json',return_value=bad):
                with self.assertRaises(ValueError): get_storm()

    def test_advisory_identity_and_time(self):
        ref={'issuance':'2026-10-11T15:00:00Z'}
        self.assertTrue(advisory_matches('EP202026 1500 UTC SUN OCT 11 2026',ref,'ep202026'))
        self.assertFalse(advisory_matches('EP182026 1500 UTC SUN OCT 11 2026',ref,'ep202026'))
        self.assertFalse(advisory_matches('EP202026 0900 UTC SUN OCT 11 2026',ref,'ep202026'))

    def weather(self, count=24):
        start=datetime.now(LOCAL_TZ).replace(minute=0,second=0,microsecond=0)
        return {'hourly':{'time':[(start+timedelta(hours=i)).isoformat() for i in range(count)],
                'precipitation':[1]*count,'precipitation_probability':[60]*count,
                'wind_speed_10m':[10]*count,'wind_gusts_10m':[20]*count}}

    def test_model_24_hours_and_retrieval_label(self):
        with patch('scripts.update.fetch_json',return_value=self.weather()):
            result=get_local_forecast(20.5,-105.3)
        self.assertEqual(result['rain24h_mm'],24)
        self.assertEqual(result['max_gust24h_kmh'],20)
        self.assertIn('retrieved_at',result)
        self.assertNotIn('issued',result)
        self.assertEqual(datetime.fromisoformat(result['period_end'])-datetime.fromisoformat(result['period_start']),timedelta(hours=24))

    def test_missing_values_not_zero(self):
        data=self.weather(); data['hourly']['precipitation'][5]=None; data['hourly']['wind_gusts_10m'][3]=None
        with patch('scripts.update.fetch_json',return_value=data): result=get_local_forecast(20.5,-105.3)
        self.assertIsNone(result['rain24h_mm'])
        self.assertIsNone(result['max_gust24h_kmh'])
        self.assertEqual(result['max_wind24h_kmh'],10)

    def test_short_or_duplicate_model_period_rejected(self):
        bad=self.weather();bad['hourly']['time'][1]=bad['hourly']['time'][0]
        for data in (self.weather(23),bad):
            with patch('scripts.update.fetch_json',return_value=data):
                with self.assertRaises(ValueError): get_local_forecast(20.5,-105.3)

    def test_demo_is_never_reused_as_live(self):
        with tempfile.TemporaryDirectory() as tmp:
            output=Path(tmp)/'latest.json'
            output.write_text(json.dumps({'mode':'sample','storm':{'status':'active','last_update':'2026-10-11T12:00:00Z','source':'https://www.nhc.noaa.gov/CurrentStorms.json'}}))
            with patch('scripts.update.DATA',output), patch('scripts.update.get_storm',side_effect=ValueError('offline')), patch('scripts.update.get_local_forecast',side_effect=ValueError('offline')):
                main()
            result=json.loads(output.read_text())
            self.assertIsNone(result['storm'])
            self.assertEqual(len(result['errors']),6)

if __name__=='__main__':unittest.main()
