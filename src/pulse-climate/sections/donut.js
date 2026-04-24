/**
 * @module pulse-climate/sections/donut
 * @description Donut/ring chart section for Pulse Climate Card.
 */

import { escapeHtml, sanitizeCssValue } from '../../shared/utils.js';
import { CHART_PALETTE } from '../constants.js';
import { buildDonutArcs, buildLegendChips, resolveBreakdownSegments } from '../chart-primitives.js';
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

  const total = segments.reduce((sum, s) => sum + s.value, 0);
  const arcs = buildDonutArcs(segments, size);

  let html = `<div class="section section-donut">`;
  /** @type {Record<string, string>} */
  const titleMap = { api_breakdown: 'API Breakdown', homekit_saved: 'HomeKit Saved' };
  const title = (source && titleMap[source]) || 'Breakdown';
  html += `<div class="section-label">${escapeHtml(title)}</div>`;

  // SVG donut
  const ariaLabel = segments.map((s) => `${s.label} ${s.value}`).join(', ');
  html += `<div class="donut-container" style="width:${sanitizeCssValue(size)}px;height:${sanitizeCssValue(size)}px">`;
  html += `<svg viewBox="0 0 ${size} ${size}" role="img" aria-label="${escapeHtml(ariaLabel)}">`;

  // Background ring (grey) for empty state or as base
  const oR = size / 2 - 2;
  const iR = oR * 0.6;
  html += `<circle cx="${size / 2}" cy="${size / 2}" r="${((oR + iR) / 2).toFixed(1)}" fill="none" stroke="var(--divider-color, rgba(0,0,0,0.12))" stroke-width="${(oR - iR).toFixed(1)}" />`;

  for (const arc of arcs) {
    html += `<path d="${arc.d}" fill="${sanitizeCssValue(arc.color)}" data-segment="${escapeHtml(arc.label)}"><title>${escapeHtml(arc.label)}: ${Math.round(arc.angle / 360 * total)}</title></path>`;
  }
  html += '</svg>';

  // Center label
  html += `<div class="donut-center">${escapeHtml(Math.round(total))}</div>`;
  html += '</div>';

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
 * Prefers standalone entities (Tado CE beta.9+), falls back to attributes.
 * @param {Record<string, string>} hubEntities
 * @param {Record<string, *>} states
 * @returns {import('../types.js').ResolvedSegment[]}
 */
function resolveHomekitSaved(hubEntities, states) {
  if (!hubEntities.homekit_connected) return [];

  const connState = states[hubEntities.homekit_connected];
  if (!connState) return [];
  const attrs = connState.attributes || {};

  // Prefer standalone entities (Tado CE beta.9+), fall back to attributes
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
