/**
 * @module utils
 * @description Pure utility functions for Pulse Card — bar fill calculation,
 * severity resolution, color interpolation, value formatting, and logging.
 */

import { DEFAULTS, LOG_PREFIX } from './constants.js';

/** Known HA active/truthy states — O(1) Set lookup. */
const BINARY_ACTIVE = new Set(['on', 'open', 'home', 'locked', 'playing', 'active']);

/** Known HA inactive/falsy states — O(1) Set lookup. */
const BINARY_INACTIVE = new Set(['off', 'closed', 'not_home', 'unlocked', 'idle', 'paused', 'standby']);

/**
 * Map a binary state string to a numeric value for bar fill computation.
 * Returns null if the value is not a known binary state (caller falls through to parseFloat).
 * @param {*} value - Raw state value.
 * @param {number} min - Bar min.
 * @param {number} max - Bar max.
 * @returns {number|null} Mapped numeric value, or null if not binary.
 */
function resolveBinaryValue(value, min, max) {
  if (typeof value !== 'string') return null;
  const lower = value.toLowerCase();
  if (BINARY_ACTIVE.has(lower)) return max;
  if (BINARY_INACTIVE.has(lower)) return min;
  return null;
}

/**
 * Format a binary state string for display. Capitalises first letter.
 * @param {string} value - Raw binary state (e.g. "on", "off", "open").
 * @param {string} [unit] - Optional unit to append.
 * @returns {string} Formatted display string (e.g. "On", "Off", "Open").
 */
function formatBinaryDisplay(value, unit) {
  const str = String(value);
  const capitalised = str.charAt(0).toUpperCase() + str.slice(1);
  return unit ? `${capitalised}${unit}` : capitalised;
}

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
 * @internal
 * @param {*} value - Raw state value (will be parsed).
 * @param {number} min
 * @param {number} max
 * @param {boolean} [complementary=false]
 * @returns {number} Percentage 0–100.
 */
function computeFill(value, min, max, complementary = false) {
  const binaryNum = resolveBinaryValue(value, min, max);
  const num = binaryNum !== null ? binaryNum : parseFloat(value);
  if (isNaN(num)) return 0;
  const range = max - min;
  if (range <= 0) return 0;
  const effective = complementary ? max - num : num;
  return clamp((effective - min) / range, 0, 1) * 100;
}

/**
 * Resolve the first matching severity entry. [CP-2]
 * @internal
 * @param {*} value
 * @param {import('./types.js').SeverityEntry[]} severityArray
 * @returns {import('./types.js').SeverityEntry|null}
 */
function resolveSeverity(value, severityArray) {
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
 * @internal
 * @param {string} hex - e.g. "#FF9800" or "#fff"
 * @returns {{r:number,g:number,b:number}}
 */
function parseColor(hex) {
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
 * @internal
 * @param {string} color1 - Hex color.
 * @param {string} color2 - Hex color.
 * @param {number} t - Interpolation factor 0–1.
 * @returns {string} CSS rgb() string.
 */
function interpolateColor(color1, color2, t) {
  const c1 = parseColor(color1);
  const c2 = parseColor(color2);
  const r = Math.round(c1.r + (c2.r - c1.r) * t);
  const g = Math.round(c1.g + (c2.g - c1.g) * t);
  const b = Math.round(c1.b + (c2.b - c1.b) * t);
  return `rgb(${r}, ${g}, ${b})`;
}

/**
 * Resolve gradient color by interpolating between severity stops.
 * @internal
 * @param {*} value
 * @param {import('./types.js').SeverityEntry[]} severityArray
 * @returns {string|null} CSS color string or null.
 */
function resolveGradientColor(value, severityArray) {
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
 * @internal
 * @param {import('./types.js').EntityConfig} entityConfig
 * @param {import('./types.js').HassEntityState|null|undefined} entityState - HA entity state object.
 * @returns {{min:number, max:number}}
 */
function resolveMinMax(entityConfig, entityState) {
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
 * Resolve decimal precision from entity config, card config, and HA entity registry.
 * Fallback chain: per-entity → card-level → HA display_precision → null (raw).
 * @param {import('./types.js').EntityConfig} ec - Entity config.
 * @param {import('./types.js').PulseCardConfig} cfg - Card config.
 * @param {import('./types.js').Hass|null|undefined} hass - Home Assistant instance.
 * @returns {number|null}
 */
export function resolveDecimal(ec, cfg, hass) {
  return ec.decimal ?? cfg.decimal
    ?? hass?.entities?.[ec.entity]?.display_precision ?? null;
}

/**
 * Resolve unit of measurement from entity config and state attributes.
 * @param {import('./types.js').EntityConfig} ec - Entity config.
 * @param {import('./types.js').HassEntityState|null|undefined} state - HA entity state.
 * @returns {string}
 */
export function resolveUnit(ec, state) {
  return ec.unit_of_measurement ?? state?.attributes?.unit_of_measurement ?? '';
}

/**
 * Format a numeric value with optional decimals and unit.
 * @internal
 * @param {*} value
 * @param {number|null} decimal
 * @param {string} [unit]
 * @returns {string}
 */
function formatValue(value, decimal, unit) {
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
  // Guard against garbage history values (e.g. unit conversion mismatch in recorder)
  // A delta > 1000× the current absolute value is almost certainly bad data.
  if (!isFinite(current) || !isFinite(previous)) {
    return { direction: 'neutral', delta: 0 };
  }
  const absDiff = Math.abs(current - previous);
  const absRef = Math.max(Math.abs(current), 1);
  if (absDiff > absRef * 1000) {
    return { direction: 'neutral', delta: 0 };
  }
  const delta = Math.round((current - previous) * 100) / 100;
  return {
    direction: delta > 0 ? 'up' : delta < 0 ? 'down' : 'neutral',
    delta,
  };
}

/**
 * Format indicator arrow and delta text from direction and delta value.
 * Consolidates duplicate arrow/delta logic used in both initial render
 * and differential DOM update paths.
 * @param {'up'|'down'|'neutral'} direction
 * @param {number} delta
 * @param {boolean} showDelta
 * @param {number|null} [decimal] - Decimal places for delta rounding.
 * @param {string} [unit] - Unit of measurement to append.
 * @returns {{arrow: string, text: string}}
 */
export function formatIndicator(direction, delta, showDelta, decimal, unit) {
  const arrow = direction === 'up' ? '▲' : direction === 'down' ? '▼' : '▶';
  if (!showDelta) return { arrow, text: arrow };
  const rounded =
    decimal !== null && decimal !== undefined
      ? delta.toFixed(decimal)
      : String(Math.round(delta * 100) / 100);
  const sign = delta > 0 ? '+' : '';
  const unitStr = unit || '';
  return { arrow, text: `${arrow} ${sign}${rounded}${unitStr}` };
}

/**
 * Sanitize a CSS value to prevent style injection via user-controlled config.
 * Strips characters that could break out of a CSS property value context
 * (semicolons, braces) and dangerous url() functions.
 * Legitimate values (hex colors, rgb(), named colors, px/em/rem/% units)
 * pass through unchanged.
 * @param {*} value - CSS value to sanitize (coerced to string).
 * @returns {string} Sanitized CSS value.
 */
export function sanitizeCssValue(value) {
  if (value === undefined || value === null || value === '') return '';
  const str = String(value);
  return str
    .replace(/[;{}]/g, '')
    .replace(/url\s*\(/gi, '')
    .replace(/expression\s*\(/gi, '')
    .replace(/-moz-binding\s*:/gi, '');
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
 * Batch-fetch previous values for multiple entities in a single WS call. [US-16]
 * @param {import('./types.js').Hass|null|undefined} hass - Home Assistant instance.
 * @param {string[]} entityIds - Entity IDs to query.
 * @param {number} minutesAgo - How far back to look (default 60).
 * @returns {Promise<Record<string, number|null>>} Map of entity ID → oldest numeric value, or null.
 */
export async function fetchPreviousValues(hass, entityIds, minutesAgo = 60) {
  /** @type {Record<string, number|null>} */
  const results = {};
  if (!hass?.callWS || entityIds.length === 0) return results;

  const now = new Date();
  const start = new Date(now.getTime() - minutesAgo * 60 * 1000);
  try {
    const history = await hass.callWS({
      type: 'history/history_during_period',
      start_time: start.toISOString(),
      end_time: now.toISOString(),
      entity_ids: entityIds,
      minimal_response: true,
      significant_changes_only: true,
    });
    for (const eid of entityIds) {
      const states = history?.[eid];
      if (!states || states.length === 0) {
        results[eid] = null;
        continue;
      }
      const val = parseFloat(states[0].s);
      results[eid] = isNaN(val) ? null : val;
    }
  } catch (e) {
    warn('Failed to fetch history for %s: %O', entityIds.join(', '), e);
    for (const eid of entityIds) results[eid] = null;
  }
  return results;
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

  // Coerce numeric config values — YAML may deliver strings for number fields
  if (merged.columns != null) merged.columns = Number(merged.columns) || 1;
  if (merged.animation.speed != null) merged.animation.speed = Number(merged.animation.speed) || DEFAULTS.animation.speed;

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
    : [{ entity: config.entity }];

  // Warn on duplicate entity IDs — second row would shadow the first in DOM cache
  const seen = new Set();
  for (const ec of merged.entities) {
    if (seen.has(ec.entity)) {
      warn('Duplicate entity "%s" in config — only the last bar will update dynamically', ec.entity);
    }
    seen.add(ec.entity);
  }

  return merged;
}

/**
 * Resolve target config to a numeric value and label visibility. [US-7]
 * Supports number, entity ID string, or object with value + show_label.
 * @param {number|string|import('./types.js').TargetObjectConfig|undefined|null} target
 * @param {import('./types.js').Hass|null|undefined} hass - Home Assistant instance for entity lookups.
 * @returns {{value: number|null, showLabel: boolean}}
 */
export function resolveTarget(target, hass) {
  if (target === undefined || target === null) return { value: null, showLabel: false };
  if (typeof target === 'number') return { value: isNaN(target) ? null : target, showLabel: false };
  if (typeof target === 'string') {
    const state = hass?.states[target];
    if (!state) return { value: null, showLabel: false };
    const num = parseFloat(state.state);
    return { value: isNaN(num) ? null : num, showLabel: false };
  }
  if (typeof target === 'object' && target.value !== undefined) {
    const resolved = resolveTarget(target.value, hass);
    return { value: resolved.value, showLabel: target.show_label === true };
  }
  return { value: null, showLabel: false };
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
    !state ||
    state.state === 'unavailable' ||
    state.state === 'unknown' ||
    state.state === 'error';

  const { min, max } = resolveMinMax(ec, state);
  const rawValue = ec.attribute
    ? state?.attributes?.[ec.attribute]
    : state?.state;
  const binaryNum = !ec.attribute ? resolveBinaryValue(rawValue, min, max) : null;
  const isBinary = binaryNum !== null;
  const numValue = isBinary ? binaryNum : parseFloat(rawValue);
  const complementary = ec.complementary ?? cfg.complementary;
  const fill = isUnavailable ? 0 : computeFill(rawValue, min, max, complementary);
  const unit = resolveUnit(ec, state);
  const decimal = resolveDecimal(ec, cfg, hass);
  const limitValue = ec.limit_value ?? cfg.limit_value;
  const displayRaw = limitValue && !isNaN(numValue) ? clamp(numValue, min, max) : rawValue;
  const displayValue = isUnavailable
    ? 'Unavailable'
    : ec.state_map?.[rawValue]
      ? ec.state_map[rawValue]
      : isBinary
        ? formatBinaryDisplay(rawValue, unit)
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

/**
 * Compute the bar width scale factor from entity/card config.
 * Clamps the raw bar_width (1–100) to a 0.01–1.0 multiplier.
 * Returns 1 (full width) when bar_width is not configured.
 * @param {import('./types.js').EntityConfig} ec - Entity config.
 * @param {import('./types.js').PulseCardConfig} cfg - Card config.
 * @returns {number} Scale factor 0.01–1.0.
 */
export function computeBarWidthScale(ec, cfg) {
  const raw = ec.bar_width ?? cfg.bar_width;
  return raw !== undefined && raw !== null ? Math.max(1, Math.min(100, raw)) / 100 : 1;
}

/**
 * Batch-fetch sparkline history data for multiple entities. [US-1]
 * Returns full history arrays (timestamp + value pairs) for SVG rendering.
 * @param {import('./types.js').Hass|null|undefined} hass - Home Assistant instance.
 * @param {string[]} entityIds - Entity IDs to query.
 * @param {number} [hoursToShow=24] - How far back to look in hours.
 * @returns {Promise<Record<string, {t:number, v:number}[]>>} Map of entity ID → data points.
 */
export async function fetchSparklineData(hass, entityIds, hoursToShow = 24) {
  /** @type {Record<string, {t:number, v:number}[]>} */
  const results = {};
  if (!hass?.callWS || entityIds.length === 0) return results;

  const now = new Date();
  const start = new Date(now.getTime() - hoursToShow * 60 * 60 * 1000);
  try {
    const history = await hass.callWS({
      type: 'history/history_during_period',
      start_time: start.toISOString(),
      end_time: now.toISOString(),
      entity_ids: entityIds,
      minimal_response: true,
      significant_changes_only: true,
    });
    for (const eid of entityIds) {
      const states = history?.[eid];
      if (!states || states.length < 2) {
        results[eid] = [];
        continue;
      }
      /** @type {{t:number, v:number}[]} */
      const points = [];
      for (const s of states) {
        const v = parseFloat(s.s);
        if (!isNaN(v)) {
          // lu is a Unix timestamp (seconds as float) in compressed format,
          // or an ISO string in non-compressed format (last_updated fallback).
          const rawTime = s.lu ?? s.last_updated;
          const t = typeof rawTime === 'number' ? rawTime * 1000 : new Date(rawTime).getTime();
          points.push({ t, v });
        }
      }
      results[eid] = points;
    }
  } catch (e) {
    warn('Sparkline fetch failed: %O', e);
    for (const eid of entityIds) results[eid] = [];
  }
  return results;
}

/**
 * Aggregate function map for sparkline downsampling.
 * @type {Record<string, (values: number[]) => number>}
 */
const AGGREGATE_FUNCS = {
  avg: (v) => v.reduce((s, x) => s + x, 0) / v.length,
  min: (v) => Math.min(...v),
  max: (v) => Math.max(...v),
  median: (v) => {
    const sorted = [...v].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
  },
  first: (v) => v[0],
  last: (v) => v[v.length - 1],
  sum: (v) => v.reduce((s, x) => s + x, 0),
  delta: (v) => Math.max(...v) - Math.min(...v),
  diff: (v) => v[v.length - 1] - v[0],
};

/**
 * Downsample data into fixed time slots with configurable aggregation and carry-forward.
 * @param {{t:number, v:number}[]} data - Input data points (sorted by t).
 * @param {number} slots - Number of output slots (e.g. hours_to_show × points_per_hour).
 * @param {string} [aggregateFunc='avg'] - Aggregation function name.
 * @returns {{x:number, v:number}[]} Evenly-spaced points with x = slot index ratio [0..1].
 */
function downsampleData(data, slots, aggregateFunc = 'avg') {
  if (data.length === 0 || slots < 1) return [];
  if (data.length <= slots) {
    const minT = data[0].t;
    const rangeT = data[data.length - 1].t - minT || 1;
    return data.map((d) => ({ x: (d.t - minT) / rangeT, v: d.v }));
  }

  const aggFn = AGGREGATE_FUNCS[aggregateFunc] || AGGREGATE_FUNCS.avg;
  const minT = data[0].t;
  const maxT = data[data.length - 1].t;
  const rangeT = maxT - minT || 1;
  const slotSize = rangeT / slots;

  /** @type {{x:number, v:number}[]} */
  const result = [];
  let di = 0;
  let lastV = data[0].v;

  for (let s = 0; s < slots; s++) {
    const sEnd = minT + (s + 1) * slotSize;
    /** @type {number[]} */
    const bucket = [];
    while (di < data.length && data[di].t < sEnd) {
      bucket.push(data[di].v);
      di++;
    }
    if (bucket.length > 0) {
      lastV = aggFn(bucket);
    }
    result.push({ x: s / (slots - 1 || 1), v: lastV });
  }
  return result;
}

/**
 * Build a smooth SVG path from sparkline data. [CP-1, CP-2]
 * Downsamples with configurable aggregation, then applies optional
 * midpoint + quadratic Bezier smoothing.
 * Auto-scales Y axis to the data range.
 * Returns empty string if fewer than 2 data points.
 * @param {{t:number, v:number}[]} data - Time-value pairs (sorted by t ascending).
 * @param {number} width - SVG viewBox width.
 * @param {number} height - SVG viewBox height.
 * @param {number} [slots=24] - Number of time slots for downsampling.
 * @param {string} [aggregateFunc='avg'] - Aggregation function name.
 * @param {boolean} [smoothing=true] - Apply quadratic Bezier smoothing.
 * @returns {string} SVG path d attribute string.
 */
export function buildSparklinePath(data, width, height, slots = 24, aggregateFunc = 'avg', smoothing = true) {
  if (data.length < 2) return '';

  const sampled = downsampleData(data, slots, aggregateFunc);
  if (sampled.length < 2) return '';

  // Find Y range from sampled data
  let minV = sampled[0].v;
  let maxV = sampled[0].v;
  for (let i = 1; i < sampled.length; i++) {
    if (sampled[i].v < minV) minV = sampled[i].v;
    if (sampled[i].v > maxV) maxV = sampled[i].v;
  }
  const rangeV = maxV - minV || 1;

  // Map to SVG coordinates with Y padding to prevent stroke clipping at edges
  const pad = 2; // px padding top/bottom inside viewBox
  const drawH = height - pad * 2;
  /** @type {{x:number, y:number}[]} */
  const pts = sampled.map((d) => ({
    x: d.x * width,
    y: pad + drawH - ((d.v - minV) / rangeV) * drawH,
  }));

  // 2 points or smoothing disabled — straight lines
  if (pts.length === 2 || !smoothing) {
    let d = `M${pts[0].x.toFixed(1)},${pts[0].y.toFixed(1)}`;
    for (let i = 1; i < pts.length; i++) {
      d += `L${pts[i].x.toFixed(1)},${pts[i].y.toFixed(1)}`;
    }
    return d;
  }

  // Midpoint + quadratic Bezier smoothing (mini-graph-card getPath technique)
  // For each pair of points, draw a line to the midpoint, then a Q curve
  // through the actual point to the next midpoint.
  let last = pts[0];
  let d = `M${last.x.toFixed(1)},${last.y.toFixed(1)}`;

  for (let i = 1; i < pts.length; i++) {
    const next = pts[i];
    const mx = (last.x + next.x) / 2;
    const my = (last.y + next.y) / 2;
    d += ` ${mx.toFixed(1)},${my.toFixed(1)}`;
    d += ` Q${next.x.toFixed(1)},${next.y.toFixed(1)}`;
    last = next;
  }
  // Final point
  d += ` ${last.x.toFixed(1)},${last.y.toFixed(1)}`;
  return d;
}

/**
 * Evaluate whether an entity bar should be visible based on visibility conditions. [US-2]
 * Returns true if no visibility config is set (default: always visible).
 * All conditions are AND-ed — all must be true for the bar to show.
 * @param {import('./types.js').EntityConfig} ec - Entity config.
 * @param {import('./types.js').Hass|null|undefined} hass - Home Assistant instance.
 * @returns {boolean} Whether the entity bar should be visible.
 */
export function evaluateVisibility(ec, hass) {
  if (!ec.visibility) return true;
  const state = hass?.states[ec.entity];
  if (!state) return false;
  const vis = ec.visibility;
  const rawValue = ec.attribute
    ? state.attributes?.[ec.attribute]
    : state.state;

  // Special states: hidden unless explicitly matched via state_equal
  if (!ec.attribute && (state.state === 'unavailable' || state.state === 'unknown' || state.state === 'error')) {
    return vis.state_equal !== undefined && String(vis.state_equal) === state.state;
  }

  const num = parseFloat(/** @type {string} */ (rawValue));
  if (vis.state_above !== undefined && (isNaN(num) || num <= vis.state_above)) return false;
  if (vis.state_below !== undefined && (isNaN(num) || num >= vis.state_below)) return false;
  if (vis.state_equal !== undefined && String(rawValue) !== String(vis.state_equal)) return false;
  if (vis.state_not_equal !== undefined && String(rawValue) === String(vis.state_not_equal)) return false;
  return true;
}

/**
 * Format an ISO timestamp as a relative time string (e.g. "5 min ago").
 * @internal
 * @param {string|undefined} isoString - ISO 8601 timestamp.
 * @returns {string} Relative time string, or empty string if invalid.
 */
function formatRelativeTime(isoString) {
  if (!isoString) return '';
  const then = new Date(isoString).getTime();
  if (isNaN(then)) return '';
  const diffMs = Date.now() - then;
  if (diffMs < 0) return 'just now';
  const seconds = Math.floor(diffMs / 1000);
  if (seconds < 60) return 'just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

/**
 * Resolve secondary info text for an entity bar.
 * Priority: text > attribute > type.
 * @param {import('./types.js').EntityConfig} ec - Entity config.
 * @param {import('./types.js').Hass|null|undefined} hass - Home Assistant instance.
 * @returns {string} Resolved secondary info text, or empty string if none.
 */
export function resolveSecondaryInfo(ec, hass) {
  const si = ec.secondary_info;
  if (!si) return '';

  // Priority 1: static text
  if (si.text !== undefined && si.text !== null && si.text !== '') {
    return String(si.text);
  }

  const state = hass?.states[ec.entity];
  if (!state) return '';

  // Priority 2: attribute value
  if (si.attribute) {
    const val = state.attributes?.[si.attribute];
    return val !== undefined && val !== null ? String(val) : '';
  }

  // Priority 3: type
  if (si.type === 'last_changed') {
    return formatRelativeTime(state.last_changed);
  }

  return '';
}

/**
 * Internal functions exposed for unit testing only.
 * Do NOT import in production code.
 * @internal
 */
export const _testExports = {
  computeFill,
  resolveSeverity,
  parseColor,
  interpolateColor,
  resolveGradientColor,
  resolveMinMax,
  formatValue,
  downsampleData,
  resolveBinaryValue,
  formatBinaryDisplay,
  formatRelativeTime,
};
