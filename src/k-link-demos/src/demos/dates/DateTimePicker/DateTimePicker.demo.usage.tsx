import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { DateTimePicker } from '@k-link/dates';

const code = `
import { DateTimePicker } from '@k-link/dates';

function Demo() {
  return (
    <DateTimePicker
      label="Pick date and time"
      placeholder="Pick date and time"
      maw={400}
      mx="auto"
    />
  );
}
`;

function Demo() {
  return (
    <DateTimePicker
      label="Pick date and time"
      placeholder="Pick date and time"
      maw={400}
      mx="auto"
      popoverProps={{ withinPortal: true }}
    />
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
