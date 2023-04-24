import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Progress } from '@k-link/core';

const code = `
import { Progress } from '@k-link/core';

function Demo() {
  return <Progress value={75} animate />;
}
`;

function Label() {
  return <Progress value={75} animate />;
}

export const animations: MantineDemo = {
  type: 'demo',
  code,
  component: Label,
};
