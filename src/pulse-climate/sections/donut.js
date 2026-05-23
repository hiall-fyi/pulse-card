/**
 * @module pulse-climate/sections/donut
 * @description Donut/ring chart section for Pulse Climate Card.
 */

import { escapeHtml, sanitizeCssValue } from '../../shared/utils.js';
import { CHART_PALETTE } from '../constants.js';
import { buildLegendChips, renderDonut, resolveBreakdownSegments } from '../chart-primitives.js';
import { warn } from '../utils.js';

/**
 * Render a donut/ring chart section.
 * @param {Record<string, *>} sectionConfig - Section config with donut options.
 * @param {Record<string, string>} hubEntities - Discovered hub entity map.
 * @param {Record<string, *>} states - hass.states.
 * @returns {string} HTML string.
 */
export function renderDonutSection(sectionConfig, hubEntities, states) {
  const size = Number(sectionConfig.size) || 120;
  const source = /** @type {string|undefined} */ (sectionConfig.source);

  /** @type {import('../types.js').ResolvedSegment[]} */
  let segments = [];

  if (source === 'api_breakdown') {
    segments = resolveApiBreakdown(hubEntities, states);
  } else if (source === 'homekit_saved') {
    segments = resolveHomekitSaved(hubEntities, states);
  } else if (sectionConfig.segments) {
    segments = resolveExplicitSegments(sectionConfig.segments, states);
  }

  if (segments.length === 0) return '';

  let html = `<div class="pc-section pc-section-donut">`;
  /** @type {Record<string, string>} */
  const titleMap = { api_breakdown: 'API Breakdown', homekit_saved: 'HomeKit Saved' };
  /** @type {Record<string, string>} */
  const centerLabelMap = { api_breakdown: 'Calls', homekit_saved: 'Saved' };
  const title = (source && titleMap[source]) || 'Breakdown';
  const centerLabel = (source && centerLabelMap[source]) || 'Total';
  html += `<div class="pulse-section-label">${escapeHtml(title)}</div>`;

  html += `<div class="pc-donut-container" style="width:${sanitizeCssValue(size)}px;height:${sanitizeCssValue(size)}px">`;
  const { html: donutHtml } = renderDonut(segments, { size, centerLabel });
  html += donutHtml;
  html += `</div>`;

  // Legend
  const legendItems = segments.map((s) => ({
    label: s.label,
    color: s.color,
    value: String(Math.round(s.value)),
  }));
  html += buildLegendChips(legendItems);

  html += '</div>';
  return html;
}

/**
 * Resolve segments from api_call_breakdown entity attributes.
 * @param {Record<string, string>} hubEntities
 * @param {Record<string, *>} states
 * @returns {import('../types.js').ResolvedSegment[]}
 */
function resolveApiBreakdown(hubEntities, states) {
  const entityId = hubEntities.api_breakdown;
  if (!entityId || !states[entityId]) return [];

  const attrs = states[entityId].attributes;
  if (!attrs || typeof attrs !== 'object') {
    warn('api_call_breakdown entity has no attributes');
    return [];
  }

  return resolveBreakdownSegments(attrs, CHART_PALETTE);
}

/**
 * Resolve segments from HomeKit saved entities.
 * @param {Record<string, string>} hubEntities
 * @param {Record<string, *>} states
 * @returns {import('../types.js').ResolvedSegment[]}
 */
function resolveHomekitSaved(hubEntities, states) {
  if (!hubEntities.homekit_connected) return [];

  const connState = states[hubEntities.homekit_connected];
  if (!connState) return [];
  const attrs = connState.attributes || {};

  // Prefer standalone entities, fall back to attributes
  const readsEntity = hubEntities.homekit_reads_saved ? states[hubEntities.homekit_reads_saved] : null;
  const writesEntity = hubEntities.homekit_writes_saved ? states[hubEntities.homekit_writes_saved] : null;
  const readsSaved = readsEntity ? (Number(readsEntity.state) || 0) : (Number(attrs.reads_saved_today) || 0);
  const writesSaved = writesEntity ? (Number(writesEntity.state) || 0) : (Number(attrs.writes_saved_today) || 0);

  /** @type {import('../types.js').ResolvedSegment[]} */
  const segments = [];
  if (readsSaved > 0 || writesSaved > 0) {
    segments.push({ label: 'Reads Saved', value: readsSaved, color: CHART_PALETTE[0] });
    segments.push({ label: 'Writes Saved', value: writesSaved, color: CHART_PALETTE[1] });
  }
  return segments;
}

/**
 * Resolve segments from explicit config.
 * @param {{entity: string, label: string, color: string}[]} configSegments
 * @param {Record<string, *>} states
 * @returns {import('../types.js').ResolvedSegment[]}
 */
function resolveExplicitSegments(configSegments, states) {
  return configSegments.map((s, i) => ({
    label: s.label || s.entity,
    value: Math.max(0, Number(states[s.entity]?.state) || 0),
    color: s.color || CHART_PALETTE[i % CHART_PALETTE.length],
  }));
}
