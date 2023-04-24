import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { PasswordInput, Box } from '@k-link/core';

const code = `
import { PasswordInput } from '@k-link/core';

function Demo() {
  return <PasswordInput disabled />;
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <PasswordInput label="Disabled without value" placeholder="Your password" disabled />

      <PasswordInput
        mt="md"
        label="Disabled with value"
        placeholder="Your password"
        disabled
        value="secret"
      />
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
