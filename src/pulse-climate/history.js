/**
 * @module pulse-climate/history
 * @description History cache management for Pulse Climate Card.
 * Includes a module-level shared cache so multiple card instances on the
 * same dashboard share history data instead of each firing independent
 * WebSocket calls for the same entities.
 */

/** Default sparkline fetch interval in ms (5 minutes). */
export const SPARKLINE_INTERVAL = 5 * 60 * 1000;

// ── Shared Module-Level Cache ───────────────────────────────────────
// Multiple pulse-climate-card instances on the same page share this cache.
// The first instance to detect an expired cache fetches fresh data and
// updates the shared store; subsequent instances reuse it.

/** @type {import('./types.js').HistoryCache} */
let _sharedCache = { timestamp: 0, data: {}, stateData: {}, fetchedAt: {} };

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
 *
 * @param {Record<string, {t: number, v: number}[]>} freshData
 * @param {Record<string, {t: number, state: string, power: number}[]>} [freshStateData] - HVAC state history (used by timeline_group's State tab).
 * @returns {import('./types.js').HistoryCache} The updated shared cache.
 */
export function updateSharedCache(freshData, freshStateData) {
  _sharedCache = updateCache(_sharedCache, freshData, freshStateData);
  return _sharedCache;
}

// ── Per-Instance History Cache ──────────────────────────────────────

/**
 * Create a new empty history cache.
 * @returns {import('./types.js').HistoryCache}
 */
export function createHistoryCache() {
  return { timestamp: 0, data: {}, stateData: {}, fetchedAt: {} };
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
 * Check that every needed key was fetched within SPARKLINE_INTERVAL.
 * @param {import('./types.js').HistoryCache} cache
 * @param {string[]} ids - Temperature/hub entity ids (key = entity id).
 * @param {string[]} [climateIds] - Climate ids whose state history is needed (key = `state:<id>`).
 * @param {number} [now]
 * @returns {boolean}
 */
export function cacheCovers(cache, ids, climateIds = [], now = Date.now()) {
  const stamps = cache.fetchedAt || {};
  const isFresh = (/** @type {string} */ key) => stamps[key] > 0 && (now - stamps[key]) < SPARKLINE_INTERVAL;
  return ids.every(isFresh) && climateIds.every((id) => isFresh('state:' + id));
}

/**
 * Merge fresh fetch results into a cache; only non-empty arrays replace data and get a fresh per-key stamp.
 * @param {import('./types.js').HistoryCache} cache
 * @param {Record<string, {t: number, v: number}[]>} freshData
 * @param {Record<string, {t: number, state: string, power: number}[]>} [freshStateData]
 * @returns {import('./types.js').HistoryCache}
 */
export function updateCache(cache, freshData, freshStateData) {
  const now = Date.now();
  const merged = { ...cache.data };
  const mergedState = { ...cache.stateData };
  const fetchedAt = { ...cache.fetchedAt };
  for (const [key, value] of Object.entries(freshData)) {
    if (value.length > 0) {
      merged[key] = value;
      fetchedAt[key] = now;
    }
  }
  for (const [key, value] of Object.entries(freshStateData || {})) {
    if (Array.isArray(value) && value.length > 0) {
      mergedState[key] = value;
      fetchedAt['state:' + key] = now;
    }
  }
  return { ...cache, timestamp: now, data: merged, stateData: mergedState, fetchedAt };
}
