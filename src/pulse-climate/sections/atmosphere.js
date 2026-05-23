/**
 * @module pulse-climate/sections/atmosphere
 * @description Pure renderer for the card-level atmosphere backdrop.
 * Outputs a single decorative div whose state and intensity classes are
 * styled by src/pulse-climate/styles.js. No data dependencies — the caller
 * passes the climate state from classifyClimateState.
 */

const VALID_STATES = new Set(['heating', 'cooling', 'mixed', 'idle', 'off']);
const VALID_INTENSITIES = new Set(['subtle', 'medium', 'bold']);

/**
 * Render the atmosphere backdrop layer.
 *
 * @param {'heating'|'cooling'|'mixed'|'idle'|'off'|null|undefined} state
 *   - The home climate state from classifyClimateState. null/undefined → empty.
 * @param {'subtle'|'medium'|'bold'|undefined} intensity - Backdrop opacity tier.
 * @returns {string} HTML string (empty if state is null/undefined/unknown).
 */
export function renderAtmosphere(state, intensity) {
  if (state === null || state === undefined || !VALID_STATES.has(state)) return '';
  const safeIntensity = (intensity !== undefined && VALID_INTENSITIES.has(intensity)) ? intensity : 'medium';
  return `<div class="pc-atmosphere-backdrop pc-state-${state} pc-intensity-${safeIntensity}" aria-hidden="true"></div>`;
}
