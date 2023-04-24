import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Group } from '@k-link/core';
import { DatePicker } from '@k-link/dates';

const code = `
import { Group } from '@k-link/core';
import { DatePicker } from '@k-link/dates';

function Demo() {
  return (
    <Group position="center">
      <DatePicker firstDayOfWeek={0} />
      <DatePicker firstDayOfWeek={6} />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <DatePicker firstDayOfWeek={0} />
      <DatePicker firstDayOfWeek={6} />
    </Group>
  );
}

export const firstDayOfWeek: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
