import React from 'react';
import { ActionIcon, Group, rem } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { IconSun } from '@tabler/icons-react';

const code = `
import { ActionIcon, Group } from '@k-link/core';
import { Sun } from 'tabler-icons-react';
function Demo() {
  return (
    <>
      <ActionIcon variant="gradient" gradient={{ from: 'indigo', to: 'blue_light' }}><IconSun size={18} /></ActionIcon>
      <ActionIcon variant="gradient" gradient={{ from: 'success', to: 'blue_light', deg: 105 }}><IconSun size={18} /></ActionIcon>
      <ActionIcon variant="gradient" gradient={{ from: 'success', to: 'blue', deg: 60 }}><IconSun size={18} /></ActionIcon>
      <ActionIcon variant="gradient" gradient={{ from: 'orange', to: 'error' }}><IconSun size={18} /></ActionIcon>
      <ActionIcon variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}><IconSun size={18} /></ActionIcon>
    </>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <ActionIcon variant="gradient" gradient={{ from: 'indigo', to: 'blue_light' }}>
        <IconSun size={rem(18)} />
      </ActionIcon>
      <ActionIcon variant="gradient" gradient={{ from: 'success', to: 'blue_light', deg: 105 }}>
        <IconSun size={rem(18)} />
      </ActionIcon>
      <ActionIcon variant="gradient" gradient={{ from: 'success', to: 'blue', deg: 60 }}>
        <IconSun size={rem(18)} />
      </ActionIcon>
      <ActionIcon variant="gradient" gradient={{ from: 'orange', to: 'error' }}>
        <IconSun size={rem(18)} />
      </ActionIcon>
      <ActionIcon variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>
        <IconSun size={rem(18)} />
      </ActionIcon>
    </Group>
  );
}

export const gradient: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
