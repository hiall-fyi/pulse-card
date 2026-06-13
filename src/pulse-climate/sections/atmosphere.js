/**
 * @module pulse-climate/sections/atmosphere
 * @description Single-state radial wash backdrop. Heating wash sweeps from
 * the top, cooling wash sweeps from the bottom, mixed shows both with
 * reduced intensity. Idle/off render nothing so the dashboard stays quiet
 * when nothing is happening.
 *
 * Pure renderer; consumes state classification from utils.classifyClimateState.
 */

const VALID_STATES = new Set(['heating', 'cooling', 'mixed']);
const VALID_INTENSITIES = new Set(['subtle', 'medium', 'bold']);

/**
 * Render the atmosphere wash backdrop.
 *
 * @param {'heating'|'cooling'|'mixed'|'idle'|'off'|null|undefined} state
 *   - From classifyClimateState. idle/off/null/unknown render nothing.
 * @param {'subtle'|'medium'|'bold'|undefined} intensity - Wash opacity tier.
 * @returns {string} HTML string (empty when state should not render).
 */
export function renderAtmosphere(state, intensity) {
  if (!state || !VALID_STATES.has(state)) return '';
  const safeIntensity = (intensity && VALID_INTENSITIES.has(intensity)) ? intensity : 'medium';
  return `<div class="pc-atmosphere-wash pc-state-${state} pc-intensity-${safeIntensity}" aria-hidden="true"></div>`;
}
