import React from 'react';
import { Button, Text, Group } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { useForceUpdate, randomId } from '@k-link/hooks';

const code = `
import { Button, Text, Group } from '@k-link/core';
import { useForceUpdate, randomId } from '@k-link/hooks';

function Demo() {
  const forceUpdate = useForceUpdate();

  return (
    <Group position="center">
      <Text>{randomId()}</Text>
      <Button onClick={forceUpdate}>Force update</Button>
    </Group>
  );
}
`;

function Demo() {
  const forceUpdate = useForceUpdate();

  return (
    <Group position="center">
      <Text>{randomId()}</Text>
      <Button onClick={forceUpdate}>Force update</Button>
    </Group>
  );
}

export const useForceUpdateDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
