import React from 'react';
import { Group } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { DemoBase } from './_base';

const code = `
import { useDisclosure } from '@k-link/hooks';
import { Burger } from '@k-link/core';

function Demo() {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';
  return <Burger opened={opened} onClick={toggle} aria-label={label} />;
}
`;

export function Demo() {
  return (
    <Group position="center">
      <DemoBase />
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
