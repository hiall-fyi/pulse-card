/**
 * @module pulse-climate/sections/weather
 * @description Render weather section for Tado CE with outdoor temp sparkline.
 */

import { escapeHtml } from '../../shared/utils.js';
import { temperatureToColor, renderSparklineHtml } from '../chart-primitives.js';

/**
 * Map weather condition to MDI icon.
 * @param {string} condition
 * @returns {string} MDI icon string.
 */
function weatherIcon(condition) {
  /** @type {Record<string, string>} */
  const map = {
    sunny: 'mdi:weather-sunny',
    clear: 'mdi:weather-night',
    cloudy: 'mdi:weather-cloudy',
    partlycloudy: 'mdi:weather-partly-cloudy',
    rainy: 'mdi:weather-rainy',
    snowy: 'mdi:weather-snowy',
    fog: 'mdi:weather-fog',
    windy: 'mdi:weather-windy',
    lightning: 'mdi:weather-lightning',
  };
  return map[(condition || '').toLowerCase()] || 'mdi:weather-cloudy';
}

/**
 * Render Weather section HTML.
 * @param {Record<string, string>} hubEntities - Discovered hub entity map.
 * @param {Record<string, *>} states - hass.states.
 * @param {import('../types.js').HistoryCache} [historyCache] - History cache for sparkline.
 * @returns {string} HTML string (empty if no entities found).
 */
export function renderWeatherSection(hubEntities, states, historyCache) {
  if (!hubEntities.outside_temp) return '';

  const temp = states[hubEntities.outside_temp]?.state;
  const condition = states[hubEntities.weather]?.state || '';
  const solar = hubEntities.solar_intensity ? states[hubEntities.solar_intensity]?.state : null;

  let html = `<div class="section section-weather">`;
  html += `<div class="section-label">Weather</div>`;
  html += `<div class="zone-chips">`;

  if (condition) {
    html += `<span class="chip"${hubEntities.weather ? ` data-entity="${escapeHtml(hubEntities.weather)}"` : ''}><ha-icon icon="${escapeHtml(weatherIcon(condition))}"></ha-icon>${escapeHtml(condition)}</span>`;
  }

  if (temp !== undefined && temp !== null) {
    html += `<span class="chip" data-entity="${escapeHtml(hubEntities.outside_temp)}"><ha-icon icon="mdi:thermometer"></ha-icon>${escapeHtml(temp)}${escapeHtml(states[hubEntities.outside_temp]?.attributes?.unit_of_measurement || '°C')}</span>`;
  }

  if (solar !== undefined && solar !== null) {
    html += `<span class="chip"${hubEntities.solar_intensity ? ` data-entity="${escapeHtml(hubEntities.solar_intensity)}"` : ''}><ha-icon icon="mdi:white-balance-sunny"></ha-icon>${escapeHtml(solar)}%</span>`;
  }

  html += `</div>`;

  // Outdoor temperature sparkline (24h trend)
  const tempEntityId = hubEntities.outside_temp;
  if (tempEntityId && historyCache) {
    const data = historyCache.data?.[tempEntityId] || [];
    const currentTemp = parseFloat(temp || '0');
    const sparkColor = !isNaN(currentTemp) ? temperatureToColor(currentTemp) : 'var(--primary-text-color)';
    html += renderSparklineHtml(data, 200, 30, sparkColor, 'weather-spark-grad', 'Outdoor temperature history');
  }

  html += `</div>`;
  return html;
}


