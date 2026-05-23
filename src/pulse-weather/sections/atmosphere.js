/**
 * @module pulse-weather/sections/atmosphere
 * @description Atmospheric stability column visualization with thermal
 * particles, freezing level and LCL markers, and Atmos CE composite
 * stability assessment integration. Replaces the previous gauge display.
 *
 * Pure functions (exported for testing):
 * - ATMOS_CE_TIER_MAP — tier mapping constant
 * - resolveStabilityTier — composite sensor → fallback resolution
 * - columnFillHeight — score → fill percentage
 * - freezeMarkerPosition — altitude → column position
 * - particleConfig — score → particle parameters
 * - buildThermalParticles — score + color → DOM fragment
 */

import { capeColor, escapeHtml, sanitizeCssValue, deriveTodaySunBoundaries } from '../weather-primitives.js';
import { LIFTED_INDEX_TIERS, LOG_PREFIX } from '../constants.js';
import { renderSectionShell } from '../section-shell.js';
import { t } from '../type-system.js';


/**
 * Map Atmos CE stability_assessment sensor states to Pulse Card display tiers.
 * Atmos CE uses NWS SPC naming (6 tiers + unknown).
 * @type {Readonly<Record<string, {label: string, color: string, desc: string}>>}
 */
export const ATMOS_CE_TIER_MAP = Object.freeze({
  none:     { label: 'Stable',   color: '#30d158', desc: 'No thunderstorm risk' },
  marginal: { label: 'Marginal', color: '#ffd60a', desc: 'Isolated storms possible' },
  slight:   { label: 'Slight',   color: '#ff9f0a', desc: 'Brief storms possible' },
  enhanced: { label: 'Enhanced', color: '#ff6b35', desc: 'Organized storms likely' },
  moderate: { label: 'Moderate', color: '#ff453a', desc: 'Severe storms expected' },
  high:     { label: 'Extreme',  color: '#8b0000', desc: 'Dangerous storm potential' },
  unknown:  { label: 'Unknown',  color: '#888888', desc: 'Insufficient data' },
});

/**
 * Map Atmos CE tier states to fill height percentages.
 * Used when composite sensor is the source — provides visual consistency
 * between tier label and column fill.
 * @type {Readonly<Record<string, number>>}
 */
export const TIER_FILL_MAP = Object.freeze({
  none: 5, marginal: 20, slight: 40,
  enhanced: 60, moderate: 80, high: 100, unknown: 0,
});


/**
 * Look up lifted index tier.
 * @param {number} value - Lifted index value.
 * @returns {{color: string, label: string}}
 */
function liftedIndexTier(value) {
  for (const tier of LIFTED_INDEX_TIERS) {
    if (value >= tier.min) return tier;
  }
  return LIFTED_INDEX_TIERS[LIFTED_INDEX_TIERS.length - 1];
}

/**
 * Compute combined instability score (0–100) from CAPE and Lifted Index.
 * CAPE contributes 60%, LI contributes 40% — CAPE is the stronger signal.
 * Used as fallback when composite sensor unavailable, and always for fill height.
 *
 * Inputs assume Atmos CE's normalised units. A non-Atmos provider that
 * exposes CAPE in kJ/kg or LI in some scaled form will saturate the score
 * at one extreme and the column will misread.
 *
 * @param {number} cape - CAPE in J/kg (0 = stable, 4000+ = extreme). Saturates at 4000.
 * @param {number} li - Lifted Index, dimensionless (+6 = very stable, -6 = very unstable).
 * @returns {number} Score 0–100.
 */
export function instabilityScore(cape, li) {
  const capeScore = Math.min(100, (cape / 4000) * 100);
  const liScore = Math.min(100, Math.max(0, ((6 - li) / 12) * 100));
  return Math.round(capeScore * 0.6 + liScore * 0.4);
}

/**
 * Get instability tier from score. Fallback when composite sensor unavailable.
 * `tierKey` aligns with ATMOS_CE_TIER_MAP so downstream narrative / variant
 * decisions stay key-based, even though the fallback emits its own display
 * `label` vocabulary (Stable / Marginal / Moderate / High / Extreme) that
 * doesn't 1:1 match the composite-sensor labels.
 * @param {number} score - 0–100.
 * @returns {{tierKey: string, label: string, color: string, desc: string}}
 */
function instabilityTier(score) {
  if (score <= 10) return { tierKey: 'none', label: 'Stable', color: '#30d158', desc: 'No thunderstorm risk' };
  if (score <= 30) return { tierKey: 'marginal', label: 'Marginal', color: '#ffd60a', desc: 'Isolated storms possible' };
  if (score <= 55) return { tierKey: 'slight', label: 'Moderate', color: '#ff9f0a', desc: 'Scattered storms likely' };
  if (score <= 80) return { tierKey: 'moderate', label: 'High', color: '#ff453a', desc: 'Severe storms expected' };
  return { tierKey: 'high', label: 'Extreme', color: '#8b0000', desc: 'Dangerous storm potential' };
}



/**
 * @typedef {object} ResolvedTier
 * @property {string} tierKey - ATMOS_CE_TIER_MAP key (none|marginal|slight|enhanced|moderate|high|unknown).
 * @property {string} label - Display label (e.g. 'Moderate').
 * @property {string} color - Hex color.
 * @property {string} desc - Description text.
 * @property {number|null} score - Instability score 0–100 (for fill height).
 * @property {string} source - 'composite' or 'fallback'.
 * @property {Record<string, unknown>|null} attrs - Composite sensor extra_state_attributes (or null).
 * @property {number} capeValue - Raw CAPE value (J/kg), 0 if unavailable.
 * @property {number} liValue - Raw Lifted Index value, 0 if unavailable.
 * @property {boolean} hasCape - Whether CAPE sensor is available.
 * @property {boolean} hasLI - Whether Lifted Index sensor is available.
 */

/**
 * Resolve stability tier — prefer Atmos CE composite sensor, fallback to score.
 * When composite is source, fill height uses TIER_FILL_MAP for visual consistency.
 * When fallback, fill height uses instabilityScore(cape, li).
 * @param {{states: Object<string, {state: string, attributes: Object}>}} hass - Home Assistant state object.
 * @param {import('../types.js').WeatherDiscovery} discovery - Discovery result.
 * @returns {ResolvedTier}
 */
export function resolveStabilityTier(hass, discovery) {
  const ce = discovery.atmosCe;

  // Always compute score from CAPE + LI for fill height
  const capeValue = ce.cape && hass.states[ce.cape]
    ? Number(hass.states[ce.cape].state) || 0 : 0;
  const liValue = ce.lifted_index && hass.states[ce.lifted_index]
    ? Number(hass.states[ce.lifted_index].state) || 0 : 0;
  const hasCape = !!(ce.cape && hass.states[ce.cape]);
  const hasLI = !!(ce.lifted_index && hass.states[ce.lifted_index]);
  const score = (hasCape || hasLI) ? instabilityScore(capeValue, liValue) : null;

  // Primary: Atmos CE composite assessment sensor
  if (ce.stability_assessment && hass.states[ce.stability_assessment]) {
    const state = hass.states[ce.stability_assessment].state;
    const attrs = /** @type {Record<string, unknown>} */ (hass.states[ce.stability_assessment].attributes || {});
    const mapped = ATMOS_CE_TIER_MAP[state];
    if (mapped) {
      const tierScore = TIER_FILL_MAP[state] ?? 0;
      return { tierKey: state, ...mapped, score: tierScore, source: 'composite', attrs, capeValue, liValue, hasCape, hasLI };
    }
  }

  // Fallback: compute from CAPE + LI
  const tier = score !== null ? instabilityTier(score) : null;
  return {
    tierKey: tier?.tierKey || 'unknown',
    label: tier?.label || 'Unknown',
    color: tier?.color || '#888888',
    desc: tier?.desc || '',
    score,
    source: 'fallback',
    attrs: null,
    capeValue,
    liValue,
    hasCape,
    hasLI,
  };
}

/**
 * Compute CAPE fill height as percentage of column.
 * Direct 1:1 mapping — kept as named function for future non-linear mapping.
 * @param {number} score - Instability score 0–100.
 * @returns {number} Fill height percentage, clamped [0, 100].
 */
export function columnFillHeight(score) {
  return Math.max(0, Math.min(100, score));
}

/**
 * Compute marker position as percentage from bottom of column.
 * @param {number} altitudeM - Altitude in meters.
 * @param {number} [scaleMaxM=5000] - Column scale maximum in meters.
 * @returns {number} Position percentage, clamped [0, 100].
 */
export function freezeMarkerPosition(altitudeM, scaleMaxM = 5000) {
  if (scaleMaxM <= 0) return 0;
  return Math.max(0, Math.min(100, (altitudeM / scaleMaxM) * 100));
}


/**
 * @typedef {object} ColumnScale
 * @property {number} scaleMax - Column maximum in meters (≥5000).
 * @property {number} labelInterval - Interval between labels in meters.
 * @property {number[]} labels - Scale label values from top to bottom (e.g. [8000, 6000, 4000, 2000, 0]).
 */

/**
 * Compute dynamic column scale to ensure all markers are visible.
 * Default 5km. Auto-extends when any marker exceeds 80% of scale,
 * with 25% headroom rounded up to nearest 1000m.
 * @param {number} freezeAltM - Freezing level altitude in meters (0 if unavailable).
 * @param {number} lclAltM - LCL height in meters (0 if unavailable).
 * @returns {ColumnScale}
 */
export function computeColumnScale(freezeAltM, lclAltM) {
  const DEFAULT_SCALE = 5000;
  const THRESHOLD_RATIO = 0.8;
  const HEADROOM = 1.25;

  const maxAlt = Math.max(freezeAltM, lclAltM);
  let scaleMax = DEFAULT_SCALE;

  if (maxAlt > DEFAULT_SCALE * THRESHOLD_RATIO) {
    scaleMax = Math.max(DEFAULT_SCALE, Math.ceil((maxAlt * HEADROOM) / 1000) * 1000);
  }

  const labelInterval = Math.ceil(scaleMax / 5000) * 1000;
  // Round scaleMax up to a multiple of labelInterval so the label ladder
  // descends evenly to 0 — otherwise the last gap collapses (e.g. scaleMax
  // 7000 with interval 2000 produced labels [7000, 5000, 3000, 1000, 0]
  // where the final 1000 → 0 step was half the others).
  scaleMax = Math.ceil(scaleMax / labelInterval) * labelInterval;
  const labels = [];
  for (let alt = scaleMax; alt >= 0; alt -= labelInterval) {
    labels.push(alt);
  }

  return { scaleMax, labelInterval, labels };
}


/**
 * Convert cloud cover percentage to band opacity.
 * @param {number} coverPct - Cloud cover 0–100%.
 * @returns {number} Opacity 0–0.35 (capped to avoid obscuring column content).
 */
export function cloudBandOpacity(coverPct) {
  const clamped = Math.max(0, Math.min(100, coverPct));
  return (clamped / 100) * 0.35;
}


/**
 * Severity rank for Atmos CE composite-sensor per-dimension tiers.
 * Used to spot a shear-dominated headline tier — when CAPE / LI /
 * lapse all read `none` but `wind_shear_tier` is `slight` or above,
 * the composite escalates to e.g. "Moderate" and the existing
 * tier-description wording would promise "severe storms expected"
 * even though there's no thermal fuel for storms to form.
 * @type {Readonly<Record<string, number>>}
 */
const ATMOS_TIER_RANK = Object.freeze({
  none: 0, unknown: 0, marginal: 1, slight: 2, enhanced: 3, moderate: 4, high: 5,
});

/**
 * Classify which dimension drives the composite stability tier.
 * Returns null when the composite sensor's per-dimension attributes
 * are unavailable (fallback path or non-Atmos CE source).
 *
 * @param {Record<string, unknown>|null|undefined} attrs - Composite sensor extra_state_attributes.
 * @returns {{maxThermal: number, shearTier: number}|null}
 */
function classifyAtmosDriver(attrs) {
  if (!attrs) return null;
  /** @param {string} key @returns {number} */
  const tierRank = (key) => ATMOS_TIER_RANK[String(attrs[key] || 'none')] ?? 0;
  return {
    maxThermal: Math.max(
      tierRank('cape_tier'),
      tierRank('lifted_index_tier'),
      tierRank('lapse_rate_tier'),
    ),
    shearTier: tierRank('wind_shear_tier'),
  };
}

/**
 * Compose the storm-risk narrative for the atmosphere hero subline.
 * Refuses to invent a peak time when the forecast doesn't expose CAPE
 * (Met Office and most public providers don't), short-circuits to a
 * shear-dominated subline when wind shear elevates the headline tier
 * but no thermal fuel exists, and adapts wording to whether the viewer
 * is before / during / after the peak and before / after sunset.
 *
 * @param {object} input
 * @param {string} input.tierKey - Stability tier key (none|marginal|slight|enhanced|moderate|high|unknown).
 * @param {string} input.tierDesc - Tier description fallback (e.g. "Brief storms possible").
 * @param {ReadonlyArray<Record<string, unknown>>|undefined|null} input.hourly - Hourly forecast slots. Each slot's `cape` field is read as J/kg (Atmos CE convention); other-unit feeds will misread the peak.
 * @param {Date} input.now - Reference "now".
 * @param {Date|null} input.todaySunset - Today's sunset, or null if unavailable.
 * @param {Record<string, unknown>|null|undefined} [input.attrs] - Composite sensor extra_state_attributes (drives shear-only detection).
 * @returns {string}
 */
export function composeStormNarrative({ tierKey, tierDesc, hourly, now, todaySunset, attrs }) {
  if (tierKey === 'none' || tierKey === 'unknown') {
    return 'Atmosphere settled · no convective signals';
  }

  // Shear-dominated short-circuit: composite tier escalated by wind
  // shear alone (CAPE / LI / lapse all `none`). "Severe storms
  // expected" would mislead — name the shear and skip storm wording.
  const driver = classifyAtmosDriver(attrs);
  if (driver && driver.maxThermal === 0 && driver.shearTier >= 2) {
    return 'Wind shear elevated · atmosphere thermally quiet';
  }

  const sunsetMs = todaySunset && !isNaN(todaySunset.getTime()) ? todaySunset.getTime() : null;
  const nowMs = now.getTime();
  const sunsetPassed = sunsetMs !== null && nowMs >= sunsetMs;

  // Locate forecast peak — only honour when hourly slots actually carry
  // CAPE. An all-zero series collapses indexOf to slot 0 and would
  // falsely claim the peak is happening "now".
  const slots = Array.isArray(hourly) ? hourly.slice(0, 6) : [];
  const cape6h = slots.map((h) => Number(h && /** @type {Record<string, unknown>} */ (h).cape) || 0);
  const hasForecastCape = cape6h.some((v) => Number.isFinite(v) && v > 0);

  /** @type {string|null} */ let peakLabel = null;
  /** @type {number|null} */ let peakMs = null;
  if (hasForecastCape) {
    const actualPeak = Math.max(...cape6h);
    if (actualPeak > 0) {
      const peakSlot = slots[cape6h.indexOf(actualPeak)];
      const peakDt = peakSlot ? /** @type {Record<string, unknown>} */ (peakSlot).datetime : null;
      const peakDate = peakDt ? new Date(String(peakDt)) : null;
      if (peakDate && !isNaN(peakDate.getTime())) {
        peakLabel = peakDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
        peakMs = peakDate.getTime();
      }
    }
  }

  // No usable peak time → lean on tier description, optionally suffixed
  // by sunset state. Never fabricate a clock time.
  if (peakLabel === null || peakMs === null) {
    const base = tierDesc || 'Storm risk active';
    return sunsetPassed ? `${base} · calming overnight` : base;
  }

  const PEAK_WINDOW_MS = 30 * 60 * 1000;
  const peakInPast = peakMs < nowMs - PEAK_WINDOW_MS;
  const peakNow = peakMs >= nowMs - PEAK_WINDOW_MS && peakMs <= nowMs + PEAK_WINDOW_MS;

  if (peakInPast) {
    return sunsetPassed
      ? `Storm risk easing — peaked ${peakLabel}, calming overnight`
      : `Storm risk easing — peaked ${peakLabel}`;
  }
  if (peakNow) {
    if (sunsetPassed) return 'Storm risk peaking now, calming overnight';
    if (sunsetMs !== null) return 'Storm risk peaking now, calming after sunset';
    return 'Storm risk peaking now';
  }
  // Peak in the future
  if (sunsetMs !== null && peakMs < sunsetMs) {
    return `Storm risk peaks ${peakLabel}, calming after sunset`;
  }
  if (sunsetMs !== null) {
    // Peak falls after sunset — don't promise "calming after sunset".
    return `Storm risk peaks ${peakLabel} (after sunset)`;
  }
  return `Storm risk peaks ${peakLabel}`;
}


/**
 * Atmos CE-aligned wind shear fallback thresholds (stability.py:201-207).
 * Used when composite sensor is unavailable.
 * @type {ReadonlyArray<Readonly<{max: number, tier: string}>>}
 */
export const SHEAR_FALLBACK_TIERS = Object.freeze([
  Object.freeze({ max: 30, tier: 'none' }),
  Object.freeze({ max: 40, tier: 'marginal' }),
  Object.freeze({ max: 50, tier: 'slight' }),
  Object.freeze({ max: 60, tier: 'enhanced' }),
  Object.freeze({ max: 75, tier: 'moderate' }),
]);

/**
 * Resolve wind shear severity color.
 * Primary: read wind_shear_tier from composite sensor extra_state_attributes.
 * Fallback: classify using Atmos CE-aligned thresholds.
 * @param {number} shearVal - Wind shear value in km/h.
 * @param {Record<string, unknown>|null} resolvedAttrs - Composite sensor extra_state_attributes.
 * @returns {{color: string, tier: string}}
 */
export function resolveShearColor(shearVal, resolvedAttrs) {
  if (resolvedAttrs && typeof resolvedAttrs.wind_shear_tier === 'string') {
    const tierKey = resolvedAttrs.wind_shear_tier;
    const mapped = ATMOS_CE_TIER_MAP[tierKey];
    if (mapped) return { color: mapped.color, tier: tierKey };
  }

  for (const { max, tier } of SHEAR_FALLBACK_TIERS) {
    if (shearVal < max) {
      const mapped = ATMOS_CE_TIER_MAP[tier];
      return { color: mapped?.color || '#888888', tier };
    }
  }
  return { color: ATMOS_CE_TIER_MAP.high?.color || '#8b0000', tier: 'high' };
}

/**
 * Atmos CE-aligned lapse rate fallback thresholds (stability.py:210-216).
 * Used when composite sensor is unavailable.
 * @type {ReadonlyArray<Readonly<{max: number, tier: string}>>}
 */
export const LAPSE_FALLBACK_TIERS = Object.freeze([
  Object.freeze({ max: 6.0, tier: 'none' }),
  Object.freeze({ max: 6.5, tier: 'marginal' }),
  Object.freeze({ max: 7.5, tier: 'slight' }),
  Object.freeze({ max: 8.0, tier: 'enhanced' }),
  Object.freeze({ max: 9.0, tier: 'moderate' }),
]);

/**
 * Resolve lapse rate severity color.
 * Primary: read lapse_rate_tier from composite sensor extra_state_attributes.
 * Fallback: classify using Atmos CE-aligned thresholds.
 * @param {number} lapseVal - Lapse rate in °C/km.
 * @param {Record<string, unknown>|null} resolvedAttrs - Composite sensor extra_state_attributes.
 * @returns {{color: string, tier: string}}
 */
export function resolveLapseColor(lapseVal, resolvedAttrs) {
  if (resolvedAttrs && typeof resolvedAttrs.lapse_rate_tier === 'string') {
    const tierKey = resolvedAttrs.lapse_rate_tier;
    const mapped = ATMOS_CE_TIER_MAP[tierKey];
    if (mapped) return { color: mapped.color, tier: tierKey };
  }

  for (const { max, tier } of LAPSE_FALLBACK_TIERS) {
    if (lapseVal < max) {
      const mapped = ATMOS_CE_TIER_MAP[tier];
      return { color: mapped?.color || '#888888', tier };
    }
  }
  return { color: ATMOS_CE_TIER_MAP.high?.color || '#8b0000', tier: 'high' };
}


/**
 * Build atmosphere detail panel HTML for tap-to-expand.
 * @param {ResolvedTier} resolved
 * @param {{states: Object<string, {state: string, attributes: Record<string, unknown>}>}} hass
 * @param {import('../types.js').WeatherDiscovery} discovery
 * @returns {string} HTML string, empty if no data.
 */
export function buildDetailPanelHtml(resolved, hass, discovery) {
  const ce = discovery.atmosCe;
  const rows = [];

  // CAPE
  if (resolved.hasCape) {
    const color = capeColor(resolved.capeValue);
    rows.push(`<div class="pw-atmos-detail-row">
      <div class="pw-atmos-detail-indicator" style="background:${sanitizeCssValue(color)}"></div>
      <div><div class="pw-atmos-detail-value" style="color:${sanitizeCssValue(color)}">${escapeHtml(String(Math.round(resolved.capeValue)))} J/kg</div>
      <div class="pw-atmos-detail-label">CAPE</div>
      <div class="pw-atmos-detail-desc">${escapeHtml(resolved.desc || '')}</div></div>
    </div>`);
  }

  // Lifted Index
  if (resolved.hasLI) {
    const liTier = liftedIndexTier(resolved.liValue);
    rows.push(`<div class="pw-atmos-detail-row">
      <div class="pw-atmos-detail-indicator" style="background:${sanitizeCssValue(liTier.color)}"></div>
      <div><div class="pw-atmos-detail-value" style="color:${sanitizeCssValue(liTier.color)}">${escapeHtml(resolved.liValue >= 0 ? '+' : '')}${escapeHtml(resolved.liValue.toFixed(1))}</div>
      <div class="pw-atmos-detail-label">Lifted Index</div>
      <div class="pw-atmos-detail-desc">${escapeHtml(liTier.label)}</div></div>
    </div>`);
  }

  // Wind Shear
  const shearEid = ce.wind_shear_0_6_km || '';
  const shearSensor = shearEid ? hass.states[shearEid] : null;
  if (shearSensor) {
    const shearVal = Number(shearSensor.state) || 0;
    const shearUnit = /** @type {string} */ (shearSensor?.attributes?.unit_of_measurement || 'km/h');
    const { color: sColor, tier: sTier } = resolveShearColor(shearVal, resolved.attrs);
    const sTierInfo = ATMOS_CE_TIER_MAP[sTier];
    rows.push(`<div class="pw-atmos-detail-row">
      <div class="pw-atmos-detail-indicator" style="background:${sanitizeCssValue(sColor)}"></div>
      <div><div class="pw-atmos-detail-value" style="color:${sanitizeCssValue(sColor)}">${escapeHtml(String(Math.round(shearVal)))} ${escapeHtml(shearUnit)}</div>
      <div class="pw-atmos-detail-label">Wind Shear</div>
      <div class="pw-atmos-detail-desc">${escapeHtml(sTierInfo?.label || sTier)}</div></div>
    </div>`);
  }

  // Lapse Rate
  const lapseEid = ce.lapse_rate_700_500_hpa || '';
  const lapseSensor = lapseEid ? hass.states[lapseEid] : null;
  if (lapseSensor) {
    const lapseVal = Number(lapseSensor.state) || 0;
    const lapseUnit = /** @type {string} */ (lapseSensor?.attributes?.unit_of_measurement || '\u00b0C/km');
    const { color: lColor, tier: lTier } = resolveLapseColor(lapseVal, resolved.attrs);
    const lTierInfo = ATMOS_CE_TIER_MAP[lTier];
    rows.push(`<div class="pw-atmos-detail-row">
      <div class="pw-atmos-detail-indicator" style="background:${sanitizeCssValue(lColor)}"></div>
      <div><div class="pw-atmos-detail-value" style="color:${sanitizeCssValue(lColor)}">${escapeHtml(lapseVal.toFixed(1))} ${escapeHtml(lapseUnit)}</div>
      <div class="pw-atmos-detail-label">Lapse Rate</div>
      <div class="pw-atmos-detail-desc">${escapeHtml(lTierInfo?.label || lTier)}</div></div>
    </div>`);
  }

  // Freeze Level
  if (ce.freezing_level_height && hass.states[ce.freezing_level_height]) {
    const frzVal = Number(hass.states[ce.freezing_level_height].state) || 0;
    const frzUnit = /** @type {string} */ (hass.states[ce.freezing_level_height]?.attributes?.unit_of_measurement || 'm');
    const frzColor = '#5ac8fa';
    rows.push(`<div class="pw-atmos-detail-row">
      <div class="pw-atmos-detail-indicator" style="background:${sanitizeCssValue(frzColor)}"></div>
      <div><div class="pw-atmos-detail-value" style="color:${sanitizeCssValue(frzColor)}">${escapeHtml(String(Math.round(frzVal)))}${escapeHtml(frzUnit)}</div>
      <div class="pw-atmos-detail-label">Freeze Level</div>
      <div class="pw-atmos-detail-desc">Snow level</div></div>
    </div>`);
  }

  // LCL (Cloud Base)
  if (ce.lcl_height && hass.states[ce.lcl_height]) {
    const lclVal = Number(hass.states[ce.lcl_height].state) || 0;
    const lclUnit = /** @type {string} */ (hass.states[ce.lcl_height]?.attributes?.unit_of_measurement || 'm');
    rows.push(`<div class="pw-atmos-detail-row">
      <div class="pw-atmos-detail-indicator" style="background:#d0d0d0"></div>
      <div><div class="pw-atmos-detail-value">${escapeHtml(String(Math.round(lclVal)))} ${escapeHtml(lclUnit)}</div>
      <div class="pw-atmos-detail-label">Cloud Base</div>
      <div class="pw-atmos-detail-desc">LCL height</div></div>
    </div>`);
  }

  // Cloud Cover breakdown
  const ccLow = ce.cloud_cover_low && hass.states[ce.cloud_cover_low]
    ? Number(hass.states[ce.cloud_cover_low].state) || 0 : -1;
  const ccMid = ce.cloud_cover_mid && hass.states[ce.cloud_cover_mid]
    ? Number(hass.states[ce.cloud_cover_mid].state) || 0 : -1;
  const ccHigh = ce.cloud_cover_high && hass.states[ce.cloud_cover_high]
    ? Number(hass.states[ce.cloud_cover_high].state) || 0 : -1;
  if (ccLow >= 0 || ccMid >= 0 || ccHigh >= 0) {
    const parts = [];
    if (ccLow >= 0) parts.push(`Low ${Math.round(ccLow)}%`);
    if (ccMid >= 0) parts.push(`Mid ${Math.round(ccMid)}%`);
    if (ccHigh >= 0) parts.push(`High ${Math.round(ccHigh)}%`);
    rows.push(`<div class="pw-atmos-detail-row">
      <div class="pw-atmos-detail-indicator" style="background:rgba(255,255,255,0.3)"></div>
      <div><div class="pw-atmos-detail-value">${escapeHtml(parts.join(' \u00b7 '))}</div>
      <div class="pw-atmos-detail-label">Cloud Cover</div></div>
    </div>`);
  }

  if (rows.length === 0) return '';
  return `<div class="pw-atmos-detail-grid">${rows.join('')}</div>`;
}

/**
 * @typedef {object} ParticleParams
 * @property {number} count - Number of particles (0–8).
 * @property {number} minSize - Minimum particle diameter (px).
 * @property {number} maxSize - Maximum particle diameter (px).
 * @property {number} minDur - Minimum rise duration (seconds).
 * @property {number} maxDur - Maximum rise duration (seconds).
 */

/**
 * Compute thermal particle parameters from instability score.
 * @param {number} score - Instability score 0–100.
 * @returns {ParticleParams} Particle configuration.
 */
export function particleConfig(score) {
  const s = Math.max(0, Math.min(100, score));
  const ratio = s / 100;
  return {
    count: s <= 10 ? 0 : Math.round(2 + ratio * 6),
    minSize: 2 + Math.round(ratio),
    maxSize: 3 + Math.round(ratio),
    minDur: 4 - ratio * 2.2,
    maxDur: 4 - ratio * 1.2,
  };
}

/**
 * Build thermal particle DOM elements for atmosphere column.
 * @param {number} score - Instability score 0–100.
 * @param {string} tierColor - Tier hex color (e.g. '#ff453a').
 * @param {function(): number} [rng=Math.random] - Random number generator (DI for testing).
 * @returns {DocumentFragment} Fragment containing particle elements.
 */
export function buildThermalParticles(score, tierColor, rng = Math.random) {
  const frag = document.createDocumentFragment();
  const cfg = particleConfig(score);
  if (cfg.count === 0) return frag;

  const safeColor = sanitizeCssValue(tierColor);

  for (let i = 0; i < cfg.count; i++) {
    const el = document.createElement('div');
    el.className = 'pw-thermal-particle';
    const size = cfg.minSize + rng() * (cfg.maxSize - cfg.minSize);
    const left = 10 + rng() * 80;
    const bottom = rng() * 30;
    const dur = cfg.minDur + rng() * (cfg.maxDur - cfg.minDur);
    const delay = rng() * dur;
    const opacity = 0.4 + rng() * 0.3;
    const riseDist = -(50 + rng() * 60);

    el.setAttribute('style', [
      `width:${size.toFixed(1)}px`,
      `height:${size.toFixed(1)}px`,
      `left:${left.toFixed(1)}%`,
      `bottom:${bottom.toFixed(1)}%`,
      `background:${safeColor}`,
      `--rise-dur:${dur.toFixed(2)}s`,
      `--rise-dist:${riseDist.toFixed(0)}px`,
      `--peak-op:${opacity.toFixed(2)}`,
      `animation-delay:${delay.toFixed(2)}s`,
    ].join(';'));

    frag.appendChild(el);
  }
  return frag;
}


/**
 * Render the atmosphere section (Atmos CE exclusive).
 * @param {import('../types.js').RenderContext} ctx - Render context.
 * @returns {string|null} HTML string or null if sensors unavailable.
 */
export function renderAtmosphere({ hass, config, discovery, forecastData }) {
  const ce = discovery.atmosCe;

  if (!ce.cape && !ce.lifted_index && !ce.freezing_level_height) {
    console.debug(`${LOG_PREFIX} Atmosphere section requires Atmos CE sensors (cape / lifted_index / freezing_level_height) — section skipped. Install Atmos CE integration if you want the atmospheric stability column.`);
    return null;
  }

  const resolved = resolveStabilityTier(hass, discovery);
  const { capeValue, liValue, hasCape, hasLI, score } = resolved;

  /** @param {string} key @returns {{ value: number|null, unit: string }} */
  const readSensor = (key) => {
    const eid = ce[key];
    if (!eid || !hass.states[eid]) return { value: null, unit: '' };
    const v = Number(hass.states[eid].state);
    if (!Number.isFinite(v)) return { value: null, unit: '' };
    const unit = String(hass.states[eid].attributes?.unit_of_measurement || '');
    return { value: v, unit };
  };
  const shearSensor = readSensor('wind_shear_0_6_km');
  const lapseSensor = readSensor('lapse_rate_700_500_hpa');
  const freezeSensor = readSensor('freezing_level_height');
  const lclSensor = readSensor('lcl_height');

  const tierKey = resolved.tierKey;
  const tierInfo = {
    label: resolved.label,
    color: resolved.color,
    desc: resolved.desc,
  };

  const stormTiers = ['slight', 'enhanced', 'moderate', 'high'];
  const variant = stormTiers.includes(tierKey) ? 'rain' : 'cloudy';

  /* Narrative is time-aware + evidence-gated: compare current time vs forecast
     peak vs sunset so the subline never promises "calming after sunset" when
     sunset has already passed, and never invents "late afternoon" when the
     forecast provider doesn't expose CAPE. See composeStormNarrative. */
  const now = new Date();
  const sunStateForNarrative = discovery.sunEntityId ? hass.states[discovery.sunEntityId] : null;
  const { todaySunset } = deriveTodaySunBoundaries(
    now,
    /** @type {string|undefined} */ (sunStateForNarrative?.attributes?.next_rising),
    /** @type {string|undefined} */ (sunStateForNarrative?.attributes?.next_setting),
  );
  const subLine = composeStormNarrative({
    tierKey,
    tierDesc: tierInfo.desc,
    hourly: forecastData?.hourly || [],
    now,
    todaySunset,
    attrs: resolved.attrs,
  });

  /* Vertical column visualisation — 5 km (or auto-scaled) atmospheric profile
     with three overlaid markers: a CAPE fill growing up from the ground, a
     freeze-level marker (cyan) where temperature crosses 0 °C, and an LCL
     marker (dashed grey) for the lifted condensation level (cloud base).
     The wider the LCL ↔ freeze gap, the deeper the cloud layer that can form. */
  const freezeAlt = freezeSensor.value ?? 0;
  const lclAlt = lclSensor.value ?? 0;
  const { scaleMax, labels: scaleLabels } = computeColumnScale(freezeAlt, lclAlt);

  const fillPct = score !== null ? columnFillHeight(score) : 0;
  const fillColor = tierInfo.color;
  const capeFillHtml = (hasCape || hasLI) ? `
          <div class="pw-atmos-cape-fill" style="height:${Number(fillPct)}%;background:linear-gradient(to top, ${sanitizeCssValue(fillColor)}66, ${sanitizeCssValue(fillColor)}11)"></div>` : '';

  const freezeUnit = freezeSensor.unit || 'm';
  const freezeMarkerHtml = freezeSensor.value !== null ? (() => {
    const pos = freezeMarkerPosition(freezeSensor.value, scaleMax);
    return `
          <div class="pw-atmos-freeze-marker" style="bottom:${Number(pos)}%">
            <span class="pw-atmos-freeze-label">❄ ${escapeHtml(String(Math.round(freezeSensor.value)))}${escapeHtml(freezeUnit)}</span>
            <div class="pw-atmos-freeze-line"></div>
          </div>`;
  })() : '';

  const lclUnit = lclSensor.unit || 'm';
  const lclMarkerHtml = lclSensor.value !== null ? (() => {
    const pos = freezeMarkerPosition(lclSensor.value, scaleMax);
    return `
          <div class="pw-atmos-lcl-marker" style="bottom:${Number(pos)}%">
            <span class="pw-atmos-lcl-label">☁ LCL ${escapeHtml(String(Math.round(lclSensor.value)))}${escapeHtml(lclUnit)}</span>
            <div class="pw-atmos-lcl-line"></div>
          </div>`;
  })() : '';

  const scaleHtml = scaleLabels.map((alt) =>
    `<span class="pw-atmos-scale-label">${alt >= 1000 ? `${alt / 1000}km` : String(alt)}</span>`
  ).join('');

  const columnFragment = `
        <div class="pw-atmos-column-wrap">
          <div class="pw-atmos-scale">${scaleHtml}</div>
          <div class="pw-atmos-column">
            ${capeFillHtml}
            ${freezeMarkerHtml}
            ${lclMarkerHtml}
            <div class="pw-atmos-ground-label">surface</div>
          </div>
        </div>`;

  const heroHtml = t.heroBlock({
    tier: tierInfo.label,
    tierFlavor: 'atmos',
    tierColor: 'var(--pw-vermilion)',
    narrative: subLine,
  });

  const statTiles = [
    hasCape ? t.stat(`${Math.round(capeValue)}`, 'cape J/kg') : '',
    hasLI ? t.stat(liValue.toFixed(1), 'lifted idx') : '',
    shearSensor.value !== null
      ? t.stat(`${Math.round(shearSensor.value)}`, `shear ${shearSensor.unit || 'km/h'}`)
      : '',
    lapseSensor.value !== null
      ? t.stat(lapseSensor.value.toFixed(1), `lapse ${lapseSensor.unit || '°C/km'}`)
      : '',
  ];
  const statsRowHtml = t.statsRow(statTiles, { columns: 4, divided: true });

  const body = `
        ${heroHtml}
        ${columnFragment}
        ${statsRowHtml}`;

  return renderSectionShell({
    sectionClass: 'pw-atmosphere-v2',
    ariaLabel: 'Atmospheric stability',
    brandVariant: variant,
    kicker: 'atmospheric stability',
    body,
    pro: config?.pro !== false,
  });
}
