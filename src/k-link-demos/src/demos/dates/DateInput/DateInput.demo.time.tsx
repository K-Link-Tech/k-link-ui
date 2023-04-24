import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { DateInput } from '@k-link/dates';

const code = `
import { DateInput } from '@k-link/dates';

function Demo() {
  return (
    <DateInput
      valueFormat="DD/MM/YYYY HH:mm:ss"
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
      valueFormat="DD/MM/YYYY HH:mm:ss"
      label="Date input"
      placeholder="Date input"
      maw={400}
      mx="auto"
    />
  );
}

export const time: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
