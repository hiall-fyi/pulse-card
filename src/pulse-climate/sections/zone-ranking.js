/**
 * @module pulse-climate/sections/zone-ranking
 * @description Pure renderer for the Zone Ranking section. Displays a leaderboard
 * of zones sorted by a selectable metric with proportional bars and summary stats.
 */

import { escapeHtml, sanitizeCssValue } from '../../shared/utils.js';
import { resolveZoneContext, rowStateClass, formatTemperature, formatPercent, averageZonePower } from '../utils.js';
import { getAvailableMetrics } from '../feature-availability.js';
import { computeComfortScore, resolveComfortInputs } from './comfort-strip.js';

/**
 * Tier a power value by severity.
 * @param {number} v
 * @returns {string}
 */
function powerTier(v) {
  if (v <= 40) return 'green';
  if (v <= 70) return 'amber';
  return 'red';
}

/**
 * Tier a comfort value by severity.
 * @param {number} v
 * @returns {string}
 */
function comfortTier(v) {
  if (v >= 80) return 'green';
  if (v >= 50) return 'amber';
  return 'red';
}

/** @typedef {{ label: string, unit: string|null, max: number|null, tierFn: (v: number) => string }} MetricDef */

/** @type {Record<string, MetricDef>} */
const METRIC_DEFS = {
  power:    { label: 'Power',    unit: '%',  max: 100,  tierFn: powerTier },
  temp:     { label: 'Temp',     unit: null, max: null, tierFn: () => 'blue' },
  humidity: { label: 'Humidity', unit: '%',  max: 100,  tierFn: () => 'blue' },
  comfort:  { label: 'Comfort',  unit: '',   max: 100,  tierFn: comfortTier },
};

/**
 * Extract the metric value for a zone.
 * @param {string} metricKey
 * @param {import('../types.js').ZoneConfig} zoneConfig
 * @param {ReturnType<typeof resolveZoneContext>} zoneContext
 * @param {Record<string, *>} states
 * @returns {number|null}
 */
function extractValue(metricKey, zoneConfig, zoneContext, states) {
  const zoneState = zoneContext.zoneState;
  if (zoneState.isUnavailable) return null;
  switch (metricKey) {
    case 'power': return zoneState.hasPowerData ? (zoneState.heatingPower || zoneState.coolingPower || 0) : null;
    case 'temp': return zoneState.currentTemp;
    case 'humidity': return zoneState.humidity;
    case 'comfort': {
      const c = resolveComfortInputs(zoneConfig, zoneContext, states);
      return computeComfortScore(c.temp, c.target, c.humidity, c.level);
    }
    default: return null;
  }
}

/**
 * Compute summary statistics from metric values.
 * @param {Array<number|null>} values
 * @param {string} unit
 * @param {number|null} [avgOverride] - Replaces the mean when given (null prints --).
 * @returns {{ avg: string, high: string, low: string, spread: string }}
 */
export function computeRankingSummary(values, unit, avgOverride) {
  const valid = values.filter((/** @type {number|null} */ v) => v !== null && v !== undefined);
  if (valid.length === 0) {
    return { avg: '--', high: '--', low: '--', spread: '--' };
  }
  const avg = avgOverride !== undefined ? avgOverride : /** @type {number[]} */ (valid).reduce((s, v) => s + v, 0) / valid.length;
  const high = Math.max(.../** @type {number[]} */ (valid));
  const low = Math.min(.../** @type {number[]} */ (valid));
  const spread = high - low;
  const u = unit || '';
  const fmt = (/** @type {number} */ v) => (u === '%' ? formatPercent(v) : formatTemperature(v, u));
  return {
    avg: avg === null ? '--' : fmt(avg),
    high: fmt(high),
    low: fmt(low),
    spread: fmt(spread),
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

  /** @type {Array<{entityId: string, name: string, value: number|null, unit: string, rowClass: string, isUnavailable: boolean, hvacAction: string, hasPowerData: boolean}>} */
  const zoneData = [];
  for (const zoneConfig of zones) {
    const ctx = resolveZoneContext(zoneConfig, discovery, states);
    const { entityId, zoneState: zs } = ctx;
    const value = extractValue(metric, zoneConfig, ctx, states);
    zoneData.push({ entityId, name: zs.name, value, unit: zs.unit || '°C', rowClass: rowStateClass(zs), isUnavailable: zs.isUnavailable, hvacAction: zs.hvacAction, hasPowerData: !!zs.hasPowerData });
  }

  /* Sort descending by value, nulls to bottom. */
  zoneData.sort((a, b) => {
    if (a.value === null && b.value === null) return 0;
    if (a.value === null) return 1;
    if (b.value === null) return -1;
    return b.value - a.value;
  });

  const validValues = zoneData.map((z) => z.value).filter((v) => v !== null);
  let scaleMax = def.max;
  if (scaleMax === null) {
    /* Temp metric uses a dynamic max (other metrics declare a fixed max in METRIC_DEFS). */
    scaleMax = validValues.length > 0 ? Math.max(.../** @type {number[]} */ (validValues), 30) : 30;
  }

  const displayUnit = def.unit !== null ? def.unit : (zoneData[0]?.unit || '°C');

  let html = `<div class="pc-section pc-section-zone-ranking" data-metric="${escapeHtml(metric)}">`;

  html += `<div class="pc-ranking-header">`;
  html += `<div class="pulse-section-label">Zone Ranking</div>`;
  html += `<div class="pc-ranking-tabs" role="tablist">`;
  for (const key of available) {
    const d = METRIC_DEFS[key];
    if (!d) continue;
    const activeClass = key === metric ? ' pc-active' : '';
    html += `<div class="pc-ranking-tab${activeClass}" role="tab" tabindex="0" `
          + `aria-selected="${key === metric}" `
          + `data-metric="${escapeHtml(key)}">${escapeHtml(d.label)}</div>`;
  }
  html += `</div></div>`;

  html += `<div class="pc-ranking-list">`;
  for (let i = 0; i < zoneData.length; i++) {
    const z = zoneData[i];
    const rank = i + 1;
    const topClass = rank === 1 && z.value !== null ? ' pc-top' : '';
    const pct = z.value !== null && scaleMax > 0 ? Math.round((z.value / scaleMax) * 100) : 0;
    const barTier = z.value !== null ? def.tierFn(z.value) : null;
    const barWidth = z.value !== null ? `${pct}%` : '0%';

    let displayValue;
    if (z.value === null) {
      displayValue = '--';
    } else if (metric === 'temp') {
      displayValue = formatTemperature(z.value, z.unit);
    } else if (displayUnit === '%') {
      displayValue = formatPercent(z.value);
    } else {
      displayValue = `${z.value}${displayUnit}`;
    }

    html += `<div class="pc-rank-row${z.rowClass}" role="button" tabindex="0" data-entity="${escapeHtml(z.entityId)}">`;
    html += `<div class="pc-rank-num${topClass}">${rank}</div>`;
    html += `<div class="pc-rank-name">${escapeHtml(z.name)}</div>`;
    html += `<div class="pc-rank-bar-track"><div class="pc-rank-bar-fill${barTier ? ` pc-status-${barTier}` : ''}" style="width:${sanitizeCssValue(barWidth)}"></div></div>`;
    html += `<div class="pc-rank-value">${escapeHtml(displayValue)}</div>`;
    html += `</div>`;
  }
  html += `</div>`;

  const summaryValues = zoneData.map((z) => z.value);
  const powerAvg = metric === 'power' ? averageZonePower(zoneData.map((z) => ({ ...z, power: z.value ?? 0 }))) : undefined;
  const summary = computeRankingSummary(summaryValues, displayUnit, powerAvg);
  html += `<div class="pc-ranking-summary">`;
  html += `<div class="pc-stat"><div class="pc-stat-value">${escapeHtml(summary.avg)}</div><div class="pc-stat-label">Average</div></div>`;
  html += `<div class="pc-stat"><div class="pc-stat-value">${escapeHtml(summary.high)}</div><div class="pc-stat-label">Highest</div></div>`;
  html += `<div class="pc-stat"><div class="pc-stat-value">${escapeHtml(summary.low)}</div><div class="pc-stat-label">Lowest</div></div>`;
  html += `<div class="pc-stat"><div class="pc-stat-value">${escapeHtml(summary.spread)}</div><div class="pc-stat-label">Spread</div></div>`;
  html += `</div>`;

  html += `</div>`;
  return html;
}
