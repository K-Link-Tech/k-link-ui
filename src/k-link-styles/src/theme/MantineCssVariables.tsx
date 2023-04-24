import React from 'react';
import { Global } from '@emotion/react';
import type { MantineTheme, MantineSize } from './types';
import { rem } from './utils';

function assignSizeVariables(
  variables: Record<string, string>,
  sizes: Record<MantineSize, number | string>,
  name: string
) {
  Object.keys(sizes).forEach((size) => {
    // eslint-disable-next-line no-param-reassign
    variables[`--k-link-${name}-${size}`] = rem(sizes[size]);
  });
}

export function MantineCssVariables({ theme }: { theme: MantineTheme }) {
  const variables: Record<string, string> = {
    '--k-link-color-white': theme.white,
    '--k-link-color-black': theme.black,
    '--k-link-transition-timing-function': theme.transitionTimingFunction,
    '--k-link-line-height': `${theme.lineHeight}`,
    '--k-link-font-family': theme.fontFamily,
    '--k-link-font-family-monospace': theme.fontFamilyMonospace,
    '--k-link-font-family-headings': theme.headings.fontFamily,
    '--k-link-heading-font-weight': `${theme.headings.fontWeight}`,
  };

  assignSizeVariables(variables, theme.shadows, 'shadow');
  assignSizeVariables(variables, theme.fontSizes, 'font-size');
  assignSizeVariables(variables, theme.radius, 'radius');
  assignSizeVariables(variables, theme.spacing, 'spacing');

  Object.keys(theme.colors).forEach((color) => {
    theme.colors[color].forEach((shade, index) => {
      variables[`--k-link-color-${color}-${index}`] = shade;
    });
  });

  const headings = theme.headings.sizes;

  Object.keys(headings).forEach((heading) => {
    variables[`--k-link-${heading}-font-size`] = headings[heading].fontSize;
    variables[`--k-link-${heading}-line-height`] = `${headings[heading].lineHeight}`;
  });

  return (
    <Global
      styles={{
        ':root': variables,
      }}
    />
  );
}
