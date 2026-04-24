/**
 * @module pulse-climate/history
 * @description History cache management for Pulse Climate Card.
 */

/** Default sparkline fetch interval in ms (5 minutes). */
const SPARKLINE_INTERVAL = 5 * 60 * 1000;

// ── History Cache ───────────────────────────────────────────────────

/**
 * Create a new empty history cache.
 * @returns {import('./types.js').HistoryCache}
 */
export function createHistoryCache() {
  return { timestamp: 0, data: {} };
}

/**
 * Check if a history cache is still valid (within SPARKLINE_INTERVAL).
 * @param {import('./types.js').HistoryCache} cache
 * @returns {boolean}
 */
export function isCacheValid(cache) {
  return cache.timestamp > 0 && (Date.now() - cache.timestamp) < SPARKLINE_INTERVAL;
}

/**
 * Update cache with fresh data from fetchSparklineData.
 * Only merges entries with actual data — empty arrays from transient failures
 * do not overwrite existing cached data.
 * @param {import('./types.js').HistoryCache} cache
 * @param {Record<string, {t: number, v: number}[]>} freshData
 * @returns {import('./types.js').HistoryCache}
 */
export function updateCache(cache, freshData) {
  const merged = { ...cache.data };
  for (const [key, value] of Object.entries(freshData)) {
    if (value.length > 0) merged[key] = value;
  }
  return { timestamp: Date.now(), data: merged };
}
