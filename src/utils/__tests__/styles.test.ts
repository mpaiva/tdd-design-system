import { describe, it, expect } from 'vitest';
import { getButtonStyles, getInputStyles } from '../styles';

describe('Style Utilities', () => {
  describe('getButtonStyles', () => {
    it('returns primary button styles', () => {
      const styles = getButtonStyles('primary');
      expect(styles).toContain('bg-blue-600');
      expect(styles).toContain('text-white');
    });

    it('returns secondary button styles', () => {
      const styles = getButtonStyles('secondary');
      expect(styles).toContain('bg-gray-200');
      expect(styles).toContain('text-gray-900');
    });
  });

  describe('getInputStyles', () => {
    it('returns default input styles', () => {
      const styles = getInputStyles('default');
      expect(styles).toContain('border-gray-300');
    });

    it('returns error input styles', () => {
      const styles = getInputStyles('error');
      expect(styles).toContain('border-red-500');
    });

    it('returns success input styles', () => {
      const styles = getInputStyles('success');
      expect(styles).toContain('border-green-500');
    });
  });
});