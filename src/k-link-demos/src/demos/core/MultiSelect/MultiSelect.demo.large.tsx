import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { MultiSelect } from '@k-link/core';

const code = `
import { MultiSelect } from '@k-link/core';

const data = Array(50).fill(0).map((_, index) => \`Item \${index}\`);

function Demo() {
  return (
    <MultiSelect
      data={data}
      label="Large data set"
      placeholder="Scroll to see all options"
      maxDropdownHeight={160}
    />
  );
}
`;

const data = Array(50)
  .fill(0)
  .map((_, index) => `Item ${index}`);

function Demo() {
  return (
    <MultiSelect
      maw={400}
      mx="auto"
      data={data}
      label="Large data set"
      placeholder="Scroll to see all options"
      maxDropdownHeight={160}
    />
  );
}

export const large: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
