import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Highlight } from '@k-link/core';

const code = `
import { Highlight } from '@k-link/core';

function Demo() {
  return (
    <Highlight
      component="a"
      href="https://k-link.dev"
      target="_blank"
      highlight="mantine"
      fw={500}
    >
      Klink UI website
    </Highlight>
  );
}

`;

function Demo() {
  return (
    <Highlight component="a" href="https://k-link.dev" target="_blank" highlight="mantine" fw={500}>
      Klink UI website
    </Highlight>
  );
}

export const props: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
