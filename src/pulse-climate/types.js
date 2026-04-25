/**
 * @module pulse-climate/types
 * @description JSDoc type definitions for Pulse Climate Card.
 */

export {};

/**
 * @typedef {object} ActionConfig
 * @property {string} action
 * @property {string} [entity]
 * @property {string} [navigation_path]
 * @property {string} [service]
 * @property {string} [perform_action]
 * @property {Record<string, *>} [service_data]
 * @property {Record<string, *>} [data]
 * @property {string} [url_path]
 */

/**
 * @typedef {object} ZoneConfig
 * @property {string} entity - climate.* entity ID.
 * @property {string} [name] - Override zone name.
 * @property {string} [icon] - Override zone icon.
 * @property {string} [temperature_entity] - Override temperature sensor entity (e.g. sensor.living_room_temperature). Used for history sparklines when auto-discovery fails.
 * @property {string} [humidity_entity] - Override humidity sensor entity (e.g. sensor.living_room_humidity). Used for comfort heatmap when auto-discovery fails.
 * @property {string[]} [chips] - Explicit chip list (overrides auto-detect).
 * @property {string} [color] - Override bar color.
 * @property {boolean} [show_temp_bar] - Show temperature gauge bar.
 * @property {boolean} [show_power_bar] - Show heating/cooling power bar.
 * @property {boolean} [interactive] - Enable temperature slider.
 * @property {ActionConfig} [tap_action]
 * @property {ActionConfig} [hold_action]
 * @property {Record<string, {tap_action?: ActionConfig, hold_action?: ActionConfig}>} [chip_actions] - Per-chip-type action overrides.
 * @property {object} [sparkline] - Sparkline config.
 * @property {object} [indicator] - Trend indicator config.
 */

/**
 * @typedef {object} SectionConfig
 * @property {string} type - Section type name.
 * @property {Record<string, *>} [options] - Section-specific options.
 */

/**
 * @typedef {object} PulseClimateConfig
 * @property {string} [entity] - Single zone shorthand.
 * @property {(string|ZoneConfig)[]} [zones] - Multi-zone config.
 * @property {string} [title] - Card title.
 * @property {number} [columns] - Grid columns for zones.
 * @property {string} [layout] - 'default' | 'compact'.
 * @property {boolean} [entity_row] - Remove ha-card wrapper.
 * @property {boolean} [show_temp_bar] - Card-level default.
 * @property {boolean} [show_power_bar] - Card-level default.
 * @property {boolean} [interactive] - Card-level default.
 * @property {string[]} [chips] - Card-level default chip list.
 * @property {(string|SectionConfig)[]} [sections] - Section list.
 * @property {ActionConfig} [tap_action]
 * @property {ActionConfig} [hold_action]
 * @property {ActionConfig} [double_tap_action]
 * @property {Record<string, {tap_action?: ActionConfig, hold_action?: ActionConfig}>} [chip_actions] - Card-level per-chip-type action overrides (zone-level overrides this).
 * @property {object} [sparkline] - Card-level sparkline config.
 * @property {object} [indicator] - Card-level indicator config.
 * @property {string|number} [gap] - Gap between zones.
 * @property {string|number} [font_size] - Base font size.
 * @property {import('./types.js').ZoneConfig[]} [_zones] - Normalized zone configs (internal).
 */

/**
 * Resolved zone state for rendering.
 * @typedef {object} ZoneState
 * @property {string} entityId - climate.* entity ID.
 * @property {string} name - Zone display name.
 * @property {string} icon - Zone icon.
 * @property {boolean} isUnavailable
 * @property {number|null} currentTemp - Current temperature.
 * @property {number|null} targetTemp - Target temperature.
 * @property {number|null} humidity - Current humidity %.
 * @property {number} heatingPower - Heating power 0-100 (0 if unavailable).
 * @property {number} coolingPower - AC power 0-100 (0 if unavailable).
 * @property {string} hvacAction - 'heating' | 'cooling' | 'idle' | 'off' | 'drying' | 'fan'.
 * @property {string} hvacMode - 'heat' | 'cool' | 'auto' | 'off' | etc.
 * @property {string} presetMode - 'home' | 'away' | etc.
 * @property {string} overlayType - 'Manual' | 'Schedule' | 'Off'.
 * @property {number} minTemp - Zone min temperature.
 * @property {number} maxTemp - Zone max temperature.
 * @property {number} tempStep - Temperature step (default 0.5).
 * @property {string} unit - '°C' or '°F'.
 * @property {ChipData[]} chips - Resolved chip data for rendering.
 */

/**
 * @typedef {object} ChipData
 * @property {string} type - Chip type identifier.
 * @property {string} icon - MDI icon.
 * @property {string} label - Display text.
 * @property {string} [color] - Optional color override.
 * @property {string} [severity] - Risk level for color coding.
 * @property {string} [entityId] - Source entity ID for tap-to-entity (omit = use zone climate entity).
 */

/**
 * Computed slot data for timeline/heatmap rendering.
 * @typedef {object} SlotData
 * @property {number|null} value - Averaged value for this slot.
 * @property {number} time - Slot midpoint timestamp (ms).
 * @property {string} label - Human-readable time label (e.g. "14:30").
 */

/**
 * Discovered entity map for a Tado CE installation.
 * @typedef {object} TadoDiscovery
 * @property {boolean} isTadoCE - Whether Tado CE was detected.
 * @property {Record<string, string>} hubEntities - Hub-level entity map.
 * @property {Record<string, Record<string, string>>} zoneEntities - Per-zone entity map.
 * @property {string[]} missingHubKeys - Hub entity keys not found during discovery.
 */

/**
 * @typedef {object} Hass
 * @property {Record<string, HassEntityState>} states
 * @property {Record<string, HassEntityRegistryEntry>} [entities]
 * @property {function(string, string, Record<string, *>=): Promise<void>} callService
 * @property {function(Record<string, *>): Promise<*>} callWS
 */

/**
 * @typedef {object} HassEntityState
 * @property {string} entity_id
 * @property {string} state
 * @property {Record<string, *>} attributes
 * @property {string} last_updated
 * @property {string} [last_changed]
 */

/**
 * @typedef {object} HassEntityRegistryEntry
 * @property {string} entity_id
 * @property {number|null} [display_precision]
 * @property {string|null} [platform]
 * @property {string} [unique_id]
 * @property {string} [translation_key]
 * @property {string} [device_id]
 */

// ── Chart Types ─────────────────────────────────────────────────────

/**
 * @typedef {object} LineSeriesInput
 * @property {string} entityId - Entity ID for data-* attribute.
 * @property {{t: number, v: number}[]} data - Time-value pairs sorted by t.
 * @property {string} color - CSS color string.
 */

/**
 * @typedef {object} DonutSegmentInput
 * @property {string} label - Segment label.
 * @property {number} value - Segment numeric value.
 * @property {string} color - CSS color string.
 */

/**
 * @typedef {object} LegendChipInput
 * @property {string} label - Chip label text.
 * @property {string} color - Dot color.
 * @property {string} [value] - Optional current value text.
 */

/**
 * @typedef {object} HistoryCache
 * @property {number} timestamp - Cache creation time (Date.now()).
 * @property {Record<string, {t:number, v:number}[]>} data - Entity ID → data points.
 */

/**
 * @typedef {object} GraphOptions
 * @property {string} [attribute] - Entity attribute to plot (default: 'current_temperature').
 * @property {boolean} [stacked] - Render temp + humidity stacked graphs.
 * @property {string[]} [entities] - Explicit entity IDs (overrides zones).
 * @property {string[]} [palette] - Custom color palette.
 * @property {number} [hours_to_show] - History time window (default: 24).
 * @property {number} [height] - SVG viewBox height (default: 80).
 */

/**
 * @typedef {object} DonutOptions
 * @property {string} [source] - 'api_breakdown' | 'homekit_saved'.
 * @property {{entity: string, label: string, color: string}[]} [segments] - Explicit segments.
 * @property {number} [size] - SVG viewBox dimensions (default: 120).
 */

/**
 * @typedef {object} ApiSectionOptions
 * @property {string[]} [show] - Visible sub-charts: 'bar', 'history', 'breakdown', 'saved'.
 */

/**
 * @typedef {object} ResolvedSegment
 * @property {string} label - Display label.
 * @property {number} value - Numeric value.
 * @property {string} color - CSS color.
 */

// ── Visual Identity Section Types ───────────────────────────────────

/**
 * @typedef {object} ThermalStripOptions
 * @property {'thermal_strip'} type - Section type.
 * @property {number} [hours_to_show] - Time window in hours (default: 24).
 * @property {number} [slots_per_hour] - Slots per hour (default: 2).
 * @property {string} [attribute] - 'temperature' (default) or 'humidity'.
 */

/**
 * @typedef {object} ComfortStripOptions
 * @property {'comfort_strip'} type - Section type.
 * @property {number} [slots_per_hour] - Slots per hour (default: 1).
 * @property {number} [hours_to_show] - Time window in hours (default: 24).
 */

/**
 * @typedef {object} EnergyFlowOptions
 * @property {'energy_flow'} type - Section type.
 */

/**
 * @typedef {object} RadialOptions
 * @property {'radial'} type - Section type.
 * @property {number} [size] - SVG viewBox dimensions (default: 280).
 * @property {string} [attribute] - 'temperature' (default), 'humidity', or 'both'.
 * @property {string} [outdoor_temp_entity] - Override outside temperature entity.
 * @property {string} [outdoor_humidity_entity] - Override outside humidity entity.
 */
