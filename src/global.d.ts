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
// Keeping a single Hass definition there avoids a second ambient copy drifting out of sync.
