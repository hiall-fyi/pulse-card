/**
 * @module pulse-weather/sections/forecast
 * @description 7-day forecast list with week-wide range bar normalisation.
 */

import { conditionIcon, escapeHtml, finiteNumber, sanitizeCssValue } from '../weather-primitives.js';
import { brandMarkVariant } from '../brand-mark.js';
import { renderSectionShell } from '../section-shell.js';

/**
 * 1-line narrative for Forecast top-marg.
 * Highlights the warmest day and any wet day in the week.
 * @param {Array<{temperature?: unknown, templow?: unknown, precipitation_probability?: unknown, datetime?: unknown, condition?: unknown}>} days - daily forecast entries
 * @returns {string}
 */
function composeForecastLine(days) {
  if (!days || days.length === 0) return 'Forecast unavailable';
  let peakIdx = 0;
  for (let i = 1; i < days.length; i++) {
    if (Number(days[i].temperature) > Number(days[peakIdx].temperature)) peakIdx = i;
  }
  const wetIdx = days.findIndex((d) => Number(d.precipitation_probability) >= 50);
  /**
   * @param {number} i - day index
   * @returns {string}
   */
  const dayLabel = (i) => i === 0 ? 'today' : new Date(String(days[i].datetime || '')).toLocaleDateString([], { weekday: 'short' }).toLowerCase();
  const peakLabel = dayLabel(peakIdx);
  const peakTemp = Math.round(Number(days[peakIdx].temperature));
  if (wetIdx >= 0 && wetIdx !== peakIdx) {
    return `Warmest ${peakLabel} (${peakTemp}°) · rain ${dayLabel(wetIdx)}`;
  }
  if (wetIdx >= 0) {
    return `Wet stretch · warmest ${peakLabel} (${peakTemp}°)`;
  }
  return `Warmest ${peakLabel} (${peakTemp}°) · dry through the week`;
}

/**
 * Render the forecast section.
 * @param {import('../types.js').RenderContext} ctx - Render context.
 * @returns {string|null} HTML string or null if no data.
 */
export function renderForecast({ hass, config, discovery, forecastData, weatherEntity }) {
  const daily = forecastData?.daily || [];
  if (daily.length === 0) return null;

  const ce = discovery.atmosCe;
  const tempSensor = ce.temperature ? hass.states[ce.temperature] : null;
  const tempUnit = /** @type {string} */ (tempSensor?.attributes?.unit_of_measurement || '°C');

  const days = daily.slice(0, 7);

  /* Range bars normalise against the week-wide min/max so taller days render
     longer bars; weekSpan floor of 1 prevents division-by-zero on flat weeks. */
  const allTemps = days.flatMap((d) => [finiteNumber(d.temperature, 0), finiteNumber(d.templow, 0)]);
  const weekMin = Math.min(...allTemps);
  const weekMax = Math.max(...allTemps);
  const weekSpan = Math.max(weekMax - weekMin, 1);

  const currentTemp = Number(weatherEntity?.attributes?.temperature);

  const rows = days.map((d, i) => {
    const high = finiteNumber(d.temperature, 0);
    const low = finiteNumber(d.templow, 0);
    const pop = Math.round(Number(d.precipitation_probability) || 0);
    const isToday = i === 0;
    const dayLabel = isToday
      ? 'today'
      : new Date(String(d.datetime || '')).toLocaleDateString([], { weekday: 'short' }).toLowerCase();
    const icon = conditionIcon(String(d.condition || ''));
    const popHtml = pop >= 50 ? `<span class="pw-fc-pop">${escapeHtml(String(pop))}%</span>` : '<span class="pw-fc-pop"></span>';
    const barLeft = ((low - weekMin) / weekSpan) * 100;
    const barWidth = ((high - low) / weekSpan) * 100;
    const nowDot = isToday && Number.isFinite(currentTemp)
      ? `<span class="pw-fc-now" style="left:${sanitizeCssValue((((currentTemp - weekMin) / weekSpan) * 100).toFixed(2) + '%')}"></span>`
      : '';
    return `
      <div class="pw-fc-row${isToday ? ' is-today' : ''}">
        <span class="pw-fc-day">${escapeHtml(dayLabel)}</span>
        <span class="pw-fc-icon" aria-hidden="true">${icon}</span>
        ${popHtml}
        <span class="pw-fc-bar" aria-label="High ${Math.round(high)}${escapeHtml(tempUnit)}, low ${Math.round(low)}${escapeHtml(tempUnit)}">
          <span class="pw-fc-bar-fill" style="left:${sanitizeCssValue(barLeft.toFixed(2) + '%')};width:${sanitizeCssValue(barWidth.toFixed(2) + '%')}"></span>
          ${nowDot}
        </span>
        <span class="pw-fc-range">
          <span class="pw-fc-lo">${escapeHtml(String(Math.round(low)))}°</span>
          <span class="pw-fc-hi">${escapeHtml(String(Math.round(high)))}°</span>
        </span>
      </div>`;
  }).join('');

  const condition = weatherEntity?.state || 'sunny';
  const isNight = condition === 'clear-night';
  const variant = brandMarkVariant(condition, isNight);
  const narrativeLine = composeForecastLine(days);

  const body = `
        <div class="pw-fc-list" role="list">
          ${rows}
        </div>`;

  return renderSectionShell({
    sectionClass: 'pw-forecast-v2',
    ariaLabel: 'Seven-day forecast',
    brandVariant: variant,
    kicker: 'the week ahead',
    narrative: narrativeLine,
    body,
    pro: config?.pro !== false,
  });
}
