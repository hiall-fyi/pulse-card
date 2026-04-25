/**
 * @module pulse-climate/pulse-climate-card
 * @description Main Pulse Climate Card custom element.
 */

import { CARD_NAME, EDITOR_NAME, VERSION } from './constants.js';
import { STYLES } from './styles.js';
import { normalizeClimateConfig, warn, resolveZoneDisplay } from './utils.js';
import { discoverTadoEntities, extractZoneName } from './zone-resolver.js';
import { createHistoryCache, isCacheValid, updateCache, getSharedCache, updateSharedCache } from './history.js';
import { renderZonesSection, updateZonesSection } from './sections/zones.js';
import { renderApiSection } from './sections/api.js';
import { renderBridgeSection } from './sections/bridge.js';
import { renderHomekitSection } from './sections/homekit.js';
import { renderWeatherSection } from './sections/weather.js';
import { renderEnvironmentSection } from './sections/environment.js';
import { renderThermalSection } from './sections/thermal.js';
import { renderScheduleSection } from './sections/schedule.js';
import { renderGraphSection } from './sections/graph.js';
import { renderDonutSection } from './sections/donut.js';
import { renderThermalStripSection } from './sections/thermal-strip.js';
import { renderComfortStripSection } from './sections/comfort-strip.js';
import { renderEnergyFlowSection, updateEnergyFlowSection } from './sections/energy-flow.js';
import { renderRadialSection } from './sections/radial.js';
import { escapeHtml, sanitizeCssValue, isReducedMotion } from '../shared/utils.js';
import { buildFilledSparkline, temperatureToColor } from './chart-primitives.js';
import { createStripTooltip, createFixedTooltip, pointerToSlotIndex, bindDragSelect, bindCrosshair } from './sections/slot-engine.js';
import { executeAction as sharedExecuteAction, fireEvent, DOUBLE_TAP_WINDOW, HOLD_THRESHOLD } from '../shared/action-handler.js';
import { attachRipple } from '../shared/ripple.js';
import { fetchSparklineData } from '../utils.js';

/** Module-level flag — log discovery results once per page load across all card instances. */
let _discoveryLogged = false;

// ── Shared CSS StyleSheet ───────────────────────────────────────────
// Created once at module evaluation time and shared across all card instances
// via adoptedStyleSheets. Falls back to <style> injection for Safari < 16.4.

/** @type {boolean} */
const _supportsAdoptedStyleSheets = typeof CSSStyleSheet !== 'undefined'
  && typeof CSSStyleSheet.prototype.replaceSync === 'function'
  && typeof document !== 'undefined'
  && 'adoptedStyleSheets' in (document.createElement('div').attachShadow({ mode: 'open' }));

/** @type {CSSStyleSheet|null} */
const _sharedSheet = _supportsAdoptedStyleSheets ? (() => {
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(STYLES);
  return sheet;
})() : null;


// ── History Section Classification ──────────────────────────────────
// Sections that depend on history cache data — only these are re-rendered
// during the 5-minute history refresh cycle.

/** @type {Set<string>} Section types that depend on history cache data. */
const HISTORY_SECTIONS = new Set([
  'zones', 'api', 'graph', 'bridge', 'thermal_strip',
  'comfort_strip', 'homekit', 'weather', 'radial', 'donut',
]);

/** @type {Record<string, string>} Section type → CSS selector mapping. */
const SECTION_SELECTORS = {
  zones: '.section-zones',
  api: '.section-api',
  graph: '.section-graph',
  bridge: '.section-bridge',
  thermal_strip: '.section-thermal-strip',
  comfort_strip: '.section-comfort-strip',
  homekit: '.section-homekit',
  weather: '.section-weather',
  radial: '.section-radial',
  donut: '.section-donut',
  environment: '.section-environment',
  thermal: '.section-thermal',
  schedule: '.section-schedule',
  energy_flow: '.section-energy-flow',
};

class PulseClimateCard extends HTMLElement {
  /** @type {import('./types.js').PulseClimateConfig|null} */
  _config = null;
  /** @type {import('./types.js').Hass|null} */
  _hass = null;
  /** @type {Record<string, *>} */
  _prevStates = {};
  /** @type {Record<string, HTMLElement|null>} */
  _elements = {};
  /** @type {import('./types.js').TadoDiscovery|null} */
  _discovery = null;
  /** @type {import('./types.js').HistoryCache} */
  _historyCache;
  /** @type {ShadowRoot} */
  _shadow;
  /** @type {ReturnType<typeof setInterval>|null} */
  _countdownTimer = null;
  /** @type {boolean} Guard against concurrent history fetches. */
  _historyFetchInProgress = false;
  /** @type {number|null} RAF handle for throttled hass updates. */
  _rafId = null;
  /** @type {number} Timestamp of last differential update. */
  _lastUpdateTime = 0;
  /** @type {{selector: string, watchIds: string[], render: () => string}[]|null} Cached rerender targets. */
  _rerenderTargets = null;
  /** @type {AbortController|null} */
  _chipAbort = null;
  /** @type {AbortController|null} */
  _sectionChipAbort = null;
  /** @type {AbortController|null} */
  _radialAbort = null;
  /** @type {AbortController|null} */
  _timelineAbort = null;
  /** @type {AbortController|null} */
  _heatmapAbort = null;
  /** @type {AbortController|null} */
  _energyFlowAbort = null;
  /** @type {AbortController|null} */
  _sparklineAbort = null;
  /** @type {Map<string, {linePath: string, areaPath: string}>} Pre-computed sparkline SVG paths. */
  _sparklinePathCache = new Map();

  constructor() {
    super();
    this._shadow = this.attachShadow({ mode: 'open' });
    this._historyCache = createHistoryCache();
  }

  /**
   * Validate and apply card configuration.
   * @param {Record<string, *>} config
   */
  setConfig(config) {
    this._config = normalizeClimateConfig(config);
    this._discovery = null;
    this._prevStates = {};
    this._elements = {};
    if (this._hass) {
      this._runDiscovery();
      this._fullRender();
    }
    this._buildRerenderTargets();
  }

  /**
   * HA calls this setter on every state change.
   * Throttled to max once per ~200ms to avoid excessive DOM work
   * when many entities update in quick succession.
   * @param {import('./types.js').Hass} hass
   */
  set hass(hass) {
    this._hass = hass;
    if (!this._config) return;

    // Lazy discovery on first hass (needs states to scan)
    if (!this._discovery) {
      this._runDiscovery();
      this._fullRender(); // _fullRender caches _prevStates internally
      this._refreshHistoryIfNeeded();
      return;
    }

    // Throttle differential updates — coalesce rapid state changes into
    // a single RAF-aligned update pass. Prevents 15+ card instances from
    // each doing full DOM diffing on every individual entity state change.
    if (this._rafId) return;
    this._rafId = requestAnimationFrame(() => {
      this._rafId = null;
      if (!this._hass || !this._config || !this._discovery) return;
      const now = Date.now();
      if (now - this._lastUpdateTime < 200) return;
      this._lastUpdateTime = now;
      // Zone change guard — skip _updateZones() if no zone entity changed (O(1) per zone)
      const states = this._hass.states;
      const zonesChanged = (this._config._zones || []).some((z) =>
        states[z.entity] !== this._prevStates[z.entity]
      );
      if (zonesChanged) this._updateZones();
      this._updateSections();
      this._refreshHistoryIfNeeded();
      this._cacheWatchedStates();
    });
  }

  /** Run Tado CE entity discovery. */
  _runDiscovery() {
    if (!this._hass || !this._config) return;
    const zones = this._config._zones || [];
    const zoneNames = zones.map((/** @type {import('./types.js').ZoneConfig} */ z) => extractZoneName(z.entity));
    this._discovery = discoverTadoEntities(this._hass.states, zoneNames, this._hass.entities);

    // Log discovery results once per page load (module-level flag survives instance recreation)
    if (!_discoveryLogged && this._discovery.isTadoCE) {
      _discoveryLogged = true;
      const found = Object.entries(this._discovery.hubEntities).map(([k, v]) => `${k}=${v}`);
      console.info('Pulse Climate: hub discovery — found:', found.join(', '));
      if (this._discovery.missingHubKeys.length > 0) {
        console.warn('Pulse Climate: hub discovery — missing:', this._discovery.missingHubKeys.join(', '));
      }
    }
    this._buildRerenderTargets();
  }



  /**
   * Pre-compute sparkline SVG paths for all zone temperature sensors.
   * Called after history cache update so detail panel sparklines render instantly on tap.
   */
  _rebuildSparklinePathCache() {
    this._sparklinePathCache.clear();
    const data = this._historyCache?.data;
    if (!data) return;
    for (const [entityId, points] of Object.entries(data)) {
      if (!points || points.length < 2) continue;
      const result = buildFilledSparkline(points, 340, 36, 48);
      if (result) {
        this._sparklinePathCache.set(entityId, result);
      }
    }
  }

  /**
   * Build and cache the rerenderTargets array.
   * Called from setConfig() and _runDiscovery() so the array is ready
   * before _updateSections() runs on the next RAF cycle.
   */
  _buildRerenderTargets() {
    if (!this._config || !this._discovery) return;
    const discovery = this._discovery;
    const hubEntities = discovery.hubEntities;
    const zones = this._config._zones || [];

    this._rerenderTargets = [
      {
        selector: '.section-zones',
        watchIds: [hubEntities.home_state].filter(Boolean),
        render: () => {
          const config = /** @type {import('./types.js').PulseClimateConfig} */ (this._config);
          const states = this._hass?.states || {};
          return renderZonesSection(zones, config, states, discovery, this._historyCache);
        },
      },
      {
        selector: '.section-api',
        watchIds: [hubEntities.api_usage, hubEntities.api_limit, hubEntities.api_status, hubEntities.next_sync, hubEntities.token_status].filter(Boolean),
        render: () => {
          const states = this._hass?.states || {};
          const sections = this._config?.sections || [{ type: 'zones' }];
          const apiSection = sections.find((/** @type {*} */ s) => (typeof s === 'string' ? s : s.type) === 'api') || {};
          return renderApiSection(hubEntities, states, /** @type {*} */ (apiSection), this._historyCache);
        },
      },
      {
        selector: '.section-homekit',
        watchIds: [hubEntities.homekit_connected, hubEntities.homekit_reads_saved, hubEntities.homekit_writes_saved].filter(Boolean),
        render: () => {
          const states = this._hass?.states || {};
          return renderHomekitSection(hubEntities, states, this._historyCache);
        },
      },
      {
        selector: '.section-bridge',
        watchIds: [hubEntities.bridge_connected, hubEntities.boiler_flow_temp, hubEntities.wc_status, hubEntities.wc_target_flow].filter(Boolean),
        render: () => {
          const states = this._hass?.states || {};
          return renderBridgeSection(hubEntities, states, this._historyCache);
        },
      },
      {
        selector: '.section-weather',
        watchIds: [hubEntities.outside_temp, hubEntities.weather, hubEntities.solar_intensity].filter(Boolean),
        render: () => {
          const states = this._hass?.states || {};
          return renderWeatherSection(hubEntities, states, this._historyCache);
        },
      },
      {
        selector: '.section-environment',
        watchIds: zones.flatMap((z) => {
          const zn = extractZoneName(z.entity);
          const ze = discovery.zoneEntities?.[zn] || {};
          return [ze.mold_risk, ze.condensation, ze.comfort_level, ze.surface_temp, ze.dew_point].filter(Boolean);
        }),
        render: () => {
          const states = this._hass?.states || {};
          return renderEnvironmentSection(zones, states, discovery);
        },
      },
      {
        selector: '.section-thermal',
        watchIds: zones.flatMap((z) => {
          const zn = extractZoneName(z.entity);
          const ze = discovery.zoneEntities?.[zn] || {};
          return [ze.heating_rate, ze.thermal_inertia, ze.preheat_time, ze.confidence].filter(Boolean);
        }),
        render: () => {
          const states = this._hass?.states || {};
          return renderThermalSection(zones, states, discovery);
        },
      },
      {
        selector: '.section-schedule',
        watchIds: zones.flatMap((z) => {
          const zn = extractZoneName(z.entity);
          const ze = discovery.zoneEntities?.[zn] || {};
          return [ze.next_schedule, ze.next_sched_temp, ze.schedule_deviation, ze.preheat_advisor, ze.comfort_target].filter(Boolean);
        }),
        render: () => {
          const states = this._hass?.states || {};
          return renderScheduleSection(zones, states, discovery);
        },
      },
      {
        selector: '.section-radial',
        watchIds: zones.map((z) => z.entity),
        render: () => {
          const states = this._hass?.states || {};
          const sections = this._config?.sections || [{ type: 'zones' }];
          const radialSection = sections.find((/** @type {*} */ s) => (typeof s === 'string' ? s : s.type) === 'radial') || {};
          return renderRadialSection(zones, /** @type {*} */ (radialSection), states, discovery, this._historyCache);
        },
      },
      {
        selector: '.section-donut',
        watchIds: (() => {
          const sections = this._config?.sections || [];
          const donutSection = sections.find((/** @type {*} */ s) => (typeof s === 'string' ? s : s.type) === 'donut');
          const source = /** @type {*} */ (donutSection)?.source;
          if (source === 'api_breakdown' && hubEntities.api_breakdown) return [hubEntities.api_breakdown];
          if (source === 'homekit_saved') return [hubEntities.homekit_reads_saved, hubEntities.homekit_writes_saved].filter(Boolean);
          return [];
        })(),
        render: () => {
          const states = this._hass?.states || {};
          const sections = this._config?.sections || [];
          const donutSection = sections.find((/** @type {*} */ s) => (typeof s === 'string' ? s : s.type) === 'donut') || {};
          return renderDonutSection(/** @type {*} */ (donutSection), hubEntities, states);
        },
      },
      {
        selector: '.section-graph',
        watchIds: [],
        render: () => {
          const states = this._hass?.states || {};
          const sections = this._config?.sections || [{ type: 'zones' }];
          const graphSection = sections.find((/** @type {*} */ s) => (typeof s === 'string' ? s : s.type) === 'graph') || {};
          return renderGraphSection(/** @type {*} */ (graphSection), zones, this._historyCache, states, discovery);
        },
      },
    ];
  }

  /** Full render — build ha-card with all sections. */
  _fullRender() {
    if (!this._config || !this._hass || !this._discovery) return;

    const config = this._config;
    const states = this._hass.states;
    const discovery = this._discovery;
    const zones = config._zones || [];
    const isCompact = config.layout === 'compact';
    const isEntityRow = config.entity_row === true;

    let html = '';

    // Style — use shared CSSStyleSheet when supported, fallback to <style> injection
    if (_sharedSheet) {
      this._shadow.adoptedStyleSheets = [_sharedSheet];
    } else {
      html += `<style>${STYLES}</style>`;
    }

    // Card wrapper
    if (!isEntityRow) {
      html += `<ha-card${isCompact ? ' class="compact"' : ''}>`;
    }

    // Title
    if (config.title) {
      html += `<div class="pulse-title">${escapeHtml(config.title)}</div>`;
    }

    // Render sections in config order
    const sections = config.sections || [{ type: 'zones' }];
    for (const section of sections) {
      html += this._renderSection(section, zones, states, discovery);
    }

    if (!isEntityRow) {
      html += `</ha-card>`;
    }

    this._shadow.innerHTML = html;

    // Cache DOM refs
    this._elements.zonesSection = this._shadow.querySelector('.section-zones');
    this._elements.apiSection = this._shadow.querySelector('.section-api');
    this._cacheWatchedStates();

    // Bind action listeners on zone rows
    this._bindZoneActions();
    // Bind chip tap-to-entity actions
    this._bindChipActions();
    // Bind interaction listeners on visual identity sections
    this._bindSectionInteractions();
    // Bind section chip tap-to-entity actions
    this._bindSectionChipActions();
    // Start countdown timer for Next Sync chip
    this._startCountdownTimer();
  }

  /** Bind tap/hold/double-tap actions on zone rows. */
  _bindZoneActions() {
    if (!this._config || !this._hass) return;
    const rows = this._shadow.querySelectorAll('.zone-row');
    const zones = this._config._zones || [];

    for (let i = 0; i < rows.length && i < zones.length; i++) {
      const row = /** @type {HTMLElement} */ (rows[i]);
      const zoneConfig = zones[i];
      const entityId = zoneConfig.entity;

      // Clean up previous listeners
      const prevCleanup = /** @type {*} */ (row).__pulseCleanup;
      if (typeof prevCleanup === 'function') prevCleanup();

      const controller = new AbortController();
      const { signal } = controller;
      let clickCount = 0;
      /** @type {ReturnType<typeof setTimeout>|null} */
      let clickTimer = null;
      /** @type {ReturnType<typeof setTimeout>|null} */
      let holdTimer = null;
      let held = false;

      /** @type {*} */ (row).__pulseCleanup = () => {
        controller.abort();
        if (clickTimer) clearTimeout(clickTimer);
        if (holdTimer) clearTimeout(holdTimer);
        delete /** @type {*} */ (row).__pulseCleanup;
      };

      // Keyboard accessibility
      row.addEventListener('keydown', (ev) => {
        const kev = /** @type {KeyboardEvent} */ (ev);
        if (kev.key === 'Enter' || kev.key === ' ') {
          kev.preventDefault();
          this._fireAction(entityId, zoneConfig, 'tap_action');
        }
      }, { signal });

      // Tap / double-tap via click
      row.addEventListener('click', (ev) => {
        ev.preventDefault();
        if (held) { held = false; return; }
        clickCount++;
        if (clickCount === 1) {
          clickTimer = setTimeout(() => {
            clickCount = 0;
            this._fireAction(entityId, zoneConfig, 'tap_action');
          }, DOUBLE_TAP_WINDOW);
        } else if (clickCount === 2) {
          if (clickTimer) clearTimeout(clickTimer);
          clickCount = 0;
          this._fireAction(entityId, zoneConfig, 'double_tap_action');
        }
      }, { signal });

      // Hold via pointerdown
      row.addEventListener('pointerdown', () => {
        held = false;
        holdTimer = setTimeout(() => {
          held = true;
          this._fireAction(entityId, zoneConfig, 'hold_action');
        }, HOLD_THRESHOLD);
      }, { signal });

      const cancelHold = () => { if (holdTimer) clearTimeout(holdTimer); };
      row.addEventListener('pointerup', cancelHold, { signal });
      row.addEventListener('pointercancel', cancelHold, { signal });
      row.addEventListener('contextmenu', (ev) => ev.preventDefault(), { signal });
      attachRipple(row);
    }
  }

  /** Bind click interactions on visual identity sections (radial, timeline, heatmap, energy flow). */
  _bindSectionInteractions() {
    this._bindRadialInteractions();
    this._bindTimelineInteractions();
    this._bindHeatmapInteractions();
    this._bindEnergyFlowInteractions();
    this._bindSparklineCrosshairs();
  }

  /**
   * Bind tap and hold actions on zone chips.
   * Chip tap opens the chip's source entity more-info (or custom action from chip_actions config).
   * Events stop propagation to prevent triggering the parent zone row's action.
   */
  _bindChipActions() {
    if (!this._config || !this._hass) return;
    if (this._chipAbort) this._chipAbort.abort();
    this._chipAbort = new AbortController();
    const { signal: chipSignal } = this._chipAbort;
    const zones = this._config._zones || [];
    const rows = this._shadow.querySelectorAll('.zone-row');

    for (let i = 0; i < rows.length && i < zones.length; i++) {
      const zoneConfig = zones[i];
      const zoneEntityId = zoneConfig.entity;
      const chips = rows[i].querySelectorAll('.chip');

      for (const chip of chips) {
        const chipEl = /** @type {HTMLElement} */ (chip);
        const chipType = chipEl.dataset.chipType || '';
        const chipEntityId = chipEl.dataset.entity || zoneEntityId;

        // Resolve tap action: per-zone chip_actions → card-level chip_actions → default more-info
        const zoneChipActions = /** @type {Record<string, *>} */ (zoneConfig).chip_actions;
        const cardChipActions = /** @type {Record<string, *>} */ (this._config).chip_actions;
        const chipActionCfg = zoneChipActions?.[chipType] || cardChipActions?.[chipType] || {};
        const tapAction = chipActionCfg.tap_action || { action: 'more-info', entity: chipEntityId };
        const holdAction = chipActionCfg.hold_action || { action: 'none' };

        chipEl.style.cursor = 'pointer';
        attachRipple(chipEl);

        // Tap
        chipEl.addEventListener('click', (ev) => {
          ev.stopPropagation();
          if (!this._hass) return;
          sharedExecuteAction(this, this._hass, tapAction, chipEntityId, warn);
        }, { signal: chipSignal });

        // Hold
        /** @type {ReturnType<typeof setTimeout>|null} */
        let holdTimer = null;
        chipEl.addEventListener('pointerdown', (ev) => {
          ev.stopPropagation();
          holdTimer = setTimeout(() => {
            if (!this._hass || holdAction.action === 'none') return;
            sharedExecuteAction(this, this._hass, holdAction, chipEntityId, warn);
          }, HOLD_THRESHOLD);
        }, { signal: chipSignal });
        chipEl.addEventListener('pointerup', (ev) => { ev.stopPropagation(); if (holdTimer) clearTimeout(holdTimer); }, { signal: chipSignal });
        chipEl.addEventListener('pointercancel', () => { if (holdTimer) clearTimeout(holdTimer); }, { signal: chipSignal });
        chipEl.addEventListener('contextmenu', (ev) => ev.preventDefault(), { signal: chipSignal });
      }
    }
  }

  /**
   * Bind tap action on system section chips (environment, thermal, schedule, api, bridge, homekit, weather).
   * All section chips with data-entity open more-info for their source entity.
   */
  _bindSectionChipActions() {
    if (this._sectionChipAbort) this._sectionChipAbort.abort();
    this._sectionChipAbort = new AbortController();
    const { signal: sectionChipSignal } = this._sectionChipAbort;
    const chips = this._shadow.querySelectorAll('.section .chip[data-entity]');
    for (const chip of chips) {
      const chipEl = /** @type {HTMLElement} */ (chip);
      // Skip zone chips — they're handled by _bindChipActions
      if (chipEl.closest('.zone-row')) continue;

      chipEl.style.cursor = 'pointer';
      attachRipple(chipEl);
      chipEl.addEventListener('click', (ev) => {
        ev.stopPropagation();
        const entityId = chipEl.dataset.entity;
        if (entityId) {
          fireEvent(this, 'hass-more-info', { entityId });
        }
      }, { signal: sectionChipSignal });
    }
  }

  /** Start a 1-second timer to update the Next Sync countdown chip. */
  _startCountdownTimer() {
    if (this._countdownTimer) clearInterval(this._countdownTimer);
    const nextChip = this._shadow.querySelector('.chip-next-sync');
    if (!nextChip) return;
    const targetTime = Number(nextChip.getAttribute('data-target'));
    if (!targetTime || !isFinite(targetTime)) return;

    const update = () => {
      const diffMs = targetTime - Date.now();
      if (diffMs <= 0) {
        nextChip.textContent = 'Next: now';
        if (this._countdownTimer) { clearInterval(this._countdownTimer); this._countdownTimer = null; }
        return;
      }
      const mins = Math.floor(diffMs / 60000);
      const secs = Math.floor((diffMs % 60000) / 1000);
      nextChip.textContent = mins > 0 ? `Next: ${mins}m ${secs}s` : `Next: ${secs}s`;
    };
    update();
    this._countdownTimer = setInterval(update, 1000);
  }

  /** Bind radial arc + legend click → select zone, update center, dim others. */
  _bindRadialInteractions() {
    if (this._radialAbort) this._radialAbort.abort();
    this._radialAbort = new AbortController();
    const { signal: radialSignal } = this._radialAbort;
    const arcs = this._shadow.querySelectorAll('.arc-group');
    const legendItems = this._shadow.querySelectorAll('.radial-legend .legend-item');
    const centerEl = this._shadow.querySelector('#radial-center');
    const detailEl = this._shadow.querySelector('#radial-detail');
    const svgEl = this._shadow.querySelector('.section-radial svg');
    if (arcs.length === 0 || !centerEl) return;

    // Get SVG center for proper scale transform origin
    const svgSize = svgEl ? Number(svgEl.getAttribute('width')) || 280 : 280;
    const svgCenter = svgSize / 2;

    const zones = this._config?._zones || [];
    /** @type {number|null} */
    let selectedIdx = null;

    const outsideTempEntityConfig = this._shadow.querySelector('.section-radial')?.getAttribute('data-outdoor-temp-entity');
    const radialAttribute = this._shadow.querySelector('.section-radial')?.getAttribute('data-attribute') || 'temperature';
    const outsideHumEntityConfig = this._shadow.querySelector('.section-radial')?.getAttribute('data-outdoor-humidity-entity');

    /** Compute default center text from current state. */
    const getDefaults = () => {
      const states = this._hass?.states || {};
      const discovery = this._discovery;
      const outsideTempEntity = outsideTempEntityConfig || discovery?.hubEntities?.outside_temp;
      let center = '--';
      let centerSub = '';
      if (radialAttribute !== 'humidity' && outsideTempEntity && states[outsideTempEntity]) {
        const s = states[outsideTempEntity];
        if (s.state !== 'unavailable' && s.state !== 'unknown') {
          const val = s.attributes?.temperature !== undefined ? s.attributes.temperature : s.state;
          center = `${val}${s.attributes?.unit_of_measurement || '°C'}`;
        }
      }
      if (outsideHumEntityConfig && states[outsideHumEntityConfig]) {
        const s = states[outsideHumEntityConfig];
        if (s.state !== 'unavailable' && s.state !== 'unknown') {
          const val = s.attributes?.humidity !== undefined ? s.attributes.humidity : s.state;
          if (radialAttribute === 'humidity') {
            center = `${val}%`;
          } else {
            centerSub = `${val}%`;
          }
        }
      }
      return { center, centerSub };
    };

    const selectZone = (/** @type {number} */ idx) => {
      // Late-binding: read current state at event time
      const states = this._hass?.states || {};
      const discovery = this._discovery;
      if (selectedIdx === idx) { deselectZone(); return; }
      selectedIdx = idx;
      const zoneConfig = zones[idx];
      if (!zoneConfig) return;
      const entityId = zoneConfig.entity;
      const zoneName = extractZoneName(entityId);
      const zoneEntities = discovery?.zoneEntities?.[zoneName] || {};
      const zd = resolveZoneDisplay(entityId, states, zoneConfig);
      const { name, temp, target, humidity } = zd;
      const action = zd.hvacAction;

      // Resolve heating power from discovered sensor entity or climate attribute
      let power = 0;
      if (zoneEntities.heating_power) {
        const hp = states[zoneEntities.heating_power];
        if (hp && hp.state !== 'unavailable') power = parseFloat(hp.state) || 0;
      } else if (states[entityId]?.attributes?.heating_power !== undefined) {
        power = parseFloat(states[entityId].attributes.heating_power) || 0;
      }
      const isActive = power > 0 || action === 'heating' || action === 'cooling';
      const actionLabel = isActive
        ? `${action === 'cooling' ? 'Cooling' : 'Heating'} ${Math.round(power)}%`
        : 'Idle';

      // Update center
      const valueEl = centerEl.querySelector('.center-value');
      const labelEl = centerEl.querySelector('.center-label');
      const subEl = centerEl.querySelector('.center-sub');
      if (valueEl) valueEl.textContent = temp !== undefined ? `${temp}${zd.unit}` : '--';
      if (labelEl) labelEl.textContent = name;
      const humText = humidity !== undefined ? ` · ${humidity}%` : '';
      if (subEl) subEl.textContent = `${actionLabel}${humText}`;

      // Dim/select arcs — scale from SVG center for consistent outward push
      arcs.forEach((/** @type {Element} */ a, /** @type {number} */ i) => {
        a.classList.toggle('dimmed', i !== idx);
        a.classList.toggle('selected', i === idx);
        if (i === idx) {
          a.setAttribute('transform', `translate(${svgCenter}, ${svgCenter}) scale(1.06) translate(${-svgCenter}, ${-svgCenter})`);
        } else {
          a.removeAttribute('transform');
        }
      });
      legendItems.forEach((/** @type {Element} */ l, /** @type {number} */ i) => {
        l.classList.toggle('selected', i === idx);
      });

      // Detail panel
      if (detailEl) {
        detailEl.innerHTML = `<div class="detail-stats">
          <div class="stat"><div class="stat-value">${target !== undefined ? escapeHtml(target) + escapeHtml(zd.unit) : '--'}</div><div class="stat-label">Target</div></div>
          <div class="stat"><div class="stat-value">${humidity !== undefined ? escapeHtml(humidity) + '%' : '--'}</div><div class="stat-label">Humidity</div></div>
          <div class="stat"><div class="stat-value">${escapeHtml(action)}</div><div class="stat-label">Action</div></div>
        </div>`;
        detailEl.classList.add('active');
      }
    };

    const deselectZone = () => {
      selectedIdx = null;
      const { center: defaultCenter, centerSub: defaultCenterSub } = getDefaults();
      const valueEl = centerEl.querySelector('.center-value');
      const labelEl = centerEl.querySelector('.center-label');
      const subEl = centerEl.querySelector('.center-sub');
      if (valueEl) valueEl.textContent = defaultCenter;
      if (labelEl) labelEl.textContent = 'Outdoor';
      if (subEl) subEl.textContent = defaultCenterSub;
      arcs.forEach((/** @type {Element} */ a) => { a.classList.remove('dimmed', 'selected'); a.removeAttribute('transform'); });
      legendItems.forEach((/** @type {Element} */ l) => { l.classList.remove('selected'); });
      if (detailEl) { detailEl.classList.remove('active'); detailEl.innerHTML = ''; }
    };

    arcs.forEach((/** @type {Element} */ arc, /** @type {number} */ i) => {
      arc.addEventListener('click', () => selectZone(i), { signal: radialSignal });
    });
    legendItems.forEach((/** @type {Element} */ item, /** @type {number} */ i) => {
      attachRipple(/** @type {HTMLElement} */ (item));
      item.addEventListener('click', () => selectZone(i), { signal: radialSignal });
    });

    // Per-zone shimmer — zones light up sequentially like piano keys
    // Direction and speed vary randomly between sweeps
    if (arcs.length > 1 && !isReducedMotion()) {
      let shimmerRunning = true;
      let currentIdx = 0;
      let direction = 1;

      const shimmerCycle = () => {
        if (!shimmerRunning || selectedIdx !== null) {
          // Paused while zone selected — check again later
          setTimeout(shimmerCycle, 500);
          return;
        }

        const arc = /** @type {HTMLElement} */ (arcs[currentIdx]);
        if (!arc) { setTimeout(shimmerCycle, 300); return; }

        // Brighten this zone
        arc.style.filter = 'brightness(1.4)';
        arc.style.transition = 'filter 0.3s ease-in';

        // Fade back after a short hold
        setTimeout(() => {
          arc.style.filter = '';
          arc.style.transition = 'filter 0.5s ease-out';
        }, 250);

        // Move to next zone
        currentIdx += direction;

        // At the end of a sweep, pause, then pick new direction and speed
        if (currentIdx >= arcs.length || currentIdx < 0) {
          currentIdx = direction > 0 ? 0 : arcs.length - 1;
          // Random pause between sweeps (1-3s)
          const pause = 1000 + Math.random() * 2000;
          // 40% chance to reverse direction
          if (Math.random() < 0.4) direction *= -1;
          setTimeout(shimmerCycle, pause);
        } else {
          // Variable delay between zones (80-250ms) — faster = more energetic
          const delay = 80 + Math.random() * 170;
          setTimeout(shimmerCycle, delay);
        }
      };

      // Start after a short delay
      setTimeout(shimmerCycle, 1500);

      // Store cleanup
      const firstArc = arcs[0];
      if (firstArc) {
        /** @type {*} */ (firstArc).__shimmerStop = () => { shimmerRunning = false; };
      }
    }
  }

  /** Bind thermal strip row click → select zone, show detail panel. */
  _bindTimelineInteractions() {
    if (this._timelineAbort) this._timelineAbort.abort();
    this._timelineAbort = new AbortController();
    const rows = this._shadow.querySelectorAll('.section-thermal-strip .timeline-row');
    const detailEl = this._shadow.querySelector('.section-thermal-strip');
    if (rows.length === 0 || !detailEl) return;

    const zones = this._config?._zones || [];
    const subtitleEl = detailEl.querySelector('.section-subtitle');
    const defaultSubtitle = 'Tap a zone for details';
    const tempUnit = this._hass?.states?.[zones[0]?.entity]?.attributes?.unit_of_measurement || '°C';
    /** @type {number|null} */
    let selectedIdx = null;
    /** @type {number|null} */
    let comparisonIdx = null;

    /**
     * Remove comparison overlay from the detail sparkline.
     * @param {Element} detail
     */
    const removeComparison = (detail) => {
      comparisonIdx = null;
      const overlay = detail.querySelector('.comparison-path');
      if (overlay) overlay.remove();
      const legend = detail.querySelector('.comparison-legend');
      if (legend) legend.remove();
    };

    rows.forEach((/** @type {Element} */ row, /** @type {number} */ i) => {
      attachRipple(/** @type {HTMLElement} */ (row));
      row.addEventListener('click', () => {
        // Late-binding: read current state at event time, not bind time
        const states = this._hass?.states || {};
        const discovery = this._discovery;
        const historyCache = this._historyCache;

        // Clear any drag-select highlights
        detailEl.querySelectorAll('.strip-drag-highlight').forEach((/** @type {Element} */ h) => { /** @type {HTMLElement} */ (h).style.display = 'none'; });

        // If detail panel is open and tapping a different zone → comparison overlay
        if (selectedIdx !== null && selectedIdx !== i) {
          const detail = detailEl.querySelector('.zone-detail');
          const sparkSvg = detail?.querySelector('.detail-sparkline svg');
          if (detail && sparkSvg) {
            // Toggle off if same comparison zone tapped again
            if (comparisonIdx === i) {
              removeComparison(detail);
              return;
            }
            // Remove previous comparison
            removeComparison(detail);
            comparisonIdx = i;

            // Build comparison sparkline path
            const cmpConfig = zones[i];
            if (!cmpConfig) return;
            const cmpEntityId = cmpConfig.entity;
            const cmpZoneName = extractZoneName(cmpEntityId);
            const cmpZoneEntities = discovery?.zoneEntities?.[cmpZoneName] || {};
            const cmpSensorId = cmpConfig.temperature_entity || cmpZoneEntities.temperature || cmpEntityId;
            const cmpData = historyCache?.data?.[cmpSensorId] || [];
            if (cmpData.length >= 2) {
              const cmpResult = this._sparklinePathCache.get(cmpSensorId) || buildFilledSparkline(cmpData, 340, 36, 48);
              if (cmpResult) {
                const cmpPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                cmpPath.setAttribute('d', cmpResult.linePath);
                cmpPath.setAttribute('fill', 'none');
                cmpPath.setAttribute('stroke', 'var(--info-color, #4FC3F7)');
                cmpPath.setAttribute('stroke-width', '1.5');
                cmpPath.setAttribute('opacity', '0.5');
                cmpPath.classList.add('comparison-path');
                sparkSvg.appendChild(cmpPath);
              }
            }

            // Add legend
            const primaryConfig = zones[selectedIdx];
            const primaryName = resolveZoneDisplay(primaryConfig?.entity || '', states, primaryConfig).name;
            const cmpName = resolveZoneDisplay(cmpEntityId, states, cmpConfig).name;
            const legendEl = document.createElement('div');
            legendEl.className = 'comparison-legend';
            legendEl.style.cssText = 'display:flex;gap:12px;font-size:10px;margin-top:4px;color:var(--secondary-text-color,#8e8e93)';
            legendEl.innerHTML = `<span><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:currentColor;margin-right:4px"></span>${escapeHtml(primaryName)}</span>` +
              `<span><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--info-color, #4FC3F7);margin-right:4px"></span>${escapeHtml(cmpName)}</span>`;
            detail.appendChild(legendEl);
            return;
          }
        }

        if (selectedIdx === i) {
          selectedIdx = null;
          comparisonIdx = null;
          rows.forEach((/** @type {Element} */ r) => r.classList.remove('selected'));
          const existing = detailEl.querySelector('.zone-detail');
          if (existing) existing.classList.remove('active');
          if (subtitleEl) subtitleEl.textContent = defaultSubtitle;
          return;
        }
        selectedIdx = i;
        rows.forEach((/** @type {Element} */ r, /** @type {number} */ j) => r.classList.toggle('selected', j === i));

        const zoneConfig = zones[i];
        if (!zoneConfig) return;
        const entityId = zoneConfig.entity;
        const attrs = states[entityId]?.attributes || {};
        const zd = resolveZoneDisplay(entityId, states, zoneConfig);
        const { name, temp, target, humidity, hvacAction } = zd;
        if (subtitleEl) subtitleEl.textContent = name;

        // Resolve zone history data for sparkline
        const zoneName = extractZoneName(entityId);
        const zoneEntities = discovery?.zoneEntities?.[zoneName] || {};
        const sensorId = zoneConfig.temperature_entity || zoneEntities.temperature || entityId;
        const historyData = historyCache?.data?.[sensorId] || [];

        // Compute trend (°/hr) from last 2 history points
        let trendLabel = '';
        if (historyData.length >= 2) {
          const last = historyData[historyData.length - 1];
          const prev = historyData[historyData.length - 2];
          const dv = last.v - prev.v;
          const dtHours = (last.t - prev.t) / 3600000;
          if (dtHours > 0 && isFinite(dv) && isFinite(dtHours)) {
            const rate = dv / dtHours;
            const sign = rate >= 0 ? '+' : '';
            trendLabel = `${sign}${rate.toFixed(1)}${zd.unit}/hr`;
          }
        }

        // Resolve heating power via discovery (same logic as resolveZoneState)
        let power = 0;
        if (zoneEntities.heating_power) {
          const hp = states[zoneEntities.heating_power];
          if (hp && hp.state !== 'unavailable') power = parseFloat(hp.state) || 0;
        } else if (attrs.heating_power !== undefined) {
          power = parseFloat(attrs.heating_power) || 0;
        }
        const isActive = power > 0 || hvacAction === 'heating' || hvacAction === 'cooling';
        const powerLabel = isActive
          ? `${hvacAction === 'cooling' ? 'Cooling' : 'Heating'} ${Math.round(power)}%`
          : 'Idle';

        // Compute temperature min/max range from history data
        let rangeLabel = '';
        if (historyData.length >= 2) {
          let minV = Infinity;
          let maxV = -Infinity;
          for (const pt of historyData) {
            if (isFinite(pt.v)) {
              if (pt.v < minV) minV = pt.v;
              if (pt.v > maxV) maxV = pt.v;
            }
          }
          if (isFinite(minV) && isFinite(maxV)) {
            rangeLabel = `${minV.toFixed(1)}${zd.unit} – ${maxV.toFixed(1)}${zd.unit} today`;
          }
        }

        // Build sparkline from zone history
        let sparklineHtml = '';
        if (historyData.length >= 2) {
          const sparkColor = hvacAction === 'heating'
            ? '#FF9800'
            : (temp !== undefined && isFinite(Number(temp)) ? temperatureToColor(Number(temp)) : 'var(--primary-text-color)');
          const safeColor = sanitizeCssValue(sparkColor);
          const result = this._sparklinePathCache.get(sensorId) || buildFilledSparkline(historyData, 340, 36, 48);
          if (result) {
            const gradId = `tl-detail-grad-${i}`;
            sparklineHtml = `<div class="detail-sparkline sparkline-filled" style="height:36px;margin-top:10px">` +
              `<svg viewBox="0 0 340 36" preserveAspectRatio="none">` +
              `<defs><linearGradient id="${escapeHtml(gradId)}" x1="0" y1="0" x2="0" y2="1">` +
              `<stop offset="0%" stop-color="${safeColor}" stop-opacity="0.3"/>` +
              `<stop offset="100%" stop-color="${safeColor}" stop-opacity="0"/>` +
              `</linearGradient></defs>` +
              `<path d="${result.areaPath}" fill="url(#${escapeHtml(gradId)})" />` +
              `<path d="${result.linePath}" fill="none" stroke="${safeColor}" stroke-width="1.5" opacity="0.7" />` +
              `</svg></div>`;
          }
        }

        let detail = detailEl.querySelector('.zone-detail');
        if (!detail) {
          detail = document.createElement('div');
          detail.className = 'zone-detail';
          detailEl.insertBefore(detail, detailEl.querySelector('.timeline-row'));
        }
        detail.innerHTML = `<div class="detail-header"><span class="detail-name">${escapeHtml(name)}</span><span class="detail-close">✕ Close</span></div>
          <div class="detail-stats">
            <div class="stat"><div class="stat-value">${temp !== undefined ? escapeHtml(temp) + escapeHtml(zd.unit) : '--'}</div><div class="stat-label">Current</div>${trendLabel ? `<div class="stat-sub">${escapeHtml(trendLabel)}</div>` : ''}</div>
            <div class="stat"><div class="stat-value">${target !== undefined ? escapeHtml(target) + escapeHtml(zd.unit) : '--'}</div><div class="stat-label">Target</div>${powerLabel ? `<div class="stat-sub">${escapeHtml(powerLabel)}</div>` : ''}</div>
            <div class="stat"><div class="stat-value">${humidity !== undefined ? escapeHtml(humidity) + '%' : '--'}</div><div class="stat-label">Humidity</div>${rangeLabel ? `<div class="stat-sub">${escapeHtml(rangeLabel)}</div>` : ''}</div>
          </div>${sparklineHtml}`;
        detail.classList.add('active');

        const closeBtn = detail.querySelector('.detail-close');
        if (closeBtn) closeBtn.addEventListener('click', (ev) => {
          ev.stopPropagation();
          selectedIdx = null;
          comparisonIdx = null;
          rows.forEach((/** @type {Element} */ r) => r.classList.remove('selected'));
          detail.classList.remove('active');
          if (subtitleEl) subtitleEl.textContent = defaultSubtitle;
        });
      });
    });

    // Per-slot tooltip — handles both timeline (.strip-container) and heatmap (.cells) modes
    const tooltip = createStripTooltip();
    const stripRows = detailEl.querySelector('.strip-rows');
    if (stripRows) {
      /** @type {HTMLElement} */ (stripRows).style.position = 'relative';
      stripRows.appendChild(tooltip.element);
    }

    // Timeline mode: per-slot tooltip via data-slots JSON
    const strips = detailEl.querySelectorAll('.strip-container');
    strips.forEach((/** @type {Element} */ strip) => {
      // Parse slot data once at bind time — avoid JSON.parse on every pointermove
      const slotsAttr = strip.getAttribute('data-slots');
      /** @type {*[]|null} */
      let cachedSlots = null;
      try { if (slotsAttr) cachedSlots = JSON.parse(slotsAttr); } catch { /* ignore */ }

      strip.addEventListener('pointermove', (/** @type {*} */ ev) => {
        if (ev.pointerType === 'touch' || !cachedSlots) return;
        const rect = strip.getBoundingClientRect();
        const idx = pointerToSlotIndex(ev.clientX, rect, cachedSlots.length);
        const slot = cachedSlots[idx];
        if (slot) {
          const text = slot.v !== null ? `${slot.l}: ${slot.v}${tempUnit}` : `${slot.l}: --`;
          tooltip.show(rect, ev.clientX - rect.left, text);
        }
      });
      strip.addEventListener('pointerleave', () => tooltip.hide());
      strip.addEventListener('pointerdown', (/** @type {*} */ ev) => {
        if (ev.pointerType !== 'touch' || !cachedSlots) return;
        const rect = strip.getBoundingClientRect();
        const idx = pointerToSlotIndex(ev.clientX, rect, cachedSlots.length);
        const slot = cachedSlots[idx];
        if (slot) {
          const text = slot.v !== null ? `${slot.l}: ${slot.v}${tempUnit}` : `${slot.l}: --`;
          tooltip.show(rect, ev.clientX - rect.left, text);
          setTimeout(() => tooltip.hide(), 2000);
        }
      });
    });

    // Heatmap mode: per-cell tooltip
    const cellContainers = detailEl.querySelectorAll('.cells');
    cellContainers.forEach((/** @type {Element} */ container) => {
      container.addEventListener('pointermove', (/** @type {*} */ ev) => {
        if (ev.pointerType === 'touch') return;
        const cellEl = ev.target?.closest?.('.cell');
        if (!cellEl) { tooltip.hide(); return; }
        const hour = cellEl.getAttribute('data-hour') || '';
        const val = cellEl.getAttribute('data-score');
        const text = val ? `${hour}: ${val}${tempUnit}` : `${hour}: --`;
        const refRect = container.getBoundingClientRect();
        tooltip.show(refRect, ev.clientX - refRect.left, text);
      });
      container.addEventListener('pointerleave', () => tooltip.hide());
      container.addEventListener('pointerdown', (/** @type {*} */ ev) => {
        if (ev.pointerType !== 'touch') return;
        const cellEl = ev.target?.closest?.('.cell');
        if (!cellEl) return;
        const hour = cellEl.getAttribute('data-hour') || '';
        const val = cellEl.getAttribute('data-score');
        const text = val ? `${hour}: ${val}${tempUnit}` : `${hour}: --`;
        const refRect = container.getBoundingClientRect();
        tooltip.show(refRect, ev.clientX - refRect.left, text);
        setTimeout(() => tooltip.hide(), 2000);
      });
    });

    // Crosshair — vertical line across all zone rows
    const crosshair = stripRows?.querySelector('.strip-crosshair');
    const firstRef = stripRows?.querySelector('.strip-container') || stripRows?.querySelector('.cells');
    if (stripRows && crosshair && firstRef) {
      const labelOffset = firstRef.getBoundingClientRect().left - stripRows.getBoundingClientRect().left;
      bindCrosshair(stripRows, /** @type {HTMLElement} */ (crosshair), firstRef, labelOffset);
    }

    // Drag-to-select time range — handles both .strip-container and .cells
    const dragContainers = detailEl.querySelectorAll('.strip-container, .cells');
    dragContainers.forEach((/** @type {Element} */ container) => {
      const slotsAttr = container.getAttribute('data-slots');
      /** @type {*[]|null} */
      let dragSlots = null;
      try { if (slotsAttr) dragSlots = JSON.parse(slotsAttr); } catch { /* ignore */ }
      bindDragSelect(container, dragSlots, tooltip, tempUnit);
    });
  }

  /** Bind comfort strip row click → select zone, show detail panel. */
  _bindHeatmapInteractions() {
    if (this._heatmapAbort) this._heatmapAbort.abort();
    this._heatmapAbort = new AbortController();
    const rows = this._shadow.querySelectorAll('.section-comfort-strip .heatmap-row');
    const detailEl = this._shadow.querySelector('#heatmap-detail');
    if (rows.length === 0 || !detailEl) return;

    /** @type {number|null} */
    let selectedIdx = null;

    rows.forEach((/** @type {Element} */ row, /** @type {number} */ i) => {
      attachRipple(/** @type {HTMLElement} */ (row));
      row.addEventListener('click', () => {
        // Clear any drag-select highlights
        const sectionRoot = this._shadow.querySelector('.section-comfort-strip');
        if (sectionRoot) sectionRoot.querySelectorAll('.strip-drag-highlight').forEach((/** @type {Element} */ h) => { /** @type {HTMLElement} */ (h).style.display = 'none'; });
        if (selectedIdx === i) {
          selectedIdx = null;
          rows.forEach((/** @type {Element} */ r) => r.classList.remove('selected'));
          detailEl.classList.remove('active');
          return;
        }
        selectedIdx = i;
        rows.forEach((/** @type {Element} */ r, /** @type {number} */ j) => r.classList.toggle('selected', j === i));

        // Compute stats from cells (heatmap mode) or data-slots JSON (timeline mode)
        const cells = row.querySelectorAll('.cell');
        /** @type {number[]} */
        const scores = [];
        /** @type {string[]} */
        const labels = [];
        if (cells.length > 0) {
          cells.forEach((/** @type {Element} */ c) => {
            const s = c.getAttribute('data-score');
            if (s) { scores.push(Number(s)); labels.push(c.getAttribute('data-hour') || '--'); }
          });
        } else {
          // Timeline mode — parse data-slots JSON from .strip-container
          const stripEl = row.querySelector('.strip-container');
          const slotsAttr = stripEl?.getAttribute('data-slots');
          if (slotsAttr) {
            try {
              const parsed = JSON.parse(slotsAttr);
              for (const s of parsed) {
                if (s.v !== null && s.v !== undefined) { scores.push(s.v); labels.push(s.l || '--'); }
              }
            } catch { /* ignore */ }
          }
        }
        if (scores.length === 0) return;

        const avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
        let bestIdx = 0;
        let worstIdx = 0;
        for (let j = 1; j < scores.length; j++) {
          if (scores[j] > scores[bestIdx]) bestIdx = j;
          if (scores[j] < scores[worstIdx]) worstIdx = j;
        }
        const bestHour = labels[bestIdx] || '--';
        const worstHour = labels[worstIdx] || '--';
        const barColor = avg >= 80 ? '#34c759' : avg >= 50 ? '#ff9f0a' : '#ff453a';
        const zoneName = row.querySelector('.zone-label')?.textContent || '';

        detailEl.innerHTML = `<div class="detail-header"><span class="detail-name">${escapeHtml(zoneName)}</span><span class="detail-close">✕ Close</span></div>
          <div class="detail-stats">
            <div class="stat"><div class="stat-value">${avg}</div><div class="stat-label">Avg Score</div></div>
            <div class="stat"><div class="stat-value">${escapeHtml(bestHour)}</div><div class="stat-label">Best Hour</div></div>
            <div class="stat"><div class="stat-value">${escapeHtml(worstHour)}</div><div class="stat-label">Worst Hour</div></div>
          </div>
          <div class="detail-bar"><div class="detail-bar-fill" style="width:${avg}%;background:${sanitizeCssValue(barColor)}"></div></div>`;
        detailEl.classList.add('active');
        const closeBtn = detailEl.querySelector('.detail-close');
        if (closeBtn) closeBtn.addEventListener('click', (ev) => {
          ev.stopPropagation();
          selectedIdx = null;
          rows.forEach((/** @type {Element} */ r) => r.classList.remove('selected'));
          detailEl.classList.remove('active');
        });
      });
    });

    // Per-cell/slot tooltip — handles both heatmap (.cells) and timeline (.strip-container) modes
    const sectionEl = this._shadow.querySelector('.section-comfort-strip');
    if (!sectionEl) return;
    const heatmapTooltip = createStripTooltip();
    const heatmapBody = sectionEl.querySelector('.heatmap-body');
    if (heatmapBody) {
      /** @type {HTMLElement} */ (heatmapBody).style.position = 'relative';
      heatmapBody.appendChild(heatmapTooltip.element);
    }
    // Reference element for crosshair positioning — first .cells or .strip-container
    const firstRef = heatmapBody?.querySelector('.cells') || heatmapBody?.querySelector('.strip-container');

    // Heatmap mode: per-cell tooltip
    const cellContainersForTooltip = sectionEl.querySelectorAll('.cells');
    cellContainersForTooltip.forEach((/** @type {Element} */ container) => {
      container.addEventListener('pointermove', (/** @type {*} */ ev) => {
        if (ev.pointerType === 'touch') return;
        const cellEl = ev.target?.closest?.('.cell');
        if (!cellEl) { heatmapTooltip.hide(); return; }
        const hour = cellEl.getAttribute('data-hour') || '';
        const score = cellEl.getAttribute('data-score');
        const text = score ? `${hour}: Score ${score}` : `${hour}: --`;
        const refRect = firstRef?.getBoundingClientRect();
        if (refRect) {
          heatmapTooltip.show(refRect, ev.clientX - refRect.left, text);
        }
      });
      container.addEventListener('pointerleave', () => heatmapTooltip.hide());
      container.addEventListener('pointerdown', (/** @type {*} */ ev) => {
        if (ev.pointerType !== 'touch') return;
        const cellEl = ev.target?.closest?.('.cell');
        if (!cellEl) return;
        const hour = cellEl.getAttribute('data-hour') || '';
        const score = cellEl.getAttribute('data-score');
        const text = score ? `${hour}: Score ${score}` : `${hour}: --`;
        const refRect = firstRef?.getBoundingClientRect();
        if (refRect) {
          heatmapTooltip.show(refRect, ev.clientX - refRect.left, text);
          setTimeout(() => heatmapTooltip.hide(), 2000);
        }
      });
    });

    // Timeline mode: per-slot tooltip via data-slots JSON
    const stripContainers = sectionEl.querySelectorAll('.strip-container');
    stripContainers.forEach((/** @type {Element} */ strip) => {
      const slotsAttr = strip.getAttribute('data-slots');
      /** @type {*[]|null} */
      let cachedSlots = null;
      try { if (slotsAttr) cachedSlots = JSON.parse(slotsAttr); } catch { /* ignore */ }

      strip.addEventListener('pointermove', (/** @type {*} */ ev) => {
        if (ev.pointerType === 'touch' || !cachedSlots) return;
        const rect = strip.getBoundingClientRect();
        const idx = pointerToSlotIndex(ev.clientX, rect, cachedSlots.length);
        const slot = cachedSlots[idx];
        if (slot) {
          const text = slot.v !== null ? `${slot.l}: Score ${slot.v}` : `${slot.l}: --`;
          heatmapTooltip.show(rect, ev.clientX - rect.left, text);
        }
      });
      strip.addEventListener('pointerleave', () => heatmapTooltip.hide());
      strip.addEventListener('pointerdown', (/** @type {*} */ ev) => {
        if (ev.pointerType !== 'touch' || !cachedSlots) return;
        const rect = strip.getBoundingClientRect();
        const idx = pointerToSlotIndex(ev.clientX, rect, cachedSlots.length);
        const slot = cachedSlots[idx];
        if (slot) {
          const text = slot.v !== null ? `${slot.l}: Score ${slot.v}` : `${slot.l}: --`;
          heatmapTooltip.show(rect, ev.clientX - rect.left, text);
          setTimeout(() => heatmapTooltip.hide(), 2000);
        }
      });
    });

    // Crosshair — vertical line across all zone rows
    const heatmapCrosshair = heatmapBody?.querySelector('.strip-crosshair');
    if (heatmapBody && heatmapCrosshair && firstRef) {
      const heatmapLabelOffset = firstRef.getBoundingClientRect().left - heatmapBody.getBoundingClientRect().left;
      bindCrosshair(heatmapBody, /** @type {HTMLElement} */ (heatmapCrosshair), firstRef, heatmapLabelOffset);
    }

    // Drag-to-select time range — handles both .cells and .strip-container
    const dragContainers = sectionEl.querySelectorAll('.cells, .strip-container');
    dragContainers.forEach((/** @type {Element} */ container) => {
      const slotsAttr = container.getAttribute('data-slots');
      /** @type {*[]|null} */
      let cachedDragSlots = null;
      try { if (slotsAttr) cachedDragSlots = JSON.parse(slotsAttr); } catch { /* ignore */ }
      bindDragSelect(container, cachedDragSlots, heatmapTooltip);
    });
  }

  /** Bind energy flow ribbon/label click → select zone, show detail, dim others. */
  _bindEnergyFlowInteractions() {
    if (this._energyFlowAbort) this._energyFlowAbort.abort();
    this._energyFlowAbort = new AbortController();
    const { signal: energyFlowSignal } = this._energyFlowAbort;
    const ribbons = this._shadow.querySelectorAll('.section-energy-flow path[data-zone]');
    const detailContainer = this._shadow.querySelector('.section-energy-flow');
    if (ribbons.length === 0 || !detailContainer) return;

    // No detail panel in energy flow HTML yet — we'll create one dynamically
    /** @type {string|null} */
    let selectedZone = null;

    ribbons.forEach((/** @type {Element} */ ribbon) => {
      ribbon.classList.add('ribbon');
      ribbon.addEventListener('click', () => {
        // Energy flow detail is simpler — just dim/undim ribbons
        const zone = ribbon.getAttribute('data-zone');
        if (!zone) return;
        if (selectedZone === zone) {
          selectedZone = null;
          ribbons.forEach((/** @type {Element} */ r) => r.classList.remove('dimmed'));
          return;
        }
        selectedZone = zone;
        ribbons.forEach((/** @type {Element} */ r) => {
          r.classList.toggle('dimmed', r.getAttribute('data-zone') !== zone);
        });
      }, { signal: energyFlowSignal });
    });
  }

  /** Bind crosshair + tooltip on zone sparkline containers only. */
  _bindSparklineCrosshairs() {
    if (this._sparklineAbort) this._sparklineAbort.abort();
    this._sparklineAbort = new AbortController();
    // Clean up previous instances (prevents accumulation on re-bind after history refresh)
    this._shadow.querySelectorAll('.strip-tooltip-fixed').forEach((el) => el.remove());
    this._shadow.querySelectorAll('.sparkline-crosshair').forEach((el) => el.remove());

    const containers = this._shadow.querySelectorAll(
      '.section-zones .sparkline-filled, .section-zones .zone-row-pulse',
    );
    if (containers.length === 0) return;

    // One fixed tooltip for all zone sparklines — appended to shadow root to escape overflow:hidden
    const tooltip = createFixedTooltip();
    this._shadow.appendChild(tooltip.element);

    containers.forEach((/** @type {Element} */ container) => {
      const el = /** @type {HTMLElement} */ (container);
      el.style.position = 'relative';

      const crosshair = document.createElement('div');
      crosshair.className = 'strip-crosshair sparkline-crosshair';
      crosshair.style.display = 'none';
      crosshair.style.top = '0';
      crosshair.style.bottom = '0';
      el.appendChild(crosshair);

      // Parse sparkline data once at bind time
      const dataAttr = el.getAttribute('data-sparkline');
      /** @type {*} */
      let cachedParsed = null;
      try { if (dataAttr) cachedParsed = JSON.parse(dataAttr); } catch { /* ignore */ }

      el.addEventListener('pointermove', (/** @type {*} */ ev) => {
        if (ev.pointerType === 'touch') return;
        const rect = el.getBoundingClientRect();
        const x = ev.clientX - rect.left;
        if (x < 0 || x > rect.width) return;

        crosshair.style.left = `${x}px`;
        crosshair.style.display = '';

        if (cachedParsed) {
          const points = cachedParsed.d;
          const unit = cachedParsed.u || '';
          const idx = Math.min(points.length - 1, Math.floor(x / rect.width * points.length));
          const pt = points[idx];
          if (pt) {
            const text = pt.v !== null ? `${pt.l}: ${pt.v}${unit}` : `${pt.l}: --`;
            tooltip.show(rect, ev.clientX, text);
          }
        }
      });
      el.addEventListener('pointerleave', () => {
        crosshair.style.display = 'none';
        tooltip.hide();
      });

      // Touch: tap-to-pin crosshair + tooltip, auto-hide after 2s
      /** @type {ReturnType<typeof setTimeout>|null} */
      let sparkTouchTimer = null;
      el.addEventListener('pointerdown', (/** @type {*} */ ev) => {
        if (ev.pointerType !== 'touch') return;
        const rect = el.getBoundingClientRect();
        const x = ev.clientX - rect.left;
        if (x < 0 || x > rect.width) return;

        crosshair.style.left = `${x}px`;
        crosshair.style.display = '';

        if (cachedParsed) {
          const points = cachedParsed.d;
          const unit = cachedParsed.u || '';
          const idx = Math.min(points.length - 1, Math.floor(x / rect.width * points.length));
          const pt = points[idx];
          if (pt) {
            const text = pt.v !== null ? `${pt.l}: ${pt.v}${unit}` : `${pt.l}: --`;
            tooltip.show(rect, ev.clientX, text);
          }
        }

        if (sparkTouchTimer) clearTimeout(sparkTouchTimer);
        sparkTouchTimer = setTimeout(() => {
          crosshair.style.display = 'none';
          tooltip.hide();
          sparkTouchTimer = null;
        }, 2000);
      });
    });
  }

  /**
   * Render a single section to HTML. Centralises the section type → renderer mapping.
   * @param {*} section - Section config (string or object with type).
   * @param {import('./types.js').ZoneConfig[]} zones
   * @param {Record<string, *>} states
   * @param {import('./types.js').TadoDiscovery} discovery
   * @returns {string} HTML string.
   */
  _renderSection(section, zones, states, discovery) {
    const type = typeof section === 'string' ? section : section.type;
    const config = /** @type {import('./types.js').PulseClimateConfig} */ (this._config);
    const hub = discovery.hubEntities;
    const hc = this._historyCache;
    switch (type) {
      case 'zones': return renderZonesSection(zones, config, states, discovery, hc);
      case 'api': return renderApiSection(hub, states, /** @type {*} */ (section), hc);
      case 'graph': return renderGraphSection(/** @type {*} */ (section), zones, hc, states, discovery);
      case 'donut': return renderDonutSection(/** @type {*} */ (section), hub, states);
      case 'bridge': return renderBridgeSection(hub, states, hc);
      case 'homekit': return renderHomekitSection(hub, states, hc);
      case 'weather': return renderWeatherSection(hub, states, hc);
      case 'environment': return renderEnvironmentSection(zones, states, discovery);
      case 'thermal': return renderThermalSection(zones, states, discovery);
      case 'schedule': return renderScheduleSection(zones, states, discovery);
      case 'thermal_strip': return renderThermalStripSection(zones, /** @type {*} */ (section), states, discovery, hc);
      case 'comfort_strip': return renderComfortStripSection(zones, /** @type {*} */ (section), states, discovery, hc);
      case 'energy_flow': return renderEnergyFlowSection(zones, states, discovery);
      case 'radial': return renderRadialSection(zones, /** @type {*} */ (section), states, discovery, hc);
      default: return '';
    }
  }

  /**
   * Fire an action for a zone.
   * @param {string} entityId
   * @param {import('./types.js').ZoneConfig} zoneConfig
   * @param {'tap_action'|'hold_action'|'double_tap_action'} actionType
   */
  _fireAction(entityId, zoneConfig, actionType) {
    if (!this._hass) return;
    const action = /** @type {Record<string, *>} */ (zoneConfig)[actionType] || /** @type {Record<string, *>} */ (this._config)?.[actionType] ||
      (actionType === 'tap_action' ? { action: 'more-info' } : { action: 'none' });
    sharedExecuteAction(this, this._hass, action, entityId, warn);
  }

  /**
   * Apply brief brightness glow to a zone's visual elements on temperature change.
   * @param {number} zoneIndex - Zone index.
   */
  _applyTransitionGlow(zoneIndex) {
    /** @param {Element|null} el */
    const flash = (el) => {
      if (!el) return;
      el.classList.add('temp-transitioning');
      setTimeout(() => el.classList.remove('temp-transitioning'), 1100);
    };

    // Power bar fill in default/compact layout
    const rows = this._shadow.querySelectorAll('.zone-row');
    if (rows[zoneIndex]) {
      flash(rows[zoneIndex].querySelector('.power-bar-fill'));
    }

    // Pulse mode row
    const pulseRows = this._shadow.querySelectorAll('.zone-row-pulse');
    flash(pulseRows[zoneIndex] || null);

    // Radial arc path
    const arcGroups = this._shadow.querySelectorAll('.arc-group');
    if (arcGroups[zoneIndex]) {
      flash(arcGroups[zoneIndex].querySelector('.arc-path'));
    }
  }

  /** Differential update for zone rows. */
  _updateZones() {
    if (!this._elements.zonesSection || !this._config || !this._hass || !this._discovery) return;

    // Detect temperature changes for transition glow (before updating DOM)
    if (!isReducedMotion()) {
      const zones = this._config._zones || [];
      const states = this._hass.states;
      for (let i = 0; i < zones.length; i++) {
        const entityId = zones[i].entity;
        const prevState = this._prevStates[entityId];
        const curState = states[entityId];
        if (!prevState || !curState) continue;
        const prevTemp = prevState.attributes?.current_temperature;
        const curTemp = curState.attributes?.current_temperature;
        if (prevTemp !== undefined && curTemp !== undefined && prevTemp !== curTemp) {
          this._applyTransitionGlow(i);
        }
      }
    }

    updateZonesSection(
      this._elements.zonesSection,
      this._config._zones || [],
      this._config,
      this._hass.states,
      this._discovery,
      this._prevStates,
    );
  }

  /** Differential update for system sections. */
  _updateSections() {
    if (!this._hass || !this._discovery || !this._config) return;
    const states = this._hass.states;
    const discovery = this._discovery;
    const zones = this._config._zones || [];

    // Use cached rerenderTargets — built in setConfig() / _runDiscovery()
    const rerenderTargets = this._rerenderTargets;
    if (!rerenderTargets) return;

    /** @type {Set<string>} */
    const replaced = new Set();

    for (const target of rerenderTargets) {
      const oldEl = this._shadow.querySelector(target.selector);
      if (!oldEl || target.watchIds.length === 0) continue;

      // Skip re-render if none of the watched entities changed
      const changed = target.watchIds.some((eid) => {
        const cur = states[eid];
        const prev = this._prevStates[eid];
        return !prev || prev.state !== cur?.state || prev.last_updated !== cur?.last_updated;
      });
      if (!changed) continue;

      const html = target.render();
      if (!html) continue;
      const tpl = document.createElement('template');
      tpl.innerHTML = html;
      const newEl = tpl.content.firstElementChild;
      if (newEl) {
        oldEl.replaceWith(newEl);
        replaced.add(target.selector);
      }
    }

    // Only re-bind listeners on sections that were actually replaced.
    // Section chip actions exist on system sections (api, bridge, homekit, etc.)
    // — skip re-bind if only non-chip sections (graph, donut) were replaced.
    const chipSections = new Set([
      '.section-zones', '.section-api', '.section-bridge', '.section-homekit',
      '.section-weather', '.section-environment', '.section-thermal', '.section-schedule',
    ]);
    const hasReplacedChipSection = [...replaced].some((s) => chipSections.has(s));
    if (hasReplacedChipSection) {
      this._bindSectionChipActions();
    }
    if (replaced.has('.section-zones')) {
      this._elements.zonesSection = this._shadow.querySelector('.section-zones');
      this._bindZoneActions();
      this._bindChipActions();
    }
    if (replaced.has('.section-api')) {
      this._elements.apiSection = this._shadow.querySelector('.section-api');
      this._startCountdownTimer();
    }
    if (replaced.has('.section-radial')) {
      this._bindRadialInteractions();
    }

    // Energy flow: differential update preserves ongoing SVG <animate> flow animations.
    // Falls back to full re-render if zone count changed or section not found.
    const energyFlowEl = /** @type {HTMLElement|null} */ (this._shadow.querySelector('.section-energy-flow'));
    if (energyFlowEl) {
      // Check if any zone's heating power or hvac_action changed
      const efChanged = zones.some((z) => {
        const zn = extractZoneName(z.entity);
        const ze = discovery.zoneEntities?.[zn] || {};
        const watchIds = [z.entity, ze.heating_power, ze.ac_power].filter(Boolean);
        return watchIds.some((eid) => {
          const cur = states[eid];
          const prev = this._prevStates[eid];
          return !prev || prev.state !== cur?.state || prev.last_updated !== cur?.last_updated;
        });
      });
      if (efChanged) {
        const updated = updateEnergyFlowSection(energyFlowEl, zones, states, discovery);
        if (!updated) {
          // Zone count changed or structure mismatch — full re-render
          const html = renderEnergyFlowSection(zones, states, discovery);
          if (html) {
            const tpl = document.createElement('template');
            tpl.innerHTML = html;
            const newEl = tpl.content.firstElementChild;
            if (newEl) {
              energyFlowEl.replaceWith(newEl);
              replaced.add('.section-energy-flow');
              this._bindEnergyFlowInteractions();
            }
          }
        }
      }
    }
  }

  /**
   * Re-render only history-dependent sections after cache update.
   * Skips non-history sections (environment, thermal, schedule) to preserve
   * their DOM elements, interactive state, and event listeners.
   * Only re-binds listeners on sections that were actually replaced.
   */
  _updateHistorySections() {
    if (!this._config || !this._hass || !this._discovery) return;

    const config = this._config;
    const states = this._hass.states;
    const discovery = this._discovery;
    const zones = config._zones || [];
    const sections = config.sections || [{ type: 'zones' }];
    /** @type {string[]} */
    const replacedTypes = [];

    for (const section of sections) {
      const type = typeof section === 'string' ? section : section.type;
      if (!HISTORY_SECTIONS.has(type)) continue; // Skip non-history sections

      const selector = SECTION_SELECTORS[type];
      if (!selector) continue;

      const oldEl = this._shadow.querySelector(selector);
      if (!oldEl) continue;

      const html = this._renderSection(section, zones, states, discovery);
      if (!html) continue;

      // Swap the section element
      const tpl = document.createElement('template');
      tpl.innerHTML = html;
      const newEl = tpl.content.firstElementChild;
      if (newEl) {
        oldEl.replaceWith(newEl);
        replacedTypes.push(type);
      }
    }

    if (replacedTypes.length === 0) return;

    // Re-cache DOM refs for sections that were replaced
    if (replacedTypes.includes('zones')) {
      this._elements.zonesSection = this._shadow.querySelector('.section-zones');
      this._bindZoneActions();
      this._bindChipActions();
      this._bindSparklineCrosshairs();
    }
    if (replacedTypes.includes('api')) {
      this._elements.apiSection = this._shadow.querySelector('.section-api');
      this._startCountdownTimer();
    }
    if (replacedTypes.includes('radial')) {
      this._bindRadialInteractions();
    }
    if (replacedTypes.includes('thermal_strip')) {
      this._bindTimelineInteractions();
    }
    if (replacedTypes.includes('comfort_strip')) {
      this._bindHeatmapInteractions();
    }
    if (replacedTypes.includes('energy_flow')) {
      this._bindEnergyFlowInteractions();
    }

    // Re-bind section chip actions if any chip-bearing section was replaced
    const hasChipSection = replacedTypes.some((t) =>
      ['zones', 'api', 'bridge', 'homekit', 'weather'].includes(t));
    if (hasChipSection) {
      this._bindSectionChipActions();
    }
  }

  /** Refresh history cache if expired, then re-render chart sections. */
  async _refreshHistoryIfNeeded() {
    if (!this._hass || !this._config || isCacheValid(this._historyCache)) return;

    // Check shared module-level cache first — another card instance may have
    // already fetched fresh data for the same (or overlapping) entities.
    const shared = getSharedCache();
    if (isCacheValid(shared)) {
      this._historyCache = shared;
      this._rebuildSparklinePathCache();
      const withData = Object.values(shared.data).filter((/** @type {*} */ d) => d.length >= 2).length;
      if (withData > 0) this._updateHistorySections();
      return;
    }

    if (this._historyFetchInProgress) return;
    this._historyFetchInProgress = true;
    const zones = this._config._zones || [];
    /** @type {string[]} */
    const entityIds = [];

    // Collect sensor entities for history (not climate entities — their state is "heat"/"cool", not numeric)
    for (const zone of zones) {
      const zoneName = extractZoneName(zone.entity);
      const zoneEntities = this._discovery?.zoneEntities?.[zoneName] || {};
      // Temperature sensor: explicit override → discovered → climate entity fallback
      entityIds.push(zone.temperature_entity || zoneEntities.temperature || zone.entity);
      // Humidity sensor: explicit override → discovered
      const humId = zone.humidity_entity || zoneEntities.humidity;
      if (humId) entityIds.push(humId);
    }

    // Hub entities for API history
    if (this._discovery?.hubEntities?.call_history) {
      entityIds.push(this._discovery.hubEntities.call_history);
    }
    if (this._discovery?.hubEntities?.api_usage) {
      entityIds.push(this._discovery.hubEntities.api_usage);
    }
    // Bridge boiler flow temperature for sparkline
    if (this._discovery?.hubEntities?.boiler_flow_temp) {
      entityIds.push(this._discovery.hubEntities.boiler_flow_temp);
    }
    // HomeKit saved calls for sparkline
    if (this._discovery?.hubEntities?.homekit_reads_saved) {
      entityIds.push(this._discovery.hubEntities.homekit_reads_saved);
    }
    if (this._discovery?.hubEntities?.homekit_writes_saved) {
      entityIds.push(this._discovery.hubEntities.homekit_writes_saved);
    }
    // Weather outdoor temperature for sparkline
    if (this._discovery?.hubEntities?.outside_temp) {
      entityIds.push(this._discovery.hubEntities.outside_temp);
    }

    if (entityIds.length === 0) { this._historyFetchInProgress = false; return; }
    // Filter out any undefined/empty entries
    const validIds = entityIds.filter((/** @type {string} */ id) => id && typeof id === 'string' && id.includes('.'));
    if (validIds.length === 0) { this._historyFetchInProgress = false; return; }
    try {
      const data = await fetchSparklineData(this._hass, validIds, 24);
      this._historyCache = updateCache(this._historyCache, data);
      this._rebuildSparklinePathCache();
      // Update shared cache so other card instances can reuse this data
      updateSharedCache(data);
      // Count how many entities got data
      const withData = Object.values(data).filter((/** @type {*} */ d) => d.length >= 2).length;
      if (withData > 0) {
        this._updateHistorySections();
      }
    } catch {
      warn('History fetch failed, using cached data');
    } finally {
      this._historyFetchInProgress = false;
    }
  }

  /**
   * Cache only the entity states that this card watches for differential updates.
   * Avoids shallow-copying the entire hass.states object (hundreds of keys)
   * on every update cycle.
   */
  _cacheWatchedStates() {
    if (!this._hass || !this._config || !this._discovery) return;
    const states = this._hass.states;
    const zones = this._config._zones || [];
    const hub = this._discovery.hubEntities;
    /** @type {Record<string, *>} */
    const watched = {};

    // Zone climate entities + discovered per-zone sensors
    for (const z of zones) {
      const eid = z.entity;
      if (states[eid]) watched[eid] = states[eid];
      const zoneName = extractZoneName(eid);
      const ze = this._discovery.zoneEntities?.[zoneName] || {};
      for (const sensorId of Object.values(ze)) {
        if (sensorId && states[sensorId]) watched[sensorId] = states[sensorId];
      }
    }

    // Hub entities (api, bridge, homekit, weather, etc.)
    for (const eid of Object.values(hub)) {
      if (eid && states[eid]) watched[eid] = states[eid];
    }

    this._prevStates = watched;
  }

  disconnectedCallback() {
    // Preserve history cache across disconnect/reconnect — avoids blank
    // sections on dashboard refresh while history re-fetches in background.
    if (this._countdownTimer) { clearInterval(this._countdownTimer); this._countdownTimer = null; }
    if (this._rafId) { cancelAnimationFrame(this._rafId); this._rafId = null; }
    // Abort all bind method controllers
    this._chipAbort?.abort();
    this._sectionChipAbort?.abort();
    this._radialAbort?.abort();
    this._timelineAbort?.abort();
    this._heatmapAbort?.abort();
    this._energyFlowAbort?.abort();
    this._sparklineAbort?.abort();
    // Stop radial shimmer animation
    const firstArc = this._shadow?.querySelector('.arc-group');
    if (firstArc && typeof /** @type {*} */ (firstArc).__shimmerStop === 'function') {
      /** @type {*} */ (firstArc).__shimmerStop();
    }
    // Clean up action listeners to prevent leaks
    const rows = this._shadow?.querySelectorAll('.zone-row') || [];
    for (const row of rows) {
      const cleanup = /** @type {*} */ (row).__pulseCleanup;
      if (typeof cleanup === 'function') cleanup();
    }
  }

  connectedCallback() {
    if (this._config && this._hass && !this._shadow.querySelector('ha-card')) {
      if (!this._discovery) this._runDiscovery();
      this._fullRender();
      this._refreshHistoryIfNeeded();
    }
  }

  /**
   * Report card height for HA layout.
   * @returns {number}
   */
  getCardSize() {
    const zones = this._config?._zones?.length || 1;
    const sections = this._config?.sections?.length || 1;
    return Math.max(1, zones + sections);
  }

  /**
   * Report grid options for HA layout.
   * @returns {{columns: number, min_columns: number, rows: number, min_rows: number}}
   */
  getGridOptions() {
    return {
      columns: 12,
      min_columns: 3,
      rows: this.getCardSize(),
      min_rows: 1,
    };
  }

  /**
   * Lazy-load the visual editor.
   * @returns {Promise<HTMLElement>}
   */
  static async getConfigElement() {
    await import('./pulse-climate-editor.js');
    return document.createElement(EDITOR_NAME);
  }

  /**
   * Generate a stub config for the card picker.
   * @param {import('./types.js').Hass} hass
   * @returns {Record<string, *>}
   */
  static getStubConfig(hass) {
    const climateEntity = Object.keys(hass.states).find((eid) => eid.startsWith('climate.'));
    return { entity: climateEntity || 'climate.living_room' };
  }
}

// Register custom element
if (!customElements.get(CARD_NAME)) {
  customElements.define(CARD_NAME, PulseClimateCard);
}

// Register with HA card picker
/** @type {*} */ (window).customCards = /** @type {*} */ (window).customCards || [];
/** @type {*} */ (window).customCards.push({
  type: CARD_NAME,
  name: 'Pulse Climate Card',
  description: 'Modular climate dashboard card with Tado CE enrichment',
});

// Version log
console.info(`%c PULSE-CLIMATE-CARD %c v${VERSION} `, 'background:#4CAF50;color:white;font-weight:bold', 'background:#333;color:#fff');
