/**
 * @module pulse-climate/sections/thermal-strip
 * @description Render horizontal heat-strip per zone showing temperature or
 * humidity history color-coded. Supports timeline (SVG strip) and heatmap
 * (HTML div grid) rendering modes. Attribute config controls temperature
 * or humidity display.
 * Pure renderer — no side effects, no DOM access.
 */

import { escapeHtml } from '../../shared/utils.js';
import { temperatureToColor, humidityToColor } from '../chart-primitives.js';
import { resolveZoneContext, rowStateClass } from '../utils.js';
import { resolveHistoryTempSensor, resolveHistoryHumSensor } from '../sensor-resolver.js';
import { computeSlots, renderTimelineStrip, renderHeatmapStrip, renderTimeLabels } from './slot-engine.js';
import { renderThermalHeatmapView } from './thermal-heatmap-view.js';

/**
 * Render Thermal/Humidity strip section HTML.
 * @param {import('../types.js').ZoneConfig[]} zones - Zone configs.
 * @param {Record<string, *>} sectionConfig - Section config.
 * @param {Record<string, *>} states - hass.states.
 * @param {import('../types.js').TadoDiscovery} discovery - Discovered entities.
 * @param {import('../types.js').HistoryCache} historyCache - History cache.
 * @param {string} [timeZone] - IANA zone from resolveHassTimeZone; undefined → browser-local labels.
 * @returns {string} HTML string.
 */
export function renderThermalStripSection(zones, sectionConfig, states, discovery, historyCache, timeZone) {
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

  let html = `<div class="pc-section pc-section-thermal-strip">`;
  html += `<div class="pc-section-header">`;
  html += `<div class="pulse-section-label">${escapeHtml(String(Number(hours)))}h ${escapeHtml(typeLabel)} ${escapeHtml(modeLabel)}</div>`;
  html += `<span class="pc-section-subtitle">Tap a zone for details</span>`;
  html += `</div>`;

  /* Temperature heatmap delegates the body to thermal-heatmap-view (same
     renderer powers the timeline_group Thermal tab). Timeline mode and
     humidity heatmap take the inline path below. */
  if (mode === 'heatmap' && !isHumidity) {
    html += `<div class="pc-zone-detail" id="timeline-detail"></div>`;
    html += renderThermalHeatmapView(zones, states, discovery, historyCache, timeZone);
    html += `</div>`;
    return html;
  }

  html += `<div class="pc-zone-detail" id="timeline-detail"></div>`;
  html += `<div class="pc-strip-rows">`;
  html += `<div class="pc-strip-crosshair"></div>`;

  for (const zoneConfig of zones) {
    const { entityId, zoneName, zoneEntities, zoneState } = resolveZoneContext(zoneConfig, discovery, states);
    const resolved = isHumidity
      ? resolveHistoryHumSensor(entityId, states, zoneEntities, zoneConfig)
      : resolveHistoryTempSensor(entityId, states, zoneEntities, zoneConfig);
    const sensorId = resolved?.entityId || entityId;
    const friendlyName = zoneConfig.name || states[entityId]?.attributes?.friendly_name || zoneName;
    const data = historyCache?.data?.[sensorId] || [];
    const rowClass = rowStateClass(zoneState);

    html += `<div class="pc-timeline-row${rowClass}" data-zone="${escapeHtml(zoneName)}" data-entity="${escapeHtml(entityId)}">`;
    html += `<span class="pc-zone-label">${escapeHtml(friendlyName)}</span>`;

    if (data.length < 2) {
      // Distinguish "waiting for data" (entity exists but no history yet) from "no data"
      const entityExists = !!states[sensorId];
      const hasCacheEntry = sensorId in (historyCache?.data || {});
      const emptyMsg = (entityExists && !hasCacheEntry) ? 'Waiting for data' : 'No data';
      html += `<div class="pc-strip-container"><div class="pc-chart-empty">`
        + `${escapeHtml(emptyMsg)}</div></div>`;
    } else {
      const slotData = computeSlots(data, slots, windowMs, timeZone);
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

  html += `<div class="pc-time-axis">`;
  html += renderTimeLabels(windowMs, timeZone);
  html += `</div>`;

  html += `</div>`;
  return html;
}
