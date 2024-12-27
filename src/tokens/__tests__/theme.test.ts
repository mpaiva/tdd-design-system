import { describe, it, expect } from 'vitest';
import { theme } from '../theme';

describe('Theme', () => {
  it('should have all required token categories', () => {
    expect(theme).toHaveProperty('colors');
    expect(theme).toHaveProperty('spacing');
    expect(theme).toHaveProperty('typography');
    expect(theme).toHaveProperty('components');
  });

  it('should have complete color scales', () => {
    expect(theme.colors.primary).toHaveProperty('500');
    expect(theme.colors.neutral).toHaveProperty('500');
    expect(theme.colors.success).toHaveProperty('500');
    expect(theme.colors.error).toHaveProperty('500');
  });

  it('should have consistent spacing scale', () => {
    const spacingKeys = ['xs', 'sm', 'md', 'lg', 'xl'];
    spacingKeys.forEach(key => {
      expect(theme.spacing).toHaveProperty(key);
      expect(typeof theme.spacing[key]).toBe('string');
      expect(theme.spacing[key]).toMatch(/rem$/);
    });
  });

  it('should have complete typography settings', () => {
    expect(theme.typography.fontFamilies).toHaveProperty('sans');
    expect(theme.typography.fontFamilies).toHaveProperty('mono');
    expect(theme.typography.fontSizes).toHaveProperty('base');
    expect(theme.typography.fontWeights).toHaveProperty('medium');
  });
});