/**
 * @module shared/editor-helpers
 * @description Shared helpers for visual editors across all Pulse cards.
 * Shared helpers based on the Pulse Card editor — the reference
 * implementation. Only patterns that are identical across all three
 * editors live here.
 */

import { html, nothing, css } from 'lit';

/* Every Pulse card editor uses renderReorderButtons() which emits
   .pulse-move-icon and .pulse-remove-icon. The matching styles travel with
   the helper so the selectors and their styling stay together. */
export const SHARED_EDITOR_STYLES = css`
  .pulse-move-icon {
    color: var(--pulse-text-secondary);
    --mdc-icon-button-size: 36px;
  }
  .pulse-remove-icon {
    color: var(--pulse-text-secondary);
    --mdc-icon-button-size: 36px;
  }
  .pulse-move-icon[disabled] {
    opacity: 0.3;
    pointer-events: none;
  }
`;

/** MDI chevron-up path. */
const ICON_MOVE_UP = 'M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z';

/** MDI chevron-down path. */
const ICON_MOVE_DOWN = 'M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z';

/** MDI close path. */
const ICON_REMOVE = 'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z';

/**
 * Load HA card helpers to register ha-entity-picker and other HA components.
 * Call once from connectedCallback. Forces lazy load by creating an entities
 * card and requesting its config element — same pattern HA's own editors use.
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

/**
 * Render move-up, move-down, and remove icon buttons for a list row.
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
        class="pulse-move-icon"
        .disabled=${index === 0}
        @click=${() => onMove(index, -1)}
      ></ha-icon-button>
      <ha-icon-button
        .label=${'Move down'}
        .path=${ICON_MOVE_DOWN}
        class="pulse-move-icon"
        .disabled=${index === total - 1}
        @click=${() => onMove(index, 1)}
      ></ha-icon-button>
    ` : nothing}
    <ha-icon-button
      .label=${'Remove'}
      .path=${ICON_REMOVE}
      class="pulse-remove-icon"
      @click=${() => onRemove(index)}
    ></ha-icon-button>
  `;
}

/**
 * Default computeLabel for ha-form schemas.
 * @param {{label?: string, name?: string}} schema
 * @returns {string}
 */
export function computeLabel(schema) {
  return schema.label || schema.name || '';
}

/**
 * Set or clear a field on one list item, returning a new list (no mutation).
 * An empty string or undefined value deletes the field; boolean false is a
 * real value and is stored (false !== '').
 * @param {Record<string, *>[]} list
 * @param {number} index
 * @param {string} field
 * @param {*} value
 * @returns {Record<string, *>[]}
 */
export function updateListItemField(list, index, field, value) {
  const next = list.map((item) => ({ ...item }));
  if (value === '' || value === undefined) {
    delete next[index][field];
  } else {
    next[index][field] = value;
  }
  return next;
}

/**
 * Set or clear a sub-field inside a nested object on one list item, returning
 * a new list. Empty value removes the sub-field; if the nested object becomes
 * empty it is removed entirely.
 * @param {Record<string, *>[]} list
 * @param {number} index
 * @param {string} key - Nested object key (e.g. 'sparkline').
 * @param {string} subField
 * @param {*} value
 * @returns {Record<string, *>[]}
 */
export function updateListItemNested(list, index, key, subField, value) {
  const next = list.map((item) => ({ ...item }));
  const nested = { ...(next[index][key] || {}) };
  if (value === '' || value === undefined) {
    delete nested[subField];
  } else {
    nested[subField] = value;
  }
  if (Object.keys(nested).length === 0) {
    delete next[index][key];
  } else {
    next[index][key] = nested;
  }
  return next;
}

/**
 * Swap a list item with its neighbour in the given direction, returning a new
 * list. Boundary moves (first up, last down) return the SAME list reference
 * unchanged, so callers can skip a no-op update with `if (next !== list)`.
 * @template {Record<string, *>} T
 * @param {T[]} list
 * @param {number} index
 * @param {number} direction - -1 (up) or +1 (down).
 * @returns {T[]}
 */
export function moveListItem(list, index, direction) {
  const target = index + direction;
  if (target < 0 || target >= list.length) return list;
  const next = list.map((item) => ({ ...item }));
  [next[index], next[target]] = [next[target], next[index]];
  return next;
}

/**
 * Remove a list item by index, returning a new list.
 * @template {Record<string, *>} T
 * @param {T[]} list
 * @param {number} index
 * @returns {T[]}
 */
export function removeListItem(list, index) {
  const next = list.map((item) => ({ ...item }));
  next.splice(index, 1);
  return next;
}
