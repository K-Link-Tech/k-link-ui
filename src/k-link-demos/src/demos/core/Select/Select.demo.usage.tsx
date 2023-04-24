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
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue' },
      ]}
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
      withinPortal
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue' },
      ]}
    />
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
