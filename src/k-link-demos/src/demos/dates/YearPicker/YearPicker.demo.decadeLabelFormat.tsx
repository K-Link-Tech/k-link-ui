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
      <YearPicker decadeLabelFormat="YY" value={value} onChange={setValue} />
    </Group>
  );
}
`;

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <YearPicker decadeLabelFormat="YY" value={value} onChange={setValue} />
    </Group>
  );
}

export const decadeLabelFormat: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
