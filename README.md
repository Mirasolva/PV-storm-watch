# Bahia Storm Watch

Free, mobile-first, bilingual hurricane dashboard for Bahia de Banderas. This is an independent community project, NOT an official warning service.

## Features
- English / Spanish switch and WhatsApp-friendly share action.
- NOAA/NHC observed storm position, movement, maximum sustained winds and central pressure.
- Interactive map with NHC discrete official forecast-center points *when the NHC forecast advisory is machine-readable*.
- Weather-model estimates for Garza Blanca / Villa Marta, Mismaloya, Boca de Tomatlan, Las Juntas y los Veranos, and central Puerto Vallarta.
- El Dorado Restaurant's Los Muertos Pier stream, plus direct links to operator pages for Garza Blanca, Hotel Mousai and Grand Park Royal at Las Gemelas.
- Clear source freshness and demo/outdated-data notices.

## How to publish for $0 (GitHub Pages)
1. The **public** repository [Mirasolva/PV-storm-watch](https://github.com/Mirasolva/PV-storm-watch) has already been created, with a `main` branch.
2. Upload the project files to the repository root using a write-capable workflow, such as Codex. **The previously used ChatGPT GitHub connection had only read access** and cannot deploy code by itself.
3. If uploading manually, extract the ZIP on a computer, then upload every file **including the hidden `.github/workflows/deploy.yml`**.
4. Go to repository **Settings > Pages > Build and deployment > Source: GitHub Actions**.
5. Open **Actions > Refresh and deploy Bahia Storm Watch > Run workflow**. Once it succeeds, the public URL should be `https://mirasolva.github.io/PV-storm-watch/` (only after successful deployment).

No custom domain is needed. For a future domain, configure it in Pages settings and DNS later.

## Update behavior
- A GitHub Actions schedule requests refreshes at minutes `7,22,37,52` each hour (nominally 15 minutes). GitHub may delay scheduled workflow execution; data is *not* guaranteed to update every 15 minutes.
- NOAA/NHC live source: https://www.nhc.noaa.gov/CurrentStorms.json . The script attempts to read the live official forecast advisory linked in that feed.
- Open-Meteo forecast model: https://open-meteo.com/ . This source is **supplemental** and may greatly underpredict extreme tropical cyclone wind or localized rainfall.
- CONAGUA/SMN and Proteccion Civil Jalisco are **direct links**; they are *not* automatically ingested or verified. The site must not claim otherwise.
- The included `data/latest.json` is a real source fetch from October 11, 2026, with its original timestamps. It becomes stale automatically; it is not a promise of current conditions. Every deployment replaces it with a new fetch. Demo data is never reused as live data on source failure.
- If NHC temporarily fails, a previous advisory may remain visible with its original timestamp and a stale-data warning. If Simon is no longer active, the site says so rather than silently substituting another storm.
- The client checks `data/latest.json` every five minutes while open, and shows distinct official observation and data-check timestamps.

## Webcam attribution and limitations
- El Dorado / Los Muertos Pier: https://www.youtube.com/live/ac5AU4B10ak and https://www.eldoradopvr.com/live-stream
- Garza Blanca: https://www.garzablancaresort.com/puerto-vallarta/live-cam
- Hotel Mousai: https://www.hotelmousai.com/puerto-vallarta/live-cam
- Grand Park Royal Las Gemelas: https://www.park-royalhotels.com/webcam-grand-park-royal-puerto-vallarta.html
- Extra directory: https://showmepv.com/live-cams

Cameras are third-party content and may go offline, change feeds, be blocked from embedding, or show delayed footage. We label where a camera is located, *not* whether it is streaming successfully right now. Click through to the operator's page if embedding fails.

## Test locally
```bash
python -m http.server 8765
# then open http://localhost:8765/
python -m unittest discover -s tests -v
```
To run the data refresh from a machine with internet access:
```bash
python scripts/update.py
```
No API keys or Python dependencies required.

## Safety / accuracy limitations
The positions shown by NHC are cyclone center points; they are NOT the area of hazard. The projected closest *forecast point* is not a precise closest approach of the entire storm. We do not generate false eye-arrival times for towns; neighborhood rain estimates come from a separate model. No verified local measured rain accumulation is claimed. Evacuation and road notices must come from Mexican authorities.

## Sources
- NOAA/NHC: https://www.nhc.noaa.gov/
- CONAGUA/SMN: https://smn.conagua.gob.mx/
- Proteccion Civil Jalisco: https://proteccioncivil.jalisco.gob.mx/
- Open-Meteo: https://open-meteo.com/
- Map tiles: OpenStreetMap. UI map: Leaflet 1.9.4.

## Validation and reliability changes

The handoff documents contained identical source. Review on October 11, 2026 found and corrected the Leaflet CSS integrity hash, a tile-provider API-key warning, mobile overflow, missing gust/probability displays, unsaved language preference, and unsafe treatment of missing model values as zero.

- NHC `intensity` is converted from knots; JSON `movementSpeed` is mph, checked against the matching public advisory. Converted wind values can differ slightly from NHC rounded public-advisory figures.
- Forecast bulletins must match both cyclone ID and issuance. Explicit `FORECAST VALID` and `OUTLOOK VALID` positions are parsed, including month/year rollover; no positions are interpolated.
- Malformed NHC responses are unavailable, not evidence the storm is inactive.
- Model data shows retrieval time, not a claimed model issuance. Full 24-hour windows, gusts, probability and three-hour possible rain periods are shown. Missing measurements stay unknown. Model data older than 90 minutes is hidden.
- NHC observations older than six hours, site checks older than 90 minutes, future timestamps and NHC/download failures trigger prominent warnings. Sample mode triggers a prominent demonstration warning.
- Language preference persists locally; explicit `?lang=en` or `?lang=es` overrides it and share links carry the selected language.
- Twelve Python tests pass. JavaScript syntax and Python compilation pass. Live NOAA and all five Open-Meteo requests succeeded. Browser checks covered both languages, saved preference, mobile overflow, real basemap/markers, click-to-load embedding, demo, stale, and inactive states.
- Las Juntas y los Veranos is the Cabo Corrientes community south of Boca de Tomatlan; the supplied approximate pin is in that area, not the similarly named northern Las Juntas. Reference: https://www.wikidata.org/wiki/Q5780549 . Pins are approximate, not property boundaries.
- Supplied camera/operator and official-source URLs returned successful HTTP responses. Video playback is not certified live; external operators can restrict embedding.

## Free service use and remaining limits

The project is an independent noncommercial community site without ads or subscriptions. Five model calls per run and 96 scheduled runs/day nominally use 480 calls/day, below the Open-Meteo free API limits (https://open-meteo.com/en/terms). Weather data is attributed to Open-Meteo under CC BY 4.0; the app transforms hourly values into totals and peaks. Map tiles follow https://operations.osmfoundation.org/policies/tiles/ and remain a best-effort external service.

Published and verified on October 11, 2026: https://mirasolva.github.io/PV-storm-watch/ . Both the initial push deployment and manual workflow run succeeded. Manual run: https://github.com/Mirasolva/PV-storm-watch/actions/runs/38152941336 . Public data contained seven official forecast points, complete 24-hour forecasts for all five communities, and no source errors. The public browser checks passed for English/Spanish, phone-width layout, map tiles/markers and click-to-load webcam embedding. The workflow is active and its nominal 15-minute schedule is configured; GitHub may delay scheduled runs. Every build validates the source before refreshing and deploying. Source files stay at repository root.

If a refresh cannot reach NHC, the updater may retain only the last verified live observation available in its local data file, with the original time and a source-failure warning. Because Actions uses a fresh checkout, this is not durable per-run advisory history. Mexican emergency sources remain direct official links; automated local alerts, cones, wind fields and advisory history are not implemented. Never infer evacuation or road status from this dashboard.

## Briefing and map views

The landing section summarizes the latest NHC observation, community-specific vulnerabilities (not verified warnings), and the selected community's supplemental model outlook. Measurements and community details expand on demand. The model can understate hurricane impacts; an explicit shortcut leads to the official rainfall outlook.

Map controls offer the official NHC cone (default), the existing interactive local track, NOAA GOES eastern-Pacific GeoColor imagery, and NOAA/WPC rainfall potential. The updater discovers full-size cone and rain graphics from the current storm's NHC graphics pages and checks basin, storm number, year and NOAA host before accepting a URL. Missing graphics show an unavailable state and source link. Graphic timestamps and original legends remain visible; image units are those printed by NOAA, independent of the dashboard's unit switch. Satellite imagery loads on demand and refreshes its URL in ten-minute buckets. It is cloud imagery, not radar.

The default local outlook and first comparison row are Puerto Vallarta Centro. Display preferences are grouped in a compact toolbar. The hourly table is now a dedicated expandable section near the briefing. The fifth map view is the NHC five-day probability of sustained tropical-storm-force winds (34 kt); it is explicitly labeled as probability, not wind speed. Contextual links and visitor questions connect the short briefing to forecasts, model limitations and authoritative local sources. The site does not claim to verify transport closures or evacuation orders.
