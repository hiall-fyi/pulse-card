/**
 * @module pulse-climate/sections/api
 * @description Thin shell — renders the section header and delegates the body
 * to api-view. Same module powers system_health_group's API tab.
 *
 * updateApiSection (DOM-differential update for tap-free re-renders) stays
 * here since it operates on already-rendered DOM.
 */

import { escapeHtml } from '../../shared/utils.js';
import { isApiAvailable, renderApiView } from './api-view.js';

/**
 * Render API section HTML as a rich dashboard.
 * @param {Record<string, string>} hubEntities - Discovered hub entity map.
 * @param {Record<string, *>} states - hass.states.
 * @param {Record<string, *>} [sectionConfig] - Section config.
 * @param {import('../types.js').HistoryCache} [historyCache] - History cache.
 * @returns {string} HTML string (empty if not discoverable).
 */
export function renderApiSection(hubEntities, states, sectionConfig, historyCache) {
  if (!isApiAvailable(hubEntities)) return '';

  let html = `<div class="pc-section pc-section-api">`;
  html += `<div class="pulse-section-label">API Usage</div>`;
  html += renderApiView(hubEntities, states, sectionConfig, historyCache);
  html += `</div>`;
  return html;
}

/**
 * Update API section DOM differentially.
 * @param {HTMLElement} sectionEl - The .pc-section-api element.
 * @param {Record<string, string>} hubEntities
 * @param {Record<string, *>} states
 */
export function updateApiSection(sectionEl, hubEntities, states) {
  if (!sectionEl || !hubEntities.api_usage) return;
  // Gauge center text update
  const usage = parseFloat(states[hubEntities.api_usage]?.state) || 0;
  const limit = parseFloat(states[hubEntities.api_limit]?.state) || 100;
  const centerEl = /** @type {HTMLElement|null} */ (sectionEl.querySelector('.pc-gauge-center'));
  if (centerEl) {
    const usageText = escapeHtml(Math.round(usage));
    const limitText = escapeHtml(Math.round(limit));
    // eslint-disable-next-line no-unsanitized/property -- rounded numerics, escaped via escapeHtml
    centerEl.innerHTML = `${usageText}<br><span class="pc-gauge-center-limit">/ ${limitText}</span>`;
  }
}
