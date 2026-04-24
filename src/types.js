/**
 * @module types
 * @description JSDoc type definitions for Pulse Card.
 * This file is never imported at runtime — it exists solely for
 * TypeScript's checkJs type-checking via JSDoc annotations.
 */

// Dummy export to make this a module for TypeScript's import('./types.js') syntax
export {};

/**
 * @typedef {object} ActionConfig
 * @property {string} action - 'more-info' | 'navigate' | 'call-service' | 'perform-action' | 'url' | 'none'
 * @property {string} [entity]
 * @property {string} [navigation_path]
 * @property {string} [service]
 * @property {string} [perform_action]
 * @property {Record<string, *>} [service_data]
 * @property {Record<string, *>} [data]
 * @property {string} [url_path]
 */

/**
 * @typedef {object} AnimationConfig
 * @property {string} [state] - 'on' | 'off'
 * @property {number} [speed]
 * @property {string} [effect] - 'none' | 'charge'
 */

/**
 * @typedef {object} PositionsConfig
 * @property {string} [icon] - 'outside' | 'inside' | 'off'
 * @property {string} [name] - 'outside' | 'inside' | 'off'
 * @property {string} [value] - 'outside' | 'inside' | 'off'
 * @property {string} [indicator] - 'outside' | 'inside' | 'off'
 */

/**
 * @typedef {object} IndicatorConfig
 * @property {boolean} [show]
 * @property {boolean} [show_delta]
 * @property {number} [period]
 * @property {boolean} [inverted] - Flip indicator colors: up=red, down=green (for "less is better" sensors like CPU/memory usage)
 */

/**
 * @typedef {object} SparklineConfig
 * @property {boolean} [show] - Enable sparkline.
 * @property {number} [hours_to_show] - History lookback in hours (default 24).
 * @property {number} [points_per_hour] - Data points per hour for smoothing (default 1). Higher = more detail.
 * @property {string} [aggregate_func] - 'avg' | 'min' | 'max' | 'median' | 'first' | 'last' | 'sum' | 'delta' | 'diff' (default 'avg').
 * @property {boolean} [smoothing] - Enable quadratic Bezier smoothing (default true). Set false for raw line.
 * @property {string} [color] - Override sparkline color.
 * @property {number} [stroke_width] - SVG stroke width (default 1.5). Alias: line_width.
 * @property {number} [line_width] - SVG line width (default 1.5). Same as stroke_width, matches mini-graph-card naming.
 * @property {number} [update_interval] - Refresh interval in seconds (default 300).
 */

/**
 * Fully-resolved sparkline config with all defaults applied.
 * Returned by PulseCard._resolveSparklineConfig().
 * @typedef {object} ResolvedSparklineConfig
 * @property {number} hours - Hours of history to show (default 24).
 * @property {number} pointsPerHour - Data points per hour (default 1).
 * @property {number} slots - Computed: Math.max(hours * pointsPerHour, 2).
 * @property {string} aggregateFunc - Aggregation function name (default 'avg').
 * @property {boolean} smoothing - Enable Bezier smoothing (default true).
 * @property {number} strokeWidth - SVG stroke width (default 1.5).
 * @property {string|null} color - Override color or null.
 * @property {number} updateInterval - Refresh interval in seconds (default 300).
 */

/**
 * @typedef {object} VisibilityConfig
 * @property {number} [state_above] - Show when value > threshold.
 * @property {number} [state_below] - Show when value < threshold.
 * @property {string} [state_equal] - Show when state equals string.
 * @property {string} [state_not_equal] - Show when state does not equal string.
 */

/**
 * @typedef {object} SeverityEntry
 * @property {number} from
 * @property {number} to
 * @property {string} color
 * @property {string} [icon]
 * @property {string} [mode] - 'gradient' or undefined
 */


/**
 * @typedef {object} TargetObjectConfig
 * @property {number|string} value
 * @property {boolean} [show_label]
 */

/**
 * @typedef {object} SecondaryInfoConfig
 * @property {string} [attribute] - Show this entity attribute's value.
 * @property {string} [text] - Show static text.
 * @property {string} [template] - Interpolate {attribute_name} placeholders from entity attributes. bytes/packets auto-format as K/M/G.
 * @property {string} [type] - 'last_changed' — show relative time since last state change.
 */

/**
 * @typedef {object} InteractiveConfig
 * @property {number} [step] - Override step value.
 * @property {string} [service] - Custom service (e.g. "climate.set_temperature").
 * @property {Record<string, *>} [data] - Custom service data. Use "$value" as placeholder for slider value.
 */

/**
 * @typedef {object} EntityConfig
 * @property {string} entity
 * @property {string} [name]
 * @property {string} [icon]
 * @property {string} [attribute]
 * @property {string} [color]
 * @property {string|number} [height]
 * @property {string|number} [border_radius]
 * @property {number} [min]
 * @property {number} [max]
 * @property {number|null} [decimal]
 * @property {string} [unit_of_measurement]
 * @property {boolean} [complementary]
 * @property {boolean} [limit_value]
 * @property {number} [bar_width]
 * @property {number|string|TargetObjectConfig} [target]
 * @property {SeverityEntry[]} [severity]
 * @property {AnimationConfig} [animation]
 * @property {PositionsConfig} [positions]
 * @property {IndicatorConfig} [indicator]
 * @property {ActionConfig} [tap_action]
 * @property {ActionConfig} [hold_action]
 * @property {ActionConfig} [double_tap_action]
 * @property {boolean|SparklineConfig} [sparkline]
 * @property {VisibilityConfig} [visibility]
 * @property {SecondaryInfoConfig} [secondary_info]
 * @property {Record<string, string>} [state_map]
 * @property {Record<string, string>} [state_color]
 * @property {AttributeColorConfig} [attribute_color]
 * @property {boolean|InteractiveConfig} [interactive]
 */

/**
 * @typedef {object} PulseCardConfig
 * @property {string} [entity]
 * @property {EntityConfig[]} [entities]
 * @property {string} [title]
 * @property {string} [color]
 * @property {string|number} [height]
 * @property {string|number} [border_radius]
 * @property {number} [min]
 * @property {number} [max]
 * @property {number|null} [decimal]
 * @property {boolean} [entity_row]
 * @property {boolean} [complementary]
 * @property {boolean} [limit_value]
 * @property {number} [bar_width]
 * @property {number} [columns]
 * @property {string|number} [gap]
 * @property {number|string|TargetObjectConfig} [target]
 * @property {SeverityEntry[]} [severity]
 * @property {AnimationConfig} [animation]
 * @property {PositionsConfig} [positions]
 * @property {IndicatorConfig} [indicator]
 * @property {ActionConfig} [tap_action]
 * @property {ActionConfig} [hold_action]
 * @property {ActionConfig} [double_tap_action]
 * @property {boolean|SparklineConfig} [sparkline]
 * @property {boolean|InteractiveConfig} [interactive]
 * @property {string} [layout] - 'default' | 'compact'
 * @property {number|string} [font_size] - Base font size for name, value, icon (e.g. 10, '10px')
 * @property {SecondaryInfoConfig} [secondary_info] - Card-level default secondary info for all entities.
 * @property {AttributeColorConfig} [attribute_color] - Card-level default attribute-to-color mapping.
 */

/**
 * @typedef {object} AttributeColorConfig
 * @property {string} attribute - Entity attribute name to read value from.
 * @property {Record<string, string>} map - Attribute value → color mapping.
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
 * Entity registry entry exposed via hass.entities (subset of fields).
 * @typedef {object} HassEntityRegistryEntry
 * @property {string} entity_id
 * @property {number|null} [display_precision]
 * @property {string|null} [platform]
 */

/**
 * @typedef {object} Hass
 * @property {Record<string, HassEntityState>} states
 * @property {Record<string, HassEntityRegistryEntry>} [entities]
 * @property {function(string, string, Record<string, *>=): Promise<void>} callService
 * @property {function(Record<string, *>): Promise<*>} callWS
 */

/**
 * @typedef {object} IndicatorData
 * @property {'up'|'down'|'neutral'} direction
 * @property {number} delta
 */

/**
 * Computed bar state for a single entity — shared between render and update.
 * @typedef {object} BarState
 * @property {boolean} isUnavailable
 * @property {number} min
 * @property {number} max
 * @property {number} numValue
 * @property {number} fill
 * @property {string} displayValue
 * @property {string} name
 * @property {string} color - Resolved color (severity > entity > card > empty).
 * @property {string} resolvedIcon - Resolved icon (severity > entity > state > empty).
 */
