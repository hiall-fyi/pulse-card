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

import { capeColor, escapeHtml, sanitizeCssValue } from '../weather-primitives.js';
import { intensityRatio, tensionWash, breatheDuration, tensionGlow } from '../../shared/visual-tension.js';
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
 * Fill height always uses instabilityScore(cape, li) regardless of source,
 * because the composite sensor returns a text tier, not a numeric score.
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
      return { ...mapped, score, source: 'composite', attrs, capeValue, liValue, hasCape, hasLI };
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
  const { score, source: tierSource, capeValue, liValue, hasCape, hasLI } = resolved;
  const tier = (resolved.label !== 'Unknown') ? resolved : null;

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
        const frzPos = freezeMarkerPosition(frzValue);
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
        const lclPos = freezeMarkerPosition(lclValue);
        return `
        <div class="pw-atmos-lcl-marker" style="bottom:${Number(lclPos)}%">
          <span class="pw-atmos-lcl-label">\u2601 LCL ${escapeHtml(String(Math.round(lclValue)))}${escapeHtml(lclUnit)}</span>
          <div class="pw-atmos-lcl-line"></div>
        </div>`;
      })()
    : '';

  // ── Info panel metrics ──────────────────────────────────────────
  const infoMetrics = [];

  if (hasCape) {
    const color = capeColor(capeValue);
    const glowStyle = scoreI > 0.1 ? `; text-shadow: ${tensionGlow(fillColor, scoreI)}` : '';
    infoMetrics.push(`
      <div class="pw-atmos-metric">
        <div class="pw-atmos-metric-value" style="color:${sanitizeCssValue(color)}${glowStyle}">${escapeHtml(String(Math.round(capeValue)))}</div>
        <div class="pw-atmos-metric-unit">J/kg</div>
        <div class="pw-atmos-metric-label">CAPE</div>
      </div>`);
  }

  if (hasLI) {
    const liTier = liftedIndexTier(liValue);
    infoMetrics.push(`
      <div class="pw-atmos-metric">
        <div class="pw-atmos-metric-value" style="color:${sanitizeCssValue(liTier.color)}">${escapeHtml(liValue >= 0 ? '+' : '')}${escapeHtml(liValue.toFixed(1))}</div>
        <div class="pw-atmos-metric-label">Lifted Idx</div>
      </div>`);
  }

  if (ce.wind_shear_0_6km && hass.states[ce.wind_shear_0_6km]) {
    const shearValue = Number(hass.states[ce.wind_shear_0_6km].state) || 0;
    const shearUnit = /** @type {string} */ (hass.states[ce.wind_shear_0_6km]?.attributes?.unit_of_measurement || 'km/h');
    infoMetrics.push(`
      <div class="pw-atmos-metric">
        <div class="pw-atmos-metric-value">${escapeHtml(String(Math.round(shearValue)))}</div>
        <div class="pw-atmos-metric-unit">${escapeHtml(shearUnit)}</div>
        <div class="pw-atmos-metric-label">Shear</div>
      </div>`);
  }

  // ── Confidence badge (composite source only) ────────────────────
  const confidenceHtml = (tierSource === 'composite' && resolved.attrs)
    ? `<div class="pw-atmos-confidence">${escapeHtml(String(resolved.attrs.parameters_available || 0))}/${escapeHtml(String(resolved.attrs.parameters_total || 4))} params</div>`
    : '';

  // ── Stats row (freezing level, soil temp, soil moisture) ────────
  const statsCards = [];

  if (ce.freezing_level_height && hass.states[ce.freezing_level_height]) {
    const value = Number(hass.states[ce.freezing_level_height].state) || 0;
    const frzUnit = /** @type {string} */ (hass.states[ce.freezing_level_height]?.attributes?.unit_of_measurement || 'm');
    const color = value < 1000 ? '#5ac8fa' : value < 3000 ? '#30d158' : '#ff9f0a';
    statsCards.push(`
      <div class="stat">
        <div class="pw-stat-value" style="color:${sanitizeCssValue(color)}">${escapeHtml(String(Math.round(value)))}${escapeHtml(frzUnit)}</div>
        <div class="pw-stat-label">Freeze Lvl</div>
      </div>`);
  }

  if (ce.soil_temperature && hass.states[ce.soil_temperature]) {
    const value = Number(hass.states[ce.soil_temperature].state) || 0;
    const soilTempUnit = /** @type {string} */ (hass.states[ce.soil_temperature]?.attributes?.unit_of_measurement || '\u00b0C');
    statsCards.push(`
      <div class="stat">
        <div class="pw-stat-value">${escapeHtml(value.toFixed(1))}${escapeHtml(soilTempUnit)}</div>
        <div class="pw-stat-label">Soil Temp</div>
      </div>`);
  }

  if (ce.soil_moisture && hass.states[ce.soil_moisture]) {
    const value = Number(hass.states[ce.soil_moisture].state) || 0;
    statsCards.push(`
      <div class="stat">
        <div class="pw-stat-value">${escapeHtml(value.toFixed(2))}</div>
        <div class="pw-stat-label">Soil Moist</div>
      </div>`);
  }

  const statsRowHtml = statsCards.length > 0
    ? `<div class="pulse-stats-row" style="margin:12px 20px 0;padding-top:12px" role="img" aria-label="Atmospheric data">${statsCards.join('')}</div>`
    : '';

  // ── No visual content guard ─────────────────────────────────────
  if (!tier && infoMetrics.length === 0 && statsCards.length === 0) return null;

  // ── Tension wash ────────────────────────────────────────────────
  const worstColor = tier?.color || '#30d158';
  const atmosWash = scoreI < 0.15
    ? tensionWash('#30d158', 0.08)
    : tensionWash(worstColor, scoreI);
  const breatheHtml = scoreI > 0.3
    ? `<div class="pw-tension-wash breathing" style="background:${sanitizeCssValue(tensionWash(worstColor, scoreI))};--breathe-dur:${breatheDuration(scoreI).toFixed(2)}s"></div>`
    : '';

  // ── Assemble ────────────────────────────────────────────────────
  return `
    <div class="pw-section pw-atmos" style="background:${sanitizeCssValue(atmosWash)}">
      ${breatheHtml}
      <div class="pw-section-header">
        <span class="pw-section-title">Atmosphere</span>
        ${tier ? `<span class="pw-atmos-tier-label" style="color:${sanitizeCssValue(tier.color)}">${escapeHtml(tier.label)}</span>` : ''}
      </div>
      ${tier ? `<div class="pw-atmos-tier-desc">${escapeHtml(tier.desc)}</div>` : ''}
      ${confidenceHtml}
      <div class="pw-atmos-column-wrap" role="img" aria-label="Atmospheric instability ${score !== null ? escapeHtml(String(score)) + '%, ' + escapeHtml(tier?.label || '') : 'unknown'}">
        <div class="pw-atmos-scale">
          <span class="pw-atmos-scale-label">5km</span>
          <span class="pw-atmos-scale-label">4km</span>
          <span class="pw-atmos-scale-label">3km</span>
          <span class="pw-atmos-scale-label">2km</span>
          <span class="pw-atmos-scale-label">1km</span>
          <span class="pw-atmos-scale-label">0</span>
        </div>
        <div class="pw-atmos-column">
          ${capeFillHtml}
          ${glowHtml}
          ${freezeMarkerHtml}
          ${lclMarkerHtml}
          <div class="pw-atmos-ground-label">Surface</div>
        </div>
        <div class="pw-atmos-info">
          ${infoMetrics.join('')}
        </div>
      </div>
      ${statsRowHtml}
    </div>`;
}