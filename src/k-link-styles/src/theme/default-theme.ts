import { MantineThemeBase } from './types';
import { DEFAULT_COLORS } from './default-colors';
import { attachFunctions } from './functions/attach-functions';

export const MANTINE_COLORS = Object.keys(DEFAULT_COLORS);
export const MANTINE_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export const _DEFAULT_THEME: MantineThemeBase = {
  dir: 'ltr',
  primaryShade: {
    light: 7,
    dark: 8,
  },
  focusRing: 'auto',
  loader: 'oval',
  colorScheme: 'light',
  white: '#fff',
  black: '#000',
  defaultRadius: 'md',
  // defaultRadius: 'sm',
  transitionTimingFunction: 'ease',
  colors: DEFAULT_COLORS,
  lineHeight: 1.55,
  fontFamily:
    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
  fontFamilyMonospace:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
  primaryColor: 'primary',
  respectReducedMotion: true,
  cursorType: 'default',
  defaultGradient: {
    from: 'indigo',
    to: 'blue_light',
    deg: 45,
  },

  shadows: {
    xs: '0 0.0625rem 0.125rem rgba(16, 24, 40, 0.05)',

    sm: '0 0.0625rem 0.1875rem rgba(16, 24, 40, 0.1), 0 0.0625rem 0.125rem rgba(16, 24, 40, 0.06)',

    md: '0 0.25rem 0.5rem -0.125rem rgba(16, 24, 40, 0.1), 0 0.125rem 0.25rem -0.125rem rgba(16, 24, 40, 0.06)',

    lg: '0 0.75rem 1rem -0.25rem rgba(16, 24, 40, 0.1), 0 0.25rem 0.375rem -0.125rem rgba(16, 24, 40, 0.05)',

    xl: '0 1.25rem 1.5rem -0.25rem rgba(16, 24, 40, 0.1), 0 0.5rem 0.5rem -0.25rem rgba(16, 24, 40, 0.04)',

    '2xl': '0 1.5rem 3rem -0.75rem rgba(16, 24, 40, 0.25)',

    // xs: '0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.1)',
    // sm: '0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 0.625rem 0.9375rem -0.3125rem, rgba(0, 0, 0, 0.04) 0 0.4375rem 0.4375rem -0.3125rem',
    // md: '0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 1.25rem 1.5625rem -0.3125rem, rgba(0, 0, 0, 0.04) 0 0.625rem 0.625rem -0.3125rem',
    // lg: '0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 1.75rem 1.4375rem -0.4375rem, rgba(0, 0, 0, 0.04) 0 0.75rem 0.75rem -0.4375rem',
    // xl: '0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 2.25rem 1.75rem -0.4375rem, rgba(0, 0, 0, 0.04) 0 1.0625rem 1.0625rem -0.4375rem',
  },

  fontSizes: {
    // text
    xs: '0.75rem', // 12px
    sm: '0.875rem', //14px
    md: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px

    // // display
    // 'display-xs': '1.5rem',
    // 'display-sm': '1.875rem',
    // 'display-md': '2.25rem',
    // 'display-lg': '3rem',
    // 'display-xl': '3.75rem',
    // 'display-2xl': '4.5rem',
  },

  radius: {
    xs: '0.125rem', // 2px
    sm: '0.25rem', // 4px
    md: '0.5rem', // 8px
    lg: '0.75rem', // 12px
    xl: '1rem', // 16px
    '2xl': '2rem', // 32px
  },

  spacing: {
    xs: '0.625rem', //10px
    sm: '0.75rem', //12px
    md: '1rem', //16px
    lg: '1.25rem', //20px
    xl: '1.5rem', //24px
    '2xl': '2rem', //32px
  },

  breakpoints: {
    xs: '36em',
    sm: '48em',
    md: '62em',
    lg: '75em',
    xl: '88em',
    '2xl': '100em',
  },

  headings: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
    fontWeight: 700,
    sizes: {
      h1: { fontSize: '2.125rem', lineHeight: 1.3, fontWeight: undefined },
      h2: { fontSize: '1.625rem', lineHeight: 1.35, fontWeight: undefined },
      h3: { fontSize: '1.375rem', lineHeight: 1.4, fontWeight: undefined },
      h4: { fontSize: '1.125rem', lineHeight: 1.45, fontWeight: undefined },
      h5: { fontSize: '1rem', lineHeight: 1.5, fontWeight: undefined },
      h6: { fontSize: '0.875rem', lineHeight: 1.5, fontWeight: undefined },
    },
  },

  other: {},
  components: {},
  activeStyles: { transform: 'translateY(0.0625rem)' },
  datesLocale: 'en',
  globalStyles: undefined,
  focusRingStyles: {
    styles: (theme) => ({
      outlineOffset: '0.125rem',
      outline: `0.125rem solid ${
        theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5]
      }`,
    }),
    resetStyles: () => ({ outline: 'none' }),
    inputStyles: (theme) => ({
      outline: 'none',
      borderColor:
        theme.colors[theme.primaryColor][
          typeof theme.primaryShade === 'object'
            ? theme.primaryShade[theme.colorScheme]
            : theme.primaryShade
        ],
    }),
  },
};

export const DEFAULT_THEME = attachFunctions(_DEFAULT_THEME);
