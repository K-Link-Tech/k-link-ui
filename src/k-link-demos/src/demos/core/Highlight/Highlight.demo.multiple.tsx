import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Highlight } from '@k-link/core';

const code = `
import { Highlight } from '@k-link/core';

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}
`;

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}

export const multiple: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
