import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Group, Indicator } from '@k-link/core';
import { Calendar } from '@k-link/dates';

const code = `
import { Group, Indicator } from '@k-link/core';
import { Calendar } from '@k-link/dates';

function Demo() {
  return (
    <Group position="center">
      <Calendar
        static
        renderDay={(date) => {
          const day = date.getDate();
          return (
            <Indicator size={6} color="error" offset={-2} disabled={day !== 16}>
              <div>{day}</div>
            </Indicator>
          );
        }}
      />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Calendar
        static
        renderDay={(date) => {
          const day = date.getDate();
          return (
            <Indicator size={6} color="error" offset={-2} disabled={day !== 16}>
              <div>{day}</div>
            </Indicator>
          );
        }}
      />
    </Group>
  );
}

export const isStatic: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
