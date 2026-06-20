import { describe, it, expect } from 'vitest';
import { normalizeWeatherConfig } from '../../src/pulse-weather/utils.js';

describe('normalizeWeatherConfig', () => {
  it('returns overview section for empty config', () => {
    const result = normalizeWeatherConfig({});
    expect(result.sections).toHaveLength(1);
    expect(result.sections[0].type).toBe('overview');
  });

  it('returns overview section for null config', () => {
    const result = normalizeWeatherConfig(null);
    expect(result.sections).toHaveLength(1);
    expect(result.sections[0].type).toBe('overview');
  });

  it('returns overview section for undefined config', () => {
    const result = normalizeWeatherConfig(undefined);
    expect(result.sections).toHaveLength(1);
    expect(result.sections[0].type).toBe('overview');
  });

  it('preserves weather_entity from config', () => {
    const result = normalizeWeatherConfig({
      weather_entity: 'weather.home',
    });
    expect(result.weather_entity).toBe('weather.home');
  });

  it('preserves atmos_source from config', () => {
    const result = normalizeWeatherConfig({
      atmos_source: 'met_office',
    });
    expect(result.atmos_source).toBe('met_office');
  });

  it('normalizes sections with defaults', () => {
    const result = normalizeWeatherConfig({
      sections: [
        { type: 'forecast' },
        { type: 'wind' },
        { type: 'air_quality' },
      ],
    });
    expect(result.sections).toHaveLength(3);
    expect(result.sections[0].mode).toBe('both');
    expect(result.sections[1].speed_mode).toBe('speed');
    expect(result.sections[2].scale).toBe('eu');
  });

  it('preserves user overrides over defaults', () => {
    const result = normalizeWeatherConfig({
      sections: [
        { type: 'forecast', mode: 'hourly' },
        { type: 'air_quality', scale: 'us' },
      ],
    });
    expect(result.sections[0].mode).toBe('hourly');
    expect(result.sections[1].scale).toBe('us');
  });

  it('falls back to overview for unknown section types', () => {
    const result = normalizeWeatherConfig({
      sections: [{ type: 'nonexistent' }],
    });
    expect(result.sections[0].type).toBe('overview');
  });

  it('falls back to overview for empty sections array', () => {
    const result = normalizeWeatherConfig({
      sections: [],
    });
    expect(result.sections).toHaveLength(1);
    expect(result.sections[0].type).toBe('overview');
  });

  it('handles sections with missing type', () => {
    const result = normalizeWeatherConfig({
      sections: [{}],
    });
    expect(result.sections[0].type).toBe('overview');
  });

  it('handles non-object section entries', () => {
    const result = normalizeWeatherConfig({
      sections: [null, 'invalid', 42],
    });
    for (const section of result.sections) {
      expect(section.type).toBe('overview');
    }
  });

  it('normalizes plain string section entries to their type', () => {
    const result = normalizeWeatherConfig({
      sections: ['forecast', 'wind', 'air_quality', 'astro', 'alerts', 'atmosphere', 'meteogram'],
    });
    expect(result.sections.map((s) => s.type)).toEqual([
      'forecast', 'wind', 'air_quality', 'astro', 'alerts', 'atmosphere', 'meteogram',
    ]);
  });

  it('preserves section order', () => {
    const result = normalizeWeatherConfig({
      sections: [
        { type: 'alerts' },
        { type: 'overview' },
        { type: 'forecast' },
      ],
    });
    expect(result.sections.map((s) => s.type)).toEqual(['alerts', 'overview', 'forecast']);
  });

  it('sets card type', () => {
    const result = normalizeWeatherConfig({});
    expect(result.type).toBe('custom:pulse-weather-card');
  });

  it('preserves all 7 section types', () => {
    const result = normalizeWeatherConfig({
      sections: [
        { type: 'overview' },
        { type: 'forecast' },
        { type: 'wind' },
        { type: 'air_quality' },
        { type: 'astro' },
        { type: 'alerts' },
        { type: 'atmosphere' },
      ],
    });
    expect(result.sections).toHaveLength(7);
    expect(result.sections.map((s) => s.type)).toEqual([
      'overview', 'forecast', 'wind', 'air_quality', 'astro', 'alerts', 'atmosphere',
    ]);
  });
});
