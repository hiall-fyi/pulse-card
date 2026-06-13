/**
 * @module pulse-climate/sections/bridge
 * @description Thin shell — renders the section header and delegates the body
 * to bridge-view. Same module that powers system_health_group's Bridge tab.
 */

import { isBridgeAvailable, renderBridgeView } from './bridge-view.js';

/**
 * Render Bridge section HTML.
 * @param {Record<string, string>} hubEntities - Discovered hub entity map.
 * @param {Record<string, *>} states - hass.states.
 * @param {import('../types.js').HistoryCache} [historyCache] - History cache.
 * @returns {string} HTML string (empty if not discoverable).
 */
export function renderBridgeSection(hubEntities, states, historyCache) {
  if (!isBridgeAvailable(hubEntities)) return '';

  let html = `<div class="pc-section pc-section-bridge">`;
  html += `<div class="pulse-section-label">Bridge</div>`;
  html += renderBridgeView(hubEntities, states, historyCache);
  html += `</div>`;
  return html;
}
