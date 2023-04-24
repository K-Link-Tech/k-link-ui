import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { PinInput, Group } from '@k-link/core';

const code = `
import { PinInput, Group } from '@k-link/core';

function Demo() {
  return (
    <Group position="center">
      <PinInput mask />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <PinInput mask />
    </Group>
  );
}

export const mask: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
