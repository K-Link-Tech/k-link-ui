import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Button, Flex, Box } from '@k-link/core';

const code = `
import { Button, Flex, Box } from '@k-link/core';

function Demo() {
  return (
    <Flex gap="md">
      <Box w={200}>
        <Button fullWidth variant="outline">
          Full width button
        </Button>
      </Box>

      <Box w={140}>
        <Button fullWidth variant="outline">
          Button with overflow
        </Button>
      </Box>
    </Flex>
  );
}
`;

function Demo() {
  return (
    <Flex gap="md">
      <Box w={200}>
        <Button fullWidth variant="outline">
          Full width button
        </Button>
      </Box>

      <Box w={140}>
        <Button fullWidth variant="outline">
          Button with overflow
        </Button>
      </Box>
    </Flex>
  );
}

export const overflow: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
