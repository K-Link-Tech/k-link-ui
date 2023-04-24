import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Progress } from '@k-link/core';

const code = `
import { Progress } from '@k-link/core';

function Demo() {
  return (
    <Progress
      size="xl"
      sections={[
        { value: 40, color: 'blue_light' },
        { value: 20, color: 'blue' },
        { value: 15, color: 'indigo' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <Progress
      size="xl"
      sections={[
        { value: 40, color: 'blue_light' },
        { value: 20, color: 'blue' },
        { value: 15, color: 'indigo' },
      ]}
    />
  );
}

export const sections: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
