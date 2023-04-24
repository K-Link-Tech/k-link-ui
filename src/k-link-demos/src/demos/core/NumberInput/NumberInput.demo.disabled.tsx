import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { NumberInput } from '@k-link/core';

const code = `
import { NumberInput } from '@k-link/core';

function Demo() {
  return <NumberInput disabled />;
}
`;

function Demo() {
  return (
    <NumberInput
      maw={320}
      mx="auto"
      label="Enter your age"
      placeholder="Your age"
      disabled
      value={20}
    />
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
