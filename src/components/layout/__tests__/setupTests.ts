import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock fetch globally
global.fetch = vi.fn();

// Setup custom matchers
expect.extend({
  toHaveBeenCalledWith(received, ...expected) {
    const pass = vi.mocked(received).mock.calls.some(call =>
      JSON.stringify(call) === JSON.stringify(expected)
    );
    return {
      pass,
      message: () => `expected ${received} to have been called with ${expected}`,
    };
  },
});