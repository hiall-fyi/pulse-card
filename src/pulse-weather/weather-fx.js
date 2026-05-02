/**
 * @module pulse-weather/weather-fx
 * @description Atmospheric FX engine — rain, snow, lightning, fog, clouds,
 * stars, heat shimmer, air haze, and condition-based FX dispatch.
 * All functions append DOM elements to a DocumentFragment for atomic swap.
 */

import { MAX_RAIN_DROPS, MAX_SNOWFLAKES, MAX_STARS, MAX_CLOUDS } from './constants.js';

/**
 * Create a DOM element with class, styles, and optional animation properties.
 * @param {string} tag - Element tag name.
 * @param {string} className - CSS class name.
 * @param {Object<string, string>} [styles] - Inline style properties.
 * @returns {HTMLElement} Created element.
 */
function el(tag, className, styles) {
  const e = document.createElement(tag);
  e.className = className;
  if (styles) {
    for (const [k, v] of Object.entries(styles)) {
      e.style.setProperty(k, v);
    }
  }
  return e;
}

/**
 * Random number between min and max.
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function rand(min, max) {
  return Math.random() * (max - min) + min;
}

// ── Rain ────────────────────────────────────────────────────────────

/**
 * Add rain drops to fragment.
 * @param {DocumentFragment} frag - Target fragment.
 * @param {number} [count=60] - Number of drops.
 * @param {number} [speed=1] - Animation speed multiplier.
 * @param {number} [thick=2] - Drop width in px.
 */
export function addRain(frag, count = 60, speed = 1, thick = 2) {
  const n = Math.min(count, MAX_RAIN_DROPS);
  for (let i = 0; i < n; i++) {
    const drop = el('div', 'pw-rain-drop');
    const h = rand(15, 30);
    const dur = rand(0.4, 0.8) / speed;
    Object.assign(drop.style, {
      left: `${rand(0, 100)}%`,
      top: `${rand(-10, 20)}%`,
      width: `${thick}px`,
      height: `${h}px`,
      borderRadius: `0 0 ${thick}px ${thick}px`,
      background: `linear-gradient(to bottom, transparent, rgba(120,180,255,0.6))`,
      animation: `pw-rainFall ${dur}s linear ${rand(0, 2)}s infinite`,
      animationFillMode: 'backwards',
      position: 'absolute',
    });
    frag.appendChild(drop);
  }
}

// ── Snow ────────────────────────────────────────────────────────────

/**
 * Add snowflakes to fragment.
 * @param {DocumentFragment} frag - Target fragment.
 * @param {number} [count=40] - Number of flakes.
 */
export function addSnow(frag, count = 40) {
  const n = Math.min(count, MAX_SNOWFLAKES);
  for (let i = 0; i < n; i++) {
    const flake = el('div', 'pw-snowflake');
    const size = rand(2, 5);
    Object.assign(flake.style, {
      left: `${rand(0, 100)}%`,
      top: `${rand(-5, 10)}%`,
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.7)',
      animation: `pw-snowFall ${rand(3, 6)}s linear ${rand(0, 4)}s infinite`,
      animationFillMode: 'backwards',
      position: 'absolute',
    });
    frag.appendChild(flake);
  }
}

// ── Fog ─────────────────────────────────────────────────────────────

/**
 * Add fog layers to fragment.
 * @param {DocumentFragment} frag - Target fragment.
 */
export function addFog(frag) {
  for (let i = 0; i < 4; i++) {
    const layer = el('div', 'pw-fog-layer');
    Object.assign(layer.style, {
      position: 'absolute',
      width: '200%',
      height: '40px',
      top: `${30 + i * 20}%`,
      left: '0',
      background: `linear-gradient(to right, transparent 0%, rgba(200,200,200,0.06) 20%, rgba(200,200,200,0.1) 50%, rgba(200,200,200,0.06) 80%, transparent 100%)`,
      animation: `pw-fogDrift ${rand(15, 25)}s linear ${i * 2}s infinite`,
      animationFillMode: 'backwards',
    });
    frag.appendChild(layer);
  }
}

// ── Sun Rays ────────────────────────────────────────────────────────

/**
 * Add sun rays to fragment.
 * @param {DocumentFragment} frag - Target fragment.
 */
export function addRays(frag) {
  for (let i = 0; i < 8; i++) {
    const ray = el('div', 'pw-sun-ray');
    Object.assign(ray.style, {
      position: 'absolute',
      top: '-20px',
      left: `${10 + i * 12}%`,
      width: '2px',
      height: '120px',
      background: 'linear-gradient(to bottom, rgba(255,220,100,0.08), transparent)',
      transformOrigin: 'top center',
      transform: `rotate(${-15 + i * 4}deg)`,
      animation: `pw-rayPulse ${rand(3, 5)}s ease-in-out ${rand(0, 2)}s infinite`,
      animationFillMode: 'backwards',
    });
    frag.appendChild(ray);
  }
}

// ── Clouds ──────────────────────────────────────────────────────────

/**
 * Add drifting clouds to fragment.
 * @param {DocumentFragment} frag - Target fragment.
 * @param {number} [count=4] - Number of clouds.
 * @param {number} [speed=1] - Animation speed multiplier.
 */
export function addClouds(frag, count = 4, speed = 1) {
  const n = Math.min(count, MAX_CLOUDS);
  for (let i = 0; i < n; i++) {
    const cloud = el('div', 'pw-cloud');
    const w = rand(80, 160);
    const h = rand(30, 60);
    const dur = rand(20, 40) / speed;
    Object.assign(cloud.style, {
      position: 'absolute',
      width: `${w}px`,
      height: `${h}px`,
      top: `${rand(5, 50)}%`,
      left: '0',
      borderRadius: '50%',
      background: `radial-gradient(ellipse, rgba(255,255,255,0.05) 0%, transparent 70%)`,
      animation: `pw-cloudDrift ${dur}s linear ${rand(0, 15)}s infinite`,
      animationFillMode: 'backwards',
    });
    frag.appendChild(cloud);
  }
}

// ── Stars ───────────────────────────────────────────────────────────

/**
 * Add twinkling stars to fragment.
 * @param {DocumentFragment} frag - Target fragment.
 */
export function addStars(frag) {
  for (let i = 0; i < MAX_STARS; i++) {
    const star = el('div', 'pw-star');
    const size = rand(1, 3);
    Object.assign(star.style, {
      position: 'absolute',
      left: `${rand(0, 100)}%`,
      top: `${rand(0, 70)}%`,
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: '50%',
      background: '#fff',
      animation: `pw-twinkle ${rand(2, 5)}s ease-in-out ${rand(0, 3)}s infinite`,
      animationFillMode: 'backwards',
    });
    frag.appendChild(star);
  }
}

// ── Lightning Bolts ─────────────────────────────────────────────────

/**
 * Generate a jagged SVG polyline path for a lightning bolt.
 * @param {number} startX - Start X position.
 * @param {number} height - Total bolt height.
 * @returns {string} SVG polyline points string.
 */
function jaggedBoltPath(startX, height) {
  const points = [];
  let x = startX;
  let y = 0;
  const segments = Math.floor(rand(4, 8));
  const segH = height / segments;
  points.push(`${x},${y}`);
  for (let i = 0; i < segments; i++) {
    x += rand(-15, 15);
    y += segH;
    points.push(`${x},${y}`);
  }
  return points.join(' ');
}

/**
 * Add SVG lightning bolts with glow layer + ambient flash.
 * @param {DocumentFragment} frag - Target fragment.
 * @param {number} [boltCount=2] - Number of bolts.
 * @param {Array<number>} [flashDelays] - Animation delay per bolt (seconds).
 */
export function addBolts(frag, boltCount = 2, flashDelays) {
  const delays = flashDelays || Array.from({ length: boltCount }, (_, i) => i * 3);

  // Ambient flash overlay
  const flash = el('div', 'pw-lightning-flash');
  Object.assign(flash.style, {
    position: 'absolute',
    inset: '0',
    background: 'rgba(255,255,255,0.15)',
    animation: `pw-flash 6s ease-in-out ${delays[0] || 0}s infinite`,
    animationFillMode: 'backwards',
    pointerEvents: 'none',
  });
  frag.appendChild(flash);

  for (let i = 0; i < boltCount; i++) {
    const ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('class', 'pw-lightning-bolt');
    svg.setAttribute('width', '60');
    svg.setAttribute('height', '200');
    svg.setAttribute('viewBox', '0 0 60 200');
    svg.style.position = 'absolute';
    svg.style.top = '0';
    svg.style.left = `${rand(15, 75)}%`;
    svg.style.pointerEvents = 'none';
    svg.style.zIndex = '2';
    svg.style.animation = `pw-boltStrike 6s ease-in-out ${delays[i] || 0}s infinite`;
    svg.style.animationFillMode = 'backwards';

    // Glow layer
    const glow = document.createElementNS(ns, 'polyline');
    glow.setAttribute('points', jaggedBoltPath(30, 180));
    glow.setAttribute('fill', 'none');
    glow.setAttribute('stroke', 'rgba(200,220,255,0.4)');
    glow.setAttribute('stroke-width', '6');
    glow.setAttribute('stroke-linecap', 'round');
    glow.setAttribute('stroke-linejoin', 'round');
    svg.appendChild(glow);

    // Main bolt
    const bolt = document.createElementNS(ns, 'polyline');
    bolt.setAttribute('points', jaggedBoltPath(30, 180));
    bolt.setAttribute('fill', 'none');
    bolt.setAttribute('stroke', '#fff');
    bolt.setAttribute('stroke-width', '2');
    bolt.setAttribute('stroke-linecap', 'round');
    bolt.setAttribute('stroke-linejoin', 'round');
    svg.appendChild(bolt);

    frag.appendChild(svg);
  }
}

// ── Heat Shimmer ────────────────────────────────────────────────────

/**
 * Add heat shimmer gradient + bottom ripple for exceptional heat.
 * @param {DocumentFragment} frag - Target fragment.
 */
export function addHeatShimmer(frag) {
  const shimmer = el('div', 'pw-heat-shimmer');
  Object.assign(shimmer.style, {
    position: 'absolute',
    inset: '0',
    pointerEvents: 'none',
    background: 'linear-gradient(0deg, transparent 0%, rgba(255,200,100,0.03) 30%, transparent 50%, rgba(255,180,80,0.02) 70%, transparent 100%)',
    backgroundSize: '100% 200%',
    animation: 'pw-shimmer 3s ease-in-out infinite',
  });
  frag.appendChild(shimmer);

  const ripple = el('div', 'pw-heat-ripple');
  Object.assign(ripple.style, {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    height: '60px',
    pointerEvents: 'none',
    background: 'repeating-linear-gradient(0deg, transparent, rgba(255,200,100,0.02) 2px, transparent 4px)',
    animation: 'pw-rippleWave 2s ease-in-out infinite',
  });
  frag.appendChild(ripple);
}

// ── Air Haze ────────────────────────────────────────────────────────

/**
 * Add PM-driven atmospheric haze (smog overlay, vignette, dust, haze blobs).
 * @param {DocumentFragment} frag - Target fragment.
 * @param {number} pm25 - PM2.5 value (µg/m³).
 * @param {number} pm10 - PM10 value (µg/m³).
 */
export function addAirHaze(frag, pm25, pm10) {
  const severity = Math.min(1, (pm25 / 75 + pm10 / 150) / 2);
  if (severity < 0.05) return;

  // Smog overlay
  const smog = el('div', 'pw-smog-overlay');
  smog.style.background = `rgba(120,110,80,${0.05 + severity * 0.15})`;
  frag.appendChild(smog);

  // Vignette
  const vignette = el('div', 'pw-haze-vignette');
  vignette.style.background = `radial-gradient(ellipse at center, transparent 40%, rgba(80,70,50,${severity * 0.3}) 100%)`;
  frag.appendChild(vignette);

  // Dust particles
  const dustCount = Math.floor(severity * 20);
  for (let i = 0; i < dustCount; i++) {
    const dust = el('div', 'pw-dust-particle');
    const size = rand(1, 3 + severity * 3);
    Object.assign(dust.style, {
      left: `${rand(0, 100)}%`,
      top: `${rand(10, 90)}%`,
      width: `${size}px`,
      height: `${size}px`,
      animationDelay: `${rand(0, 8)}s`,
      animationFillMode: 'backwards',
    });
    frag.appendChild(dust);
  }

  // Haze blobs
  const blobCount = Math.floor(severity * 5);
  for (let i = 0; i < blobCount; i++) {
    const blob = el('div', 'pw-haze-blob');
    const size = rand(60, 120);
    Object.assign(blob.style, {
      left: `${rand(-10, 80)}%`,
      top: `${rand(10, 70)}%`,
      width: `${size}px`,
      height: `${size * 0.6}px`,
      animationDelay: `${rand(0, 12)}s`,
      animationFillMode: 'backwards',
    });
    frag.appendChild(blob);
  }
}

// ── Condition FX Dispatcher ─────────────────────────────────────────

/**
 * Dispatch condition to appropriate FX combination.
 * When cloudCover object is provided (from Atmos CE), uses real values
 * to drive cloud density and layering.
 * @param {string} condition - HA weather condition string.
 * @param {boolean} isNight - Whether it's nighttime.
 * @param {{total: number, low: number, mid: number, high: number}|null} [cloudCover] - Atmos CE cloud cover data.
 * @returns {DocumentFragment} Fragment with FX elements.
 */
export function buildConditionFx(condition, isNight, cloudCover) {
  const frag = document.createDocumentFragment();

  try {
    // Night stars for all night conditions
    if (isNight) {
      addStars(frag);
    }

    // Cloud count from Atmos CE data or condition-based defaults
    const cloudCount = cloudCover
      ? Math.round((cloudCover.total / 100) * MAX_CLOUDS)
      : 0;

    switch (condition) {
      case 'sunny':
        if (!isNight) addRays(frag);
        if (cloudCover && cloudCount > 0) addClouds(frag, cloudCount);
        break;

      case 'clear-night':
        // Stars already added above
        if (cloudCover && cloudCount > 0) addClouds(frag, cloudCount);
        break;

      case 'partlycloudy':
        if (!isNight) addRays(frag);
        addClouds(frag, cloudCover ? cloudCount : 3);
        break;

      case 'cloudy':
        addClouds(frag, cloudCover ? Math.max(cloudCount, 4) : 6);
        break;

      case 'rainy':
        addRain(frag, 40, 1, 2);
        addClouds(frag, cloudCover ? Math.max(cloudCount, 3) : 4);
        break;

      case 'pouring':
        addRain(frag, 80, 1.5, 3);
        addClouds(frag, cloudCover ? Math.max(cloudCount, 5) : 6);
        break;

      case 'snowy':
        addSnow(frag, 40);
        addClouds(frag, cloudCover ? Math.max(cloudCount, 3) : 4);
        break;

      case 'snowy-rainy':
        addSnow(frag, 20);
        addRain(frag, 20, 0.8, 1);
        addClouds(frag, cloudCover ? Math.max(cloudCount, 3) : 4);
        break;

      case 'hail':
        addRain(frag, 30, 1.2, 3);
        addSnow(frag, 15);
        addClouds(frag, cloudCover ? Math.max(cloudCount, 4) : 5);
        break;

      case 'lightning':
        addBolts(frag, 2, [0, 3]);
        addClouds(frag, cloudCover ? Math.max(cloudCount, 5) : 6);
        break;

      case 'lightning-rainy':
        addBolts(frag, 3, [0, 2, 4]);
        addRain(frag, 60, 1.3, 2);
        addClouds(frag, cloudCover ? Math.max(cloudCount, 5) : 6);
        break;

      case 'fog':
        addFog(frag);
        break;

      case 'windy':
      case 'windy-variant':
        addClouds(frag, cloudCover ? cloudCount : 3, 1.5);
        break;

      case 'exceptional':
        addHeatShimmer(frag);
        break;

      default:
        // Unknown condition — render clouds if Atmos CE data available
        if (cloudCover && cloudCount > 0) addClouds(frag, cloudCount);
        break;
    }
  } catch {  
    // Never throw — return empty or partial fragment on error
  }

  return frag;
}
