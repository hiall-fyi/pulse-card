/**
 * @module pulse-switch-card
 * @description Main PulseSwitchCard custom element — renders a network switch
 * front panel with per-port LED indicators and traffic visualization.
 */

import { STYLES } from './styles.js';
import { VERSION, CARD_NAME, EDITOR_NAME, DEFAULTS, DEFAULT_LINK_SPEED } from './constants.js';
import { ActivityLed } from './activity-led.js';
import {
  buildSpeedText,
  computeRealPps,
  deriveTxEntityId,
  escapeHtml,
  estimatePps,
  resolveLabel,
  resolvePortType,
  resolveVirtualIcon,
  sanitizeCssValue,
  warn,
} from './utils.js';
import { executeAction as sharedExecuteAction, HOLD_THRESHOLD } from '../shared/action-handler.js';
import { attachRipple } from '../shared/ripple.js';

/** @typedef {import('./types.js').PulseSwitchConfig} PulseSwitchConfig */
/** @typedef {import('./types.js').PortConfig} PortConfig */
/** @typedef {import('./types.js').PortState} PortState */
/** @typedef {import('./types.js').Hass} Hass */

/**
 * PulseSwitchCard — network switch front panel card for Home Assistant.
 * @extends HTMLElement
 */
class PulseSwitchCard extends HTMLElement {
  /** @type {PulseSwitchConfig|null} */
  _config = null;

  /** @type {Hass|null} */
  _hass = null;

  /** @type {Record<string, {state: string, last_updated: string, txState?: string, attrs?: Record<string,*>}>} */
  _prevStates = {};

  /** @type {Record<string, {tile: HTMLElement, linkLed: HTMLElement, actLed: HTMLElement, label: HTMLElement, speed: HTMLElement|null, pins: HTMLElement[]}>} */
  _portElements = {};

  /** @type {Record<string, ActivityLed>} */
  _activityLeds = {};

  /** @type {Record<string, {rx: number, tx: number, timestamp: number}>} */
  _prevPackets = {};

  /** @type {IntersectionObserver|null} */
  _visibilityObserver = null;

  /** @type {boolean} */
  _visible = true;

  /** @type {ShadowRoot} */
  _shadow;

  constructor() {
    super();
    this._shadow = this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.textContent = STYLES;
    this._shadow.appendChild(style);
  }

  /**
   * Validate and store config. Throws on invalid.
   * @param {Record<string, *>} config
   */
  setConfig(config) {
    if (!config || !config.ports || !Array.isArray(config.ports) || config.ports.length === 0) {
      throw new Error('Please define at least one port in the "ports" array');
    }
    for (let i = 0; i < config.ports.length; i++) {
      if (!config.ports[i]?.entity) {
        throw new Error(`Port ${i + 1} is missing required "entity" field`);
      }
    }

    // Destroy old ActivityLeds before replacing config
    this._destroyAllLeds();

    /** @type {PulseSwitchConfig} */
    this._config = {
      ...DEFAULTS,
      ...config,
      ports: config.ports,
    };

    this._prevStates = {};
    this._portElements = {};
    this._prevPackets = {};

    if (this._hass) {
      this._fullRender();
    }
  }

  /**
   * Called by HA on every state change. Differential update.
   * @param {Hass} hass
   */
  set hass(hass) {
    this._hass = hass;
    if (!this._config) return;

    // Check if any port's entities changed
    let needsRender = false;
    for (const port of this._config.ports) {
      const rxState = hass.states[port.entity];
      const txEntityId = deriveTxEntityId(port.entity);
      const txState = hass.states[txEntityId];
      const prev = this._prevStates[port.entity];

      if (!prev ||
          prev.state !== rxState?.state ||
          prev.last_updated !== rxState?.last_updated ||
          prev.txState !== txState?.state) {
        needsRender = true;
        break;
      }
    }

    if (needsRender) {
      if (Object.keys(this._portElements).length === 0) {
        this._fullRender();
      } else {
        this._updateAllPorts();
      }
      this._cacheStates();
    }
  }

  /** Build complete DOM. */
  _fullRender() {
    const cfg = /** @type {PulseSwitchConfig} */ (this._config);
    const columns = cfg.columns ?? DEFAULTS.columns;
    const narrowColumns = Math.min(columns, 2);
    const compactClass = cfg.layout === 'compact' ? ' compact' : '';
    const entityRowClass = cfg.entity_row ? ' entity-row' : '';

    let html = '';
    if (cfg.title) {
      html += `<div class="panel-title">${escapeHtml(cfg.title)}</div>`;
    }
    html += `<div class="port-grid${compactClass}${entityRowClass}" style="--panel-columns:${sanitizeCssValue(columns)};--panel-columns-narrow:${sanitizeCssValue(narrowColumns)}">`;
    for (let i = 0; i < cfg.ports.length; i++) {
      html += this._renderPortTile(cfg.ports[i], i);
    }
    html += '</div>';

    const fullHtml = cfg.entity_row ? html : `<ha-card>${html}</ha-card>`;

    // Remove old content (keep <style>)
    for (const child of [...this._shadow.children]) {
      if (child.tagName !== 'STYLE') child.remove();
    }

    const tpl = document.createElement('template');
    tpl.innerHTML = fullHtml;
    this._shadow.appendChild(tpl.content.cloneNode(true));

    // Cache DOM refs and create ActivityLed instances
    this._destroyAllLeds();
    this._portElements = {};
    const tiles = this._shadow.querySelectorAll('.port-tile');
    for (const tile of tiles) {
      const entityId = /** @type {HTMLElement} */ (tile).dataset.entity;
      if (!entityId) continue;

      const linkLed = /** @type {HTMLElement} */ (tile.querySelector('.port-led.link'));
      const actLedEl = /** @type {HTMLElement} */ (tile.querySelector('.port-led.activity'));
      const label = /** @type {HTMLElement} */ (tile.querySelector('.port-label'));
      const speed = /** @type {HTMLElement|null} */ (tile.querySelector('.port-speed'));
      const pins = /** @type {HTMLElement[]} */ ([...tile.querySelectorAll('.port-pin')]);

      this._portElements[entityId] = {
        tile: /** @type {HTMLElement} */ (tile),
        linkLed,
        actLed: actLedEl,
        label,
        speed,
        pins,
      };

      // Create ActivityLed instance
      if (actLedEl) {
        this._activityLeds[entityId] = new ActivityLed(actLedEl);
      }

      // Bind action listeners
      this._bindActions(/** @type {HTMLElement} */ (tile), entityId);
      attachRipple(/** @type {HTMLElement} */ (tile));
    }

    // Initial update
    this._updateAllPorts();
    this._cacheStates();
  }

  /**
   * Render HTML for one port tile.
   * @param {PortConfig} port
   * @param {number} index
   * @returns {string}
   */
  _renderPortTile(port, index) {
    const cfg = /** @type {PulseSwitchConfig} */ (this._config);
    const portType = resolvePortType(port);
    const entityState = this._hass?.states[port.entity];
    const labelText = resolveLabel(port, entityState);
    const showSpeed = cfg.show_speed === true;

    let bodyContent;

    if (portType === 'rj45') {
      // RJ45: socket with 8 gold pins + bottom tab
      const pinsHtml = Array.from({ length: 8 }, () => '<div class="port-pin"></div>').join('');
      bodyContent = `
        <div class="port-socket"><div class="port-pins">${pinsHtml}</div></div>
        <div class="port-tab"></div>`;
    } else if (portType === 'sfp') {
      // SFP: cage slot with edge line
      bodyContent = `
        <div class="port-cage"><div class="port-cage-edge"></div></div>`;
    } else {
      // Virtual: center icon
      const icon = resolveVirtualIcon(port);
      bodyContent = `
        <div class="port-virtual-icon"><ha-icon icon="${escapeHtml(icon)}"></ha-icon></div>`;
    }

    const ariaLabel = `${escapeHtml(labelText)}: loading`;

    return `
      <div class="port-tile" data-entity="${escapeHtml(port.entity)}" data-index="${index}"
           tabindex="0" role="status" aria-label="${ariaLabel}">
        <div class="port-body ${portType}">
          <div class="port-led link disconnected"></div>
          <div class="port-led activity idle"></div>
          ${bodyContent}
        </div>
        <div class="port-label">${escapeHtml(labelText)}</div>
        ${showSpeed ? '<div class="port-speed"></div>' : ''}
      </div>`;
  }

  /** Update all ports from current hass state. */
  _updateAllPorts() {
    if (!this._config || !this._hass || !this._visible) return;
    for (const port of this._config.ports) {
      this._updatePort(port);
    }
  }

  /**
   * Update a single port's DOM from current hass state.
   * @param {PortConfig} port
   */
  _updatePort(port) {
    const els = this._portElements[port.entity];
    if (!els) return;

    const ps = this._resolvePortState(port);

    // Update tile state class
    els.tile.className = `port-tile ${ps.linkState}`;

    // Update port body class
    const body = els.tile.querySelector('.port-body');
    if (body) {
      body.className = `port-body ${ps.portType} ${ps.linkState}`;
    }

    // Update link LED
    els.linkLed.className = `port-led link ${ps.linkState}`;

    // Update activity LED class (active/idle base state)
    const actClass = ps.totalSpeed > 0 ? 'active' : 'idle';
    els.actLed.className = `port-led activity ${actClass}`;

    // Update ActivityLed animation
    const led = this._activityLeds[port.entity];
    if (led) {
      const cfg = /** @type {PulseSwitchConfig} */ (this._config);
      if (ps.totalSpeed <= 0 || ps.linkState !== 'connected') {
        led.update(0);
      } else if (cfg.led_mode === 'scaled') {
        led.updateScaled(ps.utilization);
      } else {
        // Default (realistic): PPS-driven pulse-stretch
        led.update(ps.pps);
      }
    }

    // Update pin colors (RJ45 only)
    const pinClass = ps.linkState === 'connected' ? 'port-pin' : 'port-pin off';
    for (const pin of els.pins) {
      pin.className = pinClass;
    }

    // Update speed text
    if (els.speed) {
      els.speed.textContent = ps.speedText;
    }

    // Update ARIA
    const speedInfo = ps.totalSpeed > 0 ? `, ${ps.speedText}` : '';
    els.tile.setAttribute('aria-label', `${ps.label}: ${ps.linkState}${speedInfo}`);
  }

  /**
   * Resolve complete port state from hass.
   * @param {PortConfig} port
   * @returns {PortState}
   */
  _resolvePortState(port) {
    const cfg = /** @type {PulseSwitchConfig} */ (this._config);
    const hass = /** @type {Hass} */ (this._hass);
    const rxState = hass.states[port.entity];
    const txEntityId = deriveTxEntityId(port.entity);
    const txState = hass.states[txEntityId];

    // Link state
    /** @type {'connected'|'disconnected'|'disabled'|'unavailable'} */
    let linkState = 'connected';
    if (!rxState || rxState.state === 'unavailable' || rxState.state === 'unknown') {
      linkState = 'unavailable';
    } else {
      const disabled = rxState.attributes?.disabled;
      const running = rxState.attributes?.running;
      if (disabled === true || disabled === 'true') {
        linkState = 'disabled';
      } else if (running === false || running === 'false') {
        linkState = 'disconnected';
      }
    }

    // Speeds
    const rxSpeed = linkState === 'unavailable' ? 0 : (parseFloat(rxState?.state) || 0);
    const txSpeed = linkState === 'unavailable' ? 0 : (parseFloat(txState?.state) || 0);
    const totalSpeed = rxSpeed + txSpeed;

    // Port type and icon
    const portType = resolvePortType(port);
    const virtualIcon = portType === 'virtual' ? resolveVirtualIcon(port) : '';

    // Label
    const label = resolveLabel(port, rxState);

    // Speed text
    const speedFormat = cfg.speed_format ?? DEFAULTS.speed_format;
    const speedText = totalSpeed > 0 ? buildSpeedText(rxSpeed, txSpeed, speedFormat) : '';

    // PPS (for realistic mode)
    const pps = this._computePps(port, totalSpeed);

    // Utilization (for scaled mode)
    const linkSpeed = port.link_speed ?? DEFAULT_LINK_SPEED;
    const utilization = linkSpeed > 0 ? Math.min(totalSpeed / linkSpeed, 1) : 0;

    return {
      entityId: port.entity,
      linkState,
      portType,
      virtualIcon,
      rxSpeed,
      txSpeed,
      totalSpeed,
      label,
      speedText,
      pps,
      utilization,
    };
  }

  /**
   * Compute PPS for a port. Priority: real packet delta → bandwidth estimation.
   * @param {PortConfig} port
   * @param {number} totalSpeed - Total bandwidth in Mbit/s.
   * @returns {number}
   */
  _computePps(port, totalSpeed) {
    const cfg = /** @type {PulseSwitchConfig} */ (this._config);
    const hass = /** @type {Hass} */ (this._hass);

    // Priority 1: real packet count delta
    if (port.rx_packets || port.tx_packets) {
      const rxPktEntity = port.rx_packets ? hass.states[port.rx_packets] : null;
      const txPktEntity = port.tx_packets ? hass.states[port.tx_packets] : null;

      const rxPkts = rxPktEntity && rxPktEntity.state !== 'unavailable' ? parseFloat(rxPktEntity.state) : NaN;
      const txPkts = txPktEntity && txPktEntity.state !== 'unavailable' ? parseFloat(txPktEntity.state) : NaN;

      if (!isNaN(rxPkts) || !isNaN(txPkts)) {
        const totalPkts = (isNaN(rxPkts) ? 0 : rxPkts) + (isNaN(txPkts) ? 0 : txPkts);
        const prev = this._prevPackets[port.entity];
        const now = Date.now() / 1000;

        if (prev) {
          const interval = now - prev.timestamp;
          const prevTotal = prev.rx + prev.tx;
          const pps = computeRealPps(totalPkts, prevTotal, interval);
          this._prevPackets[port.entity] = { rx: isNaN(rxPkts) ? 0 : rxPkts, tx: isNaN(txPkts) ? 0 : txPkts, timestamp: now };
          return pps;
        }

        // First sample — store and fall through to estimation
        this._prevPackets[port.entity] = { rx: isNaN(rxPkts) ? 0 : rxPkts, tx: isNaN(txPkts) ? 0 : txPkts, timestamp: now };
      }
    }

    // Priority 2: bandwidth estimation
    const avgPktSize = cfg.avg_packet_size ?? DEFAULTS.avg_packet_size;
    return estimatePps(totalSpeed, avgPktSize);
  }

  /**
   * Bind tap/hold action listeners to a port tile.
   * @param {HTMLElement} tile
   * @param {string} entityId
   */
  _bindActions(tile, entityId) {
    const cfg = /** @type {PulseSwitchConfig} */ (this._config);
    const port = cfg.ports.find((p) => p.entity === entityId);
    if (!port) return;

    // Clean up previous listeners
    const prevCleanup = /** @type {*} */ (tile).__pulseCleanup;
    if (typeof prevCleanup === 'function') prevCleanup();

    const controller = new AbortController();
    const { signal } = controller;
    /** @type {ReturnType<typeof setTimeout>|null} */
    let holdTimer = null;
    let held = false;

    /** @type {*} */ (tile).__pulseCleanup = () => {
      controller.abort();
      if (holdTimer) clearTimeout(holdTimer);
      delete /** @type {*} */ (tile).__pulseCleanup;
    };

    const resolveAction = (/** @type {string} */ type) => {
      if (type === 'tap_action') {
        return port.tap_action ?? cfg.tap_action ?? DEFAULTS.tap_action;
      }
      return port.hold_action ?? cfg.hold_action ?? DEFAULTS.hold_action;
    };

    const doAction = (/** @type {string} */ type) => {
      if (!this._hass) return;
      const action = resolveAction(type);
      sharedExecuteAction(tile, this._hass, action, entityId, warn);
    };

    // Tap
    tile.addEventListener('click', (ev) => {
      ev.preventDefault();
      if (held) { held = false; return; }
      doAction('tap_action');
    }, { signal });

    // Hold
    tile.addEventListener('pointerdown', () => {
      held = false;
      holdTimer = setTimeout(() => {
        held = true;
        doAction('hold_action');
      }, HOLD_THRESHOLD);
    }, { signal });

    const cancelHold = () => { if (holdTimer) clearTimeout(holdTimer); };
    tile.addEventListener('pointerup', cancelHold, { signal });
    tile.addEventListener('pointercancel', cancelHold, { signal });
    tile.addEventListener('contextmenu', (ev) => ev.preventDefault(), { signal });

    // Keyboard
    tile.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        doAction('tap_action');
      }
    }, { signal });
  }

  /** Cache entity states for change detection. */
  _cacheStates() {
    if (!this._config || !this._hass) return;
    this._prevStates = {};
    for (const port of this._config.ports) {
      const rxState = this._hass.states[port.entity];
      const txEntityId = deriveTxEntityId(port.entity);
      const txState = this._hass.states[txEntityId];
      if (rxState) {
        this._prevStates[port.entity] = {
          state: rxState.state,
          last_updated: rxState.last_updated,
          txState: txState?.state,
        };
      }
    }
  }

  /** Pause all ActivityLed timers. */
  _pauseAllLeds() {
    for (const led of Object.values(this._activityLeds)) {
      led.pause();
    }
  }

  /** Resume all ActivityLed timers with current data. */
  _resumeAllLeds() {
    if (!this._config || !this._hass) return;
    for (const port of this._config.ports) {
      this._updatePort(port);
    }
  }

  /** Destroy all ActivityLed instances. */
  _destroyAllLeds() {
    for (const led of Object.values(this._activityLeds)) {
      led.destroy();
    }
    this._activityLeds = {};
  }

  /** Set up IntersectionObserver for visibility-aware LED pausing. */
  connectedCallback() {
    // Re-render if we have config+hass but no port elements (card was disconnected and reconnected)
    if (this._config && this._hass && Object.keys(this._portElements).length === 0) {
      this._fullRender();
      this._cacheStates();
    }

    if (typeof IntersectionObserver === 'undefined') return;
    this._visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        const wasVisible = this._visible;
        this._visible = entry.isIntersecting;
        if (!wasVisible && this._visible) {
          this._resumeAllLeds();
        } else if (wasVisible && !this._visible) {
          this._pauseAllLeds();
        }
      },
      { threshold: 0 },
    );
    this._visibilityObserver.observe(this);
  }

  /** Clean up timers, observers, and action listeners. */
  disconnectedCallback() {
    this._destroyAllLeds();
    // Clean up action listeners
    for (const key of Object.keys(this._portElements)) {
      const el = this._portElements[key]?.tile;
      const cleanup = /** @type {*} */ (el)?.__pulseCleanup;
      if (typeof cleanup === 'function') cleanup();
    }
    this._portElements = {};
    if (this._visibilityObserver) {
      this._visibilityObserver.disconnect();
      this._visibilityObserver = null;
    }
  }

  /**
   * Return card height for masonry view.
   * @returns {number}
   */
  getCardSize() {
    const portCount = this._config?.ports?.length || 1;
    const columns = this._config?.columns || DEFAULTS.columns;
    return Math.ceil(portCount / columns) + (this._config?.title ? 1 : 0);
  }

  /**
   * Return grid sizing for sections view.
   * @returns {object}
   */
  getGridOptions() {
    const portCount = this._config?.ports?.length || 1;
    const columns = this._config?.columns || DEFAULTS.columns;
    const rows = Math.ceil(portCount / columns);
    return { columns: 12, min_columns: 3, rows: Math.max(1, rows), min_rows: 1 };
  }

  /**
   * Lazy-load editor.
   * @returns {Promise<HTMLElement>}
   */
  static async getConfigElement() {
    await import('./editor.js');
    return document.createElement(EDITOR_NAME);
  }

  /**
   * Return stub config for card picker.
   * @param {Hass} hass
   * @returns {object}
   */
  static getStubConfig(hass) {
    const rxEntities = Object.keys(hass.states).filter((eid) =>
      eid.startsWith('sensor.') && eid.endsWith('_rx_speed'),
    );
    const ports = rxEntities.slice(0, 4).map((entity) => ({ entity }));
    if (ports.length === 0) {
      ports.push({ entity: 'sensor.example_rx_speed' });
    }
    return { type: `custom:${CARD_NAME}`, ports };
  }
}

// Register custom element
if (!customElements.get(CARD_NAME)) {
  customElements.define(CARD_NAME, PulseSwitchCard);
  console.info(`%c ${CARD_NAME.toUpperCase()} %c v${VERSION} `, 'background:#FFB300;color:#000;font-weight:bold', 'background:#333;color:#fff');
}

// Register with HA card picker
/** @type {*} */ (window).customCards = /** @type {*} */ (window).customCards || [];
/** @type {*} */ (window).customCards.push({
  type: CARD_NAME,
  name: 'Pulse Switch Card',
  description: 'Network switch front panel with LED indicators',
  preview: true,
});
