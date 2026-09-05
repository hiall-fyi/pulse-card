/**
 * @module shared/types
 * @description Shared JSDoc type definitions for the Home Assistant framework
 * surface used by every Pulse Card. Never imported at runtime — exists solely
 * for TypeScript's checkJs type-checking via `import('../shared/types.js')`.
 *
 * Card-specific config / state typedefs (EntityConfig, ZoneState, PortState…)
 * stay in each card's own `types.js`. Only the HA-framework contracts that are
 * identical across cards live here.
 */

export {};

/**
 * Action config shared by every card's tap / hold / double-tap handlers,
 * executed by `shared/action-handler.js` `executeAction`. The `toggle` action
 * is handled there for all cards even where a card's editor doesn't surface it.
 * @typedef {object} ActionConfig
 * @property {string} action - 'more-info' | 'navigate' | 'call-service' | 'perform-action' | 'url' | 'toggle' | 'none'
 * @property {string} [entity]
 * @property {string} [navigation_path]
 * @property {string} [service]
 * @property {string} [perform_action]
 * @property {Record<string, *>} [service_data]
 * @property {Record<string, *>} [data]
 * @property {string} [url_path]
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
 * @property {string} [unique_id]
 * @property {string} [translation_key]
 * @property {string} [device_id]
 */

/**
 * @typedef {object} Hass
 * @property {Record<string, HassEntityState>} states
 * @property {Record<string, HassEntityRegistryEntry>} [entities]
 * @property {(domain: string, service: string, serviceData?: Record<string, *>) => Promise<void>} callService
 * @property {(request: Record<string, *>) => Promise<*>} [callWS]
 * @property {{time_zone?: string}} [config] - HA system config; `time_zone` is the server's IANA zone.
 * @property {{time_zone?: string}} [locale] - User profile locale; `time_zone` is 'local' | 'server' (see resolveHassTimeZone).
 */
