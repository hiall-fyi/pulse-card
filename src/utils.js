/**
 * @module utils
 * @description Pure utility functions for Pulse Card — bar fill calculation,
 * severity resolution, color interpolation, value formatting, and logging.
 */

import { DEFAULTS, LOG_PREFIX } from './constants.js';

/**
 * Clamp a value between min and max.
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Compute bar fill percentage. [CP-1]
 * @param {*} value - Raw state value (will be parsed).
 * @param {number} min
 * @param {number} max
 * @param {boolean} [complementary=false]
 * @returns {number} Percentage 0–100.
 */
export function computeFill(value, min, max, complementary = false) {
  const num = parseFloat(value);
  if (isNaN(num)) return 0;
  const range = max - min;
  if (range <= 0) return 0;
  const effective = complementary ? max - num : num;
  return clamp((effective - min) / range, 0, 1) * 100;
}

/**
 * Resolve the first matching severity entry. [CP-2]
 * @param {*} value
 * @param {import('./types.js').SeverityEntry[]} severityArray
 * @returns {import('./types.js').SeverityEntry|null}
 */
export function resolveSeverity(value, severityArray) {
  if (!severityArray || severityArray.length === 0) return null;
  const num = parseFloat(value);
  if (isNaN(num)) return null;
  for (const entry of severityArray) {
    if (num >= entry.from && num <= entry.to) return entry;
  }
  return null;
}

/**
 * Parse a hex color string to RGB components.
 * @param {string} hex - e.g. "#FF9800" or "#fff"
 * @returns {{r:number,g:number,b:number}}
 */
export function parseColor(hex) {
  let h = hex.replace('#', '');
  if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  return {
    r: parseInt(h.substring(0, 2), 16),
    g: parseInt(h.substring(2, 4), 16),
    b: parseInt(h.substring(4, 6), 16),
  };
}

/**
 * Linearly interpolate between two hex colors.
 * @param {string} color1 - Hex color.
 * @param {string} color2 - Hex color.
 * @param {number} t - Interpolation factor 0–1.
 * @returns {string} CSS rgb() string.
 */
export function interpolateColor(color1, color2, t) {
  const c1 = parseColor(color1);
  const c2 = parseColor(color2);
  const r = Math.round(c1.r + (c2.r - c1.r) * t);
  const g = Math.round(c1.g + (c2.g - c1.g) * t);
  const b = Math.round(c1.b + (c2.b - c1.b) * t);
  return `rgb(${r}, ${g}, ${b})`;
}

/**
 * Resolve gradient color by interpolating between severity stops.
 * @param {*} value
 * @param {import('./types.js').SeverityEntry[]} severityArray
 * @returns {string|null} CSS color string or null.
 */
export function resolveGradientColor(value, severityArray) {
  if (!severityArray || severityArray.length < 2) return null;
  const num = parseFloat(value);
  if (isNaN(num)) return null;

  // Assumes array is pre-sorted by `from` (done in normalizeConfig).
  // Falls back to runtime sort for safety if called externally.
  const sorted = severityArray[0].from <= severityArray[severityArray.length - 1].from
    ? severityArray
    : [...severityArray].sort((a, b) => a.from - b.from);

  for (let i = 0; i < sorted.length - 1; i++) {
    const lower = sorted[i];
    const upper = sorted[i + 1];
    if (num >= lower.from && num <= upper.to) {
      const range = upper.from - lower.from;
      const t = range > 0 ? (num - lower.from) / range : 0;
      return interpolateColor(lower.color, upper.color, clamp(t, 0, 1));
    }
  }

  if (num <= sorted[0].from) return sorted[0].color;
  return sorted[sorted.length - 1].color;
}

/**
 * Resolve min/max from entity config and entity state attributes. [US-14]
 * Explicit config always overrides entity attributes.
 * @param {import('./types.js').EntityConfig} entityConfig
 * @param {import('./types.js').HassEntityState|null|undefined} entityState - HA entity state object.
 * @returns {{min:number, max:number}}
 */
export function resolveMinMax(entityConfig, entityState) {
  let min = entityConfig.min;
  let max = entityConfig.max;

  if (min === undefined || min === null) {
    min = entityState?.attributes?.min ?? DEFAULTS.min;
  }
  if (max === undefined || max === null) {
    max = entityState?.attributes?.max ?? DEFAULTS.max;
  }

  return { min: parseFloat(String(min)), max: parseFloat(String(max)) };
}

/**
 * Format a numeric value with optional decimals and unit.
 * @param {*} value
 * @param {number|null} decimal
 * @param {string} [unit]
 * @returns {string}
 */
export function formatValue(value, decimal, unit) {
  const num = parseFloat(value);
  if (isNaN(num)) return String(value);
  const formatted =
    decimal !== null && decimal !== undefined
      ? num.toFixed(decimal)
      : num.toString();
  return unit ? `${formatted}${unit}` : formatted;
}

/**
 * Compute change indicator direction and delta. [CP-7]
 * @param {*} currentValue
 * @param {*} previousValue
 * @returns {{direction: 'up'|'down'|'neutral', delta: number}}
 */
export function computeIndicator(currentValue, previousValue) {
  if (previousValue === null || previousValue === undefined) {
    return { direction: 'neutral', delta: 0 };
  }
  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  if (isNaN(current) || isNaN(previous)) {
    return { direction: 'neutral', delta: 0 };
  }
  const delta = Math.round((current - previous) * 100) / 100;
  return {
    direction: delta > 0 ? 'up' : delta < 0 ? 'down' : 'neutral',
    delta,
  };
}

/**
 * Log a warning with the Pulse Card prefix.
 * @param {string} msg
 * @param {...*} args
 */
export function warn(msg, ...args) {
  console.warn(`${LOG_PREFIX} ${msg}`, ...args);
}

/**
 * Fetch the previous value of an entity from HA history API. [US-16]
 * @param {import('./types.js').Hass|null|undefined} hass - Home Assistant instance.
 * @param {string} entityId - Entity ID to query.
 * @param {number} minutesAgo - How far back to look (default 60).
 * @returns {Promise<number|null>} The oldest numeric value in the period, or null.
 */
export async function fetchPreviousValue(hass, entityId, minutesAgo = 60) {
  if (!hass?.callWS) return null;
  const now = new Date();
  const start = new Date(now.getTime() - minutesAgo * 60 * 1000);
  try {
    const history = await hass.callWS({
      type: 'history/history_during_period',
      start_time: start.toISOString(),
      end_time: now.toISOString(),
      entity_ids: [entityId],
      minimal_response: true,
      significant_changes_only: true,
    });
    const states = history?.[entityId];
    if (!states || states.length === 0) return null;
    const val = parseFloat(states[0].s);
    return isNaN(val) ? null : val;
  } catch (e) {
    warn('Failed to fetch history for %s: %O', entityId, e);
    return null;
  }
}

/**
 * Ensure a CSS dimension value has a unit. Appends 'px' if the value is
 * a bare number (e.g. "40" → "40px", 40 → "40px"). Values that already
 * contain a unit (e.g. "40px", "2em", "50%") are returned as-is.
 * @param {*} value - CSS dimension value.
 * @returns {string}
 */
export function cssValue(value) {
  if (value === undefined || value === null || value === '') return '';
  const str = String(value);
  // If it's a pure number (integer or float), append px
  if (/^\d+(\.\d+)?$/.test(str)) return `${str}px`;
  return str;
}

/**
 * Escape HTML special characters to prevent XSS when inserting
 * user-controlled strings via innerHTML.
 * @param {*} str - Value to escape (coerced to string).
 * @returns {string} Escaped string safe for HTML insertion.
 */
export function escapeHtml(str) {
  const s = String(str);
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Pre-sort a severity array by `from` value for gradient interpolation.
 * Returns a new array (does not mutate input). Non-array input returns undefined.
 * @param {import('./types.js').SeverityEntry[]|undefined} severity
 * @returns {import('./types.js').SeverityEntry[]|undefined}
 */
function preSortSeverity(severity) {
  if (!Array.isArray(severity) || severity.length < 2) return severity;
  return [...severity].sort((a, b) => a.from - b.from);
}

/**
 * Validate and normalize card config. Throws on invalid config.
 * Used by PulseCard.setConfig() and testable independently. [CP-4]
 * @param {Record<string, *>} config - Raw user config.
 * @returns {import('./types.js').PulseCardConfig & {entities: import('./types.js').EntityConfig[]}} Normalized config with defaults merged.
 */
export function normalizeConfig(config) {
  if (!config) {
    throw new Error('Please define an entity or entities');
  }
  if (!config.entity && !config.entities) {
    throw new Error('Please define an entity or entities');
  }

  /** @type {*} */
  const merged = {
    ...DEFAULTS,
    ...config,
    animation: { ...DEFAULTS.animation, ...config.animation },
    positions: { ...DEFAULTS.positions, ...config.positions },
  };

  // Pre-sort card-level severity for gradient interpolation
  if (merged.severity) {
    merged.severity = preSortSeverity(merged.severity);
  }

  merged.entities = config.entities
    ? config.entities.map(/** @param {*} e */ (e) => {
        const ec = typeof e === 'string' ? { entity: e } : { ...e };
        // Pre-sort per-entity severity
        if (ec.severity) ec.severity = preSortSeverity(ec.severity);
        return ec;
      })
    : [{ entity: config.entity, ...config }];

  // Pre-sort severity on single-entity normalized config too
  if (merged.entities.length === 1 && merged.entities[0].severity) {
    merged.entities[0].severity = preSortSeverity(merged.entities[0].severity);
  }

  return merged;
}

/**
 * Resolve all computed bar state for a single entity.
 * Shared between initial render and differential update to eliminate duplication.
 * @param {import('./types.js').EntityConfig} ec - Entity config.
 * @param {import('./types.js').PulseCardConfig & {entities: import('./types.js').EntityConfig[]}} cfg - Card config.
 * @param {import('./types.js').Hass|null} hass - Home Assistant instance.
 * @returns {import('./types.js').BarState} Computed bar state.
 */
export function resolveBarState(ec, cfg, hass) {
  const state = hass?.states[ec.entity];
  const isUnavailable =
    !state || state.state === 'unavailable' || state.state === 'unknown';

  const { min, max } = resolveMinMax(ec, state);
  const rawValue = ec.attribute
    ? state?.attributes?.[ec.attribute]
    : state?.state;
  const numValue = parseFloat(rawValue);
  const complementary = ec.complementary ?? cfg.complementary;
  const fill = isUnavailable ? 0 : computeFill(rawValue, min, max, complementary);
  const unit = ec.unit_of_measurement ?? state?.attributes?.unit_of_measurement ?? '';
  const decimal = ec.decimal ?? cfg.decimal ?? null;
  const limitValue = ec.limit_value ?? cfg.limit_value;
  const displayRaw = limitValue && !isNaN(numValue) ? clamp(numValue, min, max) : rawValue;
  const displayValue = isUnavailable
    ? 'Unavailable'
    : formatValue(displayRaw, decimal, unit);
  const name = ec.name ?? state?.attributes?.friendly_name ?? ec.entity;

  // Resolve severity color and icon
  let severityColor = '';
  let severityIcon = '';
  if (!isUnavailable) {
    const sevArray = ec.severity ?? cfg.severity;
    if (sevArray && sevArray.length > 0) {
      const isGradient = sevArray.some((s) => s.mode === 'gradient');
      if (isGradient) {
        const gradColor = resolveGradientColor(numValue, sevArray);
        if (gradColor) severityColor = gradColor;
      } else {
        const severity = resolveSeverity(numValue, sevArray);
        if (severity) {
          severityColor = severity.color;
          if (severity.icon) severityIcon = severity.icon;
        }
      }
    }
  }

  const color = severityColor || ec.color || cfg.color || '';
  const baseIcon = ec.icon || state?.attributes?.icon || '';
  const resolvedIcon = severityIcon || baseIcon;

  return {
    isUnavailable,
    min,
    max,
    numValue,
    fill,
    displayValue,
    name,
    color,
    resolvedIcon,
  };
}
