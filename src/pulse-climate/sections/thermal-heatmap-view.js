/**
 * @module pulse-climate/sections/thermal-heatmap-view
 * @description Body renderer for the Thermal tab inside timeline-group.
 * Cells use the rainbow temperature palette via temperatureToColor(). Each
 * row carries a 24h average stat column to match state-timeline's duration
 * column so rows align grid-for-grid across tab switches. Pure body
 * renderer — no section header.
 */

import { escapeHtml, formatNumericDisplay, sanitizeCssValue } from '../../shared/utils.js';
import { resolveZoneContext, rowStateClass } from '../utils.js';
import { resolveHistoryTempSensor } from '../sensor-resolver.js';
import { temperatureToColor, TEMP_COLOR_BANDS } from '../chart-primitives.js';
import { computeSlots, renderHeatmapStrip } from './slot-engine.js';

const HOURS = 24;
const SLOTS = HOURS;

/**
 * @param {Array<{t: number, v: number}>|null|undefined} history
 * @returns {number|null} mean of in-window samples, or null when none.
 */
export function computeAverage(history) {
  if (!Array.isArray(history) || history.length === 0) return null;
  const cutoff = Date.now() - HOURS * 3600 * 1000;
  const samples = history.filter((h) => h && h.t >= cutoff && Number.isFinite(h.v));
  if (samples.length === 0) return null;
  const sum = samples.reduce((acc, h) => acc + h.v, 0);
  return sum / samples.length;
}


/**
 * @param {{entity: string}[]} zones
 * @param {Record<string, *>} states
 * @param {*} discovery
 * @param {*} historyCache
 * @returns {string}
 */
export function renderThermalHeatmapView(zones, states, discovery, historyCache) {
  let html = '<div class="pc-strip-rows">';
  html += '<div class="pc-strip-crosshair"></div>';

  let totalAvgSum = 0;
  let totalAvgCount = 0;
  let unit = '°C';

  for (const zoneConfig of zones) {
    const { entityId, zoneName, zoneEntities, zoneState } = resolveZoneContext(zoneConfig, discovery, states);
    const resolved = resolveHistoryTempSensor(entityId, states, zoneEntities, zoneConfig);
    const sensorId = resolved?.entityId || entityId;
    const tempHistory = historyCache?.data?.[sensorId] || [];

    if (zoneState.unit) unit = zoneState.unit;

    const slotData = computeSlots(tempHistory, SLOTS, HOURS * 3600 * 1000);
    const cellsHtml = renderHeatmapStrip(slotData, temperatureToColor);
    const avg = computeAverage(tempHistory);
    if (avg !== null) {
      totalAvgSum += avg;
      totalAvgCount += 1;
    }
    const avgDisplay = avg === null
      ? '--'
      : `${formatNumericDisplay(avg)}${escapeHtml(zoneState.unit || '°C')}`;

    const rowClass = rowStateClass(zoneState);
    html += `<div class="pc-timeline-group-row pc-timeline-row${rowClass}" `
          + `data-entity="${escapeHtml(entityId)}" `
          + `data-zone="${escapeHtml(zoneName)}">`;
    html += `<span class="pc-timeline-group-name pc-zone-label">${escapeHtml(zoneState.name)}</span>`;
    html += cellsHtml;
    html += `<span class="pc-timeline-group-stat">${escapeHtml(avgDisplay)}</span>`;
    html += `</div>`;
  }
  html += '</div>';
  html += renderTimeAxis();
  html += renderFooter(totalAvgSum, totalAvgCount, unit, zones.length);
  return html;
}

function renderTimeAxis() {
  return `<div class="pc-timeline-group-axis">`
    + `<span></span>`
    + `<div class="ticks"><span>−24h</span><span>−18h</span><span>−12h</span><span>−6h</span><span>now</span></div>`
    + `<span></span>`
    + `</div>`;
}

/**
 * @param {number} totalAvgSum
 * @param {number} totalAvgCount
 * @param {string} unit
 * @param {number} zoneCount
 * @returns {string}
 */
function renderFooter(totalAvgSum, totalAvgCount, unit, zoneCount) {
  const homeAvg = totalAvgCount > 0 ? totalAvgSum / totalAvgCount : null;
  const avgDisplay = homeAvg === null
    ? '—'
    : `${formatNumericDisplay(homeAvg)}${escapeHtml(unit)}`;
  return `<div class="pc-timeline-group-footer">`
    + renderTempLegend(unit)
    + `<span><strong>Home avg ${escapeHtml(avgDisplay)}</strong> · ${zoneCount} zones</span>`
    + `</div>`;
}

/**
 * Render the temperature legend by walking the TEMP_COLOR_BANDS table in
 * chart-primitives.js — single source of truth for the palette. Each band
 * becomes one pill: pip coloured per the band's hex, label naming the
 * band's range (e.g. "≤14°C", "16–17°C", "≥24°C").
 *
 * Skips cool bands ≤16°C on Celsius / ≤61°F on Fahrenheit by default —
 * 11 pills runs into a second row on dashboards narrower than ~600px.
 * Users in colder homes still see the cool colours in cells; the legend
 * is a colour reference, not a complete band atlas.
 *
 * @param {string} unit
 * @returns {string}
 */
function renderTempLegend(unit) {
  const isF = unit?.includes('F');
  /** Convert a Celsius boundary to display units. */
  const toDisplay = (/** @type {number} */ tC) => isF ? Math.round((tC * 9) / 5 + 32) : tC;
  /** Floor cutoff: skip bands whose entire range is below this in display units. */
  const floor = isF ? 61 : 16;

  let html = `<span class="pc-temp-legend">`;
  let prevUpperC = null;
  for (const band of TEMP_COLOR_BANDS) {
    const upperC = band.upper;
    /* Skip bands entirely below the floor (cool-end pruning). */
    if (upperC !== null && toDisplay(upperC) < floor) {
      prevUpperC = upperC;
      continue;
    }
    /** @type {string} */
    let label;
    if (upperC === null) {
      const lo = prevUpperC !== null ? toDisplay(prevUpperC) : floor;
      label = `≥${lo}${unit}`;
    } else if (prevUpperC === null) {
      label = `≤${toDisplay(upperC)}${unit}`;
    } else {
      label = `${toDisplay(prevUpperC)}–${toDisplay(upperC)}${unit}`;
    }
    html += `<span class="pc-temp-legend-pill">`
      + `<span class="pc-temp-legend-pip" style="background:${sanitizeCssValue(band.color)}"></span>`
      + `${escapeHtml(label)}`
      + `</span>`;
    prevUpperC = upperC;
  }
  html += `</span>`;
  return html;
}
