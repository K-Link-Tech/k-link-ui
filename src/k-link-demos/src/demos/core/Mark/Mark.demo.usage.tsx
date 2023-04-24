import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Mark, Text } from '@k-link/core';

const code = `
import { Mark, Text } from '@k-link/core';

function Demo() {
  return (
    <Text>
      Thanks for stopping by and checking out <Mark>Klink UI</Mark>, you are awesome!
    </Text>
  );
}
`;

function Demo() {
  return (
    <Text>
      Thanks for stopping by and checking out <Mark>Klink UI</Mark>, you are awesome!
    </Text>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
