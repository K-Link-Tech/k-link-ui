import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Code } from '@k-link/core';

const code = `
import { Code } from '@k-link/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}
`;

function Demo() {
  return <Code>React.createElement()</Code>;
}

export const inline: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
