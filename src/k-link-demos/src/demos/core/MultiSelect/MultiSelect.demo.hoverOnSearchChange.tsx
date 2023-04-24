import React from 'react';
import { MultiSelect } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { data } from './_data';

const code = `
import { MultiSelect } from '@k-link/core';

function Demo() {
  return (
    <MultiSelect
      data={['React', 'Angular', 'Svelte', 'Vue', 'Riot', 'Next.js', 'Blitz.js']}
      label="Your favorite frameworks/libraries"
      placeholder="Pick all that you like"
      searchable
      hoverOnSearchChange
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <MultiSelect
        data={data}
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
        searchable
        hoverOnSearchChange
      />
    </div>
  );
}

export const hoverOnSearchChange: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
