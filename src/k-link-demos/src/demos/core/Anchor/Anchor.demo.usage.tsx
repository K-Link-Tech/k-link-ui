import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Anchor } from '@k-link/core';

const code = `
import { Anchor } from '@k-link/core';

function Demo() {
  return (
    <Anchor href="https://k-link.dev/" target="_blank">
      Klink UI docs
    </Anchor>
  );
}
`;

function Demo() {
  return (
    <Anchor href="https://k-link.dev/" target="_blank">
      Klink UI docs
    </Anchor>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
