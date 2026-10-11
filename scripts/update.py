#!/usr/bin/env python3
"""Fetch NOAA/NHC & Open-Meteo information for the static storm dashboard.

No scraping of emergency orders; link official Mexican authority pages instead.
Runs at GitHub Actions build time. Uses only Python standard library.
"""
import json
import math
import re
import urllib.error
import urllib.request
from datetime import datetime, timedelta, timezone
from html import unescape
from html.parser import HTMLParser
from pathlib import Path
from zoneinfo import ZoneInfo

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / 'data' / 'latest.json'
USER_AGENT = 'BahiaStormWatch/0.1 (GitHub Pages community dashboard; official sources linked)'
NHC_URL = 'https://www.nhc.noaa.gov/CurrentStorms.json'
OM_URL = 'https://api.open-meteo.com/v1/forecast'
LOCAL_TZ = ZoneInfo('America/Mexico_City')
COMMUNITIES = [
    ('garza','Garza Blanca / Villa Marta',20.5543,-105.2637),
    ('mismaloya','Mismaloya',20.5293,-105.2866),
    ('boca','Boca de Tomatlan',20.51246,-105.31494),
    ('juntas','Las Juntas y los Veranos',20.4830,-105.2924),
    ('pv','Puerto Vallarta Centro',20.6067,-105.2350),
]

def fetch_json(url):
    req = urllib.request.Request(url, headers={'User-Agent': USER_AGENT, 'Accept':'application/json'})
    with urllib.request.urlopen(req,timeout=20) as response:
        return json.loads(response.read().decode('utf-8'))

def fetch_text(url):
    if not url.startswith('https://www.nhc.noaa.gov/'):
        raise ValueError('Unexpected URL authority')
    req = urllib.request.Request(url, headers={'User-Agent':USER_AGENT,'Accept':'text/html,text/plain'})
    with urllib.request.urlopen(req,timeout=20) as response:
        return response.read().decode('utf-8',errors='replace')

class ExtractText(HTMLParser):
    def __init__(self):
        super().__init__(); self.parts=[]
    def handle_data(self,d):
        self.parts.append(d)

def html_text(raw):
    p=ExtractText();p.feed(raw);return unescape(''.join(p.parts))

def latlon(text):
    """NHC like 19.5N or 105.4W."""
    number=float(text[:-1]);return -number if text[-1].upper() in 'SW' else number

def number(value, minimum=0, maximum=float('inf')):
    """Keep missing measurements unknown instead of manufacturing calm weather."""
    if value is None or value == '':
        return None
    value = float(value)
    if not math.isfinite(value) or not minimum <= value <= maximum:
        raise ValueError('Invalid source measurement')
    return value

def advisory_matches(raw, reference, storm_id):
    """Rotating NHC bulletin URLs must still belong to this storm and issuance."""
    plain = html_text(raw).upper()
    issued = datetime.fromisoformat(reference['issuance'].replace('Z', '+00:00'))
    stamp = re.search(r'(\d{4}) UTC [A-Z]{3} ([A-Z]{3})\s+(\d{1,2}) (\d{4})', plain)
    if not stamp or storm_id.upper() not in plain:
        return False
    parsed = datetime.strptime(' '.join(stamp.groups()), '%H%M %b %d %Y').replace(tzinfo=timezone.utc)
    return parsed == issued

def parse_forecast_advisory(raw, issued_at):
    """Only parse explicit NHC FORECAST VALID center points; do not interpolate."""
    plain=html_text(raw)
    issued=datetime.fromisoformat(issued_at.replace('Z','+00:00'))
    results=[]
    regex=r'(?:FORECAST|OUTLOOK) VALID\s+(\d{1,2})/(\d{4})Z\s+(\d+(?:\.\d+)?[NS])\s+(\d+(?:\.\d+)?[EW])'
    for day, hhmm, latitude, longitude in re.findall(regex,plain,re.I):
        hour=int(hhmm[:2]);minute=int(hhmm[2:])
        # Possible month rollover from Dec/Jan or across end-of-month.
        maybe=[]
        for month_offset in (0,1,-1):
            y=issued.year;month=issued.month+month_offset
            if month>12:y+=1;month-=12
            if month<1:y-=1;month+=12
            try:dt=datetime(y,month,int(day),hour,minute,tzinfo=timezone.utc)
            except ValueError:continue
            if -timedelta(hours=6)<=dt-issued<=timedelta(days=7):maybe.append(dt)
        if not maybe:continue
        dt=min(maybe,key=lambda x:abs((x-issued).total_seconds()))
        if results and dt<=datetime.fromisoformat(results[-1]['time'].replace('Z','+00:00')):continue
        results.append({'lat':latlon(latitude),'lon':latlon(longitude),'time':dt.isoformat().replace('+00:00','Z')})
    return results

def graphic_image_url(html, storm_id, kind='cone'):
    """Accept full-size official graphics only for this storm, basin and year."""
    from urllib.parse import urljoin, urlparse
    identity=storm_id.upper()
    if not re.fullmatch(r'(?:EP|AL|CP)\d{6}',identity):return None
    prefix='/storm_graphics/'+identity[:4]+'/'
    token=identity+'_5day_cone' if kind=='cone' else identity[:2]+identity[4:]+'INTQPF'
    for value in re.findall(r'(?:src|href)\s*=\s*["\']([^"\']+)', html, re.I):
        url=urljoin('https://www.nhc.noaa.gov/',unescape(value))
        parsed=urlparse(url)
        if parsed.scheme!='https' or parsed.netloc!='www.nhc.noaa.gov':continue
        if not parsed.path.startswith(prefix) or '_sm' in parsed.path:continue
        if re.search(r'/'+re.escape(token)+r'(?:\.(?:png|gif)|\+(?:png|gif)/[^/]+\.(?:png|gif))$',parsed.path):return url
    return None

def get_storm():
    payload=fetch_json(NHC_URL)
    storms=payload.get('activeStorms')
    if not isinstance(storms, list) or any(not isinstance(x, dict) for x in storms):
        raise ValueError('Invalid NHC storm list')
    # Simon currently. If no longer active, do not quietly substitute a different storm.
    matching=next((x for x in storms if str(x.get('id','')).lower()=='ep202026'),None)
    if not matching:return {'status':'not_active','name':'Simon','source':NHC_URL,'forecast':[]}
    lat=number(matching.get('latitudeNumeric',matching.get('latitude_numeric')), -90, 90)
    lon=number(matching.get('longitudeNumeric',matching.get('longitude_numeric')), -180, 180)
    if lat is None or lon is None or not matching.get('lastUpdate'):
        raise ValueError('Missing observed position or timestamp')
    observed=datetime.fromisoformat(matching['lastUpdate'].replace('Z','+00:00'))
    if observed.tzinfo is None or observed > datetime.now(timezone.utc)+timedelta(minutes=15):
        raise ValueError('Invalid observation timestamp')
    kts=number(matching.get('intensity'))
    speed=number(matching.get('movementSpeed'))  # NHC JSON uses mph, confirmed against public advisory.
    forecast_ref=matching.get('forecastAdvisory') or {}
    storm={
        'status':'active','id':matching.get('id'), 'name':matching.get('name'),
        'classification':matching.get('classification'),
        'lat':float(lat),'lon':float(lon),
        'winds_kts':kts,
        'winds_kmh':round(kts*1.852) if kts is not None else None,
        'winds_mph':round(kts*1.15078) if kts is not None else None,
        'movement_kmh':round(speed*1.609344,1) if speed is not None else None,
        'movement_mph':speed,
        'movement_degrees':number(matching.get('movementDir'),0,360),
        'pressure_mb':number(matching.get('pressure'),800,1100),
        'last_update':matching.get('lastUpdate'),
        'public_advisory':(matching.get('publicAdvisory') or {}).get('url'),
        'public_advisory_number':(matching.get('publicAdvisory') or {}).get('advNum'),
        'forecast_advisory':forecast_ref.get('url'),
        'forecast_issued':forecast_ref.get('issuance'),
        'forecast_discussion':(matching.get('forecastDiscussion') or {}).get('url'),
        'wind_probabilities':(matching.get('windSpeedProbabilities') or {}).get('url'),
        'forecast_graphics':(matching.get('forecastGraphics') or {}).get('url'),
        'track_kmz':(matching.get('forecastTrack') or {}).get('kmzFile'),
        'cone_kmz':(matching.get('trackCone') or {}).get('kmzFile'),
        'forecast': [],
        'forecast_error':None,
        'source':NHC_URL,
    }
    if forecast_ref.get('url') and forecast_ref.get('issuance'):
        try:
            raw=fetch_text(forecast_ref['url'])
            if not advisory_matches(raw, forecast_ref, storm['id']):
                raise ValueError('Forecast bulletin identity or issuance mismatch')
            forecast=parse_forecast_advisory(raw,forecast_ref['issuance'])
            if not forecast:raise ValueError('No explicit forecast points found')
            storm['forecast']=forecast
        except (ValueError,urllib.error.URLError,TimeoutError) as e:
            storm['forecast_error']=type(e).__name__
    from urllib.parse import urlsplit, urlunsplit
    for kind,query in [('cone','cone'),('rain','rainqpf')]:
        storm[kind+'_image_url']=None
        if storm['forecast_graphics']:
            try:
                base=urlsplit(storm['forecast_graphics'])
                page=urlunsplit((base.scheme,base.netloc,base.path,query,''))
                storm[kind+'_image_url']=graphic_image_url(fetch_text(page),storm['id'],kind)
            except (ValueError,urllib.error.URLError,TimeoutError):
                pass  # Missing imagery must never prevent an advisory update.
    return storm

def get_local_forecast(lat,lon):
    from urllib.parse import urlencode
    query=urlencode({'latitude':lat,'longitude':lon,
        'hourly':'precipitation_probability,precipitation,wind_speed_10m,wind_gusts_10m',
        'forecast_days':3,'timezone':'America/Mexico_City','wind_speed_unit':'kmh'})
    j=fetch_json(OM_URL+'?'+query)
    hourly=j['hourly']; now=datetime.now(LOCAL_TZ)
    future=[]
    start=now.replace(minute=0, second=0, microsecond=0)
    for i,s in enumerate(hourly['time']):
        dt=datetime.fromisoformat(s).replace(tzinfo=LOCAL_TZ)
        if start<=dt<start+timedelta(hours=24):
            future.append({'time':dt.isoformat(),
                'rain_mm':hourly['precipitation'][i],
                'rain_probability':hourly['precipitation_probability'][i],
                'wind_kmh':hourly['wind_speed_10m'][i],
                'gust_kmh':hourly['wind_gusts_10m'][i]})
    if len(future) != 24 or len({x['time'] for x in future}) != 24:
        raise ValueError('Incomplete 24-hour forecast')
    for x in future:
        for field in ('rain_mm','rain_probability','wind_kmh','gust_kmh'):
            x[field]=number(x[field],0,100 if field=='rain_probability' else float('inf'))
    def total(field):
        values=[x[field] for x in future]
        return round(sum(values),1) if all(x is not None for x in values) else None
    def peak(field):
        values=[x[field] for x in future]
        return round(max(values)) if all(x is not None for x in values) else None
    # Retrieval time is NOT the model run's issuance time. Never call it issued.
    return {'retrieved_at':datetime.now(timezone.utc).isoformat(),'hourly':future,
       'period_start':start.isoformat(),'period_end':(start+timedelta(hours=24)).isoformat(),
       'rain24h_mm':total('rain_mm'),
       'max_wind24h_kmh':peak('wind_kmh'),
       'max_gust24h_kmh':peak('gust_kmh'),
       'max_rain_probability':peak('rain_probability'),
       'rain_window':next((x['time'] for x in future if (x['rain_probability'] or 0)>=60 and (x['rain_mm'] or 0)>=1.0),None)}

def main():
    result={'schema_version':1,'checked_at':datetime.now(timezone.utc).isoformat(),
        'mode':'live','storm':None,'communities':{},'errors':[],
        'weather_source':'https://open-meteo.com/','nhc_source':NHC_URL}
    try:result['storm']=get_storm()
    except Exception as e:result['errors'].append('NHC source unavailable: '+type(e).__name__)
    for key,name,lat,lon in COMMUNITIES:
        try:result['communities'][key]=get_local_forecast(lat,lon)
        except Exception as e:
            result['communities'][key]={'error':type(e).__name__}
            result['errors'].append('Weather model unavailable for '+key)
    # Preserve last verified observation if NHC temporarily fails, but show original timestamp.
    if not result['storm'] and DATA.exists():
        try:
            previous=json.loads(DATA.read_text(encoding='utf8'))
            old=previous.get('storm')
            if (previous.get('mode')=='live' and old and old.get('status')=='active'
                    and old.get('last_update') and old.get('source')==NHC_URL):
                result['storm']=old
                result['errors'].append('Displaying last verified NHC advisory (source unavailable)')
        except (OSError,ValueError):pass
    DATA.parent.mkdir(parents=True,exist_ok=True)
    DATA.write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf8')
    print('Saved '+str(DATA)+'; storm: '+str(result['storm'] and result['storm'].get('status'))+
          '; communities: '+str(len(result['communities']))+'; errors: '+str(len(result['errors'])))

if __name__=='__main__':main()
