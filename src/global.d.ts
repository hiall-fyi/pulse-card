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
