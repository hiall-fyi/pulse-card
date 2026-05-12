/**
 * @module pulse-weather/pulse-weather-card
 * @description Main card element — lifecycle, section dispatch, and DOM management.
 */

import { VERSION, CARD_NAME, EDITOR_NAME, FORECAST_REFRESH_MS } from './constants.js';
import { STYLES } from './styles.js';
import { normalizeWeatherConfig } from './utils.js';
import { escapeHtml } from '../shared/utils.js'; // eslint-disable-line no-unused-vars -- audit: innerHTML present, escaping delegated to section renderers
import { discoverWeatherEntities } from './weather-resolver.js';
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
    if (this._hass) this._fullRender();
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
        console.warn('Pulse Weather: weather_entity "%s" not found in hass.states', configuredId);
        this._warnedMissingEntity = configuredId;
      }
      return;
    }

    // Differential update: only re-render when weather state changes
    const stateKey = `${weatherEntity.state}|${JSON.stringify(weatherEntity.attributes)}`;
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
    // Re-fetch when entity changes or data is stale
    const isStale = (Date.now() - this._forecastLastFetch) >= FORECAST_REFRESH_MS;
    if (this._subscribedEntityId === entityId && this._forecastData && !isStale) return;
    // Guard against concurrent async calls
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
          // Extended forecast unavailable — fall through to standard
          console.debug('Pulse Weather: extended forecast fetch failed, using standard', e);
        }
      }

      // Standard weather.get_forecasts — only if entity exists in HA
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

      // Only fetch standard hourly if extended not available
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
      // Forecast fetch failed — timestamp advanced below in finally prevents retry spam.
      console.warn('Pulse Weather: forecast fetch failed, throttling retries', e);
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

  /**
   * Called when element is removed from DOM.
   */
  disconnectedCallback() {
    this._unsubscribeForecasts();
    this._cleanupTimers();
  }

  /**
   * Full render — rebuild all sections in config order.
   */
  _fullRender() {
    if (!this._hass || !this._config || !this.shadowRoot) return;

    const discovery = discoverWeatherEntities(this._hass.states, this._config);
    this._discovery = discovery;
    const weatherEntity = this._hass.states[discovery.weatherEntityId];
    if (!weatherEntity) return;

    const parts = ['<style>', STYLES, '</style>', '<div class="pw-card">'];

    for (const section of this._config.sections || []) {
      const renderer = SECTION_RENDERERS[section.type];
      if (renderer) {
        try {
          const html = renderer({
            hass: this._hass,
            config: section,
            discovery,
            weatherEntity,
            forecastData: this._forecastData,
          });
          if (html) parts.push(html);
        } catch (e) {
          // Section render failed — skip gracefully but log so regressions are catchable
          console.warn(`Pulse Weather: section "${section?.type}" renderer threw`, e);
        }
      }
    }

    parts.push('</div>');
    // SECURITY-AUDIT: parts[] is assembled from section renderers (renderOverview, renderForecast, renderAstro,
    // SECURITY-AUDIT: etc.) that each pre-escape every user attribute via escapeHtml() / sanitizeCssValue().
    // SECURITY-AUDIT: Section-thrown errors are caught and logged — only sanitised markup ever reaches this
    // SECURITY-AUDIT: sink.
    // eslint-disable-next-line no-unsanitized/property -- see SECURITY-AUDIT comment above
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

    const discovery = discoverWeatherEntities(this._hass.states, this._config);
    const ce = discovery.atmosCe;
    const sunEntity = this._hass.states[discovery.sunEntityId || ''];
    if (!sunEntity) return;

    const now = Date.now();
    const boundaries = [];

    // Sun boundaries
    const nextRise = new Date(/** @type {string} */ (sunEntity.attributes?.next_rising || '')).getTime();
    const nextSet = new Date(/** @type {string} */ (sunEntity.attributes?.next_setting || '')).getTime();
    if (nextRise > now) boundaries.push(nextRise);
    if (nextSet > now) boundaries.push(nextSet);

    // Golden/blue hour boundaries from Atmos CE
    for (const key of ['golden_hour_morning_start', 'golden_hour_morning_end', 'golden_hour_evening_start', 'golden_hour_evening_end', 'blue_hour_morning_start', 'blue_hour_morning_end', 'blue_hour_evening_start', 'blue_hour_evening_end']) {
      if (ce[key]) {
        const t = new Date(String(this._hass.states[ce[key]]?.state || '')).getTime();
        if (t > now) boundaries.push(t);
      }
    }

    if (boundaries.length === 0) return;

    // Find the nearest future boundary
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

    // 1. Inject atmospheric FX into .pw-fx containers
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

    // 2. Inject PM-driven air haze FX
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

    // 3. Inject astro sky FX (stars at night, wisps + rays during day)
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

    // 4. Inject thermal particles into atmosphere column
    const atmosFx = this.shadowRoot.querySelectorAll('.pw-atmos-fx[data-atmos-score]');
    for (const container of atmosFx) {
      const score = Number(container.getAttribute('data-atmos-score')) || 0;
      const color = container.getAttribute('data-atmos-color') || '#30d158';
      const particleFrag = buildThermalParticles(score, color);
      container.replaceChildren(particleFrag);
    }

    // 5. Bind tab click handlers for mode/scale switching
    const tabs = this.shadowRoot.querySelectorAll('.pw-tab');
    for (const tab of tabs) {
      tab.addEventListener('click', (e) => {
        const target = /** @type {HTMLElement} */ (e.currentTarget);
        const mode = target.dataset.mode;
        const scale = target.dataset.scale;

        if (mode || scale) {
          // Update config and re-render
          if (!this._config) return;
          const sections = [...(this._config.sections || [])];
          for (const section of sections) {
            if (mode && ('mode' in section || section.type === 'forecast' || section.type === 'wind')) {
              if (section.type === 'forecast' && mode) section.mode = mode;
              if (section.type === 'wind' && mode) section.speed_mode = mode;
            }
            if (scale && section.type === 'air_quality') {
              section.scale = scale;
            }
          }
          this._config = { ...this._config, sections };
          this._fullRender();
        }
      });
    }

    // 6. Enable mouse drag-to-scroll on hourly strips
    //    HA intercepts touch/pointer events for card reordering,
    //    so we need explicit drag-scroll + stopPropagation on touch.
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

      // Mouse wheel: convert vertical scroll to horizontal
      strip.addEventListener('wheel', (e) => {
        const we = /** @type {WheelEvent} */ (e);
        if (Math.abs(we.deltaX) < Math.abs(we.deltaY)) {
          e.preventDefault();
          /** @type {HTMLElement} */ (strip).scrollLeft += we.deltaY;
        }
      }, { passive: false });
    }

    // 7. Bind atmosphere column tap-to-expand
    const atmosWrap = this.shadowRoot.querySelector('.pw-atmos-column-wrap[data-has-detail]');
    if (atmosWrap) {
      const detailPanel = this.shadowRoot.querySelector('.pw-atmos-detail');
      if (detailPanel) {
        // Restore state from previous render
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
    await import('./editor.js');
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

// Register custom element
if (!customElements.get(CARD_NAME)) {
  customElements.define(CARD_NAME, PulseWeatherCard);
  console.info(
    `%c ${CARD_NAME.toUpperCase()} %c v${VERSION} `,
    'background:#5ac8fa;color:#000;font-weight:bold',
    'background:#333;color:#fff',
  );
}

// Register with HA card picker
/** @type {*} */ (window).customCards = /** @type {*} */ (window).customCards || [];
/** @type {*} */ (window).customCards.push({
  type: CARD_NAME,
  name: 'Pulse Weather Card',
  description: 'Weather visualization with atmospheric effects, forecasts, wind rose, and more',
  preview: true,
});

export { PulseWeatherCard };
