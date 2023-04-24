import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { DateInput } from '@k-link/dates';

const code = `
import { DateInput } from '@k-link/dates';

function Demo() {
  return <DateInput label="Date input" placeholder="Date input" maw={400} mx="auto" />;
}
`;

function Demo() {
  return (
    <DateInput
      clearable
      defaultValue={new Date()}
      label="Date input"
      placeholder="Date input"
      maw={400}
      mx="auto"
    />
  );
}

export const clearable: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
