import React from 'react';
import { IconHash } from '@tabler/icons-react';
import { MantineDemo } from '@k-link/ds';
import { Autocomplete, rem } from '@k-link/core';

const code = `
import { Autocomplete } from '@k-link/core';
import { IconHash } from '@tabler/icons-react';

function Demo() {
  return <Autocomplete icon={<IconHash />} data={['React', 'Angular', 'Svelte', 'Vue']} />;
}
`;

function Demo() {
  return (
    <Autocomplete
      maw={320}
      mx="auto"
      label="Enter a hashtag"
      placeholder="Enter a hashtag"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      icon={<IconHash size={rem(14)} />}
    />
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
