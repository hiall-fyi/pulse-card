/**
 * @module pulse-climate/sections/zone-ranking
 * @description Pure renderer for the Zone Ranking section. Displays a leaderboard
 * of zones sorted by a selectable metric with proportional bars and summary stats.
 */

import { escapeHtml, sanitizeCssValue } from '../../shared/utils.js';
import { resolveZoneState } from '../utils.js';
import { extractZoneName } from '../zone-resolver.js';
import { getAvailableMetrics, resolveMetricValue } from '../feature-availability.js';

/** Uniform blue for temp and humidity bars. */
const BLUE = 'var(--info-color, #5AC8FA)';

/**
 * Colour a power value by severity.
 * @param {number} v
 * @returns {string}
 */
function powerColor(v) {
  if (v <= 40) return 'var(--label-badge-green, #4CAF50)';
  if (v <= 70) return 'var(--label-badge-yellow, #FF9800)';
  return 'var(--label-badge-red, #F44336)';
}

/**
 * Colour a comfort value by severity.
 * @param {number} v
 * @returns {string}
 */
function comfortColor(v) {
  if (v >= 80) return 'var(--label-badge-green, #4CAF50)';
  if (v >= 50) return 'var(--label-badge-yellow, #FF9800)';
  return 'var(--label-badge-red, #F44336)';
}

/** @typedef {{ label: string, unit: string|null, max: number|null, colorFn: (v: number) => string }} MetricDef */

/** @type {Record<string, MetricDef>} */
const METRIC_DEFS = {
  power:    { label: 'Power',    unit: '%',  max: 100,  colorFn: powerColor },
  temp:     { label: 'Temp',     unit: null, max: null, colorFn: () => BLUE },
  humidity: { label: 'Humidity', unit: '%',  max: 100,  colorFn: () => BLUE },
  comfort:  { label: 'Comfort',  unit: '',   max: 100,  colorFn: comfortColor },
};

/**
 * Extract the metric value for a zone.
 * @param {string} metricKey
 * @param {*} zoneState - From resolveZoneState.
 * @param {string} zoneName
 * @param {import('../types.js').TadoDiscovery} discovery
 * @param {Record<string, *>} states
 * @returns {number|null}
 */
function extractValue(metricKey, zoneState, zoneName, discovery, states) {
  if (zoneState.isUnavailable) return null;
  switch (metricKey) {
    case 'power': return zoneState.heatingPower;
    case 'temp': return zoneState.currentTemp;
    case 'humidity': return zoneState.humidity;
    case 'comfort': return resolveMetricValue('comfort', zoneName, discovery, states);
    default: return null;
  }
}

/**
 * Compute summary statistics from metric values.
 * @param {Array<number|null>} values
 * @param {string} unit
 * @returns {{ avg: string, high: string, low: string, spread: string }}
 */
export function computeRankingSummary(values, unit) {
  const valid = values.filter((/** @type {number|null} */ v) => v !== null && v !== undefined);
  if (valid.length === 0) {
    return { avg: '--', high: '--', low: '--', spread: '--' };
  }
  const avg = (/** @type {number[]} */ (valid).reduce((s, v) => s + v, 0) / valid.length).toFixed(1);
  const high = Math.max(.../** @type {number[]} */ (valid));
  const low = Math.min(.../** @type {number[]} */ (valid));
  const spread = (high - low).toFixed(1);
  const u = unit || '';
  return {
    avg: `${avg}${u}`,
    high: `${Number.isInteger(high) ? high : high.toFixed(1)}${u}`,
    low: `${Number.isInteger(low) ? low : low.toFixed(1)}${u}`,
    spread: `${spread}${u}`,
  };
}

/**
 * Render Zone Ranking section HTML.
 * @param {import('../types.js').ZoneConfig[]} zones - Zone configs from card config.
 * @param {Record<string, *>} states - hass.states object.
 * @param {import('../types.js').TadoDiscovery} discovery - Discovered entities.
 * @param {string} [activeMetric='power'] - Currently active metric key.
 * @returns {string} HTML string (empty if zones array is empty).
 */
export function renderZoneRankingSection(zones, states, discovery, activeMetric = 'power') {
  if (!zones || zones.length === 0) return '';

  const available = getAvailableMetrics(zones, discovery, states);
  const metric = available.includes(activeMetric) ? activeMetric : 'power';
  const def = METRIC_DEFS[metric];
  if (!def) return '';

  // Resolve zone data
  /** @type {Array<{entityId: string, name: string, value: number|null, unit: string}>} */
  const zoneData = [];
  for (const zoneConfig of zones) {
    const entityId = zoneConfig.entity;
    const zoneName = extractZoneName(entityId);
    const discoveredEntities = discovery?.zoneEntities?.[zoneName] || {};
    const zs = resolveZoneState(entityId, discoveredEntities, states, zoneConfig, {});
    const value = extractValue(metric, zs, zoneName, discovery, states);
    zoneData.push({ entityId, name: zs.name, value, unit: zs.unit || '°C' });
  }

  // Sort descending by value, nulls to bottom
  zoneData.sort((a, b) => {
    if (a.value === null && b.value === null) return 0;
    if (a.value === null) return 1;
    if (b.value === null) return -1;
    return b.value - a.value;
  });

  // Compute max for bar scaling
  const validValues = zoneData.map((z) => z.value).filter((v) => v !== null);
  let scaleMax = def.max;
  if (scaleMax === null) {
    // Temp: dynamic max
    scaleMax = validValues.length > 0 ? Math.max(.../** @type {number[]} */ (validValues), 30) : 30;
  }

  // Resolve unit for display
  const displayUnit = def.unit !== null ? def.unit : (zoneData[0]?.unit || '°C');

  // Build HTML
  let html = `<div class="section section-zone-ranking" data-metric="${escapeHtml(metric)}">`;

  // Header: label + tabs
  html += `<div class="ranking-header">`;
  html += `<div class="section-label">Zone Ranking</div>`;
  html += `<div class="ranking-tabs">`;
  for (const key of available) {
    const d = METRIC_DEFS[key];
    if (!d) continue;
    const activeClass = key === metric ? ' active' : '';
    html += `<div class="ranking-tab${activeClass}" data-metric="${escapeHtml(key)}">${escapeHtml(d.label)}</div>`;
  }
  html += `</div></div>`;

  // Rank rows
  html += `<div class="ranking-list">`;
  for (let i = 0; i < zoneData.length; i++) {
    const z = zoneData[i];
    const rank = i + 1;
    const topClass = rank === 1 && z.value !== null ? ' top' : '';
    const pct = z.value !== null && scaleMax > 0 ? Math.round((z.value / scaleMax) * 100) : 0;
    const barColor = z.value !== null ? def.colorFn(z.value) : '';
    const barWidth = z.value !== null ? `${pct}%` : '0%';

    let displayValue;
    if (z.value === null) {
      displayValue = '--';
    } else if (metric === 'temp') {
      displayValue = `${z.value}${z.unit}`;
    } else {
      displayValue = `${z.value}${displayUnit}`;
    }

    html += `<div class="rank-row" role="button" tabindex="0" data-entity="${escapeHtml(z.entityId)}">`;
    html += `<div class="rank-num${topClass}">${rank}</div>`;
    html += `<div class="rank-name">${escapeHtml(z.name)}</div>`;
    html += `<div class="rank-bar-track"><div class="rank-bar-fill" style="width:${sanitizeCssValue(barWidth)};background:${sanitizeCssValue(barColor)}"></div></div>`;
    html += `<div class="rank-value">${escapeHtml(displayValue)}</div>`;
    html += `</div>`;
  }
  html += `</div>`;

  // Summary footer
  const summaryValues = zoneData.map((z) => z.value);
  const summary = computeRankingSummary(summaryValues, displayUnit);
  html += `<div class="ranking-summary">`;
  html += `<div class="stat"><div class="stat-value">${escapeHtml(summary.avg)}</div><div class="stat-label">Average</div></div>`;
  html += `<div class="stat"><div class="stat-value">${escapeHtml(summary.high)}</div><div class="stat-label">Highest</div></div>`;
  html += `<div class="stat"><div class="stat-value">${escapeHtml(summary.low)}</div><div class="stat-label">Lowest</div></div>`;
  html += `<div class="stat"><div class="stat-value">${escapeHtml(summary.spread)}</div><div class="stat-label">Spread</div></div>`;
  html += `</div>`;

  html += `</div>`;
  return html;
}
