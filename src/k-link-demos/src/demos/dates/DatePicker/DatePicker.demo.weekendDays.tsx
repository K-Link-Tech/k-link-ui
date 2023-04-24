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
      <DatePicker weekendDays={[1, 2]} />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <DatePicker weekendDays={[1, 2]} />
    </Group>
  );
}

export const weekendDays: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
