/**
 * @module pulse-climate/sections/system-health-group
 * @description Tabbed group hosting Bridge / HomeKit / API views with
 * render-time autodiscovery. Renders only the discovered tabs:
 *   - 0 of 3 → returns '' (entire group omitted)
 *   - 1 of 3 → omits the tab strip; renders that view directly with the
 *     view's domain as the section header (e.g. 'Bridge')
 *   - 2-3 of 3 → renders 'System Health' header + tab strip in priority
 *     order (Bridge → HomeKit → API) + active view body
 *
 * active_tab fallback: if user config sets active_tab to a view that isn't
 * discovered at render time, host falls back to the first available view —
 * silent degradation matching existing per-section behaviour.
 */

import { escapeHtml } from '../../shared/utils.js';
import { isBridgeAvailable, renderBridgeView } from './bridge-view.js';
import { isHomekitAvailable, renderHomekitView, computeHomekitSavedLabel } from './homekit-view.js';
import { isApiAvailable, renderApiView } from './api-view.js';

/**
 * @typedef {object} TabDef
 * @property {string} key
 * @property {string} label
 * @property {(hub: Record<string, string>, states: Record<string, *>) => string} soloHeader
 * @property {(hub: Record<string, string>|null|undefined) => boolean} predicate
 * @property {(hub: Record<string, string>, states: Record<string, *>, sectionConfig: *, hc: *) => string} render
 */

/**
 * Tab definitions in priority order. First available wins as default tab
 * AND as the section header when only one view discovered.
 * @type {TabDef[]}
 */
const TAB_DEFS = [
  {
    key: 'bridge',
    label: 'Bridge',
    soloHeader: (/** @type {*} */ _hub, /** @type {*} */ _states) => 'Bridge',
    predicate: isBridgeAvailable,
    render: (/** @type {*} */ hub, /** @type {*} */ states, /** @type {*} */ _sectionConfig, /** @type {*} */ hc) => renderBridgeView(hub, states, hc),
  },
  {
    key: 'homekit',
    label: 'HomeKit',
    soloHeader: (/** @type {*} */ hub, /** @type {*} */ states) => `HomeKit${computeHomekitSavedLabel(hub, states)}`,
    predicate: isHomekitAvailable,
    render: (/** @type {*} */ hub, /** @type {*} */ states, /** @type {*} */ _sectionConfig, /** @type {*} */ hc) => renderHomekitView(hub, states, hc),
  },
  {
    key: 'api',
    label: 'API',
    soloHeader: (/** @type {*} */ _hub, /** @type {*} */ _states) => 'API Usage',
    predicate: isApiAvailable,
    render: (/** @type {*} */ hub, /** @type {*} */ states, /** @type {*} */ sectionConfig, /** @type {*} */ hc) => renderApiView(hub, states, sectionConfig, hc),
  },
];

/**
 * @param {{type: 'system_health_group', active_tab?: string}} sectionConfig
 * @param {Record<string, string>} hubEntities
 * @param {Record<string, *>} states
 * @param {*} historyCache
 * @returns {string}
 */
export function renderSystemHealthGroupSection(sectionConfig, hubEntities, states, historyCache) {
  const available = TAB_DEFS.filter((t) => t.predicate(hubEntities));

  /* Rule: 0 available → omit entire group. */
  if (available.length === 0) return '';

  /* Rule: 1 available → render single view directly (no tab strip). */
  if (available.length === 1) {
    const view = available[0];
    let html = `<div class="pc-section pc-section-system-health-group">`;
    html += `<div class="pulse-section-label">${escapeHtml(view.soloHeader(hubEntities, states))}</div>`;
    html += `<div class="pc-system-health-group-body">`;
    html += view.render(hubEntities, states, sectionConfig, historyCache);
    html += `</div>`;
    html += `</div>`;
    return html;
  }

  /* Rule: 2-3 available → tab strip + active view body. */
  const requestedTab = sectionConfig?.active_tab;
  const isRequestedAvailable = available.some((v) => v.key === requestedTab);
  const activeKey = isRequestedAvailable ? requestedTab : available[0].key;
  const activeView = /** @type {TabDef} */ (available.find((v) => v.key === activeKey) || available[0]);

  let html = `<div class="pc-section pc-section-system-health-group" data-active-tab="${escapeHtml(activeKey)}">`;
  html += `<div class="pc-section-header">`;
  html += `<div class="pulse-section-label">System Health</div>`;
  html += `</div>`;

  html += `<div class="pc-system-health-group-tabs" role="tablist">`;
  for (const tab of available) {
    const activeClass = tab.key === activeKey ? ' pc-active' : '';
    html += `<div class="pc-system-health-group-tab${activeClass}" `
          + `role="tab" tabindex="0" aria-selected="${tab.key === activeKey}" `
          + `data-tab="${escapeHtml(tab.key)}">${escapeHtml(tab.label)}</div>`;
  }
  html += `</div>`;

  html += `<div class="pc-system-health-group-body">`;
  html += activeView.render(hubEntities, states, sectionConfig, historyCache);
  html += `</div>`;

  html += `</div>`;
  return html;
}
