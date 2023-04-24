import React from 'react';
import { SimpleGrid } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { defaultItems } from './_Item';

const code = `
import { SimpleGrid } from '@k-link/core';

function Demo() {
  return (
    <SimpleGrid
      cols={4}
      spacing="lg"
      breakpoints={[
        { maxWidth: 'md', cols: 3, spacing: 'md' },
        { maxWidth: 'sm', cols: 2, spacing: 'sm' },
        { maxWidth: 'xs', cols: 1, spacing: 'sm' },
      ]}
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  )
}
`;

function Demo() {
  return (
    <SimpleGrid
      cols={4}
      spacing="lg"
      breakpoints={[
        { maxWidth: 'md', cols: 3, spacing: 'md' },
        { maxWidth: 'sm', cols: 2, spacing: 'sm' },
        { maxWidth: 'xs', cols: 1, spacing: 'sm' },
      ]}
    >
      {defaultItems}
    </SimpleGrid>
  );
}

export const themeBreakpoints: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
