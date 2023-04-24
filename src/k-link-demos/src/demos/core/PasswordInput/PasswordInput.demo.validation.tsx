import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { PasswordInput, Box } from '@k-link/core';

const code = `
// Error as boolean – red border color
<PasswordInput error />

// Error as React node – red border color and message below input
<PasswordInput error="Invalid password" />
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <PasswordInput label="Your password" placeholder="Your password" error />

      <PasswordInput
        mt="md"
        label="Your password"
        placeholder="Your password"
        error="Invalid password"
      />
    </Box>
  );
}

export const validation: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
