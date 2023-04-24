import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Tooltip, Button, Group } from '@k-link/core';

const code = `
import { Tooltip, Button } from '@k-link/core';

function Demo() {
  return (
    <Tooltip label="Tooltip">
      <Button variant="outline">Button with tooltip</Button>
    </Tooltip>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Tooltip label="Tooltip">
        <Button variant="outline">Button with tooltip</Button>
      </Tooltip>
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
