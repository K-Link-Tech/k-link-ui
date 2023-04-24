import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Tooltip, Group, Button } from '@k-link/core';

const code = `
import { Tooltip, Button } from '@k-link/core';

function Demo() {
  return (
    <>
      <Tooltip label="Default arrow" withArrow>
        <Button variant="outline">Default arrow</Button>
      </Tooltip>

      <Tooltip label="Arrow with size" withArrow arrowSize={6}>
        <Button variant="outline">With size</Button>
      </Tooltip>

      <Tooltip label="Arrow with radius" withArrow arrowSize={6} arrowRadius={4}>
        <Button variant="outline">With radius</Button>
      </Tooltip>
    </>
  );
}

`;

export function Demo() {
  return (
    <Group position="center">
      <Tooltip label="Default arrow" withArrow>
        <Button variant="outline">Default arrow</Button>
      </Tooltip>
      <Tooltip label="Arrow with size" withArrow arrowSize={6}>
        <Button variant="outline">With size</Button>
      </Tooltip>
      <Tooltip label="Arrow with radius" withArrow arrowSize={6} arrowRadius={4}>
        <Button variant="outline">With radius</Button>
      </Tooltip>
    </Group>
  );
}

export const arrow: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
