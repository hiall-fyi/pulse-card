/**
 * @module pulse-climate/sections/homekit
 * @description Thin shell — renders the section header (with " · N saved"
 * suffix derived from the same predicate the body uses) and delegates the
 * body to homekit-view. Same module powers system_health_group's HomeKit tab.
 */

import { escapeHtml } from '../../shared/utils.js';
import { isHomekitAvailable, renderHomekitView, computeHomekitSavedLabel } from './homekit-view.js';

/**
 * Render HomeKit section HTML.
 * @param {Record<string, string>} hubEntities - Discovered hub entity map.
 * @param {Record<string, *>} states - hass.states.
 * @param {import('../types.js').HistoryCache} [historyCache] - History cache.
 * @returns {string} HTML string (empty if not discoverable).
 */
export function renderHomekitSection(hubEntities, states, historyCache) {
  if (!isHomekitAvailable(hubEntities)) return '';

  const savedLabel = computeHomekitSavedLabel(hubEntities, states);

  let html = `<div class="pc-section pc-section-homekit">`;
  html += `<div class="pulse-section-label">HomeKit${escapeHtml(savedLabel)}</div>`;
  html += renderHomekitView(hubEntities, states, historyCache);
  html += `</div>`;
  return html;
}
