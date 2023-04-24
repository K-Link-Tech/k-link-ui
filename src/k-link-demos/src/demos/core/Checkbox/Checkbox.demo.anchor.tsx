import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Checkbox, Anchor } from '@k-link/core';

const code = `
import { Checkbox, Anchor } from '@k-link/core';

function Demo() {
  return (
    <Checkbox
      label={
        <>
          I accept{' '}
          <Anchor href="https://k-link.dev" target="_blank">
            terms and conditions
          </Anchor>
        </>
      }
    />
  );
}
`;

function Demo() {
  return (
    <Checkbox
      label={
        <>
          I accept{' '}
          <Anchor href="https://k-link.dev" target="_blank">
            terms and conditions
          </Anchor>
        </>
      }
    />
  );
}

export const anchor: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
