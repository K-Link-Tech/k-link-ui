import React, { useState } from 'react';
import { MantineDemo } from '@k-link/ds';
import { Group } from '@k-link/core';
import { DatePicker } from '@k-link/dates';

const code = `
import { useState } from 'react';
import { Group } from '@k-link/core';
import { DatePicker } from '@k-link/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <DatePicker
        value={value}
        onChange={setValue}
        defaultDate={new Date(2022, 1)}
        minDate={new Date(2022, 1, 1)}
        maxDate={new Date(2022, 8, 1)}
      />
    </Group>
  );
}
`;

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <DatePicker
        value={value}
        onChange={setValue}
        defaultDate={new Date(2022, 1)}
        minDate={new Date(2022, 1, 10)}
        maxDate={new Date(2022, 1, 25)}
      />
    </Group>
  );
}

export const minMax: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
