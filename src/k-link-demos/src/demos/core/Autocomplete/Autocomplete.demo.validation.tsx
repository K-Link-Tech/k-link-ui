import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Autocomplete, Box } from '@k-link/core';

const code = `
import { Autocomplete } from '@k-link/core';

function Demo() {
  return (
    <>
      {/* Error as boolean – red border color */}
      <Autocomplete error data={['React', 'Angular', 'Svelte', 'Vue']} />

      {/* Error as React node – red border color and message below input */}
      <Autocomplete error="Field is required" data={['React', 'Angular', 'Svelte', 'Vue']} />
    </>
  );
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <Autocomplete
        data={['React', 'Angular', 'Svelte', 'Vue']}
        label="Your favorite frameworks/libraries"
        placeholder="Pick one that you like"
        error
      />

      <Autocomplete
        mt="md"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        label="Your favorite frameworks/libraries"
        placeholder="Pick one that you like"
        error="Field is required"
      />
    </Box>
  );
}

export const validation: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
