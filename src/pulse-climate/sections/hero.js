/**
 * @module pulse-climate/sections/hero
 * @description Hero block — large home avg temperature, per-zone dot
 * cluster (state-coloured, breathing on the master pulse phase), and
 * per-zone 24h temperature strips with state ribbon. Pure renderer;
 * consumes pre-resolved zone states from the card.
 */

import { escapeHtml, formatNumericDisplay, sanitizeCssValue } from '../../shared/utils.js';
import { classifyClimateState } from '../utils.js';
import { stateTemperatureToColor } from '../chart-primitives.js';

/** Map climate state to hero status label. */
const STATE_LABELS = {
  heating: 'Heating',
  cooling: 'Cooling',
  mixed:   'Mixed',
  idle:    'Idle',
  off:     'Off',
};

/** Cap on per-zone strip rows to keep hero height predictable. */
const STRIP_ROW_CAP = 6;

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
 * @property {number} [minTemp]
 * @property {number} [maxTemp]
 */

/**
 * @typedef {object} HeroOutdoor
 * @property {number|null} value
 * @property {string} unit
 * @property {string|null} entityId
 */

/**
 * Map a zone's hvacAction to the dot's state-modifier class.
 * @param {HeroZoneInput} zone
 * @returns {string}
 */
function dotStateClass(zone) {
  /* Template-literal form keeps the audit's dynamic-prefix detection happy:
     `pc-hero-dot-${state}` matches the css-audit script's regex for
     dynamically composed class names. */
  let state = 'idle';
  if (zone.isUnavailable) state = 'unavail';
  else if (zone.hvacAction === 'heating') state = 'heating';
  else if (zone.hvacAction === 'cooling') state = 'cooling';
  else if (zone.hvacAction === 'off') state = 'off';
  return `pc-hero-dot-${state}`;
}

/**
 * Map a zone's hvacAction to the strip-row state class (drives left ribbon).
 * @param {HeroZoneInput} zone
 * @returns {string}
 */
function stripRowClass(zone) {
  let state = 'idle';
  if (zone.isUnavailable) state = 'unavail';
  else if (zone.hvacAction === 'heating') state = 'heat';
  else if (zone.hvacAction === 'cooling') state = 'cool';
  else if (zone.hvacAction === 'off') state = 'off';
  return `pc-row-${state}`;
}

/**
 * Render the Hero block.
 *
 * @param {HeroZoneInput[]} zoneStates - Resolved zone states from the card.
 * @param {{hero_show_thermal_strip?: boolean, hero_show_outside?: boolean}} cardConfig
 * @param {Map<string, Array<{t: number, v: number}>>} historyMap - Per-zone temperature history; missing keys → empty.
 * @param {HeroOutdoor|null} [outdoor] - Outdoor data; null/missing hides outside line.
 * @returns {string} HTML string. Empty when zoneStates is empty.
 */
export function renderHero(zoneStates, cardConfig, historyMap, outdoor) {
  if (!Array.isArray(zoneStates) || zoneStates.length === 0) return '';

  const live = zoneStates.filter((z) => !z.isUnavailable);
  const state = classifyClimateState(zoneStates);

  /* Home avg samples ALL zones with finite currentTemp regardless of
     hvacAction — sensors keep reading even when zones are off. */
  const tempSamples = zoneStates.filter(
    (z) => !z.isUnavailable && typeof z.currentTemp === 'number' && Number.isFinite(z.currentTemp),
  );
  const avgTemp = tempSamples.length > 0
    ? tempSamples.reduce((s, z) => s + /** @type {number} */ (z.currentTemp), 0) / tempSamples.length
    : null;
  const unit = (zoneStates[0] && zoneStates[0].unit) || '°C';

  const heat = live.filter((z) => z.hvacAction === 'heating').length;
  const cool = live.filter((z) => z.hvacAction === 'cooling').length;
  const stateLabel = STATE_LABELS[state] || 'Idle';

  const tempDisplay = avgTemp === null
    ? '—'
    : `${formatNumericDisplay(avgTemp)}${escapeHtml(unit)}`;

  let html = `<div class="pc-hero pc-state-${state}">`;

  /* Top row: temp block · dot cluster · status text */
  html += `<div class="pc-hero-top-row">`;

  html += `<div class="pc-hero-temp-block">`;
  html += `<div class="pc-hero-label">Home avg</div>`;
  html += `<div class="pc-hero-temp">${tempDisplay}</div>`;
  html += `</div>`;

  html += `<div class="pc-hero-dots">`;
  for (const zone of zoneStates) {
    const cls = dotStateClass(zone);
    const titleParts = [escapeHtml(zone.name)];
    if (!zone.isUnavailable && zone.hvacAction) titleParts.push(escapeHtml(zone.hvacAction));
    html += `<span class="pc-hero-zone-dot ${cls}" data-entity="${escapeHtml(zone.entityId)}" title="${titleParts.join(' — ')}"></span>`;
  }
  html += `</div>`;

  html += `<div class="pc-hero-right">`;
  const activeCount = heat + cool;
  const summary = activeCount > 0
    ? `${escapeHtml(stateLabel)} · ${activeCount} active`
    : `${escapeHtml(stateLabel)} · ${live.length} ${live.length === 1 ? 'zone' : 'zones'}`;
  html += `<div class="pc-hero-status">${summary}</div>`;

  const showOutside = cardConfig?.hero_show_outside !== false
    && outdoor && typeof outdoor.value === 'number' && Number.isFinite(outdoor.value);
  if (showOutside) {
    const outdoorVal = /** @type {HeroOutdoor} */ (outdoor);
    html += `<div class="pc-hero-outside">`;
    html += `Outside ${formatNumericDisplay(/** @type {number} */ (outdoorVal.value))}${escapeHtml(outdoorVal.unit)}`;
    html += `</div>`;
  }
  html += `</div>`;

  html += `</div>`;  /* end .pc-hero-top-row */

  /* Per-zone strip block: optional via hero_show_thermal_strip; default true. */
  const showStrips = cardConfig?.hero_show_thermal_strip !== false;
  if (showStrips) {
    const stripsHtml = renderStripsBlock(zoneStates, historyMap);
    if (stripsHtml) html += stripsHtml;
  }

  html += `</div>`;
  return html;
}

/**
 * Render the per-zone strip block. Empty string when no zone has any history
 * AND no zone has a current temp to render a single-cell ghost.
 *
 * @param {HeroZoneInput[]} zoneStates
 * @param {Map<string, Array<{t: number, v: number}>>} historyMap
 * @returns {string}
 */
function renderStripsBlock(zoneStates, historyMap) {
  const SLOTS = 24;
  const visible = zoneStates.slice(0, STRIP_ROW_CAP);
  const overflow = zoneStates.length - visible.length;

  /* Skip the entire strips block when no history is available for any zone — keeps
     the hero compact during initial load before the history fetch resolves. */
  let anyHistory = false;
  for (const zone of visible) {
    const h = historyMap?.get?.(zone.entityId);
    if (Array.isArray(h) && h.length >= 2) { anyHistory = true; break; }
  }
  if (!anyHistory) return '';

  let html = `<div class="pc-hero-strips">`;
  for (const zone of visible) {
    html += renderStripRow(zone, historyMap?.get?.(zone.entityId) || [], SLOTS);
  }
  if (overflow > 0) {
    html += `<div class="pc-hero-zone-strip pc-hero-zone-strip-overflow">`;
    html += `<div class="pc-hero-zone-strip-label">+${overflow} more</div>`;
    html += `</div>`;
  }
  html += `</div>`;
  return html;
}

/**
 * Render a single strip row (24 cells, dark→state-accent gradient by sample temperature).
 * @param {HeroZoneInput} zone
 * @param {Array<{t: number, v: number}>} history
 * @param {number} slots
 * @returns {string}
 */
function renderStripRow(zone, history, slots) {
  const rowClass = stripRowClass(zone);
  let cells = '';
  if (Array.isArray(history) && history.length >= 2) {
    const range = {
      minTemp: zone.minTemp ?? 18,
      maxTemp: zone.maxTemp ?? 26,
    };
    const stateKey = zone.isUnavailable ? 'off' : zone.hvacAction;
    const step = Math.max(1, Math.floor(history.length / slots));
    for (let i = 0; i < slots; i++) {
      const sample = history[Math.min(history.length - 1, i * step)];
      const colour = stateTemperatureToColor(sample.v, range, stateKey);
      cells += `<span style="background:${sanitizeCssValue(colour)}"></span>`;
    }
  } else {
    /* Ghost cells when history empty — keeps row layout aligned with peers. */
    for (let i = 0; i < slots; i++) {
      cells += `<span class="pc-hero-zone-strip-cell-ghost"></span>`;
    }
  }

  return `<div class="pc-hero-zone-strip ${rowClass}" data-entity="${escapeHtml(zone.entityId)}">`
    + `<div class="pc-hero-zone-strip-label">${escapeHtml(zone.name)}</div>`
    + `<div class="pc-hero-zone-strip-cells">${cells}</div>`
    + `</div>`;
}
