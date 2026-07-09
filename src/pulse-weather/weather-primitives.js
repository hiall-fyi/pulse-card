/**
 * @module pulse-weather/weather-primitives
 * @description Shared SVG builders, color mapping functions, and rendering
 * primitives used by all Pulse Weather Card sections.
 */

import {
  TEMP_TIERS,
  WIND_TIERS,
  BEAUFORT,
  CAPE_TIERS,
  COMPASS_LABELS,
  TIER_COLORS,
  CONDITION_ICONS,
} from './constants.js';

import { escapeHtml, sanitizeCssValue, formatHHMM, formatDateTime, resolveHassTimeZone, uniqueDomId } from '../shared/utils.js';
import { hexToRgba } from '../shared/color.js';
export { escapeHtml, sanitizeCssValue, formatHHMM, formatDateTime, resolveHassTimeZone };
export { hexToRgba };

/**
 * Filter an array to entries whose numeric accessor returns a finite number.
 * Guards path-building math (Math.min/max over temps, SVG coord calc) from
 * NaN / Infinity / undefined values propagating into the DOM.
 * @template T
 * @param {T[]} items
 * @param {(item: T) => number} accessor - Maps item to its numeric field.
 * @returns {T[]}
 */
export function filterFinite(items, accessor) {
  return items.filter((item) => Number.isFinite(accessor(item)));
}

/**
 * Coerce a value to a finite number; fall back to default if NaN/Infinity.
 * Use instead of `Number(x) || default` which silently accepts Infinity.
 * @param {*} value
 * @param {number} [fallback]
 * @returns {number}
 */
export function finiteNumber(value, fallback = 0) {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

/**
 * Read an Atmos CE sensor value first; fall back to a weather-entity
 * attribute. Both branches coerce to Number with `fallback` on NaN.
 *
 * @param {*} hass
 * @param {Record<string, string>} ce - Discovery's atmosCe entity map.
 * @param {Record<string, *>} attrs - Weather entity attributes.
 * @param {string} sensorKey - Key into `ce` for the sensor entity ID.
 * @param {string} attrKey - Key into `attrs` for the fallback attribute.
 * @param {number} [fallback=0]
 * @returns {number}
 */
export function readCeOrAttr(hass, ce, attrs, sensorKey, attrKey, fallback = 0) {
  if (ce?.[sensorKey]) {
    const v = Number(hass?.states?.[ce[sensorKey]]?.state);
    if (Number.isFinite(v)) return v;
  }
  return Number(attrs?.[attrKey] ?? fallback) || fallback;
}

/**
 * Read the unit_of_measurement of an Atmos CE sensor, with a fallback.
 *
 * @param {*} hass
 * @param {Record<string, string>} ce
 * @param {string} sensorKey
 * @param {string} fallback
 * @returns {string}
 */
export function readCeUnit(hass, ce, sensorKey, fallback) {
  if (ce?.[sensorKey]) {
    return /** @type {string} */ (hass?.states?.[ce[sensorKey]]?.attributes?.unit_of_measurement || fallback);
  }
  return fallback;
}

/**
 * Read a sensor entity's state + unit + the entity itself. Returns a
 * tuple-shaped object; callers destructure what they need.
 *
 * @param {*} hass
 * @param {string} entityId
 * @param {number} [fallback=0]
 * @returns {{ value: number, unit: string|undefined, entity: *|null }}
 */
export function readSensorValue(hass, entityId, fallback = 0) {
  const entity = entityId ? hass?.states?.[entityId] : null;
  if (!entity) return { value: fallback, unit: undefined, entity: null };
  const v = Number(entity.state);
  return {
    value: Number.isFinite(v) ? v : fallback,
    unit: entity.attributes?.unit_of_measurement,
    entity,
  };
}

/**
 * Resolve the brand-mark variant from current weather conditions. Uses
 * the weather entity's state + the sun entity's `below_horizon` flag (or
 * `clear-night` condition) to choose day vs night.
 *
 * @param {*} hass
 * @param {*} weatherEntity - hass.states[weatherEntityId]
 * @param {{ sunEntityId?: string|null }} discovery
 * @returns {{ condition: string, isNight: boolean }}
 */
export function deriveBrandVariant(hass, weatherEntity, discovery) {
  const condition = weatherEntity?.state || 'sunny';
  const sunState = discovery?.sunEntityId ? hass?.states?.[discovery.sunEntityId]?.state : null;
  const isNight = condition === 'clear-night' || sunState === 'below_horizon';
  return { condition, isNight };
}

/**
 * Generate a unique SVG id for use in <defs> gradients / filters / clipPaths.
 * The card lives in a shadow root so cross-card collision is already
 * prevented, but duplicate sections (e.g. two meteograms, two astro blocks)
 * in the same card render with the same static id would make url(#id)
 * resolve to the first match — the later sections silently pick up the
 * wrong gradient. Backed by the shared id counter.
 * @param {string} [prefix='pw-id']
 * @returns {string}
 */
export function uniqueSvgId(prefix = 'pw-id') {
  return uniqueDomId(prefix);
}

/**
 * Layer a section-specific gradient on top of the cartouche sky baseline.
 *
 * Cartouche default sets `background: linear-gradient(sky)`. When a section
 * needs its own atmospheric wash (wind tier, atmosphere, air quality), it
 * must paint *both* layers because CSS `background:` replaces, not extends.
 * This helper makes the layered intent explicit and keeps sky tokens in one
 * place — change `--pw-sky-*` and every section follows.
 *
 * @param {string} topGradient - Section-specific gradient (typically a
 *   radial-gradient or transparent overlay) painted above the sky.
 * @returns {string} Comma-separated `background-image` value.
 */
export function withSkyBaseline(topGradient) {
  return `${topGradient}, linear-gradient(180deg, var(--pw-sky-top) 0%, var(--pw-sky-mid) 45%, var(--pw-sky-bot) 100%)`;
}

/**
 * Filter forecast array to entries with a parseable future datetime.
 * Shared by overview / forecast / meteogram so all three sections agree on
 * which forecast entry is "next". Entries older than `now - bufferMs` are
 * dropped (default: 1 h buffer so the current hour still counts).
 * @template {{datetime?: string}} T
 * @param {T[]} items
 * @param {Date} [now]
 * @param {number} [bufferMs] - Anything with datetime >= now - bufferMs is kept.
 * @returns {T[]}
 */
export function futureHourly(items, now, bufferMs = 3600000) {
  const cutoff = (now ? now.getTime() : Date.now()) - bufferMs;
  return items.filter((it) => {
    const raw = /** @type {*} */ (it).datetime;
    if (!raw) return false;
    const t = new Date(raw).getTime();
    return Number.isFinite(t) && t >= cutoff;
  });
}

/**
 * Map temperature to CSS hex color.
 * Tiers: ≤5°C blue, ≤12°C green, ≤18°C orange, >18°C red.
 * @param {number} temp - Temperature in °C.
 * @returns {string} CSS hex color.
 */
export function tempToColor(temp) {
  const t = Number(temp);
  for (const tier of TEMP_TIERS) {
    if (t <= tier.max) return tier.color;
  }
  return TEMP_TIERS[TEMP_TIERS.length - 1].color;
}

/**
 * Map wind speed to tier name.
 * calm ≤11, moderate ≤38, strong ≤61, gale >61.
 * @param {number} speed - Wind speed in km/h.
 * @returns {string} Tier name.
 */
export function windTier(speed) {
  const s = Number(speed);
  for (const tier of WIND_TIERS) {
    if (s <= tier.max) return tier.tier;
  }
  return WIND_TIERS[WIND_TIERS.length - 1].tier;
}

/**
 * Map wind tier name to hex color.
 * @param {number} speed - Wind speed in km/h.
 * @returns {string} CSS hex color.
 */
export function windTierColor(speed) {
  return /** @type {string} */ (TIER_COLORS[/** @type {keyof typeof TIER_COLORS} */ (windTier(speed))]) || TIER_COLORS.calm;
}

/**
 * Look up Beaufort scale entry by speed.
 * @param {number} speed - Wind speed in km/h.
 * @returns {{max: number, n: number, name: string, desc: string}} Beaufort entry.
 */
export function beaufort(speed) {
  const s = Number(speed);
  for (const entry of BEAUFORT) {
    if (s <= entry.max) return entry;
  }
  return BEAUFORT[BEAUFORT.length - 1];
}

/**
 * 16-point compass label from bearing degrees.
 * @param {number} deg - Bearing in degrees (0°=N, clockwise).
 * @returns {string} Compass label (e.g. 'N', 'NNE', 'SW').
 */
export function compassLabel(deg) {
  const d = ((Number(deg) % 360) + 360) % 360;
  const index = Math.round(d / 22.5) % 16;
  return COMPASS_LABELS[index];
}

/**
 * Map CAPE value to severity color.
 * @param {number} cape - CAPE value in J/kg.
 * @returns {string} CSS hex color.
 */
export function capeColor(cape) {
  const c = Number(cape);
  for (const tier of CAPE_TIERS) {
    if (c <= tier.max) return tier.color;
  }
  return CAPE_TIERS[CAPE_TIERS.length - 1].color;
}

/**
 * Map cloud cover percentage to WMO okta-aligned tier colour.
 * @param {number} pct - Cloud cover 0–100%.
 * @returns {string} Hex colour.
 */
export function cloudCoverColor(pct) {
  if (pct <= 12) return '#30d158';
  if (pct <= 50) return '#5ac8fa';
  if (pct <= 87) return '#ff9f0a';
  return '#ff453a';
}

/**
 * Map dew point to Atmos CE 5-tier comfort colour.
 * @param {number} dp - Dew point in °C.
 * @returns {string} Hex colour.
 */
export function dewPointComfortColor(dp) {
  if (dp < 10) return '#5ac8fa';
  if (dp < 16) return '#30d158';
  if (dp < 19) return '#ffd60a';
  if (dp < 22) return '#ff9f0a';
  return '#ff453a';
}

/**
 * Derive today's sunrise + sunset from sun.sun's `next_rising` /
 * `next_setting` attributes. HA exposes these as the *next* events,
 * so when the sun is currently below the horizon both attributes
 * point at tomorrow. Repair off-by-day cases so sunset always falls
 * within the same astronomical day as sunrise.
 *
 * Returns null fields when the input attributes are missing or
 * unparseable. Callers should treat null as "no day-arc data".
 *
 * @param {Date} now - Current time.
 * @param {string|undefined} nextRising - sun.sun.attributes.next_rising.
 * @param {string|undefined} nextSetting - sun.sun.attributes.next_setting.
 * @returns {{ todaySunrise: Date|null, todaySunset: Date|null, tomorrowSunrise: Date|null }}
 */
export function deriveTodaySunBoundaries(now, nextRising, nextSetting) {
  if (!nextRising || !nextSetting) {
    return { todaySunrise: null, todaySunset: null, tomorrowSunrise: null };
  }
  const nextRise = new Date(nextRising);
  const nextSet = new Date(nextSetting);
  if (isNaN(nextRise.getTime()) || isNaN(nextSet.getTime())) {
    return { todaySunrise: null, todaySunset: null, tomorrowSunrise: null };
  }
  let todaySunrise = nextRise.getTime() > now.getTime()
    ? new Date(nextRise.getTime() - 86400000)
    : nextRise;
  let todaySunset = nextSet.getTime() > now.getTime()
    ? nextSet
    : new Date(nextSet.getTime() - 86400000);
  if (todaySunset.getTime() > todaySunrise.getTime() + 86400000) {
    todaySunset = new Date(todaySunset.getTime() - 86400000);
  }
  if (todaySunrise.getTime() > todaySunset.getTime()) {
    todaySunrise = new Date(todaySunrise.getTime() - 86400000);
  }
  const tomorrowSunrise = nextRise.getTime() > now.getTime()
    ? nextRise
    : new Date(nextRise.getTime() + 86400000);
  return { todaySunrise, todaySunset, tomorrowSunrise };
}

/**
 * Anchor an event-time sensor (golden hour, blue hour, moonrise,
 * moonset) on a reference Date by picking the candidate (raw,
 * raw±24h) closest to the reference. Atmos CE event-time sensors
 * advance to tomorrow's value once today's event passes; a naïve
 * "pull back if > now" anchor fails at midday when today's evening
 * events are legitimately still future.
 *
 * @param {Date|null|undefined} raw
 * @param {Date|null|undefined} anchor
 * @returns {Date|null}
 */
export function anchorEventOn(raw, anchor) {
  if (!raw || isNaN(raw.getTime())) return null;
  if (!anchor) return raw;
  const ref = anchor.getTime();
  const candidates = [raw, new Date(raw.getTime() - 86400000), new Date(raw.getTime() + 86400000)];
  let best = candidates[0];
  let bestDelta = Math.abs(best.getTime() - ref);
  for (let i = 1; i < candidates.length; i += 1) {
    const delta = Math.abs(candidates[i].getTime() - ref);
    if (delta < bestDelta) {
      best = candidates[i];
      bestDelta = delta;
    }
  }
  return best;
}

/**
 * Build an SVG element string with attributes and optional content.
 * @param {string} tag - SVG element tag name.
 * @param {Object<string, string|number>} [attrs] - Attribute key-value pairs.
 * @param {string} [content] - Inner content (HTML/SVG string).
 * @returns {string} SVG element string.
 */
export function svgEl(tag, attrs, content) {
  const attrStr = attrs
    ? Object.entries(attrs)
        .map(([k, v]) => ` ${k}="${v}"`)
        .join('')
    : '';
  if (content !== undefined && content !== null) {
    return `<${tag}${attrStr}>${content}</${tag}>`;
  }
  return `<${tag}${attrStr}/>`;
}

/**
 * Map HA weather condition string to emoji icon.
 * @param {string} condition - HA weather condition string.
 * @returns {string} Emoji icon.
 */
export function conditionIcon(condition) {
  return CONDITION_ICONS[condition] || '🌤️';
}

/**
 * Display names for known HA weather conditions.
 * Explicit mapping avoids regex issues with concatenated compounds (e.g. "partlycloudy").
 * @type {Readonly<Record<string, string>>}
 */
const CONDITION_DISPLAY = /** @type {const} */ ({
  'clear-night': 'Clear Night',
  'cloudy': 'Cloudy',
  'exceptional': 'Exceptional',
  'fog': 'Fog',
  'hail': 'Hail',
  'lightning': 'Lightning',
  'lightning-rainy': 'Lightning Rainy',
  'partlycloudy': 'Partly Cloudy',
  'pouring': 'Pouring',
  'rainy': 'Rainy',
  'snowy': 'Snowy',
  'snowy-rainy': 'Snowy Rainy',
  'sunny': 'Sunny',
  'windy': 'Windy',
  'windy-variant': 'Windy Variant',
});

/**
 * Format a HA weather condition string for display.
 * Uses explicit mapping for known conditions, falls back to hyphen-split + title-case.
 * @param {string} condition - HA weather condition string.
 * @returns {string} Formatted display string.
 */
export function formatCondition(condition) {
  if (Object.hasOwn(CONDITION_DISPLAY, condition)) return CONDITION_DISPLAY[condition];
  return condition.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

/** @type {Readonly<Record<string, string>>} */
const MOON_PHASE_ICONS = {
  'New Moon': '🌑',
  'Waxing Crescent': '🌒',
  'First Quarter': '🌓',
  'Waxing Gibbous': '🌔',
  'Full Moon': '🌕',
  'Waning Gibbous': '🌖',
  'Last Quarter': '🌗',
  'Waning Crescent': '🌘',
};

/**
 * Get moon phase emoji for a phase name.
 * @param {string|null} phaseName - Moon phase name (e.g. "Full Moon").
 * @returns {string} Moon phase emoji, or '🌙' fallback.
 */
export function moonPhaseIcon(phaseName) {
  return MOON_PHASE_ICONS[phaseName || ''] || '🌙';
}
