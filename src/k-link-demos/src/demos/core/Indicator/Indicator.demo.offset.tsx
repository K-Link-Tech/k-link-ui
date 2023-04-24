import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Avatar, Indicator } from '@k-link/core';

const code = `
import { Avatar, Indicator } from '@k-link/core';

function Demo() {
  return (
    <Indicator inline size={16} offset={7} position="bottom-end" color="error" withBorder>
      <Avatar size="lg" radius="xl" src="./avatar.png" />
    </Indicator>
  );
}
`;

function Demo() {
  return (
    <Indicator inline size={16} offset={7} position="bottom-end" color="error" withBorder>
      <Avatar
        size="lg"
        radius="xl"
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
      />
    </Indicator>
  );
}

export const offset: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
