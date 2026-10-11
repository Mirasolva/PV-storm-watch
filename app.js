(function () {
  'use strict';
  const localeKey = 'bahia-watch-lang';
  const T = {
    en: {
      navTrack:'Storm track',navCommunities:'Communities',navCameras:'Live cameras',share:'Share',nhcLink:'NHC advisory',
      eyebrow:'PUERTO VALLARTA & BANDERAS BAY',heroTitle1:'Know the storm.',heroTitle2:'Know your coast.',
      heroDescription:'Official hurricane positions from NOAA, local weather-model estimates, and cameras along the bay in one place.',
      viewTrack:'Explore track',viewCameras:'View webcams',currentSituation:'CURRENT SITUATION',officialObservation:'Official observation',
      safetyTitle:'Important:',safetyText:'A hurricane center does not have to cross your location to cause dangerous rain, surf, floods, or landslides. Follow official alerts and evacuation orders.',officialAlerts:'Official alerts',
      metricMove:'MOVING',metricWind:'CORE WINDS',metricPressure:'PRESSURE',metricCoordinates:'CURRENT CENTER',kmh:'km/h',coreWarning:'At storm center, not your town',centralPressure:'Minimum central pressure',coordinatesNote:'Official center coordinates',
      section01:'01 / STORM TRAJECTORY',mapHeading:'Where is the eye headed?',openNOAA:'Open official NHC map',currentEye:'Latest center',forecastEye:'Forecast center',townPin:'Communities',
      mapFootnote:'Dots and line represent forecast center positions, not the boundaries of wind or rain. Forecast points are not interpolated. Always review the official NHC cone of uncertainty.',
      trackInterpretation:'FORECAST INTERPRETATION',centerNotImpact:"The eye's path is not the same as the storm's impact.",forecastPositions:'Official forecast points',forecastLoading:'Loading NHC forecast positions...',arrivalLimit:'Arrival-time limitation',arrivalCaveat:'Neighborhood rain estimates are model-based. They are not predictions that the hurricane eye will arrive in every community.',certaintyTitle:'What remains uncertain',certaintyText:'Small changes in the track can change local risk significantly. Rainbands and gusts can arrive ahead of the center.',readForecast:'Read official forecast',
      section02:'02 / LOCAL IMPACTS',communitiesHeading:'Your coast, community by community.',communitySubtitle:'Model forecasts for rain and wind. Distinct from the official NHC forecast of the eye\'s location.',
      modelDisclosure:'Open-Meteo estimates may substantially underpredict hurricane winds or localized intense rainfall. Numbers are not observations or guarantees. For safety decisions, prioritize NHC, CONAGUA and Proteccion Civil.',
      section03:'03 / EYES ON THE COAST',camerasHeading:'Live camera directory',cameraSubtitle:'Public camera links to observe conditions. A labeled camera may be temporarily offline; always verify its playback timestamp.',videoCaution:'NOT WEATHER INSTRUMENTS',
      clickToLoad:"Tap play to load El Dorado's YouTube stream",featuredCamera:'FEATURED CAMERA / VERIFIED LOCATION',elDoradoLocation:'Los Muertos Beach, next to the pier, Puerto Vallarta',elDoradoDescription:'Beachfront view toward Los Muertos Pier and Banderas Bay. Camera operated by El Dorado Restaurant.',watchOnYoutube:'Watch on YouTube',officialCameraPage:'Official camera page',
      section04:'04 / TRUSTED INFORMATION',sourcesHeading:'Go to the source.',sourcesIntro:'NHC storm and Open-Meteo model data are retrieved automatically. Mexican authorities are linked directly for official local bulletins and evacuation notices, which are not automatically verified by this site.',
      sourceNHC:'Official track, coordinates, intensity and warnings',sourceSMN:'Mexican rainfall and marine advisories',sourcePC:'Local evacuation, shelter and emergency information',sourceModel:'Supplemental hourly neighborhood weather models',automatic:'AUTOMATIC DATA',directLink:'DIRECT OFFICIAL LINK',
      footerInfo:'Free community dashboard. Not an official warning system. Do not use it as your sole source for life-safety decisions.',
      sample:'DEMO SNAPSHOT',checked:'LAST CHECKED',stale:'OLD DATA - VERIFY WITH NHC',live:'MOST RECENT CHECK',noStorm:'NO ACTIVE SIMON ADVISORY',unavailable:'DATA UNAVAILABLE',
      category:'Category',tropicalStorm:'Tropical storm',depression:'Tropical depression',postTropical:'Post-tropical',unknown:'Unknown',
      forecastNone:'An official forecast track could not be parsed. Use the NHC link for the latest authoritative map.',
      closest:'Closest shown forecast center to Garza Blanca:',roughDistance:'approx.',forecastCaution:'These are discrete NHC forecast points, not an exact closest-approach calculation.',
      modelForecast:'WEATHER MODEL',rain24:'Rain next 24h',windMax:'Model wind peak',rainStart:'Possible heavier rain from',rainUnknown:'No confident onset hour available',
      waiting:'Forecast data not available yet',notOfficial:'Not an official warning',viewCamera:'Open camera',cameraOfficial:'OPERATOR CAMERA',cameraDirectory:'DIRECTORY LINK',
      cardRiskGarza:'Hillside drainage, falling debris, coastal waves and Highway 200 access.',
      cardRiskMismaloya:'Steep slopes, flash flooding, coastal waves and road access.',
      cardRiskBoca:'River mouth, high surf, stream flooding and access roads.',
      cardRiskJuntas:'River crossings, fast runoff, mountain slopes and Highway 200.',
      cardRiskPv:'Low-lying streets, floodwater, beachfront surf and road conditions.',
      copied:'Link copied to clipboard',sharing:'Share Bahia Storm Watch',shareMessage:'Official hurricane updates, Banderas Bay community forecasts and public coastal webcams:',
      shortSouth:'SOUTH BAY',shortCentral:'SOUTH / CITY',shortDirectory:'OTHER CAMERAS',
      namedGarza:'Garza Blanca / Villa Marta',namedMismaloya:'Mismaloya',namedBoca:'Boca de Tomatlan',namedJuntas:'Las Juntas y los Veranos',namedPv:'Puerto Vallarta Centro',
      parkRoyalDescription:'Operator webcam at Grand Park Royal, by Las Gemelas beach.',garzaCamDescription:'Official beach and bay view from Garza Blanca, close to Villa Marta.',mousaiCamDescription:'Official live-view page from Hotel Mousai in the southern hotel zone.',otherCamsDescription:'Additional camera listings including Las Gemelas and Conchas Chinas. Availability can change.',
      timeLocal:'Local time',asOf:'As of',coordinates:'Coordinates',movement:'Moving',forecastDot:'Forecast point',noCenter:'No current coordinates',lastChecked:'Data checked',hours:'hours',rainProb:'rain probability',warningOld:'This is old data; check NHC directly before making safety decisions.',
      viewSource:'Source',soon:'Available after first scheduled data refresh',readMore:'Read more',
    },
    es: {
      navTrack:'Trayectoria',navCommunities:'Comunidades',navCameras:'C\u00e1maras en vivo',share:'Compartir',nhcLink:'Aviso del NHC',
      eyebrow:'PUERTO VALLARTA Y BAH\u00cdA DE BANDERAS',heroTitle1:'Conoce la tormenta.',heroTitle2:'Protege tu costa.',
      heroDescription:'Posiciones oficiales del hurac\u00e1n seg\u00fan NOAA, pron\u00f3sticos meteorol\u00f3gicos locales y c\u00e1maras de la bahia en un solo lugar.',
      viewTrack:'Ver trayectoria',viewCameras:'Ver c\u00e1maras',currentSituation:'SITUACI\u00d3N ACTUAL',officialObservation:'Observaci\u00f3n oficial',
      safetyTitle:'Importante:',safetyText:'No es necesario que el ojo del hurac\u00e1n cruce una comunidad para provocar lluvias, oleaje, inundaciones o deslaves peligrosos. Sigue las alertas oficiales y \u00f3rdenes de evacuaci\u00f3n.',officialAlerts:'Alertas oficiales',
      metricMove:'DESPLAZAMIENTO',metricWind:'VIENTOS EN EL N\u00daCLEO',metricPressure:'PRESI\u00d3N',metricCoordinates:'CENTRO ACTUAL',kmh:'km/h',coreWarning:'En el centro, no en tu comunidad',centralPressure:'Presion central m\u00ednima',coordinatesNote:'Coordenadas oficiales del centro',
      section01:'01 / TRAYECTORIA DEL HURAC\u00c1N',mapHeading:'Hacia d\u00f3nde se dirige el ojo?',openNOAA:'Abrir mapa oficial NHC',currentEye:'Ultimo centro',forecastEye:'Centro pronosticado',townPin:'Comunidades',
      mapFootnote:'Los puntos y la l\u00ednea representan posiciones pronosticadas del centro, no los l\u00edmites del viento o la lluvia. No se interpolan los puntos. Consulta el cono de incertidumbre del NHC.',
      trackInterpretation:'COMO INTERPRETAR EL PRON\u00d3STICO',centerNotImpact:'La trayectoria del ojo no es igual al impacto del hurac\u00e1n.',forecastPositions:'Puntos oficiales del pron\u00f3stico',forecastLoading:'Cargando posiciones pronosticadas del NHC...',arrivalLimit:'Limitaciones de horarios',arrivalCaveat:'Las horas de lluvia por comunidad son estimaciones de un modelo meteorol\u00f3gico. No indican que el ojo llegara a cada poblacion.',certaintyTitle:'Lo que a\u00fan no se sabe',certaintyText:'Pequenos cambios de trayectoria pueden modificar mucho el riesgo local. Las bandas de lluvia y r\u00e1fagas pueden llegar antes del centro.',readForecast:'Leer pron\u00f3stico oficial',
      section02:'02 / IMPACTOS LOCALES',communitiesHeading:'Nuestra costa, comunidad por comunidad.',communitySubtitle:'Pron\u00f3sticos modelados de lluvia y viento, diferentes de la ubicaci\u00f3n oficial prevista para el ojo.',
      modelDisclosure:'Los modelos de Open-Meteo pueden subestimar mucho los vientos del hurac\u00e1n o las lluvias intensas locales. No son mediciones ni garantias. Para decisiones de seguridad, consulta NHC, CONAGUA y Proteccion Civil.',
      section03:'03 / VISTAS DE LA COSTA',camerasHeading:'Directorio de c\u00e1maras en vivo',cameraSubtitle:'Enlaces a c\u00e1maras p\u00fablicas para observar condiciones. Algunas pueden quedar fuera de servicio; revisa siempre la fecha y hora del video.',videoCaution:'NO SON INSTRUMENTOS METEOROLOGICOS',
      clickToLoad:'Presiona reproducir para abrir la transmision de El Dorado',featuredCamera:'C\u00c1MARA DESTACADA / UBICACI\u00d3N VERIFICADA',elDoradoLocation:'Playa Los Muertos, junto al muelle, Puerto Vallarta',elDoradoDescription:'Vista frente al mar hacia el muelle de Los Muertos y la Bah\u00eda de Banderas. C\u00e1mara operada por el restaurante El Dorado.',watchOnYoutube:'Ver en YouTube',officialCameraPage:'Pagina oficial de la c\u00e1mara',
      section04:'04 / INFORMACI\u00d3N CONFIABLE',sourcesHeading:'Consulta las fuentes originales.',sourcesIntro:'Los datos del NHC y los modelos de Open-Meteo se descargan autom\u00e1ticamente. Las autoridades mexicanas se enlazan directamente para consultar boletines y avisos de evacuaci\u00f3n, que esta pagina no verifica autom\u00e1ticamente.',
      sourceNHC:'Trayectoria, coordenadas, intensidad y avisos oficiales',sourceSMN:'Avisos de lluvia y pron\u00f3sticos maritimos en Mexico',sourcePC:'Avisos locales de evacuaci\u00f3n, refugios y emergencias',sourceModel:'Modelos horarios complementarios por comunidad',automatic:'DATOS AUTOM\u00c1TICOS',directLink:'ENLACE OFICIAL DIRECTO',
      footerInfo:'Panel comunitario gratuito, no es un sistema oficial de alertas. No lo uses como \u00fanica fuente para decisiones sobre tu seguridad.',
      sample:'MUESTRA DE DEMOSTRACION',checked:'\u00daLTIMA CONSULTA',stale:'DATOS ANTIGUOS - VERIFICA CON NHC',live:'\u00daLTIMA CONSULTA',noStorm:'SIN AVISO ACTIVO DE SIMON',unavailable:'DATOS NO DISPONIBLES',
      category:'Categor\u00eda',tropicalStorm:'Tormenta tropical',depression:'Depresion tropical',postTropical:'Postropical',unknown:'Desconocido',
      forecastNone:'No se pudo procesar la trayectoria oficial. Abre el enlace del NHC para ver su mapa actualizado.',
      closest:'Centro pronosticado m\u00e1s cercano a Garza Blanca, entre los puntos mostrados:',roughDistance:'aprox.',forecastCaution:'Son puntos individuales del pron\u00f3stico del NHC; no es un calculo exacto de m\u00e1xima aproximacion.',
      modelForecast:'MODELO METEOROLOGICO',rain24:'Lluvia pr\u00f3x. 24 h',windMax:'Pico de viento (modelo)',rainStart:'Lluvia fuerte posible desde',rainUnknown:'Sin hora confiable de inicio',
      waiting:'A\u00fan no hay pron\u00f3stico disponible',notOfficial:'No es un aviso oficial',viewCamera:'Abrir c\u00e1mara',cameraOfficial:'C\u00c1MARA DEL OPERADOR',cameraDirectory:'ENLACE A DIRECTORIO',
      cardRiskGarza:'Drenaje de ladera, derrumbes, oleaje y acceso por carretera 200.',
      cardRiskMismaloya:'Laderas, inundaciones repentinas, oleaje y accesos carreteros.',
      cardRiskBoca:'Desembocadura del r\u00edo, alto oleaje, crecidas y caminos.',
      cardRiskJuntas:'Cruces de r\u00edo, escurrimientos, laderas y carretera 200.',
      cardRiskPv:'Calles bajas, inundaciones, oleaje y condiciones viales.',
      copied:'Enlace copiado',sharing:'Compartir Bah\u00eda Storm Watch',shareMessage:'Informacion oficial del hurac\u00e1n, pron\u00f3sticos locales y c\u00e1maras en la Bah\u00eda de Banderas:',
      shortSouth:'BAH\u00cdA SUR',shortCentral:'SUR / CIUDAD',shortDirectory:'MAS C\u00c1MARAS',
      namedGarza:'Garza Blanca / Villa Marta',namedMismaloya:'Mismaloya',namedBoca:'Boca de Tomatl\u00e1n',namedJuntas:'Las Juntas y los Veranos',namedPv:'Puerto Vallarta Centro',
      parkRoyalDescription:'C\u00e1mara del hotel Grand Park Royal, en la zona de playa Las Gemelas.',garzaCamDescription:'Vista oficial de playa y bahia en Garza Blanca, cerca de Villa Marta.',mousaiCamDescription:'Pagina oficial de c\u00e1mara en vivo del Hotel Mousai en la zona hotelera sur.',otherCamsDescription:'Directorio de otras c\u00e1maras como Las Gemelas y Conchas Chinas. Su disponibilidad puede cambiar.',
      timeLocal:'Hora local',asOf:'Al',coordinates:'Coordenadas',movement:'Se mueve',forecastDot:'Punto pronosticado',noCenter:'Sin coordenadas actuales',lastChecked:'Datos consultados',hours:'horas',rainProb:'probabilidad de lluvia',warningOld:'Estos datos son antiguos; consulta directamente NHC antes de tomar decisiones de seguridad.',
      viewSource:'Fuente',soon:'Disponible despues de la primera actualizacion automatica',readMore:'Leer m\u00e1s',
    }
  };


  Object.assign(T.en, {
    mapUnavailable:'Interactive map unavailable. Use the official NOAA map.',
    demoWarning:'DEMONSTRATION ONLY — these sample values are not live storm information.',
    partialData:'Some sources could not be refreshed. Unavailable community forecasts are hidden. Check official sources.',
    refreshError:'The latest site data could not be downloaded. Any remaining numbers are from the previous check.',
    gustMax:'Model gust peak',rainChance:'Peak hourly rain chance',
    modelRetrieved:'Model data retrieved',forecastPeriod:'Forecast window',
    modelUnavailable:'Current model data unavailable. Consult official forecasts.',
    potentialCyclone:'Potential tropical cyclone',otherCameras:'Other bay cameras',
    forecastIssued:'NHC forecast issued',
    inactiveExplanation:'Simon is absent from the latest NHC active-storm list. This is not an all-clear for local hazards.',
    rain24:'Modeled rain / 24h window',rainStart:'Possible heavier rain period',
    coreWarning:'Maximum sustained cyclone winds, not local wind',
    modelLicense:'Weather data: Open-Meteo (CC BY 4.0). Hourly data summarized into 24-hour totals and peaks.'
  });
  Object.assign(T.es, {
    mapUnavailable:'Mapa interactivo no disponible. Consulta el mapa oficial de NOAA.',
    demoWarning:'SOLO DEMOSTRACIÓN — estos valores de muestra no son información actual de la tormenta.',
    partialData:'No se pudieron actualizar algunas fuentes. Los pronósticos locales no disponibles se ocultan. Consulta las fuentes oficiales.',
    refreshError:'No se pudieron descargar los datos más recientes. Los valores restantes son de la consulta anterior.',
    gustMax:'Ráfaga máxima (modelo)',rainChance:'Prob. horaria máxima de lluvia',
    modelRetrieved:'Datos del modelo consultados',forecastPeriod:'Periodo del pronóstico',
    modelUnavailable:'Datos actuales del modelo no disponibles. Consulta los pronósticos oficiales.',
    potentialCyclone:'Ciclón tropical potencial',otherCameras:'Otras cámaras de la bahía',
    forecastIssued:'Pronóstico NHC emitido',
    inactiveExplanation:'Simon no aparece en la lista más reciente de ciclones activos del NHC. Esto no significa que no haya peligros locales.',
    rain24:'Lluvia modelada / periodo de 24 h',rainStart:'Periodo posible de lluvia más fuerte',
    coreWarning:'Viento sostenido máximo del ciclón, no viento local',
    modelLicense:'Datos meteorológicos: Open-Meteo (CC BY 4.0). Datos horarios resumidos en totales y máximos de 24 horas.'
  });

  const towns=[
    {key:'garza',name:'namedGarza',risk:'cardRiskGarza',lat:20.5543,lon:-105.2637,number:'01'},
    {key:'mismaloya',name:'namedMismaloya',risk:'cardRiskMismaloya',lat:20.5293,lon:-105.2866,number:'02'},
    {key:'boca',name:'namedBoca',risk:'cardRiskBoca',lat:20.51246,lon:-105.31494,number:'03'},
    {key:'juntas',name:'namedJuntas',risk:'cardRiskJuntas',lat:20.4830,lon:-105.2924,number:'04'},
    {key:'pv',name:'namedPv',risk:'cardRiskPv',lat:20.6067,lon:-105.235,number:'05'}
  ];
  Object.assign(T.en, {camerasHeading:'Watch the coast', cameraSubtitle:'Watch cameras right here. Tap a camera to start; switching cameras stops the previous stream. Availability can change—check the camera’s timestamp.', watchHere:'Watch here', closeCamera:'Close video', cameraHelp:'If the player stays blank or reports offline, try another camera.', cameraCredit:'Camera by', cameraDirect:'DIRECT PLAYER'});
  Object.assign(T.es, {camerasHeading:'Mira la costa', cameraSubtitle:'Mira las cámaras aquí. Toca una para comenzar; al cambiar, se detiene la anterior. La disponibilidad puede cambiar: revisa la fecha y hora de la cámara.', watchHere:'Ver aquí', closeCamera:'Cerrar video', cameraHelp:'Si el reproductor queda en blanco o indica que está desconectado, prueba otra cámara.', cameraCredit:'Cámara de', cameraDirect:'REPRODUCTOR DIRECTO'});
  const cameraItems=[
    {name:'Las Gemelas / Grand Park Royal',credit:'Webcams de México / Grand Park Royal',embed:'https://www.youtube-nocookie.com/embed/V6Co4YdL25Q?autoplay=1&mute=1&rel=0'},
    {name:'Los Muertos / Daiquiri Dick’s',credit:'Insider WiFi / Daiquiri Dick’s',embed:'https://g3.ipcamlive.com/player/player.php?alias=662abcbe448a7&autoplay=1'},
    {name:'Malecón / Faro',credit:'Insider WiFi / Macaria',embed:'https://g3.ipcamlive.com/player/player.php?alias=662ab99645bff&autoplay=1'},
    {name:'Marina Vallarta / Marina Towers',credit:'Marina Towers',embed:'https://g3.ipcamlive.com/player/player.php?alias=66a9475306b30&autoplay=1'},
    {name:'Los Muertos / Vallarta Shores',credit:'Vallarta Shores',embed:'https://v.angelcam.com/iframe?v=51eyob6nr8'}
  ];
  let cameraLanguage=null;
  let savedLanguage='en';
  try { savedLanguage=localStorage.getItem(localeKey)||'en'; } catch (_) {}
  const requestedLanguage=new URLSearchParams(location.search).get('lang');
  let lang=['en','es'].includes(requestedLanguage)?requestedLanguage:(savedLanguage==='es'?'es':'en');
  const unitsKey='bahia-watch-units';
  let units='metric';
  try { units=localStorage.getItem(unitsKey)==='us'?'us':'metric'; } catch (_) {}
  const requestedUnits=new URLSearchParams(location.search).get('units');
  if(['metric','us'].includes(requestedUnits))units=requestedUnits;
  function unitLabel(kind){return ({speed:units==='us'?'mph':'km/h',rain:units==='us'?'in':'mm',pressure:units==='us'?'inHg':'mb',distance:units==='us'?'mi':'km'})[kind];}
  function measurement(value,kind){
    if(value==null||value===''||!Number.isFinite(Number(value)))return '--';
    const converted=Number(value)*(units==='us'?({speed:1/1.609344,rain:1/25.4,pressure:1/33.8638866667,distance:1/1.609344})[kind]:1);
    const digits=kind==='distance'?0:kind==='pressure'?(units==='us'?2:0):kind==='rain'?(units==='us'?2:1):1;
    return new Intl.NumberFormat(lang==='es'?'es-MX':'en-US',{maximumFractionDigits:digits}).format(converted);
  }
  function renderUnits(){
    setText('unitsLabel',lang==='es'?'Unidades':'Units');
    document.querySelectorAll('[data-units]').forEach(button=>{button.setAttribute('aria-pressed',String(button.dataset.units===units));button.textContent=button.dataset.units==='metric'?(lang==='es'?'Métrico':'Metric'):(lang==='es'?'EE. UU. / Estándar':'US / Standard');});
    document.querySelectorAll('[data-unit-label]').forEach(node=>node.textContent=unitLabel(node.dataset.unitLabel));
  }
  let latest=null, map=null, mapLayers=[], refreshFailed=false;
  const byId=id=>document.getElementById(id);
  const t=key=>(T[lang][key]||T.en[key]||key);
  function setText(id,s){const el=byId(id);if(el)el.textContent=s===undefined||s===null?'--':String(s);}
  function safeUrl(candidate){try{const u=new URL(candidate);return u.protocol==='https:'&&u.hostname.endsWith('.noaa.gov')?u.href:null;}catch(_){return null;}}
  function localTime(iso,showDate=true){if(!iso)return '--';const dt=new Date(iso);if(Number.isNaN(dt.valueOf()))return '--';return new Intl.DateTimeFormat(lang==='es'?'es-MX':'en-US',{timeZone:'America/Mexico_City',weekday:showDate?'short':undefined,month:showDate?'short':undefined,day:showDate?'numeric':undefined,hour:'numeric',minute:'2-digit',hour12:true}).format(dt);}
  function direction(bearing){if(bearing===undefined||bearing===null||Number.isNaN(Number(bearing)))return '--';const dirs=lang==='es'?['N','NNE','NE','ENE','E','ESE','SE','SSE','S','SSO','SO','OSO','O','ONO','NO','NNO']:['N','NNE','NE','ENE','E','ESE','SE','SSE','S','SSW','SW','WSW','W','WNW','NW','NNW'];return dirs[Math.round(Number(bearing)/22.5)%16]+' ('+Math.round(Number(bearing))+'\u00b0)';}
  function stormCategory(s){if(!s||s.status!=='active')return t('unavailable');const k=s.winds_kts ?? (s.winds_mph==null?null:s.winds_mph/1.15078);if(s.classification==='HU')return k==null?t('unknown'):t('category')+' '+(k>=137?5:k>=113?4:k>=96?3:k>=83?2:1);if(s.classification==='TS')return t('tropicalStorm');if(s.classification==='TD')return t('depression');if(s.classification==='PTC')return t('postTropical');if(s.classification==='POT')return t('potentialCyclone');return t('unknown');}
  function haversine(a,b,c,d){const R=6371,rad=Math.PI/180;const dl=(c-a)*rad,dp=(d-b)*rad;const q=Math.sin(dl/2)**2+Math.cos(a*rad)*Math.cos(c*rad)*Math.sin(dp/2)**2;return 2*R*Math.asin(Math.sqrt(q));}
  function toast(message){const node=byId('toast');node.textContent=message;node.classList.add('visible');setTimeout(()=>node.classList.remove('visible'),2800);}
  function refreshStaticText(){document.documentElement.lang=lang;byId('shareButton').setAttribute('aria-label',t('share'));byId('loadVideo').setAttribute('aria-label',t('clickToLoad')); document.querySelectorAll('[data-i18n]').forEach(node=>node.textContent=t(node.dataset.i18n));document.querySelectorAll('.lang-switch button').forEach(btn=>btn.setAttribute('aria-pressed',String(btn.dataset.lang===lang)));document.title=lang==='es'?'Bahia Storm Watch | Monitor de Huracanes':'Bahia Storm Watch | Hurricane Tracker';renderAll();}
  function updateFreshness(){const strip=document.querySelector('.notice-rail');strip.classList.remove('stale');if(!latest){setText('freshLabel',t('unavailable'));setText('lastUpdated','--');return;}const demo=latest.mode!=='live';const age=(Date.now()-new Date(latest.checked_at).getTime())/3600000;const advisoryAge=latest.storm&&latest.storm.last_update?(Date.now()-new Date(latest.storm.last_update).getTime())/3600000:0;const nhcUnavailable=!latest.storm || (latest.errors||[]).some(x=>String(x).includes('NHC source unavailable'));const old=!Number.isFinite(age)||age < -0.25||age>1.5||!Number.isFinite(advisoryAge)||advisoryAge < -0.25||advisoryAge>6||nhcUnavailable||refreshFailed;if(demo||old)strip.classList.add('stale');setText('freshLabel',demo?t('sample'):old?t('stale'):t('live'));setText('lastUpdated',t('lastChecked')+': '+localTime(latest.checked_at)+' · '+t('timeLocal'));const problem=demo?t('demoWarning'):old?t('warningOld'):(latest.errors||[]).length?t('partialData'):'';setText('dataWarning',problem);byId('dataWarning').hidden=!problem;}
  function renderStorm(){const s=latest&&latest.storm;updateFreshness();const valid=s&&s.status==='active';setText('stormName',s&&s.name?String(s.name).toUpperCase():'SIMON');setText('categoryText',valid?stormCategory(s):(!s?t('unavailable'):t('noStorm')));setText('stormLocation',valid?`${Number(s.lat).toFixed(1)}\u00b0 N  /  ${Math.abs(Number(s.lon)).toFixed(1)}\u00b0 W` : t('noCenter'));
    setText('advisoryTime',valid?localTime(s.last_update):'--');setText('metricSpeed',valid?measurement(s.movement_kmh,'speed'):'--');setText('metricDirection',valid?direction(s.movement_degrees):'--');setText('metricWindValue',valid?measurement(s.winds_kmh,'speed'):'--');setText('metricPressureValue',valid?measurement(s.pressure_mb,'pressure'):'--');setText('metricCoordinatesValue',valid?`${Number(s.lat).toFixed(1)} N, ${Math.abs(Number(s.lon)).toFixed(1)} W`:'--');
    const adv=safeUrl(s&&s.public_advisory);const forecast=safeUrl(s&&s.forecast_advisory);byId('topNHCLink').href=adv||'https://www.nhc.noaa.gov/';byId('forecastSourceLink').href=forecast||'https://www.nhc.noaa.gov/';byId('officialMapLink').href=safeUrl(s&&s.forecast_graphics)||'https://www.nhc.noaa.gov/';
  }
  function forecastPoints(s){return s&&s.status==='active'&&Array.isArray(s.forecast)?s.forecast.filter(p=>Number.isFinite(p.lat)&&Number.isFinite(p.lon)&&Math.abs(p.lat)<=90&&Math.abs(p.lon)<=180&&Date.parse(p.time)>Date.now()):[];}
  function renderForecast(){const s=latest&&latest.storm, points=forecastPoints(s);if(!points.length){setText('forecastExplanation',s&&s.status==='not_active'?t('inactiveExplanation'):t('forecastNone'));return;}
    const target=towns[0], closest=points.slice().sort((a,b)=>haversine(a.lat,a.lon,target.lat,target.lon)-haversine(b.lat,b.lon,target.lat,target.lon))[0];
    const dist=Math.round(haversine(closest.lat,closest.lon,target.lat,target.lon));
    setText('forecastExplanation',`${t('closest')} ${t('roughDistance')} ${measurement(dist,'distance')} ${unitLabel('distance')} (${localTime(closest.time)}). ${t('forecastCaution')} ${t('forecastIssued')}: ${localTime(s.forecast_issued)}.`);
  }
  function renderCommunities(){const node=byId('communityGrid');const expanded=new Set([...node.querySelectorAll('details[open]')].map(card=>card.dataset.town));node.innerHTML='';towns.forEach(item=>{const forecast=latest&&latest.communities&&latest.communities[item.key];const modelAge=forecast?(Date.now()-Date.parse(forecast.retrieved_at))/3600000:Infinity;const available=forecast&&Array.isArray(forecast.hourly)&&forecast.hourly.length===24&&Number.isFinite(modelAge)&&modelAge>=-0.25&&modelAge<=1.5&&Date.parse(forecast.period_end)>Date.now();
    const rain=available&&forecast.rain24h_mm!=null?`${measurement(forecast.rain24h_mm,'rain')} ${unitLabel('rain')}`:'--';const wind=available&&forecast.max_wind24h_kmh!=null?`${measurement(forecast.max_wind24h_kmh,'speed')} ${unitLabel('speed')}`:'--';const onset=available?(forecast.rain_window?`${t('rainStart')} ${localTime(new Date(Math.floor(Date.parse(forecast.rain_window)/(3*3600000))*3*3600000).toISOString())} – ${localTime(new Date((Math.floor(Date.parse(forecast.rain_window)/(3*3600000))+1)*3*3600000).toISOString())}`:t('rainUnknown')):t('waiting');
    const card=document.createElement('details');card.className='community-card';card.dataset.town=item.key;card.open=expanded.has(item.key);const summary=document.createElement('summary');
    const top=document.createElement('div');top.className='card-eyebrow';top.innerHTML=`<span>${t('modelForecast')}</span><span>${item.number} / 05</span>`;
    const heading=document.createElement('h3');heading.textContent=t(item.name);
    const risk=document.createElement('p');risk.className='risk';risk.textContent=t(item.risk);
    const facts=document.createElement('div');facts.className='local-numbers';const rainFact=document.createElement('div'),windFact=document.createElement('div');
    let label=document.createElement('small');label.textContent=t('rain24');let val=document.createElement('strong');val.textContent=rain;rainFact.append(label,val);
    label=document.createElement('small');label.textContent=t('windMax');val=document.createElement('strong');val.textContent=wind;windFact.append(label,val);facts.append(rainFact,windFact);
    for(const [key,value,unit] of [['gustMax',forecast&&forecast.max_gust24h_kmh,' km/h'],['rainChance',forecast&&forecast.max_rain_probability,'%']]){const fact=document.createElement('div');const l=document.createElement('small');l.textContent=t(key);const v=document.createElement('strong');v.textContent=available&&value!=null?(key==='gustMax'?measurement(value,'speed')+' '+unitLabel('speed'):value+unit):'--';fact.append(l,v);facts.append(fact);}
    const foot=document.createElement('p');foot.className='rain-start';foot.textContent=onset;
    const stamp=document.createElement('p');stamp.className='forecast-stamp';stamp.textContent=available?`${t('modelRetrieved')}: ${localTime(forecast.retrieved_at)}. ${t('forecastPeriod')}: ${localTime(forecast.period_start)} – ${localTime(forecast.period_end)}. ${t('timeLocal')}.`:t('modelUnavailable');const compactRain=document.createElement('strong');compactRain.className='compact-rain';compactRain.textContent=rain;const rainLabel=document.createElement('small');rainLabel.textContent=t('rainModelLabel');compactRain.append(rainLabel);summary.append(heading,risk,compactRain);card.append(summary,top,facts,foot,stamp);node.append(card);
  });}
  function stopCameras(){
    document.querySelectorAll('.camera-player').forEach(node=>{node.replaceChildren();node.hidden=true;});
    document.querySelectorAll('.camera-watch').forEach(button=>{button.textContent='▶ '+t('watchHere');button.setAttribute('aria-expanded','false');button.setAttribute('aria-label',t('watchHere')+': '+button.dataset.cameraName);});
    byId('embedContainer').replaceChildren();byId('embedContainer').hidden=true;byId('videoPoster').hidden=false;
  }
  function renderCameras(){
    // Weather refreshes must not interrupt a camera already playing.
    if(cameraLanguage===lang)return;
    cameraLanguage=lang;
    const node=byId('cameraGrid');node.replaceChildren();
    cameraItems.forEach((item,index)=>{
      const card=document.createElement('article');card.className='camera-card';
      const top=document.createElement('div');top.className='topline';top.textContent=t('cameraDirect');
      const title=document.createElement('h3');title.textContent=item.name;
      const credit=document.createElement('p');credit.textContent=t('cameraCredit')+': '+item.credit;
      const player=document.createElement('div');player.className='camera-player';player.id='camera-player-'+index;player.hidden=true;
      const button=document.createElement('button');button.type='button';button.dataset.cameraName=item.name;button.className='btn btn-primary camera-watch';button.textContent='▶ '+t('watchHere');button.setAttribute('aria-expanded','false');button.setAttribute('aria-controls',player.id);button.setAttribute('aria-label',t('watchHere')+': '+item.name);
      button.addEventListener('click',()=>{
        const wasOpen=!player.hidden;stopCameras();if(wasOpen)return;
        const frame=document.createElement('iframe');frame.src=item.embed;frame.title=item.name;frame.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';frame.allowFullscreen=true;frame.referrerPolicy='strict-origin-when-cross-origin';
        player.append(frame);player.hidden=false;button.textContent=t('closeCamera');button.setAttribute('aria-expanded','true');button.setAttribute('aria-label',t('closeCamera')+': '+item.name);
      });
      card.append(top,title,credit,button,player);node.append(card);
    });
    const note=document.createElement('p');note.className='camera-help';note.textContent=t('cameraHelp');node.append(note);
  }
  function clearMap(){for(const layer of mapLayers){try{map.removeLayer(layer)}catch(_){}}mapLayers=[];}
  function renderMap(){if(!window.L){byId('mapFallback').hidden=false;return;}try{if(!map){map=L.map('map',{scrollWheelZoom:false,zoomControl:false}).setView([20.38,-105.37],8);L.control.zoom({position:'topright'}).addTo(map);L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'}).addTo(map);}clearMap();const positions=[];
    for(const town of towns){const marker=L.circleMarker([town.lat,town.lon],{radius:6,weight:2,color:'#0a3643',fillColor:'#39c8ac',fillOpacity:1});marker.bindPopup(t(town.name));marker.addTo(map);mapLayers.push(marker);positions.push([town.lat,town.lon]);}
    const s=latest&&latest.storm;if(s&&s.status==='active'&&Number.isFinite(Number(s.lat))&&Number.isFinite(Number(s.lon))){const here=L.circleMarker([s.lat,s.lon],{radius:11,weight:3,color:'#faf0df',fillColor:'#df9256',fillOpacity:1});const popup=document.createElement('div');popup.textContent=`${s.name||'Simon'} · ${t('asOf')} ${localTime(s.last_update)} · ${Number(s.lat).toFixed(1)}, ${Number(s.lon).toFixed(1)}`;here.bindPopup(popup);here.addTo(map);mapLayers.push(here);positions.push([s.lat,s.lon]);
      const pts=forecastPoints(s).map(p=>({lat:Number(p.lat),lon:Number(p.lon),time:p.time}));if(pts.length){const coords=[[s.lat,s.lon],...pts.map(p=>[p.lat,p.lon])];const poly=L.polyline(coords,{color:'#ce8d52',weight:3,dashArray:'9,8',opacity:.95});poly.addTo(map);mapLayers.push(poly);pts.forEach(p=>{const dot=L.circleMarker([p.lat,p.lon],{radius:6,color:'#ffe9cc',weight:2,fillColor:'#bd804e',fillOpacity:1});dot.bindPopup(`${t('forecastDot')}<br>${localTime(p.time)}<br>${p.lat.toFixed(1)}, ${p.lon.toFixed(1)}`);dot.addTo(map);mapLayers.push(dot);positions.push([p.lat,p.lon]);});}
    }const cameras=[{name:'El Dorado / Los Muertos Pier',lat:20.5927,lon:-105.2399,link:'https://www.eldoradopvr.com/live-stream'},
      {name:'Las Gemelas webcam',lat:20.5481,lon:-105.2732,link:'https://www.youtube.com/watch?v=V6Co4YdL25Q'}];
    cameras.forEach(c=>{const m=L.marker([c.lat,c.lon],{icon:L.divIcon({className:'cam-map-icon',html:'&#128247;',iconSize:[27,27],iconAnchor:[13,13]})});const wrapper=document.createElement('div');const label=document.createElement('strong');label.textContent=c.name;const link=document.createElement('a');link.href=c.link;link.target='_blank';link.rel='noopener noreferrer';link.textContent=t('viewCamera')+' \u2197';wrapper.append(label,document.createElement('br'),link);m.bindPopup(wrapper);m.addTo(map);mapLayers.push(m);});
    if(positions.length){map.fitBounds(L.latLngBounds(positions).pad(.19),{maxZoom:9,animate:false});}setTimeout(()=>map.invalidateSize(),90);
  }catch(e){byId('mapFallback').hidden=false;console.warn('Map failed:',e);}}
  Object.assign(T.en, {
    navTrack:'Maps',briefTitle:'Your coast at a glance.',briefIntro:'The storm, your area, and what comes next.',chooseTown:'Your community',nowLabel:'01 / THE STORM NOW',watchLabel:'02 / WHAT TO WATCH',watchHeading:'Rain, surf & access',concernsNote:'Area vulnerabilities, not a confirmed local warning.',nextLabel:'03 / YOUR LOCAL OUTLOOK',officialRain:'See official rainfall outlook ↓',compareTowns:'Compare all communities ↓',stormDetails:'Storm measurements & coordinates',mapCone:'Forecast cone',mapTrack:'Local track',mapSatellite:'Satellite clouds',mapRain:'Rain outlook',mapHeading:'Four ways to see the storm',section01:'MAPS / CHOOSE YOUR VIEW',trackMore:'How to read the track & forecast',coneUnavailable:'Official cone unavailable. Open the NHC map for the latest graphic.',imageLoading:'Loading imagery…',satelliteLoop:'Open NOAA animation ↗',imageFailed:'Imagery could not load. Use the source link to check directly.',
    explainCone:'Where the center could travel. NOAA’s cone shows forecast uncertainty—not the storm’s size. Impacts can extend outside it. Check the issue time on the image; tap to enlarge.',explainTrack:'Where the forecast center goes relative to our communities. Tap a forecast dot for its time. This line is not a boundary for dangerous weather.',explainSatellite:'What the clouds look like now across the eastern Pacific. NOAA satellite imagery—not a future track or ground-level rain measurement. Check the timestamp on the image.',explainRain:'Where heavier rain is forecast. Official rainfall potential from NOAA/WPC—not live radar. Use the dates and color scale printed on the map; amounts may cover several days. Tap to enlarge.',rainUnavailable:'Official rainfall graphic unavailable. Open the NHC map for the latest forecast.',
    fromPv:'from Puerto Vallarta’s center',movingBrief:'Moving',rainBrief:'modeled rain / 24 h',noTiming:'No clear heavier-rain period identified by this model.',localModelNote:'Weather model estimate; may understate hurricane impacts.',communitySubtitle:'Compare area concerns and modeled rain. Expand a community for wind, timing and source details.',communitiesHeading:'What to watch in each community',section02:'LOCAL OUTLOOK / COMPARE AREAS',detailsLabel:'Forecast details',safetyText:'Rain, surf and flooding can be dangerous outside the cone. Follow local alerts and evacuation orders.',noActiveBrief:'No active Simon advisory found. This is not a local all-clear.',forecastHeading:'Forecast estimate',rainModelLabel:'24-hour rain estimate',modelCautionShort:'These estimates may understate hurricane rain and wind. Prioritize official local alerts.'
  });
  Object.assign(T.es, {
    navTrack:'Mapas',briefTitle:'Tu costa de un vistazo.',briefIntro:'La tormenta, tu comunidad y lo que viene.',chooseTown:'Tu comunidad',nowLabel:'01 / LA TORMENTA AHORA',watchLabel:'02 / QUÉ VIGILAR',watchHeading:'Lluvia, oleaje y accesos',concernsNote:'Vulnerabilidades de la zona; no es una alerta local confirmada.',nextLabel:'03 / PRONÓSTICO LOCAL',officialRain:'Ver pronóstico oficial de lluvia ↓',compareTowns:'Comparar comunidades ↓',stormDetails:'Mediciones y coordenadas del ciclón',mapCone:'Cono de pronóstico',mapTrack:'Trayectoria local',mapSatellite:'Nubes por satélite',mapRain:'Lluvia prevista',mapHeading:'Cuatro vistas de la tormenta',section01:'MAPAS / ELIGE UNA VISTA',trackMore:'Cómo interpretar la trayectoria y el pronóstico',coneUnavailable:'Cono oficial no disponible. Abre el mapa del NHC para consultar la imagen más reciente.',imageLoading:'Cargando imagen…',satelliteLoop:'Abrir animación de NOAA ↗',imageFailed:'No se pudo cargar la imagen. Consulta el enlace a la fuente.',
    explainCone:'Por dónde podría pasar el centro. El cono de NOAA muestra incertidumbre, no el tamaño de la tormenta. Puede haber impactos fuera del cono. Revisa la fecha y hora; toca para ampliar.',explainTrack:'La trayectoria prevista del centro respecto a nuestras comunidades. Toca un punto para ver la hora. La línea no delimita el tiempo peligroso.',explainSatellite:'Las nubes actuales sobre el Pacífico oriental. Imagen de NOAA; no es una trayectoria futura ni una medición de lluvia en tierra. Revisa la fecha y hora de la imagen.',explainRain:'Dónde se prevén lluvias más fuertes. Pronóstico oficial de NOAA/WPC; no es radar en vivo. Revisa las fechas y la escala de colores del mapa; las cantidades pueden abarcar varios días. Toca para ampliar.',rainUnavailable:'Imagen de lluvia no disponible. Abre el mapa del NHC para ver el pronóstico más reciente.',
    fromPv:'del centro de Puerto Vallarta',movingBrief:'Se mueve',rainBrief:'lluvia modelada / 24 h',noTiming:'El modelo no identifica un periodo claro de lluvia más fuerte.',localModelNote:'Estimación de un modelo; puede subestimar los impactos del huracán.',communitySubtitle:'Compara vulnerabilidades y lluvia modelada. Abre una comunidad para ver viento, horarios y fuentes.',communitiesHeading:'Qué vigilar en cada comunidad',section02:'PRONÓSTICO LOCAL / COMPARA ZONAS',detailsLabel:'Detalles del pronóstico',safetyText:'La lluvia, el oleaje y las inundaciones pueden ser peligrosos fuera del cono. Sigue las alertas locales y órdenes de evacuación.',noActiveBrief:'No se encontró un aviso activo de Simon. Esto no significa que no haya peligro local.',forecastHeading:'Estimación del pronóstico',rainModelLabel:'Lluvia estimada en 24 horas',modelCautionShort:'Estas estimaciones pueden subestimar la lluvia y el viento del huracán. Prioriza las alertas locales oficiales.'
  });
  let selectedTown='garza',mapView='cone';
  function modelAvailable(f){const age=f?(Date.now()-Date.parse(f.retrieved_at))/3600000:Infinity;return !!(f&&Array.isArray(f.hourly)&&f.hourly.length===24&&Number.isFinite(age)&&age>=-0.25&&age<=1.5&&Date.parse(f.period_end)>Date.now());}
  function rainWindowText(f){
    if(!modelAvailable(f))return t('modelUnavailable');
    if(!f.rain_window)return t('noTiming');
    const start=Math.floor(Date.parse(f.rain_window)/(3*3600000))*3*3600000;
    if(start+3*3600000<=Date.now())return t('noTiming');
    return t('rainStart')+': '+localTime(new Date(start).toISOString())+' – '+localTime(new Date(start+3*3600000).toISOString(),false)+'.';
  }
  function renderBriefing(){
    const select=byId('townSelect');select.replaceChildren();towns.forEach(town=>{const option=document.createElement('option');option.value=town.key;option.textContent=t(town.name);select.append(option);});select.value=selectedTown;
    const town=towns.find(x=>x.key===selectedTown),f=latest?.communities?.[selectedTown],s=latest?.storm;
    setText('localConcerns',t(town.risk));setText('briefTown',t(town.name));
    setText('briefRain',modelAvailable(f)&&f.rain24h_mm!=null?measurement(f.rain24h_mm,'rain')+' '+unitLabel('rain')+' · '+t('rainBrief'):t('modelUnavailable'));
    setText('briefWindow',rainWindowText(f));setText('briefForecastStamp',modelAvailable(f)?t('modelRetrieved')+': '+localTime(f.retrieved_at)+'. '+t('localModelNote'):t('localModelNote'));
    setText('stormDistance',s?.status==='active'?t('roughDistance')+' '+measurement(haversine(s.lat,s.lon,20.6067,-105.235),'distance')+' '+unitLabel('distance')+' '+t('fromPv')+'. '+t('movingBrief')+' '+direction(s.movement_degrees)+' · '+measurement(s.movement_kmh,'speed')+' '+unitLabel('speed')+'.':s?.status==='not_active'?t('noActiveBrief'):t('unavailable'));
  }
  function renderMapViews(){
    document.querySelectorAll('[data-map-view]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.mapView===mapView)));
    ['cone','track','satellite','rain'].forEach(view=>byId(view+'Panel').hidden=view!==mapView);
    setText('mapExplainer',t(({cone:'explainCone',track:'explainTrack',satellite:'explainSatellite',rain:'explainRain'})[mapView]));
    document.querySelector('.map-disclaimer').hidden=mapView!=='track';
    if(mapView==='cone'||mapView==='rain'){
      const src=latest?.mode==='live'&&latest?.storm?.status==='active'?safeUrl(latest.storm[mapView+'_image_url']):null;
      const img=byId(mapView+'Image'),unavailable=byId(mapView+'Unavailable'),link=byId(mapView+'ImageLink');
      if(!src){unavailable.hidden=false;img.hidden=true;img.removeAttribute('src');link.removeAttribute('href');}
      else if(img.getAttribute('src')!==src){unavailable.hidden=true;img.hidden=true;img.onload=()=>{img.hidden=false;unavailable.hidden=true;};img.onerror=()=>{img.hidden=true;unavailable.hidden=false;};img.src=src;link.href=src;}
    }
    if(mapView==='satellite'){
      const img=byId('satelliteImage'),src='https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/eep/GEOCOLOR/1800x1080.jpg?t='+Math.floor(Date.now()/600000);
      if(img.getAttribute('src')!==src){img.hidden=true;setText('satelliteUnavailable',t('imageLoading'));byId('satelliteUnavailable').hidden=false;img.onload=()=>{img.hidden=false;byId('satelliteUnavailable').hidden=true;};img.onerror=()=>{img.hidden=true;setText('satelliteUnavailable',t('imageFailed'));byId('satelliteUnavailable').hidden=false;};img.src=src;}
    }
    if(mapView==='track'&&map)setTimeout(()=>{map.invalidateSize();renderMap();},0);

  }
  Object.assign(T.en, {hourlyScrollHint:'Scroll the table to see all hours and measurements.',researchTitle:'Dig deeper',researchKicker:'MORE CONTEXT / WHEN YOU NEED IT',researchIntro:'Read the forecasters’ reasoning, explore the hourly outlook, and understand the limits of each source.',researchOfficial:'What are the official forecasters saying?',researchOfficialIntro:'These links open the original NHC products. Check each product’s issue time for updates.',researchHourly:'Show the hour-by-hour local model',researchMethods:'What does this information mean?',discussionTitle:'Forecast discussion',discussionDesc:'Why the NHC expects this track and intensity, and what remains uncertain.',advisoryTitle:'Public advisory',advisoryDesc:'The latest storm summary, watches, warnings and hazards.',technicalTitle:'Technical forecast advisory',technicalDesc:'Forecast positions, intensity and wind-field details.',probabilityTitle:'Wind probabilities',probabilityDesc:'The forecast chance of winds reaching specific thresholds.',satelliteTitle:'Satellite imagery and animation',satelliteDesc:'Explore cloud imagery from NOAA over the eastern Pacific.',hourlyTime:'Local time',hourlyRain:'Rain',hourlyChance:'Rain chance',hourlyWind:'Wind',hourlyGust:'Gusts',hourlyCaution:'Model estimates are not observations or official hurricane wind forecasts. They can substantially underestimate local hurricane impacts.',methodOfficialTitle:'Official outlook vs. local estimates',methodOfficial:'NHC advisories describe the cyclone. NOAA/WPC rainfall graphics describe regional rainfall potential. Open-Meteo supplies supplemental neighborhood model estimates. The area concerns listed here describe geographic vulnerabilities, not confirmed local warnings. Use Mexican authorities for local alerts and evacuation orders.',methodTimeTitle:'Timestamps and uncertainty',methodTime:'“Data checked” is when this site retrieved data; it is not the time the forecast was issued. Each advisory and image has its own timestamp. The cone describes uncertainty in the center’s path, not the storm’s size. The displayed closest forecast point is not an exact closest approach or arrival time. A heavier-rain window is a model estimate, not the eye’s arrival.',methodCameraTitle:'Cameras show one view',methodCamera:'A camera can go offline, lag or show an old frame. Check its timestamp. One calm-looking view does not establish conditions elsewhere or replace official alerts.',allSources:'All sources and local authorities ↓',researchNoStorm:'Storm-specific research links are unavailable. Consult the NHC for the latest active storms.'});
  Object.assign(T.es, {hourlyScrollHint:'Desplaza la tabla para ver todas las horas y mediciones.',researchTitle:'Más a fondo',researchKicker:'MÁS CONTEXTO / CUANDO LO NECESITES',researchIntro:'Lee el razonamiento de los meteorólogos, explora el pronóstico horario y conoce las limitaciones de cada fuente.',researchOfficial:'¿Qué dicen los meteorólogos oficiales?',researchOfficialIntro:'Estos enlaces abren los productos originales del NHC. Revisa la hora de emisión de cada producto.',researchHourly:'Ver el modelo local hora por hora',researchMethods:'¿Qué significa esta información?',discussionTitle:'Análisis del pronóstico',discussionDesc:'Por qué el NHC prevé esta trayectoria e intensidad y qué sigue siendo incierto.',advisoryTitle:'Aviso público',advisoryDesc:'Resumen del ciclón, alertas y peligros.',technicalTitle:'Aviso técnico del pronóstico',technicalDesc:'Posiciones previstas, intensidad y campo de viento.',probabilityTitle:'Probabilidades de viento',probabilityDesc:'Probabilidad prevista de que el viento alcance ciertos umbrales.',satelliteTitle:'Imágenes y animación de satélite',satelliteDesc:'Explora las nubes sobre el Pacífico oriental con NOAA.',hourlyTime:'Hora local',hourlyRain:'Lluvia',hourlyChance:'Prob. de lluvia',hourlyWind:'Viento',hourlyGust:'Ráfagas',hourlyCaution:'Son estimaciones de un modelo, no observaciones ni pronósticos oficiales del viento del huracán. Pueden subestimar mucho sus impactos locales.',methodOfficialTitle:'Pronóstico oficial y estimaciones locales',methodOfficial:'Los avisos del NHC describen el ciclón. Las imágenes de NOAA/WPC muestran el potencial regional de lluvia. Open-Meteo aporta estimaciones complementarias por comunidad. Los riesgos indicados describen vulnerabilidades geográficas, no alertas locales confirmadas. Consulta a las autoridades mexicanas para alertas y evacuaciones.',methodTimeTitle:'Fechas, horas e incertidumbre',methodTime:'“Datos consultados” indica cuándo se descargaron los datos, no cuándo se emitió el pronóstico. Cada aviso e imagen tiene su propia fecha y hora. El cono representa incertidumbre en la trayectoria del centro, no el tamaño del ciclón. El punto pronosticado más cercano no es una aproximación exacta ni una hora de llegada. El periodo de lluvia más fuerte es una estimación, no la llegada del ojo.',methodCameraTitle:'Cada cámara muestra una sola vista',methodCamera:'Una cámara puede desconectarse, retrasarse o mostrar una imagen antigua. Revisa su fecha y hora. Una vista tranquila no confirma las condiciones de otras zonas ni sustituye las alertas oficiales.',allSources:'Todas las fuentes y autoridades locales ↓',researchNoStorm:'Enlaces específicos no disponibles. Consulta el NHC para ver los ciclones activos.'});
  function renderResearch(){
    const links=byId('researchLinks');links.replaceChildren();const s=latest?.storm;
    const entries=s?.status==='active'?[[s.forecast_discussion,'discussionTitle','discussionDesc'],[s.public_advisory,'advisoryTitle','advisoryDesc'],[s.forecast_advisory,'technicalTitle','technicalDesc'],[s.wind_probabilities,'probabilityTitle','probabilityDesc']]:[];
    if(!entries.length){const p=document.createElement('p');p.textContent=t('researchNoStorm');links.append(p);}
    entries.push(['https://goes.noaa.gov/sector_band.php?sat=G19&sector=eep&band=GEOCOLOR&length=24&src=nhc','satelliteTitle','satelliteDesc']);
    entries.forEach(([url,title,description])=>{const href=safeUrl(url);if(!href)return;const a=document.createElement('a');a.href=href;a.target='_blank';a.rel='noopener noreferrer';const heading=document.createElement('strong');heading.textContent=t(title)+' ↗';const p=document.createElement('span');p.textContent=t(description);a.append(heading,p);links.append(a);});
    const select=byId('researchTown');select.replaceChildren();towns.forEach(town=>{const option=document.createElement('option');option.value=town.key;option.textContent=t(town.name);select.append(option);});select.value=selectedTown;
    const f=latest?.communities?.[selectedTown],available=modelAvailable(f),town=towns.find(x=>x.key===selectedTown);setText('hourlyCaption',t(town.name)+' · '+t('modelForecast'));setText('hourlyContext',available?t('modelRetrieved')+': '+localTime(f.retrieved_at)+'. '+t('forecastPeriod')+': '+localTime(f.period_start)+' – '+localTime(f.period_end)+'. '+t('timeLocal'):t('modelUnavailable'));
    byId('hourlyUnavailable').hidden=available;document.querySelector('.hourly-scroll').hidden=!available;const body=byId('hourlyRows');body.replaceChildren();
    if(available)f.hourly.forEach(hour=>{const row=document.createElement('tr');[localTime(hour.time),measurement(hour.rain_mm,'rain')+' '+unitLabel('rain'),hour.rain_probability==null?'--':hour.rain_probability+'%',measurement(hour.wind_kmh,'speed')+' '+unitLabel('speed'),measurement(hour.gust_kmh,'speed')+' '+unitLabel('speed')].forEach((value,index)=>{const cell=document.createElement(index===0?'th':'td');if(index===0)cell.scope='row';cell.textContent=value;row.append(cell);});body.append(row);});
  }
  function renderTheme(){
    const dark=document.documentElement.dataset.theme==='dark';
    const label=lang==='es'?(dark?'☀ Modo claro':'☾ Modo oscuro'):(dark?'☀ Light mode':'☾ Dark mode');
    byId('themeToggle').textContent=label;byId('themeToggle').setAttribute('aria-pressed',String(dark));
    byId('themeToggle').setAttribute('aria-label',lang==='es'?'Cambiar a '+(dark?'modo claro':'modo oscuro'):'Switch to '+(dark?'light':'dark')+' mode');
    document.querySelector('meta[name="theme-color"]').content=dark?'#091e2b':'#f1f4f2';
  }
  function renderAll(){renderTheme();renderUnits();renderStorm();renderForecast();renderCommunities();renderCameras();renderMap();renderBriefing();renderMapViews();renderResearch();}
  async function loadData(){try{const r=await fetch('data/latest.json?cache='+Date.now(),{cache:'no-store'});if(!r.ok)throw new Error('HTTP '+r.status);const j=await r.json();if(!j||j.schema_version!==1)throw new Error('Bad schema');latest=j;refreshFailed=false;renderAll();}catch(e){console.error('Data fetch failed:',e);refreshFailed=true;renderAll();setText('dataWarning',t('refreshError'));byId('dataWarning').hidden=false;}}
  document.querySelectorAll('.lang-switch button').forEach(btn=>btn.addEventListener('click',()=>{lang=btn.dataset.lang;try{localStorage.setItem(localeKey,lang);}catch(_){}const query=new URLSearchParams(location.search);query.set('lang',lang);try{history.replaceState(null,'',location.pathname+'?'+query.toString()+location.hash)}catch(_){/* local preview */}refreshStaticText();}));
  document.querySelectorAll('[data-units]').forEach(button=>button.addEventListener('click',()=>{
    units=button.dataset.units;
    try{localStorage.setItem(unitsKey,units);}catch(_){}
    const query=new URLSearchParams(location.search);query.set('units',units);
    try{history.replaceState(null,'',location.pathname+'?'+query.toString()+location.hash);}catch(_){}
    renderUnits();renderStorm();renderForecast();renderCommunities();renderBriefing();renderResearch();
  }));
  byId('loadVideo').addEventListener('click',()=>{stopCameras();const c=byId('embedContainer');const frame=document.createElement('iframe');frame.src='https://www.youtube-nocookie.com/embed/ac5AU4B10ak?autoplay=1&rel=0';frame.title='El Dorado Los Muertos Pier Cam';frame.loading='lazy';frame.allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share';frame.allowFullscreen=true;c.appendChild(frame);c.hidden=false;byId('videoPoster').hidden=true;});
  byId('shareButton').addEventListener('click',async()=>{const shareUrl=new URL(location.href);shareUrl.hash='';shareUrl.searchParams.set('lang',lang);shareUrl.searchParams.set('units',units);const u=shareUrl.href;const message=t('shareMessage')+' '+u;if(navigator.share){try{await navigator.share({title:t('sharing'),text:message,url:u});return;}catch(_){}}try{await navigator.clipboard.writeText(message);toast(t('copied'));}catch(_){toast(u);}});
  byId('rainShortcut').addEventListener('click',()=>{mapView='rain';renderMapViews();});
  byId('researchTown').addEventListener('change',event=>{selectedTown=event.target.value;renderBriefing();renderResearch();});
  byId('townSelect').addEventListener('change',event=>{selectedTown=event.target.value;renderBriefing();renderResearch();});
  document.querySelectorAll('[data-map-view]').forEach(button=>button.addEventListener('click',()=>{mapView=button.dataset.mapView;renderMapViews();}));
  byId('themeToggle').addEventListener('click',()=>{const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=theme;try{localStorage.setItem('bahia-watch-theme',theme);}catch(_){}renderTheme();});
  refreshStaticText();loadData();setInterval(()=>loadData(),5*60*1000);setInterval(()=>{updateFreshness();renderCommunities();renderForecast();renderBriefing();renderResearch();},60*1000);
})();
