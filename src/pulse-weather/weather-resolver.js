/**
 * @module pulse-weather/weather-resolver
 * @description Entity auto-discovery for weather, Atmos CE sensors, sun,
 * and alert entities. Scans hass.states to build a WeatherDiscovery object.
 */

import {
  ATMOS_CE_SENSOR_KEYS,
  ATMOS_CE_ALERT_KEYS,
  ATMOS_CE_WEATHER_SUFFIX,
  ATMOS_CE_MIN_SENSORS,
} from './constants.js';

/**
 * @typedef {import('./types.js').WeatherDiscovery} WeatherDiscovery
 */

/**
 * Derive source slug from a weather entity ID.
 * Strips 'weather.' prefix and '_weather' suffix.
 * Example: 'weather.met_office_weather' → 'met_office'
 * @param {string} entityId - Weather entity ID.
 * @returns {string} Source slug.
 */
export function deriveSourceSlug(entityId) {
  let slug = entityId.replace(/^weather\./, '');
  if (slug.endsWith(ATMOS_CE_WEATHER_SUFFIX)) {
    slug = slug.slice(0, -ATMOS_CE_WEATHER_SUFFIX.length);
  }
  return slug;
}

/**
 * Discover weather-related entities from hass.states.
 * @param {Object<string, object>} states - hass.states object.
 * @param {object} config - Card config.
 * @param {string} [config.weather_entity] - Primary weather entity ID.
 * @param {string} [config.atmos_source] - Atmos CE source slug override.
 * @param {string} [config.aqi_entity] - Override AQI entity ID.
 * @param {Array<string>} [config.alert_entities] - Override alert entity IDs.
 * @returns {WeatherDiscovery} Discovery result.
 */
export function discoverWeatherEntities(states, config) {
  const weatherEntityId = config.weather_entity
    || Object.keys(states).find((eid) => eid.startsWith('weather.'))
    || '';

  const slug = config.atmos_source || deriveSourceSlug(weatherEntityId);

  /** @type {Object<string, string>} */
  const atmosCe = {};
  for (const key of ATMOS_CE_SENSOR_KEYS) {
    const eid = `sensor.${slug}_${key}`;
    if (eid in states) {
      atmosCe[key] = eid;
    }
  }

  /* If fewer than MIN_SENSORS found, assume the integration isn't Atmos CE
     and zero out the discovery — better to render with weather-entity attrs
     only than to half-fill from another integration's sensor namespace. */
  const isAtmosCe = Object.keys(atmosCe).length >= ATMOS_CE_MIN_SENSORS;
  const validAtmosCe = isAtmosCe ? atmosCe : {};

  /** @type {Array<string>} */
  const alertEntityIds = [];

  if (config.alert_entities && config.alert_entities.length > 0) {
    for (const eid of config.alert_entities) {
      if (eid in states) alertEntityIds.push(eid);
    }
  } else if (isAtmosCe) {
    /* Atmos CE Meteoalarm uses a separate source name (e.g. "met_office_warnings"),
       so scan both {slug}_{key} and {slug}_warnings_{key} patterns. */
    for (const key of ATMOS_CE_ALERT_KEYS) {
      const eid = `sensor.${slug}_${key}`;
      const eidWarnings = `sensor.${slug}_warnings_${key}`;
      if (eid in states) {
        alertEntityIds.push(eid);
      } else if (eidWarnings in states) {
        alertEntityIds.push(eidWarnings);
      }
    }
    // Also check binary_sensor for alert_active (may use warnings prefix)
    const alertActiveBinary = `binary_sensor.${slug}_alert_active`;
    const alertActiveBinaryWarnings = `binary_sensor.${slug}_warnings_alert_active`;
    if (alertActiveBinary in states) {
      alertEntityIds.push(alertActiveBinary);
    } else if (alertActiveBinaryWarnings in states) {
      alertEntityIds.push(alertActiveBinaryWarnings);
    }
  }

  const sunEntityId = 'sun.sun' in states ? 'sun.sun' : null;

  return {
    weatherEntityId,
    atmosCe: validAtmosCe,
    sunEntityId,
    atmosSource: isAtmosCe ? slug : null,
    alertEntityIds,
  };
}
