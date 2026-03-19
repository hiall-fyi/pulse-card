/**
 * @module editor
 * @description Visual editor for Pulse Card — LitElement-based custom element
 * supporting multi-entity configuration with dynamic add/remove.
 * Uses ha-form for card settings + ha-entity-picker for entity list.
 * Pattern follows Mushroom Cards + HA Core entities card editor.
 * [US-4, AC-4.1]
 */

import { LitElement, html, css, nothing } from 'lit';

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

const SETTINGS_SCHEMA = [
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
        name: 'columns',
        label: 'Columns',
        selector: { number: { min: 1, max: 6, mode: 'box' } },
      },
    ],
  },
  {
    name: '',
    type: 'grid',
    schema: [
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
      {
        name: 'pos_name',
        label: 'Name Position',
        selector: { select: { options: POSITION_OPTIONS, mode: 'dropdown' } },
      },
      {
        name: 'pos_value',
        label: 'Value Position',
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
        label: 'Icon Position',
        selector: { select: { options: POSITION_OPTIONS, mode: 'dropdown' } },
      },
      {
        name: 'anim_effect',
        label: 'Animation',
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
  static get properties() {
    return {
      hass: { attribute: false },
      _config: { state: true },
      _helpers: { state: true },
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
    if (this._helpers) return;
    if (!window.loadCardHelpers) return;
    const helpers = await window.loadCardHelpers();
    this._helpers = helpers;
    const entitiesCard = await helpers.createCardElement({
      type: 'entities',
      entities: [],
    });
    entitiesCard.constructor.getConfigElement();
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
   * Remove entity at index.
   * @param {number} index
   */
  _removeEntity(index) {
    const entities = this._getEntities();
    entities.splice(index, 1);
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
   * Flat position keys (pos_name, pos_value, pos_icon) are mapped to nested
   * positions object. Animation effect is mapped to animation.effect.
   * @param {CustomEvent} ev
   */
  _settingsChanged(ev) {
    ev.stopPropagation();
    const formData = ev.detail.value;
    const newConfig = { ...this._config };

    // Simple flat keys
    const simpleKeys = ['title', 'height', 'border_radius', 'color', 'columns', 'gap', 'min', 'max'];
    for (const key of simpleKeys) {
      const val = formData[key];
      if (val === undefined || val === null || val === '') {
        delete newConfig[key];
      } else {
        newConfig[key] = val;
      }
    }

    // Positions — flat keys to nested object
    const posMap = { pos_name: 'name', pos_value: 'value', pos_icon: 'icon' };
    const positions = { ...(newConfig.positions || {}) };
    let hasPositions = false;
    for (const [flatKey, posKey] of Object.entries(posMap)) {
      const val = formData[flatKey];
      if (val && val !== '') {
        positions[posKey] = val;
        hasPositions = true;
      } else {
        delete positions[posKey];
      }
    }
    if (hasPositions && Object.keys(positions).length > 0) {
      newConfig.positions = positions;
    } else {
      delete newConfig.positions;
    }

    // Animation effect — flat key to nested object
    const animEffect = formData.anim_effect;
    if (animEffect && animEffect !== 'none') {
      newConfig.animation = { ...(newConfig.animation || {}), effect: animEffect };
    } else {
      if (newConfig.animation) {
        delete newConfig.animation.effect;
        if (Object.keys(newConfig.animation).length === 0) {
          delete newConfig.animation;
        }
      }
    }

    this._fireConfigChanged(newConfig);
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
    const formData = {
      title: this._config.title || '',
      height: this._config.height || '',
      border_radius: this._config.border_radius || '',
      color: this._config.color || '',
      columns: this._config.columns || 1,
      gap: this._config.gap || '',
      min: this._config.min ?? '',
      max: this._config.max ?? '',
      pos_name: this._config.positions?.name ?? 'outside',
      pos_value: this._config.positions?.value ?? 'outside',
      pos_icon: this._config.positions?.icon ?? 'off',
      anim_effect: this._config.animation?.effect ?? 'none',
    };

    return html`
      <div class="editor">
        <h3>Entities</h3>
        <div class="entities">
          ${entities.map(
            (/** @type {EditorEntityEntry} */ ec, /** @type {number} */ i) => html`
              <div class="entity-row">
                <ha-entity-picker
                  .hass=${hass}
                  .value=${ec.entity}
                  .index=${i}
                  allow-custom-entity
                  @value-changed=${(/** @type {CustomEvent} */ ev) => this._entityChanged(i, ev)}
                ></ha-entity-picker>
                <ha-icon-button
                  .label=${'Remove'}
                  .path=${'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z'}
                  class="remove-icon"
                  @click=${() => this._removeEntity(i)}
                ></ha-icon-button>
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
          .schema=${SETTINGS_SCHEMA}
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
        align-items: center;
      }
      .entity-row ha-entity-picker {
        flex: 1;
        min-width: 0;
      }
      .remove-icon {
        color: var(--secondary-text-color);
        --mdc-icon-button-size: 36px;
      }
      .add-entity {
        display: block;
        margin-top: 8px;
      }
    `;
  }
}

customElements.define('pulse-card-editor', PulseCardEditor);

export { PulseCardEditor };
