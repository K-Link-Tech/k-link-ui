import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Tooltip, Group, Button } from '@k-link/core';

const code = `
import { Tooltip, Button } from '@k-link/core';

function Demo() {
  return (
    <>
      <Tooltip label="Default arrow" offset={20}>
        <Button variant="outline">20 offset</Button>
      </Tooltip>
      <Tooltip label="Arrow with size" offset={-10}>
        <Button variant="outline">-10 offset</Button>
      </Tooltip>
    </>
  );
}

`;

export function Demo() {
  return (
    <Group position="center">
      <Tooltip label="Default arrow" offset={20}>
        <Button variant="outline">20 offset</Button>
      </Tooltip>
      <Tooltip label="Arrow with size" offset={-10}>
        <Button variant="outline">-10 offset</Button>
      </Tooltip>
    </Group>
  );
}

export const offset: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
