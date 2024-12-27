import { describe, it, expect } from 'vitest';
import { transformTokenStudioFormat } from '../transform';

describe('Token Transformation', () => {
  it('should transform flat token structure', () => {
    const input = {
      color: {
        primary: {
          value: '#0284c7',
          type: 'color'
        }
      }
    };

    const result = transformTokenStudioFormat(input);
    expect(result).toEqual({
      color: {
        primary: '#0284c7'
      }
    });
  });

  it('should handle nested token structure', () => {
    const input = {
      component: {
        button: {
          primary: {
            background: {
              value: '#0284c7',
              type: 'color'
            }
          }
        }
      }
    };

    const result = transformTokenStudioFormat(input);
    expect(result).toEqual({
      component: {
        button: {
          primary: {
            background: '#0284c7'
          }
        }
      }
    });
  });
});