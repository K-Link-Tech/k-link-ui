import { MantineTheme, getSize } from '@k-link/styles';

export function getFontSizeValue(size: any, theme: MantineTheme) {
  return getSize({ size, sizes: theme.fontSizes });
}
