import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { NativeSelect } from '@k-link/core';

const code = `
import { NativeSelect } from '@k-link/core';

function Demo() {
  return <NativeSelect disabled data={[]} />;
}
`;

function Demo() {
  return (
    <NativeSelect
      maw={320}
      mx="auto"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      label="Disabled select"
      placeholder="Pick one that you like"
      disabled
    />
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
