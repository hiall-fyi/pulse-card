/**
 * @module shared/utils
 * @description Shared utility functions across all Pulse Card family members.
 */

/**
 * Escape HTML special characters to prevent XSS.
 * @param {*} str
 * @returns {string}
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
 * Sanitize a CSS value to prevent style injection.
 * @param {*} value
 * @returns {string}
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
 * Rejects strings longer than this cap before numeric-digit inspection to
 * rule out any ReDoS risk — a CSS dimension has no legitimate use case near
 * this length, so the cap is effectively unreachable in real configs.
 */
const CSS_VALUE_MAX_LEN = 32;

/**
 * Ensure a CSS dimension value has a unit.
 * @param {*} value
 * @returns {string}
 */
export function cssValue(value) {
  if (value === undefined || value === null || value === '') return '';
  const str = String(value);
  if (str.length > CSS_VALUE_MAX_LEN) return str;
  // Split-and-inspect avoids the eslint-plugin-security false positive on
  // the equivalent regex /^\d+(\.\d+)?$/ (non-nested quantifiers are
  // linear, but the detector flags optional groups conservatively).
  const parts = str.split('.');
  if (parts.length > 2) return str;
  for (const part of parts) {
    if (part.length === 0) return str;
    for (let i = 0; i < part.length; i++) {
      const c = part.charCodeAt(i);
      if (c < 48 || c > 57) return str; // not a digit
    }
  }
  return `${str}px`;
}

/**
 * Check if user prefers reduced motion.
 * Safe for non-browser environments (SSR, tests) — returns false.
 * @returns {boolean}
 */
export function isReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
}

/**
 * Format a numeric value for display, removing floating-point noise.
 * Rounds to the specified number of decimal places (default 1) and strips
 * trailing zeros. Non-numeric values pass through unchanged.
 * @param {*} value - Value to format.
 * @param {number} [decimals=1] - Maximum decimal places to show.
 * @returns {string} Formatted string.
 */
export function formatNumericDisplay(value, decimals = 1) {
  if (value === null || value === undefined) return '--';
  if (typeof value !== 'number') return String(value);
  if (!isFinite(value)) return '--';
  return String(parseFloat(value.toFixed(decimals)));
}

const SPARKLINE_LOG_PREFIX = 'Pulse sparkline:';

/**
 * Batch-fetch sparkline history data for multiple entities.
 * Returns full history arrays (timestamp + value pairs) for SVG rendering.
 * @param {*} hass - Home Assistant instance with callWS.
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
      try {
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
            const rawTime = s.lu ?? s.last_updated;
            const t = typeof rawTime === 'number' ? rawTime * 1000 : new Date(rawTime).getTime();
            if (isFinite(t)) points.push({ t, v });
          }
        }
        results[eid] = points;
      } catch (e) {
        // Isolate per-entity parsing errors so one bad entity doesn't block others.
        // Log so HA history-format drift is diagnosable instead of silently empty.
        console.warn(`${SPARKLINE_LOG_PREFIX} parse failed for %s: %O`, eid, e);
        results[eid] = [];
      }
    }
  } catch (e) {
    console.warn(`${SPARKLINE_LOG_PREFIX} fetch failed: %O`, e);
    for (const eid of entityIds) results[eid] = [];
  }
  return results;
}

/** @type {Record<string, (values: number[]) => number>} */
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
 * @param {number} slots - Number of output slots.
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
 * Build a smooth SVG path from sparkline data.
 * Downsamples with configurable aggregation, then applies optional
 * midpoint + quadratic Bezier smoothing. Auto-scales Y axis to the
 * data range. Returns empty string if fewer than 2 data points.
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

  let minV = sampled[0].v;
  let maxV = sampled[0].v;
  for (let i = 1; i < sampled.length; i++) {
    if (sampled[i].v < minV) minV = sampled[i].v;
    if (sampled[i].v > maxV) maxV = sampled[i].v;
  }
  const rangeV = maxV - minV || 1;

  const pad = 2;
  const drawH = height - pad * 2;
  /** @type {{x:number, y:number}[]} */
  const pts = sampled.map((d) => ({
    x: d.x * width,
    y: pad + drawH - ((d.v - minV) / rangeV) * drawH,
  }));

  if (pts.length === 2 || !smoothing) {
    let d = `M${pts[0].x.toFixed(1)},${pts[0].y.toFixed(1)}`;
    for (let i = 1; i < pts.length; i++) {
      d += `L${pts[i].x.toFixed(1)},${pts[i].y.toFixed(1)}`;
    }
    return d;
  }

  // Midpoint + quadratic Bezier smoothing (mini-graph-card getPath technique).
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
  d += ` ${last.x.toFixed(1)},${last.y.toFixed(1)}`;
  return d;
}
