/**
 * @module pulse-climate/sections/thermal-strip
 * @description Render horizontal heat-strip per zone showing temperature or
 * humidity history color-coded. Supports timeline (SVG strip) and heatmap
 * (HTML div grid) rendering modes. Attribute config controls temperature
 * or humidity display.
 * Pure renderer — no side effects, no DOM access.
 */

import { escapeHtml, sanitizeCssValue } from '../../shared/utils.js';
import { temperatureToColor, humidityToColor } from '../chart-primitives.js';
import { extractZoneName } from '../zone-resolver.js';
import { resolveHistoryTempSensor, resolveHistoryHumSensor, buildSourceIndicator } from '../sensor-resolver.js';
import { computeSlots, renderTimelineStrip, renderHeatmapStrip, renderTimeLabels } from './slot-engine.js';

/**
 * Render Thermal/Humidity strip section HTML.
 * @param {import('../types.js').ZoneConfig[]} zones - Zone configs.
 * @param {Record<string, *>} sectionConfig - Section config.
 * @param {Record<string, *>} states - hass.states.
 * @param {import('../types.js').TadoDiscovery} discovery - Discovered entities.
 * @param {import('../types.js').HistoryCache} historyCache - History cache.
 * @returns {string} HTML string.
 */
export function renderThermalStripSection(zones, sectionConfig, states, discovery, historyCache) {
  if (!zones || zones.length === 0) return '';

  const hours = Number(sectionConfig?.hours_to_show) || 24;
  const mode = /** @type {string} */ (sectionConfig?.mode) || 'timeline';
  const slotsPerHour = Number(sectionConfig?.slots_per_hour) || 2;
  const attribute = sectionConfig?.attribute || 'temperature';
  const isHumidity = attribute === 'humidity';
  const colorFn = isHumidity ? humidityToColor : temperatureToColor;
  const slots = mode === 'heatmap' ? hours : hours * slotsPerHour;
  const windowMs = hours * 3600000;
  const windowStart = Date.now() - windowMs;
  const nowPct = (Date.now() - windowStart) / windowMs * 100;

  const typeLabel = isHumidity ? 'Humidity' : 'Thermal';
  const modeLabel = mode === 'heatmap' ? 'Heatmap' : 'Timeline';

  let html = `<div class="section section-thermal-strip">`;
  html += `<div style="display:flex;justify-content:space-between;align-items:baseline">`;
  html += `<div class="section-label">${sanitizeCssValue(hours)}h ${escapeHtml(typeLabel)} ${escapeHtml(modeLabel)}</div>`;
  html += `<span class="card-subtitle section-subtitle" style="font-size:11px;color:var(--secondary-text-color,#636366)">Tap a zone for details</span>`;
  html += `</div>`;

  // Detail panel placeholder
  html += `<div class="zone-detail" id="timeline-detail"></div>`;

  // Crosshair element
  html += `<div class="strip-rows" style="position:relative">`;
  html += `<div class="strip-crosshair" style="display:none"></div>`;

  for (const zoneConfig of zones) {
    const entityId = zoneConfig.entity;
    const zoneName = extractZoneName(entityId);
    const zoneEntities = discovery?.zoneEntities?.[zoneName] || {};
    // Pick sensor based on attribute mode using shared resolver
    const resolved = isHumidity
      ? resolveHistoryHumSensor(entityId, states, zoneEntities, zoneConfig)
      : resolveHistoryTempSensor(entityId, states, zoneEntities, zoneConfig);
    const sensorId = resolved?.entityId || entityId;
    const friendlyName = zoneConfig.name || states[entityId]?.attributes?.friendly_name || zoneName;
    const data = historyCache?.data?.[sensorId] || [];

    html += `<div class="timeline-row" data-zone="${escapeHtml(zoneName)}" data-entity="${escapeHtml(entityId)}">`;
    html += `<span class="zone-label">${escapeHtml(friendlyName)}${buildSourceIndicator(resolved, states)}</span>`;

    if (data.length < 2) {
      // Distinguish "waiting for data" (entity exists but no history yet) from "no data"
      const entityExists = !!states[sensorId];
      const hasCacheEntry = sensorId in (historyCache?.data || {});
      const emptyMsg = (entityExists && !hasCacheEntry) ? 'Waiting for data' : 'No data';
      html += `<div class="strip-container"><div class="chart-empty" style="height:14px;font-size:10px">${escapeHtml(emptyMsg)}</div></div>`;
    } else {
      const slotData = computeSlots(data, slots, windowMs);
      const unitLabel = isHumidity ? 'humidity' : 'temperature';
      const ariaLabel = `${friendlyName} ${unitLabel} over ${hours}h`;

      if (mode === 'heatmap') {
        html += renderHeatmapStrip(slotData, colorFn, { ariaLabel });
      } else {
        html += renderTimelineStrip(slotData, colorFn, { ariaLabel, nowPct });
      }
    }

    html += `</div>`;
  }

  html += `</div>`;

  // Time axis
  html += `<div class="time-axis" style="margin-left:76px">`;
  html += renderTimeLabels(windowMs);
  html += `</div>`;

  html += `</div>`;
  return html;
}
