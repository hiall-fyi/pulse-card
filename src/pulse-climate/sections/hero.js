/**
 * @module pulse-climate/sections/hero
 * @description Card-level hero block — large home avg temperature, climate
 * state pill, breakdown counts, optional 24h thermal mini-strip. Pure
 * renderer; consumes pre-resolved zone states from the card.
 */

import { escapeHtml, formatNumericDisplay, sanitizeCssValue } from '../../shared/utils.js';
import { classifyClimateState } from '../utils.js';
import { temperatureToColor } from '../chart-primitives.js';

/**
 * @typedef {object} HeroZoneInput
 * @property {string} entityId
 * @property {string} name
 * @property {string} hvacAction
 * @property {boolean} isUnavailable
 * @property {number|null} currentTemp
 * @property {number|null} targetTemp
 * @property {number} heatingPower
 * @property {string} unit
 */

/**
 * @typedef {object} HeroOutdoor
 * @property {number|null} value
 * @property {string} unit
 * @property {string|null} entityId
 */

/** Map climate state to hero label. */
const STATE_LABELS = {
  heating: 'Heating',
  cooling: 'Cooling',
  mixed:   'Mixed',
  idle:    'Idle',
  off:     'Off',
};

/**
 * Render the Hero block.
 *
 * @param {HeroZoneInput[]} zoneStates - Resolved zone states from the card.
 * @param {{hero_show_thermal_strip?: boolean, hero_show_outside?: boolean}} cardConfig
 * @param {Array<{t:number,v:number}>} homeHistory - Home-avg history; empty array hides strip.
 * @param {HeroOutdoor|null} [outdoor] - Resolved outdoor temp; null/missing hides outside line.
 * @returns {string} HTML string. Empty when zoneStates is empty.
 */
export function renderHero(zoneStates, cardConfig, homeHistory, outdoor) {
  if (!Array.isArray(zoneStates) || zoneStates.length === 0) return '';

  const live = zoneStates.filter((z) => !z.isUnavailable);
  const state = classifyClimateState(zoneStates);

  const tempLive = live.filter((z) => typeof z.currentTemp === 'number' && Number.isFinite(z.currentTemp));
  const avgTemp = tempLive.length > 0
    ? tempLive.reduce((s, z) => s + /** @type {number} */ (z.currentTemp), 0) / tempLive.length
    : null;
  const unit = (zoneStates[0] && zoneStates[0].unit) || '°C';

  const heat = live.filter((z) => z.hvacAction === 'heating').length;
  const cool = live.filter((z) => z.hvacAction === 'cooling').length;
  const idle = live.filter((z) => z.hvacAction === 'idle').length;
  const off = live.filter((z) => z.hvacAction === 'off').length;
  const unavail = zoneStates.length - live.length;

  const stateLabel = STATE_LABELS[state] || 'Idle';
  const tempDisplay = avgTemp === null
    ? '—'
    : `${formatNumericDisplay(avgTemp)}${escapeHtml(unit)}`;

  let html = `<div class="pc-hero pc-state-${state}">`;

  html += `<div class="pc-hero-left">`;
  html += `<div class="pc-hero-label">Home avg</div>`;
  html += `<div class="pc-hero-temp">${tempDisplay}</div>`;
  html += `</div>`;

  html += `<div class="pc-hero-right">`;
  const dotClass = (state === 'heating' || state === 'cooling' || state === 'mixed') ? ' pc-hero-dot-active' : '';
  // "Active" counts heating/cooling only; idle/off zones are surfaced in the breakdown line.
  const activeCount = heat + cool;
  const summary = activeCount > 0
    ? `${escapeHtml(stateLabel)} · ${activeCount} active`
    : `${escapeHtml(stateLabel)} · ${live.length} ${live.length === 1 ? 'zone' : 'zones'}`;
  html += `<div class="pc-hero-status"><span class="pc-hero-dot${dotClass}"></span>${summary}</div>`;
  const parts = [];
  if (heat) parts.push(`${heat} heat`);
  if (cool) parts.push(`${cool} cool`);
  if (idle) parts.push(`${idle} idle`);
  if (off)  parts.push(`${off} off`);
  if (unavail) parts.push(`${unavail} unavail`);
  if (parts.length > 0) {
    html += `<div class="pc-hero-breakdown">${parts.map((p) => escapeHtml(p)).join(' · ')}</div>`;
  }
  html += `</div>`;

  const showOutside = cardConfig?.hero_show_outside !== false
    && outdoor && typeof outdoor.value === 'number' && Number.isFinite(outdoor.value);
  if (showOutside) {
    const outdoorVal = /** @type {HeroOutdoor} */ (outdoor);
    html += `<div class="pc-hero-outside">`;
    html += `<span class="pc-hero-outside-label">Last 24h</span>`;
    html += `<span class="pc-hero-outside-value">Outside ${formatNumericDisplay(/** @type {number} */ (outdoorVal.value))}${escapeHtml(outdoorVal.unit)}</span>`;
    html += `</div>`;
  }

  const showStrip = cardConfig?.hero_show_thermal_strip !== false
    && Array.isArray(homeHistory) && homeHistory.length >= 2;
  if (showStrip) {
    const slots = 24;
    const step = Math.max(1, Math.floor(homeHistory.length / slots));
    let cells = '';
    for (let i = 0; i < slots; i++) {
      const sample = homeHistory[Math.min(homeHistory.length - 1, i * step)];
      const color = temperatureToColor(sample.v);
      cells += `<span style="background:${sanitizeCssValue(color)}"></span>`;
    }
    html += `<div class="pc-hero-strip" aria-hidden="true">${cells}</div>`;
  }

  html += `</div>`;
  return html;
}
