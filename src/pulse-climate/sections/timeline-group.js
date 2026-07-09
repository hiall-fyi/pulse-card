/**
 * @module pulse-climate/sections/timeline-group
 * @description Tabbed group hosting the 24h Thermal Heatmap and 24h State
 * Timeline views. User taps a tab to switch view; both views share the
 * .pc-timeline-group-row grid (70px name / 1fr cells / 60px stat) so zones
 * stay vertically aligned across the tab switch.
 *
 * The host owns the section header + tab strip; body rendering delegates
 * to thermal-heatmap-view or state-timeline-view. Tab clicks update
 * section.active_tab via the card-side handler in pulse-climate-card.js
 * which mutates _config and triggers a re-render.
 */

import { escapeHtml } from '../../shared/utils.js';
import { renderThermalHeatmapView } from './thermal-heatmap-view.js';
import { renderStateTimelineView } from './state-timeline-view.js';

const VALID_TABS = new Set(['thermal', 'state']);

/** @type {Record<string, {label: string, subtitle: string}>} */
const TAB_META = {
  thermal: { label: 'Thermal', subtitle: 'Tap a zone for details' },
  state:   { label: 'State',   subtitle: 'Heat / cool demand by zone' },
};

/**
 * @param {{ type: 'timeline_group', active_tab?: string }} sectionConfig
 * @param {{entity: string}[]} zones
 * @param {Record<string, *>} states
 * @param {*} discovery
 * @param {*} historyCache
 * @param {string} [timeZone] - IANA zone from resolveHassTimeZone; undefined → browser-local cell labels.
 * @returns {string}
 */
export function renderTimelineGroupSection(sectionConfig, zones, states, discovery, historyCache, timeZone) {
  if (!zones || zones.length === 0) return '';

  const requestedTab = sectionConfig?.active_tab;
  const activeTab = (typeof requestedTab === 'string' && VALID_TABS.has(requestedTab))
    ? requestedTab
    : 'thermal';

  let html = `<div class="pc-section pc-section-timeline-group" data-active-tab="${escapeHtml(activeTab)}">`;

  html += `<div class="pc-section-header">`;
  html += `<div class="pulse-section-label">24h Timeline</div>`;
  const subtitleText = escapeHtml(TAB_META[activeTab].subtitle);
  html += `<span class="pc-section-subtitle">${subtitleText}</span>`;
  html += `</div>`;

  html += `<div class="pc-timeline-group-tabs" role="tablist">`;
  for (const tabKey of ['thermal', 'state']) {
    const activeClass = tabKey === activeTab ? ' pc-active' : '';
    html += `<div class="pc-timeline-group-tab${activeClass}" `
          + `role="tab" tabindex="0" aria-selected="${tabKey === activeTab}" `
          + `data-tab="${escapeHtml(tabKey)}">${escapeHtml(TAB_META[tabKey].label)}</div>`;
  }
  html += `</div>`;

  html += `<div class="pc-zone-detail" id="timeline-detail"></div>`;

  html += `<div class="pc-timeline-group-body">`;
  html += activeTab === 'thermal'
    ? renderThermalHeatmapView(zones, states, discovery, historyCache, timeZone)
    : renderStateTimelineView(zones, states, discovery, historyCache, timeZone);
  html += `</div>`;

  html += `</div>`;
  return html;
}
