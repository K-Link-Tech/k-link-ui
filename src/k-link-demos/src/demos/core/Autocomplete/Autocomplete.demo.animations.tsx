import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Autocomplete } from '@k-link/core';

const code = `
import { Autocomplete } from '@k-link/core';

function Demo() {
  return (
    <Autocomplete
      maw={320}
      mx="auto"
      label="Your favorite framework/library"
      placeholder="Pick one"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      transitionProps={{ transition: 'pop-top-left', duration: 80, timingFunction: 'ease' }}
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
      transitionProps={{ transition: 'pop-top-left', duration: 80, timingFunction: 'ease' }}
    />
  );
}

export const animations: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
