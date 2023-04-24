import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { ColorInput, DEFAULT_THEME } from '@k-link/core';

const code = `
import { ColorInput } from '@k-link/core';

function Demo() {
  return (
    <ColorInput
      format="hex"
      swatches={[${Object.keys(DEFAULT_THEME.colors)
        .map((color) => `'${DEFAULT_THEME.colors[color][6]}'`)
        .join(', ')}]}
    />
  );
}
`;

function Demo() {
  return (
    <ColorInput
      maw={320}
      mx="auto"
      placeholder="Pick color"
      label="Your favorite color"
      swatches={Object.keys(DEFAULT_THEME.colors).map((color) => DEFAULT_THEME.colors[color][6])}
    />
  );
}

export const swatches: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
