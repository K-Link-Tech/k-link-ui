import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Code } from '@k-link/core';

const code = `
import { Code } from '@k-link/core';

const codeForPreviousDemo = \`import React from 'react';
import { Code } from '@k-link/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}\`;

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}
`;

const codeForPreviousDemo = `import React from 'react';
import { Code } from '@k-link/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}`;

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}

export const block: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
