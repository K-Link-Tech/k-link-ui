import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Button, Text, Stack } from '@k-link/core';

const code = `
import { Button, Text, Stack } from '@k-link/core';

function Demo() {
  return (
    <Stack align="flex-start">
      <Text color="blue.3">Text with theme.colors.blue[3] color</Text>
      <Button color="pink.4">Button with theme.colors.pink[4] color</Button>
    </Stack>
  );
}
`;

function Demo() {
  return (
    <Stack align="flex-start">
      <Text color="blue.3">Text with theme.colors.blue[3] color</Text>
      <Button color="pink.4">Button with theme.colors.pink[4] color</Button>
    </Stack>
  );
}

export const colorsIndex: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
