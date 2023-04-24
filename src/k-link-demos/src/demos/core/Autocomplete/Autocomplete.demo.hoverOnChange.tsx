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
      hoverOnSearchChange
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Autocomplete
        label="Your favorite framework/library"
        placeholder="Pick one"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        hoverOnSearchChange
      />
    </div>
  );
}

export const hoverOnChange: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
