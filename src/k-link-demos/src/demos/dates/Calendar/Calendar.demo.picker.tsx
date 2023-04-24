import dayjs from 'dayjs';
import React, { useState } from 'react';
import { MantineDemo } from '@k-link/ds';
import { Group } from '@k-link/core';
import { Calendar } from '@k-link/dates';

const code = `
import dayjs from 'dayjs';
import { useState } from 'react';
import { Group } from '@k-link/core';
import { Calendar } from '@k-link/dates';

function Demo() {
  const [selected, setSelected] = useState<Date[]>([]);
  const handleSelect = (date: Date) => {
    const isSelected = selected.some((s) => dayjs(date).isSame(s, 'date'));
    if (isSelected) {
      setSelected((current) => current.filter((d) => !dayjs(d).isSame(date, 'date')));
    } else if (selected.length < 3) {
      setSelected((current) => [...current, date]);
    }
  };

  return (
    <Group position="center">
      <Calendar
        getDayProps={(date) => ({
          selected: selected.some((s) => dayjs(date).isSame(s, 'date')),
          onClick: () => handleSelect(date),
        })}
      />
    </Group>
  );
}
`;

function Demo() {
  const [selected, setSelected] = useState<Date[]>([]);
  const handleSelect = (date: Date) => {
    const isSelected = selected.some((s) => dayjs(date).isSame(s, 'date'));
    if (isSelected) {
      setSelected((current) => current.filter((d) => !dayjs(d).isSame(date, 'date')));
    } else if (selected.length < 3) {
      setSelected((current) => [...current, date]);
    }
  };

  return (
    <Group position="center">
      <Calendar
        getDayProps={(date) => ({
          selected: selected.some((s) => dayjs(date).isSame(s, 'date')),
          onClick: () => handleSelect(date),
        })}
      />
    </Group>
  );
}

export const picker: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
