import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { DateInput } from '@k-link/dates';

const code = `
import { DateInput } from '@k-link/dates';

function Demo() {
  return (
    <DateInput allowDeselect label="Date input" placeholder="Date input" maw={400} mx="auto" />
  );
}
`;

function Demo() {
  return (
    <DateInput allowDeselect label="Date input" placeholder="Date input" maw={400} mx="auto" />
  );
}

export const deselect: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
