import type { Dictionary } from 'style-dictionary/types';
import type { Theme } from './theme';

interface TokenStudioToken {
  value: string | number;
  type: string;
  description?: string;
}

interface TokenStudioTokens {
  [key: string]: TokenStudioToken | TokenStudioTokens;
}

export function transformTokenStudioFormat(tokens: TokenStudioTokens): Partial<Theme> {
  const transformed: Partial<Theme> = {};

  function processTokens(obj: TokenStudioTokens, target: any) {
    for (const [key, value] of Object.entries(obj)) {
      if (value.hasOwnProperty('value')) {
        const token = value as TokenStudioToken;
        target[key] = token.value;
      } else {
        target[key] = {};
        processTokens(value as TokenStudioTokens, target[key]);
      }
    }
  }

  processTokens(tokens, transformed);
  return transformed;
}