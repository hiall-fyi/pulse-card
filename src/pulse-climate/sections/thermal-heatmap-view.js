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
 * @param {string} [timeZone] - IANA zone from resolveHassTimeZone; undefined → browser-local slot labels.
 * @returns {string}
 */
export function renderThermalHeatmapView(zones, states, discovery, historyCache, timeZone) {
  let html = '<div class="pc-strip-rows">';
  html += '<div class="pc-strip-crosshair"></div>';

  let totalAvgSum = 0;
  let totalAvgCount = 0;
  let unit = '°C';
  /* Observed temperature span across every rendered cell — drives the
     dynamic legend so it only lists bands the data actually crosses. */
  let obsMin = Infinity;
  let obsMax = -Infinity;

  for (const zoneConfig of zones) {
    const { entityId, zoneName, zoneEntities, zoneState } = resolveZoneContext(zoneConfig, discovery, states);
    const resolved = resolveHistoryTempSensor(entityId, states, zoneEntities, zoneConfig);
    const sensorId = resolved?.entityId || entityId;
    const tempHistory = historyCache?.data?.[sensorId] || [];

    if (zoneState.unit) unit = zoneState.unit;

    const slotData = computeSlots(tempHistory, SLOTS, HOURS * 3600 * 1000, timeZone);
    for (const slot of slotData) {
      if (slot.value !== null && Number.isFinite(slot.value)) {
        if (slot.value < obsMin) obsMin = slot.value;
        if (slot.value > obsMax) obsMax = slot.value;
      }
    }
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
  const obsRange = (obsMin <= obsMax) ? { min: obsMin, max: obsMax } : null;
  html += renderFooter(totalAvgSum, totalAvgCount, unit, zones.length, obsRange);
  return html;
}

function renderTimeAxis() {
  /* Trailing span aligns with the per-row stat column — label it "avg" once
     here so each row's number reads unambiguously as the 24h average, not
     the live reading (which lives in the zones section). */
  return `<div class="pc-timeline-group-axis">`
    + `<span></span>`
    + `<div class="ticks"><span>−24h</span><span>−18h</span><span>−12h</span><span>−6h</span><span>now</span></div>`
    + `<span class="pc-timeline-group-stat-head">24h avg</span>`
    + `</div>`;
}

/**
 * @param {number} totalAvgSum
 * @param {number} totalAvgCount
 * @param {string} unit
 * @param {number} zoneCount
 * @param {{min: number, max: number}|null} obsRange - Observed temp span (Celsius) across all cells.
 * @returns {string}
 */
function renderFooter(totalAvgSum, totalAvgCount, unit, zoneCount, obsRange) {
  const homeAvg = totalAvgCount > 0 ? totalAvgSum / totalAvgCount : null;
  const avgDisplay = homeAvg === null
    ? '—'
    : `${formatNumericDisplay(homeAvg)}${escapeHtml(unit)}`;
  return `<div class="pc-timeline-group-footer">`
    + renderTempLegend(unit, obsRange)
    + `<span><strong>Home avg ${escapeHtml(avgDisplay)}</strong> · ${zoneCount} zones · 24h</span>`
    + `</div>`;
}

/**
 * Render the temperature legend by walking the TEMP_COLOR_BANDS table in
 * chart-primitives.js — single source of truth for the palette. Each band
 * becomes one pill: pip coloured per the band's hex, label naming the
 * band's range (e.g. "≤14°C", "16–17°C", "≥34°C").
 *
 * Dynamic range: only bands the observed data actually crosses are shown,
 * so the legend tracks the live window — cool colours in winter, hot
 * colours during a heatwave — without ever overflowing into extra rows.
 * The first shown band uses a "≤" label and the last an "≥" label so the
 * legend reads as a closed range even when the middle bands are trimmed.
 * Falls back to the full table when no data has been observed yet.
 *
 * @param {string} unit
 * @param {{min: number, max: number}|null} [obsRange] - Observed temp span in Celsius.
 * @returns {string}
 */
function renderTempLegend(unit, obsRange) {
  const isF = unit?.includes('F');
  /** Convert a Celsius boundary to display units. */
  const toDisplay = (/** @type {number} */ tC) => isF ? Math.round((tC * 9) / 5 + 32) : tC;

  /* Select the contiguous band slice the observed range crosses. A band
     [prevUpper, upper] is in range when its span overlaps [min, max].
     Without data, show the whole table. */
  const inRange = TEMP_COLOR_BANDS.map((band, i) => {
    if (!obsRange) return true;
    const lowerC = i === 0 ? -Infinity : /** @type {number} */ (TEMP_COLOR_BANDS[i - 1].upper);
    const upperC = band.upper === null ? Infinity : band.upper;
    return upperC >= obsRange.min && lowerC <= obsRange.max;
  });
  const firstIdx = inRange.indexOf(true);
  const lastIdx = inRange.lastIndexOf(true);

  let html = `<span class="pc-temp-legend">`;
  for (let i = firstIdx; i <= lastIdx; i++) {
    const band = TEMP_COLOR_BANDS[i];
    const prevUpperC = i === 0 ? null : /** @type {number} */ (TEMP_COLOR_BANDS[i - 1].upper);
    /** @type {string} */
    let label;
    if (i === firstIdx) {
      // Open the range at the bottom: "≤X" (or band span if it's also the only band).
      label = band.upper === null
        ? `≥${prevUpperC !== null ? toDisplay(prevUpperC) : ''}${unit}`
        : `≤${toDisplay(band.upper)}${unit}`;
    } else if (i === lastIdx) {
      // Close the range at the top: "≥X".
      const lo = prevUpperC !== null ? toDisplay(prevUpperC) : 0;
      label = `≥${lo}${unit}`;
    } else {
      label = `${prevUpperC !== null ? toDisplay(prevUpperC) : 0}–${toDisplay(/** @type {number} */ (band.upper))}${unit}`;
    }
    html += `<span class="pc-temp-legend-pill">`
      + `<span class="pc-temp-legend-pip" style="background:${sanitizeCssValue(band.color)}"></span>`
      + `${escapeHtml(label)}`
      + `</span>`;
  }
  html += `</span>`;
  return html;
}
