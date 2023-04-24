import React, { useState } from 'react';
import { MantineDemo } from '@k-link/ds';
import { Autocomplete } from '@k-link/core';

const code = `
import { useState } from 'react';
import { Autocomplete } from '@k-link/core';

function Demo() {
  const [value, setValue] = useState('');
  const data =
    value.trim().length > 0 && !value.includes('@')
      ? ['gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => \`\${value}@\${provider}\`)
      : [];

  return (
    <Autocomplete
      value={value}
      onChange={setValue}
      label="Email"
      placeholder="Start typing to see options"
      data={data}
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState('');
  const data =
    value.trim().length > 0 && !value.includes('@')
      ? ['gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => `${value}@${provider}`)
      : [];

  return (
    <Autocomplete
      maw={320}
      mx="auto"
      value={value}
      onChange={setValue}
      label="Email"
      placeholder="Start typing to see options"
      data={data}
    />
  );
}

export const dynamic: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
