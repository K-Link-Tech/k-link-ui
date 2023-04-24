import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { TimeInput } from '@k-link/dates';

const code = `
import { TimeInput } from '@k-link/dates';

function Demo() {
  return <TimeInput withSeconds maw={400} mx="auto" />;
}
`;

function Demo() {
  return <TimeInput withSeconds maw={400} mx="auto" />;
}

export const withSeconds: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
