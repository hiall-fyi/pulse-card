/**
 * @module pulse-weather/sections/overview
 * @description Hero temperature, atmospheric FX, stats grid, UV/pressure bars,
 * contextual weather summary, day progress arc, and tier-coloured stats.
 */

import { compassLabel, escapeHtml, sanitizeCssValue, formatCondition, uniqueSvgId, futureHourly as filterFutureHourly, deriveTodaySunBoundaries, readCeOrAttr, readCeUnit, readSensorValue, deriveBrandVariant, formatHHMM, resolveHassTimeZone } from '../weather-primitives.js';
import { intensityRatio, tensionVignette } from '../../shared/visual-tension.js';
import { composeNarrative } from '../narrative.js';
import { brandMarkVariant } from '../brand-mark.js';
import { renderSectionShell } from '../section-shell.js';
import { t } from '../type-system.js';

/**
 * Map relative humidity to NWS-aligned comfort tier colour.
 * @param {number} rh - Relative humidity 0–100%.
 * @returns {string} Hex colour.
 */
export function humidityColor(rh) {
  if (rh <= 30) return '#5ac8fa';
  if (rh <= 60) return '#30d158';
  if (rh <= 80) return '#ff9f0a';
  return '#ff453a';
}

/**
 * Map 3h pressure change to WMO SYNOP tendency description.
 * @param {number|null|undefined} change3h - 3h pressure change in hPa.
 * @param {string} trendState - Sensor state: 'rising'|'falling'|'steady'.
 * @returns {string} WMO tendency description or 'Press' fallback.
 */
export function pressureTendencyLabel(change3h, trendState) {
  if (change3h === null || change3h === undefined) return 'Press';
  const abs = Math.abs(Number(change3h));
  if (abs <= 1.0) return 'Press';
  const dir = trendState === 'rising' ? 'Rising' : trendState === 'falling' ? 'Falling' : 'Press';
  if (abs > 3.0) return `${dir} rapidly`;
  return dir;
}

/**
 * Build contextual weather summary sentence with NWS terminology.
 * @param {object} params - Summary input data.
 * @param {number} params.precipNow - Current precipitation value.
 * @param {string} params.precipLabel - Pre-built precipitation label.
 * @param {Array<Record<string, unknown>>} params.slots - Hourly forecast slots.
 * @param {number} params.windSpeed - Wind speed in km/h.
 * @param {number} params.uvIndex - UV index value.
 * @param {string} params.stabilityState - Atmos CE stability_assessment state.
 * @returns {{icon: string, text: string}} Summary icon and text.
 */
export function buildWeatherSummary({ precipNow, precipLabel, slots, windSpeed, uvIndex, stabilityState }) {
  if (precipNow > 0) return { icon: '\u{1F327}', text: precipLabel };
  const next2h = slots.slice(0, 2);
  for (const h of next2h) {
    if ((Number(h.precipitation_probability) || 0) >= 60) {
      const type = Number(h.snowfall) > 0 ? 'Snow' : 'Rain';
      return { icon: '\u{1F327}', text: `${type} likely within ${next2h.indexOf(h) + 1}h` };
    }
  }
  for (const h of next2h) {
    if ((Number(h.precipitation_probability) || 0) >= 40) {
      const type = Number(h.snowfall) > 0 ? 'Snow' : 'Rain';
      return { icon: '\u{1F327}', text: `${type} possible within ${next2h.indexOf(h) + 1}h` };
    }
  }
  const stormTiers = ['slight', 'enhanced', 'moderate', 'high'];
  if (stabilityState && stormTiers.includes(stabilityState)) {
    const peakCape = Math.max(...next2h.map((h) => Number(h.cape) || 0));
    if (peakCape > 1000) return { icon: '\u26A1', text: `Thunderstorms possible \u2014 CAPE ${peakCape}J/kg` };
  }
  if (windSpeed >= 39) return { icon: '\u{1F4A8}', text: `Strong winds ${Math.round(windSpeed)} km/h` };
  if (uvIndex >= 6) return { icon: '\u2600\uFE0F', text: 'High UV \u2014 protection needed' };
  let clearHours = 0;
  for (const h of slots) {
    if ((Number(h.precipitation_probability) || 0) < 20) clearHours++;
    else break;
  }
  if (clearHours >= 2) return { icon: '\u2713', text: `Clear for the next ${clearHours}h` };
  return { icon: '', text: '' };
}

/**
 * Build SVG path data for hourly CAPE sparkline.
 * @param {Array<Record<string, unknown>>} slots - Hourly forecast slots with cape values.
 * @param {number} width - SVG width in pixels.
 * @param {number} height - SVG height in pixels.
 * @returns {{svgPath: string, areaPath: string, peakValue: number, peakIndex: number, maxCape: number}} Sparkline data.
 */
export function buildCapeSparklineSvg(slots, width, height) {
  // Coerce NaN/Infinity to 0 before Math.max — Math.max(...[NaN]) is NaN
  // which poisons every downstream coordinate.
  const values = slots.map((h) => {
    const n = Number(h.cape);
    return Number.isFinite(n) ? n : 0;
  });
  const maxCape = Math.max(...values, 300);
  const peakValue = Math.max(...values);
  const peakIndex = values.indexOf(peakValue);
  const points = values.map((v, i) => ({
    x: (i / Math.max(slots.length - 1, 1)) * width,
    y: height - (v / maxCape) * height,
  }));
  const svgPath = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
  const areaPath = `${svgPath} L${width},${height} L0,${height} Z`;
  return { svgPath, areaPath, peakValue, peakIndex, maxCape };
}

/**
 * Build precipitation type label with snow-first ordering.
 * @param {number} precipNow - Total precipitation value.
 * @param {string} precipUnit - Total precipitation unit.
 * @param {number} rainNow - Rain value.
 * @param {string} rainUnit - Rain unit.
 * @param {number} showersNow - Showers value.
 * @param {string} showersUnit - Showers unit.
 * @param {number} snowfallNow - Snowfall value.
 * @param {string} snowfallUnit - Snowfall unit.
 * @returns {string} Escaped HTML label.
 */
export function buildPrecipLabel(precipNow, precipUnit, rainNow, rainUnit, showersNow, showersUnit, snowfallNow, snowfallUnit) {
  const types = [];
  if (snowfallNow > 0) types.push({ name: 'Snow', value: snowfallNow, unit: snowfallUnit });
  if (rainNow > 0) types.push({ name: 'Rain', value: rainNow, unit: rainUnit });
  if (showersNow > 0) types.push({ name: 'Showers', value: showersNow, unit: showersUnit });

  if (types.length > 0) {
    const parts = types.map((p) => `${escapeHtml(p.name)} ${escapeHtml(p.value.toFixed(1))} ${escapeHtml(p.unit)}`);
    return `${parts.join(' \u00b7 ')} now`;
  }
  if (precipNow > 0) {
    return `Precipitation \u2014 next 12h \u00b7 ${escapeHtml(precipNow.toFixed(1))} ${escapeHtml(precipUnit)} now`;
  }
  return 'Precipitation \u2014 next 12h';
}


/**
 * Render the overview section.
 * @param {import('../types.js').RenderContext} ctx - Render context.
 * @returns {string} HTML string.
 */
export function renderOverview({ hass, config, discovery, weatherEntity, forecastData }) {
  const attrs = weatherEntity.attributes;
  const ce = discovery.atmosCe;
  const sunEntityId = discovery.sunEntityId || '';
  // Render all clock labels in the HA-configured zone (falls back to
  // browser zone when the user's profile prefers 'local'). Resolved once
  // here and threaded into every formatHHMM below so a user physically
  // abroad still sees their home wall-clock.
  const timeZone = resolveHassTimeZone(hass);
  const { condition, isNight } = deriveBrandVariant(hass, weatherEntity, discovery);

  const val = (/** @type {string} */ s, /** @type {string} */ a) => readCeOrAttr(hass, ce, attrs, s, a);
  const unit = (/** @type {string} */ s, /** @type {string} */ f) => readCeUnit(hass, ce, s, f);

  const temp = val('temperature', 'temperature');
  const humidity = val('humidity', 'humidity');
  const windSpeed = val('wind_speed', 'wind_speed');
  const windBearing = val('wind_direction', 'wind_bearing');
  /* Gust attribute name varies by integration: HA's standard is
     `wind_gust_speed` (OpenWeatherMap, met.no, others); older Atmos CE
     composite sensors expose `wind_gusts`. Read both so the 4-col Gust
     stat stays consistent with Wind section's rose. */
  const windGusts = val('wind_gusts', 'wind_gust_speed') || val('wind_gusts', 'wind_gusts');
  const dewPoint = val('dew_point', 'dew_point');
  const visibility = val('visibility', 'visibility');
  const pressure = val('pressure', 'pressure');

  const tempUnit = unit('temperature', '°C');
  const visUnit = unit('visibility', 'km');
  const pressUnit = unit('pressure', 'hPa');
  const dewUnit = unit('dew_point', '°C');
  // Resolve today's L / H. Preference order:
  //   1. Daily forecast slot [0] — HA's standard shape exposes
  //      `templow` (day min) + `temperature` (day max) for daily type.
  //   2. Scan hourly forecast for today's entries and take min/max.
  //   3. Legacy attrs.forecast (only populated on a few older
  //      integrations; hourly attrs flat-out have no templow and
  //      `temperature` ≈ current, which causes L === H bug).
  //   4. Collapse to current temp when nothing usable — better than
  //      fabricating a ±5° range that misleads users.
  const dailyForecast = /** @type {Array<Record<string, unknown>>|undefined} */ (forecastData?.daily);
  const hourlyForecast = /** @type {Array<Record<string, unknown>>|undefined} */ (forecastData?.hourly);
  const legacyForecast = /** @type {Array<Record<string, unknown>>|undefined} */ (attrs.forecast);

  /** @type {number} */
  let tempLow = temp;
  /** @type {number} */
  let tempHigh = temp;

  if (dailyForecast && dailyForecast.length > 0) {
    // Daily forecast shape: templow = min, temperature = max for that day.
    const d0 = dailyForecast[0];
    const dLow = Number(d0.templow);
    const dHigh = Number(d0.temperature);
    if (Number.isFinite(dLow) && Number.isFinite(dHigh)) {
      tempLow = Math.min(dLow, dHigh);
      tempHigh = Math.max(dLow, dHigh);
    }
  } else if (hourlyForecast && hourlyForecast.length > 0) {
    // Derive today's window from hourly forecasts. Scan the next
    // 24 slots (or until we cross midnight) and pick min / max of
    // the `temperature` field.
    const now = Date.now();
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);
    const endMs = endOfDay.getTime();
    let mn = Infinity;
    let mx = -Infinity;
    for (const slot of hourlyForecast.slice(0, 24)) {
      const slotTs = Date.parse(String(slot.datetime ?? ''));
      if (Number.isFinite(slotTs) && (slotTs < now || slotTs > endMs)) continue;
      const v = Number(slot.temperature);
      if (!Number.isFinite(v)) continue;
      if (v < mn) mn = v;
      if (v > mx) mx = v;
    }
    if (Number.isFinite(mn) && Number.isFinite(mx) && mn !== mx) {
      tempLow = Math.min(mn, temp);
      tempHigh = Math.max(mx, temp);
    }
  } else if (legacyForecast && legacyForecast.length > 0) {
    const f0 = legacyForecast[0];
    const fLow = Number(f0.templow);
    const fHigh = Number(f0.temperature);
    if (Number.isFinite(fLow) && Number.isFinite(fHigh)) {
      tempLow = Math.min(fLow, fHigh);
      tempHigh = Math.max(fLow, fHigh);
    }
  }

  const uvSensor = discovery.atmosCe.uv_index;
  const uvIndex = uvSensor
    ? Number(hass.states[uvSensor]?.state) || 0
    : Number(attrs.uv_index ?? 0);

  const { value: precipNow, unit: precipUnitRaw } = readSensorValue(hass, ce.precipitation);
  const precipUnit = /** @type {string} */ (precipUnitRaw || 'mm');

  const { value: rainNow, unit: rainUnitRaw } = readSensorValue(hass, ce.rain);
  const { value: showersNow, unit: showersUnitRaw } = readSensorValue(hass, ce.showers);
  const { value: snowfallNow, unit: snowfallUnitRaw } = readSensorValue(hass, ce.snowfall);
  const rainUnit = /** @type {string} */ (rainUnitRaw || 'mm');
  const showersUnit = /** @type {string} */ (showersUnitRaw || 'mm');
  const snowfallUnit = /** @type {string} */ (snowfallUnitRaw || 'cm');


  const dewComfortSensor = ce.dew_point_comfort ? hass.states[ce.dew_point_comfort] : null;
  const visibilityCatSensor = ce.visibility_category ? hass.states[ce.visibility_category] : null;
  const feelsContextSensor = ce.feels_like_context ? hass.states[ce.feels_like_context] : null;
  const pressureTrendSensor = ce.pressure_trend ? hass.states[ce.pressure_trend] : null;

  // Derive today's sunrise / sunset + anchor Atmos CE event-time
  // sensors via shared helpers. See weather-primitives.js for the
  // full rationale (HA next-event semantics + 24h anchor pattern).
  const nowForPhase = new Date();
  const sunStateForPhase = sunEntityId ? hass.states[sunEntityId] : null;
  const nextRising = /** @type {string|undefined} */ (sunStateForPhase?.attributes?.next_rising);
  const nextSetting = /** @type {string|undefined} */ (sunStateForPhase?.attributes?.next_setting);
  const { todaySunrise: todaySunriseForPhase, todaySunset: todaySunsetForPhase, tomorrowSunrise: tomorrowSunriseForPhase } =
    deriveTodaySunBoundaries(nowForPhase, nextRising, nextSetting);

  let cloudCover = null;
  if (discovery.atmosCe.cloud_cover) {
    cloudCover = {
      total: Number(hass.states[discovery.atmosCe.cloud_cover]?.state) || 0,
      low: Number(hass.states[discovery.atmosCe.cloud_cover_low]?.state) || 0,
      mid: Number(hass.states[discovery.atmosCe.cloud_cover_mid]?.state) || 0,
      high: Number(hass.states[discovery.atmosCe.cloud_cover_high]?.state) || 0,
    };
  }

  const stabilitySensor = ce.stability_assessment ? hass.states[ce.stability_assessment] : null;
  const stabilityState = stabilitySensor?.state || '';

  // Compass direction (16-point via compassLabel, 8-point fallback)
  const dirLabel = compassLabel(windBearing);

  const fxAttr = `data-condition="${escapeHtml(condition)}" data-night="${isNight}" data-cloud='${escapeHtml(JSON.stringify(cloudCover || ''))}'`;

  const hotIntensity = intensityRatio(temp, 20, 42);
  const coldIntensity = intensityRatio(temp, 15, -10);
  const tempIntensity = Math.max(hotIntensity, coldIntensity);
  const vignetteGrad = tensionVignette(tempIntensity);
  const vignetteHtml = vignetteGrad ? `<div class="pw-tension-vignette" style="background: ${sanitizeCssValue(vignetteGrad)}"></div>` : '';

  /* Plain text — the hero renders this through t.gloss, which takes a string. */
  const feelsContext = feelsContextSensor?.state || '';
  const feelsDiff = feelsContextSensor?.attributes?.difference;
  let feelsPlain = '';
  if (feelsDiff !== null && feelsDiff !== undefined) {
    const rounded = Math.round(Number(feelsDiff));
    if (feelsContext === 'wind_chill') feelsPlain = `Wind chill ${rounded}\u00b0`;
    else if (feelsContext === 'heat_index') feelsPlain = `Heat index +${rounded}\u00b0`;
  }

  const dewComfort = dewComfortSensor?.state || '';

  const showGust = windGusts > windSpeed + 5;

  // Two phases only — no golden / blue split. sun.sun is the single
  // source of truth: above_horizon → Day (sunrise → sunset, amber
  // gradient), below_horizon → Night (today's sunset → tomorrow's
  // sunrise, cool blue). The previous 6-theme cascade was a long
  // tail of edge-case bugs; this version has a single branch.
  let dayArcHtml = '';
  const sunEntity = sunEntityId ? hass.states[sunEntityId] : null;
  if (sunEntity && todaySunriseForPhase && todaySunsetForPhase && tomorrowSunriseForPhase) {
    const nowMs = nowForPhase.getTime();
    const isDaytime = sunEntity.state === 'above_horizon';
    let fillPct;
    let leftLabel;
    let rightLabel;
    let fillStyle;
    let labelColor;
    if (isDaytime) {
      const srMs = todaySunriseForPhase.getTime();
      const ssMs = todaySunsetForPhase.getTime();
      const dur = Math.max(ssMs - srMs, 1);
      fillPct = Math.max(0, Math.min(100, ((nowMs - srMs) / dur) * 100));
      leftLabel = formatHHMM(todaySunriseForPhase, timeZone);
      rightLabel = formatHHMM(todaySunsetForPhase, timeZone);
      fillStyle = 'background: linear-gradient(to right, #ff9f0a, #ffd60a)';
      labelColor = '#ff9f0a';
    } else {
      // Night — sunset to tomorrow's sunrise. If the user is looking
      // pre-sunrise, today's sunset is ~yesterday; deriveTodaySunBoundaries
      // already returns the most-recent sunset so the math holds.
      const startMs = todaySunsetForPhase.getTime();
      const endMs = tomorrowSunriseForPhase.getTime();
      const dur = Math.max(endMs - startMs, 1);
      fillPct = Math.max(0, Math.min(100, ((nowMs - startMs) / dur) * 100));
      leftLabel = formatHHMM(todaySunsetForPhase, timeZone);
      rightLabel = formatHHMM(tomorrowSunriseForPhase, timeZone);
      fillStyle = 'background: linear-gradient(to right, #1a3050, #5ac8fa)';
      labelColor = '#5ac8fa';
    }
    const markerStyle = `left:${Number(fillPct)}%; background:${sanitizeCssValue(labelColor)}; box-shadow: 0 0 6px ${sanitizeCssValue(labelColor)}66`;
    const labelStyle = ` style="color:${sanitizeCssValue(labelColor)}"`;
    const markerIcon = isDaytime ? '' : '\u{1F319}';

    /* No container opacity — it would multiply against the labels and drop the
       night cyan under the contrast floor. The cyan fill and moon marker already
       signal night. */
    dayArcHtml = `
      <div class="pw-day-arc">
        <span class="pw-day-arc-label"${labelStyle}>${escapeHtml(leftLabel)}</span>
        <div class="pw-day-arc-bar">
          <div class="pw-day-arc-fill" style="width:${Number(fillPct)}%; ${fillStyle}"></div>
          <div class="pw-day-arc-marker" style="${markerStyle}">${markerIcon}</div>
        </div>
        <span class="pw-day-arc-label"${labelStyle}>${escapeHtml(rightLabel)}</span>
      </div>`;
  }

  let narrativeText = '';
  let stormBlock = '';
  const hourly = forecastData?.hourly || [];
  if (hourly.length > 0) {
    const now = new Date();
    // Shared helper: include current hour (1h buffer), drop unparseable
    // datetimes. Matches forecast.js and meteogram.js so the "next" hour
    // shown across sections is consistent.
    const futureHourly = filterFutureHourly(
      /** @type {Array<Record<string, *>>} */ (hourly),
      now,
    );
    const slots = futureHourly.slice(0, 12);

    const precipLabel = buildPrecipLabel(precipNow, precipUnit, rainNow, rainUnit, showersNow, showersUnit, snowfallNow, snowfallUnit);
    /* Live precip outranks the forecast narrative during active rain. Plain
       text: t.narrative takes a string, and buildPrecipLabel already escapes. */
    if (precipNow > 0) {
      narrativeText = precipLabel;
    } else {
      const narrative = composeNarrative({
        now: new Date(),
        cloudCoverNow: cloudCover ? cloudCover.total : 0,
        conditionNow: condition,
        slots,
        windSpeed,
        uvIndex,
        stabilityState,
        timeZone,
      });
      narrativeText = narrative.sentence;
    }

    /* 300 J/kg is the floor buildCapeSparklineSvg scales against — below it the
       curve is flat at the baseline, so there is nothing to show. */
    if (slots.some((h) => Number(h.cape) > 300)) {
      const w = 320;
      const h = 24;
      const spark = buildCapeSparklineSvg(slots, w, h);
      const peakDt = slots[spark.peakIndex]?.datetime
        ? new Date(/** @type {string} */ (slots[spark.peakIndex].datetime))
        : null;
      const peakLabel = spark.peakValue >= 1000
        ? `${(spark.peakValue / 1000).toFixed(1)}k`
        : String(Math.round(spark.peakValue));
      const caption = peakDt
        ? `storm risk · peak ${peakLabel} J/kg at ${formatHHMM(peakDt, timeZone)}`
        : `storm risk · peak ${peakLabel} J/kg`;
      const gradId = uniqueSvgId('pw-cape-grad');
      stormBlock = `<div class="pw-overview-spark-block">
        ${t.chartCaption(caption)}
        <div class="pw-overview-storm">
          <svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" role="img" aria-label="${escapeHtml(caption)}">
            <defs>
              <linearGradient id="${gradId}" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="var(--pw-warn-amber)" stop-opacity="0.35"/>
                <stop offset="100%" stop-color="var(--pw-warn-amber)" stop-opacity="0.04"/>
              </linearGradient>
            </defs>
            <path d="${spark.areaPath}" fill="url(#${gradId})"/>
            <path d="${spark.svgPath}" fill="none" stroke="var(--pw-warn-amber)" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>
      </div>`;
    }
  }

  // \u2500\u2500 Hero first + narrative caption + 4-col stats \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  const conditionLabel = formatCondition(condition);
  const variant = brandMarkVariant(condition, isNight);
  const locationLabel = config?.location_label || 'Now';
  const cloudPct = cloudCover ? Math.round(cloudCover.total) + '%' : '--';

  const heroFragment = `
        <div class="pw-loc-stamp">${escapeHtml(locationLabel)} \u00b7 ${escapeHtml(formatHHMM(new Date(), timeZone))}</div>
        <div class="pw-hero-block">
          ${t.display(Math.round(temp), { suffix: tempUnit })}
          ${t.gloss(`${conditionLabel}${feelsPlain ? ' \u00b7 ' + feelsPlain : ''}`)}
        </div>`;

  const statsFragment = t.statsRow([
    t.stat(`${Math.round(tempLow)}/${Math.round(tempHigh)}\u00b0`, 'range'),
    t.stat(`${Math.round(windSpeed)}${showGust ? ` / ${Math.round(windGusts)}` : ''} ${dirLabel}`, showGust ? 'wind / gust' : 'wind'),
    t.stat(Math.round(uvIndex), 'uv'),
    t.stat(cloudPct, 'cloud'),
  ], { columns: 4 });

  // \u2500\u2500 Pro view: arcs + 7-day spark + stats \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  // Build a 7-day temperature sparkline from the daily forecast. Each
  // point is the day's high; min/max scale to the week's range so the
  // curve shows the warmest day relative to the others. A cream "now"
  // marker at index 0 picks out today.
  const daily = (forecastData?.daily || []).slice(0, 7);
  let sparkSvg = '';
  if (daily.length >= 2) {
    const w = 320;
    const h = 38;
    const highs = daily.map((d) => Number(d.temperature) || 0);
    const lows = daily.map((d) => Number(d.templow ?? d.temperature) || 0);
    const min = Math.min(...lows);
    const max = Math.max(...highs);
    const span = Math.max(max - min, 1);
    const ptX = (/** @type {number} */ i) => (i / (daily.length - 1)) * w;
    const ptY = (/** @type {number} */ v) => h - ((v - min) / span) * (h - 4) - 2;
    const lineD = highs.map((v, i) => `${i === 0 ? 'M' : 'L'}${ptX(i).toFixed(1)},${ptY(v).toFixed(1)}`).join(' ');
    const areaD = `${lineD} L${w},${h} L0,${h} Z`;
    sparkSvg = `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
      <path d="${areaD}" fill="rgba(168,61,42,0.08)"/>
      <path d="${lineD}" stroke="var(--pw-ink-cream)" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0.85"/>
    </svg>`;
  }
  const sparkBlock = sparkSvg
    ? `<div class="pw-overview-spark-block">
        ${t.chartCaption('7-day temperature trend')}
        <div class="pw-overview-spark">${sparkSvg}</div>
      </div>`
    : '';

  // Extended stats row (humidity / dew point / pressure trend /
  // visibility category) appears below the standard stats whenever
  // at least two of the four fields are available. No toggle —
  // information density is the default for the Overview section.
  const visCategory = visibilityCatSensor?.state || '';
  const pressureTrend = pressureTrendSensor?.state || '';
  const extendedAvailable = [
    Number.isFinite(humidity) && humidity > 0,
    Number.isFinite(dewPoint) && dewPoint !== 0,
    Boolean(visCategory),
    Boolean(pressureTrend),
  ].filter(Boolean).length >= 2;
  let extendedStatsRow = '';
  if (extendedAvailable) {
    const humStat = Number.isFinite(humidity) && humidity > 0
      ? t.stat(`${Math.round(humidity)}%`, dewComfort || 'humidity')
      : t.stat('—', 'humidity');
    const dewStat = Number.isFinite(dewPoint)
      ? t.stat(`${Math.round(dewPoint)}${dewUnit}`, 'dew point')
      : t.stat('—', 'dew point');
    const pressStat = Number.isFinite(pressure) && pressure > 0
      ? t.stat(`${Math.round(pressure)}`, pressureTrend ? `${pressUnit} ${pressureTrend}` : pressUnit)
      : t.stat('—', 'pressure');
    const visStat = Number.isFinite(visibility) && visibility > 0
      ? t.stat(`${visibility.toFixed(visibility < 10 ? 1 : 0)}${visUnit}`, visCategory || 'visibility')
      : t.stat('—', 'visibility');
    extendedStatsRow = t.statsRow([humStat, dewStat, pressStat, visStat], { columns: 4 });
  }

  const body = `
        ${heroFragment}
        ${t.narrative(narrativeText)}
        ${dayArcHtml}
        ${sparkBlock}
        ${stormBlock}
        ${statsFragment}
        ${extendedStatsRow}`;

  return renderSectionShell({
    sectionClass: 'pw-overview-v2',
    ariaLabel: 'Current weather overview',
    brandVariant: variant,
    preContent: `${vignetteHtml}<div class="pw-fx" ${fxAttr} role="img" aria-label="${escapeHtml(condition)} weather effects"></div>`,
    body,
    pro: config?.pro !== false,
  });
}
