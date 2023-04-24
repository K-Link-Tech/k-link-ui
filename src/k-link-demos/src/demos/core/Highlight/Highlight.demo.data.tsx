import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Highlight } from '@k-link/core';

const code = `
import { Highlight } from '@k-link/core';

function Demo() {
  return (
    <Highlight
      highlight={['this', 'that']}
      sx={(theme) => ({
        '& [data-highlight="this"]': { backgroundColor: theme.colors.rose[4] },
        '& [data-highlight="that"]': { backgroundColor: theme.colors.success[4] },
      })}
    >
      Highlight this, that, also this and also that
    </Highlight>
  );
}
`;

function Demo() {
  return (
    <Highlight
      highlight={['this', 'that']}
      sx={(theme) => ({
        '& [data-highlight="this"]': { backgroundColor: theme.colors.rose[4] },
        '& [data-highlight="that"]': { backgroundColor: theme.colors.success[4] },
      })}
    >
      Highlight this, that, also this and also that
    </Highlight>
  );
}

export const data: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
