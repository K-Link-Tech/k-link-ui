import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { IconClock } from '@tabler/icons-react';
import { TimeInput } from '@k-link/dates';

const code = `
import { IconClock } from '@tabler/icons-react';
import { TimeInput } from '@k-link/dates';

function Demo() {
  return <TimeInput icon={<IconClock size="1rem" stroke={1.5} />} maw={400} mx="auto" />;
}
`;

function Demo() {
  return <TimeInput icon={<IconClock size="1rem" stroke={1.5} />} maw={400} mx="auto" />;
}

export const icon: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
