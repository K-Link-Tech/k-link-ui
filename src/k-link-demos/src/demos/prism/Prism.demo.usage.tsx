import React from 'react';
import { Prism } from '@k-link/prism';
import { MantineDemo } from '@k-link/ds';

export const demoCode = `
import { Button } from '@k-link/core';

function Demo() {
  return <Button>Hello</Button>
}
`;

const code = `
import { Prism } from '@k-link/prism';

const demoCode = \`import { Button } from '@k-link/core';

function Demo() {
  return <Button>Hello</Button>
}\`;

function Demo() {
  return <Prism language="tsx">{demoCode}</Prism>;
}
`;

function Demo() {
  return <Prism language="tsx">{demoCode}</Prism>;
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
