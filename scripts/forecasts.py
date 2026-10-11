"""Attributable bulletin excerpts. Fail closed on identity, date or layout changes."""
import re
from datetime import datetime, timezone, timedelta
from html import unescape
from html.parser import HTMLParser
from zoneinfo import ZoneInfo

SMN_URL = 'https://smn.conagua.gob.mx/es/pronosticos/pronosticossubmenu/pronostico-meteorologico-general'
class Text(HTMLParser):
    def __init__(self):
        super().__init__(); self.parts=[]; self.skip=0
    def handle_starttag(self,tag,attrs):
        if tag in ('script','style'): self.skip+=1
        if tag in ('p','br','div','tr','h1','h2','h3'): self.parts.append('\n')
    def handle_endtag(self,tag):
        if tag in ('script','style'): self.skip=max(0,self.skip-1)
        if tag in ('p','div','tr'): self.parts.append('\n')
    def handle_data(self,s):
        if not self.skip:self.parts.append(s)
def plain(raw):
    p=Text();p.feed(raw);return unescape(''.join(p.parts)).replace('\xa0',' ')
def clean(s):return re.sub(r'\s+',' ',s).strip()
def current(issued,hours):
    age=datetime.now(timezone.utc)-issued
    if not -timedelta(minutes=15)<=age<=timedelta(hours=hours):raise ValueError('Bulletin outside freshness window')
def parse_nhc(raw,ref,storm_id):
    text=plain(raw)
    if storm_id.upper() not in text.upper():raise ValueError('Wrong storm')
    stamp=re.search(r'(\d{1,4}) (AM|PM) (CST|CDT|EDT|EST|PDT|PST|MDT|MST) \w+ (\w+) (\d{1,2}) (\d{4})',text)
    if not stamp:raise ValueError('No issue time')
    clock,ampm,zone,month,day,year=stamp.groups();clock=clock.zfill(4)
    offsets={'CST':-6,'CDT':-5,'EDT':-4,'EST':-5,'PDT':-7,'PST':-8,'MDT':-6,'MST':-7}
    issued=datetime.strptime(f'{clock} {ampm} {month} {day} {year}','%I%M %p %b %d %Y').replace(tzinfo=timezone(timedelta(hours=offsets[zone])))
    if issued!=datetime.fromisoformat(ref['issuance'].replace('Z','+00:00')):raise ValueError('Issue mismatch')
    current(issued,9)
    def section(start,end):
        m=re.search(start+r'\s*\n[-]+\s*\n(.*?)'+end,text,re.S)
        if not m:raise ValueError('Missing bulletin section')
        return m.group(1).strip()
    outlook=section('DISCUSSION AND OUTLOOK','HAZARDS AFFECTING LAND')
    hazards=section('HAZARDS AFFECTING LAND','NEXT ADVISORY')
    def hazard(label):
        m=re.search(r'\b'+label+r':\s*(.*?)(?:\n\s*\n|$)',hazards,re.S)
        return clean(m.group(1)) if m else None
    timing=re.search(r'On\s+the\s+forecast\s+track,.*?(?=\n\s*\n|$)',outlook,re.S)
    if not timing:raise ValueError('No forecast timing')
    return {'status':'available','issued_at':issued.isoformat(),'source':ref['url'],'language':'en',
        'timing':clean(timing.group()),'rain':hazard('RAINFALL'),'wind':hazard('WIND'),
        'coast':' '.join(filter(None,[hazard('STORM SURGE'),hazard('SURF')])),
        'details':clean(outlook),'warnings':clean(section('WATCHES AND WARNINGS','DISCUSSION AND OUTLOOK'))}

def parse_smn(raw):
    text=plain(raw)
    m=re.search(r'Ciudad de México\s+a\s+(\d{1,2}) de (\w+) del? (\d{4}).*?Emisión:\s*(\d{2}):(\d{2})h',text,re.S|re.I)
    if not m:raise ValueError('No SMN issue time')
    day,month,year,hour,minute=m.groups()
    months='enero febrero marzo abril mayo junio julio agosto septiembre octubre noviembre diciembre'.split()
    issued=datetime(int(year),months.index(month.lower())+1,int(day),int(hour),int(minute),tzinfo=ZoneInfo('America/Mexico_City'))
    current(issued,24)
    # Bound extraction to forecast text; never navigation or other page material.
    body=text[m.end():]
    first=re.search(r'Para hoy,.*?(?=Por otro lado|Por último|El Servicio Meteorológico)',body,re.S)
    rain=re.search(r'Pronóstico de lluvias para hoy.*?:\s*(.*?)(?=Pronóstico de temperaturas)',body,re.S)
    wind=re.search(r'Pronóstico de viento y oleaje para hoy.*?:\s*(.*?)(?=Pronóstico por regiones)',body,re.S)
    region=re.search(r'Pacífico Centro:(.*?)(?=Pacífico Sur:)',body,re.S)
    if not all([first,rain,wind,region]):raise ValueError('SMN layout changed')
    def lines(block,prefix):
        return [clean(x) for x in block.splitlines() if re.match(prefix,x.strip(),re.I) and 'Jalisco' in x]
    rains=lines(rain.group(1),r'Lluvias|Chubascos|Intervalos'); winds=lines(wind.group(1),'Viento');coast=lines(wind.group(1),'Oleaje|Marea')
    if not rains or not winds:raise ValueError('No Jalisco forecast')
    timing=clean(first.group()).split('. ')[0]+'.'
    return {'status':'available','issued_at':issued.isoformat(),'source':SMN_URL,'language':'es',
        'timing':timing,'rain':' '.join(rains),'wind':' '.join(winds),'coast':' '.join(coast),
        'details':clean(region.group(1)), 'warnings':None}

SMN_MAP_URL='https://smn.conagua.gob.mx/tools/GUI/PortalLaravel/public/WebAviso'
def parse_smn_track(raw,storm_name):
    text=clean(plain(raw))
    identity=re.search(r'Sistema ciclónico:\s*([\wÁÉÍÓÚáéíóú]+)',text)
    if not identity or identity.group(1).casefold()!=storm_name.casefold():raise ValueError('Different storm on SMN map page')
    stamp=re.search(r'Emisión:\s*(\d{4}-\d{2}-\d{2} \d{2}:\d{2}) horas',text)
    if not stamp:raise ValueError('Missing map issue time')
    issued=datetime.strptime(stamp.group(1),'%Y-%m-%d %H:%M').replace(tzinfo=ZoneInfo('America/Mexico_City'));current(issued,9)
    image=re.search(r'''src=["']\./WebImg/(ImgTray\d+\.(?:jpg|png))["']''',raw)
    if not image:raise ValueError('Missing official track image')
    return {'url':SMN_MAP_URL.rsplit('/',1)[0]+'/WebImg/'+image.group(1),'issued_at':issued.isoformat(),'storm':identity.group(1)}
