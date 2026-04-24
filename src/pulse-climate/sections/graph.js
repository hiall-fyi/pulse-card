/**
 * @module pulse-climate/sections/graph
 * @description Multi-line time series graph section for Pulse Climate Card.
 * Uses buildFilledSparkline for filled-area rendering matching the pulse
 * visual language. Pure renderer — no side effects, no DOM access.
 */

import { escapeHtml, sanitizeCssValue } from '../../shared/utils.js';
import { CHART_PALETTE } from '../constants.js';
import { buildFilledSparkline, buildMultiLinePaths, buildLegendChips } from '../chart-primitives.js';
import { extractZoneName } from '../zone-resolver.js';

/**
 * Resolve the color for a zone at a given index.
 * @param {number} index - Zone index.
 * @param {string[]} [palette] - Custom palette (falls back to CHART_PALETTE).
 * @returns {string} CSS color string.
 */
export function resolveChartColor(index, palette) {
  const pal = (palette && palette.length > 0) ? palette : CHART_PALETTE;
  return pal[index % pal.length];
}

/**
 * Build a filled graph SVG for multiple series.
 * Each series renders as a filled sparkline (gradient area + line).
 * @param {import('../types.js').LineSeriesInput[]} series
 * @param {number} height
 * @param {string} ariaLabel
 * @returns {string} HTML string.
 */
function renderFilledGraph(series, height, ariaLabel) {
  const width = 300;

  // Try filled sparkline for each series
  /** @type {{linePath: string, areaPath: string, color: string, entityId: string}[]} */
  const filled = [];
  for (const s of series) {
    const result = buildFilledSparkline(s.data, width, height, 48);
    if (result) {
      filled.push({ ...result, color: s.color, entityId: s.entityId });
    }
  }

  // Fallback to line-only if no filled sparklines produced
  if (filled.length === 0) {
    const paths = buildMultiLinePaths(series, width, height);
    const hasData = paths.some((p) => p.d !== '');
    if (!hasData) return `<div class="chart-empty">No data available</div>`;

    let svg = `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeHtml(ariaLabel)}" class="chart-svg" preserveAspectRatio="none">`;
    for (const p of paths) {
      if (p.d === '') continue;
      svg += `<path d="${p.d}" fill="none" stroke="${sanitizeCssValue(p.color)}" stroke-width="var(--pulse-chart-line-width, 1.5)" data-entity="${escapeHtml(p.entityId)}" />`;
    }
    svg += '</svg>';
    return svg;
  }

  let svg = `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeHtml(ariaLabel)}" class="chart-svg" preserveAspectRatio="none">`;
  svg += '<defs>';
  for (let i = 0; i < filled.length; i++) {
    const gradId = `graph-grad-${i}`;
    svg += `<linearGradient id="${gradId}" x1="0" y1="0" x2="0" y2="1">`;
    svg += `<stop offset="0%" stop-color="${sanitizeCssValue(filled[i].color)}" stop-opacity="0.25"/>`;
    svg += `<stop offset="100%" stop-color="${sanitizeCssValue(filled[i].color)}" stop-opacity="0"/>`;
    svg += `</linearGradient>`;
  }
  svg += '</defs>';

  for (let i = 0; i < filled.length; i++) {
    const f = filled[i];
    svg += `<path d="${f.areaPath}" fill="url(#graph-grad-${i})" />`;
    svg += `<path d="${f.linePath}" fill="none" stroke="${sanitizeCssValue(f.color)}" stroke-width="var(--pulse-chart-line-width, 1.5)" data-entity="${escapeHtml(f.entityId)}" />`;
  }
  svg += '</svg>';
  return svg;
}

/**
 * Render a multi-line time series graph section.
 * @param {Record<string, *>} sectionConfig - Section config with graph options.
 * @param {import('../types.js').ZoneConfig[]} zones - Configured zones.
 * @param {import('../types.js').HistoryCache} historyCache - Cached history data.
 * @param {Record<string, *>} states - hass.states for current values.
 * @param {import('../types.js').TadoDiscovery} discovery - Discovered entities.
 * @returns {string} HTML string.
 */
export function renderGraphSection(sectionConfig, zones, historyCache, states, discovery) {
  const attribute = sectionConfig.attribute || 'current_temperature';
  const stacked = sectionConfig.stacked === true;
  const height = Number(sectionConfig.height) || 80;
  const palette = sectionConfig.palette || undefined;

  const climateIds = sectionConfig.entities || zones.map((/** @type {*} */ z) => z.entity);
  if (climateIds.length === 0) return '';

  let html = '<div class="section section-graph">';

  if (stacked) {
    html += renderAttributeGraph(climateIds, 'current_temperature', 'Temperature', height, palette, historyCache, states, discovery, zones);
    html += renderAttributeGraph(climateIds, 'current_humidity', 'Humidity', height, palette, historyCache, states, discovery, zones);
  } else {
    const label = attribute === 'current_humidity' ? 'Humidity' : 'Temperature';
    html += renderAttributeGraph(climateIds, attribute, label, height, palette, historyCache, states, discovery, zones);
  }

  html += '</div>';
  return html;
}

/**
 * Resolve the best sensor entity for history data.
 * @param {string} climateEntityId
 * @param {string} attribute
 * @param {import('../types.js').TadoDiscovery} discovery
 * @param {import('../types.js').ZoneConfig[]} [zones] - Zone configs for override lookup.
 * @returns {string} Entity ID to use for history lookup.
 */
function resolveHistoryEntity(climateEntityId, attribute, discovery, zones) {
  const zoneName = extractZoneName(climateEntityId);
  const zoneEntities = discovery?.zoneEntities?.[zoneName] || {};
  const zoneConfig = zones?.find((/** @type {*} */ z) => z.entity === climateEntityId);

  if (attribute === 'current_temperature' || attribute === 'temperature') {
    return zoneConfig?.temperature_entity || zoneEntities.temperature || climateEntityId;
  }
  if (attribute === 'current_humidity' || attribute === 'humidity') {
    return zoneConfig?.humidity_entity || zoneEntities.humidity || climateEntityId;
  }
  return climateEntityId;
}

/**
 * Render a single attribute graph with legend.
 * @param {string[]} climateIds
 * @param {string} attribute
 * @param {string} label
 * @param {number} height
 * @param {string[]} palette
 * @param {import('../types.js').HistoryCache} historyCache
 * @param {Record<string, *>} states
 * @param {import('../types.js').TadoDiscovery} discovery
 * @param {import('../types.js').ZoneConfig[]} [zones]
 * @returns {string}
 */
function renderAttributeGraph(climateIds, attribute, label, height, palette, historyCache, states, discovery, zones) {
  const series = [];
  const legendItems = [];

  for (let i = 0; i < climateIds.length; i++) {
    const climateId = climateIds[i];
    const color = resolveChartColor(i, palette);
    const historyEntityId = resolveHistoryEntity(climateId, attribute, discovery, zones);
    const data = historyCache.data[historyEntityId] || [];
    const zoneName = extractZoneName(climateId);
    const zoneConfig = zones?.find((/** @type {*} */ z) => z.entity === climateId);
    const friendlyName = zoneConfig?.name || states[climateId]?.attributes?.friendly_name || zoneName;
    const currentValue = states[climateId]?.attributes?.[attribute];
    const unit = attribute === 'current_humidity' ? '%' : (states[climateId]?.attributes?.unit_of_measurement || '°C');

    series.push({ entityId: historyEntityId, data, color });
    legendItems.push({
      label: friendlyName,
      color,
      value: currentValue !== undefined && currentValue !== null ? `${currentValue}${unit}` : '--',
    });
  }

  const zoneNames = legendItems.map((l) => l.label).join(', ');
  const ariaLabel = `${label} history for ${zoneNames}`;

  let html = `<div class="section-label">${escapeHtml(label)}</div>`;
  html += `<div class="chart-container" style="height:${sanitizeCssValue(height)}px">`;
  html += renderFilledGraph(series, height, ariaLabel);
  html += '</div>';
  html += buildLegendChips(legendItems);
  return html;
}
