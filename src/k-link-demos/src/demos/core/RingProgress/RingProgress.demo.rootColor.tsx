import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { RingProgress, Group } from '@k-link/core';

const code = `
import { RingProgress } from '@k-link/core';

function Demo() {
  return (
    <RingProgress sections={[{ value: 40, color: 'warning' }]} rootColor="error" />
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <RingProgress sections={[{ value: 40, color: 'warning' }]} rootColor="error" />
    </Group>
  );
}

export const rootColor: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
