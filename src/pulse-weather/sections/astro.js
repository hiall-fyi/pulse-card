/**
 * @module pulse-weather/sections/astro
 * @description Sun/moon arc, sky-wash themes, moon phase rendering.
 */

import { escapeHtml, sanitizeCssValue, statHtml, getSkyTheme, SKY_THEMES, uniqueSvgId } from '../weather-primitives.js';
import { tensionWash } from '../../shared/visual-tension.js';
import { SYNODIC_MONTH, MOON_PHASES } from '../constants.js';

// ── Arc geometry ────────────────────────────────────────────────────
const ARC_W = 360;
const ARC_H = 190;
const ARC_R = 130;
const ARC_CX = ARC_W / 2;
const HORIZ_Y = ARC_H - 24;
const ARC_LEFT = ARC_CX - ARC_R;
const ARC_RIGHT = ARC_CX + ARC_R;
const HALF_CIRC = Math.PI * ARC_R;
const SUN_RAY_COUNT = 8;
const SUN_RAY_R1 = 12;
const SUN_RAY_R2 = 16;

// ── Phase-aware arc fill gradients ──────────────────────────────────
const ARC_FILLS = [
  { top: '#0a0a2a', bottom: '#1a1a3a' },   // 0: Night
  { top: '#1a2a5a', bottom: '#3a5a8a' },   // 1: Blue Hour AM
  { top: '#8a4a1a', bottom: '#cc7a2a' },   // 2: Golden Hour AM
  { top: '#2a5a9a', bottom: '#6aacdc' },   // 3: Daytime
  { top: '#8a3a1a', bottom: '#cc5a2a' },   // 4: Golden Hour PM
  { top: '#1a2050', bottom: '#3a4a7a' },   // 5: Blue Hour PM
];

function arcPt(/** @type {number} */ prog) {
  const a = Math.PI * (1 - prog);
  return { x: ARC_CX + ARC_R * Math.cos(a), y: HORIZ_Y - ARC_R * Math.sin(a) };
}

/** @param {number} moonAge */
export function moonPhaseFromAge(moonAge) {
  const age = ((moonAge % SYNODIC_MONTH) + SYNODIC_MONTH) % SYNODIC_MONTH;
  return MOON_PHASES[Math.floor((age / SYNODIC_MONTH) * 8) % 8];
}

/** @param {number} moonAge */
export function isWaxing(moonAge) {
  const age = ((moonAge % SYNODIC_MONTH) + SYNODIC_MONTH) % SYNODIC_MONTH;
  return age < SYNODIC_MONTH / 2;
}

/** @type {number} */
const DAY_MS = 86400000;

/**
 * Compute moon visibility and arc progress from sensor times.
 * Sensor always returns today's moonrise/moonset — this function handles
 * cross-midnight transits where the moon rose yesterday.
 *
 * Truth table (all rows use sensor "today" times):
 * | # | rise vs now | set vs now | rise vs set | visible | action |
 * |---|-------------|------------|-------------|---------|--------|
 * | 1 | past        | future     | rise < set  | yes     | normal same-day |
 * | 2 | past        | past       | rise < set  | no      | already set |
 * | 3 | past        | future     | rise > set  | yes     | cross-midnight, still up |
 * | 4 | past        | past       | rise > set  | no      | cross-midnight, already set |
 * | 5 | future      | future     | rise > set  | yes     | BUG FIX — shift rise back 24h |
 * | 6 | future      | future     | rise < set  | no      | transit not started |
 * | 7 | future      | past       | rise > set  | no      | moon set this morning |
 *
 * @param {Date} now - Current time.
 * @param {Date} moonrise - Today's moonrise from sensor.
 * @param {Date} moonset - Today's moonset from sensor.
 * @returns {{ visible: boolean, progress: number }} Moon state.
 */
export function computeMoonVisibility(now, moonrise, moonset) {
  const nowMs = now.getTime();
  const riseMs = moonrise.getTime();
  const setMs = moonset.getTime();

  if (riseMs <= nowMs) {
    // moonrise is in the past
    if (setMs > riseMs && setMs >= nowMs) {
      // Row 1: Normal same-day — rise(past) < now < set(future), rise < set
      const dur = setMs - riseMs;
      return { visible: true, progress: Math.max(0, Math.min(1, (nowMs - riseMs) / dur)) };
    }
    if (setMs < riseMs) {
      // Cross-midnight: rise(past), set time-value < rise time-value
      const effSet = setMs + DAY_MS;
      if (nowMs <= effSet) {
        // Row 3: Cross-midnight, moon still up
        const dur = effSet - riseMs;
        return { visible: true, progress: Math.max(0, Math.min(1, (nowMs - riseMs) / dur)) };
      }
      // Row 4: Cross-midnight, moon already set (nowMs > effSet)
    }
    // Row 2: past rise, past set, rise < set → already set
    // Row 4: past rise, rise > set, nowMs > effSet → already set after cross-midnight
    return { visible: false, progress: 0 };
  }

  // moonrise is in the future
  if (setMs < riseMs && nowMs < setMs) {
    // Row 5 — BUG FIX: cross-midnight pattern with future moonrise
    // Moon is up from yesterday's rise. Shift moonrise back 24h.
    const effRise = riseMs - DAY_MS;
    const dur = setMs - effRise;
    return { visible: true, progress: Math.max(0, Math.min(1, (nowMs - effRise) / dur)) };
  }

  // Row 6: Both future, rise < set → same-day transit not started yet
  // Row 7: Future rise, past set, rise > set → moon already set from yesterday's transit
  return { visible: false, progress: 0 };
}

/**
 * Format hours as "X h XX min" for daylight duration display.
 * @param {number} hours - Duration in decimal hours.
 * @returns {string} Formatted duration string.
 */
export function fmtDaylightDuration(hours) {
  if (!hours || isNaN(hours) || hours <= 0) return '--';
  const h = Math.floor(hours);
  const m = Math.round((hours - h) * 60);
  return h + ' hr ' + String(m).padStart(2, '0') + ' min';
}

function fmtTime(/** @type {Date|null} */ date) {
  if (!date || isNaN(date.getTime())) return '--:--';
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
}

/**
 * Create an SVG element string.
 * @param {string} tag - SVG element tag name.
 * @param {Record<string, string|number>} attrs - Element attributes.
 * @param {string} [content] - Optional inner content (self-closing if omitted).
 * @returns {string} SVG element markup.
 */
function sv(tag, attrs, content) {
  const a = Object.entries(attrs).map(([k, v]) => ' ' + k + '="' + escapeHtml(String(v)) + '"').join('');
  return content !== undefined ? '<' + tag + a + '>' + content + '</' + tag + '>' : '<' + tag + a + '/>';
}

/**
 * Render a single twilight time entry (time + optional label).
 * Returns empty string if date is invalid (sensor unavailable).
 * @param {Date|null} date - Twilight time.
 * @param {string} label - Label text (empty string for no label).
 * @param {string} color - CSS colour for the time text.
 * @returns {string} HTML string.
 */
export function renderTwilightEntry(date, label, color) {
  if (!date || isNaN(date.getTime())) return '';
  const timeHtml = '<span class="pw-twilight-time" style="color:' + sanitizeCssValue(color) + '">'
    + escapeHtml(fmtTime(date)) + '</span>';
  const labelHtml = label
    ? '<span class="pw-twilight-label">' + escapeHtml(label) + '</span>'
    : '';
  return '<div class="pw-twilight-entry">' + timeHtml + labelHtml + '</div>';
}

// ── Twilight arc gradient (APK pixel-sampled, 12 stops) ─────────────
/** @type {ReadonlyArray<{offset: string, color: string, opacity: number}>} */
const TWILIGHT_ARC_GRADIENT_STOPS = [
  { offset: '0%',   color: '#fe9d36', opacity: 0.05 },
  { offset: '8%',   color: '#fe9d36', opacity: 0.3 },
  { offset: '15%',  color: '#fe9d36', opacity: 0.6 },
  { offset: '25%',  color: '#fe9d36', opacity: 0.8 },
  { offset: '35%',  color: '#fe8d36', opacity: 0.8 },
  { offset: '45%',  color: '#fc6540', opacity: 0.8 },
  { offset: '55%',  color: '#df3de7', opacity: 0.8 },
  { offset: '65%',  color: '#613be8', opacity: 0.8 },
  { offset: '75%',  color: '#223fd3', opacity: 0.8 },
  { offset: '85%',  color: '#183fd0', opacity: 0.7 },
  { offset: '95%',  color: '#183fd0', opacity: 0.3 },
  { offset: '100%', color: '#183fd0', opacity: 0.05 },
];

/**
 * Determine twilight arc opacity based on sky phase.
 * Currently every branch returns 1.0 — per-phase modulation is done
 * via gradient stops in renderTwilightArc. Switch kept as an explicit
 * extension point for future phase-specific opacity tuning.
 * @param {number} themeIdx - Current sky theme index (0–5).
 * @returns {number} Opacity value (0–1).
 */
export function getTwilightArcOpacity(themeIdx) {
  switch (themeIdx) {
    case 2: case 4: return 1.0;
    case 1: case 5: return 1.0;
    case 0: return 1.0;
    default: return 1.0;
  }
}

/**
 * Render a curved twilight arc SVG (APK-accurate geometry).
 * ViewBox 46×233, quadratic Bézier, 17px stroke with 12-stop gradient.
 * @param {'am'|'pm'} side - Which side to render.
 * @param {number} opacity - Overall arc opacity (from getTwilightArcOpacity).
 * @returns {string} SVG markup string.
 */
export function renderTwilightArc(side, opacity) {
  const gradId = uniqueSvgId('pw-twi-grad-' + side);
  const path = side === 'am'
    ? 'M12,4 Q8,60 8,116 Q9,170 34,227'
    : 'M34,4 Q38,60 38,116 Q37,170 12,227';

  const stops = TWILIGHT_ARC_GRADIENT_STOPS
    .map(function(s) {
      return '<stop offset="' + s.offset + '" stop-color="' + s.color
        + '" stop-opacity="' + s.opacity + '"/>';
    })
    .join('');

  return '<svg class="pw-twilight-arc pw-twilight-arc-' + side
    + '" viewBox="0 0 46 233" preserveAspectRatio="none"'
    + ' style="opacity:' + opacity + '">'
    + '<defs><linearGradient id="' + gradId + '" x1="0" y1="0" x2="0" y2="1">'
    + stops + '</linearGradient></defs>'
    + '<path d="' + path + '" fill="none" stroke="url(#' + gradId
    + ')" stroke-width="17" stroke-linecap="round"/>'
    + '</svg>';
}

/**
 * @param {import('../types.js').RenderContext} ctx
 * @returns {string|null}
 */
export function renderAstro({ hass, config: _config, discovery }) {
  const now = new Date();
  const sunEntity = discovery.sunEntityId ? hass.states[discovery.sunEntityId] : null;
  if (!sunEntity) return null;

  const sunAttrs = sunEntity.attributes || {};
  const nextRise = new Date(/** @type {string} */ (sunAttrs.next_rising || sunAttrs.sunrise) || now.toISOString());
  const nextSet = new Date(/** @type {string} */ (sunAttrs.next_setting || sunAttrs.sunset) || now.toISOString());

  // Derive today's sunrise/sunset from next_rising/next_setting.
  let sunrise = nextRise.getTime() > now.getTime()
    ? new Date(nextRise.getTime() - 86400000)
    : nextRise;
  let sunset = nextSet.getTime() > now.getTime()
    ? nextSet
    : new Date(nextSet.getTime() - 86400000);

  if (sunset.getTime() > sunrise.getTime() + 86400000) {
    sunset = new Date(sunset.getTime() - 86400000);
  }
  if (sunrise.getTime() > sunset.getTime()) {
    sunrise = new Date(sunrise.getTime() - 86400000);
  }

  // Next-day sunrise/sunset for display after sunset
  const tomorrowSunrise = nextRise.getTime() > now.getTime() ? nextRise : new Date(nextRise.getTime() + 86400000);
  const tomorrowSunset = nextSet.getTime() > now.getTime() ? nextSet : new Date(nextSet.getTime() + 86400000);

  const ce = discovery.atmosCe;
  const goldenAmStart = ce.golden_hour_morning_start ? new Date(String(hass.states[ce.golden_hour_morning_start]?.state)) : null;
  const goldenAmEnd = ce.golden_hour_morning_end ? new Date(String(hass.states[ce.golden_hour_morning_end]?.state)) : null;
  const goldenPmStart = ce.golden_hour_evening_start ? new Date(String(hass.states[ce.golden_hour_evening_start]?.state)) : null;
  const goldenPmEnd = ce.golden_hour_evening_end ? new Date(String(hass.states[ce.golden_hour_evening_end]?.state)) : null;
  const blueAmRaw = ce.blue_hour_morning_start ? new Date(String(hass.states[ce.blue_hour_morning_start]?.state)) : null;
  const blueAmEnd = ce.blue_hour_morning_end ? new Date(String(hass.states[ce.blue_hour_morning_end]?.state)) : null;
  const bluePmRaw = ce.blue_hour_evening_start ? new Date(String(hass.states[ce.blue_hour_evening_start]?.state)) : null;
  const bluePmEnd = ce.blue_hour_evening_end ? new Date(String(hass.states[ce.blue_hour_evening_end]?.state)) : null;

  // Arc range: sunrise → sunset
  const dayLen = sunset.getTime() - sunrise.getTime();
  const toProg = function(/** @type {Date|null} */ t) {
    return t && dayLen > 0 ? Math.max(0, Math.min(1, (t.getTime() - sunrise.getTime()) / dayLen)) : -1;
  };

  const moonEntity = ce.moon_phase ? hass.states[ce.moon_phase] : null;
  const moonAttrs = moonEntity?.attributes || {};
  const moonAge = moonAttrs.moon_age !== undefined ? Number(moonAttrs.moon_age) : null;
  const moonIllum = moonAttrs.illumination !== undefined ? Number(moonAttrs.illumination) : null;
  const moonPhaseName = moonAge !== null ? moonPhaseFromAge(moonAge) : (moonEntity?.state || null);
  const moonrise = ce.moonrise ? new Date(hass.states[ce.moonrise]?.state) : null;
  const moonset = ce.moonset ? new Date(hass.states[ce.moonset]?.state) : null;

  const themeIdx = getSkyTheme(now, sunrise, sunset, goldenAmStart, goldenPmEnd, blueAmRaw, bluePmRaw, goldenPmStart);
  const theme = SKY_THEMES[themeIdx];
  const sunProg = toProg(now);
  const isDay = now.getTime() >= sunrise.getTime() && now.getTime() <= sunset.getTime();

  // ── Arc SVG ───────────────────────────────────────────────────────
  const arcD = 'M' + ARC_LEFT + ',' + HORIZ_Y + ' A' + ARC_R + ',' + ARC_R + ' 0 0 1 ' + ARC_RIGHT + ',' + HORIZ_Y;
  const fillD = arcD + ' Z';
  const parts = [];

  // SVG gradient definition for filled arc
  const gradId = uniqueSvgId('pw-arc-fill');
  const arcFill = ARC_FILLS[themeIdx];
  parts.push('<defs><linearGradient id="' + gradId + '" x1="0" y1="0" x2="0" y2="1">'
    + '<stop offset="0%" stop-color="' + arcFill.top + '"/>'
    + '<stop offset="100%" stop-color="' + arcFill.bottom + '"/>'
    + '</linearGradient></defs>');

  // Filled semicircle (background)
  parts.push(sv('path', { d: fillD, fill: 'url(#' + gradId + ')' }));

  // Horizon line
  parts.push(sv('line', { x1: ARC_LEFT, y1: HORIZ_Y, x2: ARC_RIGHT, y2: HORIZ_Y, stroke: 'rgba(255,255,255,0.2)', 'stroke-width': 1 }));


  // ── Sun body with rays ────────────────────────────────────────────
  if (isDay && sunProg >= 0) {
    const sp = arcPt(sunProg);
    const trailLen = sunProg * HALF_CIRC;
    parts.push(sv('path', { d: arcD, fill: 'none', stroke: 'rgba(255,220,100,0.1)', 'stroke-width': 2, 'stroke-dasharray': trailLen.toFixed(1) + ' ' + HALF_CIRC }));
    let sun = sv('circle', { cx: sp.x.toFixed(1), cy: sp.y.toFixed(1), r: 11, fill: '#ffd60a' });
    sun += sv('circle', { cx: sp.x.toFixed(1), cy: sp.y.toFixed(1), r: 7, fill: '#ffe066', opacity: 0.5 });
    for (let ri = 0; ri < SUN_RAY_COUNT; ri++) {
      const ra = ri * 45 * Math.PI / 180;
      sun += sv('line', { x1: (sp.x + SUN_RAY_R1 * Math.cos(ra)).toFixed(1), y1: (sp.y + SUN_RAY_R1 * Math.sin(ra)).toFixed(1), x2: (sp.x + SUN_RAY_R2 * Math.cos(ra)).toFixed(1), y2: (sp.y + SUN_RAY_R2 * Math.sin(ra)).toFixed(1), stroke: '#ffd60a', 'stroke-width': 1.5, 'stroke-linecap': 'round', opacity: 0.4 });
    }
    parts.push('<g style="animation: pw-sunGlow 4s ease-in-out infinite">' + sun + '</g>');
  }

  // ── Moon body (phase-aware) ────────────────────────────────────────
  /**
   * Render moon phase SVG at given center point.
   * Uses two arcs: dark base circle + lit portion shaped by illumination.
   * @param {number} cx - Center X.
   * @param {number} cy - Center Y.
   * @param {number} r - Radius.
   * @param {number|null} illum - Illumination 0–100.
   * @param {number|null} age - Moon age for waxing/waning.
   * @returns {string} SVG markup.
   */
  function moonPhaseSvg(cx, cy, r, illum, age) {
    if (illum === null || illum === undefined) {
      return sv('circle', { cx: cx.toFixed(1), cy: cy.toFixed(1), r: r, fill: '#c8d0e0' });
    }
    const frac = Math.max(0, Math.min(1, illum / 100));
    const waxing = age !== null ? isWaxing(age) : true;

    // Dark side (base)
    let moon = sv('circle', { cx: cx.toFixed(1), cy: cy.toFixed(1), r: r, fill: '#2a2a3a' });

    if (frac >= 0.99) {
      moon += sv('circle', { cx: cx.toFixed(1), cy: cy.toFixed(1), r: r, fill: '#e8e0d0' });
    } else if (frac > 0.01) {
      const top = cy - r;
      const bot = cy + r;
      const terminatorRx = (r * Math.abs(2 * frac - 1)).toFixed(1);
      const litSweep = frac > 0.5 ? 1 : 0;

      let litPath;
      if (waxing) {
        litPath = 'M' + cx.toFixed(1) + ',' + top.toFixed(1)
          + ' A' + r + ',' + r + ' 0 0 1 ' + cx.toFixed(1) + ',' + bot.toFixed(1)
          + ' A' + terminatorRx + ',' + r + ' 0 0 ' + litSweep + ' ' + cx.toFixed(1) + ',' + top.toFixed(1) + ' Z';
      } else {
        litPath = 'M' + cx.toFixed(1) + ',' + top.toFixed(1)
          + ' A' + r + ',' + r + ' 0 0 0 ' + cx.toFixed(1) + ',' + bot.toFixed(1)
          + ' A' + terminatorRx + ',' + r + ' 0 0 ' + (1 - litSweep) + ' ' + cx.toFixed(1) + ',' + top.toFixed(1) + ' Z';
      }
      moon += sv('path', { d: litPath, fill: '#e8e0d0' });
    }
    return moon;
  }

  const hasMoonTimes = moonrise && moonset && !isNaN(moonrise.getTime()) && !isNaN(moonset.getTime());
  if (hasMoonTimes) {
    const moonState = computeMoonVisibility(now, moonrise, moonset);
    if (moonState.visible) {
      const mp = arcPt(moonState.progress);
      const mTrailLen = moonState.progress * HALF_CIRC;
      parts.push(sv('path', { d: arcD, fill: 'none', stroke: 'rgba(200,210,230,0.06)', 'stroke-width': 1.5, 'stroke-dasharray': mTrailLen.toFixed(1) + ' ' + HALF_CIRC }));
      parts.push('<g style="animation: pw-moonGlow 4s ease-in-out infinite">' + moonPhaseSvg(mp.x, mp.y, 8, moonIllum, moonAge) + '</g>');
    }
  } else if (!isDay) {
    const mp = arcPt(0.5);
    parts.push('<g style="animation: pw-moonGlow 4s ease-in-out infinite">' + moonPhaseSvg(mp.x, mp.y, 8, moonIllum, moonAge) + '</g>');
  }

  // ── Daylight/Nighttime duration text inside arc ────────────────────
  const labelY = HORIZ_Y - ARC_R * 0.48;
  const durationY = HORIZ_Y - ARC_R * 0.28;

  // Phase-aware: countdown to next transition
  let arcLabel;
  let countdownHours;
  if (isDay) {
    arcLabel = 'Daylight';
    countdownHours = (sunset.getTime() - now.getTime()) / 3600000;
  } else {
    arcLabel = 'Nighttime';
    countdownHours = (tomorrowSunrise.getTime() - now.getTime()) / 3600000;
  }
  const durationStr = fmtDaylightDuration(countdownHours);

  parts.push(sv('text', { x: ARC_CX, y: labelY, 'text-anchor': 'middle', fill: 'rgba(255,255,255,0.9)', 'font-size': 18, 'font-weight': 400 }, arcLabel));
  parts.push(sv('text', { x: ARC_CX, y: durationY, 'text-anchor': 'middle', fill: theme.labelColor, 'font-size': 22, 'font-weight': 500 }, escapeHtml(durationStr)));

  const arcSvg = '<svg style="display:block;width:100%;overflow:visible" viewBox="0 0 ' + ARC_W + ' ' + ARC_H + '" role="img" aria-label="Sun and moon arc">' + parts.join('') + '</svg>';

  // ── Twilight arc indicators (APK-accurate curved gradient arcs) ──────
  const twiArcOpacity = getTwilightArcOpacity(themeIdx);
  const leftTwiArc = renderTwilightArc('am', twiArcOpacity);
  const rightTwiArc = renderTwilightArc('pm', twiArcOpacity);

  // ── Twilight columns (arc is absolutely positioned inside each panel) ──
  // HTML matches prototype: individual entries with specific classes for margin positioning
  function twiTime(/** @type {Date|null} */ date, /** @type {string} */ cls, /** @type {string} */ color) {
    if (!date || isNaN(date.getTime())) return '';
    return '<div class="' + cls + '"><span class="pw-twilight-time" style="color:' + sanitizeCssValue(color) + '">' + escapeHtml(fmtTime(date)) + '</span></div>';
  }
  function twiLabel(/** @type {string} */ text, /** @type {string} */ cls) {
    return '<div class="' + cls + '"><span class="pw-twilight-label">' + escapeHtml(text) + '</span></div>';
  }

  const leftCol = '<div class="pw-twilight-col pw-twilight-am">'
    + leftTwiArc
    + twiTime(goldenAmEnd, 'pw-twilight-time-golden', '#ff9f0a')
    + twiLabel('Golden hour', 'pw-twilight-label-golden')
    + twiTime(blueAmEnd, 'pw-twilight-time-blue', '#5ac8fa')
    + twiLabel('Blue hour', 'pw-twilight-label-blue')
    + twiTime(blueAmRaw, 'pw-twilight-time-end', '#5ac8fa')
    + '</div>';

  const rightCol = '<div class="pw-twilight-col pw-twilight-pm">'
    + rightTwiArc
    + twiTime(goldenPmStart, 'pw-twilight-time-golden', '#ff9f0a')
    + twiLabel('Golden hour', 'pw-twilight-label-golden')
    + twiTime(bluePmRaw, 'pw-twilight-time-blue', '#5ac8fa')
    + twiLabel('Blue hour', 'pw-twilight-label-blue')
    + twiTime(bluePmEnd, 'pw-twilight-time-end', '#5ac8fa')
    + '</div>';

  // ── Sunrise/sunset below arc ──────────────────────────────────────
  const displaySunrise = isDay ? sunrise : tomorrowSunrise;
  const displaySunset = isDay ? sunset : tomorrowSunset;
  const sunriseSunset = '<div class="pw-sunrise-sunset">'
    + '<div class="pw-sun-time"><div class="pw-sun-time-value">' + escapeHtml(fmtTime(displaySunrise)) + '</div><div class="pw-sun-time-label">Sunrise</div></div>'
    + '<div class="pw-sun-time"><div class="pw-sun-time-value">' + escapeHtml(fmtTime(displaySunset)) + '</div><div class="pw-sun-time-label">Sunset</div></div>'
    + '</div>';

  // ── Time tension overlays ──────────────────────────────────────────
  const isGoldenHour = themeIdx === 2 || themeIdx === 4;
  const isNightTheme = themeIdx === 0;
  let tensionOverlay = '';
  if (isGoldenHour) {
    tensionOverlay = '<div class="pw-tension-wash" style="background: ' + sanitizeCssValue(tensionWash('#ff9f0a', 0.2)) + '"></div>';
  } else if (isNightTheme) {
    tensionOverlay = '<div class="pw-tension-wash" style="background: ' + sanitizeCssValue(tensionWash('#5ac8fa', 0.1)) + '"></div>';
  }

  // ── Moon stats row ────────────────────────────────────────────────
  const moonStats = '<div class="pulse-stats-row pw-moon-stats" role="img" aria-label="Moon statistics">'
    + (moonPhaseName ? statHtml(moonIllum !== null ? Math.round(moonIllum) + '%' : escapeHtml(moonPhaseName), 'Moon Phase', '') : '')
    + statHtml(escapeHtml(fmtTime(moonrise)), 'Moonrise', '')
    + statHtml(escapeHtml(fmtTime(moonset)), 'Moonset', '')
    + '</div>';

  // ── Final HTML assembly ───────────────────────────────────────────
  return '<div class="pw-section pw-astro">'
    + '<div class="pw-sky-wash" style="background: ' + sanitizeCssValue(theme.gradient) + '"></div>'
    + tensionOverlay
    + '<div class="pw-fx" data-astro-stars="' + theme.stars + '" data-astro-day="' + theme.isDay + '" role="img" aria-label="Sky atmospheric effects"></div>'
    + '<div class="pw-astro-content">'
    + '<div class="pw-section-header"><span class="pw-section-title">Sun &amp; Moon</span></div>'
    + '<div class="pw-astro-layout">'
    + leftCol
    + '<div class="pw-arc-center"><div class="pw-arc-wrap">' + arcSvg + '</div>' + sunriseSunset + '</div>'
    + rightCol
    + '</div>'
    + moonStats
    + '</div></div>';
}
