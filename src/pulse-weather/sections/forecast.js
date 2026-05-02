/**
 * @module pulse-weather/sections/forecast
 * @description Hourly strip, daily rows, temperature sparkline, and mode tabs.
 */

import { tempToColor, conditionIcon, escapeHtml, sanitizeCssValue } from '../weather-primitives.js';
import { intensityRatio, tensionGlow } from '../../shared/visual-tension.js';

/**
 * Format hour from ISO datetime string.
 * @param {string} dt - ISO datetime string.
 * @param {boolean} isNow - Whether this is the current hour.
 * @returns {string} Formatted time label.
 */
function formatHour(dt, isNow) {
  if (isNow) return 'Now';
  try {
    const d = new Date(dt);
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  } catch {  
    return '';
  }
}

/**
 * Format day name from ISO date string.
 * @param {string} dt - ISO date string.
 * @param {number} index - Row index (0 = today).
 * @returns {string} Day label.
 */
function formatDay(dt, index) {
  if (index === 0) return 'Today';
  try {
    return new Date(dt).toLocaleDateString([], { weekday: 'short' });
  } catch {  
    return '';
  }
}

/**
 * Build SVG sparkline path from hourly temperature data.
 * @param {Array<{temperature: number}>} data - Hourly forecast data.
 * @param {number} width - SVG width.
 * @param {number} height - SVG height.
 * @returns {{linePath: string, areaPath: string, min: number, max: number}}
 */
function buildSparkline(data, width, height) {
  if (!data || data.length < 2) return { linePath: '', areaPath: '', min: 0, max: 0 };
  const temps = data.map((d) => Number(d.temperature) || 0);
  const min = Math.min(...temps);
  const max = Math.max(...temps);
  const range = max - min || 1;
  const pad = 4;

  const points = temps.map((t, i) => {
    const x = (i / (temps.length - 1)) * width;
    const y = pad + ((max - t) / range) * (height - pad * 2);
    return { x, y };
  });

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
  const areaPath = `${linePath} L${width},${height} L0,${height} Z`;

  return { linePath, areaPath, min, max };
}

/**
 * Render the forecast section.
 * @param {import('../types.js').RenderContext} ctx - Render context.
 * @returns {string|null} HTML string or null if no data.
 */
export function renderForecast({ hass, config, discovery, forecastData }) {
  const mode = config.mode || 'both';
  const hourly = forecastData?.hourly || [];
  const daily = forecastData?.daily || [];

  if (hourly.length === 0 && daily.length === 0) return null;

  // Temperature unit from Atmos CE sensor
  const ce = discovery.atmosCe;
  const tempSensor = ce.temperature ? hass.states[ce.temperature] : null;
  const tempUnit = /** @type {string} */ (tempSensor?.attributes?.unit_of_measurement || '°C');

  const showHourly = mode === 'both' || mode === 'hourly';
  const showDaily = mode === 'both' || mode === 'daily';

  // Mode tabs
  const tabs = ['both', 'hourly', 'daily'].map((m) =>
    `<button class="pw-tab" role="tab" aria-selected="${m === mode}" tabindex="${m === mode ? '0' : '-1'}" data-mode="${escapeHtml(m)}">${escapeHtml(m.charAt(0).toUpperCase() + m.slice(1))}</button>`,
  ).join('');

  // Hourly strip
  let hourlyHtml = '';
  if (showHourly && hourly.length > 0) {
    // Filter to current hour and future only
    const nowMs = Date.now();
    const futureHourly = hourly.filter((h) => {
      const dt = new Date(String(h.datetime || ''));
      return !isNaN(dt.getTime()) && dt.getTime() >= nowMs - 3600000; // include current hour
    });

    const cols = futureHourly.slice(0, 24).map((h, i) => {
      const temp = Number(h.temperature) || 0;
      const precip = Number(h.precipitation_probability) || 0;
      const precipI = intensityRatio(precip, 0, 100);
      const precipBg = precipI > 0.1 ? ` style="background: rgba(90,200,250,${(precipI * 0.12).toFixed(3)})"` : '';
      return `
        <div class="pw-hour-col ${i === 0 ? 'pw-current' : ''}"${precipBg}>
          <div class="pw-hour-time">${escapeHtml(formatHour(String(h.datetime || ''), i === 0))}</div>
          <div class="pw-hour-icon">${conditionIcon(String(h.condition || ''))}</div>
          <div class="pw-hour-temp" style="color: ${sanitizeCssValue(tempToColor(temp))}">${escapeHtml(Math.round(temp))}${escapeHtml(tempUnit)}</div>
          ${precip > 0 ? `<div class="pw-hour-precip">${escapeHtml(Math.round(precip))}%</div>` : ''}
        </div>`;
    }).join('');

    // Sparkline
    const sparkW = 300;
    const sparkH = 40;
    const spark = buildSparkline(/** @type {Array<{temperature: number}>} */ (futureHourly.slice(0, 24)), sparkW, sparkH);
    const sparkSvg = spark.linePath ? `
      <div class="pw-sparkline-wrap">
        <svg width="100%" height="${sparkH}" viewBox="0 0 ${sparkW} ${sparkH}" preserveAspectRatio="none" role="img" aria-label="Temperature trend">
          <title>Temperature sparkline</title>
          <defs>
            <linearGradient id="pw-spark-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="${sanitizeCssValue(tempToColor(spark.max))}" stop-opacity="0.3"/>
              <stop offset="100%" stop-color="${sanitizeCssValue(tempToColor(spark.min))}" stop-opacity="0.05"/>
            </linearGradient>
          </defs>
          <path d="${escapeHtml(spark.areaPath)}" fill="url(#pw-spark-grad)"/>
          <path d="${escapeHtml(spark.linePath)}" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>
        </svg>
      </div>` : '';

    hourlyHtml = `
      <div class="pw-hourly-strip">${cols}</div>
      ${sparkSvg}`;
  }

  // Daily rows
  let dailyHtml = '';
  if (showDaily && daily.length > 0) {
    const allTemps = daily.map((d) => [Number(d.temperature) || 0, Number(d.templow) || 0]).flat();
    const globalMin = Math.min(...allTemps);
    const globalMax = Math.max(...allTemps);
    const globalRange = globalMax - globalMin || 1;

    const rows = daily.slice(0, 7).map((d, i) => {
      const high = Number(d.temperature) || 0;
      const low = Number(d.templow) || 0;
      const precip = Number(d.precipitation_probability) || 0;
      const barLeft = ((low - globalMin) / globalRange) * 100;
      const barWidth = ((high - low) / globalRange) * 100;
      const precipI = intensityRatio(precip, 0, 100);
      const rowBg = precipI > 0.1 ? ` style="background: rgba(90,200,250,${(precipI * 0.08).toFixed(3)}); border-radius: 4px"` : '';
      const isHottest = high === globalMax;
      const isColdest = low === globalMin;
      const highGlow = isHottest ? `; text-shadow: ${tensionGlow(sanitizeCssValue(tempToColor(high)), 0.6)}` : '';
      const lowGlow = isColdest ? `; text-shadow: ${tensionGlow(sanitizeCssValue(tempToColor(low)), 0.6)}` : '';

      return `
        <div class="pw-daily-row"${rowBg}>
          <span class="pw-daily-day">${escapeHtml(formatDay(String(d.datetime || ''), i))}</span>
          <span class="pw-daily-icon">${conditionIcon(String(d.condition || ''))}</span>
          <span class="pw-daily-precip">${precip > 0 ? `${escapeHtml(Math.round(precip))}%` : ''}</span>
          <div class="pw-daily-bar-wrap" role="img" aria-label="Temperature range ${Math.round(low)}${escapeHtml(tempUnit)} to ${Math.round(high)}${escapeHtml(tempUnit)}">
            <div class="pw-daily-bar" style="left: ${Number(barLeft)}%; width: ${Number(barWidth)}%; background: linear-gradient(to right, ${sanitizeCssValue(tempToColor(low))}, ${sanitizeCssValue(tempToColor(high))})"></div>
          </div>
          <span class="pw-daily-low" style="color: var(--pulse-text-secondary)${lowGlow}">${escapeHtml(Math.round(low))}${escapeHtml(tempUnit)}</span>
          <span class="pw-daily-high" style="${highGlow ? highGlow.slice(2) : ''}">${escapeHtml(Math.round(high))}${escapeHtml(tempUnit)}</span>
        </div>`;
    }).join('');

    dailyHtml = `<div class="pw-daily-rows">${rows}</div>`;
  }

  return `
    <div class="pw-section pw-forecast" style="background: radial-gradient(ellipse at 50% 20%, rgba(90,200,250,0.06) 0%, transparent 70%)">
      <div class="pw-section-header">
        <span class="pw-section-title">Forecast</span>
        <div class="pw-tabs" role="tablist">${tabs}</div>
      </div>
      ${hourlyHtml}
      ${dailyHtml}
    </div>`;
}
