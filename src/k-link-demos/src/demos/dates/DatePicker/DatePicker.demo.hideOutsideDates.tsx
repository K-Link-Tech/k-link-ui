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
      <DatePicker hideOutsideDates />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <DatePicker hideOutsideDates />
    </Group>
  );
}

export const hideOutsideDates: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
