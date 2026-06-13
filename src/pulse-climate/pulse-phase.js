/**
 * @module pulse-climate/pulse-phase
 * @description Idempotent attach point for the master pulse phase. The animation
 * itself lives in styles.js (`:host { animation: pc-master-pulse 4s ... }`) — this
 * module exists so future host-side wiring (cross-card sync, debug toggles) has
 * a single attach point.
 */

/**
 * Idempotent. Safe to call every render.
 * @param {*} host - the custom-element instance
 */
export function attachPhase(host) {
  if (!host || host.__pcPhaseAttached) return;
  host.__pcPhaseAttached = true;
}
