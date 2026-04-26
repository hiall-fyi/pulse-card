/**
 * @module pulse-climate/sections/comfort-strip
 * @description Render a Time × Zone comfort score matrix using HTML divs
 * (not SVG) for per-cell hover and per-row click interactions.
 * Includes legend and detail panel support.
 * Pure renderer — no side effects, no DOM access.
 */

import { escapeHtml, sanitizeCssValue } from '../../shared/utils.js';
import { extractZoneName } from '../zone-resolver.js';
import { resolveHistoryTempSensor, resolveHistoryHumSensor, buildSourceIndicator } from '../sensor-resolver.js';
import { renderHeatmapStrip, renderTimelineStrip, renderTimeLabels } from './slot-engine.js';

/**
 * Comfort level string → numeric score mapping for Tado CE blending.
 * @type {Record<string, number>}
 */
const COMFORT_LEVEL_MAP = {
  Comfortable: 100,
  Warm: 70,
  Cool: 70,
  'Too Warm': 40,
  'Too Cool': 40,
};

/**
 * Compute comfort score for a zone at a point in time.
 * @param {number|null} actualTemp
 * @param {number|null} targetTemp
 * @param {number|null} humidity
 * @param {string|null} comfortLevel
 * @returns {number|null} Score 0–100, or null if insufficient data.
 */
export function computeComfortScore(actualTemp, targetTemp, humidity, comfortLevel) {
  if (actualTemp === null || actualTemp === undefined ||
      targetTemp === null || targetTemp === undefined) {
    return null;
  }
  if (isNaN(actualTemp) || isNaN(targetTemp)) return null;
  let score = 100;
  score -= Math.min(50, Math.abs(actualTemp - targetTemp) * 10);
  if (humidity !== null && humidity !== undefined) {
    score -= Math.min(25, Math.abs(humidity - 45) * 0.5);
  }
  if (comfortLevel !== null && comfortLevel !== undefined) {
    const mapped = COMFORT_LEVEL_MAP[comfortLevel] ?? 50;
    score = score * 0.7 + mapped * 0.3;
  }
  return Math.max(0, Math.min(100, Math.round(score)));
}

/**
 * Map comfort score to rgba color with variable opacity.
 * @param {number} score - Comfort score 0–100.
 * @returns {string} CSS rgba() color string.
 */
function scoreToColor(score) {
  if (score >= 80) return `rgba(52, 199, 89, ${(0.35 + score / 100 * 0.55).toFixed(2)})`;
  if (score >= 50) {
    const t = (score - 50) / 30;
    return `rgba(${Math.round(255 - t * 50)}, ${Math.round(159 + t * 40)}, 10, 0.65)`;
  }
  return `rgba(255, 69, 58, ${(0.35 + (50 - score) / 50 * 0.5).toFixed(2)})`;
}

/**
 * Find the closest data point value at a given timestamp using binary search.
 * Data must be sorted by t (ascending).
 * @param {{t: number, v: number}[]} data
 * @param {number} targetTime
 * @param {number} [maxGap=7200000]
 * @returns {number|null}
 */
function closestValue(data, targetTime, maxGap = 7200000) {
  if (data.length === 0) return null;

  // Binary search for insertion point
  let lo = 0;
  let hi = data.length - 1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (data[mid].t < targetTime) lo = mid + 1;
    else hi = mid;
  }

  // Check lo and lo-1 for closest finite value
  let best = null;
  let bestDist = Infinity;
  for (let i = Math.max(0, lo - 1); i <= Math.min(data.length - 1, lo); i++) {
    const dist = Math.abs(data[i].t - targetTime);
    if (dist < bestDist && isFinite(data[i].v)) {
      bestDist = dist;
      best = data[i].v;
    }
  }
  return bestDist <= maxGap ? best : null;
}

/**
 * Render Comfort Heatmap section HTML using HTML divs for interactivity.
 * @param {import('../types.js').ZoneConfig[]} zones
 * @param {Record<string, *>} sectionConfig
 * @param {Record<string, *>} states
 * @param {import('../types.js').TadoDiscovery} discovery
 * @param {import('../types.js').HistoryCache} historyCache
 * @returns {string} HTML string.
 */
export function renderComfortStripSection(zones, sectionConfig, states, discovery, historyCache) {
  if (!zones || zones.length === 0) return '';

  const slotsPerHour = Number(sectionConfig?.slots_per_hour) || 1;
  const hours = Number(sectionConfig?.hours_to_show) || 24;
  const mode = /** @type {string} */ (sectionConfig?.mode) || 'heatmap';
  const slots = slotsPerHour * hours;
  const windowMs = hours * 3600000;
  const windowStart = Date.now() - windowMs;
  const nowPct = (Date.now() - windowStart) / windowMs * 100;

  const modeLabel = mode === 'timeline' ? 'Comfort Timeline' : 'Comfort Heatmap';

  let html = `<div class="section section-comfort-strip">`;
  html += `<div style="display:flex;justify-content:space-between;align-items:baseline">`;
  html += `<div class="section-label">${sanitizeCssValue(hours)}h ${escapeHtml(modeLabel)}</div>`;
  html += `<span class="card-subtitle" style="font-size:11px;color:var(--secondary-text-color,#636366)">Tap a zone for details</span>`;
  html += `</div>`;

  // Detail panel placeholder (populated by JS on select)
  html += `<div class="zone-detail" id="heatmap-detail"></div>`;

  // Heatmap rows
  html += `<div class="heatmap-body" style="position:relative">`;
  html += `<div class="strip-crosshair" style="display:none"></div>`;
  for (let z = 0; z < zones.length; z++) {
    const zoneConfig = zones[z];
    const entityId = zoneConfig.entity;
    const zoneName = extractZoneName(entityId);
    const zoneEntities = discovery?.zoneEntities?.[zoneName] || {};
    const friendlyName = zoneConfig.name || states[entityId]?.attributes?.friendly_name || zoneName;
    const tempResolved = resolveHistoryTempSensor(entityId, states, zoneEntities, zoneConfig);
    const tempSensorId = tempResolved.entityId;
    const humResolved = resolveHistoryHumSensor(entityId, states, zoneEntities, zoneConfig);
    const humSensorId = humResolved?.entityId || null;
    const tempData = historyCache?.data?.[tempSensorId] || [];
    const humData = humSensorId ? (historyCache?.data?.[humSensorId] || []) : [];
    const targetTemp = states[entityId]?.attributes?.temperature ?? null;
    const comfortEntity = zoneEntities.comfort_level;
    const comfortLevel = comfortEntity ? (states[comfortEntity]?.state || null) : null;

    // Compute scores for each slot as SlotData[]
    /** @type {import('./slot-engine.js').SlotData[]} */
    const slotData = [];
    const slotSize = windowMs / slots;

    // Seed lastScore from the most recent data before the window starts,
    // so early slots don't show as empty when data exists just before the boundary.
    /** @type {number|null} */
    let lastScore = null;
    if (tempData.length > 0) {
      const preWindowTemp = closestValue(tempData, windowStart, Infinity);
      const preWindowHum = humData.length > 0 ? closestValue(humData, windowStart, Infinity) : null;
      if (preWindowTemp !== null) {
        lastScore = computeComfortScore(preWindowTemp, targetTemp, preWindowHum, comfortLevel);
      }
    }

    for (let s = 0; s < slots; s++) {
      const slotStart = windowStart + s * slotSize;
      const slotMid = slotStart + slotSize / 2;
      const temp = closestValue(tempData, slotMid);
      const hum = closestValue(humData, slotMid);
      const score = computeComfortScore(temp, targetTemp, hum, comfortLevel);
      if (score !== null) lastScore = score;
      const slotDate = new Date(slotMid);
      const hourLabel = `${String(slotDate.getHours()).padStart(2, '0')}:${String(slotDate.getMinutes()).padStart(2, '0')}`;
      slotData.push({ value: lastScore, time: slotMid, label: hourLabel });
    }

    html += `<div class="heatmap-row" data-zone="${escapeHtml(zoneName)}" data-idx="${z}">`;
    html += `<span class="zone-label">${escapeHtml(friendlyName)}${buildSourceIndicator(tempResolved, states)}</span>`;
    const ariaLabel = `${friendlyName} comfort over ${hours}h`;
    if (mode === 'timeline') {
      html += renderTimelineStrip(slotData, scoreToColor, { ariaLabel, nowPct });
    } else {
      html += renderHeatmapStrip(slotData, scoreToColor);
    }
    html += `</div>`;
  }
  html += `</div>`;

  // Time axis
  html += `<div class="heatmap-time-axis">`;
  html += renderTimeLabels(windowMs);
  html += `</div>`;

  // Legend
  html += `<div class="heatmap-legend">`;
  html += `<div class="legend-item"><div class="legend-swatch" style="background:rgba(52,199,89,0.7)"></div>≥80</div>`;
  html += `<div class="legend-item"><div class="legend-swatch" style="background:rgba(255,159,10,0.65)"></div>50–79</div>`;
  html += `<div class="legend-item"><div class="legend-swatch" style="background:rgba(255,69,58,0.6)"></div>&lt;50</div>`;
  html += `</div>`;

  html += `</div>`;
  return html;
}
