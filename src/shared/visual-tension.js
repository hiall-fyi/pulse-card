/**
 * @module shared/visual-tension
 * @description Shared visual tension primitives for data-driven emotional
 * response across all Pulse Card family members. Every visual effect
 * parameter (opacity, speed, size, glow) is driven by an intensity ratio
 * computed from actual sensor data.
 *
 * All exports are pure functions — data in, CSS values out. No DOM, no
 * state, no side effects.
 *
 * Primitive categories:
 * - **intensityRatio** — core mapper: value → 0.0–1.0
 * - **tensionWash** — radial-gradient background that scales with intensity
 * - **breatheDuration** — animation cycle speed (calm=slow, extreme=rapid)
 * - **tensionGlow** — text/box shadow that scales with intensity
 * - **tensionVignette** — edge-darkening overlay that closes in with intensity
 * - **sweepDuration** — rotation animation speed
 *
 * Usage:
 * ```js
 * import { intensityRatio, tensionWash, breatheDuration } from '../shared/visual-tension.js';
 * const ratio = intensityRatio(aqiValue, 0, 300);
 * const wash = tensionWash('#ff453a', ratio);
 * const dur = breatheDuration(ratio);
 * ```
 */

/**
 * Map a numeric value to a 0.0–1.0 intensity ratio.
 * @param {number} value - Current data value.
 * @param {number} calm - Value at which intensity = 0 (calm state).
 * @param {number} extreme - Value at which intensity = 1 (maximum tension).
 * @returns {number} Clamped ratio in [0.0, 1.0].
 */
export function intensityRatio(value, calm, extreme) {
  if (extreme === calm) return 0;
  return Math.max(0, Math.min(1, (value - calm) / (extreme - calm)));
}

/**
 * Generate a tension wash radial-gradient background.
 * Opacity and spread scale with intensity — barely visible at 0, dominant at 1.
 * Always returns a non-empty gradient (calm state has minimal tint for presence).
 * @param {string} color - Base hex color (e.g. '#ff453a').
 * @param {number} ratio - Intensity ratio 0.0–1.0.
 * @param {'ellipse'|'circle'} [shape='ellipse'] - Gradient shape.
 * @returns {string} CSS radial-gradient string.
 */
export function tensionWash(color, ratio, shape = 'ellipse') {
  const r = Math.max(0, Math.min(1, ratio));
  const centerAlpha = Math.round(3 + r * 50);
  const midAlpha = Math.round(2 + r * 25);
  const spread = Math.round(50 + r * 30);
  const hex = (/** @type {number} */ v) => v.toString(16).padStart(2, '0');
  return `radial-gradient(${shape} at 50% 30%, ${color}${hex(centerAlpha)} 0%, ${color}${hex(midAlpha)} ${spread}%, transparent 90%)`;
}

/**
 * Compute breathing animation duration from intensity.
 * Calm = slow breathing, extreme = rapid anxious pulse.
 * @param {number} ratio - Intensity ratio 0.0–1.0.
 * @param {number} [calmS=6] - Duration at calm (seconds).
 * @param {number} [extremeS=1.2] - Duration at extreme (seconds).
 * @returns {number} Duration in seconds.
 */
export function breatheDuration(ratio, calmS = 6, extremeS = 1.2) {
  const r = Math.max(0, Math.min(1, ratio));
  return calmS - r * (calmS - extremeS);
}

/**
 * Generate a glow shadow string that scales with intensity.
 * Minimal glow at 0, dramatic glow at 1.
 * @param {string} color - Base hex color.
 * @param {number} ratio - Intensity ratio 0.0–1.0.
 * @returns {string} CSS shadow string (for text-shadow or box-shadow).
 */
export function tensionGlow(color, ratio) {
  const r = Math.max(0, Math.min(1, ratio));
  const blur = Math.round(4 + r * 20);
  const spread = Math.round(r * 8);
  const alpha = Math.round((0.15 + r * 0.55) * 255);
  const hex = alpha.toString(16).padStart(2, '0');
  return `0 0 ${blur}px ${spread}px ${color}${hex}`;
}

/**
 * Generate a vignette radial-gradient that closes in with intensity.
 * Creates a tunnel-vision / suffocating effect at high intensity.
 * Returns empty string below threshold (no vignette at calm).
 * @param {number} ratio - Intensity ratio 0.0–1.0.
 * @param {string} [color='0,0,0'] - RGB string for vignette color.
 * @returns {string} CSS radial-gradient string, or empty string if ratio < 0.1.
 */
export function tensionVignette(ratio, color = '0,0,0') {
  const r = Math.max(0, Math.min(1, ratio));
  if (r < 0.1) return '';
  const innerStop = Math.round(60 - r * 30);
  const outerAlpha = (r * 0.5).toFixed(2);
  return `radial-gradient(ellipse at center, transparent ${innerStop}%, rgba(${color},${outerAlpha}) 100%)`;
}

/**
 * Compute sweep/rotation animation duration from intensity.
 * Calm = slow sweep, extreme = rapid sweep.
 * @param {number} ratio - Intensity ratio 0.0–1.0.
 * @param {number} [calmS=8] - Duration at calm (seconds).
 * @param {number} [extremeS=2] - Duration at extreme (seconds).
 * @returns {number} Duration in seconds.
 */
export function sweepDuration(ratio, calmS = 8, extremeS = 2) {
  const r = Math.max(0, Math.min(1, ratio));
  return calmS - r * (calmS - extremeS);
}
