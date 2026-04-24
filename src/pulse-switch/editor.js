/**
 * @module editor
 * @description Visual editor for Pulse Switch Card — LitElement-based custom
 * element with ha-form for card settings and ha-entity-picker for port list.
 */

import { LitElement, html, css, nothing } from 'lit';
import { DEFAULTS, EDITOR_NAME } from './constants.js';
import { loadEditorHelpers, renderReorderButtons, computeLabel } from '../shared/editor-helpers.js';

/** ha-form schema for card-level settings. */
const SCHEMA_SETTINGS = [
  {
    name: '', type: 'grid', column_min_width: '120px',
    schema: [
      { name: 'title', label: 'Title', selector: { text: {} } },
      { name: 'columns', label: 'Columns', selector: { number: { min: 1, max: 8, mode: 'box' } } },
    ],
  },
  {
    name: '', type: 'grid', column_min_width: '120px',
    schema: [
      { name: 'led_mode', label: 'LED Mode', selector: { select: { options: [{ value: 'scaled', label: 'Scaled' }, { value: 'realistic', label: 'Realistic' }], mode: 'dropdown' } } },
      { name: 'speed_format', label: 'Speed Format', selector: { select: { options: [{ value: 'rx/tx', label: 'RX/TX' }, { value: 'rx', label: 'RX Only' }, { value: 'total', label: 'Total' }], mode: 'dropdown' } } },
    ],
  },
  { name: 'show_speed', label: 'Show Speed', selector: { boolean: {} } },
];

/**
 * PulseSwitchCardEditor — visual config editor.
 */
class PulseSwitchCardEditor extends LitElement {
  /** @type {boolean} */
  _helpersLoaded = false;

  static get properties() {
    return {
      hass: { attribute: false },
      _config: { state: true },
    };
  }

  async connectedCallback() {
    super.connectedCallback();
    if (this._helpersLoaded) return;
    this._helpersLoaded = await loadEditorHelpers('Pulse Switch Card:');
  }

  /**
   * Set config from HA editor framework.
   * @param {Record<string, *>} config
   */
  setConfig(config) {
    this._config = config;
  }

  /**
   * Get ports array from config.
   * @returns {{entity: string, label?: string, link_speed?: number, port_type?: string}[]}
   */
  _getPorts() {
    return (this._config?.ports || []).map((/** @type {*} */ p) => ({ ...p }));
  }

  /**
   * Fire config-changed event.
   * @param {Record<string, *>} config
   */
  _fireConfigChanged(config) {
    this._config = config;
    this.dispatchEvent(new CustomEvent('config-changed', {
      detail: { config },
      bubbles: true,
      composed: true,
    }));
  }

  /**
   * Handle port entity change.
   * @param {number} index
   * @param {CustomEvent} ev
   */
  _portEntityChanged(index, ev) {
    const value = ev.detail.value;
    const ports = this._getPorts();
    if (value === '' || value === undefined) {
      ports.splice(index, 1);
    } else {
      ports[index] = { ...ports[index], entity: value };
    }
    this._fireConfigChanged({ ...this._config, ports });
  }

  /**
   * Handle port label change.
   * @param {number} index
   * @param {Event} ev
   */
  _portLabelChanged(index, ev) {
    const value = /** @type {HTMLInputElement} */ (ev.target).value ?? '';
    const ports = this._getPorts();
    if (value === '') {
      delete ports[index].label;
    } else {
      ports[index].label = value;
    }
    this._fireConfigChanged({ ...this._config, ports });
  }

  /**
   * Remove port at index.
   * @param {number} index
   */
  _removePort(index) {
    const ports = this._getPorts();
    ports.splice(index, 1);
    this._fireConfigChanged({ ...this._config, ports });
  }

  /**
   * Move port by direction.
   * @param {number} index
   * @param {number} direction
   */
  _movePort(index, direction) {
    const ports = this._getPorts();
    const target = index + direction;
    if (target < 0 || target >= ports.length) return;
    [ports[index], ports[target]] = [ports[target], ports[index]];
    this._fireConfigChanged({ ...this._config, ports });
  }

  /**
   * Add new port.
   * @param {CustomEvent} ev
   */
  _addPort(ev) {
    const value = ev.detail.value;
    if (!value) return;
    const ports = this._getPorts();
    ports.push({ entity: value });
    /** @type {*} */ (ev.target).value = '';
    this._fireConfigChanged({ ...this._config, ports });
  }

  /**
   * Handle card settings change from ha-form.
   * @param {CustomEvent} ev
   */
  _settingsChanged(ev) {
    ev.stopPropagation();
    const formData = ev.detail.value;
    /** @type {Record<string, *>} */
    const newConfig = { ...this._config };

    const keys = ['title', 'columns', 'led_mode', 'speed_format'];
    for (const key of keys) {
      const val = formData[key];
      if (val === undefined || val === null || val === '') {
        delete newConfig[key];
      } else {
        newConfig[key] = val;
      }
    }

    // Boolean: show_speed (default true, so false = set, true = delete)
    if (formData.show_speed === false) {
      newConfig.show_speed = false;
    } else {
      delete newConfig.show_speed;
    }

    this._fireConfigChanged(newConfig);
  }

  render() {
    /** @type {*} */
    const hass = /** @type {*} */ (this).hass;
    if (!hass || !this._config) return nothing;

    const ports = this._getPorts();
    const formData = {
      title: this._config.title || '',
      columns: this._config.columns || DEFAULTS.columns,
      led_mode: this._config.led_mode || DEFAULTS.led_mode,
      speed_format: this._config.speed_format || DEFAULTS.speed_format,
      show_speed: this._config.show_speed !== false,
    };

    return html`
      <div class="editor">
        <h3>Ports</h3>
        <div class="ports">
          ${ports.map((/** @type {*} */ p, /** @type {number} */ i) => html`
            <div class="port-row">
              <div class="port-row-main">
                <ha-entity-picker
                  .hass=${hass}
                  .value=${p.entity}
                  .index=${i}
                  allow-custom-entity
                  .includeDomains=${['sensor']}
                  @value-changed=${(/** @type {CustomEvent} */ ev) => this._portEntityChanged(i, ev)}
                ></ha-entity-picker>
                ${renderReorderButtons(
                  i, ports.length,
                  (idx, dir) => this._movePort(idx, dir),
                  (idx) => this._removePort(idx),
                )}
              </div>
              <div class="port-row-fields">
                <ha-textfield
                  .label=${'Label'}
                  .value=${p.label || ''}
                  @input=${(/** @type {Event} */ ev) => this._portLabelChanged(i, ev)}
                ></ha-textfield>
              </div>
            </div>
          `)}
        </div>
        <ha-entity-picker
          class="add-port"
          .hass=${hass}
          .includeDomains=${['sensor']}
          @value-changed=${this._addPort}
        ></ha-entity-picker>
        <h3>Card Settings</h3>
        <ha-form
          .hass=${hass}
          .data=${formData}
          .schema=${SCHEMA_SETTINGS}
          .computeLabel=${computeLabel}
          @value-changed=${this._settingsChanged}
        ></ha-form>
      </div>
    `;
  }

  static get styles() {
    return css`
      .editor { padding: 0; }
      h3 { margin: 16px 0 8px; font-size: 14px; font-weight: 500; }
      h3:first-child { margin-top: 0; }
      .ports { display: flex; flex-direction: column; gap: 8px; }
      .port-row { border: 1px solid var(--divider-color); border-radius: 8px; padding: 8px; }
      .port-row-main { display: flex; align-items: center; gap: 4px; }
      .port-row-main ha-entity-picker { flex: 1; }
      .port-row-fields { display: flex; gap: 8px; margin-top: 4px; }
      .port-row-fields ha-textfield { flex: 1; }
      .move-icon { --mdc-icon-button-size: 36px; }
      .remove-icon { --mdc-icon-button-size: 36px; color: var(--error-color); }
      .add-port { display: block; margin-top: 8px; }
    `;
  }
}

if (!customElements.get(EDITOR_NAME)) {
  customElements.define(EDITOR_NAME, PulseSwitchCardEditor);
}
