/**
 * @module pulse-weather/narrative
 * @description Transition-narrative composer. Replaces the priority-cascade
 * buildWeatherSummary() with an "initial-state, then transition" engine.
 *
 * Output shape: { initial: string, transition: string|null, anchor: string|null }
 * Caller assembles as `${initial}, then ${transition} ${anchor}.` or
 * `${initial} ${anchor}.` when no transition is detected.
 */

import { formatDateTime } from './weather-primitives.js';

/**
 * Map a JS Date to a casual temporal anchor used in narrative tails. The
 * morning/afternoon/evening bucket is decided by the hour in the HA-configured
 * zone (browser-local when omitted), so a user abroad gets the anchor that
 * matches home time-of-day, not their travel location's.
 * @param {Date} now
 * @param {string} [timeZone] - IANA zone from resolveHassTimeZone; undefined → browser-local.
 * @returns {'this morning'|'this afternoon'|'this evening'|'tonight'}
 */
export function temporalAnchor(now, timeZone) {
  const h = timeZone
    ? Number(formatDateTime(now, timeZone, { hour: '2-digit', hourCycle: 'h23' }))
    : now.getHours();
  if (h >= 6 && h < 12) return 'this morning';
  if (h >= 12 && h < 17) return 'this afternoon';
  if (h >= 17 && h < 21) return 'this evening';
  return 'tonight';
}

/**
 * @typedef {object} HourlySlot
 * @property {number} [precipitation_probability]
 * @property {number} [cloud_coverage]
 * @property {number} [snowfall]
 * @property {number} [wind_speed]
 * @property {number} [cape]
 */

/**
 * @typedef {object} NarrativeInput
 * @property {Date} now
 * @property {number} cloudCoverNow - Current cloud coverage 0–100.
 * @property {string} conditionNow - HA weather entity state.
 * @property {Array<HourlySlot>} slots - Hourly forecast slots, next 6h preferred.
 * @property {number} windSpeed - Current wind speed km/h.
 * @property {string} stabilityState - Atmos CE stability_assessment.
 * @property {number|null} uvIndex
 * @property {string} [timeZone] - IANA zone from resolveHassTimeZone; undefined → browser-local time-of-day anchor.
 */

/**
 * @typedef {object} NarrativeOutput
 * @property {string} initial
 * @property {string|null} transition
 * @property {string|null} anchor
 * @property {string} sentence - Pre-assembled sentence.
 */

/**
 * Build the initial-state clause from current conditions.
 * @param {string} conditionNow
 * @param {number} cloudCoverNow
 * @returns {string}
 */
function initialClause(conditionNow, cloudCoverNow) {
  if (conditionNow === 'sunny' || conditionNow === 'clear-night') return 'Clear skies';
  if (conditionNow === 'rainy' || conditionNow === 'pouring') return 'Rain';
  if (conditionNow === 'snowy' || conditionNow === 'snowy-rainy') return 'Snow';
  if (conditionNow === 'lightning' || conditionNow === 'lightning-rainy') return 'Storms';
  if (conditionNow === 'fog') return 'Fog';
  if (cloudCoverNow >= 88) return 'Overcast';
  if (cloudCoverNow >= 50) return 'Mostly cloudy';
  if (cloudCoverNow >= 12) return 'Some sun';
  return 'Sunny';
}

/**
 * Detect a meaningful transition over the next 6 hours.
 * @param {NarrativeInput} input
 * @returns {string|null}
 */
function detectTransition(input) {
  const next6 = input.slots.slice(0, 6);
  if (next6.length === 0) return null;

  const cloudFuture = Number(next6[next6.length - 1].cloud_coverage);
  const cloudDelta = Number.isFinite(cloudFuture) ? cloudFuture - input.cloudCoverNow : 0;

  const peakProb = next6.reduce((m, s) => Math.max(m, Number(s.precipitation_probability) || 0), 0);
  const peakSnow = next6.reduce((m, s) => Math.max(m, Number(s.snowfall) || 0), 0);

  const peakWind = next6.reduce((m, s) => Math.max(m, Number(s.wind_speed) || 0), input.windSpeed);
  const windDelta = peakWind - input.windSpeed;

  const stormTier = ['moderate', 'high'].includes(input.stabilityState);

  // Severity ranking: storm > heavy precip > light precip > cloud shift > wind > none
  if (stormTier) return 'with thunderstorms developing';
  if (peakProb >= 60) return peakSnow > 0 ? 'with snow likely' : 'with rain likely';
  if (peakProb >= 40) return peakSnow > 0 ? 'with snow possible' : 'with a brief shower or two';
  if (cloudDelta >= 30) return 'then increasing clouds';
  if (cloudDelta <= -30) return 'then clearing';
  if (windDelta >= 8) return 'with wind firming';
  return null;
}

/**
 * Compose the narrative for the overview section.
 * @param {NarrativeInput} input
 * @returns {NarrativeOutput}
 */
export function composeNarrative(input) {
  const initial = initialClause(input.conditionNow, Number(input.cloudCoverNow) || 0);
  const transition = detectTransition(input);
  const anchor = transition ? temporalAnchor(input.now, input.timeZone) : null;

  let sentence;
  if (transition) {
    // Transitions starting with "then" already lead the connector
    if (transition.startsWith('then ')) {
      sentence = `${initial}, ${transition} ${anchor}.`;
    } else {
      sentence = `${initial}, then ${transition} ${anchor}.`;
    }
  } else {
    sentence = `${initial} ${temporalAnchor(input.now, input.timeZone)}.`;
  }
  // Capitalise sentence first letter is already enforced by initialClause.
  return { initial, transition, anchor, sentence };
}
