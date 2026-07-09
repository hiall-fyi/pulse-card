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

// The Hass / HassEntityState shapes live in src/shared/types.js as JSDoc
// typedefs (single source of truth, re-exported by every card's types.js).
// They used to be duplicated here as ambient globals; that second copy is
// removed so there is exactly one Hass definition to keep in sync.
