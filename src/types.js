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
 * @property {number|string|TargetObjectConfig} [target]
 * @property {SeverityEntry[]} [severity]
 * @property {AnimationConfig} [animation]
 * @property {PositionsConfig} [positions]
 * @property {IndicatorConfig} [indicator]
 * @property {ActionConfig} [tap_action]
 * @property {ActionConfig} [hold_action]
 * @property {ActionConfig} [double_tap_action]
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
 */

/**
 * @typedef {object} HassEntityState
 * @property {string} entity_id
 * @property {string} state
 * @property {Record<string, *>} attributes
 * @property {string} last_updated
 */

/**
 * @typedef {object} Hass
 * @property {Record<string, HassEntityState>} states
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
