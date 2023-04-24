import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { PinInput, Group } from '@k-link/core';

const code = `
import { PinInput, Group } from '@k-link/core';

function Demo() {
  return (
    <Group position="center">
      <PinInput />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <PinInput />
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
