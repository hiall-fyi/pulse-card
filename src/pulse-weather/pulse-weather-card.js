/**
 * @module pulse-weather/pulse-weather-card
 * @description Main card element — lifecycle, section dispatch, and DOM management.
 */

import { VERSION, CARD_NAME, EDITOR_NAME, FORECAST_REFRESH_MS, LOG_PREFIX } from './constants.js';
import { STYLES } from './styles.js';
import { normalizeWeatherConfig } from './utils.js';
// eslint-disable-next-line no-unused-vars -- audit gate requires escapeHtml import on any file using innerHTML; escaping is delegated to section renderers
import { escapeHtml } from '../shared/utils.js';
import { discoverWeatherEntities, deriveSourceSlug } from './weather-resolver.js';
import { deriveTodaySunBoundaries, anchorEventOn } from './weather-primitives.js';
import { buildConditionFx, addAirHaze, addStars, addRays, addClouds } from './weather-fx.js';
import { renderOverview } from './sections/overview.js';
import { renderForecast } from './sections/forecast.js';
import { renderWind } from './sections/wind.js';
import { renderAirQuality } from './sections/air-quality.js';
import { renderAstro } from './sections/astro.js';
import { renderAlerts } from './sections/alerts.js';
import { renderAtmosphere, buildThermalParticles } from './sections/atmosphere.js';
import { renderMeteogram } from './sections/meteogram.js';

/**
 * Section renderer dispatch map.
 * @type {Readonly<Record<string, Function>>}
 */
const SECTION_RENDERERS = {
  overview: renderOverview,
  forecast: renderForecast,
  wind: renderWind,
  air_quality: renderAirQuality,
  astro: renderAstro,
  alerts: renderAlerts,
  atmosphere: renderAtmosphere,
  meteogram: renderMeteogram,
};

/**
 * Pulse Weather Card — standalone weather visualization card for Home Assistant.
 */
class PulseWeatherCard extends HTMLElement {
  /** Create card instance. */
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    /** @type {import('./types.js').PulseWeatherConfig|null} */
    this._config = null;
    /** @type {Hass|null} */
    this._hass = null;
    /** @type {string|null} */
    this._lastWeatherState = null;
    /** @type {boolean} */
    this._atmosExpanded = false;
    /** @type {object|null} */
    this._forecastData = null;
    /** @type {number} */
    this._forecastLastFetch = 0;
    /** @type {string|null} */
    this._subscribedEntityId = null;
    /** @type {string|null} */
    this._atmosConfigEntryId = null;
    /** @type {import('./types.js').WeatherDiscovery|null} */
    this._discovery = null;
    /** @type {boolean} */
    this._forecastFetching = false;
    /** @type {number|null} */
    this._phaseTimer = null;
    /** @type {number|null} */
    this._countdownTimer = null;
    /** @type {number|null} */
    this._minuteTimer = null;
    /** @type {string|null} Last configured entity id we warned about — prevents log spam on every hass tick. */
    this._warnedMissingEntity = null;
    /** @type {string|null} Last derived/configured slug we warned about for missing Atmos CE sensors. */
    this._warnedMissingAtmosCe = null;
    /**
     * Per-section pro-toggle state, keyed by section index. Persists
     * across re-renders so a periodic 60s tick doesn't silently flip
     * the user's toggle back to default. Reset on `setConfig` only,
     * matching the runtime-only design intent (page reload clears).
     * @type {Record<number, boolean>}
     */
    this._proState = {};
  }

  /**
   * Set card configuration.
   * @param {object} config - Raw card config from YAML.
   */
  setConfig(config) {
    if (!config) throw new Error('Invalid configuration');
    // Halt any timers from the prior config before the DOM is rebuilt,
    // otherwise scheduled phase transitions / countdowns fire against
    // stale state and can trigger a render under an old config.
    this._cleanupTimers();
    this._config = normalizeWeatherConfig(/** @type {Record<string, unknown>} */ (config));
    this._warnedMissingEntity = null;
    this._warnedMissingAtmosCe = null;
    // weather_entity / atmos_source may have changed; force re-discovery on next access.
    this._discovery = null;
    // Section indices are re-derived from the new YAML; existing
    // toggle state would key against stale indices, so wipe it.
    this._proState = {};
    if (this._hass) this._fullRender();
  }

  /**
   * Cached entity discovery. Result depends only on weather_entity / atmos_source
   * config + the current hass.states keys — neither moves at typical render rates,
   * so caching saves the per-render scan of ~50 sensor keys × hass.states lookups.
   * Invalidated on setConfig.
   * @returns {import('./types.js').WeatherDiscovery}
   */
  _getDiscovery() {
    if (!this._discovery) {
      this._discovery = discoverWeatherEntities(
        /** @type {Hass} */ (this._hass).states,
        /** @type {Record<string, *>} */ (this._config),
      );
    }
    return this._discovery;
  }

  /**
   * Build a fingerprint of every Atmos CE sensor state under the resolved
   * source slug. Used by the set-hass gate so atmospheric data updates
   * trigger a re-render even when the weather entity itself stays put.
   * @param {Hass} hass - Home Assistant hass object.
   * @returns {string}
   */
  _getCeFingerprint(hass) {
    const discovery = this._getDiscovery();
    const ce = discovery.atmosCe;
    const parts = [];
    for (const key of Object.keys(ce)) {
      const eid = ce[key];
      const e = hass.states[eid];
      if (e) parts.push(`${key}=${e.state}`);
    }
    return parts.join('|');
  }

  /**
   * Surface a once-per-slug warning when the user has an Atmos CE-dependent
   * section configured but discovery returned zero sensors. Most common
   * cause: the user renamed `weather.met_office_weather` to something else
   * after Atmos CE was installed, so the slug derived from the new name no
   * longer matches the sensor namespace. The card silently drops the
   * relevant sections (atmosphere / air_quality / meteogram-extended) and
   * the user is left guessing why.
   *
   * @param {Array<{type: string}>} sections - Configured sections.
   * @param {import('./types.js').WeatherDiscovery} discovery - Resolved discovery.
   */
  _warnIfAtmosCeMissing(sections, discovery) {
    const ATMOS_DEPENDENT = new Set(['atmosphere', 'air_quality', 'meteogram']);
    const wantsAtmos = sections.some((s) => ATMOS_DEPENDENT.has(s.type));
    if (!wantsAtmos) return;
    if (Object.keys(discovery.atmosCe).length > 0) return;

    const cfg = /** @type {Record<string, *>} */ (this._config);
    const triedSlug = cfg.atmos_source || deriveSourceSlug(discovery.weatherEntityId || '');
    if (this._warnedMissingAtmosCe === triedSlug) return;
    this._warnedMissingAtmosCe = triedSlug;
    const hint = cfg.atmos_source
      ? `Set atmos_source matches no sensor.${triedSlug}_* entities — check the slug.`
      : `Derived slug "${triedSlug}" matches no sensor.${triedSlug}_* entities. If you renamed your weather entity after installing Atmos CE, set atmos_source manually in the card config.`;
    console.warn(`${LOG_PREFIX} atmosphere / air_quality / meteogram sections configured but no Atmos CE sensors discovered. ${hint}`);
  }

  /**
   * Clear every timer owned by this card. Idempotent; safe to call repeatedly.
   */
  _cleanupTimers() {
    if (this._phaseTimer) { clearTimeout(this._phaseTimer); this._phaseTimer = null; }
    if (this._countdownTimer) { clearInterval(this._countdownTimer); this._countdownTimer = null; }
    if (this._minuteTimer) { clearInterval(this._minuteTimer); this._minuteTimer = null; }
  }

  /**
   * Set hass object — called by HA on every state change.
   * Uses differential update detection to avoid unnecessary re-renders.
   * @param {Hass} hass - Home Assistant hass object.
   */
  set hass(hass) {
    this._hass = hass;
    if (!this._config) return;

    const configuredId = this._config.weather_entity;
    const weatherId = configuredId
      || Object.keys(hass.states).find((eid) => eid.startsWith('weather.'))
      || '';
    const weatherEntity = hass.states[weatherId];
    if (!weatherEntity) {
      // Surface configured-but-missing entity once per unique id so users can
      // diagnose typos instead of staring at a blank card.
      if (configuredId && this._warnedMissingEntity !== configuredId) {
        console.warn(`${LOG_PREFIX} weather_entity "${configuredId}" not found in hass.states. Check the entity_id in your card config (likely a typo, or the integration was removed).`);
        this._warnedMissingEntity = configuredId;
      }
      return;
    }

    // Atmos CE sensors (CAPE, lifted_index, freeze level, wind shear, etc.)
    // can update without the weather entity itself changing. The atmosphere
    // column, storm narrative, and AQI gauge all read from these — gate must
    // see them or a CAPE swing from 200 → 1500 J/kg stays invisible until
    // the 60s minuteTimer fires.
    const ceFingerprint = this._getCeFingerprint(hass);
    const stateKey = `${weatherEntity.state}|${JSON.stringify(weatherEntity.attributes)}|${ceFingerprint}`;
    const stateChanged = stateKey !== this._lastWeatherState;
    if (stateChanged) {
      this._lastWeatherState = stateKey;
      this._fullRender();
    }

    // Always check forecast staleness — independent of weather state changes
    this._subscribeForecast(hass, weatherId);
  }

  /**
   * Fetch forecast data once. Prefers Atmos CE extended forecast (22 fields
   * including dew_point, cape) when available, falls back to standard
   * weather.get_forecasts (7 fields).
   * @param {Hass} hass - Home Assistant hass object.
   * @param {string} entityId - Weather entity ID.
   */
  async _subscribeForecast(hass, entityId) {
    const isStale = (Date.now() - this._forecastLastFetch) >= FORECAST_REFRESH_MS;
    if (this._subscribedEntityId === entityId && this._forecastData && !isStale) return;
    if (this._forecastFetching) return;
    this._forecastFetching = true;
    this._subscribedEntityId = entityId;

    // Always reset the fetching flag, even on early return / throw.
    // Previously the flag could stick permanently if hass.callWS was
    // undefined, leaving the card unable to ever fetch forecast again.
    try {
      if (!hass.callWS) return;

      // Try Atmos CE extended forecast first (22 fields including dew_point, cape)
      let extendedHourly = null;
      if (this._discovery?.atmosSource) {
        try {
          // Find config entry ID from any Atmos CE entity (cached after first lookup)
          if (!this._atmosConfigEntryId) {
            const entityReg = /** @type {Array<Record<string, unknown>>} */ (
              await hass.callWS({ type: 'config/entity_registry/list' }).catch(() => [])
            );
            const atmosEntity = entityReg.find((e) => e.platform === 'atmos_ce');
            this._atmosConfigEntryId = /** @type {string|null} */ (atmosEntity?.config_entry_id || null);
          }
          if (this._atmosConfigEntryId) {
            const extResult = await hass.callWS({
              type: 'call_service',
              domain: 'atmos_ce',
              service: 'get_extended_forecast',
              service_data: { config_entry_id: this._atmosConfigEntryId, type: 'hourly' },
              return_response: true,
            }).catch(() => null);
            const extResp = /** @type {Record<string, unknown>|null} */ (extResult);
            const extResponse = /** @type {Record<string, unknown>|undefined} */ (extResp?.response);
            if (extResponse?.forecast) {
              extendedHourly = /** @type {Array<Record<string, unknown>>} */ (extResponse.forecast);
            }
          }
        } catch (e) {
          console.debug(`${LOG_PREFIX} extended forecast fetch failed, falling back to standard hourly`, e);
        }
      }

      let dailyResult = null;
      if (entityId && hass.states[entityId]) {
        dailyResult = await hass.callWS({
          type: 'call_service',
          domain: 'weather',
          service: 'get_forecasts',
          target: { entity_id: entityId },
          service_data: { type: 'daily' },
          return_response: true,
        }).catch(() => null);
      }

      let standardHourly = null;
      if (!extendedHourly && entityId && hass.states[entityId]) {
        const hourlyResult = await hass.callWS({
          type: 'call_service',
          domain: 'weather',
          service: 'get_forecasts',
          target: { entity_id: entityId },
          service_data: { type: 'hourly' },
          return_response: true,
        }).catch(() => null);
        const hResp = /** @type {Record<string, unknown>|null} */ (hourlyResult);
        const hResponse = /** @type {Record<string, unknown>|undefined} */ (hResp?.response);
        const hourlyEntry = /** @type {Record<string, unknown>|undefined} */ (hResponse?.[entityId]);
        standardHourly = /** @type {Array<Record<string, unknown>>} */ (hourlyEntry?.forecast || []);
      }

      const dResp = /** @type {Record<string, unknown>|null} */ (dailyResult);
      const dResponse = /** @type {Record<string, unknown>|undefined} */ (dResp?.response);
      const dailyEntry = /** @type {Record<string, unknown>|undefined} */ (dResponse?.[entityId]);

      this._forecastData = {
        hourly: extendedHourly || standardHourly || [],
        daily: /** @type {Array<Record<string, unknown>>} */ (dailyEntry?.forecast || []),
      };
      this._forecastLastFetch = Date.now();
      this._fullRender();
    } catch (e) {
      console.warn(`${LOG_PREFIX} forecast fetch failed; retries throttled to ${FORECAST_REFRESH_MS / 1000}s. Inspect the error below to diagnose. Common causes: weather entity offline, integration disabled, network failure.`, e);
      this._forecastLastFetch = Date.now();
    } finally {
      this._forecastFetching = false;
    }
  }

  /**
   * Unsubscribe from forecast subscriptions (cleanup).
   */
  _unsubscribeForecasts() {
    this._subscribedEntityId = null;
    this._forecastLastFetch = 0;
  }

  disconnectedCallback() {
    this._unsubscribeForecasts();
    this._cleanupTimers();
  }

  /**
   * Full render — rebuild all sections in config order.
   */
  _fullRender() {
    if (!this._hass || !this._config || !this.shadowRoot) return;

    const discovery = this._getDiscovery();
    const weatherEntity = this._hass.states[discovery.weatherEntityId];
    if (!weatherEntity) return;

    const parts = ['<style>', STYLES, '</style>', '<div class="pw-card">'];

    const sectionList = this._config.sections || [];
    this._warnIfAtmosCeMissing(sectionList, discovery);
    for (let i = 0; i < sectionList.length; i++) {
      const section = sectionList[i];
      const renderer = SECTION_RENDERERS[section.type];
      if (renderer) {
        try {
          const html = renderer({
            hass: this._hass,
            config: section,
            discovery,
            weatherEntity,
            forecastData: this._forecastData,
            // Section index in the config + the persisted pro-toggle
            // state for that index. Renderers that have a view-swap
            // pro view forward `proInitial` to the shell so the toggle
            // survives periodic re-renders.
            sectionIndex: i,
            proPersisted: Boolean(this._proState[i]),
          });
          if (html) parts.push(html);
        } catch (e) {
          console.warn(`${LOG_PREFIX} section "${section?.type}" renderer threw — section will be skipped, other sections continue. Please share the error below when reporting.`, e);
        }
      }
    }

    parts.push('</div>');
    // eslint-disable-next-line no-unsanitized/property -- inputs pre-escaped by section renderers
    this.shadowRoot.innerHTML = parts.join('');
    this._postRender(discovery);

    // Schedule re-render at next sky phase boundary (golden/blue hour transitions)
    this._schedulePhaseTransition();

    // Periodic 60s re-render for arc progress and time-dependent elements.
    // Create once per card lifecycle; _fullRender itself shouldn't reset the
    // timer or a dashboard with many sections will never let the tick fire.
    if (!this._minuteTimer) {
      this._minuteTimer = setInterval(() => {
        this._lastWeatherState = null;
        if (this._hass) this._fullRender();
      }, 60000);
    }

    // Countdown timer — tied to .pw-astro-countdown presence in the DOM.
    // The element identity can change across renders, so a short-lived
    // countdown per-render remains correct; it stops itself when the
    // element is gone and self-clears on expiry.
    if (this._countdownTimer) { clearInterval(this._countdownTimer); this._countdownTimer = null; }
    if (this.shadowRoot.querySelector('.pw-astro-countdown')) {
      this._countdownTimer = setInterval(() => {
        const el = /** @type {HTMLElement|null} */ (this.shadowRoot?.querySelector('.pw-astro-countdown'));
        if (!el) { clearInterval(/** @type {number} */ (this._countdownTimer)); this._countdownTimer = null; return; }
        const ms = Number(el.dataset.target) - Date.now();
        if (ms <= 0) { clearInterval(/** @type {number} */ (this._countdownTimer)); this._countdownTimer = null; this._lastWeatherState = null; this._fullRender(); return; }
        const sec = Math.floor(ms / 1000);
        const h = Math.floor(sec / 3600);
        const m = Math.floor((sec % 3600) / 60);
        const s = sec % 60;
        el.textContent = (h > 0 ? h + 'h ' + m + 'm' : m + 'm ' + s + 's') + (el.dataset.suffix || '');
      }, 1000);
    }
  }

  /**
   * Schedule a single re-render at the next sky phase boundary.
   * Only fires at golden hour start/end, blue hour start/end, sunrise, sunset.
   */
  _schedulePhaseTransition() {
    if (this._phaseTimer) { clearTimeout(this._phaseTimer); this._phaseTimer = null; }
    if (!this._hass || !this._config) return;

    const discovery = this._getDiscovery();
    const ce = discovery.atmosCe;
    const sunEntity = this._hass.states[discovery.sunEntityId || ''];
    if (!sunEntity) return;

    const nowDate = new Date();
    const now = nowDate.getTime();
    const boundaries = [];

    // Sun boundaries — next_rising / next_setting are already "next
    // future event" by HA convention.
    const nextRisingAttr = /** @type {string|undefined} */ (sunEntity.attributes?.next_rising);
    const nextSettingAttr = /** @type {string|undefined} */ (sunEntity.attributes?.next_setting);
    const { todaySunrise, todaySunset } =
      deriveTodaySunBoundaries(nowDate, nextRisingAttr, nextSettingAttr);
    const nextRise = sunEntity.attributes?.next_rising
      ? new Date(/** @type {string} */ (sunEntity.attributes.next_rising)).getTime()
      : NaN;
    const nextSet = sunEntity.attributes?.next_setting
      ? new Date(/** @type {string} */ (sunEntity.attributes.next_setting)).getTime()
      : NaN;
    if (Number.isFinite(nextRise) && nextRise > now) boundaries.push(nextRise);
    if (Number.isFinite(nextSet) && nextSet > now) boundaries.push(nextSet);

    // Atmos CE event-time sensors. Anchor on today's sunrise (AM)
    // or sunset (PM); push both the anchored boundary AND its +24h
    // candidate (the next occurrence of the same phase). Whichever
    // is the next future event becomes the timer target via
    // Math.min below.
    const sensorAnchor = {
      golden_hour_morning_start: todaySunrise, golden_hour_morning_end: todaySunrise,
      blue_hour_morning_start: todaySunrise, blue_hour_morning_end: todaySunrise,
      golden_hour_evening_start: todaySunset, golden_hour_evening_end: todaySunset,
      blue_hour_evening_start: todaySunset, blue_hour_evening_end: todaySunset,
    };
    for (const [key, anchor] of Object.entries(sensorAnchor)) {
      if (!ce[key]) continue;
      const raw = new Date(String(this._hass.states[ce[key]]?.state || ''));
      if (isNaN(raw.getTime())) continue;
      const anchored = anchorEventOn(raw, anchor);
      if (!anchored) continue;
      const t = anchored.getTime();
      if (t > now) boundaries.push(t);
      const tNext = t + 86400000;
      if (tNext > now) boundaries.push(tNext);
    }

    if (boundaries.length === 0) return;

    const nextBoundary = Math.min(...boundaries);
    const delay = nextBoundary - now + 1000; // +1s buffer to ensure we're past the boundary

    this._phaseTimer = setTimeout(() => {
      this._phaseTimer = null;
      this._lastWeatherState = null; // force re-render
      if (this._hass) this._fullRender();
    }, delay);
  }

  /**
   * Post-render DOM hooks — inject FX elements and bind tab interactions.
   * Called after innerHTML is set, so DOM elements are available.
   * @param {import('./types.js').WeatherDiscovery} _discovery - Discovery result.
   */
  _postRender(_discovery) {
    if (!this.shadowRoot || !this._hass) return;

    const fxContainers = this.shadowRoot.querySelectorAll('.pw-fx[data-condition]');
    for (const container of fxContainers) {
      const condition = container.getAttribute('data-condition') || '';
      const isNight = container.getAttribute('data-night') === 'true';
      let cloudCover = null;
      try {
        const cloudData = container.getAttribute('data-cloud');
        if (cloudData && cloudData !== '""' && cloudData !== '') {
          cloudCover = JSON.parse(cloudData);
        }
      } catch {
        // data-cloud JSON parse failure — attribute set by our own render,
        // so only reachable if truncated mid-update; safe to ignore silently.
      }

      const frag = buildConditionFx(condition, isNight, cloudCover);
      container.replaceChildren(frag);
    }

    const aqiSections = this.shadowRoot.querySelectorAll('.pw-aqi[data-pm25]');
    for (const section of aqiSections) {
      const pm25 = Number(section.getAttribute('data-pm25')) || 0;
      const pm10 = Number(section.getAttribute('data-pm10')) || 0;
      const fxContainer = section.querySelector('.pw-fx');
      if (fxContainer && (pm25 > 0 || pm10 > 0)) {
        const frag = document.createDocumentFragment();
        addAirHaze(frag, pm25, pm10);
        fxContainer.replaceChildren(frag);
      }
    }

    const astroFx = this.shadowRoot.querySelectorAll('.pw-fx[data-astro-stars]');
    for (const container of astroFx) {
      const wantStars = container.getAttribute('data-astro-stars') === 'true';
      const isDay = container.getAttribute('data-astro-day') === 'true';
      const frag = document.createDocumentFragment();
      if (wantStars) {
        addStars(frag);
      }
      if (isDay) {
        addClouds(frag, 3, 0.5);
        addRays(frag);
      }
      container.replaceChildren(frag);
    }

    const atmosFx = this.shadowRoot.querySelectorAll('.pw-atmos-fx[data-atmos-score]');
    for (const container of atmosFx) {
      const score = Number(container.getAttribute('data-atmos-score')) || 0;
      const color = container.getAttribute('data-atmos-color') || '#30d158';
      const particleFrag = buildThermalParticles(score, color);
      container.replaceChildren(particleFrag);
    }

    /* Pro toggle — brand-mark corner button on each section. The section's
       `data-pro-action` attribute decides what the click does:
         view-swap  — flip data-pro on the section root, CSS swaps the
                      .pw-view-default / .pw-view-pro siblings. Runtime-only
                      state, resets on full re-render.
         wind-mode  — toggle the section config's speed_mode between 'speed'
                      and 'gust', then trigger a full re-render so the rose
                      centre + brand mark update in sync.
       Each click is scoped to the specific section that fired it via its
       index in shadowRoot's .pw-section list. Without this scope a
       multi-section-same-type config (two wind sections, two AQI sections)
       would broadcast every click to every section of that type and toggle
       them all together. */
    const allSections = [...this.shadowRoot.querySelectorAll('.pw-section')];
    const proToggles = this.shadowRoot.querySelectorAll('button.pw-brand-mark-corner');
    for (const btn of proToggles) {
      btn.addEventListener('click', (e) => {
        const target = /** @type {HTMLElement} */ (e.currentTarget);
        const section = /** @type {HTMLElement|null} */ (target.closest('.pw-section'));
        if (!section || !this._config) return;
        const sectionIndex = allSections.indexOf(section);
        if (sectionIndex < 0) return;
        const action = section.dataset.proAction || 'view-swap';

        // Config-mutating actions: deep-copy sections (shallow array
        // copy alone leaves the object references shared with the
        // pre-toggle config) and mutate only the clicked section.
        if (action === 'wind-mode' || action === 'meteo-horizon' || action === 'aqi-scale') {
          const sections = (this._config.sections || []).map((s, i) => (i === sectionIndex ? { ...s } : s));
          const target_section = sections[sectionIndex];
          if (!target_section) return;
          if (action === 'wind-mode' && target_section.type === 'wind') {
            target_section.speed_mode = target_section.speed_mode === 'gust' ? 'speed' : 'gust';
          } else if (action === 'meteo-horizon' && target_section.type === 'meteogram') {
            // Derive the CURRENT effective horizon from whichever setting
            // the renderer actually consumes — explicit `hours` wins if
            // set, else `horizon`, else default 'short'. Toggling from
            // `horizon` alone would no-op the first click when the user
            // has e.g. `hours: 24` set: handler flips horizon from
            // 'short' → 'long' but both produce a 24-hour chart, so the
            // user sees no change.
            const explicitHours = Number(target_section.hours);
            const currentLong = Number.isFinite(explicitHours) && explicitHours > 0
              ? explicitHours >= 18
              : target_section.horizon === 'long';
            target_section.horizon = currentLong ? 'short' : 'long';
            // Explicit `hours` would otherwise win over horizon — clear it
            // so the toggle drives the chart.
            if ('hours' in target_section) delete target_section.hours;
          } else if (action === 'aqi-scale' && target_section.type === 'air_quality') {
            target_section.scale = target_section.scale === 'us' ? 'eu' : 'us';
          }
          this._config = { ...this._config, sections };
          this._fullRender();
          return;
        }
        // Default: view-swap. Persist the new state on the card
        // instance so the next periodic re-render seeds proInitial
        // from `_proState[sectionIndex]` and the toggle survives.
        const next = section.dataset.pro === 'true' ? 'false' : 'true';
        section.dataset.pro = next;
        target.setAttribute('aria-pressed', next);
        this._proState[sectionIndex] = next === 'true';
      });
    }

    /* HA intercepts touch/pointer events for card reordering — we need explicit
       drag-scroll + stopPropagation on touch to keep horizontal swipes working. */
    const strips = this.shadowRoot.querySelectorAll('.pw-hourly-strip');
    for (const strip of strips) {
      let isDown = false;
      let startX = 0;
      let scrollLeft = 0;

      strip.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = /** @type {MouseEvent} */ (e).pageX - /** @type {HTMLElement} */ (strip).offsetLeft;
        scrollLeft = /** @type {HTMLElement} */ (strip).scrollLeft;
        /** @type {HTMLElement} */ (strip).style.cursor = 'grabbing';
      });
      strip.addEventListener('mouseleave', () => { isDown = false; /** @type {HTMLElement} */ (strip).style.cursor = ''; });
      strip.addEventListener('mouseup', () => { isDown = false; /** @type {HTMLElement} */ (strip).style.cursor = ''; });
      strip.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = /** @type {MouseEvent} */ (e).pageX - /** @type {HTMLElement} */ (strip).offsetLeft;
        /** @type {HTMLElement} */ (strip).scrollLeft = scrollLeft - (x - startX);
      });

      // Touch: stop propagation so HA doesn't intercept horizontal swipes
      strip.addEventListener('touchstart', (e) => { e.stopPropagation(); }, { passive: true });
      strip.addEventListener('touchmove', (e) => { e.stopPropagation(); }, { passive: true });

      strip.addEventListener('wheel', (e) => {
        const we = /** @type {WheelEvent} */ (e);
        if (Math.abs(we.deltaX) < Math.abs(we.deltaY)) {
          e.preventDefault();
          /** @type {HTMLElement} */ (strip).scrollLeft += we.deltaY;
        }
      }, { passive: false });
    }

    const atmosWrap = this.shadowRoot.querySelector('.pw-atmos-column-wrap[data-has-detail]');
    if (atmosWrap) {
      const detailPanel = this.shadowRoot.querySelector('.pw-atmos-detail');
      if (detailPanel) {
        if (this._atmosExpanded) {
          /** @type {HTMLElement} */ (detailPanel).style.maxHeight = `${detailPanel.scrollHeight}px`;
          atmosWrap.setAttribute('aria-expanded', 'true');
        }

        atmosWrap.addEventListener('click', () => {
          this._atmosExpanded = !this._atmosExpanded;
          if (this._atmosExpanded) {
            /** @type {HTMLElement} */ (detailPanel).style.maxHeight = `${detailPanel.scrollHeight}px`;
            atmosWrap.setAttribute('aria-expanded', 'true');
          } else {
            /** @type {HTMLElement} */ (detailPanel).style.maxHeight = '0';
            atmosWrap.setAttribute('aria-expanded', 'false');
          }
        });
      }
    }
  }

  /**
   * Return card height for HA layout.
   * @returns {number}
   */
  getCardSize() {
    const sectionCount = this._config?.sections?.length || 1;
    return Math.max(3, sectionCount * 3);
  }

  /**
   * Return grid options for HA dashboard.
   * @returns {object}
   */
  getGridOptions() {
    const rows = this.getCardSize();
    return { columns: 12, min_columns: 6, rows, min_rows: 3 };
  }

  /**
   * Lazy-load visual editor.
   * @returns {Promise<HTMLElement>}
   */
  static async getConfigElement() {
    await import('./pulse-weather-card-editor.js');
    return document.createElement(EDITOR_NAME);
  }

  /**
   * Return stub config for card picker.
   * @param {Hass} hass - Home Assistant hass object.
   * @returns {object}
   */
  static getStubConfig(hass) {
    const weatherEntity = Object.keys(hass.states).find((eid) => eid.startsWith('weather.'));
    return {
      type: `custom:${CARD_NAME}`,
      weather_entity: weatherEntity || 'weather.home',
      sections: [{ type: 'overview' }],
    };
  }
}

if (!customElements.get(CARD_NAME)) {
  customElements.define(CARD_NAME, PulseWeatherCard);
  console.info(
    `%c ${CARD_NAME.toUpperCase()} %c v${VERSION} `,
    'background:#5ac8fa;color:#000;font-weight:bold',
    'background:#333;color:#fff',
  );
}

/** @type {*} */ (window).customCards = /** @type {*} */ (window).customCards || [];
/** @type {*} */ (window).customCards.push({
  type: CARD_NAME,
  name: 'Pulse Weather Card',
  description: 'Weather visualization with atmospheric effects, forecasts, wind rose, and more',
  preview: true,
});

export { PulseWeatherCard };
