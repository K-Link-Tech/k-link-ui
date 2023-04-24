import 'dayjs/locale/ru';
import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Group } from '@k-link/core';
import { DatePicker } from '@k-link/dates';

const code = `
import 'dayjs/locale/ru';
import { Group } from '@k-link/core';
import { DatePicker } from '@k-link/dates';

function Demo() {
  return (
    <Group position="center">
      <DatePicker locale="ru" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <DatePicker locale="ru" />
    </Group>
  );
}

export const locale: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
