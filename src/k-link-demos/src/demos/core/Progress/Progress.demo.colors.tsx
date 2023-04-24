import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Progress } from '@k-link/core';

const code = `
import { Progress } from '@k-link/core';

function Demo() {
  return (
    <Progress
      sections={[
        { value: 40, color: '#68b5e8' },
        { value: 15, color: '#6888e8' },
        { value: 15, color: '#8468e8' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <Progress
      sections={[
        { value: 40, color: '#68b5e8' },
        { value: 15, color: '#6888e8' },
        { value: 15, color: '#8468e8' },
      ]}
    />
  );
}

export const colors: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
