import React, { useRef } from 'react';
import { MantineDemo } from '@k-link/ds';
import { IconClock } from '@tabler/icons-react';
import { ActionIcon } from '@k-link/core';
import { TimeInput } from '@k-link/dates';

const code = `
import { useRef } from 'react';
import { ActionIcon } from '@k-link/core';
import { TimeInput } from '@k-link/dates';
import { IconClock } from '@tabler/icons-react';

function Demo() {
  const ref = useRef<HTMLInputElement>();

  return (
    <TimeInput
      label="Click click icon to show browser picker"
      ref={ref}
      rightSection={
        <ActionIcon onClick={() => ref.current.showPicker()}>
          <IconClock size="1rem" stroke={1.5} />
        </ActionIcon>
      }
      maw={400}
      mx="auto"
    />
  );
}
`;

function Demo() {
  const ref = useRef<HTMLInputElement>();

  return (
    <TimeInput
      label="Click click icon to show browser picker"
      ref={ref}
      rightSection={
        <ActionIcon onClick={() => ref.current.showPicker()}>
          <IconClock size="1rem" stroke={1.5} />
        </ActionIcon>
      }
      maw={400}
      mx="auto"
    />
  );
}

export const picker: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
