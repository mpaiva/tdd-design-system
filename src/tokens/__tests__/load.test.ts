import { describe, it, expect } from 'vitest';
import { loadTokens } from '../load';
import { theme as baseTheme } from '../theme';

describe('Token Loading', () => {
  it('should load tokens successfully', async () => {
    const tokens = await loadTokens();
    expect(tokens).toBeDefined();
    expect(tokens).toEqual(baseTheme);
  });

  it('should have the same structure as base theme', async () => {
    const tokens = await loadTokens();
    expect(Object.keys(tokens)).toEqual(Object.keys(baseTheme));
  });
});