import React from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { MantineDemo } from '@k-link/ds';
import { Select } from '@k-link/core';

const code = `
import { Select } from '@k-link/core';
import { IconChevronDown } from '@tabler/icons-react';

function Demo() {
  return (
    <Select
      label="Your favorite framework/library"
      placeholder="Pick one"
      rightSection={<IconChevronDown size="1rem" />}
      rightSectionWidth={30}
      styles={{ rightSection: { pointerEvents: 'none' } }}
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
      rightSection={<IconChevronDown size="1rem" />}
      rightSectionWidth={30}
      styles={{ rightSection: { pointerEvents: 'none' } }}
      data={['React', 'Angular', 'Svelte', 'Vue']}
      withinPortal
    />
  );
}

export const rightSection: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
