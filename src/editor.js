/**
 * @module editor
 * @description Visual editor for Pulse Card — LitElement-based custom element
 * supporting multi-entity configuration with dynamic add/remove.
 * Uses ha-form for card settings + ha-entity-picker for entity list.
 * Pattern follows Mushroom Cards + HA Core entities card editor.
 * [US-4, AC-4.1]
 */

import { LitElement, html, css, nothing } from 'lit';
import { DEFAULTS } from './constants.js';

/**
 * ha-form schema for card-level settings.
 * Positions use flat keys (pos_name, pos_value, pos_icon) mapped to
 * nested config in _settingsChanged.
 */
const POSITION_OPTIONS = [
  { value: 'outside', label: 'Outside' },
  { value: 'inside', label: 'Inside' },
  { value: 'off', label: 'Off' },
];

/** Schema: Appearance section. */
const SCHEMA_APPEARANCE = [
  { name: 'title', label: 'Title', selector: { text: {} } },
  {
    name: '',
    type: 'grid',
    schema: [
      { name: 'height', label: 'Height', selector: { text: {} } },
      { name: 'border_radius', label: 'Border Radius', selector: { text: {} } },
    ],
  },
  {
    name: '',
    type: 'grid',
    schema: [
      { name: 'color', label: 'Color', selector: { text: {} } },
      {
        name: 'decimal',
        label: 'Decimals',
        selector: { number: { min: 0, max: 6, mode: 'box' } },
      },
    ],
  },
];

/** Schema: Layout section. */
const SCHEMA_LAYOUT = [
  {
    name: '',
    type: 'grid',
    schema: [
      {
        name: 'columns',
        label: 'Columns',
        selector: { number: { min: 1, max: 6, mode: 'box' } },
      },
      { name: 'gap', label: 'Gap', selector: { text: {} } },
    ],
  },
  {
    name: '',
    type: 'grid',
    schema: [
      {
        name: 'min',
        label: 'Min',
        selector: { number: { mode: 'box' } },
      },
      {
        name: 'max',
        label: 'Max',
        selector: { number: { mode: 'box' } },
      },
    ],
  },
  {
    name: '',
    type: 'grid',
    schema: [
      { name: 'target_value', label: 'Target', selector: { text: {} } },
      {
        name: 'bar_width',
        label: 'Bar Width (%)',
        selector: { number: { min: 1, max: 100, mode: 'box' } },
      },
    ],
  },
];

/** Schema: Display section — positions, animation, indicator. */
const SCHEMA_DISPLAY = [
  {
    name: '',
    type: 'grid',
    schema: [
      {
        name: 'pos_name',
        label: 'Name',
        selector: { select: { options: POSITION_OPTIONS, mode: 'dropdown' } },
      },
      {
        name: 'pos_value',
        label: 'Value',
        selector: { select: { options: POSITION_OPTIONS, mode: 'dropdown' } },
      },
    ],
  },
  {
    name: '',
    type: 'grid',
    schema: [
      {
        name: 'pos_icon',
        label: 'Icon',
        selector: { select: { options: POSITION_OPTIONS, mode: 'dropdown' } },
      },
      {
        name: 'pos_indicator',
        label: 'Indicator',
        selector: { select: { options: POSITION_OPTIONS, mode: 'dropdown' } },
      },
    ],
  },
  {
    name: '',
    type: 'grid',
    schema: [
      {
        name: 'indicator_period',
        label: 'Lookback (min)',
        selector: { number: { min: 1, max: 1440, mode: 'box' } },
      },
      { name: 'show_delta', label: 'Show Change Amount', selector: { boolean: {} } },
    ],
  },
  {
    name: '',
    type: 'grid',
    schema: [
      {
        name: 'anim_effect',
        label: 'Effect',
        selector: {
          select: {
            options: [
              { value: 'none', label: 'None' },
              { value: 'charge', label: 'Charge' },
            ],
            mode: 'dropdown',
          },
        },
      },
      {
        name: 'anim_speed',
        label: 'Speed (s)',
        selector: { number: { min: 0, max: 5, step: 0.1, mode: 'box' } },
      },
    ],
  },
];

/**
 * @typedef {{entity: string, [key: string]: *}} EditorEntityEntry
 */

/**
 * PulseCardEditor — visual config editor for Pulse Card.
 * LitElement-based, following HA Core + Mushroom patterns.
 */
class PulseCardEditor extends LitElement {
  /** @type {boolean} Whether HA card helpers have been loaded (prevents re-loading). */
  _helpersLoaded = false;

  static get properties() {
    return {
      hass: { attribute: false },
      _config: { state: true },
    };
  }

  /**
   * Ensure HA lazy-loaded components (ha-entity-picker, etc.) are available.
   * HA frontend lazy-loads these components — they are not registered until
   * a built-in card editor triggers their load. We force this by creating
   * an entities card element and requesting its config element, which
   * pulls in ha-entity-picker as a dependency.
   * Pattern from thomasloven's ScopedRegistry gist.
   */
  async connectedCallback() {
    super.connectedCallback();
    if (this._helpersLoaded) return;
    if (!window.loadCardHelpers) return;
    try {
      const helpers = await window.loadCardHelpers();
      this._helpersLoaded = true;
      const entitiesCard = await helpers.createCardElement({
        type: 'entities',
        entities: [],
      });
      entitiesCard.constructor.getConfigElement();
    } catch (err) {
      console.warn('Pulse Card: failed to load card helpers:', err);
    }
  }

  /**
   * Set config from HA editor framework.
   * @param {Record<string, *>} config
   */
  setConfig(config) {
    this._config = config;
  }

  /**
   * Get normalized entities array from config.
   * @returns {EditorEntityEntry[]}
   */
  _getEntities() {
    const cfg = /** @type {Record<string, *>} */ (this._config);
    if (cfg.entities) {
      return /** @type {*[]} */ (cfg.entities).map(/** @param {*} e */ (e) =>
        typeof e === 'string' ? { entity: e } : { ...e },
      );
    }
    if (cfg.entity) {
      return [{ entity: /** @type {string} */ (cfg.entity) }];
    }
    return [];
  }

  /**
   * Fire config-changed event to HA editor framework.
   * @param {Record<string, *>} config
   */
  _fireConfigChanged(config) {
    this._config = config;
    const event = new CustomEvent('config-changed', {
      detail: { config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  /**
   * Handle entity picker value change.
   * @param {number} index
   * @param {CustomEvent} ev
   */
  _entityChanged(index, ev) {
    const value = ev.detail.value;
    const entities = this._getEntities();
    if (value === '' || value === undefined) {
      entities.splice(index, 1);
    } else {
      entities[index] = { ...entities[index], entity: value };
    }
    this._updateEntities(entities);
  }

  /**
   * Handle per-entity field change (name, color).
   * @param {number} index
   * @param {string} field
   * @param {Event} ev
   */
  _entityFieldChanged(index, field, ev) {
    const value = /** @type {HTMLInputElement} */ (ev.target).value ?? '';
    const entities = this._getEntities();
    if (value === '' || value === undefined) {
      delete entities[index][field];
    } else {
      entities[index] = { ...entities[index], [field]: value };
    }
    this._updateEntities(entities);
  }

  /**
   * Remove entity at index.
   * @param {number} index
   */
  _removeEntity(index) {
    const entities = this._getEntities();
    entities.splice(index, 1);
    this._updateEntities(entities);
  }

  /**
   * Move entity at index by direction (-1 = up, +1 = down).
   * Boundary moves (first up, last down) are no-ops.
   * @param {number} index
   * @param {number} direction - -1 or +1
   */
  _moveEntity(index, direction) {
    const entities = this._getEntities();
    const target = index + direction;
    if (target < 0 || target >= entities.length) return;
    [entities[index], entities[target]] = [entities[target], entities[index]];
    this._updateEntities(entities);
  }

  /**
   * Add a new empty entity row.
   * @param {CustomEvent} ev
   */
  _addEntity(ev) {
    const value = ev.detail.value;
    if (!value) return;
    const entities = this._getEntities();
    entities.push({ entity: value });
    /** @type {*} */ (ev.target).value = '';
    this._updateEntities(entities);
  }

  /**
   * Update entities in config and fire change.
   * @param {EditorEntityEntry[]} entities
   */
  _updateEntities(entities) {
    /** @type {Record<string, *>} */
    const newConfig = { ...this._config };
    const cfg = /** @type {Record<string, *>} */ (this._config);
    if (entities.length <= 1 && !cfg.entities) {
      newConfig.entity = entities[0]?.entity || '';
      delete newConfig.entities;
    } else {
      newConfig.entities = entities;
      delete newConfig.entity;
    }
    this._fireConfigChanged(newConfig);
  }

  /**
   * Handle ha-form value-changed for card settings.
   * Merges form data into config. Empty strings remove the key (revert to default).
   * Flat position keys (pos_name, pos_value, pos_icon, pos_indicator) are mapped
   * to nested positions object. Animation keys are mapped to animation object.
   * Indicator keys are mapped to indicator object. Target is mapped to target object.
   * @param {CustomEvent} ev
   */
  _settingsChanged(ev) {
    ev.stopPropagation();
    const formData = ev.detail.value;
    const newConfig = { ...this._config };

    // --- Simple flat keys: empty → delete, else → set ---
    const simpleKeys = ['title', 'height', 'border_radius', 'color', 'columns', 'gap', 'min', 'max', 'decimal', 'bar_width'];
    for (const key of simpleKeys) {
      const val = formData[key];
      if (val === undefined || val === null || val === '') {
        delete newConfig[key];
      } else {
        newConfig[key] = val;
      }
    }

    // --- Boolean toggles: true → set, false → delete, absent → skip ---
    // Note: complementary, limit_value, entity_row are YAML-only (not in editor schema)
    // but if they somehow appear in formData, handle them gracefully
    const boolKeys = ['complementary', 'limit_value', 'entity_row'];
    for (const key of boolKeys) {
      if (formData[key] === true) {
        newConfig[key] = true;
      } else if (formData[key] === false) {
        delete newConfig[key];
      }
    }

    // --- Target: parse number, preserve object format (e.g. show_label) ---
    this._applyTarget(newConfig, formData.target_value);

    // --- Nested objects: flat form keys → nested config objects ---
    // Each entry: [configKey, keyMap, filterFn?]
    // keyMap: { formKey: nestedKey } — empty values are deleted
    // filterFn: optional per-key filter (return undefined to delete)
    /** @type {[string, Record<string, string>, ((k: string, v: *) => *)?][]} */
    const nestedMaps = [
      ['positions', { pos_name: 'name', pos_value: 'value', pos_icon: 'icon', pos_indicator: 'indicator' }],
      ['animation', { anim_effect: 'effect', anim_speed: 'speed' },
        (k, v) => k === 'effect' && v === 'none' ? undefined : v],
      ['indicator', { pos_indicator: 'show', indicator_period: 'period', show_delta: 'show_delta' },
        (k, v) => {
          if (k === 'show') return v && v !== 'off' ? true : undefined;
          if (k === 'show_delta') return v === true ? true : undefined;
          return v;
        }],
    ];
    for (const [configKey, keyMap, filterFn] of nestedMaps) {
      const nested = { ...(newConfig[configKey] || {}) };
      for (const [formKey, nestedKey] of Object.entries(keyMap)) {
        let val = formData[formKey];
        if (filterFn) val = filterFn(nestedKey, val);
        if (val === undefined || val === null || val === '') {
          delete nested[nestedKey];
        } else {
          nested[nestedKey] = val;
        }
      }
      if (Object.keys(nested).length > 0) {
        newConfig[configKey] = nested;
      } else {
        delete newConfig[configKey];
      }
    }

    this._fireConfigChanged(newConfig);
  }

  /**
   * Apply target value from form data to config.
   * Parses numeric strings, preserves object format (e.g. show_label).
   * @param {Record<string, *>} config - Config object to mutate.
   * @param {*} targetVal - Raw target value from form.
   */
  _applyTarget(config, targetVal) {
    if (targetVal === undefined || targetVal === null || targetVal === '') {
      delete config.target;
      return;
    }
    const num = parseFloat(targetVal);
    const resolvedValue = isNaN(num) ? targetVal : num;
    const existingTarget = this._config?.target;
    if (typeof existingTarget === 'object' && existingTarget !== null) {
      config.target = { ...existingTarget, value: resolvedValue };
    } else {
      config.target = resolvedValue;
    }
  }

  /**
   * Compute label for ha-form schema entries.
   * @param {{label?: string, name?: string}} schema
   * @returns {string}
   */
  _computeLabel(schema) {
    return schema.label || schema.name || '';
  }

  render() {
    /** @type {*} */
    const hass = /** @type {*} */ (this).hass;
    if (!hass || !this._config) {
      return nothing;
    }

    const entities = this._getEntities();
    // Resolve target value for the form — supports number, string (entity ID), or object
    const rawTarget = this._config.target;
    let targetFormValue = '';
    if (rawTarget !== undefined && rawTarget !== null) {
      if (typeof rawTarget === 'object' && rawTarget.value !== undefined) {
        targetFormValue = String(rawTarget.value);
      } else {
        targetFormValue = String(rawTarget);
      }
    }

    const formData = {
      title: this._config.title || '',
      height: this._config.height || '',
      border_radius: this._config.border_radius || '',
      color: this._config.color || '',
      decimal: this._config.decimal ?? '',
      columns: this._config.columns || DEFAULTS.columns,
      gap: this._config.gap || '',
      target_value: targetFormValue,
      bar_width: this._config.bar_width ?? '',
      min: this._config.min ?? '',
      max: this._config.max ?? '',
      pos_name: this._config.positions?.name ?? DEFAULTS.positions.name,
      pos_value: this._config.positions?.value ?? DEFAULTS.positions.value,
      pos_icon: this._config.positions?.icon ?? DEFAULTS.positions.icon,
      pos_indicator: this._config.positions?.indicator ?? DEFAULTS.positions.indicator,
      indicator_period: this._config.indicator?.period ?? '',
      show_delta: this._config.indicator?.show_delta || false,
      anim_effect: this._config.animation?.effect ?? DEFAULTS.animation.effect,
      anim_speed: this._config.animation?.speed ?? '',
    };

    return html`
      <div class="editor">
        <h3>Entities</h3>
        <div class="entities">
          ${entities.map(
            (/** @type {EditorEntityEntry} */ ec, /** @type {number} */ i) => html`
              <div class="entity-row">
                <div class="entity-row-main">
                  <ha-entity-picker
                    .hass=${hass}
                    .value=${ec.entity}
                    .index=${i}
                    allow-custom-entity
                    @value-changed=${(/** @type {CustomEvent} */ ev) => this._entityChanged(i, ev)}
                  ></ha-entity-picker>
                  ${entities.length > 1 ? html`
                    <ha-icon-button
                      .label=${'Move up'}
                      .path=${'M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z'}
                      class="move-icon"
                      .disabled=${i === 0}
                      @click=${() => this._moveEntity(i, -1)}
                    ></ha-icon-button>
                    <ha-icon-button
                      .label=${'Move down'}
                      .path=${'M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z'}
                      class="move-icon"
                      .disabled=${i === entities.length - 1}
                      @click=${() => this._moveEntity(i, 1)}
                    ></ha-icon-button>
                  ` : nothing}
                  <ha-icon-button
                    .label=${'Remove'}
                    .path=${'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z'}
                    class="remove-icon"
                    @click=${() => this._removeEntity(i)}
                  ></ha-icon-button>
                </div>
                <div class="entity-row-fields">
                  <ha-textfield
                    .label=${'Name'}
                    .value=${ec.name || ''}
                    @input=${(/** @type {Event} */ ev) => this._entityFieldChanged(i, 'name', ev)}
                  ></ha-textfield>
                  <ha-textfield
                    .label=${'Color'}
                    .value=${ec.color || ''}
                    @input=${(/** @type {Event} */ ev) => this._entityFieldChanged(i, 'color', ev)}
                  ></ha-textfield>
                </div>
              </div>
            `,
          )}
        </div>
        <ha-entity-picker
          class="add-entity"
          .hass=${hass}
          @value-changed=${this._addEntity}
        ></ha-entity-picker>
        <h3>Card Settings</h3>
        <ha-form
          .hass=${hass}
          .data=${formData}
          .schema=${SCHEMA_APPEARANCE}
          .computeLabel=${this._computeLabel}
          @value-changed=${this._settingsChanged}
        ></ha-form>
        <h3>Layout</h3>
        <ha-form
          .hass=${hass}
          .data=${formData}
          .schema=${SCHEMA_LAYOUT}
          .computeLabel=${this._computeLabel}
          @value-changed=${this._settingsChanged}
        ></ha-form>
        <h3>Display</h3>
        <ha-form
          .hass=${hass}
          .data=${formData}
          .schema=${SCHEMA_DISPLAY}
          .computeLabel=${this._computeLabel}
          @value-changed=${this._settingsChanged}
        ></ha-form>
      </div>
    `;
  }

  static get styles() {
    return css`
      .editor {
        display: flex;
        flex-direction: column;
      }
      h3 {
        font-size: 14px;
        font-weight: 500;
        margin: 12px 0 8px;
        color: var(--primary-text-color);
      }
      h3:first-child {
        margin-top: 0;
      }
      .entities {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .entity-row {
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: 8px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 8px;
      }
      .entity-row-main {
        display: flex;
        align-items: center;
      }
      .entity-row-main ha-entity-picker {
        flex: 1;
        min-width: 0;
      }
      .entity-row-fields {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
      }
      .remove-icon {
        color: var(--secondary-text-color);
        --mdc-icon-button-size: 36px;
      }
      .move-icon {
        color: var(--secondary-text-color);
        --mdc-icon-button-size: 36px;
      }
      .move-icon[disabled] {
        opacity: 0.3;
        pointer-events: none;
      }
      .add-entity {
        display: block;
        margin-top: 8px;
      }
    `;
  }
}

if (!customElements.get('pulse-card-editor')) {
  customElements.define('pulse-card-editor', PulseCardEditor);
}

export { PulseCardEditor };
