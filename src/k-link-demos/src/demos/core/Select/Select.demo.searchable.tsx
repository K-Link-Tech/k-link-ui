import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Select } from '@k-link/core';

const code = `
import { Select } from '@k-link/core';

function Demo() {
  return (
    <Select
      label="Your favorite framework/library"
      placeholder="Pick one"
      searchable
      nothingFound="No options"
      data={['React', 'Angular', 'Svelte', 'Vue']}
    />
  );
}
`;

function Demo() {
  return (
    <Select
      maw={320}
      mx="auto"
      label="Your favorite framework/library"
      placeholder="Pick one"
      searchable
      nothingFound="No options"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      withinPortal
    />
  );
}

export const searchable: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
