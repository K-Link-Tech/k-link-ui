import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Autocomplete } from '@k-link/core';

const code = `
import { Autocomplete } from '@k-link/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite framework/library"
      placeholder="Pick one"
      data={['React', 'Angular', 'Svelte', 'Vue']}
    />
  );
}
`;

function Demo() {
  return (
    <Autocomplete
      maw={320}
      mx="auto"
      label="Your favorite framework/library"
      placeholder="Pick one"
      data={['React', 'Angular', 'Svelte', 'Vue']}
    />
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
