import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { PinInput, Group } from '@k-link/core';

const code = `
import { PinInput, Group } from '@k-link/core';

function Demo() {
  return (
    <Group position="center">
      <PinInput type={/^[0-3]+/} inputType="tel" inputMode="numeric" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <PinInput type={/^[0-3]+/} inputType="tel" inputMode="numeric" />
    </Group>
  );
}

export const regexp: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
