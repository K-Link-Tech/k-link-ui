import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { ColorInput } from '@k-link/core';

const code = `
import { ColorInput } from '@k-link/core';

function Demo() {
  return <ColorInput placeholder="Pick color" label="Your favorite color" />;
}
`;

function Demo() {
  return (
    <ColorInput
      maw={320}
      mx="auto"
      placeholder="Pick color"
      label="Your favorite color"
      defaultValue="#ffffff"
    />
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
