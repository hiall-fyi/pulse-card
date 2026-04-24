/**
 * @module shared/editor-helpers
 * @description Shared helpers for visual editors across all Pulse cards.
 * Shared helpers based on the Pulse Card editor — the reference
 * implementation. Only patterns that are identical across all three
 * editors live here.
 */

import { html, nothing } from 'lit';

// ── SVG icon paths (MDI) ────────────────────────────────────────────

/** MDI chevron-up path. */
const ICON_MOVE_UP = 'M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z';

/** MDI chevron-down path. */
const ICON_MOVE_DOWN = 'M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z';

/** MDI close path. */
const ICON_REMOVE = 'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z';

// ── Card helpers ────────────────────────────────────────────────────

/**
 * Load HA card helpers to ensure ha-entity-picker and other HA
 * components are registered. Call once from connectedCallback.
 *
 * Pattern from Pulse Card editor — forces HA to lazy-load
 * ha-entity-picker by creating an entities card and requesting
 * its config element.
 *
 * @param {string} logPrefix - Card name for warning messages.
 * @returns {Promise<boolean>} Whether helpers loaded successfully.
 */
export async function loadEditorHelpers(logPrefix) {
  if (!window.loadCardHelpers) return false;
  try {
    const helpers = await window.loadCardHelpers();
    const entitiesCard = await helpers.createCardElement({
      type: 'entities',
      entities: [],
    });
    entitiesCard.constructor.getConfigElement();
    return true;
  } catch (err) {
    console.warn(`${logPrefix} failed to load card helpers:`, err);
    return false;
  }
}

// ── Reorder row template ────────────────────────────────────────────

/**
 * Render move-up, move-down, and remove icon buttons for a list row.
 * Matches the Pulse Card editor's entity row button pattern exactly.
 *
 * @param {number} index - Current row index.
 * @param {number} total - Total number of rows.
 * @param {function(number, number): void} onMove - Callback(index, direction).
 * @param {function(number): void} onRemove - Callback(index).
 * @returns {import('lit').TemplateResult}
 */
export function renderReorderButtons(index, total, onMove, onRemove) {
  return html`
    ${total > 1 ? html`
      <ha-icon-button
        .label=${'Move up'}
        .path=${ICON_MOVE_UP}
        class="move-icon"
        .disabled=${index === 0}
        @click=${() => onMove(index, -1)}
      ></ha-icon-button>
      <ha-icon-button
        .label=${'Move down'}
        .path=${ICON_MOVE_DOWN}
        class="move-icon"
        .disabled=${index === total - 1}
        @click=${() => onMove(index, 1)}
      ></ha-icon-button>
    ` : nothing}
    <ha-icon-button
      .label=${'Remove'}
      .path=${ICON_REMOVE}
      class="remove-icon"
      @click=${() => onRemove(index)}
    ></ha-icon-button>
  `;
}

// ── Compute label ───────────────────────────────────────────────────

/**
 * Default computeLabel for ha-form schemas.
 * @param {{label?: string, name?: string}} schema
 * @returns {string}
 */
export function computeLabel(schema) {
  return schema.label || schema.name || '';
}
