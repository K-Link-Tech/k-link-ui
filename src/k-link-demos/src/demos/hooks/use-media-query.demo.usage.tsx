import React from 'react';
import { Group, Badge, em } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { useMediaQuery } from '@k-link/hooks';

const code = `
import { Badge } from '@k-link/core';
import { useMediaQuery } from '@k-link/hooks';

function Demo() {
  const matches = useMediaQuery('(min-width: ${em(900)})');

  return (
    <Badge color={matches ? 'success' : 'error'} variant="filled">
      Breakpoint {matches ? 'matches' : 'does not match'}
    </Badge>
  );
}`;

function Demo() {
  const matches = useMediaQuery(`(min-width: ${em(900)})`);

  return (
    <Group position="center">
      <Badge color={matches ? 'success' : 'error'} variant="filled">
        Breakpoint {matches ? 'matches' : 'does not match'}
      </Badge>
    </Group>
  );
}

export const useMediaQueryDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
