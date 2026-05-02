/**
 * @module pulse-weather/types
 * @description JSDoc typedefs for Pulse Weather Card configuration, state
 * objects, discovery results, and section data structures.
 */

// ── Config Types ────────────────────────────────────────────────────

/**
 * @typedef {object} SectionConfig
 * @property {string} type - Section type identifier.
 * @property {string} [mode] - Section-specific mode (e.g. 'both', 'hourly', 'daily').
 * @property {string} [scale] - AQI scale ('eu' or 'us').
 * @property {string} [speed_mode] - Wind display mode ('speed' or 'gust').
 * @property {string} [aqi_entity] - Override AQI entity ID.
 * @property {Array<string>} [alert_entities] - Override alert entity IDs.
 */

/**
 * @typedef {object} PulseWeatherConfig
 * @property {string} type - Card type ('custom:pulse-weather-card').
 * @property {string} [weather_entity] - Primary weather entity ID.
 * @property {string} [atmos_source] - Atmos CE source slug override.
 * @property {Array<SectionConfig>} [sections] - Ordered section configs.
 */

// ── Discovery Types ─────────────────────────────────────────────────

/**
 * @typedef {object} WeatherDiscovery
 * @property {string} weatherEntityId - Primary weather.* entity ID.
 * @property {Object<string, string>} atmosCe - Map of sensor key → entity_id.
 * @property {string|null} sunEntityId - sun.sun entity ID.
 * @property {string|null} atmosSource - Resolved Atmos CE source slug.
 * @property {Array<string>} alertEntityIds - Discovered alert entity IDs.
 */

// ── Weather State Types ─────────────────────────────────────────────

/**
 * @typedef {object} WeatherState
 * @property {number} temperature - Current temperature (°C).
 * @property {number} feelsLike - Apparent temperature (°C).
 * @property {string} condition - HA weather condition string.
 * @property {number} humidity - Relative humidity (%).
 * @property {number} windSpeed - Wind speed (km/h).
 * @property {number} windBearing - Wind bearing (degrees).
 * @property {number} windGusts - Wind gust speed (km/h).
 * @property {number} dewPoint - Dew point (°C).
 * @property {number} visibility - Visibility (km).
 * @property {number} pressure - Atmospheric pressure (hPa).
 * @property {number} uvIndex - UV index.
 * @property {number|null} uvIndexClearSky - Clear-sky UV index (Atmos CE).
 * @property {number} tempLow - Day low temperature (°C).
 * @property {number} tempHigh - Day high temperature (°C).
 * @property {object|null} cloudCover - Cloud cover data from Atmos CE.
 * @property {number} cloudCover.total - Total cloud cover (%).
 * @property {number} cloudCover.low - Low cloud cover (%).
 * @property {number} cloudCover.mid - Mid cloud cover (%).
 * @property {number} cloudCover.high - High cloud cover (%).
 */

/**
 * @typedef {object} WindState
 * @property {number} speed - Wind speed (km/h).
 * @property {number} gusts - Wind gust speed (km/h).
 * @property {number} bearing - Wind bearing (degrees).
 */

// ── Forecast Types ──────────────────────────────────────────────────

/**
 * @typedef {object} HourlyForecast
 * @property {string} datetime - ISO datetime string.
 * @property {number} temperature - Temperature (°C).
 * @property {string} condition - HA weather condition string.
 * @property {number} [precipitation_probability] - Precipitation probability (%).
 */

/**
 * @typedef {object} DailyForecast
 * @property {string} datetime - ISO date string.
 * @property {number} temperature - High temperature (°C).
 * @property {number} templow - Low temperature (°C).
 * @property {string} condition - HA weather condition string.
 * @property {number} [precipitation_probability] - Precipitation probability (%).
 */

// ── Astro Types ─────────────────────────────────────────────────────

/**
 * @typedef {object} AstroState
 * @property {Date} now - Current time.
 * @property {Date} sunrise - Sunrise time.
 * @property {Date} sunset - Sunset time.
 * @property {Date|null} goldenAmStart - Golden hour morning start.
 * @property {Date|null} goldenAmEnd - Golden hour morning end.
 * @property {Date|null} goldenPmStart - Golden hour evening start.
 * @property {Date|null} goldenPmEnd - Golden hour evening end.
 * @property {Date|null} blueAm - Blue hour morning.
 * @property {Date|null} bluePm - Blue hour evening.
 * @property {string|null} moonPhase - Moon phase name string.
 * @property {number|null} moonIllum - Moon illumination (0–100).
 * @property {number|null} moonAge - Moon age in synodic days (0–29.53 exclusive).
 * @property {Date|null} moonrise - Moonrise time.
 * @property {Date|null} moonset - Moonset time.
 * @property {number|null} daylight - Daylight duration (hours).
 */

// ── Alert Types ─────────────────────────────────────────────────────

/**
 * @typedef {object} AlertData
 * @property {string} type - Alert type (rain, wind, snow, etc.).
 * @property {string} icon - MDI icon name.
 * @property {number} severity - Severity level (1–4).
 * @property {string} color - Severity color (hex).
 * @property {string} summary - Alert headline.
 * @property {string} desc - Alert description.
 * @property {boolean} active - Whether alert is currently active.
 * @property {number|null} hoursLeft - Hours remaining (active alerts).
 * @property {number|null} hoursUntil - Hours until start (upcoming alerts).
 * @property {number} progress - Progress percentage (0–100).
 * @property {Array<string>} locations - Affected location names.
 * @property {string|null} link - Official alert page URL.
 * @property {string} endTime - End time string (empty = until further notice).
 * @property {boolean} [isUntilFurtherNotice] - Whether alert is "until further notice".
 */

// ── Atmosphere Types ────────────────────────────────────────────────

/**
 * @typedef {object} AtmosState
 * @property {number|null} cape - CAPE value (J/kg).
 * @property {number|null} liftedIndex - Lifted index value.
 * @property {number|null} freezingLevel - Freezing level height (m).
 * @property {number|null} soilTemp - Soil temperature (°C).
 * @property {number|null} soilMoisture - Soil moisture (m³/m³).
 */

// ── AQI Types ───────────────────────────────────────────────────────

/**
 * @typedef {object} AqiState
 * @property {number} value - AQI numeric value.
 * @property {string|null} category - Atmos CE category string.
 * @property {string|null} color - Atmos CE CSS named color.
 * @property {number} maxScale - Max scale value for gauge (EU: 100, US: 300).
 */

/**
 * @typedef {object} PollutantData
 * @property {string} key - Sensor key.
 * @property {string} label - Display label (e.g. 'PM2.5').
 * @property {number} value - Current value.
 * @property {number} max - Max threshold for color coding.
 */

// ── Render Context ───────────────────────────────────────────────────

/**
 * @typedef {object} RenderContext
 * @property {Hass} hass - Home Assistant hass object.
 * @property {SectionConfig} config - Section config.
 * @property {WeatherDiscovery} discovery - Discovery result.
 * @property {HassEntity} weatherEntity - Weather entity state object.
 * @property {{hourly: Array<Record<string, unknown>>, daily: Array<Record<string, unknown>>}|null} [forecastData] - Forecast data.
 */

export {};
