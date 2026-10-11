import unittest
from unittest.mock import patch
from pathlib import Path
from datetime import datetime,timezone,timedelta
from scripts.forecasts import parse_nhc,parse_smn,current
FIX=Path(__file__).parent/'fixtures'
class Forecasts(unittest.TestCase):
    def setUp(self):
        self.nhc=(FIX/'nhc-public.txt').read_text();self.smn=(FIX/'smn-general.txt').read_text()
        self.ref={'issuance':'2026-10-11T18:00:00Z','url':'https://www.nhc.noaa.gov/text/MIATCPEP5.shtml'}
    @patch('scripts.forecasts.current')
    def test_nhc_fields_and_issuance(self,_):
        b=parse_nhc(self.nhc,self.ref,'ep202026')
        self.assertIn('afternoon and tonight',b['timing']);self.assertIn('through Monday',b['rain'])
        self.assertIn('spreading northward',b['wind']);self.assertIn('storm surge',b['coast'])
        self.assertIn('Punta San Telmo',b['warnings'])
        for text,ref,identity in [(self.nhc,self.ref,'ep192026'),(self.nhc,{**self.ref,'issuance':'2026-10-11T15:00:00Z'},'ep202026'),(self.nhc.replace('On the','Beyond the'),self.ref,'ep202026')]:
            with self.assertRaises(ValueError):parse_nhc(text,ref,identity)
    @patch('scripts.forecasts.current')
    def test_smn_jalisco_only_and_timestamp(self,_):
        b=parse_smn(self.smn)
        self.assertEqual(b['issued_at'],'2026-10-11T06:00:00-06:00')
        self.assertIn('250 mm',b['rain']);self.assertNotIn('150 a 250',b['rain'])
        self.assertIn('costa de Jalisco',b['wind']);self.assertIn('Marea de tormenta',b['coast'])
        for raw in [self.smn.replace('Emisión:','Unknown:'),self.smn.replace('Jalisco','Other state'),'<html>Unavailable</html>']:
            with self.assertRaises(ValueError):parse_smn(raw)
    def test_stale_and_future_rejected(self):
        now=datetime.now(timezone.utc)
        current(now,9)
        for issued in [now-timedelta(hours=10),now+timedelta(hours=1)]:
            with self.assertRaises(ValueError):current(issued,9)
if __name__=='__main__':unittest.main()

class MapIdentity(unittest.TestCase):
    @patch('scripts.forecasts.current')
    def test_smn_map_rejects_other_storm_and_missing_date(self,_):
        from scripts.forecasts import parse_smn_track
        raw='Sistema ciclónico: Simon Emisión: 2026-10-11 09:00 horas <img src="./WebImg/ImgTray123.jpg">'
        self.assertIn('ImgTray123.jpg',parse_smn_track(raw,'Simon')['url'])
        for text in [raw.replace('Simon','Rachel'),raw.replace('Emisión:','Date:'),raw.replace('./WebImg/','https://other.example/')]:
            with self.assertRaises(ValueError):parse_smn_track(text,'Simon')

class StormSelection(unittest.TestCase):
    @patch('scripts.forecasts.current')
    def test_classified_name_and_explicit_selection(self,_):
        from scripts.forecasts import parse_smn_track,smn_storm_url
        raw='Sistema ciclónico: Huracán Simon Emisión: 2026-10-11 12:00 horas <img src="./WebImg/ImgTray123.jpg">'
        self.assertEqual(parse_smn_track(raw,'Simon')['storm'],'Simon')
        links='<a data-aviso-id="11052">Rachel 90</a><a data-aviso-id="11054"><span>Huracán Simon</span> 34</a>'
        self.assertTrue(smn_storm_url(links,'Simon').endswith('searchText=11054'))
        self.assertIsNone(smn_storm_url(links,'Other'))
