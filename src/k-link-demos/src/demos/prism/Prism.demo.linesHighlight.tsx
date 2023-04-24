import React from 'react';
import { Prism } from '@k-link/prism';
import { MantineDemo } from '@k-link/ds';

const demoCode = `
import { Button } from '@k-link/core';

function Demo() {
  return <Button>Hello</Button>
}

function Usage() {
  return <ActionIcon>Hello</ActionIcon>;
}
`;

const code = `
import { Prism } from '@k-link/prism';

const deleted = { color: 'error', label: '-' };
const added = { color: 'success', label: '+' };

function Demo() {
  return (
    <Prism
      language="tsx"
      withLineNumbers
      highlightLines={{
        3: deleted,
        4: deleted,
        5: deleted,
        7: added,
        8: added,
        9: added,
      }}
    >
      {/* ...code */}
    </Prism>
  );
}
`;

function Demo() {
  const deleted = { color: 'error', label: '-' };
  const added = { color: 'success', label: '+' };

  return (
    <Prism
      language="tsx"
      withLineNumbers
      highlightLines={{
        3: deleted,
        4: deleted,
        5: deleted,
        7: added,
        8: added,
        9: added,
      }}
    >
      {demoCode}
    </Prism>
  );
}

export const linesHighlight: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
