/**
 * @module pulse-climate/history
 * @description History cache management for Pulse Climate Card.
 * Includes a module-level shared cache so multiple card instances on the
 * same dashboard share history data instead of each firing independent
 * WebSocket calls for the same entities.
 */

/** Default sparkline fetch interval in ms (5 minutes). */
const SPARKLINE_INTERVAL = 5 * 60 * 1000;

// ── Shared Module-Level Cache ───────────────────────────────────────
// Multiple pulse-climate-card instances on the same page share this cache.
// The first instance to detect an expired cache fetches fresh data and
// updates the shared store; subsequent instances reuse it.

/** @type {import('./types.js').HistoryCache} */
let _sharedCache = { timestamp: 0, data: {} };

/**
 * Get the shared module-level history cache.
 * Card instances should prefer this over their own cache when valid.
 * @returns {import('./types.js').HistoryCache}
 */
export function getSharedCache() {
  return _sharedCache;
}

/**
 * Update the shared module-level cache with fresh data.
 * Merges into existing shared data so entities fetched by different
 * card instances accumulate in the same store.
 * @param {Record<string, {t: number, v: number}[]>} freshData
 * @returns {import('./types.js').HistoryCache} The updated shared cache.
 */
export function updateSharedCache(freshData) {
  const merged = { ..._sharedCache.data };
  for (const [key, value] of Object.entries(freshData)) {
    if (value.length > 0) merged[key] = value;
  }
  _sharedCache = { timestamp: Date.now(), data: merged };
  return _sharedCache;
}

// ── Per-Instance History Cache ──────────────────────────────────────

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
