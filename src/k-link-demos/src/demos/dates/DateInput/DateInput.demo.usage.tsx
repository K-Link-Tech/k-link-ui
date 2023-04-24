import React, { useState } from 'react';
import { MantineDemo } from '@k-link/ds';
import { DateInput } from '@k-link/dates';

const code = `
import { useState } from 'react';
import { DateInput } from '@k-link/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DateInput
      value={value}
      onChange={setValue}
      label="Date input"
      placeholder="Date input"
      maw={400}
      mx="auto"
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DateInput
      value={value}
      onChange={setValue}
      label="Date input"
      placeholder="Date input"
      maw={400}
      mx="auto"
      popoverProps={{ withinPortal: true }}
    />
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
