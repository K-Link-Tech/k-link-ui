import React, { useState } from 'react';
import { MantineDemo } from '@k-link/ds';
import { MultiSelect } from '@k-link/core';

const code = `
import { useState } from 'react';
import { MultiSelect } from '@k-link/core';

function Demo() {
  const [data, setData] = useState([
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular' },
  ]);

  return (
    <MultiSelect
      label="Creatable MultiSelect"
      data={data}
      placeholder="Select items"
      searchable
      creatable
      getCreateLabel={(query) => \`+ Create \${query}\`}
      onCreate={(query) => {
        const item = { value: query, label: query };
        setData((current) => [...current, item]);
        return item;
      }}
    />
  );
}
`;

export function Demo() {
  const [data, setData] = useState([
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular' },
  ]);

  return (
    <MultiSelect
      maw={400}
      mx="auto"
      label="Creatable MultiSelect"
      data={data}
      placeholder="Select items"
      searchable
      creatable
      getCreateLabel={(query) => `+ Create ${query}`}
      onCreate={(query) => {
        const item = { value: query, label: query };
        setData((current) => [...current, item]);
        return item;
      }}
    />
  );
}

export const creatable: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
