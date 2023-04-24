import React from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { MultiSelect } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { data } from './_data';

const code = `
import { MultiSelect } from '@k-link/core';
import { IconChevronDown } from '@tabler/icons-react';

function Demo() {
  return (
    <MultiSelect
      data={['React', 'Angular', 'Svelte', 'Vue', 'Riot', 'Next.js', 'Blitz.js']}
      label="Your favorite frameworks/libraries"
      placeholder="Pick all that you like"
      rightSection={<IconChevronDown size="1rem" />}
      styles={{ rightSection: { pointerEvents: 'none' } }}
      rightSectionWidth={40}
    />
  );
}
`;

function Demo() {
  return (
    <MultiSelect
      maw={400}
      mx="auto"
      data={data}
      label="Your favorite frameworks/libraries"
      placeholder="Pick all that you like"
      rightSection={<IconChevronDown size="1rem" />}
      styles={{ rightSection: { pointerEvents: 'none' } }}
      rightSectionWidth={40}
    />
  );
}

export const rightSection: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
