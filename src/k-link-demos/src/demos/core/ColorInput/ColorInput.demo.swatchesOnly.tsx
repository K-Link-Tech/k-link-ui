import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { ColorInput, DEFAULT_THEME } from '@k-link/core';

const code = `
import { ColorInput, DEFAULT_THEME } from '@k-link/core';

function Demo() {
  return (
    <ColorInput
      placeholder="Pick color"
      label="Your favorite color"
      disallowInput
      withPicker={false}
      swatches={[
        ...DEFAULT_THEME.colors.error,
        ...DEFAULT_THEME.colors.success,
        ...DEFAULT_THEME.colors.blue,
      ]}
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
      disallowInput
      withPicker={false}
      swatches={[
        ...DEFAULT_THEME.colors.error,
        ...DEFAULT_THEME.colors.success,
        ...DEFAULT_THEME.colors.blue,
      ]}
    />
  );
}

export const swatchesOnly: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
