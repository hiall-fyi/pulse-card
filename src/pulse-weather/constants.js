/**
 * @module pulse-weather/constants
 * @description Constants for Pulse Weather Card — section types, tier colors,
 * Beaufort scale, UV colors, AQI categories, animation constants, and
 * Atmos CE sensor keys.
 */

/** Pulse Weather Card version string. */
export const VERSION = '0.1.0';

/** Card custom element name. */
export const CARD_NAME = 'pulse-weather-card';

/** Editor custom element name. */
export const EDITOR_NAME = 'pulse-weather-card-editor';

// ── Section Types ───────────────────────────────────────────────────

/** Valid section type identifiers. */
export const SECTION_TYPES = /** @type {const} */ ([
  'overview',
  'forecast',
  'wind',
  'air_quality',
  'astro',
  'alerts',
  'atmosphere',
]);

// ── Tier Colors ─────────────────────────────────────────────────────

/** Wind/temperature tier color palette. */
export const TIER_COLORS = /** @type {const} */ ({
  calm: '#5ac8fa',
  moderate: '#30d158',
  strong: '#ff9f0a',
  gale: '#ff453a',
});

// ── Temperature Tiers ───────────────────────────────────────────────

/**
 * Temperature-to-color thresholds (°C). Evaluated in order — first match wins.
 * @type {ReadonlyArray<{max: number, color: string}>}
 */
export const TEMP_TIERS = [
  { max: 5, color: '#5ac8fa' },
  { max: 12, color: '#30d158' },
  { max: 18, color: '#ff9f0a' },
  { max: Infinity, color: '#ff453a' },
];

// ── Wind Tiers ──────────────────────────────────────────────────────

/**
 * Wind speed tier thresholds (km/h). Evaluated in order.
 * @type {ReadonlyArray<{max: number, tier: string}>}
 */
export const WIND_TIERS = [
  { max: 11, tier: 'calm' },
  { max: 38, tier: 'moderate' },
  { max: 61, tier: 'strong' },
  { max: Infinity, tier: 'gale' },
];

// ── Beaufort Scale ──────────────────────────────────────────────────

/**
 * Beaufort wind scale (0–12). Each entry: max km/h, scale number, name, desc.
 * @type {ReadonlyArray<{max: number, n: number, name: string, desc: string}>}
 */
export const BEAUFORT = [
  { max: 1, n: 0, name: 'Calm', desc: 'Smoke rises vertically' },
  { max: 5, n: 1, name: 'Light Air', desc: 'Smoke drifts slowly' },
  { max: 11, n: 2, name: 'Light Breeze', desc: 'Leaves rustle' },
  { max: 19, n: 3, name: 'Gentle Breeze', desc: 'Leaves and twigs move' },
  { max: 28, n: 4, name: 'Moderate Breeze', desc: 'Small branches move' },
  { max: 38, n: 5, name: 'Fresh Breeze', desc: 'Small trees sway' },
  { max: 49, n: 6, name: 'Strong Breeze', desc: 'Large branches move' },
  { max: 61, n: 7, name: 'Near Gale', desc: 'Whole trees sway' },
  { max: 74, n: 8, name: 'Gale', desc: 'Twigs break off' },
  { max: 88, n: 9, name: 'Strong Gale', desc: 'Slight structural damage' },
  { max: 102, n: 10, name: 'Storm', desc: 'Trees uprooted' },
  { max: 117, n: 11, name: 'Violent Storm', desc: 'Widespread damage' },
  { max: Infinity, n: 12, name: 'Hurricane', desc: 'Devastating damage' },
];

// ── UV Index Colors ─────────────────────────────────────────────────

/**
 * UV index color thresholds. Evaluated in order.
 * @type {ReadonlyArray<{max: number, color: string, label: string}>}
 */
export const UV_COLORS = [
  { max: 2, color: '#30d158', label: 'Low' },
  { max: 5, color: '#ffd60a', label: 'Moderate' },
  { max: 7, color: '#ff9f0a', label: 'High' },
  { max: 10, color: '#ff453a', label: 'Very High' },
  { max: Infinity, color: '#bf5af2', label: 'Extreme' },
];

// ── AQI Categories ──────────────────────────────────────────────────

/**
 * EU AQI category thresholds.
 * @type {ReadonlyArray<{max: number, label: string, color: string, desc: string}>}
 */
export const EU_AQI_CATEGORIES = [
  { max: 20, label: 'Good', color: '#30d158', desc: 'Air quality is satisfactory' },
  { max: 40, label: 'Fair', color: '#5ac8fa', desc: 'Acceptable for most people' },
  { max: 60, label: 'Moderate', color: '#ff9f0a', desc: 'Sensitive groups may be affected' },
  { max: 80, label: 'Poor', color: '#ff453a', desc: 'Health effects possible for everyone' },
  { max: 100, label: 'Very Poor', color: '#8b0000', desc: 'Serious health effects' },
  { max: Infinity, label: 'Extremely Poor', color: '#4a0020', desc: 'Emergency conditions' },
];

/**
 * US AQI category thresholds.
 * @type {ReadonlyArray<{max: number, label: string, color: string, desc: string}>}
 */
export const US_AQI_CATEGORIES = [
  { max: 50, label: 'Good', color: '#30d158', desc: 'Air quality is satisfactory' },
  { max: 100, label: 'Moderate', color: '#ffd60a', desc: 'Acceptable for most people' },
  { max: 150, label: 'Unhealthy for Sensitive Groups', color: '#ff9f0a', desc: 'Sensitive groups may experience effects' },
  { max: 200, label: 'Unhealthy', color: '#ff453a', desc: 'Everyone may experience effects' },
  { max: 300, label: 'Very Unhealthy', color: '#8b0000', desc: 'Health alert for everyone' },
  { max: Infinity, label: 'Hazardous', color: '#4a0020', desc: 'Emergency conditions' },
];

// ── CAPE Severity Colors ────────────────────────────────────────────

/**
 * CAPE severity thresholds (J/kg).
 * @type {ReadonlyArray<{max: number, color: string, label: string}>}
 */
export const CAPE_TIERS = [
  { max: 300, color: '#30d158', label: 'Stable' },
  { max: 1000, color: '#ffd60a', label: 'Marginal' },
  { max: 2500, color: '#ff9f0a', label: 'Moderate' },
  { max: Infinity, color: '#ff453a', label: 'High' },
];

// ── Lifted Index Tiers ──────────────────────────────────────────────

/**
 * Lifted index interpretation thresholds.
 * Evaluated in order — first match wins (note: descending values).
 * @type {ReadonlyArray<{min: number, color: string, label: string}>}
 */
export const LIFTED_INDEX_TIERS = [
  { min: 2, color: '#30d158', label: 'Stable' },
  { min: 0, color: '#ffd60a', label: 'Marginal' },
  { min: -2, color: '#ff9f0a', label: 'Slightly Unstable' },
  { min: -Infinity, color: '#ff453a', label: 'Unstable' },
];

// ── Animation Constants ─────────────────────────────────────────────

/** Wind speed cap for ratio calculations (km/h). */
export const SPEED_CAP = 80;

/** Maximum number of wind streaks. */
export const MAX_STREAKS = 35;

/** Maximum sway angle for wind arrow (degrees). */
export const SWAY_MAX_ANGLE = 25;

/** Wind speed ratio threshold for rose shake effect. */
export const SHAKE_THRESHOLD = 0.6;

/** Maximum rain drop count. */
export const MAX_RAIN_DROPS = 90;

/** Maximum snowflake count. */
export const MAX_SNOWFLAKES = 60;

/** Maximum star count. */
export const MAX_STARS = 40;

/** Maximum cloud count. */
export const MAX_CLOUDS = 8;

/** Radar sweep duration — active alerts (seconds). */
export const SWEEP_ACTIVE_S = 4;

/** Radar sweep duration — all clear (seconds). */
export const SWEEP_CALM_S = 8;

/** Alert "until further notice" sentinel threshold (days). */
export const ALERT_FAR_FUTURE_DAYS = 7;

// ── Compass Labels ──────────────────────────────────────────────────

/** 16-point compass labels, starting from N (0°), clockwise in 22.5° steps. */
export const COMPASS_LABELS = /** @type {const} */ ([
  'N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
  'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW',
]);

// ── Alert Type Icon Map ─────────────────────────────────────────────

/**
 * Map Atmos CE alert types to MDI icon names.
 * @type {Readonly<Record<string, string>>}
 */
export const ALERT_ICON_MAP = /** @type {const} */ ({
  rain: 'mdi:weather-pouring',
  wind: 'mdi:weather-windy',
  snow: 'mdi:weather-snowy-heavy',
  ice: 'mdi:snowflake-alert',
  fog: 'mdi:weather-fog',
  thunderstorm: 'mdi:weather-lightning',
  heat: 'mdi:thermometer-alert',
  cold: 'mdi:snowflake-thermometer',
  flood: 'mdi:home-flood',
  tornado: 'mdi:weather-tornado',
  fire: 'mdi:fire-alert',
  coastal: 'mdi:waves',
  avalanche: 'mdi:image-filter-hdr',
  unknown: 'mdi:alert',
});

/**
 * Alert severity color map (hex). Matches Atmos CE COLOR_MAP.
 * @type {Readonly<Record<number, string>>}
 */
export const ALERT_COLOR_MAP = /** @type {const} */ ({
  1: '#FFFF00',
  2: '#FFA500',
  3: '#FF0000',
  4: '#8B0000',
});

// ── Pollutant Definitions ───────────────────────────────────────────

/**
 * Pollutant display definitions for the air quality table.
 * @type {ReadonlyArray<{key: string, label: string, unit: string, maxEu: number}>}
 */
export const POLLUTANTS = [
  { key: 'pm2_5', label: 'PM2.5', unit: 'µg/m³', maxEu: 75 },
  { key: 'pm10', label: 'PM10', unit: 'µg/m³', maxEu: 150 },
  { key: 'nitrogen_dioxide', label: 'NO₂', unit: 'µg/m³', maxEu: 400 },
  { key: 'ozone', label: 'O₃', unit: 'µg/m³', maxEu: 240 },
  { key: 'sulphur_dioxide', label: 'SO₂', unit: 'µg/m³', maxEu: 500 },
  { key: 'carbon_monoxide', label: 'CO', unit: 'µg/m³', maxEu: 20000 },
  { key: 'carbon_dioxide', label: 'CO₂', unit: 'ppm', maxEu: 5000 },
];

// ── Atmos CE Sensor Keys ────────────────────────────────────────────

/**
 * All known Atmos CE sensor keys (matches entity_description.key in sensor.py).
 * Used for auto-discovery: scan for sensor.{slug}_{key} entities.
 * @type {ReadonlyArray<string>}
 */
export const ATMOS_CE_SENSOR_KEYS = [
  // Core weather
  'temperature', 'apparent_temperature', 'dew_point', 'humidity',
  'pressure', 'surface_pressure', 'wind_speed', 'wind_direction', 'wind_gusts',
  'precipitation', 'rain', 'showers', 'snowfall',
  // Cloud cover
  'cloud_cover', 'cloud_cover_low', 'cloud_cover_mid', 'cloud_cover_high',
  // UV / visibility
  'uv_index', 'uv_index_clear_sky', 'visibility',
  // Atmospheric stability
  'cape', 'lifted_index', 'freezing_level_height', 'soil_temperature', 'soil_moisture',
  // Atmospheric stability (derived by Atmos CE)
  'wind_shear_0_6km', 'lapse_rate_700_500', 'lcl_height', 'stability_assessment',
  // Air quality
  'european_aqi', 'us_aqi', 'pm2_5', 'pm10',
  'nitrogen_dioxide', 'ozone', 'sulphur_dioxide', 'carbon_monoxide', 'carbon_dioxide',
  // Astronomical
  'golden_hour_morning_start', 'golden_hour_morning_end',
  'golden_hour_evening_start', 'golden_hour_evening_end',
  'blue_hour_morning', 'blue_hour_evening',
  'moon_phase', 'moonrise', 'moonset', 'daylight_duration',
];

/**
 * Atmos CE alert sensor keys (use translation_key, not entity_description.key).
 * @type {ReadonlyArray<string>}
 */
export const ATMOS_CE_ALERT_KEYS = ['active_alert', 'upcoming_alert', 'alert_count'];

/** Suffix appended to weather entity source slug. */
export const ATMOS_CE_WEATHER_SUFFIX = '_weather';

/** Minimum sensor count to consider a slug as Atmos CE source. */
export const ATMOS_CE_MIN_SENSORS = 3;

// ── HA Weather Conditions ───────────────────────────────────────────

/** All valid HA weather condition strings. */
export const HA_CONDITIONS = /** @type {const} */ ([
  'clear-night', 'cloudy', 'exceptional', 'fog', 'hail',
  'lightning', 'lightning-rainy', 'partlycloudy', 'pouring',
  'rainy', 'snowy', 'snowy-rainy', 'sunny', 'windy',
  'windy-variant',
]);

/**
 * Map HA weather condition to display icon (emoji).
 * @type {Readonly<Record<string, string>>}
 */
export const CONDITION_ICONS = /** @type {const} */ ({
  'clear-night': '🌙',
  'cloudy': '☁️',
  'exceptional': '🌡️',
  'fog': '🌫️',
  'hail': '🌨️',
  'lightning': '⚡',
  'lightning-rainy': '⛈️',
  'partlycloudy': '⛅',
  'pouring': '🌧️',
  'rainy': '🌧️',
  'snowy': '❄️',
  'snowy-rainy': '🌨️',
  'sunny': '☀️',
  'windy': '💨',
  'windy-variant': '💨',
});

// ── Moon Phase Constants ────────────────────────────────────────────

/** Synodic month length in days. */
export const SYNODIC_MONTH = 29.53;

/** Moon phase names in order (0 = New Moon at moon_age ≈ 0). */
export const MOON_PHASES = /** @type {const} */ ([
  'New Moon', 'Waxing Crescent', 'First Quarter', 'Waxing Gibbous',
  'Full Moon', 'Waning Gibbous', 'Last Quarter', 'Waning Crescent',
]);
