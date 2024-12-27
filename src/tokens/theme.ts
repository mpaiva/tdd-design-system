import { colors } from './colors';
import { spacing } from './spacing';
import { typography } from './typography';

export const theme = {
  colors,
  spacing,
  typography,
  
  // Component-specific tokens
  components: {
    button: {
      primary: {
        background: colors.primary[600],
        hoverBackground: colors.primary[700],
        text: '#ffffff',
      },
      secondary: {
        background: colors.neutral[200],
        hoverBackground: colors.neutral[300],
        text: colors.neutral[900],
      },
      padding: {
        x: spacing.md,
        y: spacing.sm,
      },
      borderRadius: '0.375rem',
      transition: 'all 0.2s',
    },
    input: {
      background: '#ffffff',
      border: colors.neutral[300],
      focusBorder: colors.primary[500],
      focusRing: colors.primary[100],
      text: colors.neutral[900],
      placeholder: colors.neutral[500],
      states: {
        error: {
          border: colors.error[500],
          ring: colors.error[100],
          text: colors.error[500],
        },
        success: {
          border: colors.success[500],
          ring: colors.success[100],
          text: colors.success[500],
        },
      },
    },
  },
} as const;

export type Theme = typeof theme;