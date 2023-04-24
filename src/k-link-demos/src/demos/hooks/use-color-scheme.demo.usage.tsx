import React from 'react';
import { Group, Badge } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { useColorScheme } from '@k-link/hooks';

const code = `
import { Badge } from '@k-link/core';
import { useColorScheme } from '@k-link/hooks';

function Demo() {
  const colorScheme = useColorScheme();

  return (
    <Badge color={colorScheme === 'dark' ? 'blue' : 'success'} variant="filled">
      Your system color scheme is {colorScheme}
    </Badge>
  );
}`;

function Demo() {
  const colorScheme = useColorScheme();

  return (
    <Group position="center">
      <Badge color={colorScheme === 'dark' ? 'blue' : 'success'} variant="filled">
        Your system color scheme is {colorScheme}
      </Badge>
    </Group>
  );
}

export const useColorSchemeDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
