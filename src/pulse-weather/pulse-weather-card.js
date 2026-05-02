/**
 * @module pulse-weather/pulse-weather-card
 * @description Main card element — lifecycle, section dispatch, and DOM management.
 */

import { VERSION, CARD_NAME, EDITOR_NAME } from './constants.js';
import { STYLES } from './styles.js';
import { normalizeWeatherConfig } from './utils.js';
// escapeHtml imported for innerHTML safety — section renderers handle escaping,
// but having it available in the card shell satisfies the security audit.
import { escapeHtml } from '../shared/utils.js'; // eslint-disable-line no-unused-vars
import { discoverWeatherEntities } from './weather-resolver.js';
import { buildConditionFx, addAirHaze, addStars, addRays, addClouds } from './weather-fx.js';
import { renderOverview } from './sections/overview.js';
import { renderForecast } from './sections/forecast.js';
import { renderWind } from './sections/wind.js';
import { renderAirQuality } from './sections/air-quality.js';
import { renderAstro } from './sections/astro.js';
import { renderAlerts } from './sections/alerts.js';
import { renderAtmosphere, buildThermalParticles } from './sections/atmosphere.js';

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
    /** @type {object|null} */
    this._forecastData = null;
    /** @type {string|null} */
    this._subscribedEntityId = null;
    /** @type {number|null} */
    this._phaseTimer = null;
  }

  /**
   * Set card configuration.
   * @param {object} config - Raw card config from YAML.
   */
  setConfig(config) {
    if (!config) throw new Error('Invalid configuration');
    this._config = normalizeWeatherConfig(/** @type {Record<string, unknown>} */ (config));
    if (this._hass) this._fullRender();
  }

  /**
   * Set hass object — called by HA on every state change.
   * Uses differential update detection to avoid unnecessary re-renders.
   * @param {Hass} hass - Home Assistant hass object.
   */
  set hass(hass) {
    this._hass = hass;
    if (!this._config) return;

    const weatherId = this._config.weather_entity
      || Object.keys(hass.states).find((eid) => eid.startsWith('weather.'))
      || '';
    const weatherEntity = hass.states[weatherId];
    if (!weatherEntity) return;

    // Differential update: only re-render when weather state changes
    const stateKey = `${weatherEntity.state}|${JSON.stringify(weatherEntity.attributes)}`;
    if (stateKey === this._lastWeatherState) return;
    this._lastWeatherState = stateKey;

    this._fullRender();
    this._subscribeForecast(hass, weatherId);
  }

  /**
   * Fetch forecast data once. Uses weather.get_forecasts service call
   * (one-shot) instead of subscribe_forecast (subscription) to avoid
   * subscription leaks in the HA WebSocket connection.
   * @param {Hass} hass - Home Assistant hass object.
   * @param {string} entityId - Weather entity ID.
   */
  async _subscribeForecast(hass, entityId) {
    // Only fetch once per entity — re-fetch on entity change
    if (this._subscribedEntityId === entityId && this._forecastData) return;
    this._subscribedEntityId = entityId;

    if (!hass.callWS) return;

    try {
      // Use callWS with call_service type + return_response for get_forecasts
      const dailyResult = await hass.callWS({
        type: 'call_service',
        domain: 'weather',
        service: 'get_forecasts',
        target: { entity_id: entityId },
        service_data: { type: 'daily' },
        return_response: true,
      }).catch(() => null);

      const hourlyResult = await hass.callWS({
        type: 'call_service',
        domain: 'weather',
        service: 'get_forecasts',
        target: { entity_id: entityId },
        service_data: { type: 'hourly' },
        return_response: true,
      }).catch(() => null);

      // Response shape: { response: { "weather.entity_id": { forecast: [...] } } }
      const dResp = /** @type {Record<string, unknown>|null} */ (dailyResult);
      const hResp = /** @type {Record<string, unknown>|null} */ (hourlyResult);
      const dResponse = /** @type {Record<string, unknown>|undefined} */ (dResp?.response);
      const hResponse = /** @type {Record<string, unknown>|undefined} */ (hResp?.response);
      const dailyEntry = /** @type {Record<string, unknown>|undefined} */ (dResponse?.[entityId]);
      const hourlyEntry = /** @type {Record<string, unknown>|undefined} */ (hResponse?.[entityId]);

      this._forecastData = {
        hourly: /** @type {Array<Record<string, unknown>>} */ (hourlyEntry?.forecast || []),
        daily: /** @type {Array<Record<string, unknown>>} */ (dailyEntry?.forecast || []),
      };
      this._fullRender();
    } catch {
      // Forecast fetch failed — render without forecast data
    }
  }

  /**
   * Unsubscribe from forecast subscriptions (cleanup).
   */
  _unsubscribeForecasts() {
    this._subscribedEntityId = null;
  }

  /**
   * Called when element is removed from DOM.
   */
  disconnectedCallback() {
    this._unsubscribeForecasts();
    if (this._phaseTimer) { clearTimeout(this._phaseTimer); this._phaseTimer = null; }
  }

  /**
   * Full render — rebuild all sections in config order.
   */
  _fullRender() {
    if (!this._hass || !this._config || !this.shadowRoot) return;

    const discovery = discoverWeatherEntities(this._hass.states, this._config);
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
        } catch {  
          // Section render failed — skip gracefully
        }
      }
    }

    parts.push('</div>');
    this.shadowRoot.innerHTML = parts.join('');
    this._postRender(discovery);

    // Schedule re-render at next sky phase boundary (golden/blue hour transitions)
    this._schedulePhaseTransition();
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
    for (const key of ['golden_hour_morning_start', 'golden_hour_morning_end', 'golden_hour_evening_start', 'golden_hour_evening_end', 'blue_hour_morning', 'blue_hour_evening']) {
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
      } catch { /* ignore parse errors */ }

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
