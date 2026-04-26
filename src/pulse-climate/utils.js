/**
 * @module pulse-climate/utils
 * @description Climate-specific utility functions.
 */

import { HVAC_VISUALS, RISK_COLORS, DEFAULTS, DEFAULT_SECTIONS, LOG_PREFIX, SECTION_DEFAULTS } from './constants.js';
import { clamp } from '../shared/utils.js';

/**
 * Log a warning with card prefix.
 * @param {string} msg
 * @param {...*} args
 */
export function warn(msg, ...args) {
  console.warn(`${LOG_PREFIX} ${msg}`, ...args);
}

/**
 * Resolve HVAC action visual (icon, color, label).
 * @param {string} action - hvac_action value.
 * @returns {{icon: string, cssVar: string|null, fallback: string, label: string}}
 */
export function resolveHvacVisual(action) {
  return /** @type {Record<string, *>} */ (HVAC_VISUALS)[action] || HVAC_VISUALS.idle;
}

/**
 * Resolve zone display data from entity state. Thin wrapper over resolveZoneState
 * for callers that only need basic display fields without full chip resolution.
 * @param {string} entityId - Entity ID (climate.* or sensor.*).
 * @param {Record<string, *>} states - hass.states.
 * @param {import('./types.js').ZoneConfig} [zoneConfig] - Optional zone config for name override.
 * @returns {{name: string, temp: number|undefined, target: number|undefined, humidity: number|undefined, hvacAction: string, unit: string}}
 */
export function resolveZoneDisplay(entityId, states, zoneConfig) {
  const zs = resolveZoneState(entityId, {}, states, zoneConfig || { entity: entityId }, /** @type {*} */ ({}));
  return {
    name: zs.name,
    temp: zs.currentTemp ?? undefined,
    target: zs.targetTemp ?? undefined,
    humidity: zs.humidity ?? undefined,
    hvacAction: zs.hvacAction,
    unit: zs.unit,
  };
}

/**
 * Resolve risk level color object.
 * @param {string} level - None/Low/Medium/High/Critical.
 * @returns {{cssVar: string, fallback: string}}
 */
export function resolveRiskColor(level) {
  // Normalise to Title Case for RISK_COLORS lookup (handles "critical", "CRITICAL", "Critical")
  const normalised = level.charAt(0).toUpperCase() + level.slice(1).toLowerCase();
  return /** @type {Record<string, *>} */ (RISK_COLORS)[normalised] || RISK_COLORS.Low;
}

/**
 * Resolve temperature position on a gauge bar (0-100%).
 * @param {number} temp - Current temperature.
 * @param {number} min - Min temperature.
 * @param {number} max - Max temperature.
 * @returns {number} Position percentage 0-100.
 */
export function tempToPosition(temp, min, max) {
  if (max <= min) return 50;
  return clamp((temp - min) / (max - min), 0, 1) * 100;
}

/**
 * Build chip data array for a zone from discovered entities.
 * @param {import('./types.js').ZoneState} zoneState
 * @param {Record<string, string>} discoveredEntities - Zone entity map.
 * @param {Record<string, *>} states - hass.states.
 * @param {string[]|null} [chipFilter] - Explicit chip list (null = auto).
 * @returns {import('./types.js').ChipData[]}
 */
export function resolveChips(zoneState, discoveredEntities, states, chipFilter) {
  const chips = [];
  const auto = !chipFilter;
  const include = (/** @type {string} */ type) => auto || chipFilter.includes(type);

  // Humidity — only as chip when explicitly requested (default: shown in zone header)
  if (chipFilter && include('humidity') && zoneState.humidity !== null) {
    chips.push({ type: 'humidity', icon: 'mdi:water-percent', label: `${Math.round(zoneState.humidity)}%` });
  }

  // HVAC action
  if (include('hvac_action')) {
    const vis = resolveHvacVisual(zoneState.hvacAction);
    chips.push({ type: 'hvac_action', icon: vis.icon, label: vis.label, color: vis.fallback });
  }

  // Overlay mode
  if (include('overlay') && zoneState.overlayType) {
    const icon = zoneState.overlayType === 'Manual' ? 'mdi:hand-back-right' : 'mdi:calendar-clock';
    chips.push({ type: 'overlay', icon, label: zoneState.overlayType, entityId: discoveredEntities.overlay });
  }

  // Preset mode
  if (include('preset') && zoneState.presetMode) {
    const icon = zoneState.presetMode === 'away' ? 'mdi:home-export-outline' : 'mdi:home';
    chips.push({ type: 'preset', icon, label: zoneState.presetMode === 'away' ? 'Away' : 'Home' });
  }

  // Tado CE exclusive chips — only if entities discovered
  // Risk-level chips (mold, condensation) share identical logic
  /** @param {string} type @param {string} icon @param {string} entityKey */
  const pushRiskChip = (type, icon, entityKey) => {
    if (!include(type) || !discoveredEntities[entityKey]) return;
    const s = states[discoveredEntities[entityKey]];
    if (s && !['unavailable', 'unknown', 'none'].includes(s.state.toLowerCase())) {
      const riskColor = resolveRiskColor(s.state);
      chips.push({ type, icon, label: s.state, color: riskColor.fallback, severity: s.state, entityId: discoveredEntities[entityKey] });
    }
  };

  if (include('open_window') && discoveredEntities.open_window) {
    const s = states[discoveredEntities.open_window];
    if (s) {
      const isOpen = s.state === 'on';
      chips.push({
        type: 'open_window', icon: isOpen ? 'mdi:window-open' : 'mdi:window-closed',
        label: isOpen ? 'Open' : 'Closed', color: isOpen ? '#F44336' : undefined,
        entityId: discoveredEntities.open_window,
      });
    }
  }

  if (include('window_predicted') && discoveredEntities.window_predicted) {
    const s = states[discoveredEntities.window_predicted];
    if (s && s.state === 'on') {
      chips.push({
        type: 'window_predicted', icon: 'mdi:window-open-variant',
        label: 'Window predicted', color: '#FF9800',
        entityId: discoveredEntities.window_predicted,
      });
    }
  }

  pushRiskChip('mold_risk', 'mdi:mushroom', 'mold_risk');
  pushRiskChip('condensation', 'mdi:water-alert', 'condensation');

  if (include('comfort_level') && discoveredEntities.comfort_level) {
    const s = states[discoveredEntities.comfort_level];
    if (s && s.state !== 'unavailable') {
      chips.push({ type: 'comfort_level', icon: 'mdi:emoticon-outline', label: s.state, entityId: discoveredEntities.comfort_level });
    }
  }

  if (include('preheat_now') && discoveredEntities.preheat_now) {
    const s = states[discoveredEntities.preheat_now];
    if (s && s.state === 'on') {
      chips.push({ type: 'preheat_now', icon: 'mdi:radiator', label: 'Preheating', color: '#FF9800', entityId: discoveredEntities.preheat_now });
    }
  }

  if (include('battery') && discoveredEntities.battery) {
    const s = states[discoveredEntities.battery];
    if (s && s.state !== 'unavailable') {
      const battLower = s.state.toLowerCase();
      const battIcon = battLower === 'low' || battLower === 'critical' ? 'mdi:battery-alert' : 'mdi:battery';
      const battColor = battLower === 'critical' ? '#F44336' : battLower === 'low' ? '#FF9800' : undefined;
      chips.push({ type: 'battery', icon: battIcon, label: s.state, color: battColor, entityId: discoveredEntities.battery });
    }
  }

  // Second battery for multi-valve zones (e.g. room with 2+ TRVs)
  if (include('battery') && discoveredEntities.battery_2) {
    const s2 = states[discoveredEntities.battery_2];
    if (s2 && s2.state !== 'unavailable') {
      const batt2Lower = s2.state.toLowerCase();
      const batt2Icon = batt2Lower === 'low' || batt2Lower === 'critical' ? 'mdi:battery-alert' : 'mdi:battery';
      const batt2Color = batt2Lower === 'critical' ? '#F44336' : batt2Lower === 'low' ? '#FF9800' : undefined;
      chips.push({ type: 'battery_2', icon: batt2Icon, label: s2.state, color: batt2Color, entityId: discoveredEntities.battery_2 });
    }
  }

  // Smart Valve Control — reads climate entity attributes directly (not discovered entities)
  if (include('valve_control')) {
    const climateState = states[zoneState.entityId];
    const attrs = climateState?.attributes || {};
    const valveActive = attrs.valve_control_active;
    const valveTarget = attrs.valve_target;
    const backedOff = attrs.valve_control_backed_off;
    if (backedOff === true) {
      chips.push({ type: 'valve_control', icon: 'mdi:valve', label: 'Valve: Backed off', color: '#9E9E9E' });
    } else if (valveActive === true && valveTarget !== undefined) {
      chips.push({ type: 'valve_control', icon: 'mdi:valve', label: `Valve: ${valveTarget}${zoneState.unit}`, color: '#FF9800' });
    }
  }

  // Data source indicators — only shown when explicitly requested via chip filter
  // (not in auto mode — too noisy for most users)
  if (chipFilter && include('temp_source')) {
    const climateState = states[zoneState.entityId];
    const source = climateState?.attributes?.temperature_source;
    if (source && source !== 'cloud') {
      const icon = source === 'external' ? 'mdi:thermometer-probe' : source === 'homekit' ? 'mdi:apple' : 'mdi:cloud-outline';
      chips.push({ type: 'temp_source', icon, label: source.charAt(0).toUpperCase() + source.slice(1) });
    }
  }

  return chips;
}

/**
 * Resolve complete zone state from hass.
 * @param {string} entityId - climate.* entity ID.
 * @param {Record<string, string>} discoveredEntities - Zone entity map from resolver.
 * @param {Record<string, *>} states - hass.states.
 * @param {import('./types.js').ZoneConfig} zoneConfig - Per-zone config.
 * @param {import('./types.js').PulseClimateConfig} cardConfig - Card config.
 * @returns {import('./types.js').ZoneState}
 */
export function resolveZoneState(entityId, discoveredEntities, states, zoneConfig, cardConfig) {
  const state = states[entityId];
  const isUnavailable = !state || state.state === 'unavailable' || state.state === 'unknown';
  const attrs = state?.attributes || {};

  const isSensor = entityId.startsWith('sensor.');
  const currentTemp = isSensor
    ? (isUnavailable ? null : parseFloat(state?.state) || null)
    : (attrs.current_temperature ?? null);
  const targetTemp = isUnavailable || state?.state === 'off' ? null : (attrs.temperature ?? null);
  const humidity = isSensor ? null : (attrs.current_humidity ?? null);
  const hvacAction = isSensor ? 'idle' : (attrs.hvac_action || (state?.state === 'off' ? 'off' : 'idle'));
  const hvacMode = isSensor ? 'sensor' : (state?.state || 'off');
  const presetMode = attrs.preset_mode || '';
  const minTemp = Number(attrs.min_temp ?? 5);
  const maxTemp = Number(attrs.max_temp ?? 35);
  const tempStep = Number(attrs.target_temp_step ?? 0.5);
  const unit = attrs.unit_of_measurement || '°C';

  // Heating power: from Tado CE sensor or climate attribute
  let heatingPower = 0;
  if (discoveredEntities.heating_power) {
    const hp = states[discoveredEntities.heating_power];
    if (hp && hp.state !== 'unavailable') heatingPower = parseFloat(hp.state) || 0;
  } else if (attrs.heating_power !== undefined) {
    heatingPower = parseFloat(attrs.heating_power) || 0;
  }

  // AC power
  let coolingPower = 0;
  if (discoveredEntities.ac_power) {
    const ap = states[discoveredEntities.ac_power];
    if (ap && ap.state !== 'unavailable') coolingPower = parseFloat(ap.state) || 0;
  }

  // Overlay type
  let overlayType = '';
  if (discoveredEntities.overlay) {
    const ov = states[discoveredEntities.overlay];
    if (ov && ov.state !== 'unavailable') overlayType = ov.state;
  } else if (attrs.overlay_type) {
    overlayType = attrs.overlay_type;
  }

  const name = zoneConfig.name || attrs.friendly_name || entityId.replace(/^(climate|sensor)\./, '');
  const icon = zoneConfig.icon || attrs.icon || 'mdi:thermometer';

  // Resolve chips
  const chipFilter = zoneConfig.chips || cardConfig.chips || null;
  const zoneState = {
    entityId, name, icon, isUnavailable,
    currentTemp, targetTemp, humidity,
    heatingPower, coolingPower,
    hvacAction, hvacMode, presetMode, overlayType,
    minTemp, maxTemp, tempStep, unit,
    chips: /** @type {import('./types.js').ChipData[]} */ ([]),
  };
  zoneState.chips = resolveChips(zoneState, discoveredEntities, states, chipFilter);

  return zoneState;
}

// ── Animation Utility Functions ──────────────────────────────────────

/** Reference size for radial section scaling. */
const RADIAL_REFERENCE_SIZE = 280;

/**
 * Compute heat shimmer displacement scale.
 * Returns 0 for power ≤ 50 (no shimmer). For power > 50, returns a
 * base scale (2–5) multiplied by the section size ratio.
 * @param {number} power - Heating power 0–100.
 * @param {number} [sectionSize=280] - Radial section configured size.
 * @returns {number} Displacement scale (0 if power ≤ 50).
 */
export function computeShimmerScale(power, sectionSize = RADIAL_REFERENCE_SIZE) {
  if (power <= 50) return 0;
  const baseScale = 2 + ((power - 50) / 50) * 3;
  return baseScale * (sectionSize / RADIAL_REFERENCE_SIZE);
}

/**
 * Compute particle count per ribbon, respecting global cap.
 * Raw count is 2–4 based on power, then capped so total across all
 * active ribbons does not exceed maxTotal.
 * @param {number} power - Heating power 0–100.
 * @param {number} [maxTotal=20] - Global particle cap.
 * @param {number} [activeRibbonCount=1] - Number of active ribbons.
 * @returns {number} Per-ribbon particle count.
 */
export function computeParticleCount(power, maxTotal = 20, activeRibbonCount = 1) {
  if (activeRibbonCount <= 0) return 0;
  const raw = Math.min(4, Math.max(2, Math.round(power / 30)));
  const perRibbonCap = Math.floor(maxTotal / activeRibbonCount);
  return Math.min(raw, perRibbonCap);
}

/**
 * Compute particle animation duration in seconds.
 * Higher power = faster flow (shorter duration).
 * @param {number} power - Heating power 0–100.
 * @returns {number} Duration in seconds (1.5–4).
 */
export function computeParticleDuration(power) {
  return 4 - (power / 100) * 2.5;
}

/**
 * Compute particle circle radius proportional to ribbon width.
 * Wider ribbons (more power) get larger particles.
 * @param {number} ribbonWidth - Current ribbon width in SVG units.
 * @param {number} maxRibbonWidth - Maximum ribbon width (22).
 * @returns {number} Radius in SVG units (1.5–3).
 */
export function computeParticleRadius(ribbonWidth, maxRibbonWidth) {
  return 1.5 + (ribbonWidth / maxRibbonWidth) * 1.5;
}

/**
 * Compute feGaussianBlur stdDeviation scaled to section size.
 * At the reference size, returns 3. Scales linearly.
 * @param {number} sectionSize - Current section size (width or height).
 * @param {number} referenceSize - Reference size where stdDeviation = 3.
 * @returns {number} Scaled stdDeviation.
 */
export function computeGlowStdDev(sectionSize, referenceSize) {
  return 3 * (sectionSize / referenceSize);
}

/**
 * Validate and normalize climate card config. Throws on invalid config.
 * @param {Record<string, *>} config - Raw user config.
 * @returns {import('./types.js').PulseClimateConfig & {_zones: import('./types.js').ZoneConfig[]}}
 */
export function normalizeClimateConfig(config) {
  if (!config) {
    throw new Error('Please define an entity or zones');
  }
  if (!config.entity && !config.zones) {
    throw new Error('Please define an entity or zones');
  }
  if (config.entity && typeof config.entity === 'string') {
    if (!config.entity.startsWith('climate.') && !config.entity.startsWith('water_heater.')) {
      throw new Error('Entity must be a climate.* or water_heater.* entity');
    }
  }

  // Expand zones
  let zones;
  if (config.zones) {
    zones = config.zones.map((/** @type {*} */ z) => typeof z === 'string' ? { entity: z } : { ...z });
  } else {
    zones = [{ entity: config.entity }];
  }

  // Validate zone entities
  for (const z of zones) {
    if (!z.entity || typeof z.entity !== 'string') {
      throw new Error('Each zone must have an entity ID');
    }
  }

  // Merge defaults
  const merged = {
    ...config,
    columns: Number(config.columns) || DEFAULTS.columns,
    layout: config.layout || DEFAULTS.layout,
    show_temp_bar: config.show_temp_bar ?? DEFAULTS.show_temp_bar,
    show_power_bar: config.show_power_bar ?? DEFAULTS.show_power_bar,
    tap_action: config.tap_action || { ...DEFAULTS.tap_action },
    hold_action: config.hold_action || { ...DEFAULTS.hold_action },
    double_tap_action: config.double_tap_action || { ...DEFAULTS.double_tap_action },
    sections: config.sections || [...DEFAULT_SECTIONS],
    _zones: zones,
  };

  // Validate sections and apply defaults from SECTION_DEFAULTS
  if (Array.isArray(merged.sections)) {
    merged.sections = merged.sections.map((/** @type {*} */ s) => {
      const section = typeof s === 'string' ? { type: s } : { ...s };
      const defaults = SECTION_DEFAULTS[section.type];
      if (defaults) {
        for (const [key, defaultVal] of Object.entries(defaults)) {
          if (section[key] === undefined || section[key] === null) {
            section[key] = typeof defaultVal === 'boolean' ? defaultVal : defaultVal;
          } else if (typeof defaultVal === 'number') {
            section[key] = Number(section[key]) || defaultVal;
          }
        }
      }
      return section;
    });
  }

  return merged;
}
