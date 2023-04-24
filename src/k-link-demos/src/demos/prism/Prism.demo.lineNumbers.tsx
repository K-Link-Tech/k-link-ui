import React from 'react';
import { Prism } from '@k-link/prism';
import { MantineDemo } from '@k-link/ds';

const demoCode = `
import { Button } from '@k-link/core';

function Demo() {
  return <Button>Hello</Button>
}
`;

const code = `
import { Prism } from '@k-link/prism';

function Demo() {
  return <Prism withLineNumbers language="tsx">{/* ...code */}</Prism>;
}
`;

function Demo() {
  return (
    <Prism language="tsx" withLineNumbers>
      {demoCode}
    </Prism>
  );
}

export const lineNumbers: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
