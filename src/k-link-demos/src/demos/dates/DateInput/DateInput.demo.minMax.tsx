import dayjs from 'dayjs';
import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { DateInput } from '@k-link/dates';

const code = `
import { DateInput } from '@k-link/dates';

function Demo() {
  return (
    <DateInput
      minDate={new Date()}
      maxDate={dayjs(new Date()).add(1, 'month').toDate()}
      label="Date input"
      placeholder="Date input"
      maw={400}
      mx="auto"
    />
  );
}
`;

function Demo() {
  return (
    <DateInput
      minDate={new Date()}
      maxDate={dayjs(new Date()).add(1, 'month').toDate()}
      label="Date input"
      placeholder="Date input"
      maw={400}
      mx="auto"
    />
  );
}

export const minMax: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
