/**
 * Global type augmentations for Home Assistant custom cards.
 */
interface Window {
  customCards: Array<{
    type: string;
    name: string;
    description: string;
    preview?: boolean;
    documentationURL?: string;
  }>;
  /** HA frontend helper for lazy-loading card components. */
  loadCardHelpers?: () => Promise<{
    createCardElement(config: Record<string, unknown>): Promise<HTMLElement & { constructor: { getConfigElement(): Promise<unknown> } }>;
  }>;
}

/** Minimal Home Assistant hass object shape for custom cards. */
interface Hass {
  states: Record<string, HassEntity>;
  callService?: (domain: string, service: string, data?: Record<string, unknown>) => Promise<unknown>;
  callWS?: (msg: Record<string, unknown>) => Promise<unknown>;
}

/** Minimal HA entity state shape. */
interface HassEntity {
  state: string;
  attributes: Record<string, unknown>;
  entity_id?: string;
}
