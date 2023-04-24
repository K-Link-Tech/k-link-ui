import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Group } from '@k-link/core';
import { MonthPicker } from '@k-link/dates';

const code = `
import { Group } from '@k-link/core';
import { MonthPicker } from '@k-link/dates';

function Demo() {
  return (
    <Group position="center">
      <MonthPicker maxLevel="year" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <MonthPicker maxLevel="year" />
    </Group>
  );
}

export const maxLevel: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
