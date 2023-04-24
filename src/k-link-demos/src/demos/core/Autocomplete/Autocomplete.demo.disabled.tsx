import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Autocomplete, Box } from '@k-link/core';

const code = `
import { Autocomplete } from '@k-link/core';

function Demo() {
  return <Autocomplete disabled data={['React', 'Angular', 'Svelte', 'Vue']} />;
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <Autocomplete
        data={['React', 'Angular', 'Svelte', 'Vue']}
        label="Disabled without value"
        placeholder="Pick all that you like"
        disabled
      />

      <Autocomplete
        mt="md"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        label="Disabled with value"
        placeholder="Pick all that you like"
        disabled
        value="React"
      />
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
