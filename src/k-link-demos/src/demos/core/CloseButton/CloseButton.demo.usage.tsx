import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { CloseButton, Group } from '@k-link/core';

const code = `
import { CloseButton, Group } from '@k-link/core';

function Demo() {
  return (
    <Group position="center">
      <CloseButton aria-label="Close modal" />
      <CloseButton title="Close popover" size="xl" iconSize={20} />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <CloseButton aria-label="Close modal" />
      <CloseButton title="Close popover" size="xl" iconSize={20} />
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
