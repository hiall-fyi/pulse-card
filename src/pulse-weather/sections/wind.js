/**
 * @module pulse-weather/sections/wind
 * @description Compass rose, directional streaks, and wind info display.
 * Ported from DEV/prototypes/wind-rose.html prototype.
 */

import {
  windTier, beaufort, compassLabel, svgEl, escapeHtml, sanitizeCssValue,
} from '../weather-primitives.js';
import { SPEED_CAP, MAX_STREAKS, SHAKE_THRESHOLD, TIER_COLORS } from '../constants.js';

// ── Prototype constants (matching wind-rose.html) ───────────────────
const ROSE_SIZE = 240;
const ROSE_CX = ROSE_SIZE / 2;
const ROSE_CY = ROSE_SIZE / 2;
const ROSE_MAX_R = 90;
const ARROW_WIDTH = 0.12;       // radians — half-width of arrow body
const ARROW_HEAD_SIZE = 6;      // px
const ARROW_HEAD_HALF = 0.5;    // radians — half-angle of arrowhead
const GUST_CONE_HALF = 0.25;    // radians — half-angle of gust cone
const GUST_THRESHOLD = 0.3;
const SWAY_MAX_ANGLE = 6;       // degrees at gale
const SWAY_FWD_RATIO = 0.7;
const SWAY_THRESHOLD = 0.2;     // degrees — below this, no sway
const STREAK_DUR_MAX = 4;
const STREAK_DUR_SPAN = 3.3;
const STREAK_W_BASE = 15;
const STREAK_W_SPAN = 35;
const STREAK_OP_BASE = 0.08;
const STREAK_OP_SPAN = 0.2;

const COMPASS_DIRS = [
  { l: 'N', a: 0 }, { l: 'NE', a: 45 }, { l: 'E', a: 90 }, { l: 'SE', a: 135 },
  { l: 'S', a: 180 }, { l: 'SW', a: 225 }, { l: 'W', a: 270 }, { l: 'NW', a: 315 },
];

/**
 * Convert compass bearing (0°=N, CW) to screen radians (0=right, CW).
 * @param {number} deg
 * @returns {number}
 */
function bearingRad(deg) {
  return (deg - 90) * Math.PI / 180;
}

/**
 * Wind direction unit vector in CSS coords (+x right, +y down).
 * Matches prototype: sin(rad), -cos(rad).
 * @param {number} bearingDeg
 * @returns {{x: number, y: number}}
 */
function windVec(bearingDeg) {
  const rad = bearingDeg * Math.PI / 180;
  return { x: Math.sin(rad), y: -Math.cos(rad) };
}

/**
 * Point on circle at screen-radians from rose center.
 * @param {number} rad
 * @param {number} radius
 * @returns {{x: number, y: number}}
 */
function cPt(rad, radius) {
  return { x: ROSE_CX + radius * Math.cos(rad), y: ROSE_CY + radius * Math.sin(rad) };
}

/**
 * Build gust cone SVG path (triangle from center to arc edge).
 * @param {number} gustSpeed
 * @param {number} rad - Wind bearing in screen radians.
 * @param {number} speedRatio
 * @param {string} tierColor
 * @returns {string}
 */
function buildGustCone(gustSpeed, rad, speedRatio, tierColor) {
  const gustR = Math.min(gustSpeed / SPEED_CAP, 1) * ROSE_MAX_R;
  const left = cPt(rad - GUST_CONE_HALF, gustR);
  const right = cPt(rad + GUST_CONE_HALF, gustR);
  const cls = speedRatio > GUST_THRESHOLD ? 'pw-gust-sweep' : '';
  const dur = Math.max(0.6, 2.5 - speedRatio * 2).toFixed(2);
  const peak = (0.15 + speedRatio * 0.3).toFixed(2);
  const style = `transform-origin:${ROSE_CX}px ${ROSE_CY}px;--gust-dur:${dur}s;--gust-peak:${peak}`;
  return svgEl('path', {
    class: cls,
    d: `M${ROSE_CX},${ROSE_CY} L${left.x.toFixed(1)},${left.y.toFixed(1)} L${right.x.toFixed(1)},${right.y.toFixed(1)} Z`,
    fill: tierColor, opacity: 0.15, style,
  });
}

/**
 * Build arrow SVG (filled body + center line + arrowhead triangle).
 * @param {number} displaySpeed
 * @param {number} rad
 * @param {number} speedRatio
 * @param {string} tierColor
 * @returns {string}
 */
function buildArrow(displaySpeed, rad, speedRatio, tierColor) {
  const arrowR = Math.min(displaySpeed / SPEED_CAP, 1) * ROSE_MAX_R;
  const tip = cPt(rad, arrowR);
  const bodyL = cPt(rad - ARROW_WIDTH, arrowR * 0.7);
  const bodyR = cPt(rad + ARROW_WIDTH, arrowR * 0.7);
  const headL = { x: tip.x - ARROW_HEAD_SIZE * Math.cos(rad - ARROW_HEAD_HALF), y: tip.y - ARROW_HEAD_SIZE * Math.sin(rad - ARROW_HEAD_HALF) };
  const headR = { x: tip.x - ARROW_HEAD_SIZE * Math.cos(rad + ARROW_HEAD_HALF), y: tip.y - ARROW_HEAD_SIZE * Math.sin(rad + ARROW_HEAD_HALF) };

  // Asymmetric sway animation
  const swayAngle = speedRatio * SWAY_MAX_ANGLE;
  const swayDur = Math.max(0.4, 4 - speedRatio * 3.6);
  const anim = swayAngle > SWAY_THRESHOLD
    ? `animation:pw-arrowSway ${swayDur.toFixed(2)}s ease-in-out infinite;--sway-fwd:${(swayAngle * SWAY_FWD_RATIO).toFixed(2)}deg;--sway-back:${(-swayAngle * (1 - SWAY_FWD_RATIO)).toFixed(2)}deg`
    : '';
  const style = `transform-origin:${ROSE_CX}px ${ROSE_CY}px;filter:drop-shadow(0 0 6px ${tierColor}60);${anim}`;

  const body = svgEl('path', {
    d: `M${ROSE_CX},${ROSE_CY} L${bodyL.x.toFixed(1)},${bodyL.y.toFixed(1)} L${tip.x.toFixed(1)},${tip.y.toFixed(1)} L${bodyR.x.toFixed(1)},${bodyR.y.toFixed(1)} Z`,
    fill: tierColor, opacity: 0.5,
  });
  const line = svgEl('line', {
    x1: ROSE_CX, y1: ROSE_CY, x2: tip.x.toFixed(1), y2: tip.y.toFixed(1),
    stroke: tierColor, 'stroke-width': 2.5, 'stroke-linecap': 'round',
  });
  const head = svgEl('path', {
    d: `M${tip.x.toFixed(1)},${tip.y.toFixed(1)} L${headL.x.toFixed(1)},${headL.y.toFixed(1)} L${headR.x.toFixed(1)},${headR.y.toFixed(1)} Z`,
    fill: tierColor,
  });

  return svgEl('g', { style }, body + line + head);
}

/**
 * Render the wind rose section.
 * @param {import('../types.js').RenderContext} ctx
 * @returns {string}
 */
export function renderWind({ hass, config, discovery, weatherEntity }) {
  const attrs = weatherEntity.attributes;
  const ce = discovery.atmosCe;
  const speedMode = config.speed_mode || 'speed';

  /** Read from Atmos CE sensor first, then weather entity attribute. */
  function val(/** @type {string} */ sensorKey, /** @type {string} */ attrKey) {
    if (ce[sensorKey]) {
      const v = Number(hass.states[ce[sensorKey]]?.state);
      if (!isNaN(v)) return v;
    }
    return Number(attrs[attrKey] ?? 0) || 0;
  }

  const speed = val('wind_speed', 'wind_speed');
  const gusts = val('wind_gusts', 'wind_gust_speed') || val('wind_gusts', 'wind_gusts') || speed;
  const bearing = val('wind_direction', 'wind_bearing');

  // Read wind speed unit from sensor or weather entity
  const windSpeedSensor = ce.wind_speed ? hass.states[ce.wind_speed] : null;
  const windUnit = /** @type {string} */ (windSpeedSensor?.attributes?.unit_of_measurement || attrs.wind_speed_unit || 'km/h');

  const displaySpeed = speedMode === 'gust' ? gusts : speed;
  const speedRatio = Math.min(speed / SPEED_CAP, 1);
  const bft = beaufort(displaySpeed);
  const tier = windTier(displaySpeed);
  const tierColor = /** @type {string} */ (TIER_COLORS[/** @type {keyof typeof TIER_COLORS} */ (tier)]) || TIER_COLORS.calm;
  const label = compassLabel(bearing);
  const rad = bearingRad(bearing);
  const wv = windVec(bearing);

  // ── Streaks (matching prototype) ──────────────────────────────────
  const streakCount = Math.round(speedRatio * MAX_STREAKS);
  const baseDur = STREAK_DUR_MAX - speedRatio * STREAK_DUR_SPAN;
  const streakOp = STREAK_OP_BASE + speedRatio * STREAK_OP_SPAN;
  const streakW = STREAK_W_BASE + speedRatio * STREAK_W_SPAN;
  const px = -wv.y;
  const py = wv.x;

  const streaks = [];
  for (let i = 0; i < streakCount; i++) {
    const spread = (Math.random() - 0.5) * 400;
    const startD = -120 - Math.random() * 60;
    const endD = 420 + Math.random() * 60;
    const w = (streakW * (0.6 + Math.random() * 0.8)).toFixed(1);
    const dur = (baseDur + Math.random() * baseDur * 0.5).toFixed(2);
    const delay = (Math.random() * 3).toFixed(2);
    const op = (streakOp * (0.5 + Math.random() * 0.5)).toFixed(3);
    const sx = (startD * wv.x + spread * px).toFixed(1);
    const sy = (startD * wv.y + spread * py).toFixed(1);
    const ex = (endD * wv.x + spread * px).toFixed(1);
    const ey = (endD * wv.y + spread * py).toFixed(1);
    streaks.push(`<div class="pw-streak" style="left:50%;top:50%;width:${w}px;height:1px;transform:rotate(${bearing - 90}deg);animation-duration:${dur}s;animation-delay:${delay}s;opacity:${op};background:linear-gradient(to right, transparent, ${tierColor}44, transparent);--sx:${sx}px;--sy:${sy}px;--ex:${ex}px;--ey:${ey}px"></div>`);
  }

  // ── Rose SVG (matching prototype) ─────────────────────────────────
  const parts = [];

  // Grid circles — tinted with tier color for visual richness
  for (let ri = 1; ri <= 3; ri++) {
    parts.push(svgEl('circle', { cx: ROSE_CX, cy: ROSE_CY, r: ri * 30, fill: 'none', stroke: tierColor, 'stroke-width': 0.5, opacity: 0.08 + ri * 0.02 }));
  }

  // Compass labels + tick lines
  for (const d of COMPASS_DIRS) {
    const r = bearingRad(d.a);
    const inner = cPt(r, 20);
    const outer = cPt(r, ROSE_MAX_R + 4);
    const lp = cPt(r, ROSE_MAX_R + 16);
    const isCardinal = d.l.length === 1;
    parts.push(svgEl('line', { x1: inner.x.toFixed(1), y1: inner.y.toFixed(1), x2: outer.x.toFixed(1), y2: outer.y.toFixed(1), stroke: tierColor, 'stroke-width': 0.5, opacity: 0.12 }));
    parts.push(svgEl('text', { x: lp.x.toFixed(1), y: lp.y.toFixed(1), 'text-anchor': 'middle', 'dominant-baseline': 'central', fill: isCardinal ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.3)', 'font-size': isCardinal ? 11 : 9, 'font-weight': isCardinal ? 600 : 400 }, escapeHtml(d.l)));
  }

  // Gust cone
  parts.push(buildGustCone(gusts, rad, speedRatio, tierColor));

  // Arrow
  parts.push(buildArrow(displaySpeed, rad, speedRatio, tierColor));

  // Center glow ring + dot
  parts.push(svgEl('circle', { cx: ROSE_CX, cy: ROSE_CY, r: 18, fill: tierColor, opacity: 0.06 }));
  parts.push(svgEl('circle', { cx: ROSE_CX, cy: ROSE_CY, r: 3, fill: tierColor }));

  // ── Rose shake ────────────────────────────────────────────────────
  const shakeAmp = speedRatio > SHAKE_THRESHOLD ? (speedRatio - SHAKE_THRESHOLD) * 5 : 0;
  const shakeDur = Math.max(0.15, 0.4 - speedRatio * 0.25);
  let roseStyle = '';
  if (shakeAmp > 0.1) {
    roseStyle = `--dx:${(shakeAmp * wv.x).toFixed(2)}px;--dy:${(shakeAmp * wv.y).toFixed(2)}px;animation:pw-roseShake ${shakeDur.toFixed(2)}s ease-in-out infinite`;
  }

  // ── Background glow — dramatic tier-colored wash ────────────────────
  const glowAlpha = Math.round(12 + speedRatio * 50).toString(16).padStart(2, '0');
  const innerAlpha = Math.round(6 + speedRatio * 25).toString(16).padStart(2, '0');
  const washBg = `radial-gradient(ellipse at 50% 50%, ${tierColor}${glowAlpha} 0%, ${tierColor}${innerAlpha} 40%, transparent 85%)`;

  // ── Mode tabs ─────────────────────────────────────────────────────
  const tabs = ['speed', 'gust'].map((m) =>
    `<button class="pw-tab" role="tab" aria-selected="${m === speedMode}" tabindex="${m === speedMode ? '0' : '-1'}" data-mode="${escapeHtml(m)}">${escapeHtml(m.charAt(0).toUpperCase() + m.slice(1))}</button>`,
  ).join('');

  return `
    <div class="pw-section pw-wind" style="background: ${sanitizeCssValue(washBg)}">
      <div class="pw-section-header">
        <span class="pw-section-title">Wind</span>
        <div class="pw-tabs" role="tablist">${tabs}</div>
      </div>
      <div class="pw-wind-streaks">${streaks.join('')}</div>
      <div class="pw-rose-wrap" style="${roseStyle}">
        <svg class="pw-rose-svg" width="${ROSE_SIZE}" height="${ROSE_SIZE}" viewBox="0 0 ${ROSE_SIZE} ${ROSE_SIZE}" style="display:block" role="img" aria-label="Wind compass rose showing ${escapeHtml(Math.round(displaySpeed))} ${escapeHtml(windUnit)} from ${escapeHtml(label)}">
          <title>Wind direction compass</title>
          ${parts.join('')}
        </svg>
        <div class="pw-wind-center">
          <div class="pw-wind-speed" style="color: ${sanitizeCssValue(tierColor)}">${escapeHtml(Math.round(displaySpeed))}</div>
          <div class="pw-wind-unit">${escapeHtml(windUnit)} · ${escapeHtml(Math.round(bearing))}° ${escapeHtml(label)}</div>
          <div class="pw-wind-beaufort" style="color: ${sanitizeCssValue(tierColor)}">${escapeHtml(bft.name)}</div>
          <div class="pw-wind-beaufort-desc">${escapeHtml(bft.desc)}</div>
        </div>
      </div>
    </div>`;
}
