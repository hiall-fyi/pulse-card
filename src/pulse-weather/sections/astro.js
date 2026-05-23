/**
 * @module pulse-weather/sections/astro
 * @description 24h sky-phase ribbon, moon hero row, twilight stat tiles.
 */

import { escapeHtml, sanitizeCssValue, anchorEventOn } from '../weather-primitives.js';
import { SYNODIC_MONTH, MOON_PHASES } from '../constants.js';
import { brandMarkVariant } from '../brand-mark.js';
import { renderSectionShell } from '../section-shell.js';
import { t } from '../type-system.js';

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
 * Compute moon visibility and arc progress from sensor times. Inputs
 * must be anchored on `now` (closest-to-now semantics). Cross-midnight
 * transits where the moon rose yesterday or sets tomorrow are handled
 * by shifting the relevant timestamp by ±24h.
 *
 * @param {Date} now
 * @param {Date} moonrise
 * @param {Date} moonset
 * @returns {{ visible: boolean, progress: number }}
 */
export function computeMoonVisibility(now, moonrise, moonset) {
  const nowMs = now.getTime();
  const riseMs = moonrise.getTime();
  const setMs = moonset.getTime();

  if (riseMs <= nowMs) {
    if (setMs > riseMs && setMs >= nowMs) {
      const dur = setMs - riseMs;
      return { visible: true, progress: Math.max(0, Math.min(1, (nowMs - riseMs) / dur)) };
    }
    if (setMs < riseMs) {
      // Cross-midnight: today's set time falls before today's rise time.
      const effSet = setMs + DAY_MS;
      if (nowMs <= effSet) {
        const dur = effSet - riseMs;
        return { visible: true, progress: Math.max(0, Math.min(1, (nowMs - riseMs) / dur)) };
      }
    }
    return { visible: false, progress: 0 };
  }

  if (setMs < riseMs && nowMs < setMs) {
    // Future rise + past set with rise > set: moon is up from yesterday.
    const effRise = riseMs - DAY_MS;
    const dur = setMs - effRise;
    return { visible: true, progress: Math.max(0, Math.min(1, (nowMs - effRise) / dur)) };
  }

  return { visible: false, progress: 0 };
}

function fmtTime(/** @type {Date|null} */ date) {
  if (!date || isNaN(date.getTime())) return '--:--';
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
}

/**
 * Render a phase-aware moon SVG. The waxing branch puts the lit
 * portion on the right, waning on the left — matching what a
 * Northern-hemisphere observer sees.
 *
 * @param {number} cx
 * @param {number} cy
 * @param {number} r
 * @param {number|null} illum - Illumination percent 0–100.
 * @param {number|null} age - Moon age in days, for waxing/waning resolution.
 * @returns {string} SVG fragment.
 */
function moonPhaseSvg(cx, cy, r, illum, age) {
  if (illum === null || illum === undefined) {
    return `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${r}" fill="#c8d0e0"/>`;
  }
  const frac = Math.max(0, Math.min(1, illum / 100));
  const waxing = age !== null && age !== undefined ? isWaxing(age) : true;

  // Dark side — base disc.
  let moon = `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${r}" fill="#2a2a3a"/>`;

  if (frac >= 0.99) {
    moon += `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${r}" fill="#e8e0d0"/>`;
  } else if (frac > 0.01) {
    // Lit half built as a half-disc plus a flipped half-ellipse whose
    // x-radius tapers from r (full) to 0 (new) — the ellipse forms the
    // terminator that slides across the moon as it phases.
    const top = cy - r;
    const bot = cy + r;
    const terminatorRx = (r * Math.abs(2 * frac - 1)).toFixed(1);
    const litSweep = frac > 0.5 ? 1 : 0;

    let litPath;
    if (waxing) {
      litPath = `M${cx.toFixed(1)},${top.toFixed(1)} `
        + `A${r},${r} 0 0 1 ${cx.toFixed(1)},${bot.toFixed(1)} `
        + `A${terminatorRx},${r} 0 0 ${litSweep} ${cx.toFixed(1)},${top.toFixed(1)} Z`;
    } else {
      litPath = `M${cx.toFixed(1)},${top.toFixed(1)} `
        + `A${r},${r} 0 0 0 ${cx.toFixed(1)},${bot.toFixed(1)} `
        + `A${terminatorRx},${r} 0 0 ${1 - litSweep} ${cx.toFixed(1)},${top.toFixed(1)} Z`;
    }
    moon += `<path d="${litPath}" fill="#e8e0d0"/>`;
  }
  return moon;
}

/* 24h ribbon palette — phase order: night → civil twilight → blue hour →
   golden hour → daytime, mirrored on the PM side. Each adjacent pair gets at
   least one mid-tone so CSS interpolation reads as a smooth wash even when
   the magic-hour anchors are minutes apart. */
const RIBBON_NIGHT = '#050510';
const RIBBON_NIGHT_EDGE = '#0a1226';
const RIBBON_CIVIL = '#172b4f';
const RIBBON_BLUE_DEEP = '#1f3d6e';
const RIBBON_BLUE_LIGHT = '#3a6fa8';
const RIBBON_GOLDEN_WARM = '#d97a3a';
const RIBBON_GOLDEN_BRIGHT = '#ff9f0a';
const RIBBON_HORIZON = '#ffc560';
const RIBBON_DAY_LOW = '#7eaedb';
const RIBBON_DAY_MID = '#2c5a8e';
const RIBBON_DAY_PEAK = '#ffd60a';

/**
 * Build the 24h ribbon's CSS linear-gradient from the real twilight
 * anchors (Atmos CE + HA sun entity). Anchors not provided fall back
 * to sunrise/sunset offsets so the wash still renders without Atmos
 * CE installed.
 *
 * @param {Date} sunrise
 * @param {Date} sunset
 * @param {Date|null} civilDawn
 * @param {Date|null} blueAmStart
 * @param {Date|null} goldenAmStart
 * @param {Date|null} goldenAmEnd
 * @param {Date|null} goldenPmStart
 * @param {Date|null} goldenPmEnd
 * @param {Date|null} bluePmEnd
 * @param {Date|null} civilDusk
 * @returns {string} CSS gradient value.
 */
function buildRibbonGradient(
  sunrise,
  sunset,
  civilDawn,
  blueAmStart,
  goldenAmStart,
  goldenAmEnd,
  goldenPmStart,
  goldenPmEnd,
  bluePmEnd,
  civilDusk,
) {
  const dayStart = new Date(sunrise.getTime());
  dayStart.setHours(0, 0, 0, 0);
  const sr = sunrise.getTime();
  const ss = sunset.getTime();

  // Fallbacks (in ms) for missing anchors — tuned for mid-latitudes
  // so a feed without Atmos CE still produces a recognisable dawn /
  // dusk wash.
  const civilDawnMs = (civilDawn ?? new Date(sr - 35 * 60_000)).getTime();
  const blueAmMs = (blueAmStart ?? new Date(sr - 30 * 60_000)).getTime();
  const goldenAmStartMs = (goldenAmStart ?? new Date(sr - 6 * 60_000)).getTime();
  const goldenAmEndMs = (goldenAmEnd ?? new Date(sr + 30 * 60_000)).getTime();
  const goldenPmStartMs = (goldenPmStart ?? new Date(ss - 30 * 60_000)).getTime();
  const goldenPmEndMs = (goldenPmEnd ?? new Date(ss + 6 * 60_000)).getTime();
  const bluePmMs = (bluePmEnd ?? new Date(ss + 30 * 60_000)).getTime();
  const civilDuskMs = (civilDusk ?? new Date(ss + 35 * 60_000)).getTime();
  const solarNoonMs = (sr + ss) / 2;

  const safe = (/** @type {number} */ v) => Math.max(0, Math.min(100, v));
  const pct = (/** @type {number} */ ms) => safe(((ms - dayStart.getTime()) / DAY_MS) * 100);
  const mid = (/** @type {number} */ a, /** @type {number} */ b) => pct((a + b) / 2);

  // Solar-noon plateau capped at ±1h so the daytime block doesn't
  // read as a single flat colour even on long summer days.
  const dayPeakSpread = Math.min(60, (ss - sr) / 8) * 60_000;
  const dayPeakStartMs = solarNoonMs - dayPeakSpread;
  const dayPeakEndMs = solarNoonMs + dayPeakSpread;

  const stops = [
    `${RIBBON_NIGHT} 0%`,
    `${RIBBON_NIGHT} ${pct(civilDawnMs).toFixed(2)}%`,
    `${RIBBON_NIGHT_EDGE} ${mid(civilDawnMs, blueAmMs).toFixed(2)}%`,
    `${RIBBON_CIVIL} ${pct(blueAmMs).toFixed(2)}%`,
    `${RIBBON_BLUE_DEEP} ${mid(blueAmMs, goldenAmStartMs).toFixed(2)}%`,
    `${RIBBON_BLUE_LIGHT} ${pct(goldenAmStartMs).toFixed(2)}%`,
    `${RIBBON_GOLDEN_WARM} ${mid(goldenAmStartMs, sr).toFixed(2)}%`,
    `${RIBBON_GOLDEN_BRIGHT} ${pct(sr).toFixed(2)}%`,
    `${RIBBON_HORIZON} ${mid(sr, goldenAmEndMs).toFixed(2)}%`,
    `${RIBBON_DAY_LOW} ${pct(goldenAmEndMs).toFixed(2)}%`,
    `${RIBBON_DAY_MID} ${mid(goldenAmEndMs, dayPeakStartMs).toFixed(2)}%`,
    `${RIBBON_DAY_PEAK} ${pct(dayPeakStartMs).toFixed(2)}%`,
    `${RIBBON_DAY_PEAK} ${pct(dayPeakEndMs).toFixed(2)}%`,
    `${RIBBON_DAY_MID} ${mid(dayPeakEndMs, goldenPmStartMs).toFixed(2)}%`,
    `${RIBBON_DAY_LOW} ${pct(goldenPmStartMs).toFixed(2)}%`,
    `${RIBBON_HORIZON} ${mid(goldenPmStartMs, ss).toFixed(2)}%`,
    `${RIBBON_GOLDEN_BRIGHT} ${pct(ss).toFixed(2)}%`,
    `${RIBBON_GOLDEN_WARM} ${mid(ss, goldenPmEndMs).toFixed(2)}%`,
    `${RIBBON_BLUE_LIGHT} ${pct(goldenPmEndMs).toFixed(2)}%`,
    `${RIBBON_BLUE_DEEP} ${mid(goldenPmEndMs, bluePmMs).toFixed(2)}%`,
    `${RIBBON_CIVIL} ${pct(bluePmMs).toFixed(2)}%`,
    `${RIBBON_NIGHT_EDGE} ${mid(bluePmMs, civilDuskMs).toFixed(2)}%`,
    `${RIBBON_NIGHT} ${pct(civilDuskMs).toFixed(2)}%`,
    `${RIBBON_NIGHT} 100%`,
  ];
  return `linear-gradient(to right, ${stops.join(', ')})`;
}

/** Format duration in milliseconds as "Xh YYm". */
function fmtDurationMs(/** @type {number} */ ms) {
  if (!ms || isNaN(ms) || ms <= 0) return '--';
  const totalMin = Math.round(ms / 60000);
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  return `${h}h ${String(m).padStart(2, '0')}m`;
}

/**
 * @param {import('../types.js').RenderContext} ctx
 * @returns {string|null}
 */
export function renderAstro({ hass, config, discovery }) {
  const now = new Date();
  const sunEntity = discovery.sunEntityId ? hass.states[discovery.sunEntityId] : null;
  if (!sunEntity) return null;

  const sunAttrs = sunEntity.attributes || {};
  const nextRising = /** @type {string|undefined} */ (sunAttrs.next_rising || sunAttrs.sunrise);
  const nextSetting = /** @type {string|undefined} */ (sunAttrs.next_setting || sunAttrs.sunset);
  if (!nextRising || !nextSetting) return null;

  // The ribbon's axis is local calendar day (00:00 → 24:00), so the
  // sunrise / sunset feeding the gradient must fall on today's date,
  // not the astronomical day (rise → set continuous cycle) returned by
  // deriveTodaySunBoundaries. anchorEventOn picks the candidate within
  // ±24h closest to local noon, so post-midnight pre-sunrise the
  // sensors snap to today instead of yesterday.
  const todayNoon = new Date(now);
  todayNoon.setHours(12, 0, 0, 0);
  const sunrise = anchorEventOn(new Date(nextRising), todayNoon);
  const sunset = anchorEventOn(new Date(nextSetting), todayNoon);
  if (!sunrise || !sunset || isNaN(sunrise.getTime()) || isNaN(sunset.getTime())) return null;

  const ce = discovery.atmosCe;
  const readSensor = (/** @type {string} */ key) =>
    ce[key] ? new Date(String(hass.states[ce[key]]?.state)) : null;
  // Twilight sensors used only for stat-tile precision: the ribbon
  // paints fixed-width transitions independent of these times.
  const goldenAmStart = anchorEventOn(readSensor('golden_hour_morning_start'), sunrise);
  const goldenAmEnd = anchorEventOn(readSensor('golden_hour_morning_end'), sunrise);
  const blueAmStart = anchorEventOn(readSensor('blue_hour_morning_start'), sunrise);
  const goldenPmStart = anchorEventOn(readSensor('golden_hour_evening_start'), sunset);
  const goldenPmEnd = anchorEventOn(readSensor('golden_hour_evening_end'), sunset);
  const bluePmEnd = anchorEventOn(readSensor('blue_hour_evening_end'), sunset);
  const civilDawnStr = /** @type {string|undefined} */ (sunAttrs.next_dawn);
  const civilDuskStr = /** @type {string|undefined} */ (sunAttrs.next_dusk);
  const civilDawn = civilDawnStr ? anchorEventOn(new Date(civilDawnStr), sunrise) : null;
  const civilDusk = civilDuskStr ? anchorEventOn(new Date(civilDuskStr), sunset) : null;

  const moonEntity = ce.moon_phase ? hass.states[ce.moon_phase] : null;
  const moonAttrs = moonEntity?.attributes || {};
  const moonAge = moonAttrs.moon_age !== undefined ? Number(moonAttrs.moon_age) : null;
  const moonIllum = moonAttrs.illumination !== undefined ? Number(moonAttrs.illumination) : null;
  const moonPhaseName = moonAge !== null ? moonPhaseFromAge(moonAge) : (moonEntity?.state || null);
  const moonrise = anchorEventOn(readSensor('moonrise'), now);
  const moonset = anchorEventOn(readSensor('moonset'), now);

  const isDay = now.getTime() >= sunrise.getTime() && now.getTime() <= sunset.getTime();

  const sunriseLabel = fmtTime(sunrise);
  const sunsetLabel = fmtTime(sunset);
  const solarNoonMs = (sunrise.getTime() + sunset.getTime()) / 2;
  const solarNoonLabel = fmtTime(new Date(solarNoonMs));

  const dayLenMs = sunset.getTime() - sunrise.getTime();
  const nightLenMs = DAY_MS - dayLenMs;
  const daylightLabel = fmtDurationMs(dayLenMs);
  const nightLabel = fmtDurationMs(nightLenMs);

  const heroLabel = isDay ? 'Daylight' : 'Night';
  const heroDuration = isDay ? daylightLabel : nightLabel;

  const dayStart = new Date(sunrise.getTime());
  dayStart.setHours(0, 0, 0, 0);
  const nowPct = Math.max(0, Math.min(100, ((now.getTime() - dayStart.getTime()) / DAY_MS) * 100));

  const ribbonGradient = buildRibbonGradient(
    sunrise,
    sunset,
    civilDawn,
    blueAmStart,
    goldenAmStart,
    goldenAmEnd,
    goldenPmStart,
    goldenPmEnd,
    bluePmEnd,
    civilDusk,
  );
  const ribbonStyle = `background: ${sanitizeCssValue(ribbonGradient)}`;

  const ribbonHtml = `
      <div class="pw-astro-rb" role="img" aria-label="24-hour sky phase ribbon">
        <div class="pw-astro-rb-track" style="${ribbonStyle}"></div>
        <div class="pw-astro-rb-now" style="left:${nowPct.toFixed(2)}%" aria-hidden="true"></div>
        <div class="pw-astro-rb-axis">
          <span>00</span><span>06</span><span>12</span><span>18</span><span>24</span>
        </div>
      </div>`;

  const moonIllumPct = moonIllum !== null && moonIllum !== undefined ? Math.round(moonIllum) : null;
  const safeMoonPhaseName = moonPhaseName || 'Moon';
  const moonHeroSvg = moonPhaseSvg(24, 24, 22, moonIllum, moonAge);
  const moonHeroIllum = moonIllumPct !== null
    ? `<span class="pw-astro-moon-illum">${escapeHtml(`${moonIllumPct}%`)}</span> illuminated`
    : '';
  const moonHeroAge = (moonAge !== null && moonAge !== undefined)
    ? `${moonAge.toFixed(1)}d old`
    : '';
  const daysToFull = (moonAge !== null && moonAge !== undefined)
    ? (() => {
      const fullAt = SYNODIC_MONTH / 2;
      const ageMod = ((moonAge % SYNODIC_MONTH) + SYNODIC_MONTH) % SYNODIC_MONTH;
      const delta = ageMod <= fullAt ? fullAt - ageMod : SYNODIC_MONTH - ageMod + fullAt;
      return `${delta.toFixed(1)}d to full`;
    })()
    : '';
  const moonHeroDetails = [moonHeroIllum, moonHeroAge, daysToFull].filter(Boolean).join(' · ');
  const moonHeroHtml = `
      <div class="pw-astro-moon-hero">
        <div class="pw-astro-moon-glyph" aria-hidden="true">
          <svg viewBox="0 0 48 48" width="48" height="48">${moonHeroSvg}</svg>
        </div>
        <div class="pw-astro-moon-text">
          <div class="pw-astro-moon-name">${escapeHtml(safeMoonPhaseName)}</div>
          <div class="pw-astro-moon-meta">${moonHeroDetails}</div>
        </div>
      </div>`;

  const heroNarrativeText = isDay
    ? `Sun rose ${sunriseLabel}, sets ${sunsetLabel} · solar noon ${solarNoonLabel}.`
    : `Sun set ${sunsetLabel}, rises ${sunriseLabel} · solar noon ${solarNoonLabel}.`;

  const heroHtml = `
      <div class="pw-astro-hero">
        <div class="pw-astro-hero-tier">${escapeHtml(heroLabel)}</div>
        <div class="pw-astro-hero-num">${escapeHtml(heroDuration)}</div>
      </div>
      ${t.narrative(heroNarrativeText)}`;

  const moonriseLabel = fmtTime(moonrise);
  const moonsetLabel = fmtTime(moonset);
  const amRowHtml = t.statsRow([
    t.stat(fmtTime(civilDawn), 'civil dawn'),
    t.stat(fmtTime(goldenAmStart), 'golden start', { valueColor: 'var(--pw-warn-amber)' }),
    t.stat(fmtTime(blueAmStart), 'blue start', { valueColor: 'var(--pw-wind)' }),
    t.stat(moonriseLabel, 'moonrise'),
  ], { columns: 4, divided: true });
  const pmRowHtml = t.statsRow([
    t.stat(fmtTime(civilDusk), 'civil dusk'),
    t.stat(fmtTime(goldenPmEnd), 'golden end', { valueColor: 'var(--pw-warn-amber)' }),
    t.stat(fmtTime(bluePmEnd), 'blue end', { valueColor: 'var(--pw-wind)' }),
    t.stat(moonsetLabel, 'moonset'),
  ], { columns: 4, divided: true });

  const body = `
      ${heroHtml}
      ${moonHeroHtml}
      ${ribbonHtml}
      ${amRowHtml}
      ${pmRowHtml}`;

  const variant = brandMarkVariant(isDay ? 'sunny' : 'clear-night', !isDay);

  // pulse-weather-card.js's post-render pass injects twinkling stars
  // when data-astro-stars="true", drifting clouds + sun rays when
  // data-astro-day="true". Container must exist for either to fire.
  const preContent = `<div class="pw-fx" data-astro-stars="${!isDay}" data-astro-day="${isDay}" role="img" aria-label="Sky atmospheric effects"></div>`;

  return renderSectionShell({
    sectionClass: 'pw-astro-v2',
    extraSectionClass: isDay ? '' : 'is-night',
    ariaLabel: 'Astronomy: sun and moon',
    brandVariant: variant,
    kicker: "today's sky",
    preContent,
    body,
    pro: config?.pro !== false,
  });
}
