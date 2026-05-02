/**
 * @module pulse-weather/sections/astro
 * @description Sun/moon arc, sky-wash themes, moon phase rendering.
 */

import { escapeHtml, sanitizeCssValue } from '../weather-primitives.js';
import { intensityRatio, tensionWash } from '../../shared/visual-tension.js';
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

/** @type {ReadonlyArray<{name: string, gradient: string, labelColor: string, stars: boolean, isDay: boolean}>} */
const SKY_THEMES = [
  { name: 'Night',       gradient: 'linear-gradient(180deg, #050510, #0a0a1a 50%, transparent)', labelColor: '#636366', stars: true, isDay: false },
  { name: 'Blue Hour',   gradient: 'linear-gradient(180deg, #0a1628, #1a3050 60%, transparent)', labelColor: '#5ac8fa', stars: true, isDay: false },
  { name: 'Golden Hour', gradient: 'linear-gradient(180deg, #1a2a4a, #3a4a5a 40%, #6a4a30)', labelColor: '#ff9f0a', stars: false, isDay: true },
  { name: 'Daytime',     gradient: 'linear-gradient(180deg, #1a3a5f, #2c5a8e 50%, transparent)', labelColor: '#ffd60a', stars: false, isDay: true },
  { name: 'Golden Hour', gradient: 'linear-gradient(180deg, #2a2a3a, #5a3a2a 50%, #8a4a1a)', labelColor: '#ff6b35', stars: false, isDay: true },
  { name: 'Blue Hour',   gradient: 'linear-gradient(180deg, #0a1020, #1a2a40 60%, transparent)', labelColor: '#5ac8fa', stars: true, isDay: false },
];

function getSkyTheme(/** @type {Date} */ now, /** @type {Date} */ sunrise, /** @type {Date} */ sunset, /** @type {Date|null} */ goldenAmStart, /** @type {Date|null} */ goldenPmEnd, /** @type {Date|null} */ blueAm, /** @type {Date|null} */ bluePm) {
  const t = now.getTime(), sr = sunrise.getTime(), ss = sunset.getTime();
  const blueAmT = blueAm ? blueAm.getTime() : sr - 3600000;
  const goldenAmT = goldenAmStart ? goldenAmStart.getTime() : sr - 1800000;
  const goldenPmT = goldenPmEnd ? goldenPmEnd.getTime() : ss + 1800000;
  const bluePmT = bluePm ? bluePm.getTime() : ss + 3600000;
  if (t < blueAmT) return 0;
  if (t < goldenAmT) return 1;
  if (t < sr) return 2;
  if (t < ss) return 3;
  if (t < goldenPmT) return 4;
  if (t < bluePmT) return 5;
  return 0;
}

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

function fmtTime(/** @type {Date|null} */ date) {
  if (!date || isNaN(date.getTime())) return '--:--';
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
}

function fmtDuration(/** @type {number|null} */ hours) {
  if (hours === null || isNaN(hours)) return '--';
  return hours.toFixed(1) + 'h';
}

/**
 * Create an SVG element string.
 * @param {string} tag - SVG element tag name.
 * @param {Record<string, string|number>} attrs - Element attributes.
 * @param {string} [content] - Optional inner content (self-closing if omitted).
 * @returns {string} SVG element markup.
 */
function sv(tag, attrs, content) {
  const a = Object.entries(attrs).map(([k, v]) => ' ' + k + '="' + v + '"').join('');
  return content !== undefined ? '<' + tag + a + '>' + content + '</' + tag + '>' : '<' + tag + a + '/>';
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
  // At night: next_rising = tomorrow, next_setting = tomorrow → subtract 1 day from both to get today's.
  // During day: next_rising = tomorrow, next_setting = today → sunrise = next_rising - 1 day, sunset = next_setting.
  // Key insight: sunrise is always the most recent past rising, sunset is the most recent past or upcoming setting.
  let sunrise = nextRise.getTime() > now.getTime()
    ? new Date(nextRise.getTime() - 86400000)
    : nextRise;
  let sunset = nextSet.getTime() > now.getTime()
    ? nextSet  // upcoming sunset = today's sunset (we're before sunset)
    : nextSet; // past sunset = today's sunset (we're after sunset)

  // If sunset is tomorrow (both next_rising and next_setting are tomorrow at night),
  // subtract 1 day to get today's sunset
  if (sunset.getTime() > sunrise.getTime() + 86400000) {
    sunset = new Date(sunset.getTime() - 86400000);
  }

  // Ensure sunrise < sunset (same day pair)
  if (sunrise.getTime() > sunset.getTime()) {
    sunrise = new Date(sunrise.getTime() - 86400000);
  }

  // Next-day sunrise/sunset for stats display after sunset
  const tomorrowSunrise = nextRise.getTime() > now.getTime() ? nextRise : new Date(nextRise.getTime() + 86400000);
  const tomorrowSunset = nextSet.getTime() > now.getTime() ? nextSet : new Date(nextSet.getTime() + 86400000);

  const ce = discovery.atmosCe;
  const goldenAmStart = ce.golden_hour_morning_start ? new Date(String(hass.states[ce.golden_hour_morning_start]?.state)) : null;
  const goldenAmEnd = ce.golden_hour_morning_end ? new Date(String(hass.states[ce.golden_hour_morning_end]?.state)) : null;
  const goldenPmStart = ce.golden_hour_evening_start ? new Date(String(hass.states[ce.golden_hour_evening_start]?.state)) : null;
  const goldenPmEnd = ce.golden_hour_evening_end ? new Date(String(hass.states[ce.golden_hour_evening_end]?.state)) : null;
  const blueAmRaw = ce.blue_hour_morning ? new Date(String(hass.states[ce.blue_hour_morning]?.state)) : null;
  const bluePmRaw = ce.blue_hour_evening ? new Date(String(hass.states[ce.blue_hour_evening]?.state)) : null;

  // Arc range: sunrise → sunset (golden hours are arc segments, blue hours are bar extensions)
  const dayLen = sunset.getTime() - sunrise.getTime();

  // Progress helper: time → arc progress (0=sunrise, 1=sunset)
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

  const daylightEntity = ce.daylight_duration ? hass.states[ce.daylight_duration] : null;
  const daylightHours = daylightEntity ? Number(daylightEntity.state) : (sunset.getTime() - sunrise.getTime()) / 3600000;

  const themeIdx = getSkyTheme(now, sunrise, sunset, goldenAmStart, goldenPmEnd, blueAmRaw, bluePmRaw);
  const theme = SKY_THEMES[themeIdx];
  const sunProg = toProg(now);
  const isDay = now.getTime() >= sunrise.getTime() && now.getTime() <= sunset.getTime();

  // ── Arc SVG ───────────────────────────────────────────────────────
  const arcD = 'M' + ARC_LEFT + ',' + HORIZ_Y + ' A' + ARC_R + ',' + ARC_R + ' 0 0 1 ' + ARC_RIGHT + ',' + HORIZ_Y;
  const parts = [];

  // Countdown label — phase-aware
  let countdownLabel = '';
  let minutesUntilSunset = Infinity;
  if (isDay) {
    const msLeft = sunset.getTime() - now.getTime();
    minutesUntilSunset = msLeft / 60000;
    countdownLabel = Math.floor(msLeft / 3600000) + 'h ' + Math.floor((msLeft % 3600000) / 60000) + 'm until sunset';
  } else if (themeIdx === 4 && goldenPmEnd) {
    // Golden Hour PM
    const msLeft = goldenPmEnd.getTime() - now.getTime();
    if (msLeft > 0) {
      countdownLabel = Math.floor(msLeft / 60000) + 'm of golden hour left';
    }
  } else if (themeIdx === 5 && bluePmRaw) {
    // Blue Hour PM — estimate end as goldenPmEnd + 1h or bluePm + 30min
    const blueEnd = goldenPmEnd ? new Date(goldenPmEnd.getTime() + 3600000) : new Date(bluePmRaw.getTime() + 1800000);
    const msLeft = blueEnd.getTime() - now.getTime();
    if (msLeft > 0) {
      countdownLabel = Math.floor(msLeft / 60000) + 'm of blue hour left';
    }
  } else if (themeIdx === 1 && blueAmRaw) {
    // Blue Hour AM
    const msLeft = (goldenAmStart || sunrise).getTime() - now.getTime();
    if (msLeft > 0) {
      countdownLabel = Math.floor(msLeft / 60000) + 'm of blue hour left';
    }
  } else if (themeIdx === 2) {
    // Golden Hour AM
    const msLeft = sunrise.getTime() - now.getTime();
    if (msLeft > 0) {
      countdownLabel = Math.floor(msLeft / 60000) + 'm until sunrise';
    }
  } else {
    // Night
    const nextSr = sunrise.getTime() > now.getTime() ? sunrise : new Date(sunrise.getTime() + 86400000);
    const msUntil = nextSr.getTime() - now.getTime();
    if (msUntil > 0) {
      countdownLabel = Math.floor(msUntil / 3600000) + 'h ' + Math.floor((msUntil % 3600000) / 60000) + 'm until sunrise';
    }
  }

  // ── Horizon = progress bar + countdown ──────────────────────────────
  const barX2 = ARC_LEFT;
  const barW2 = ARC_RIGHT - ARC_LEFT;
  const dayProg2 = isDay ? Math.max(0, Math.min(1, sunProg)) : 0;
  // Track
  parts.push(sv('rect', { x: barX2, y: HORIZ_Y - 1.5, width: barW2, height: 3, rx: 1.5, fill: 'rgba(255,255,255,0.06)' }));
  // Fill
  if (dayProg2 > 0) {
    parts.push(sv('rect', { x: barX2, y: HORIZ_Y - 1.5, width: (barW2 * dayProg2).toFixed(1), height: 3, rx: 1.5, fill: theme.labelColor, opacity: 0.6 }));
  }
  // Countdown text below
  if (countdownLabel) {
    const sunsetUrgency = isDay ? intensityRatio(minutesUntilSunset, 180, 0) : 0;
    const countdownSize = Math.round(10 + sunsetUrgency * 4);
    const countdownFill = sunsetUrgency > 0.3 ? '#ff9f0a' : 'rgba(255,255,255,0.35)';
    const countdownOpacity = (0.35 + sunsetUrgency * 0.55).toFixed(2);
    parts.push(sv('text', { x: ARC_CX, y: HORIZ_Y + 14, 'text-anchor': 'middle', fill: countdownFill, 'font-size': countdownSize, opacity: countdownOpacity }, escapeHtml(countdownLabel)));
  }

  // ── Arc track ─────────────────────────────────────────────────────
  parts.push(sv('path', { d: arcD, fill: 'none', stroke: 'rgba(255,255,255,0.08)', 'stroke-width': 2 }));

  // ── Golden hour arc segments (prototype style) ────────────────────
  const gamEndP = toProg(goldenAmEnd || goldenAmStart);
  const gpmStartP = toProg(goldenPmStart || goldenPmEnd);

  // Golden AM: sunrise (0) → golden AM end
  if (gamEndP > 0) {
    const len = gamEndP * HALF_CIRC;
    const tip = 'Golden Hour AM: ' + fmtTime(sunrise) + ' \u2013 ' + fmtTime(goldenAmEnd || goldenAmStart);
    parts.push('<g>' + sv('title', {}, escapeHtml(tip)) + sv('path', { d: arcD, fill: 'none', stroke: '#ff9f0a', 'stroke-width': 3, opacity: 0.5, 'stroke-dasharray': len.toFixed(1) + ' ' + HALF_CIRC }) + '</g>');
  }

  // Golden PM: golden PM start → sunset (1)
  if (gpmStartP > 0 && gpmStartP < 1) {
    const off = gpmStartP * HALF_CIRC;
    const len = (1 - gpmStartP) * HALF_CIRC;
    const tip = 'Golden Hour PM: ' + fmtTime(goldenPmStart || goldenPmEnd) + ' \u2013 ' + fmtTime(sunset);
    parts.push('<g>' + sv('title', {}, escapeHtml(tip)) + sv('path', { d: arcD, fill: 'none', stroke: '#ff6b35', 'stroke-width': 3, opacity: 0.5, 'stroke-dasharray': '0 ' + off.toFixed(1) + ' ' + len.toFixed(1) + ' ' + HALF_CIRC }) + '</g>');
  }

  // Rise/set time labels — dynamic per sky phase
  let horizLeftLabel = fmtTime(sunrise);
  let horizRightLabel = fmtTime(sunset);
  let horizLeftColor = '#ff9f0a';
  let horizRightColor = '#ff6b35';

  switch (themeIdx) {
    case 0: // Night
      horizLeftLabel = '';
      horizRightLabel = '';
      break;
    case 1: // Blue Hour AM
      horizLeftLabel = fmtTime(blueAmRaw);
      horizRightLabel = fmtTime(goldenAmStart);
      horizLeftColor = '#5ac8fa';
      horizRightColor = '#5ac8fa';
      break;
    case 2: // Golden Hour AM
      horizLeftLabel = fmtTime(goldenAmStart);
      horizRightLabel = fmtTime(sunrise);
      horizLeftColor = '#ff9f0a';
      horizRightColor = '#ff9f0a';
      break;
    case 3: // Daytime — sunrise/sunset (default)
      break;
    case 4: // Golden Hour PM
      horizLeftLabel = fmtTime(goldenPmStart || sunset);
      horizRightLabel = fmtTime(goldenPmEnd);
      horizLeftColor = '#ff6b35';
      horizRightColor = '#ff6b35';
      break;
    case 5: // Blue Hour PM
      horizLeftLabel = fmtTime(bluePmRaw);
      horizRightLabel = fmtTime(goldenPmEnd ? new Date(goldenPmEnd.getTime() + 3600000) : null);
      horizLeftColor = '#5ac8fa';
      horizRightColor = '#5ac8fa';
      break;
  }

  if (horizLeftLabel) {
    parts.push(sv('text', { x: ARC_LEFT, y: HORIZ_Y - 6, 'text-anchor': 'middle', fill: horizLeftColor, 'font-size': 9, opacity: 0.8 }, escapeHtml(horizLeftLabel)));
  }
  if (horizRightLabel) {
    parts.push(sv('text', { x: ARC_RIGHT, y: HORIZ_Y - 6, 'text-anchor': 'middle', fill: horizRightColor, 'font-size': 9, opacity: 0.8 }, escapeHtml(horizRightLabel)));
  }

  // Sun body with rays — show when sun is above horizon
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

  // Moon body — show when moon is above horizon (moonrise → moonset)
  // Moon has its own arc progress independent of the sun
  // Fallback: if moonrise/moonset sensors unavailable, show moon at night using sun arc
  const hasMoonTimes = moonrise && moonset && !isNaN(moonrise.getTime()) && !isNaN(moonset.getTime());
  if (hasMoonTimes) {
    // Handle cross-midnight: if moonset is before moonrise, it's tomorrow's moonset
    const effectiveMoonset = moonset.getTime() < moonrise.getTime()
      ? new Date(moonset.getTime() + 86400000)
      : moonset;
    const moonDayLen = effectiveMoonset.getTime() - moonrise.getTime();
    const moonAbove = moonDayLen > 0
      && now.getTime() >= moonrise.getTime()
      && now.getTime() <= effectiveMoonset.getTime();
    if (moonAbove) {
      const moonProg = Math.max(0, Math.min(1, (now.getTime() - moonrise.getTime()) / moonDayLen));
      const mp = arcPt(moonProg);
      const mTrailLen = moonProg * HALF_CIRC;
      parts.push(sv('path', { d: arcD, fill: 'none', stroke: 'rgba(200,210,230,0.06)', 'stroke-width': 1.5, 'stroke-dasharray': mTrailLen.toFixed(1) + ' ' + HALF_CIRC }));
      parts.push('<g style="animation: pw-moonGlow 4s ease-in-out infinite">' + sv('circle', { cx: mp.x.toFixed(1), cy: mp.y.toFixed(1), r: 8, fill: '#c8d0e0' }) + sv('circle', { cx: mp.x.toFixed(1), cy: mp.y.toFixed(1), r: 5, fill: '#e8e0d0', opacity: 0.5 }) + '</g>');
    }
  } else if (!isDay) {
    // Fallback: no moonrise/moonset data — show moon at center of arc at night
    const mp = arcPt(0.5);
    parts.push('<g style="animation: pw-moonGlow 4s ease-in-out infinite">' + sv('circle', { cx: mp.x.toFixed(1), cy: mp.y.toFixed(1), r: 8, fill: '#c8d0e0' }) + sv('circle', { cx: mp.x.toFixed(1), cy: mp.y.toFixed(1), r: 5, fill: '#e8e0d0', opacity: 0.5 }) + '</g>');
  }

  const arcSvg = '<svg style="display:block;width:100%;overflow:visible" viewBox="0 0 ' + ARC_W + ' ' + ARC_H + '" role="img" aria-label="Sun and moon arc">' + parts.join('') + '</svg>';

  const moonHeader = moonPhaseName
    ? escapeHtml(moonPhaseName) + (moonIllum !== null ? ' ' + Math.round(moonIllum) + '%' : '')
    : '';

  // ── Time tension overlays ──────────────────────────────────────────
  const isGoldenHour = themeIdx === 2 || themeIdx === 4;
  const isNightTheme = themeIdx === 0;
  let tensionOverlay = '';
  if (isGoldenHour) {
    tensionOverlay = '<div class="pw-tension-wash" style="background: ' + sanitizeCssValue(tensionWash('#ff9f0a', 0.2)) + '"></div>';
  } else if (isNightTheme) {
    tensionOverlay = '<div class="pw-tension-wash" style="background: ' + sanitizeCssValue(tensionWash('#5ac8fa', 0.1)) + '"></div>';
  }

  return '<div class="pw-section pw-astro">'
    + '<div class="pw-sky-wash" style="background: ' + sanitizeCssValue(theme.gradient) + '"></div>'
    + tensionOverlay
    + '<div class="pw-fx" data-astro-stars="' + theme.stars + '" data-astro-day="' + theme.isDay + '" role="img" aria-label="Sky atmospheric effects"></div>'
    + '<div class="pw-astro-content">'
    + '<div class="pw-section-header"><span class="pw-section-title">Sun &amp; Moon</span><span style="font-size:10px;color:' + sanitizeCssValue(theme.labelColor) + '">' + moonHeader + '</span></div>'
    + '<div class="pw-arc-wrap">' + arcSvg + '</div>'
    + '<div class="pulse-stats-row" style="margin: 8px 20px 0" role="img" aria-label="Sun and moon statistics">'
    + '<div class="stat"><div class="pw-stat-value">' + escapeHtml(fmtTime(isDay ? sunrise : tomorrowSunrise)) + '</div><div class="pw-stat-label">' + (isDay ? 'Sunrise' : 'Next Rise') + '</div></div>'
    + '<div class="stat"><div class="pw-stat-value">' + escapeHtml(fmtTime(isDay ? sunset : tomorrowSunset)) + '</div><div class="pw-stat-label">' + (isDay ? 'Sunset' : 'Next Set') + '</div></div>'
    + '<div class="stat"><div class="pw-stat-value">' + escapeHtml(fmtDuration(isDay ? daylightHours : (tomorrowSunset.getTime() - tomorrowSunrise.getTime()) / 3600000)) + '</div><div class="pw-stat-label">Daylight</div></div>'
    + '<div class="stat"><div class="pw-stat-value">' + escapeHtml(fmtTime(moonrise)) + '</div><div class="pw-stat-label">Moonrise</div></div>'
    + '<div class="stat"><div class="pw-stat-value">' + escapeHtml(fmtTime(moonset)) + '</div><div class="pw-stat-label">Moonset</div></div>'
    + '</div></div></div>';
}
