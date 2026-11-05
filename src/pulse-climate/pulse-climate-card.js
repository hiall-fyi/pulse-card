/**
 * @module pulse-climate/pulse-climate-card
 * @description Main Pulse Climate Card custom element.
 */

import { CARD_NAME, EDITOR_NAME, LOG_PREFIX, VERSION } from './constants.js';
import { STYLES } from './styles.js';
import { attachPhase } from './pulse-phase.js';
import { normalizeClimateConfig, resolveZoneContext, rowStateClass, warn, resolveZoneDisplay, resolveZoneState, zoneActivityLabel, zoneActionWord, classifyClimateState, buildHistoryMap, formatTemperature, formatPercent } from './utils.js';
import { discoverTadoEntities, extractZoneName, zoneBoundEntityIds } from './zone-resolver.js';
import { resolveHistoryTempSensor, resolveHistoryHumSensor } from './sensor-resolver.js';
import { createHistoryCache, cacheCovers, updateCache, getSharedCache, updateSharedCache, SPARKLINE_INTERVAL } from './history.js';
import { renderZonesSection, updateZonesSection } from './sections/zones.js';
import { renderApiSection } from './sections/api.js';
import { renderBridgeSection } from './sections/bridge.js';
import { renderHomekitSection } from './sections/homekit.js';
import { renderWeatherSection } from './sections/weather.js';
import { renderEnvironmentSection } from './sections/environment.js';
import { renderThermalSection } from './sections/thermal.js';
import { renderScheduleSection } from './sections/schedule.js';
import { renderGraphSection, resolveGraphHistorySensors } from './sections/graph.js';
import { renderDonutSection } from './sections/donut.js';
import { renderThermalStripSection } from './sections/thermal-strip.js';
import { renderComfortStripSection } from './sections/comfort-strip.js';
import { renderEnergyFlowSection, updateEnergyFlowSection } from './sections/energy-flow.js';
import { renderRadialSection, radialCenterDefaults } from './sections/radial.js';
import { renderHomeStatusSection } from './sections/home-status.js';
import { renderZoneRankingSection } from './sections/zone-ranking.js';
import { renderTimelineGroupSection } from './sections/timeline-group.js';
import { computeStateSlots, longestActiveStreak, busiestHour } from './sections/state-timeline-view.js';
import { renderSystemHealthGroupSection } from './sections/system-health-group.js';
import { renderAtmosphere } from './sections/atmosphere.js';
import { renderHero } from './sections/hero.js';
import { resolveOutdoorTemp, outdoorWatchIds, formatOutdoorTemp } from './outdoor-temp.js';
import { escapeHtml, sanitizeCssValue, isReducedMotion, isUnavailableState, buildGridOptions, resolveHassTimeZone, formatHHMM, setHassTempUnit, resolveTempUnit } from '../shared/utils.js';
import { buildFilledSparkline, temperatureToColor } from './chart-primitives.js';
import { createStripTooltip, createFixedTooltip, pointerToSlotIndex, bindDragSelect, bindCrosshair } from './sections/slot-engine.js';
import { executeAction as sharedExecuteAction, fireEvent, makeActivatable, DOUBLE_TAP_WINDOW, HOLD_THRESHOLD } from '../shared/action-handler.js';
import { attachRipple } from '../shared/ripple.js';
import { fetchSparklineData, fetchClimateStateHistory } from '../shared/utils.js';

/** Module-level flag: log discovery results once per page load across all card instances. */
let _discoveryLogged = false;

/** Falls back to <style> injection on Safari < 16.4. */
const _supportsAdoptedStyleSheets = typeof CSSStyleSheet !== 'undefined'
  && typeof CSSStyleSheet.prototype.replaceSync === 'function'
  && typeof document !== 'undefined'
  && 'adoptedStyleSheets' in (document.createElement('div').attachShadow({ mode: 'open' }));

/** @type {CSSStyleSheet|null} Shared across all card instances; null on Safari < 16.4. */
const _sharedSheet = _supportsAdoptedStyleSheets ? (() => {
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(STYLES);
  return sheet;
})() : null;

/**
 * Entity ids a section must watch for one zone: the climate entity plus the named discovered entities.
 * @param {{entity: string, heating_power_entity?: string}} zone
 * @param {import('./types.js').TadoDiscovery} discovery
 * @param {string[]} keys
 * @returns {string[]}
 */
function zoneWatchIds(zone, discovery, keys) {
  const zoneEntities = /** @type {Record<string, string>} */ (discovery?.zoneEntities?.[extractZoneName(zone.entity)] || {});
  return [...new Set(/** @type {string[]} */ ([zone.entity, zone.heating_power_entity, ...keys.map((k) => zoneEntities[k])].filter(Boolean)))];
}

/** Temperature and humidity sensor ids the Comfort score of one zone reads. */
function comfortInputIds(/** @type {*} */ zone, /** @type {*} */ discovery, /** @type {Record<string, *>} */ states) {
  const zoneEntities = discovery?.zoneEntities?.[extractZoneName(zone.entity)] || {};
  const temp = resolveHistoryTempSensor(zone.entity, states, zoneEntities, zone).entityId;
  const hum = resolveHistoryHumSensor(zone.entity, states, zoneEntities, zone)?.entityId;
  return /** @type {string[]} */ ([temp, hum].filter(Boolean));
}

/** True when a watched entity's state differs from the cached one; an id absent from both counts as unchanged. */
function watchedStateChanged(/** @type {*} */ prev, /** @type {*} */ cur) {
  if (!prev && !cur) return false;
  return !prev || prev.state !== cur?.state || prev.last_updated !== cur?.last_updated;
}

/** Resolved zone states the hero and the atmosphere wash both read. */
function heroZoneStatesOf(/** @type {*} */ config, /** @type {*} */ discovery, /** @type {*} */ states) {
  return (config._zones || []).map((/** @type {*} */ z) => {
    const discovered = discovery.zoneEntities?.[extractZoneName(z.entity)] || {};
    return resolveZoneState(z.entity, discovered, states, z, config);
  });
}

/** Sections re-rendered on the 5-minute history refresh cycle. */
const HISTORY_SECTIONS = new Set([
  'zones', 'api', 'graph', 'bridge', 'thermal_strip',
  'comfort_strip', 'homekit', 'weather', 'radial', 'donut',
  'timeline_group', 'system_health_group',
]);

/* Minimum gap between discovery rescans while a dashboard stays open. */
const DISCOVERY_REFRESH_MS = 60000;

/** Rows with their own tap handler (_bindTimelineInteractions, _bindStateTimelineInteractions); they must not also open more-info. */
const OWN_HANDLER_SELECTOR = '.pc-timeline-row, .pc-state-row';

/** Sections whose open row or Ranking tab is kept across a replacement. */
const UI_STATE_SECTION_SELECTORS = [
  '.pc-section-comfort-strip', '.pc-section-thermal-strip', '.pc-section-timeline-group', '.pc-section-zone-ranking', '.pc-section-energy-flow',
];

/** Selectable rows of the comfort, thermal and timeline sections; the selected one carries pc-selected. */
const UI_STATE_ROW_SELECTOR = '.pc-heatmap-row, .pc-timeline-row, .pc-state-row';

/** @type {Record<string, string>} Section type → CSS selector mapping. */
const SECTION_SELECTORS = {
  zones: '.pc-section-zones',
  api: '.pc-section-api',
  graph: '.pc-section-graph',
  bridge: '.pc-section-bridge',
  thermal_strip: '.pc-section-thermal-strip',
  comfort_strip: '.pc-section-comfort-strip',
  homekit: '.pc-section-homekit',
  weather: '.pc-section-weather',
  radial: '.pc-section-radial',
  donut: '.pc-section-donut',
  environment: '.pc-section-environment',
  thermal: '.pc-section-thermal',
  schedule: '.pc-section-schedule',
  energy_flow: '.pc-section-energy-flow',
  energy_flow_ac: '.pc-section-energy-flow[data-variant="ac"]',
  home_status: '.pc-section-home-status',
  zone_ranking: '.pc-section-zone-ranking',
  timeline_group: '.pc-section-timeline-group',
  system_health_group: '.pc-section-system-health-group',
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
  /** @type {ReturnType<typeof setTimeout>|null} Trailing timer for an update pass deferred by the throttle. */
  _trailTimer = null;
  /** @type {number} Timestamp of last differential update. */
  _lastUpdateTime = 0;
  /** @type {number} Timestamp of the last discovery scan. */
  _lastDiscoveryAt = 0;
  /** @type {{selector: string, watchIds: string[]|(() => string[]), render: (index: number, el: Element) => string}[]|null} Cached rerender targets. */
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
  _stateTimelineAbort = null;
  /** @type {AbortController|null} */
  _heatmapAbort = null;
  /** @type {AbortController|null} */
  _energyFlowAbort = null;
  /** @type {AbortController|null} */
  _sparklineAbort = null;
  /** @type {AbortController|null} */
  _zoneRankingTabsAbort = null;
  /** @type {AbortController|null} */
  _timelineGroupTabsAbort = null;
  /** @type {AbortController|null} */
  _timelineGroupCellTooltipAbort = null;
  /** @type {AbortController|null} */
  _systemHealthGroupTabsAbort = null;
  /** @type {Map<string, {linePath: string, areaPath: string}>} Pre-computed sparkline SVG paths. */
  _sparklinePathCache = new Map();
  /** @type {{shimmer: boolean, sheen: boolean}} Active flags for radial animation timer chains.
   * Kept on the instance (not the DOM node) so that rebinds / DOM replacement can
   * halt in-flight setTimeout chains before they resume against detached arcs. */
  _radialAnimState = { shimmer: false, sheen: false };
  /** @type {number|null} Selected radial zone, kept so a rerender can reopen it. */
  _radialSelectedIdx = null;
  /** @type {number} Monotonically increasing generation counter. Bumped on every
   * setConfig() / _runDiscovery() so in-flight history fetches can detect that
   * their captured context is stale and skip writing to the cache. */
  _historyGen = 0;
  /** @type {number} Start of the last history fetch attempt; throttles retries of ids the cache cannot cover. */
  _historyLastAttempt = 0;
  /** @type {string|null|undefined} Hero outdoor entity id seen by the last update pass; undefined before the first pass. */
  _lastHeroOutdoorId = undefined;

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
    /* Stop radial animation chains before DOM rebuild; otherwise they fire against detached arcs. */
    this._stopRadialAnimations();
    this._radialSelectedIdx = null;
    /* Bump history gen: in-flight fetches captured the old gen and will skip their cache write on resume. */
    this._historyGen++;
    this._historyLastAttempt = 0;
    this._lastHeroOutdoorId = undefined;
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
    setHassTempUnit(hass);
    if (!this._config) return;

    if (!this._discovery) {
      this._runDiscovery();
      this._fullRender();
      this._refreshHistoryIfNeeded();
      return;
    }

    /* Throttle differential updates into one RAF-aligned pass so 15+ card instances do not each diff the DOM per state change. */
    if (this._rafId || this._trailTimer) return;
    this._rafId = requestAnimationFrame(() => {
      this._rafId = null;
      this._runUpdate();
    });
  }

  /** One differential update pass; a pass inside the 200 ms window is deferred to the end of it, not dropped. */
  _runUpdate() {
    if (!this.isConnected) return;
    if (!this._hass || !this._config || !this._discovery) return;
    const elapsed = Date.now() - this._lastUpdateTime;
    /* A negative gap means the clock stepped backwards; treat the window as over instead of waiting it out. */
    const wait = elapsed < 0 ? 0 : 200 - elapsed;
    if (wait > 0) {
      this._trailTimer = setTimeout(() => { this._trailTimer = null; this._runUpdate(); }, wait);
      return;
    }
    this._lastUpdateTime = Date.now();
    if (this._lastUpdateTime - this._lastDiscoveryAt >= DISCOVERY_REFRESH_MS) {
      this._lastDiscoveryAt = this._lastUpdateTime;
      const fresh = this._computeDiscovery();
      /* Only the entity maps and the Tado CE flag change what renders. */
      const signature = (/** @type {import('./types.js').TadoDiscovery} */ d) => JSON.stringify([
        d.isTadoCE,
        Object.entries(d.hubEntities).sort(),
        Object.entries(d.zoneEntities).map(([zone, ids]) => [zone, Object.entries(ids).sort()]).sort(),
      ]);
      if (signature(fresh) !== signature(this._discovery)) {
        const uiState = this._captureUiState();
        this._runDiscovery(fresh);
        this._fullRender();
        this._refreshHistoryIfNeeded();
        this._restoreUiState(uiState);
        return;
      }
    }
    const states = this._hass.states;
    const discovery = this._discovery;
    const zoneList = this._config._zones || [];
    const climateChanged = zoneList.some((z) => states[z.entity] !== this._prevStates[z.entity]);
    const zonesChanged = climateChanged || zoneList.some((z) =>
      zoneBoundEntityIds(z, discovery).some((id) => states[id] !== this._prevStates[id])
    );
    if (zonesChanged) this._updateZones();
    this._updateSections();
    const [heroOutdoorId] = outdoorWatchIds(this._config, null, discovery, states);
    const heroOutdoorMoved = this._lastHeroOutdoorId !== undefined && this._lastHeroOutdoorId !== heroOutdoorId;
    const outdoorChanged = heroOutdoorMoved || (!!heroOutdoorId && watchedStateChanged(this._prevStates[heroOutdoorId], states[heroOutdoorId]));
    if (zonesChanged || outdoorChanged) this._updateHero();
    if (zonesChanged) this._updateAtmosphere();
    this._refreshHistoryIfNeeded();
    this._cacheWatchedStates();
    this._lastHeroOutdoorId = heroOutdoorId ?? null;
  }

  /** Sync the backdrop wash with the current home state, inserting, removing or replacing it as needed. */
  _updateAtmosphere() {
    if (!this._config || !this._hass || !this._discovery) return;
    if (this._config.show_atmosphere === false) return;
    const config = this._config;
    const climateState = classifyClimateState(heroZoneStatesOf(config, this._discovery, this._hass.states));
    const markup = renderAtmosphere(climateState, config.atmosphere_intensity);
    const current = this._shadow.querySelector('.pc-atmosphere-wash');
    if (!markup) { current?.remove(); return; }
    const tpl = document.createElement('template');
    // eslint-disable-next-line no-unsanitized/property -- renderAtmosphere output is a fixed-vocabulary string
    tpl.innerHTML = markup;
    const next = tpl.content.firstElementChild;
    if (!next) return;
    if (!current) {
      const content = this._shadow.querySelector('.pc-card-content');
      if (content) content.parentNode?.insertBefore(next, content);
    } else if (current.className !== next.className) {
      current.replaceWith(next);
    }
  }

  /** Scan hass for Tado CE entities without assigning anything. */
  _computeDiscovery() {
    const zones = this._config?._zones || [];
    const zoneNames = zones.map((/** @type {import('./types.js').ZoneConfig} */ z) => extractZoneName(z.entity));
    return discoverTadoEntities(this._hass?.states || {}, zoneNames, this._hass?.entities);
  }

  /**
   * Run Tado CE entity discovery, assigning a result already computed by the caller when given.
   * @param {import('./types.js').TadoDiscovery} [computed]
   */
  _runDiscovery(computed) {
    if (!this._hass || !this._config) return;
    this._lastDiscoveryAt = Date.now();
    /* Discovery may redefine zone set; bump gen so in-flight fetches are stale. */
    this._historyGen++;
    this._historyFetchInProgress = false;
    this._historyLastAttempt = 0;
    this._discovery = computed || this._computeDiscovery();

    /* _discoveryLogged flag survives instance recreation; logs only on first card init per page load. */
    if (!_discoveryLogged && this._discovery.isTadoCE) {
      _discoveryLogged = true;
      const found = Object.entries(this._discovery.hubEntities).map(([k, v]) => `${k}=${v}`);
      console.info(`${LOG_PREFIX} Tado CE hub discovery, found: ${found.join(', ')}`);
      if (this._discovery.missingHubKeys.length > 0) {
        console.warn(`${LOG_PREFIX} Tado CE hub discovery, missing: ${this._discovery.missingHubKeys.join(', ')}. Affected sections may render with degraded data.`);
      }
    }
    this._buildRerenderTargets();
  }



  /** Pre-compute sparkline SVG paths for zone temperature sensors so detail panels render instantly on tap. */
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

  /** Radial section config with the card-level outdoor sensor as the default for the section's own. */
  _withCardOutdoor(/** @type {*} */ section) {
    const cardLevel = this._config?.outdoor_temp_entity;
    return { ...section, outdoor_temp_entity: section?.outdoor_temp_entity || cardLevel };
  }

  /** Outdoor entity ids the Radial shows (temperature source and section humidity). */
  _radialOutdoorIds() {
    const sections = this._config?.sections || [];
    const radials = sections.filter((/** @type {*} */ s) => (typeof s === 'string' ? s : s.type) === 'radial');
    return [...new Set((radials.length ? radials : [null]).flatMap((/** @type {*} */ radial) => outdoorWatchIds(this._config, typeof radial === 'object' ? radial : null, this._discovery, this._hass?.states || {})))];
  }

  /** Build and cache the rerenderTargets array (from setConfig() and _runDiscovery()) before the next _updateSections(). */
  _buildRerenderTargets() {
    if (!this._config || !this._discovery) return;
    const discovery = this._discovery;
    const hubEntities = discovery.hubEntities;
    const zones = this._config._zones || [];
    const apiIds = [hubEntities.api_usage, hubEntities.api_limit, hubEntities.api_status, hubEntities.next_sync, hubEntities.token_status].filter(Boolean);
    const homekitIds = [hubEntities.homekit_connected, hubEntities.homekit_reads_saved, hubEntities.homekit_writes_saved].filter(Boolean);
    const bridgeIds = [hubEntities.bridge_connected, hubEntities.boiler_flow_temp, hubEntities.wc_status, hubEntities.wc_target_flow].filter(Boolean);
    const powerIds = zones.flatMap((z) => zoneWatchIds(z, discovery, ['heating_power', 'ac_power']));
    const comfortIds = () => [...new Set(zones.flatMap((z) => [...zoneWatchIds(z, discovery, ['heating_power', 'ac_power', 'comfort_level']), ...comfortInputIds(z, discovery, this._hass?.states || {})]))];
    /* Live config entry at the element's index when it is of this type; a missing or mismatched index renders nothing and the element is left as is. */
    const sectionAt = (/** @type {string} */ type, /** @type {number} */ index) => {
      const section = (this._config?.sections || [])[index];
      return section && (typeof section === 'string' ? section : section.type) === type ? section : undefined;
    };
    /* Group sections render from the live section config so a tab picked by the user survives. */
    const groupTarget = (/** @type {string} */ type, /** @type {string[]|(() => string[])} */ watchIds) => ({
      selector: SECTION_SELECTORS[type],
      watchIds,
      render: (/** @type {number} */ index) => {
        const section = sectionAt(type, index);
        return section ? this._renderSection(section, zones, this._hass?.states || {}, discovery) : '';
      },
    });

    this._rerenderTargets = [
      {
        selector: '.pc-section-zones',
        watchIds: [hubEntities.home_state].filter(Boolean),
        render: () => {
          const config = /** @type {import('./types.js').PulseClimateConfig} */ (this._config);
          const states = this._hass?.states || {};
          return renderZonesSection(zones, config, states, discovery, this._historyCache, resolveHassTimeZone(this._hass));
        },
      },
      {
        selector: '.pc-section-api',
        watchIds: apiIds,
        render: (/** @type {number} */ index) => {
          const states = this._hass?.states || {};
          const apiSection = sectionAt('api', index);
          if (!apiSection) return '';
          return renderApiSection(hubEntities, states, /** @type {*} */ (apiSection), this._historyCache, resolveHassTimeZone(this._hass));
        },
      },
      {
        selector: '.pc-section-homekit',
        watchIds: homekitIds,
        render: () => {
          const states = this._hass?.states || {};
          return renderHomekitSection(hubEntities, states, this._historyCache);
        },
      },
      {
        selector: '.pc-section-bridge',
        watchIds: bridgeIds,
        render: () => {
          const states = this._hass?.states || {};
          return renderBridgeSection(hubEntities, states, this._historyCache);
        },
      },
      {
        selector: '.pc-section-weather',
        watchIds: [hubEntities.outside_temp, hubEntities.weather, hubEntities.solar_intensity].filter(Boolean),
        render: () => {
          const states = this._hass?.states || {};
          return renderWeatherSection(hubEntities, states, this._historyCache);
        },
      },
      {
        selector: '.pc-section-environment',
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
        selector: '.pc-section-thermal',
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
        selector: '.pc-section-schedule',
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
        selector: '.pc-section-radial',
        watchIds: () => [...zones.flatMap((z) => zoneWatchIds(z, discovery, ['heating_power', 'ac_power'])), ...this._radialOutdoorIds()],
        render: (/** @type {number} */ index) => {
          const states = this._hass?.states || {};
          const radialSection = sectionAt('radial', index);
          if (!radialSection) return '';
          return renderRadialSection(zones, this._withCardOutdoor(radialSection), states, discovery, this._historyCache);
        },
      },
      {
        selector: '.pc-section-donut',
        watchIds: (() => {
          const sections = this._config?.sections || [];
          const donuts = sections.filter((/** @type {*} */ s) => (typeof s === 'string' ? s : s.type) === 'donut');
          return [...new Set(donuts.flatMap((/** @type {*} */ donutSection) => {
            const source = donutSection?.source;
            if (source === 'api_breakdown' && hubEntities.api_breakdown) return [hubEntities.api_breakdown];
            if (source === 'homekit_saved') return [hubEntities.homekit_reads_saved, hubEntities.homekit_writes_saved].filter(Boolean);
            return [];
          }))];
        })(),
        render: (/** @type {number} */ index) => {
          const states = this._hass?.states || {};
          const donutSection = sectionAt('donut', index);
          if (!donutSection) return '';
          return renderDonutSection(/** @type {*} */ (donutSection), hubEntities, states);
        },
      },
      {
        selector: '.pc-section-graph',
        watchIds: () => [...new Set(zones.flatMap((z) => [...zoneWatchIds(z, discovery, []), ...comfortInputIds(z, discovery, this._hass?.states || {})]))],
        render: (/** @type {number} */ index) => {
          const states = this._hass?.states || {};
          const graphSection = sectionAt('graph', index);
          if (!graphSection) return '';
          return renderGraphSection(/** @type {*} */ (graphSection), zones, this._historyCache, states, discovery);
        },
      },
      {
        selector: '.pc-section-home-status',
        watchIds: powerIds,
        render: () => {
          const states = this._hass?.states || {};
          return renderHomeStatusSection(zones, states, discovery, this._config || {});
        },
      },
      {
        selector: '.pc-section-zone-ranking',
        watchIds: comfortIds,
        render: (/** @type {number} */ _index, /** @type {Element} */ existing) => {
          const states = this._hass?.states || {};
          const activeMetric = existing?.getAttribute('data-metric') || 'power';
          return renderZoneRankingSection(zones, states, discovery, activeMetric);
        },
      },
      groupTarget('system_health_group', [...new Set([...apiIds, ...homekitIds, ...bridgeIds])]),
      groupTarget('comfort_strip', zones.flatMap((z) => zoneWatchIds(z, discovery, ['heating_power', 'ac_power', 'comfort_level']))),
    ];
  }

  /** Full render: build ha-card with all sections. */
  _fullRender() {
    if (!this._config || !this._hass || !this._discovery) return;

    const config = this._config;
    const states = this._hass.states;
    const discovery = this._discovery;
    const zones = config._zones || [];
    const isCompact = config.layout === 'compact';
    const isEntityRow = config.entity_row === true;

    let html = '';

    if (_sharedSheet) {
      this._shadow.adoptedStyleSheets = [_sharedSheet];
    } else {
      html += `<style>${STYLES}</style>`;
    }

    /* Resolve zone states once for atmosphere + hero; sections resolve their own, a separate caching scope. */
    const heroZoneStates = heroZoneStatesOf(config, discovery, states);
    const climateState = classifyClimateState(heroZoneStates);
    /* The hero drawn here is the baseline the next update pass compares its outdoor id against. */
    this._lastHeroOutdoorId = outdoorWatchIds(config, null, discovery, states)[0] ?? null;

    if (!isEntityRow) {
      html += `<ha-card${isCompact ? ' class="pc-compact"' : ''}>`;
    }

    if (config.show_atmosphere !== false) {
      html += renderAtmosphere(climateState, config.atmosphere_intensity);
    }

    html += `<div class="pc-card-content">`;

    if (config.title) {
      html += `<div class="pulse-title">${escapeHtml(config.title)}</div>`;
    }

    if (config.show_hero !== false) {
      const outdoor = resolveOutdoorTemp(config, discovery, states);
      /* Resolve each climate entity to its history sensor (honours temperature_entity overrides + Tado CE auto-discovery). */
      const resolveSensor = (/** @type {string} */ entityId) => {
        const idx = zones.findIndex((/** @type {*} */ z) => z.entity === entityId);
        if (idx < 0) return entityId;
        const zoneConfig = zones[idx];
        const zoneName = extractZoneName(entityId);
        const zoneEntities = discovery?.zoneEntities?.[zoneName] || {};
        const r = resolveHistoryTempSensor(entityId, states, zoneEntities, zoneConfig);
        return r?.entityId || entityId;
      };
      const historyMap = buildHistoryMap(zones, this._historyCache, resolveSensor);
      html += renderHero(heroZoneStates, config, historyMap, outdoor);
    }

    /* Tab click handlers locate sections by data-section-index, injected on every section wrapper here. */
    const sections = config.sections || [{ type: 'zones' }];
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const sectionHtml = this._renderSection(section, zones, states, discovery);
      html += sectionHtml.replace(
        /^<div class="pc-section([^"]*)"/,
        `<div class="pc-section$1" data-section-index="${i}"`,
      );
    }

    html += `</div>`;

    if (!isEntityRow) {
      html += `</ha-card>`;
    }

    // eslint-disable-next-line no-unsanitized/property -- inputs pre-escaped by section renderers
    this._shadow.innerHTML = html;

    this._elements.zonesSection = this._shadow.querySelector('.pc-section-zones');
    this._elements.apiSection = this._shadow.querySelector('.pc-section-api');
    this._cacheWatchedStates();

    this._bindZoneActions();
    this._bindChipActions();
    this._bindSectionInteractions();
    this._bindSectionChipActions();
    this._startCountdownTimer();
  }

  /** Bind tap/hold/double-tap actions on zone rows. */
  _bindZoneActions() {
    if (!this._config || !this._hass) return;
    const rows = this._shadow.querySelectorAll('.pc-zone-row');
    const zones = this._config._zones || [];

    for (let i = 0; i < rows.length && i < zones.length; i++) {
      const row = /** @type {HTMLElement} */ (rows[i]);
      const zoneConfig = zones[i];
      const entityId = zoneConfig.entity;

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

      makeActivatable(/** @type {HTMLElement} */ (row), () => {
        this._fireAction(entityId, zoneConfig, 'tap_action');
      }, { signal });

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
    this._bindZoneRankingTabs();
    this._bindTimelineGroupTabs();
    this._bindTimelineGroupCellTooltip();
    this._bindStateTimelineInteractions();
    this._bindSystemHealthGroupTabs();
  }

  /** Bind tap/hold actions on zone chips; chips must NOT carry `data-action` (used by _bindSectionChipActions) or clicks double-fire. */
  _bindChipActions() {
    if (!this._config || !this._hass) return;
    const chipSignal = this._resetAbort('_chipAbort');
    const zones = this._config._zones || [];
    const rows = this._shadow.querySelectorAll('.pc-zone-row');

    for (let i = 0; i < rows.length && i < zones.length; i++) {
      const zoneConfig = zones[i];
      const zoneEntityId = zoneConfig.entity;
      const chips = rows[i].querySelectorAll('.pc-chip');

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

        // stopPropagation: the parent zone row is activatable too.
        makeActivatable(chipEl, (ev) => {
          ev.stopPropagation();
          if (!this._hass) return;
          sharedExecuteAction(this, this._hass, tapAction, chipEntityId, warn);
        }, { signal: chipSignal });

        chipEl.addEventListener('click', (ev) => {
          ev.stopPropagation();
          if (!this._hass) return;
          sharedExecuteAction(this, this._hass, tapAction, chipEntityId, warn);
        }, { signal: chipSignal });

        /** @type {ReturnType<typeof setTimeout>|null} */
        let holdTimer = null;
        chipSignal.addEventListener('abort', () => { if (holdTimer) clearTimeout(holdTimer); }, { once: true });
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

  /** Bind tap action on system section chips; any chip with data-entity opens more-info for its source entity. */
  _bindSectionChipActions() {
    const sectionChipSignal = this._resetAbort('_sectionChipAbort');
    const tappables = this._shadow.querySelectorAll('.pc-section [data-entity]');
    for (const el of tappables) {
      const tappable = /** @type {HTMLElement} */ (el);
      // Skip zone row chips: they're handled by _bindChipActions
      if (tappable.closest('.pc-zone-row') && tappable.classList.contains('pc-chip')) continue;
      // Skip zone rows themselves: they're handled by _bindZoneActions
      if (tappable.classList.contains('pc-zone-row')) continue;
      if (tappable.matches(OWN_HANDLER_SELECTOR)) continue;

      tappable.style.cursor = 'pointer';
      attachRipple(tappable);

      const openMoreInfo = () => {
        const entityId = tappable.dataset.entity;
        if (entityId) fireEvent(this, 'hass-more-info', { entityId });
      };

      // stopPropagation: these can nest inside another activatable row.
      makeActivatable(tappable, (ev) => {
        ev.stopPropagation();
        openMoreInfo();
      }, { signal: sectionChipSignal });

      tappable.addEventListener('click', (ev) => {
        ev.stopPropagation();
        openMoreInfo();
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
    const radialSignal = this._resetAbort('_radialAbort');
    const arcs = this._shadow.querySelectorAll('.pc-arc-group');
    const legendItems = this._shadow.querySelectorAll('.pc-radial-legend .pc-legend-item');
    const centerEl = this._shadow.querySelector('#radial-center');
    const detailEl = this._shadow.querySelector('#radial-detail');
    const svgEl = this._shadow.querySelector('.pc-section-radial svg');
    if (arcs.length === 0 || !centerEl) return;

    /* Scale transforms below anchor on the SVG centre, not the bbox of the rotated arc. */
    const svgSize = svgEl ? Number(svgEl.getAttribute('width')) || 280 : 280;
    const svgCenter = svgSize / 2;

    const zones = this._config?._zones || [];
    /** @type {number|null} */
    let selectedIdx = null;

    const outsideTempEntityConfig = this._shadow.querySelector('.pc-section-radial')?.getAttribute('data-outdoor-temp-entity');
    const radialAttribute = this._shadow.querySelector('.pc-section-radial')?.getAttribute('data-attribute') || 'temperature';
    const outsideHumEntityConfig = this._shadow.querySelector('.pc-section-radial')?.getAttribute('data-outdoor-humidity-entity');

    /** Compute default center text from current state. */
    const getDefaults = () => {
      const states = this._hass?.states || {};
      const discovery = this._discovery;
      let outdoorHumidityText = null;
      if (outsideHumEntityConfig && states[outsideHumEntityConfig]) {
        const s = states[outsideHumEntityConfig];
        if (!isUnavailableState(s)) {
          outdoorHumidityText = String(s.attributes?.humidity !== undefined ? s.attributes.humidity : s.state);
        }
      }
      const outdoorTempText = formatOutdoorTemp({ outdoor_temp_entity: outsideTempEntityConfig || undefined }, discovery, states);
      return radialCenterDefaults({ attribute: radialAttribute, outdoorTempText, outdoorHumidityText });
    };

    const selectZone = (/** @type {number} */ idx) => {
      // Late-binding: read current state at event time
      const states = this._hass?.states || {};
      const discovery = this._discovery;
      if (selectedIdx === idx) { deselectZone(); return; }
      selectedIdx = idx;
      this._radialSelectedIdx = idx;
      const zoneConfig = zones[idx];
      if (!zoneConfig) return;
      const entityId = zoneConfig.entity;
      const zoneName = extractZoneName(entityId);
      const zoneEntities = discovery?.zoneEntities?.[zoneName] || {};
      const zd = resolveZoneDisplay(entityId, states, zoneConfig, zoneEntities);
      const { name, temp, target, humidity } = zd;
      const zs = resolveZoneState(entityId, zoneEntities, states, zoneConfig, {});
      const power = zs.heatingPower || zs.coolingPower || 0;
      const actionLabel = zoneActivityLabel(zs, power);

      const valueEl = centerEl.querySelector('.pc-center-value');
      const labelEl = centerEl.querySelector('.pc-center-label');
      const subEl = centerEl.querySelector('.pc-center-sub');
      if (valueEl) valueEl.textContent = temp !== undefined ? formatTemperature(temp, zd.unit) : '--';
      if (labelEl) labelEl.textContent = name;
      const humText = humidity !== undefined ? ` · ${formatPercent(humidity)}` : '';
      if (subEl) subEl.textContent = `${actionLabel}${humText}`;

      /* Scale from SVG centre, consistent outward push regardless of arc rotation. */
      arcs.forEach((/** @type {Element} */ a, /** @type {number} */ i) => {
        a.classList.toggle('pc-dimmed', i !== idx);
        a.classList.toggle('pc-selected', i === idx);
        if (i === idx) {
          a.setAttribute('transform', `translate(${svgCenter}, ${svgCenter}) scale(1.06) translate(${-svgCenter}, ${-svgCenter})`);
        } else {
          a.removeAttribute('transform');
        }
      });
      legendItems.forEach((/** @type {Element} */ l, /** @type {number} */ i) => {
        l.classList.toggle('pc-selected', i === idx);
      });

      if (detailEl) {
        // eslint-disable-next-line no-unsanitized/property -- inputs pre-escaped by section renderers
        detailEl.innerHTML = `<div class="pc-detail-stats">
          <div class="pc-stat"><div class="pc-stat-value">${escapeHtml(formatTemperature(target, zd.unit))}</div><div class="pc-stat-label">Target</div></div>
          <div class="pc-stat"><div class="pc-stat-value">${escapeHtml(formatPercent(humidity))}</div><div class="pc-stat-label">Humidity</div></div>
          <div class="pc-stat"><div class="pc-stat-value">${escapeHtml(zoneActionWord(zs))}</div><div class="pc-stat-label">Action</div></div>
        </div>`;
        detailEl.classList.add('pc-active');
      }
    };

    const deselectZone = () => {
      selectedIdx = null;
      this._radialSelectedIdx = null;
      const { center: defaultCenter, centerSub: defaultCenterSub } = getDefaults();
      const valueEl = centerEl.querySelector('.pc-center-value');
      const labelEl = centerEl.querySelector('.pc-center-label');
      const subEl = centerEl.querySelector('.pc-center-sub');
      if (valueEl) valueEl.textContent = defaultCenter;
      if (labelEl) labelEl.textContent = 'Outdoor';
      if (subEl) subEl.textContent = defaultCenterSub;
      arcs.forEach((/** @type {Element} */ a) => { a.classList.remove('pc-dimmed', 'pc-selected'); a.removeAttribute('transform'); });
      legendItems.forEach((/** @type {Element} */ l) => { l.classList.remove('pc-selected'); });
      if (detailEl) { detailEl.classList.remove('pc-active'); detailEl.innerHTML = ''; }
    };

    arcs.forEach((/** @type {Element} */ arc, /** @type {number} */ i) => {
      arc.addEventListener('click', () => selectZone(i), { signal: radialSignal });
    });
    legendItems.forEach((/** @type {Element} */ item, /** @type {number} */ i) => {
      attachRipple(/** @type {HTMLElement} */ (item));
      item.addEventListener('click', () => selectZone(i), { signal: radialSignal });
    });

    const keptIdx = this._radialSelectedIdx;
    this._radialSelectedIdx = null;
    if (keptIdx !== null && keptIdx < zones.length && arcs[keptIdx]) {
      const keptZone = zones[keptIdx];
      const keptEntities = this._discovery?.zoneEntities?.[extractZoneName(keptZone.entity)] || {};
      const keptState = resolveZoneState(keptZone.entity, keptEntities, this._hass?.states || {}, keptZone, {});
      if (!keptState.isUnavailable) selectZone(keptIdx);
    }

    /* The _resetAbort above already signalled the previous bind's chains; each chain exits on its own aborted signal. */
    // Per-zone shimmer: zones light up sequentially like piano keys, direction and speed vary per sweep
    if (arcs.length > 1 && !isReducedMotion()) {
      this._radialAnimState.shimmer = true;
      let currentIdx = 0;
      let direction = 1;

      const shimmerCycle = () => {
        if (radialSignal.aborted || !this._radialAnimState.shimmer) return;
        if (selectedIdx !== null) {
          /* Pause cycle while a zone is selected, manual focus wins over shimmer. */
          setTimeout(shimmerCycle, 500);
          return;
        }

        const arc = /** @type {HTMLElement} */ (arcs[currentIdx]);
        if (!arc) { setTimeout(shimmerCycle, 300); return; }

        arc.style.filter = 'brightness(1.8)';
        arc.style.transition = 'filter 0.3s ease-in';

        setTimeout(() => {
              arc.style.filter = '';
          arc.style.transition = 'filter 0.5s ease-out';
        }, 250);

        currentIdx += direction;

        if (currentIdx >= arcs.length || currentIdx < 0) {
          currentIdx = direction > 0 ? 0 : arcs.length - 1;
          /* Random pause 1-3s between sweeps; 40% chance reverse direction. */
          const pause = 1000 + Math.random() * 2000;
          if (Math.random() < 0.4) direction *= -1;
          setTimeout(shimmerCycle, pause);
        } else {
          /* 80-250ms inter-zone delay, faster = more energetic feel. */
          const delay = 80 + Math.random() * 170;
          setTimeout(shimmerCycle, delay);
        }
      };

      setTimeout(shimmerCycle, 1500);
    }

    /* Glass sheen sweep: thin light band crosses the centre glass pane at random intervals. */
    if (!isReducedMotion()) {
      const sheenEl = /** @type {HTMLElement|null} */ (this._shadow.querySelector('#radial-sheen'));
      if (sheenEl) {
        /* Luminance threshold drives sheen colour swap (dark on cream vs light on charcoal). */
        const bgColor = getComputedStyle(this).getPropertyValue('--primary-background-color').trim();
        const rgbMatch = bgColor.match(/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
        const isLight = rgbMatch ? (0.299 * Number(rgbMatch[1]) + 0.587 * Number(rgbMatch[2]) + 0.114 * Number(rgbMatch[3])) / 255 >= 0.5 : false;
        if (isLight) sheenEl.classList.add('light-theme');
        else sheenEl.classList.remove('light-theme');

        this._radialAnimState.sheen = true;
        const sheenCycle = () => {
          if (radialSignal.aborted || !this._radialAnimState.sheen) return;
          const fromLeft = Math.random() > 0.5;
          const startPos = fromLeft ? '-100% 50%' : '200% 50%';
          const endPos = fromLeft ? '200% 50%' : '-100% 50%';
          const duration = 1.2 + Math.random() * 1.5;

          sheenEl.style.transition = 'none';
          sheenEl.style.backgroundPosition = startPos;
          void sheenEl.offsetWidth;
          sheenEl.style.transition = `background-position ${duration}s ease-in-out`;
          sheenEl.style.backgroundPosition = endPos;

          setTimeout(() => {
            const pause = 4000 + Math.random() * 6000;
            setTimeout(sheenCycle, pause);
          }, duration * 1000);
        };

        setTimeout(sheenCycle, 2000 + Math.random() * 3000);
      }
    }
  }

  /** Stop active radial shimmer / glass-sheen timer chains; the next callback sees the aborted signal and releases its closure (safe to repeat). */
  _stopRadialAnimations() {
    this._radialAnimState.shimmer = false;
    this._radialAnimState.sheen = false;
    this._radialAbort?.abort();
  }

  /**
   * Abort the previous controller stored at `this[key]` (if any) and
   * install a fresh one. Returns its signal. Used by every binder that
   * needs to clear stale event listeners on re-bind.
   * @param {string} key
   * @returns {AbortSignal}
   */
  _resetAbort(key) {
    /** @type {AbortController|null} */
    const prev = /** @type {*} */ (this)[key];
    if (prev) prev.abort();
    const next = new AbortController();
    /** @type {*} */ (this)[key] = next;
    return next.signal;
  }

  /** Bind thermal-strip / Thermal-tab row click → tap-for-details + zone-compare on the `.pc-zone-detail#timeline-detail` placeholder. */
  _bindTimelineInteractions() {
    const timelineSignal = this._resetAbort('_timelineAbort');
    const sectionEls = /** @type {NodeListOf<HTMLElement>} */ (this._shadow.querySelectorAll(
      '.pc-section-thermal-strip, .pc-section-timeline-group',
    ));
    if (sectionEls.length === 0) return;

    const zones = this._config?._zones || [];
    const tempUnit = resolveTempUnit(this._hass?.states?.[zones[0]?.entity]?.attributes);

    for (const detailEl of sectionEls) {
      const rows = detailEl.querySelectorAll('.pc-timeline-row');
      if (rows.length === 0) continue;

      const subtitleEl = detailEl.querySelector('.pc-section-subtitle');
      const defaultSubtitle = 'Tap a zone for details';
      /* Start from the DOM: a section that was not replaced still carries pc-selected. */
      const keptRow = [...rows].findIndex((r) => r.classList.contains('pc-selected'));
      /** @type {number|null} */
      let selectedIdx = keptRow >= 0 ? keptRow : null;
      /** @type {number|null} */
      let comparisonIdx = null;

      /**
       * Remove comparison overlay from the detail sparkline.
       * @param {Element} detail
       */
      const removeComparison = (detail) => {
        comparisonIdx = null;
        const overlay = detail.querySelector('.pc-comparison-path');
        if (overlay) overlay.remove();
        const legend = detail.querySelector('.pc-comparison-legend');
        if (legend) legend.remove();
      };

      rows.forEach((/** @type {Element} */ row, /** @type {number} */ i) => {
      attachRipple(/** @type {HTMLElement} */ (row));
      row.addEventListener('click', () => {
        /* Late-binding, read current state at event time, not at bind time. */
        const states = this._hass?.states || {};
        const discovery = this._discovery;
        const historyCache = this._historyCache;

        detailEl.querySelectorAll('.pc-strip-drag-highlight').forEach((/** @type {Element} */ h) => { /** @type {HTMLElement} */ (h).style.display = 'none'; });

        if (selectedIdx !== null && selectedIdx !== i) {
          const detail = detailEl.querySelector('.pc-zone-detail');
          const sparkSvg = detail?.querySelector('.pc-detail-sparkline svg');
          if (detail && sparkSvg) {
            if (comparisonIdx === i) {
              removeComparison(detail);
              return;
            }
            removeComparison(detail);
            comparisonIdx = i;

            const cmpConfig = zones[i];
            if (!cmpConfig) return;
            const cmpEntityId = cmpConfig.entity;
            const cmpZoneName = extractZoneName(cmpEntityId);
            const cmpZoneEntities = discovery?.zoneEntities?.[cmpZoneName] || {};
            const cmpSensorId = resolveHistoryTempSensor(cmpEntityId, states, cmpZoneEntities, cmpConfig).entityId;
            const cmpData = historyCache?.data?.[cmpSensorId] || [];
            if (cmpData.length >= 2) {
              const cmpResult = this._sparklinePathCache.get(cmpSensorId) || buildFilledSparkline(cmpData, 340, 36, 48);
              if (cmpResult) {
                const cmpPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                cmpPath.setAttribute('d', cmpResult.linePath);
                cmpPath.setAttribute('fill', 'none');
                cmpPath.setAttribute('stroke', 'var(--pulse-info-color)');
                cmpPath.setAttribute('stroke-width', '1.5');
                cmpPath.setAttribute('opacity', '0.5');
                cmpPath.classList.add('pc-comparison-path');
                sparkSvg.appendChild(cmpPath);
              }
            }

            const primaryConfig = zones[selectedIdx];
            const primaryName = resolveZoneDisplay(primaryConfig?.entity || '', states, primaryConfig).name;
            const cmpName = resolveZoneDisplay(cmpEntityId, states, cmpConfig).name;
            const legendEl = document.createElement('div');
            legendEl.className = 'pc-comparison-legend';
            // eslint-disable-next-line no-unsanitized/property -- inputs pre-escaped by section renderers
            legendEl.innerHTML = `<span><span style="display:inline-block;width:8px;height:8px;border-radius:var(--pulse-radius-circle);background:currentColor;margin-right:4px"></span>${escapeHtml(primaryName)}</span>` +
              `<span><span style="display:inline-block;width:8px;height:8px;border-radius:var(--pulse-radius-circle);background:var(--pulse-info-color);margin-right:4px"></span>${escapeHtml(cmpName)}</span>`;
            detail.appendChild(legendEl);
            return;
          }
        }

        if (selectedIdx === i) {
          selectedIdx = null;
          comparisonIdx = null;
          rows.forEach((/** @type {Element} */ r) => r.classList.remove('pc-selected'));
          const existing = detailEl.querySelector('.pc-zone-detail');
          if (existing) existing.classList.remove('pc-active');
          if (subtitleEl) subtitleEl.textContent = defaultSubtitle;
          return;
        }
        selectedIdx = i;
        rows.forEach((/** @type {Element} */ r, /** @type {number} */ j) => r.classList.toggle('pc-selected', j === i));

        const zoneConfig = zones[i];
        if (!zoneConfig) return;
        const entityId = zoneConfig.entity;
        const zd = resolveZoneDisplay(entityId, states, zoneConfig, this._discovery?.zoneEntities?.[extractZoneName(entityId)]);
        const { name, temp, target, humidity } = zd;
        if (subtitleEl) subtitleEl.textContent = name;

        const zoneName = extractZoneName(entityId);
        const zoneEntities = discovery?.zoneEntities?.[zoneName] || {};
        const sensorId = resolveHistoryTempSensor(entityId, states, zoneEntities, zoneConfig).entityId;
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

        const zs = resolveZoneState(entityId, zoneEntities, states, zoneConfig, {});
        const hvacAction = zs.hvacAction;
        const power = zs.heatingPower || zs.coolingPower || 0;
        const powerLabel = zoneActivityLabel(zs, power);

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
            rangeLabel = `${formatTemperature(minV, zd.unit)} – ${formatTemperature(maxV, zd.unit)} today`;
          }
        }

        let sparklineHtml = '';
        if (historyData.length >= 2) {
          const sparkColor = hvacAction === 'heating'
            ? 'var(--pulse-tier-strong)'
            : (temp !== undefined && isFinite(Number(temp)) ? temperatureToColor(Number(temp)) : 'var(--pulse-text-primary)');
          const safeColor = sanitizeCssValue(sparkColor);
          const result = this._sparklinePathCache.get(sensorId) || buildFilledSparkline(historyData, 340, 36, 48);
          if (result) {
            const gradId = `tl-detail-grad-${i}`;
            sparklineHtml = `<div class="pc-detail-sparkline pc-sparkline-filled" style="height:36px;margin-top:10px">` +
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

        const detail = /** @type {HTMLElement|null} */ (detailEl.querySelector('.pc-zone-detail'));
        if (!detail) return;
        // eslint-disable-next-line no-unsanitized/property -- inputs pre-escaped by section renderers
        detail.innerHTML = `<div class="pc-detail-header"><span class="pc-detail-name">${escapeHtml(name)}</span><span class="pc-detail-close">✕ Close</span></div>
          <div class="pc-detail-stats">
            <div class="pc-stat"><div class="pc-stat-value">${escapeHtml(formatTemperature(temp, zd.unit))}</div><div class="pc-stat-label">Current</div>${trendLabel ? `<div class="pc-stat-sub">${escapeHtml(trendLabel)}</div>` : ''}</div>
            <div class="pc-stat"><div class="pc-stat-value">${escapeHtml(formatTemperature(target, zd.unit))}</div><div class="pc-stat-label">Target</div>${powerLabel ? `<div class="pc-stat-sub">${escapeHtml(powerLabel)}</div>` : ''}</div>
            <div class="pc-stat"><div class="pc-stat-value">${escapeHtml(formatPercent(humidity))}</div><div class="pc-stat-label">Humidity</div>${rangeLabel ? `<div class="pc-stat-sub">${escapeHtml(rangeLabel)}</div>` : ''}</div>
          </div>${sparklineHtml}`;
        detail.classList.add('pc-active');

        const closeBtn = detail.querySelector('.pc-detail-close');
        if (closeBtn) closeBtn.addEventListener('click', (ev) => {
          ev.stopPropagation();
          selectedIdx = null;
          comparisonIdx = null;
          rows.forEach((/** @type {Element} */ r) => r.classList.remove('pc-selected'));
          detail.classList.remove('pc-active');
          if (subtitleEl) subtitleEl.textContent = defaultSubtitle;
        }, { signal: timelineSignal });
      }, { signal: timelineSignal });
    });

      if (detailEl.classList.contains('pc-section-thermal-strip')) {
        this._bindThermalStripHandlers(detailEl, timelineSignal, tempUnit);
      }
    }
  }

  /**
   * Thermal-strip-only handlers: per-slot tooltip + drag-select. Cell
   * tooltip + crosshair on the strip rows are owned by
   * _bindTimelineGroupCellTooltip across both sections.
   * @param {HTMLElement} detailEl
   * @param {AbortSignal} timelineSignal
   * @param {string} tempUnit
   */
  _bindThermalStripHandlers(detailEl, timelineSignal, tempUnit) {
    const tooltip = createStripTooltip();
    tooltip.element.dataset.owner = 'strip';
    const stripRows = detailEl.querySelector('.pc-strip-rows');
    if (stripRows) {
      /** @type {HTMLElement} */ (stripRows).style.position = 'relative';
      stripRows.querySelectorAll(':scope > .pc-strip-tooltip[data-owner="strip"]').forEach((el) => el.remove());
      stripRows.appendChild(tooltip.element);
      timelineSignal.addEventListener('abort', () => tooltip.element.remove(), { once: true });
    }

    const strips = detailEl.querySelectorAll('.pc-strip-container');
    strips.forEach((/** @type {Element} */ strip) => {
      const slotsAttr = strip.getAttribute('data-slots');
      /** @type {*[]|null} */
      let cachedSlots = null;
      try { if (slotsAttr) cachedSlots = JSON.parse(slotsAttr); } catch { /* card's own attribute; parse failure only if mid-update truncation */ }

      strip.addEventListener('pointermove', (/** @type {*} */ ev) => {
        if (ev.pointerType === 'touch' || !cachedSlots) return;
        const rect = strip.getBoundingClientRect();
        const idx = pointerToSlotIndex(ev.clientX, rect, cachedSlots.length);
        const slot = cachedSlots[idx];
        if (slot) {
          const text = slot.v !== null ? `${slot.l}: ${slot.v}${tempUnit}` : `${slot.l}: --`;
          tooltip.show(rect, ev.clientX - rect.left, text);
        }
      }, { signal: timelineSignal });
      strip.addEventListener('pointerleave', () => tooltip.hide(), { signal: timelineSignal });
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
      }, { signal: timelineSignal });
    });

    /* Cell tooltip + crosshair on .pc-cells belong to _bindTimelineGroupCellTooltip; binding them here would double-fire pointermove. */
    const stripContainers = stripRows?.querySelectorAll('.pc-strip-container');
    if (stripRows && stripContainers && stripContainers.length > 0) {
      const crosshair = stripRows.querySelector('.pc-strip-crosshair');
      const firstRef = stripContainers[0];
      if (crosshair && firstRef) {
        const labelOffset = firstRef.getBoundingClientRect().left - stripRows.getBoundingClientRect().left;
        bindCrosshair(stripRows, /** @type {HTMLElement} */ (crosshair), firstRef, labelOffset, timelineSignal);
      }
    }

    const dragContainers = detailEl.querySelectorAll('.pc-strip-container, .pc-cells');
    dragContainers.forEach((/** @type {Element} */ container) => {
      const slotsAttr = container.getAttribute('data-slots');
      /** @type {*[]|null} */
      let dragSlots = null;
      try { if (slotsAttr) dragSlots = JSON.parse(slotsAttr); } catch { /* card's own attribute; parse failure only if mid-update truncation */ }
      bindDragSelect(container, dragSlots, tooltip, tempUnit, timelineSignal);
    });
  }

  /** Tap a State-tab zone row → 24h heat / cool totals, longest streak and busiest hour; single-zone only, no compare overlay. */
  _bindStateTimelineInteractions() {
    const signal = this._resetAbort('_stateTimelineAbort');

    const sectionEls = /** @type {NodeListOf<HTMLElement>} */ (
      this._shadow.querySelectorAll('.pc-section-timeline-group')
    );
    if (sectionEls.length === 0) return;

    for (const sectionEl of sectionEls) {
      const rows = sectionEl.querySelectorAll('.pc-state-row');
      if (rows.length === 0) continue;
      const detailEl = /** @type {HTMLElement|null} */ (sectionEl.querySelector('.pc-zone-detail'));
      if (!detailEl) continue;

      const subtitleEl = sectionEl.querySelector('.pc-section-subtitle');
      const defaultSubtitle = 'Heat / cool demand by zone';
      const keptRow = [...rows].findIndex((r) => r.classList.contains('pc-selected'));
      /** @type {number|null} */
      let selectedIdx = keptRow >= 0 ? keptRow : null;

      rows.forEach((/** @type {Element} */ row, /** @type {number} */ i) => {
        attachRipple(/** @type {HTMLElement} */ (row));
        row.addEventListener('click', () => {
          if (selectedIdx === i) {
            selectedIdx = null;
            rows.forEach((/** @type {Element} */ r) => r.classList.remove('pc-selected'));
            detailEl.classList.remove('pc-active');
            if (subtitleEl) subtitleEl.textContent = defaultSubtitle;
            return;
          }
          selectedIdx = i;
          rows.forEach((/** @type {Element} */ r, /** @type {number} */ j) => r.classList.toggle('pc-selected', j === i));

          const states = this._hass?.states || {};
          const discovery = this._discovery;
          const historyCache = this._historyCache;
          const zones = this._config?._zones || [];
          const zoneConfig = zones[i];
          if (!zoneConfig) return;

          const entityId = zoneConfig.entity;
          const zoneName = extractZoneName(entityId);
          const zoneEntities = discovery?.zoneEntities?.[zoneName] || {};
          const zd = resolveZoneState(entityId, zoneEntities, states, zoneConfig, {});
          if (subtitleEl) subtitleEl.textContent = zd.name;

          const stateHistory = historyCache?.stateData?.[entityId] || [];
          const slots = computeStateSlots(stateHistory, 48);

          let heatMin = 0;
          let coolMin = 0;
          let idleMin = 0;
          let offMin = 0;
          for (const s of slots) {
            if (s.state === 'heating') heatMin += 30;
            else if (s.state === 'cooling') coolMin += 30;
            else if (s.state === 'off') offMin += 30;
            else idleMin += 30;
          }
          const totalActive = heatMin + coolMin;

          const streak = longestActiveStreak(slots);
          const busy = busiestHour(slots);

          /** @param {number} m */
          const fmtDuration = (m) => {
            if (m === 0) return '0m';
            const h = Math.floor(m / 60);
            const mm = m % 60;
            if (h === 0) return `${mm}m`;
            if (mm === 0) return `${h}h`;
            return `${h}h ${mm}m`;
          };

          const headlineValue = totalActive > 0 ? fmtDuration(totalActive) : 'no demand';
          const heatCoolBreakdown = [];
          if (heatMin > 0) heatCoolBreakdown.push(`${fmtDuration(heatMin)} heat`);
          if (coolMin > 0) heatCoolBreakdown.push(`${fmtDuration(coolMin)} cool`);
          const headlineSub = heatCoolBreakdown.join(' · ');

          let streakSub = '';
          if (streak.minutes > 0) {
            const modeLabel = streak.mode === 'heat' ? 'heating'
              : streak.mode === 'cool' ? 'cooling'
              : 'active';
            streakSub = `${modeLabel} run`;
          }
          const streakValue = streak.minutes > 0 ? fmtDuration(streak.minutes) : '\u2014';

          let busyValue = '\u2014';
          let busySub = '';
          if (busy && busy.minutes > 0) {
            busyValue = formatHHMM(new Date(busy.ts), resolveHassTimeZone(this._hass));
            busySub = `${fmtDuration(busy.minutes)} demand`;
          }

          const idleLabel = `${fmtDuration(idleMin)} idle`;
          const offLabel = offMin > 0 ? ` · ${fmtDuration(offMin)} off` : '';

          // eslint-disable-next-line no-unsanitized/property -- inputs pre-escaped above
          detailEl.innerHTML = `<div class="pc-detail-header">`
            + `<span class="pc-detail-name">${escapeHtml(zd.name)}</span>`
            + `<span class="pc-detail-close">✕ Close</span>`
            + `</div>`
            + `<div class="pc-detail-stats">`
            + `<div class="pc-stat">`
              + `<div class="pc-stat-value">${escapeHtml(headlineValue)}</div>`
              + `<div class="pc-stat-label">24h Demand</div>`
              + (headlineSub ? `<div class="pc-stat-sub">${escapeHtml(headlineSub)}</div>` : '')
            + `</div>`
            + `<div class="pc-stat">`
              + `<div class="pc-stat-value">${escapeHtml(streakValue)}</div>`
              + `<div class="pc-stat-label">Longest Run</div>`
              + (streakSub ? `<div class="pc-stat-sub">${escapeHtml(streakSub)}</div>` : '')
            + `</div>`
            + `<div class="pc-stat">`
              + `<div class="pc-stat-value">${escapeHtml(busyValue)}</div>`
              + `<div class="pc-stat-label">Busiest Hour</div>`
              + (busySub ? `<div class="pc-stat-sub">${escapeHtml(busySub)}</div>` : '')
            + `</div>`
            + `</div>`
            + `<div class="pc-state-detail-footer">${escapeHtml(idleLabel + offLabel)}</div>`;
          detailEl.classList.add('pc-active');

          const closeBtn = detailEl.querySelector('.pc-detail-close');
          if (closeBtn) closeBtn.addEventListener('click', (ev) => {
            ev.stopPropagation();
            selectedIdx = null;
            rows.forEach((/** @type {Element} */ r) => r.classList.remove('pc-selected'));
            detailEl.classList.remove('pc-active');
            if (subtitleEl) subtitleEl.textContent = defaultSubtitle;
          }, { signal });
        }, { signal });
      });
    }
  }

  /** Bind comfort strip row click → select zone, show detail panel. */
  _bindHeatmapInteractions() {
    const heatmapSignal = this._resetAbort('_heatmapAbort');
    const rows = this._shadow.querySelectorAll('.pc-section-comfort-strip .pc-heatmap-row');
    const detailEl = this._shadow.querySelector('#heatmap-detail');
    if (rows.length === 0 || !detailEl) return;

    const keptRow = [...rows].findIndex((r) => r.classList.contains('pc-selected'));
    /** @type {number|null} */
    let selectedIdx = keptRow >= 0 ? keptRow : null;

    rows.forEach((/** @type {Element} */ row, /** @type {number} */ i) => {
      attachRipple(/** @type {HTMLElement} */ (row));
      row.addEventListener('click', () => {
        const sectionRoot = this._shadow.querySelector('.pc-section-comfort-strip');
        if (sectionRoot) sectionRoot.querySelectorAll('.pc-strip-drag-highlight').forEach((/** @type {Element} */ h) => { /** @type {HTMLElement} */ (h).style.display = 'none'; });
        if (selectedIdx === i) {
          selectedIdx = null;
          rows.forEach((/** @type {Element} */ r) => r.classList.remove('pc-selected'));
          detailEl.classList.remove('pc-active');
          return;
        }
        selectedIdx = i;
        rows.forEach((/** @type {Element} */ r, /** @type {number} */ j) => r.classList.toggle('pc-selected', j === i));

        // Compute stats from cells (heatmap mode) or data-slots JSON (timeline mode)
        const cells = row.querySelectorAll('.pc-cell');
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
          // Timeline mode: parse data-slots JSON from .strip-container
          const stripEl = row.querySelector('.pc-strip-container');
          const slotsAttr = stripEl?.getAttribute('data-slots');
          if (slotsAttr) {
            try {
              const parsed = JSON.parse(slotsAttr);
              for (const s of parsed) {
                if (s.v !== null && s.v !== undefined) { scores.push(s.v); labels.push(s.l || '--'); }
              }
            } catch { /* card's own attribute; parse failure only if mid-update truncation */ }
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
        const barColor = avg >= 80 ? 'var(--pulse-tier-moderate)' : avg >= 50 ? 'var(--pulse-tier-strong)' : 'var(--pulse-tier-gale)';
        const zoneName = row.querySelector('.pc-zone-label')?.textContent || '';

        // eslint-disable-next-line no-unsanitized/property -- inputs pre-escaped by section renderers
        detailEl.innerHTML = `<div class="pc-detail-header"><span class="pc-detail-name">${escapeHtml(zoneName)}</span><span class="pc-detail-close">✕ Close</span></div>
          <div class="pc-detail-stats">
            <div class="pc-stat"><div class="pc-stat-value">${avg}</div><div class="pc-stat-label">Avg Score</div></div>
            <div class="pc-stat"><div class="pc-stat-value">${escapeHtml(bestHour)}</div><div class="pc-stat-label">Best Hour</div></div>
            <div class="pc-stat"><div class="pc-stat-value">${escapeHtml(worstHour)}</div><div class="pc-stat-label">Worst Hour</div></div>
          </div>
          <div class="pc-detail-bar"><div class="pc-detail-bar-fill" style="width:${avg}%;background:${sanitizeCssValue(barColor)}"></div></div>`;
        detailEl.classList.add('pc-active');
        const closeBtn = detailEl.querySelector('.pc-detail-close');
        if (closeBtn) closeBtn.addEventListener('click', (ev) => {
          ev.stopPropagation();
          selectedIdx = null;
          rows.forEach((/** @type {Element} */ r) => r.classList.remove('pc-selected'));
          detailEl.classList.remove('pc-active');
        }, { signal: heatmapSignal });
      }, { signal: heatmapSignal });
    });

    // Per-cell/slot tooltip: handles both heatmap (.cells) and timeline (.strip-container) modes
    const sectionEl = this._shadow.querySelector('.pc-section-comfort-strip');
    if (!sectionEl) return;
    const heatmapTooltip = createStripTooltip();
    heatmapTooltip.element.dataset.owner = 'heatmap';
    const heatmapBody = sectionEl.querySelector('.pc-heatmap-body');
    if (heatmapBody) {
      /** @type {HTMLElement} */ (heatmapBody).style.position = 'relative';
      heatmapBody.querySelectorAll(':scope > .pc-strip-tooltip[data-owner="heatmap"]').forEach((el) => el.remove());
      heatmapBody.appendChild(heatmapTooltip.element);
      heatmapSignal.addEventListener('abort', () => heatmapTooltip.element.remove(), { once: true });
    }
    const firstRef = heatmapBody?.querySelector('.pc-cells') || heatmapBody?.querySelector('.pc-strip-container');

    // Heatmap mode: per-cell tooltip
    const cellContainersForTooltip = sectionEl.querySelectorAll('.pc-cells');
    cellContainersForTooltip.forEach((/** @type {Element} */ container) => {
      container.addEventListener('pointermove', (/** @type {*} */ ev) => {
        if (ev.pointerType === 'touch') return;
        const cellEl = ev.target?.closest?.('.pc-cell');
        if (!cellEl) { heatmapTooltip.hide(); return; }
        const hour = cellEl.getAttribute('data-hour') || '';
        const score = cellEl.getAttribute('data-score');
        const text = score ? `${hour}: Score ${score}` : `${hour}: --`;
        const refRect = firstRef?.getBoundingClientRect();
        if (refRect) {
          heatmapTooltip.show(refRect, ev.clientX - refRect.left, text);
        }
      }, { signal: heatmapSignal });
      container.addEventListener('pointerleave', () => heatmapTooltip.hide(), { signal: heatmapSignal });
      container.addEventListener('pointerdown', (/** @type {*} */ ev) => {
        if (ev.pointerType !== 'touch') return;
        const cellEl = ev.target?.closest?.('.pc-cell');
        if (!cellEl) return;
        const hour = cellEl.getAttribute('data-hour') || '';
        const score = cellEl.getAttribute('data-score');
        const text = score ? `${hour}: Score ${score}` : `${hour}: --`;
        const refRect = firstRef?.getBoundingClientRect();
        if (refRect) {
          heatmapTooltip.show(refRect, ev.clientX - refRect.left, text);
          setTimeout(() => heatmapTooltip.hide(), 2000);
        }
      }, { signal: heatmapSignal });
    });

    // Timeline mode: per-slot tooltip via data-slots JSON
    const stripContainers = sectionEl.querySelectorAll('.pc-strip-container');
    stripContainers.forEach((/** @type {Element} */ strip) => {
      const slotsAttr = strip.getAttribute('data-slots');
      /** @type {*[]|null} */
      let cachedSlots = null;
      try { if (slotsAttr) cachedSlots = JSON.parse(slotsAttr); } catch { /* card's own attribute; parse failure only if mid-update truncation */ }

      strip.addEventListener('pointermove', (/** @type {*} */ ev) => {
        if (ev.pointerType === 'touch' || !cachedSlots) return;
        const rect = strip.getBoundingClientRect();
        const idx = pointerToSlotIndex(ev.clientX, rect, cachedSlots.length);
        const slot = cachedSlots[idx];
        if (slot) {
          const text = slot.v !== null ? `${slot.l}: Score ${slot.v}` : `${slot.l}: --`;
          heatmapTooltip.show(rect, ev.clientX - rect.left, text);
        }
      }, { signal: heatmapSignal });
      strip.addEventListener('pointerleave', () => heatmapTooltip.hide(), { signal: heatmapSignal });
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
      }, { signal: heatmapSignal });
    });

    // Crosshair: vertical line across all zone rows
    const heatmapCrosshair = heatmapBody?.querySelector('.pc-strip-crosshair');
    if (heatmapBody && heatmapCrosshair && firstRef) {
      const heatmapLabelOffset = firstRef.getBoundingClientRect().left - heatmapBody.getBoundingClientRect().left;
      bindCrosshair(heatmapBody, /** @type {HTMLElement} */ (heatmapCrosshair), firstRef, heatmapLabelOffset, heatmapSignal);
    }

    // Drag-to-select time range: handles both .cells and .strip-container
    const dragContainers = sectionEl.querySelectorAll('.pc-cells, .pc-strip-container');
    dragContainers.forEach((/** @type {Element} */ container) => {
      const slotsAttr = container.getAttribute('data-slots');
      /** @type {*[]|null} */
      let cachedDragSlots = null;
      try { if (slotsAttr) cachedDragSlots = JSON.parse(slotsAttr); } catch { /* card's own attribute; parse failure only if mid-update truncation */ }
      bindDragSelect(container, cachedDragSlots, heatmapTooltip, '', heatmapSignal);
    });
  }

  /** Bind energy flow ribbon/label click → select zone, show detail, dim others. */
  _bindEnergyFlowInteractions() {
    const energyFlowSignal = this._resetAbort('_energyFlowAbort');
    for (const section of this._shadow.querySelectorAll('.pc-section-energy-flow')) {
      const ribbons = section.querySelectorAll('path[data-zone]');
      if (ribbons.length === 0) continue;

      /* A kept section can already be dimmed from an earlier bind; read the selection back from the DOM. */
      /** @type {string|null} */
      let selectedZone = [...ribbons].some((r) => r.classList.contains('pc-dimmed'))
        ? ([...ribbons].find((r) => !r.classList.contains('pc-dimmed'))?.getAttribute('data-zone') ?? null)
        : null;

      ribbons.forEach((/** @type {Element} */ ribbon) => {
        ribbon.classList.add('pc-ribbon');
        ribbon.addEventListener('click', () => {
          const zone = ribbon.getAttribute('data-zone');
          if (!zone) return;
          if (selectedZone === zone) {
            selectedZone = null;
            ribbons.forEach((/** @type {Element} */ r) => r.classList.remove('pc-dimmed'));
            return;
          }
          selectedZone = zone;
          ribbons.forEach((/** @type {Element} */ r) => {
            r.classList.toggle('pc-dimmed', r.getAttribute('data-zone') !== zone);
          });
        }, { signal: energyFlowSignal });
      });
    }
  }

  /** Bind crosshair + tooltip on zone sparkline containers only. */
  _bindSparklineCrosshairs() {
    const sparklineSignal = this._resetAbort('_sparklineAbort');
    // Clean up previous instances (prevents accumulation on re-bind after history refresh)
    this._shadow.querySelectorAll('.pc-strip-tooltip-fixed').forEach((el) => el.remove());
    this._shadow.querySelectorAll('.pc-sparkline-crosshair').forEach((el) => el.remove());

    const containers = this._shadow.querySelectorAll(
      '.pc-section-zones .pc-sparkline-filled, .pc-section-zones .pc-zone-row-pulse',
    );
    if (containers.length === 0) return;

    // One fixed tooltip for all zone sparklines: appended to shadow root to escape overflow:hidden
    const tooltip = createFixedTooltip();
    this._shadow.appendChild(tooltip.element);

    containers.forEach((/** @type {Element} */ container) => {
      const el = /** @type {HTMLElement} */ (container);
      el.style.position = 'relative';

      const crosshair = document.createElement('div');
      crosshair.className = 'pc-strip-crosshair pc-sparkline-crosshair';
      crosshair.style.display = 'none';
      crosshair.style.top = '0';
      crosshair.style.bottom = '0';
      el.appendChild(crosshair);

      // Parse sparkline data once at bind time
      const dataAttr = el.getAttribute('data-sparkline');
      /** @type {*} */
      let cachedParsed = null;
      try { if (dataAttr) cachedParsed = JSON.parse(dataAttr); } catch { /* card's own attribute; parse failure only if mid-update truncation */ }

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
      }, { signal: sparklineSignal });
      el.addEventListener('pointerleave', () => {
        crosshair.style.display = 'none';
        tooltip.hide();
      }, { signal: sparklineSignal });

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
      }, { signal: sparklineSignal });
    });
  }

  /** Bind click listeners on zone ranking metric tabs (read data-metric, re-render, re-bind). */
  _bindZoneRankingTabs() {
    const signal = this._resetAbort('_zoneRankingTabsAbort');
    const sectionEl = this._shadow.querySelector('.pc-section-zone-ranking');
    if (!sectionEl) return;
    const tabs = sectionEl.querySelectorAll('.pc-ranking-tab');
    if (tabs.length === 0) return;

    const zones = this._config?._zones || [];
    const discovery = this._discovery;
    if (!discovery) return;

    for (const tab of tabs) {
      const selectMetric = () => {
        const newMetric = /** @type {string} */ (/** @type {HTMLElement} */ (tab).dataset.metric);
        if (!newMetric) return;
        const states = this._hass?.states || {};
        const html = renderZoneRankingSection(zones, states, discovery, newMetric);
        if (!html) return;
        const tpl = document.createElement('template');
        // eslint-disable-next-line no-unsanitized/property -- inputs pre-escaped by section renderers
        tpl.innerHTML = html;
        const newEl = tpl.content.firstElementChild;
        if (newEl) {
          sectionEl.replaceWith(newEl);
          this._bindZoneRankingTabs();
          this._bindSectionChipActions();
        }
      };

      makeActivatable(/** @type {HTMLElement} */ (tab), selectMetric, { signal, role: 'tab' });
      tab.addEventListener('click', selectMetric, { signal });
    }
  }

  /** Bind click listeners on timeline-group tabs (mutate active_tab in config, re-render in place, re-bind). */
  _bindTimelineGroupTabs() {
    const signal = this._resetAbort('_timelineGroupTabsAbort');
    const groupEls = this._shadow.querySelectorAll('.pc-section-timeline-group');
    if (groupEls.length === 0) return;
    const zones = this._config?._zones || [];
    const discovery = this._discovery;
    if (!discovery) return;

    for (const groupEl of groupEls) {
      const sectionIndex = Number((/** @type {HTMLElement} */ (groupEl)).dataset.sectionIndex);
      if (Number.isNaN(sectionIndex)) continue;
      const tabs = groupEl.querySelectorAll('.pc-timeline-group-tab');
      for (const tab of tabs) {
        const selectTab = () => {
          const newTab = /** @type {string} */ (/** @type {HTMLElement} */ (tab).dataset.tab);
          if (!newTab || !['thermal', 'state'].includes(newTab)) return;
          const sections = [...((this._config?.sections) || [])];
          const current = /** @type {*} */ (sections[sectionIndex]);
          if (!current || typeof current === 'string' || current.type !== 'timeline_group') return;
          const next = { ...current, active_tab: newTab };
          sections[sectionIndex] = next;
          this._config = { ...this._config, sections };
          const states = this._hass?.states || {};
          const hc = this._historyCache;
          const html = renderTimelineGroupSection(/** @type {*} */ (next), zones, states, discovery, hc, resolveHassTimeZone(this._hass));
          if (!html) return;
          const withIndex = html.replace(
            /^<div class="pc-section([^"]*)"/,
            `<div class="pc-section$1" data-section-index="${sectionIndex}"`,
          );
          const tpl = document.createElement('template');
          // eslint-disable-next-line no-unsanitized/property -- inputs pre-escaped by section renderers
          tpl.innerHTML = withIndex;
          const newEl = tpl.content.firstElementChild;
          if (newEl) {
            groupEl.replaceWith(newEl);
            this._bindTimelineGroupTabs();
            this._bindTimelineGroupCellTooltip();
            this._bindTimelineInteractions();
            this._bindStateTimelineInteractions();
          }
        };

        makeActivatable(/** @type {HTMLElement} */ (tab), selectTab, { signal, role: 'tab' });
        tab.addEventListener('click', selectTab, { signal });
      }
    }
  }

  /** Wire per-cell tooltip + vertical crosshair on every `.pc-strip-rows` wrapper hosting `.pc-cells`. */
  _bindTimelineGroupCellTooltip() {
    /* Abort the previous bind first; otherwise each re-render or tab click appends another tooltip + listeners to every wrapper. */
    const signal = this._resetAbort('_timelineGroupCellTooltipAbort');

    /* Remove only this binder's tooltips; the thermal-strip binder owns its own in the same wrapper. */
    this._shadow.querySelectorAll('.pc-strip-rows > .pc-strip-tooltip[data-owner="cells"]').forEach((el) => el.remove());

    const allRows = this._shadow.querySelectorAll('.pc-strip-rows');
    if (allRows.length === 0) return;
    const tempUnit = resolveTempUnit(this._hass?.states?.[(this._config?._zones || [])[0]?.entity]?.attributes);

    for (const rowsEl of allRows) {
      const cellContainers = rowsEl.querySelectorAll('.pc-cells');
      if (cellContainers.length === 0) continue;

      /* State cells carry categorical data-score, heatmap cells numeric; suppress unit suffix on state. */
      const isStateCells = !!rowsEl.querySelector('.pc-state-timeline-cells');

      const crosshair = /** @type {HTMLElement|null} */ (rowsEl.querySelector('.pc-strip-crosshair'));

      const tooltip = createStripTooltip();
      tooltip.element.dataset.owner = 'cells';
      /** @type {HTMLElement} */ (rowsEl).style.position = 'relative';
      rowsEl.appendChild(tooltip.element);
      signal.addEventListener('abort', () => tooltip.element.remove(), { once: true });

      for (const container of cellContainers) {
        container.addEventListener('pointermove', (/** @type {*} */ ev) => {
          if (ev.pointerType === 'touch') return;
          const cellEl = ev.target?.closest?.('.pc-cell');
          if (!cellEl) {
            tooltip.hide();
            if (crosshair) crosshair.style.display = 'none';
            return;
          }
          const hour = cellEl.getAttribute('data-hour') || '';
          const val = cellEl.getAttribute('data-score');
          const text = val
            ? (isStateCells ? `${hour}: ${val}` : `${hour}: ${val}${tempUnit}`)
            : `${hour}: --`;
          const refRect = container.getBoundingClientRect();
          tooltip.show(refRect, ev.clientX - refRect.left, text);
          if (crosshair) {
            const rowsRect = rowsEl.getBoundingClientRect();
            crosshair.style.left = `${ev.clientX - rowsRect.left}px`;
            crosshair.style.display = '';
          }
        }, { signal });
        container.addEventListener('pointerleave', () => {
          tooltip.hide();
          if (crosshair) crosshair.style.display = 'none';
        }, { signal });
        container.addEventListener('pointerdown', (/** @type {*} */ ev) => {
          if (ev.pointerType !== 'touch') return;
          const cellEl = ev.target?.closest?.('.pc-cell');
          if (!cellEl) return;
          const hour = cellEl.getAttribute('data-hour') || '';
          const val = cellEl.getAttribute('data-score');
          const text = val
            ? (isStateCells ? `${hour}: ${val}` : `${hour}: ${val}${tempUnit}`)
            : `${hour}: --`;
          const refRect = container.getBoundingClientRect();
          tooltip.show(refRect, ev.clientX - refRect.left, text);
          if (crosshair) {
            const rowsRect = rowsEl.getBoundingClientRect();
            crosshair.style.left = `${ev.clientX - rowsRect.left}px`;
            crosshair.style.display = '';
          }
          setTimeout(() => {
            tooltip.hide();
            if (crosshair) crosshair.style.display = 'none';
          }, 2000);
        }, { signal });
      }
    }
  }

  /** Bind click listeners on system-health-group tabs (mirror of _bindTimelineGroupTabs). */
  _bindSystemHealthGroupTabs() {
    const signal = this._resetAbort('_systemHealthGroupTabsAbort');
    const groupEls = this._shadow.querySelectorAll('.pc-section-system-health-group');
    if (groupEls.length === 0) return;
    const discovery = this._discovery;
    if (!discovery) return;

    for (const groupEl of groupEls) {
      const sectionIndex = Number((/** @type {HTMLElement} */ (groupEl)).dataset.sectionIndex);
      if (Number.isNaN(sectionIndex)) continue;
      const tabs = groupEl.querySelectorAll('.pc-system-health-group-tab');
      for (const tab of tabs) {
        const selectTab = () => {
          const newTab = /** @type {string} */ (/** @type {HTMLElement} */ (tab).dataset.tab);
          if (!newTab || !['bridge', 'homekit', 'api'].includes(newTab)) return;
          const sections = [...((this._config?.sections) || [])];
          const current = /** @type {*} */ (sections[sectionIndex]);
          if (!current || typeof current === 'string' || current.type !== 'system_health_group') return;
          const next = { ...current, active_tab: newTab };
          sections[sectionIndex] = next;
          this._config = { ...this._config, sections };
          const states = this._hass?.states || {};
          const hc = this._historyCache;
          const html = renderSystemHealthGroupSection(/** @type {*} */ (next), discovery?.hubEntities || {}, states, hc, resolveHassTimeZone(this._hass));
          if (!html) return;
          const withIndex = html.replace(
            /^<div class="pc-section([^"]*)"/,
            `<div class="pc-section$1" data-section-index="${sectionIndex}"`,
          );
          const tpl = document.createElement('template');
          // eslint-disable-next-line no-unsanitized/property -- inputs pre-escaped by section renderers
          tpl.innerHTML = withIndex;
          const newEl = tpl.content.firstElementChild;
          if (newEl) {
            groupEl.replaceWith(newEl);
            this._bindSystemHealthGroupTabs();
            this._startCountdownTimer();
            this._bindSectionChipActions();
          }
        };

        makeActivatable(/** @type {HTMLElement} */ (tab), selectTab, { signal, role: 'tab' });
        tab.addEventListener('click', selectTab, { signal });
      }
    }
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
    // Render every time label in the HA-configured zone (browser-local when
    // the user's profile prefers 'local'), so a user physically abroad sees
    // home wall-clock times across all timeline / API / strip sections.
    const timeZone = resolveHassTimeZone(this._hass);
    switch (type) {
      case 'zones': return renderZonesSection(zones, config, states, discovery, hc, timeZone);
      case 'api': return renderApiSection(hub, states, /** @type {*} */ (section), hc, timeZone);
      case 'graph': return renderGraphSection(/** @type {*} */ (section), zones, hc, states, discovery);
      case 'donut': return renderDonutSection(/** @type {*} */ (section), hub, states);
      case 'bridge': return renderBridgeSection(hub, states, hc);
      case 'homekit': return renderHomekitSection(hub, states, hc);
      case 'weather': return renderWeatherSection(hub, states, hc);
      case 'environment': return renderEnvironmentSection(zones, states, discovery);
      case 'thermal': return renderThermalSection(zones, states, discovery);
      case 'schedule': return renderScheduleSection(zones, states, discovery);
      case 'thermal_strip': return renderThermalStripSection(zones, /** @type {*} */ (section), states, discovery, hc, timeZone);
      case 'comfort_strip': return renderComfortStripSection(zones, /** @type {*} */ (section), states, discovery, hc, timeZone);
      case 'energy_flow': return renderEnergyFlowSection(zones, states, discovery);
      case 'energy_flow_ac': return renderEnergyFlowSection(zones, states, discovery, 'ac');
      case 'radial': return renderRadialSection(zones, this._withCardOutdoor(section), states, discovery, hc);
      case 'home_status': return renderHomeStatusSection(zones, states, discovery, this._config || {});
      case 'zone_ranking': return renderZoneRankingSection(zones, states, discovery);
      case 'timeline_group': return renderTimelineGroupSection(/** @type {*} */ (section), zones, states, discovery, hc, timeZone);
      case 'system_health_group': return renderSystemHealthGroupSection(/** @type {*} */ (section), discovery?.hubEntities || {}, states, hc, timeZone);
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
      el.classList.add('pc-temp-transitioning');
      setTimeout(() => el.classList.remove('pc-temp-transitioning'), 1100);
    };

    const rows = this._shadow.querySelectorAll('.pc-zone-row');
    if (rows[zoneIndex]) {
      flash(rows[zoneIndex].querySelector('.pc-power-bar-fill'));
    }

    const pulseRows = this._shadow.querySelectorAll('.pc-zone-row-pulse');
    flash(pulseRows[zoneIndex] || null);

    const arcGroups = this._shadow.querySelectorAll('.pc-arc-group');
    if (arcGroups[zoneIndex]) {
      flash(arcGroups[zoneIndex].querySelector('.pc-arc-path'));
    }
  }

  /** Differential update for zone rows. */
  _updateZones() {
    if (!this._elements.zonesSection || !this._config || !this._hass || !this._discovery) return;

    /* Compare against _prevStates BEFORE updateZonesSection mutates the DOM: transition glow needs the pre/post temp delta. */
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

    const chipsReplaced = updateZonesSection(
      this._elements.zonesSection,
      this._config._zones || [],
      this._config,
      this._hass.states,
      this._discovery,
      this._prevStates,
      this._historyCache,
      resolveHassTimeZone(this._hass),
    );
    if (chipsReplaced) {
      this._bindZoneActions();
      this._bindChipActions();
      this._bindSparklineCrosshairs();
    }
  }

  /** Differential update for system sections. */
  _updateSections() {
    if (!this._hass || !this._discovery || !this._config) return;
    const states = this._hass.states;
    const discovery = this._discovery;
    const zones = this._config._zones || [];

    // Use cached rerenderTargets: built in setConfig() / _runDiscovery()
    const rerenderTargets = this._rerenderTargets;
    if (!rerenderTargets) return;

    /** @type {Set<string>} */
    const replaced = new Set();
    const uiState = this._captureUiState();

    /* Ribbon classes follow the zone state; patching them in place keeps an open detail panel, the selection and tooltips. */
    const ribbonsChanged = zones.some((z) => zoneWatchIds(z, discovery, ['heating_power', 'ac_power']).some((eid) => watchedStateChanged(this._prevStates[eid], states[eid])));
    if (ribbonsChanged) {
      for (const section of this._shadow.querySelectorAll('.pc-section-thermal-strip, .pc-section-timeline-group')) {
        section.querySelectorAll('.pc-timeline-row, .pc-state-row').forEach((row, i) => {
          if (!zones[i]) return;
          const next = rowStateClass(resolveZoneContext(zones[i], discovery, states).zoneState).trim().split(' ');
          row.classList.remove(...[...row.classList].filter((c) => c.startsWith('pc-row-')));
          row.classList.add(...next);
        });
      }
    }

    for (const target of rerenderTargets) {
      const oldEls = this._shadow.querySelectorAll(target.selector);
      if (oldEls.length === 0) continue;
      const watchIds = typeof target.watchIds === 'function' ? target.watchIds() : target.watchIds;
      if (watchIds.length === 0) continue;

      const changed = watchIds.some((eid) => {
        const cur = states[eid];
        const prev = this._prevStates[eid];
        return watchedStateChanged(prev, cur);
      });
      if (!changed) continue;

      for (const oldEl of oldEls) {
        const index = oldEl.getAttribute('data-section-index');
        const html = target.render(Number(index ?? -1), oldEl);
        if (!html) continue;
        const tpl = document.createElement('template');
        // eslint-disable-next-line no-unsanitized/property -- inputs pre-escaped by section renderers
        tpl.innerHTML = html;
        const newEl = tpl.content.firstElementChild;
        if (newEl) {
          if (index !== null) newEl.setAttribute('data-section-index', index);
          oldEl.replaceWith(newEl);
          replaced.add(target.selector);
        }
      }
    }

    const replacedTypes = Object.keys(SECTION_SELECTORS).filter((type) => replaced.has(SECTION_SELECTORS[type]));
    if (replacedTypes.length > 0) this._rebindAfterReplace(replacedTypes);

    // Energy flow: differential update preserves SVG <animate> flow animations; falls back to full re-render if zone count changed or section missing.
    let energyFlowReplaced = false;
    for (const energyFlowEl of /** @type {NodeListOf<HTMLElement>} */ (this._shadow.querySelectorAll('.pc-section-energy-flow'))) {
      const variant = energyFlowEl.dataset.variant === 'ac' ? 'ac' : 'heating';
      const efChanged = zones.some((z) => {
        return zoneWatchIds(z, discovery, ['heating_power', 'ac_power']).some((eid) => {
          const cur = states[eid];
          const prev = this._prevStates[eid];
          return watchedStateChanged(prev, cur);
        });
      });
      if (efChanged) {
        const updated = updateEnergyFlowSection(energyFlowEl, zones, states, discovery, variant);
        if (!updated) {
          // Zone count changed or structure mismatch; full re-render
          const html = renderEnergyFlowSection(zones, states, discovery, variant);
          if (html) {
            const tpl = document.createElement('template');
            // eslint-disable-next-line no-unsanitized/property -- inputs pre-escaped by section renderers
            tpl.innerHTML = html;
            const newEl = tpl.content.firstElementChild;
            if (newEl) {
              energyFlowEl.replaceWith(newEl);
              replaced.add('.pc-section-energy-flow');
              energyFlowReplaced = true;
            }
          }
        }
      }
    }
    if (energyFlowReplaced) {
      this._bindEnergyFlowInteractions();
      this._bindSectionChipActions();
    }
    this._restoreUiState(uiState);
  }

  /** Re-render the card-level hero block on zone state or history cache updates (live state plus 24h thermal strip data). */
  _updateHero() {
    if (!this._config || !this._hass || !this._discovery) return;
    if (this._config.show_hero === false) return;
    const heroEl = this._shadow.querySelector('.pc-hero');
    if (!heroEl) return;
    const config = this._config;
    const states = this._hass.states;
    const discovery = this._discovery;
    const zones = config._zones || [];
    const heroZoneStates = heroZoneStatesOf(config, discovery, states);
    const outdoor = resolveOutdoorTemp(config, discovery, states);
    const resolveSensor = (/** @type {string} */ entityId) => {
      const idx = zones.findIndex((/** @type {*} */ z) => z.entity === entityId);
      if (idx < 0) return entityId;
      const zoneConfig = zones[idx];
      const zoneName = extractZoneName(entityId);
      const zoneEntities = discovery?.zoneEntities?.[zoneName] || {};
      const r = resolveHistoryTempSensor(entityId, states, zoneEntities, zoneConfig);
      return r?.entityId || entityId;
    };
    const historyMap = buildHistoryMap(zones, this._historyCache, resolveSensor);
    const heroHtml = renderHero(heroZoneStates, config, historyMap, outdoor);
    if (!heroHtml) return;
    const tpl = document.createElement('template');
    // eslint-disable-next-line no-unsanitized/property -- renderHero output is pre-escaped (same pattern as section renderers)
    tpl.innerHTML = heroHtml;
    const newEl = tpl.content.firstElementChild;
    /* Keep the live node when its markup is unchanged so hover and animation state survive. */
    if (newEl && newEl.outerHTML !== heroEl.outerHTML) heroEl.replaceWith(newEl);
  }

  /** Re-render only history-dependent sections after cache update, preserving other sections' DOM, state and listeners; re-binds only replaced ones. */
  _updateHistorySections() {
    if (!this._config || !this._hass || !this._discovery) return;

    const config = this._config;
    const states = this._hass.states;
    const discovery = this._discovery;
    const zones = config._zones || [];
    const sections = config.sections || [{ type: 'zones' }];
    /** @type {string[]} */
    const replacedTypes = [];
    const uiState = this._captureUiState();

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const type = typeof section === 'string' ? section : section.type;
      if (!HISTORY_SECTIONS.has(type)) continue;

      const selector = SECTION_SELECTORS[type];
      if (!selector) continue;

      const oldEl = this._shadow.querySelector(`${selector}[data-section-index="${i}"]`);
      if (!oldEl) continue;

      const html = this._renderSection(section, zones, states, discovery);
      if (!html) continue;

      /* Hot-replace bypasses the first-render data-section-index injection, so inject here too for tab click handlers. */
      const indexed = html.replace(
        /^<div class="pc-section([^"]*)"/,
        `<div class="pc-section$1" data-section-index="${i}"`,
      );

      const tpl = document.createElement('template');
      // eslint-disable-next-line no-unsanitized/property -- inputs pre-escaped by section renderers
      tpl.innerHTML = indexed;
      const newEl = tpl.content.firstElementChild;
      if (newEl) {
        oldEl.replaceWith(newEl);
        replacedTypes.push(type);
      }
    }

    if (replacedTypes.length === 0) return;

    this._rebindAfterReplace(replacedTypes);
    this._restoreUiState(uiState);
  }

  /** Record the selected row and Ranking tab of each selectable section, keyed by selector and position. */
  _captureUiState() {
    return UI_STATE_SECTION_SELECTORS.flatMap((selector) => [...this._shadow.querySelectorAll(selector)].map((el, ordinal) => ({
      selector,
      ordinal,
      row: [...el.querySelectorAll(UI_STATE_ROW_SELECTOR)].findIndex((r) => r.classList.contains('pc-selected')),
      metric: el.getAttribute('data-metric'),
      zone: el.querySelector('path[data-zone].pc-dimmed') ? (el.querySelector('path[data-zone]:not(.pc-dimmed)')?.getAttribute('data-zone') ?? null) : null,
    }))).filter((s) => s.row >= 0 || s.metric || s.zone);
  }

  /** Re-apply a captured state with the same synthetic click on the same row or tab; a missing or already selected one is skipped. */
  _restoreUiState(/** @type {ReturnType<PulseClimateCard['_captureUiState']>} */ state) {
    for (const { selector, ordinal, row, metric, zone } of state) {
      const el = this._shadow.querySelectorAll(selector)[ordinal];
      if (!el) continue;
      if (zone) {
        const ribbon = [...el.querySelectorAll('path[data-zone]')].find((r) => r.getAttribute('data-zone') === zone);
        const alreadySelected = !!el.querySelector('path[data-zone].pc-dimmed') && !ribbon?.classList.contains('pc-dimmed');
        if (ribbon && !alreadySelected) ribbon.dispatchEvent(new Event('click'));
        continue;
      }
      if (metric && el.getAttribute('data-metric') !== metric) {
        [...el.querySelectorAll('.pc-ranking-tab')].find((t) => /** @type {HTMLElement} */ (t).dataset.metric === metric)?.dispatchEvent(new Event('click'));
      }
      const target = row >= 0 ? el.querySelectorAll(UI_STATE_ROW_SELECTOR)[row] : null;
      if (target && !target.classList.contains('pc-selected')) target.dispatchEvent(new Event('click'));
    }
  }

  /** Re-run the binders of every replaced section type, so a live replacement and a history refresh end in the same listeners. */
  _rebindAfterReplace(/** @type {string[]} */ types) {
    const has = (/** @type {string} */ t) => types.includes(t);
    if (has('zones')) {
      this._elements.zonesSection = this._shadow.querySelector('.pc-section-zones');
      this._bindZoneActions();
      this._bindChipActions();
      this._bindSparklineCrosshairs();
    }
    if (has('api')) this._elements.apiSection = this._shadow.querySelector('.pc-section-api');
    /* `_startCountdownTimer` captured the .chip-next-sync element at bind time; it is detached after replaceWith. */
    if (has('api') || has('system_health_group')) this._startCountdownTimer();
    if (has('radial')) this._bindRadialInteractions();
    if (has('zone_ranking')) this._bindZoneRankingTabs();
    if (has('thermal_strip')) {
      this._bindTimelineInteractions();
      /* thermal-strip heatmap mode delegates to thermal-heatmap-view, so re-bind the .pc-cells tooltip handler for it and any timeline_group. */
      this._bindTimelineGroupCellTooltip();
    }
    if (has('comfort_strip')) this._bindHeatmapInteractions();
    if (has('timeline_group')) {
      this._bindTimelineGroupTabs();
      this._bindTimelineGroupCellTooltip();
      this._bindTimelineInteractions();
      this._bindStateTimelineInteractions();
    }
    if (has('system_health_group')) this._bindSystemHealthGroupTabs();
    const chipTypes = ['zones', 'api', 'bridge', 'homekit', 'weather', 'environment', 'thermal', 'schedule', 'home_status', 'zone_ranking', 'thermal_strip', 'timeline_group', 'system_health_group', 'graph'];
    if (types.some((t) => chipTypes.includes(t))) this._bindSectionChipActions();
  }

  /** Refresh history cache if expired, then re-render chart sections. */
  async _refreshHistoryIfNeeded() {
    if (!this._hass || !this._config) return;
    /** @type {{validIds: string[], validClimateIds: string[]}} */
    let ids;
    try {
      ids = this._collectHistoryIds();
    } catch (e) {
      // Id collection reads discovery and hass; a throw must not become an unhandled rejection from the hass setter.
      warn('History id collection failed: %O', e);
      return;
    }
    const { validIds, validClimateIds } = ids;
    if (validIds.length === 0) return;
    if (cacheCovers(this._historyCache, validIds, validClimateIds)) return;

    /* Adopt the shared module-level cache only when every key this card needs is fresh in it. */
    const shared = getSharedCache();
    if (cacheCovers(shared, validIds, validClimateIds)) {
      this._historyCache = shared;
      this._rebuildSparklinePathCache();
      const withData = Object.values(shared.data).filter((/** @type {*} */ d) => d.length >= 2).length;
      if (withData > 0) {
        this._updateHistorySections();
        this._updateHero();
      }
      return;
    }

    if (Date.now() - this._historyLastAttempt < SPARKLINE_INTERVAL) return;
    if (this._historyFetchInProgress) return;
    this._historyLastAttempt = Date.now();
    this._historyFetchInProgress = true;
    const startGen = this._historyGen;
    try {
      await this._fetchHistory();
    } catch (e) {
      warn('History fetch failed, using cached data: %O', e);
    } finally {
      /* A newer generation owns the flag now; only the matching call may clear it. */
      if (startGen === this._historyGen) this._historyFetchInProgress = false;
    }
  }

  /**
   * Collect the history keys this card reads, through the same resolvers the section renderers use.
   * @returns {{validIds: string[], validClimateIds: string[]}}
   */
  _collectHistoryIds() {
    if (!this._hass || !this._config) return { validIds: [], validClimateIds: [] };
    const zones = this._config._zones || [];
    /** @type {string[]} */
    const entityIds = [];
    const states = this._hass.states;
    for (const zone of zones) {
      const zoneName = extractZoneName(zone.entity);
      const zoneEntities = this._discovery?.zoneEntities?.[zoneName] || {};
      const tempResolved = resolveHistoryTempSensor(zone.entity, states, zoneEntities, zone);
      entityIds.push(tempResolved.entityId);
      const humResolved = resolveHistoryHumSensor(zone.entity, states, zoneEntities, zone);
      if (humResolved) entityIds.push(humResolved.entityId);
    }

    if (this._discovery?.hubEntities?.call_history) {
      entityIds.push(this._discovery.hubEntities.call_history);
    }
    if (this._discovery?.hubEntities?.api_usage) {
      entityIds.push(this._discovery.hubEntities.api_usage);
    }
    if (this._discovery?.hubEntities?.boiler_flow_temp) {
      entityIds.push(this._discovery.hubEntities.boiler_flow_temp);
    }
    if (this._discovery?.hubEntities?.homekit_reads_saved) {
      entityIds.push(this._discovery.hubEntities.homekit_reads_saved);
    }
    if (this._discovery?.hubEntities?.homekit_writes_saved) {
      entityIds.push(this._discovery.hubEntities.homekit_writes_saved);
    }
    if (this._discovery?.hubEntities?.outside_temp) {
      entityIds.push(this._discovery.hubEntities.outside_temp);
    }

    /* A graph `entities` override may name climates outside `zones`; fetch the sensors it will read. */
    for (const section of this._config?.sections || []) {
      const graphEntities = typeof section === 'string' ? null : /** @type {*} */ (section)?.entities;
      if (!Array.isArray(graphEntities)) continue;
      for (const climateId of graphEntities) {
        if (typeof climateId !== 'string') continue;
        const { temp, hum } = resolveGraphHistorySensors(climateId, states, this._discovery, zones);
        entityIds.push(temp.entityId);
        if (hum) entityIds.push(hum.entityId);
      }
    }

    const validIds = [...new Set(entityIds.filter((/** @type {string} */ id) => id && typeof id === 'string' && id.includes('.')))];

    /* timeline_group's State tab needs climate state history; fetch climate.* entities only when such a section is configured. */
    const sectionsList = this._config?.sections || [];
    const needsStateHistory = sectionsList.some(
      (/** @type {*} */ s) => (typeof s === 'string' ? s : s?.type) === 'timeline_group',
    );
    /** @type {string[]} */
    const climateIds = [];
    if (needsStateHistory) {
      for (const zone of zones) {
        if (typeof zone?.entity === 'string' && zone.entity.startsWith('climate.')) {
          climateIds.push(zone.entity);
        }
      }
    }
    const validClimateIds = [...new Set(climateIds.filter((/** @type {string} */ id) => id.includes('.')))];
    return { validIds, validClimateIds };
  }

  /** Fetch the collected history keys into the cache; the caller owns the in-progress flag. */
  async _fetchHistory() {
    if (!this._hass || !this._config) return;
    // Capture generation at fetch start to detect setConfig / _runDiscovery replacing the zone set while awaiting.
    const fetchGen = this._historyGen;
    const { validIds, validClimateIds } = this._collectHistoryIds();
    if (validIds.length === 0) return;

    try {
      const [data, stateData] = await Promise.all([
        fetchSparklineData(this._hass, validIds, 24),
        validClimateIds.length > 0
          ? fetchClimateStateHistory(this._hass, validClimateIds, 24)
          : Promise.resolve(/** @type {Record<string, {t:number, state:string, power:number}[]>} */ ({})),
      ]);
      /* Stale guard: otherwise old zone data overwrites the new cache and leaks into the shared module cache. */
      if (fetchGen !== this._historyGen) {
        warn('History fetch result discarded; config changed during fetch');
        return;
      }
      this._historyCache = updateCache(this._historyCache, data, stateData);
      this._rebuildSparklinePathCache();
      updateSharedCache(data, stateData);
      /* The card was removed while the fetch was in flight; the cache is kept, but nothing may be armed on a detached card. */
      if (!this.isConnected) return;
      const withData = Object.values(data).filter((/** @type {*} */ d) => d.length >= 2).length;
      const withStateData = Object.values(stateData).filter((/** @type {*} */ d) => d.length >= 1).length;
      if (withData > 0 || withStateData > 0) {
        this._updateHistorySections();
        this._updateHero();
      }
    } catch (e) {
      warn('History fetch failed, using cached data: %O', e);
    }
  }

  _cacheWatchedStates() {
    if (!this._hass || !this._config || !this._discovery) return;
    const states = this._hass.states;
    const zones = this._config._zones || [];
    const hub = this._discovery.hubEntities;
    /** @type {Record<string, *>} */
    const watched = {};

    // Zone climate entities + discovered per-zone sensors
    for (const z of zones) {
      for (const id of zoneBoundEntityIds(z, this._discovery)) {
        if (states[id]) watched[id] = states[id];
      }
    }

    for (const z of zones) {
      for (const id of comfortInputIds(z, this._discovery, states)) {
        if (states[id]) watched[id] = states[id];
      }
    }

    for (const eid of Object.values(hub)) {
      if (eid && states[eid]) watched[eid] = states[eid];
    }

    for (const eid of [...outdoorWatchIds(this._config, null, this._discovery, states), ...this._radialOutdoorIds()]) {
      if (states[eid]) watched[eid] = states[eid];
    }

    this._prevStates = watched;
  }

  disconnectedCallback() {
    /* Preserve history cache across disconnect/reconnect to avoid blank sections while history re-fetches. */
    if (this._countdownTimer) { clearInterval(this._countdownTimer); this._countdownTimer = null; }
    if (this._rafId) { cancelAnimationFrame(this._rafId); this._rafId = null; }
    if (this._trailTimer) { clearTimeout(this._trailTimer); this._trailTimer = null; }
    this._chipAbort?.abort();
    this._sectionChipAbort?.abort();
    this._radialAbort?.abort();
    this._timelineAbort?.abort();
    this._stateTimelineAbort?.abort();
    this._heatmapAbort?.abort();
    this._energyFlowAbort?.abort();
    this._sparklineAbort?.abort();
    this._zoneRankingTabsAbort?.abort();
    this._timelineGroupTabsAbort?.abort();
    this._timelineGroupCellTooltipAbort?.abort();
    this._systemHealthGroupTabsAbort?.abort();
    this._stopRadialAnimations();
    const rows = this._shadow?.querySelectorAll('.pc-zone-row') || [];
    for (const row of rows) {
      const cleanup = /** @type {*} */ (row).__pulseCleanup;
      if (typeof cleanup === 'function') cleanup();
    }
  }

  connectedCallback() {
    /* Attach the master pulse phase once per host (idempotent); the CSS animation lives on :host in styles.js. */
    attachPhase(this);
    if (this._config && this._hass && !this._shadow.querySelector('ha-card')) {
      if (!this._discovery) this._runDiscovery();
      this._fullRender();
      this._refreshHistoryIfNeeded();
    } else if (this._config && this._hass && this._shadow.querySelector('ha-card')) {
      /* Reconnect after dashboard edit: timers/listeners were stopped in disconnectedCallback, so re-bind shimmer, sheen and listeners. */
      this._bindSectionInteractions();
      this._bindZoneActions();
      this._bindChipActions();
      this._bindSectionChipActions();
      this._startCountdownTimer();
    }
    /* Updates skipped while detached are caught up through the normal throttle, sharing the setter's frame slot. */
    if (this._config && this._hass && this._discovery && !this._rafId && !this._trailTimer) {
      this._rafId = requestAnimationFrame(() => {
        this._rafId = null;
        this._runUpdate();
      });
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
   * Report grid options for HA's sections (grid) view. Uses `rows: 'auto'` so
   * the cell sizes to content: sections vary wildly in height (a heatmap or
   * timeline is many rows tall, the API donut ~80px), so any fixed row count
   * would clip and overlap the card below. See {@link buildGridOptions}.
   * @returns {{columns: number, min_columns: number, rows: 'auto'}}
   */
  getGridOptions() {
    return buildGridOptions(3);
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

if (!customElements.get(CARD_NAME)) {
  customElements.define(CARD_NAME, PulseClimateCard);
}

/** @type {*} */ (window).customCards = /** @type {*} */ (window).customCards || [];
/** @type {*} */ (window).customCards.push({
  type: CARD_NAME,
  name: 'Pulse Climate Card',
  description: 'Modular climate dashboard card with Tado CE enrichment',
});

console.info(`%c PULSE-CLIMATE-CARD %c v${VERSION} `, 'background:#4CAF50;color:white;font-weight:bold', 'background:#333;color:#fff');
