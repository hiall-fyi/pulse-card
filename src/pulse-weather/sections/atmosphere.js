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

import { capeColor, escapeHtml, sanitizeCssValue, statHtml } from '../weather-primitives.js';
import { intensityRatio, tensionWash, breatheDuration } from '../../shared/visual-tension.js';
import { LIFTED_INDEX_TIERS } from '../constants.js';

// ── Tier Mapping ────────────────────────────────────────────────────

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

// ── Existing Pure Functions (preserved as fallback) ─────────────────

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
 * @param {number} cape - CAPE value in J/kg (0 = stable, 4000+ = extreme).
 * @param {number} li - Lifted Index (+6 = very stable, -6 = very unstable).
 * @returns {number} Score 0–100.
 */
export function instabilityScore(cape, li) {
  const capeScore = Math.min(100, (cape / 4000) * 100);
  const liScore = Math.min(100, Math.max(0, ((6 - li) / 12) * 100));
  return Math.round(capeScore * 0.6 + liScore * 0.4);
}

/**
 * Get instability tier from score. Fallback when composite sensor unavailable.
 * @param {number} score - 0–100.
 * @returns {{label: string, color: string, desc: string}}
 */
function instabilityTier(score) {
  if (score <= 10) return { label: 'Stable', color: '#30d158', desc: 'No thunderstorm risk' };
  if (score <= 30) return { label: 'Marginal', color: '#ffd60a', desc: 'Isolated storms possible' };
  if (score <= 55) return { label: 'Moderate', color: '#ff9f0a', desc: 'Scattered storms likely' };
  if (score <= 80) return { label: 'High', color: '#ff453a', desc: 'Severe storms expected' };
  return { label: 'Extreme', color: '#8b0000', desc: 'Dangerous storm potential' };
}

// ── New Pure Functions ──────────────────────────────────────────────


/**
 * @typedef {object} ResolvedTier
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
      return { ...mapped, score: tierScore, source: 'composite', attrs, capeValue, liValue, hasCape, hasLI };
    }
  }

  // Fallback: compute from CAPE + LI
  const tier = score !== null ? instabilityTier(score) : null;
  return {
    ...(tier || { label: 'Unknown', color: '#888888', desc: '' }),
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

// ── Column Scale ────────────────────────────────────────────────

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
  const labels = [];
  for (let alt = scaleMax; alt >= 0; alt -= labelInterval) {
    labels.push(alt);
  }
  if (labels[labels.length - 1] !== 0) labels.push(0);

  return { scaleMax, labelInterval, labels };
}

// ── Cloud Band Opacity ──────────────────────────────────────────

/**
 * Convert cloud cover percentage to band opacity.
 * @param {number} coverPct - Cloud cover 0–100%.
 * @returns {number} Opacity 0–0.35 (capped to avoid obscuring column content).
 */
export function cloudBandOpacity(coverPct) {
  const clamped = Math.max(0, Math.min(100, coverPct));
  return (clamped / 100) * 0.35;
}

// ── Shear / Lapse Tier Resolution ───────────────────────────────

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

// ── Detail Panel Builder ────────────────────────────────────────

/**
 * Build atmosphere detail panel HTML for tap-to-expand.
 * @param {ResolvedTier} resolved - Resolved stability tier.
 * @param {{states: Object<string, {state: string, attributes: Record<string, unknown>}>}} hass - Home Assistant state object.
 * @param {import('../types.js').WeatherDiscovery} discovery - Discovery result.
 * @param {number} _scaleMax - Current column scale maximum (reserved for future use).
 * @returns {string} HTML string for detail panel (empty string if no data).
 */
export function buildDetailPanelHtml(resolved, hass, discovery, _scaleMax) {
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
      `background:${tierColor}`,
      `--rise-dur:${dur.toFixed(2)}s`,
      `--rise-dist:${riseDist.toFixed(0)}px`,
      `--peak-op:${opacity.toFixed(2)}`,
      `animation-delay:${delay.toFixed(2)}s`,
    ].join(';'));

    frag.appendChild(el);
  }
  return frag;
}

// ── Renderer ────────────────────────────────────────────────────────

/**
 * Render the atmosphere section (Atmos CE exclusive).
 * @param {import('../types.js').RenderContext} ctx - Render context.
 * @returns {string|null} HTML string or null if sensors unavailable.
 */
export function renderAtmosphere({ hass, config: _config, discovery }) {
  const ce = discovery.atmosCe;

  // Atmos CE-exclusive guard
  if (!ce.cape && !ce.lifted_index && !ce.freezing_level_height) {
    console.debug('Pulse Weather: Atmosphere section requires Atmos CE sensors — skipping');
    return null;
  }

  // ── Resolve tier (composite → fallback) ─────────────────────────
  const resolved = resolveStabilityTier(hass, discovery);
  const { score, capeValue, liValue, hasCape, hasLI } = resolved;
  const tier = (resolved.label !== 'Unknown') ? resolved : null;

  // ── Dynamic column scale ────────────────────────────────────────
  const freezeAlt = (ce.freezing_level_height && hass.states[ce.freezing_level_height])
    ? Number(hass.states[ce.freezing_level_height].state) || 0 : 0;
  const lclAlt = (ce.lcl_height && hass.states[ce.lcl_height])
    ? Number(hass.states[ce.lcl_height].state) || 0 : 0;
  const { scaleMax, labels: scaleLabels } = computeColumnScale(freezeAlt, lclAlt);

  // ── CAPE fill ───────────────────────────────────────────────────
  const fillPct = score !== null ? columnFillHeight(score) : 0;
  const fillColor = tier?.color || '#30d158';
  const capeFillHtml = (hasCape || hasLI) ? `
        <div class="pw-atmos-cape-fill" style="height:${Number(fillPct)}%;background:linear-gradient(to top, ${sanitizeCssValue(fillColor)}40, ${sanitizeCssValue(fillColor)}08)">
          <div class="pw-atmos-fx" data-atmos-score="${Number(score)}" data-atmos-color="${sanitizeCssValue(fillColor)}"></div>
        </div>` : '';

  // ── Column glow ─────────────────────────────────────────────────
  const scoreI = score !== null ? intensityRatio(score, 0, 100) : 0;
  const glowHtml = scoreI > 0.1 ? `
        <div class="pw-atmos-column-glow${scoreI > 0.3 ? ' pulsing' : ''}" style="--glow-color:${sanitizeCssValue(fillColor)}40;--pulse-dur:${breatheDuration(scoreI, 3, 0.8).toFixed(2)}s"></div>` : '';

  // ── Freezing level marker ───────────────────────────────────────
  const freezeMarkerHtml = (ce.freezing_level_height && hass.states[ce.freezing_level_height])
    ? (() => {
        const frzValue = Number(hass.states[ce.freezing_level_height].state) || 0;
        const frzUnit = /** @type {string} */ (hass.states[ce.freezing_level_height]?.attributes?.unit_of_measurement || 'm');
        const frzPos = freezeMarkerPosition(frzValue, scaleMax);
        return `
        <div class="pw-atmos-freeze-marker" style="bottom:${Number(frzPos)}%">
          <span class="pw-atmos-freeze-label">\u2744 ${escapeHtml(String(Math.round(frzValue)))}${escapeHtml(frzUnit)}</span>
          <div class="pw-atmos-freeze-line"></div>
        </div>`;
      })()
    : '';

  // ── LCL height marker ──────────────────────────────────────────
  const lclMarkerHtml = (ce.lcl_height && hass.states[ce.lcl_height])
    ? (() => {
        const lclValue = Number(hass.states[ce.lcl_height].state) || 0;
        const lclUnit = /** @type {string} */ (hass.states[ce.lcl_height]?.attributes?.unit_of_measurement || 'm');
        const lclPos = freezeMarkerPosition(lclValue, scaleMax);
        return `
        <div class="pw-atmos-lcl-marker" style="bottom:${Number(lclPos)}%">
          <span class="pw-atmos-lcl-label">\u2601 LCL ${escapeHtml(String(Math.round(lclValue)))}${escapeHtml(lclUnit)}</span>
          <div class="pw-atmos-lcl-line"></div>
        </div>`;
      })()
    : '';

  // ── Wind shear arrow (0–6km vertical arrow on right side of column) ──
  const shearEid = ce.wind_shear_0_6_km || '';
  const shearSensor = shearEid ? hass.states[shearEid] : null;
  const shearVal = shearSensor ? Number(shearSensor.state) || 0 : 0;
  const shearResolved = shearSensor ? resolveShearColor(shearVal, resolved.attrs) : null;
  const shearArrowHtml = shearSensor ? (() => {
    const shearRatio = Math.min(1, shearVal / 80);
    const arrowOpacity = (0.2 + shearRatio * 0.6).toFixed(2);
    const arrowColor = shearResolved?.color || '#888888';
    const shearUnit = /** @type {string} */ (shearSensor?.attributes?.unit_of_measurement || 'km/h');
    return `
        <div class="pw-atmos-shear-arrow" style="--shear-color:${sanitizeCssValue(arrowColor)};opacity:${arrowOpacity}" title="Wind shear: ${escapeHtml(String(Math.round(shearVal)))} ${escapeHtml(shearUnit)}">
          <svg width="16" height="100%" viewBox="0 0 16 100" preserveAspectRatio="none" style="display:block">
            <line x1="8" y1="5" x2="8" y2="95" stroke="${sanitizeCssValue(arrowColor)}" stroke-width="1.5" stroke-dasharray="4 3"/>
            <polygon points="4,8 8,0 12,8" fill="${sanitizeCssValue(arrowColor)}"/>
            <polygon points="4,92 8,100 12,92" fill="${sanitizeCssValue(arrowColor)}"/>
          </svg>
          <span class="pw-atmos-shear-label" style="color:${sanitizeCssValue(arrowColor)}">${escapeHtml(String(Math.round(shearVal)))} ${escapeHtml(shearUnit)}</span>
        </div>`;
  })() : '';

  // ── Lapse rate gradient overlay (700–500 hPa ≈ 3–5.5km) ──────
  // Lapse rate — support both old and new Atmos CE entity ID formats
  const lapseEid = ce.lapse_rate_700_500_hpa || '';
  const lapseSensor = lapseEid ? hass.states[lapseEid] : null;
  const lapseVal = lapseSensor ? Number(lapseSensor.state) || 0 : 0;
  const lapseGradientHtml = lapseSensor ? (() => {
    const { color: lapseColor } = resolveLapseColor(lapseVal, resolved.attrs);
    const lapseOpacity = lapseVal < 6.0 ? 0.15 : lapseVal < 7.5 ? 0.25 : 0.35;
    const lapseRgba = `${lapseColor}${Math.round(lapseOpacity * 255).toString(16).padStart(2, '0')}`;
    const lapseBottom = freezeMarkerPosition(3000, scaleMax);
    const lapseTop = freezeMarkerPosition(5500, scaleMax);
    const lapseUnit = /** @type {string} */ (lapseSensor?.attributes?.unit_of_measurement || '\u00b0C/km');
    return `
        <div class="pw-atmos-lapse-overlay" style="bottom:${Number(lapseBottom)}%;top:${Number(100 - lapseTop)}%;background:linear-gradient(to top, transparent, ${sanitizeCssValue(lapseRgba)} 30%, ${sanitizeCssValue(lapseRgba)} 70%, transparent)" title="Lapse rate: ${escapeHtml(lapseVal.toFixed(1))} \u00b0C/km">
          <span class="pw-atmos-lapse-label" style="color:${sanitizeCssValue(lapseColor)}">${escapeHtml(lapseVal.toFixed(1))} ${escapeHtml(lapseUnit)}</span>
        </div>`;
  })() : '';

  // ── Cloud layer bands ───────────────────────────────────────────
  const cloudLow = ce.cloud_cover_low && hass.states[ce.cloud_cover_low]
    ? Number(hass.states[ce.cloud_cover_low].state) || 0 : 0;
  const cloudMid = ce.cloud_cover_mid && hass.states[ce.cloud_cover_mid]
    ? Number(hass.states[ce.cloud_cover_mid].state) || 0 : 0;
  const cloudHigh = ce.cloud_cover_high && hass.states[ce.cloud_cover_high]
    ? Number(hass.states[ce.cloud_cover_high].state) || 0 : 0;

  let cloudBandsHtml = '';
  if (cloudLow > 0) {
    const lowTop = freezeMarkerPosition(2000, scaleMax);
    const op = cloudBandOpacity(cloudLow);
    cloudBandsHtml += `<div class="pw-atmos-cloud-band" style="bottom:0%;top:${Number(100 - lowTop)}%;background:rgba(255,255,255,${op.toFixed(3)})"></div>`;
  }
  if (cloudMid > 0) {
    const midBottom = freezeMarkerPosition(2000, scaleMax);
    const midTop = freezeMarkerPosition(Math.min(6000, scaleMax), scaleMax);
    const op = cloudBandOpacity(cloudMid);
    cloudBandsHtml += `<div class="pw-atmos-cloud-band" style="bottom:${Number(midBottom)}%;top:${Number(100 - midTop)}%;background:rgba(255,255,255,${op.toFixed(3)})"></div>`;
  }
  if (cloudHigh > 0) {
    const op = cloudBandOpacity(cloudHigh);
    cloudBandsHtml += `<div class="pw-atmos-cloud-high" style="opacity:${op.toFixed(3)};background:linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)"></div>`;
  }

  // ── Stats rows (split into instability + vertical/surface) ───────
  const row1Cards = []; // Instability indices
  const row2Cards = []; // Vertical profile + surface

  if (hasCape) {
    const color = capeColor(capeValue);
    row1Cards.push(statHtml(
      `${escapeHtml(String(Math.round(capeValue)))} J/kg`, 'CAPE', color,
    ));
  }

  if (hasLI) {
    const liTier = liftedIndexTier(liValue);
    row1Cards.push(statHtml(
      `${escapeHtml(liValue >= 0 ? '+' : '')}${escapeHtml(liValue.toFixed(1))}`, 'Lifted Idx', liTier.color,
    ));
  }

  if (shearSensor) {
    const shearValue = Number(shearSensor.state) || 0;
    const shearUnit = /** @type {string} */ (shearSensor?.attributes?.unit_of_measurement || 'km/h');
    const shearStatColor = shearResolved?.color || '';
    row1Cards.push(statHtml(
      `${escapeHtml(String(Math.round(shearValue)))} ${escapeHtml(shearUnit)}`, 'Shear', shearStatColor,
    ));
  }

  // Lapse rate (reuses existing lapseSensor/lapseVal from overlay code)
  if (lapseSensor) {
    const lapseUnit = /** @type {string} */ (lapseSensor?.attributes?.unit_of_measurement || '\u00b0C/km');
    const lapseStatResolved = resolveLapseColor(lapseVal, resolved.attrs);
    row1Cards.push(statHtml(
      `${escapeHtml(lapseVal.toFixed(1))} ${escapeHtml(lapseUnit)}`, 'Lapse Rate', lapseStatResolved.color,
    ));
  }

  if (ce.freezing_level_height && hass.states[ce.freezing_level_height]) {
    const value = Number(hass.states[ce.freezing_level_height].state) || 0;
    const frzUnit = /** @type {string} */ (hass.states[ce.freezing_level_height]?.attributes?.unit_of_measurement || 'm');
    row2Cards.push(statHtml(
      `${escapeHtml(String(Math.round(value)))}${escapeHtml(frzUnit)}`, 'Freeze Lvl', '#5ac8fa',
    ));
  }

  // LCL height (cloud base)
  if (ce.lcl_height && hass.states[ce.lcl_height]) {
    const value = Number(hass.states[ce.lcl_height].state) || 0;
    const lclUnit = /** @type {string} */ (hass.states[ce.lcl_height]?.attributes?.unit_of_measurement || 'm');
    row2Cards.push(statHtml(
      `${escapeHtml(String(Math.round(value)))} ${escapeHtml(lclUnit)}`, 'Cloud Base', '#d0d0d0',
    ));
  }

  if (ce.soil_temperature && hass.states[ce.soil_temperature]) {
    const value = Number(hass.states[ce.soil_temperature].state) || 0;
    const soilTempUnit = /** @type {string} */ (hass.states[ce.soil_temperature]?.attributes?.unit_of_measurement || '\u00b0C');
    row2Cards.push(statHtml(
      `${escapeHtml(value.toFixed(1))}${escapeHtml(soilTempUnit)}`, 'Soil Temp', '',
    ));
  }

  // Soil moisture
  if (ce.soil_moisture && hass.states[ce.soil_moisture]) {
    const value = Number(hass.states[ce.soil_moisture].state) || 0;
    row2Cards.push(statHtml(
      `${escapeHtml(String(Math.round(value)))}%`, 'Soil Moist', '',
    ));
  }

  const statsCards = [...row1Cards, ...row2Cards];
  let statsRowHtml = '';
  if (row1Cards.length > 0) {
    statsRowHtml += `<div class="pulse-stats-row" style="margin:0 20px;border-top:none;padding-top:8px" role="img" aria-label="Instability indices">${row1Cards.join('')}</div>`;
  }
  if (row2Cards.length > 0) {
    statsRowHtml += `<div class="pulse-stats-row" style="margin:0 20px;border-top:none;padding-top:4px" role="img" aria-label="Vertical profile and surface">${row2Cards.join('')}</div>`;
  }

  // ── No visual content guard ─────────────────────────────────────
  if (!tier && statsCards.length === 0) return null;

  // ── Tension wash ────────────────────────────────────────────────
  const worstColor = tier?.color || '#30d158';
  const atmosWash = scoreI < 0.15
    ? tensionWash('#30d158', 0.08)
    : tensionWash(worstColor, scoreI);
  const breatheHtml = scoreI > 0.3
    ? `<div class="pw-tension-wash breathing" style="background:${sanitizeCssValue(tensionWash(worstColor, scoreI))};--breathe-dur:${breatheDuration(scoreI).toFixed(2)}s"></div>`
    : '';

  // ── Detail panel ─────────────────────────────────────────────────
  const detailHtml = buildDetailPanelHtml(resolved, hass, discovery, scaleMax);
  const hasDetail = detailHtml.length > 0;

  // ── Assemble ────────────────────────────────────────────────────
  const scaleHtml = scaleLabels.map(alt =>
    `<span class="pw-atmos-scale-label">${alt >= 1000 ? `${alt / 1000}km` : String(alt)}</span>`
  ).join('\n          ');

  return `
    <div class="pw-section pw-atmos" style="background:${sanitizeCssValue(atmosWash)}">
      ${breatheHtml}
      <div class="pw-section-header">
        <span class="pw-section-title">Atmosphere</span>
      </div>
      ${tier ? `<div class="pw-status-label" style="color:${sanitizeCssValue(tier.color)}">${escapeHtml(tier.label)}</div>` : ''}
      ${tier ? `<div class="pw-atmos-tier-desc">${escapeHtml(tier.desc)}</div>` : ''}
      <div class="pw-atmos-column-wrap${hasDetail ? ' pw-atmos-tappable' : ''}" role="img" aria-label="Atmospheric instability ${score !== null ? escapeHtml(String(score)) + '%, ' + escapeHtml(tier?.label || '') : 'unknown'}"${hasDetail ? ' aria-expanded="false" data-has-detail' : ''}>
        <div class="pw-atmos-scale">
          ${scaleHtml}
        </div>
        <div class="pw-atmos-column">
          ${capeFillHtml}
          ${cloudBandsHtml}
          ${glowHtml}
          ${lapseGradientHtml}
          ${freezeMarkerHtml}
          ${lclMarkerHtml}
          ${shearArrowHtml}
          <div class="pw-atmos-ground-label">Surface</div>
        </div>
      </div>
      ${hasDetail ? `<div class="pw-atmos-detail" aria-label="Atmospheric detail" role="region" style="max-height:0">${detailHtml}</div>` : ''}
      ${statsRowHtml}
    </div>`;
}