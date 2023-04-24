import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Group } from '@k-link/core';
import { Calendar } from '@k-link/dates';

const code = `
import { Group } from '@k-link/core';
import { Calendar } from '@k-link/dates';

function Demo() {
  return (
    <Group position="center">
      <Calendar />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Calendar />
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
