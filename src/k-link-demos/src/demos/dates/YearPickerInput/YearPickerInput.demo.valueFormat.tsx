import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { YearPickerInput } from '@k-link/dates';

const code = `
import { YearPickerInput } from '@k-link/dates';

function Demo() {
  return (
    <YearPickerInput
      valueFormat="YY"
      type="multiple"
      label="Pick year"
      placeholder="Pick year"
      mx="auto"
      maw={400}
    />
  );
}
`;

function Demo() {
  return (
    <YearPickerInput
      valueFormat="YY"
      type="multiple"
      label="Pick year"
      placeholder="Pick year"
      mx="auto"
      maw={400}
    />
  );
}

export const valueFormat: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
