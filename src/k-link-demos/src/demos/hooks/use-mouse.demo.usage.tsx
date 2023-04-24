import React from 'react';
import { Text, Code } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { useMouse } from '@k-link/hooks';

const code = `
import { Text, Code } from '@k-link/core';
import { useMouse } from '@k-link/hooks';

function Demo() {
  const { x, y } = useMouse();

  return (
    <Text align="center">
      Mouse coordinates <Code>{\`{ x: \${x}, y: \${y} }\`}</Code>
    </Text>
  );
}`;

function Demo() {
  const { x, y } = useMouse();

  return (
    <Text align="center">
      Mouse coordinates <Code>{`{ x: ${x}, y: ${y} }`}</Code>
    </Text>
  );
}

export const useMouseUsage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
