/**
 * @module activity-led
 * @description Per-port activity LED animation controller for Pulse Switch Card.
 * Implements two modes:
 * - Realistic: pulse-stretch model driven by packets per second (PPS)
 * - Scaled: blink frequency driven by port utilization percentage
 *
 * Based on real Ethernet PHY hardware behaviour (TI DP83867) and the
 * Linux kernel ledtrig-netdev driver (50ms default interval).
 */

import { LED_PULSE_MS } from './constants.js';

/**
 * Per-port activity LED animation controller.
 */
export class ActivityLed {
  /**
   * Initialize the ActivityLed.
   * @param {HTMLElement} element - The LED DOM element (opacity toggled).
   */
  constructor(element) {
    /** @type {HTMLElement} */
    this._el = element;
    /** @type {ReturnType<typeof setTimeout>|null} */
    this._timer = null;
    /** @type {boolean} */
    this._on = false;
    /** @type {number} Current blink on-time in ms (rounded). */
    this._currentOnMs = 0;
    /** @type {number} Current blink off-time in ms (rounded). */
    this._currentOffMs = 0;
  }

  /**
   * Update LED based on packets per second (default / realistic mode).
   * Uses pulse-stretch model matching real PHY hardware.
   * @param {number} pps - Packets per second (real or estimated).
   */
  update(pps) {
    if (pps <= 0) {
      this._stopBlink();
      this._setOff();
      return;
    }

    const dutyCycle = 1 - Math.pow(1 - LED_PULSE_MS / 1000, pps);

    if (dutyCycle >= 0.95) {
      this._stopBlink();
      this._setOn();
      return;
    }

    const cycleMs = LED_PULSE_MS / dutyCycle;
    const offMs = cycleMs - LED_PULSE_MS;
    this._ensureBlink(LED_PULSE_MS, offMs);
  }

  /**
   * Update LED for scaled mode (utilization-driven).
   * Blink frequency maps linearly from 1Hz (0%) to 10Hz (80%).
   * ≥80% utilization = solid on. 0% = off.
   * @param {number} utilization - 0 to 1.
   */
  updateScaled(utilization) {
    if (utilization <= 0) {
      this._stopBlink();
      this._setOff();
      return;
    }
    if (utilization >= 0.8) {
      this._stopBlink();
      this._setOn();
      return;
    }
    // Map utilization to blink frequency (1-10 Hz)
    const hz = 1 + utilization * 11.25; // 0% → 1Hz, 80% → 10Hz
    const cycleMs = 1000 / hz;
    const onMs = Math.min(LED_PULSE_MS, cycleMs / 2);
    const offMs = cycleMs - onMs;
    this._ensureBlink(onMs, offMs);
  }

  /**
   * Start or update blink timing. Only restarts if timing changed
   * to avoid unnecessary timer churn on every hass update.
   * Adds ±20% jitter per cycle to simulate natural packet arrival variance.
   * @param {number} onMs
   * @param {number} offMs
   */
  _ensureBlink(onMs, offMs) {
    const roundedOn = Math.round(onMs);
    const roundedOff = Math.round(offMs);
    if (this._timer && this._currentOnMs === roundedOn && this._currentOffMs === roundedOff) {
      return; // timing unchanged, keep current blink cycle
    }
    this._currentOnMs = roundedOn;
    this._currentOffMs = roundedOff;
    this._stopBlink();
    const tick = () => {
      // ±20% jitter on each cycle to simulate natural packet timing variance
      const jitterOn = roundedOn * (0.8 + Math.random() * 0.4);
      const jitterOff = roundedOff * (0.8 + Math.random() * 0.4);
      this._setOn();
      this._timer = setTimeout(() => {
        this._setOff();
        this._timer = setTimeout(tick, jitterOff);
      }, jitterOn);
    };
    tick();
  }

  /** Stop any active blink cycle. */
  _stopBlink() {
    if (this._timer) {
      clearTimeout(this._timer);
      this._timer = null;
    }
    this._currentOnMs = 0;
    this._currentOffMs = 0;
  }

  /** Turn LED on (set opacity to 1). */
  _setOn() {
    if (!this._on) {
      this._el.style.opacity = '1';
      this._on = true;
    }
  }

  /** Turn LED off (set opacity to 0). */
  _setOff() {
    this._el.style.opacity = '0';
    this._on = false;
  }

  /** Pause LED — stop timers but preserve state for resume. */
  pause() {
    this._stopBlink();
  }

  /** Clean up all timers and turn LED off. */
  destroy() {
    this._stopBlink();
    this._setOff();
  }
}
