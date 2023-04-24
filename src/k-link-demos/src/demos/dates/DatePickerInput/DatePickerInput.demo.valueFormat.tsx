import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { DatePickerInput } from '@k-link/dates';

const code = `
import { DatePickerInput } from '@k-link/dates';

function Demo() {
  return (
    <DatePickerInput
      valueFormat="YYYY MMM DD"
      type="multiple"
      label="Pick date"
      placeholder="Pick date"
      mx="auto"
      maw={400}
    />
  );
}
`;

function Demo() {
  return (
    <DatePickerInput
      valueFormat="YYYY MMM DD"
      type="multiple"
      label="Pick date"
      placeholder="Pick date"
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
