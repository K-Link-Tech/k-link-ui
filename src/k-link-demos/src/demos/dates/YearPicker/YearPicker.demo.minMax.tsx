import React, { useState } from 'react';
import { MantineDemo } from '@k-link/ds';
import { Group } from '@k-link/core';
import { YearPicker } from '@k-link/dates';

const code = `
import { useState } from 'react';
import { Group } from '@k-link/core';
import { YearPicker } from '@k-link/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <YearPicker
        value={value}
        onChange={setValue}
        minDate={new Date(2021, 1)}
        maxDate={new Date(2028, 1)}
      />
    </Group>
  );
}
`;

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <YearPicker
        value={value}
        onChange={setValue}
        minDate={new Date(2021, 1)}
        maxDate={new Date(2028, 1)}
      />
    </Group>
  );
}

export const minMax: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
