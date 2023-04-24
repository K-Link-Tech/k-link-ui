import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Avatar, Group } from '@k-link/core';

const code = `
import { IconPhoto } from '@tabler/icons-react';
import { Avatar, Group } from '@k-link/core';

function Demo() {
  return (
    <Group position="center">
      <Avatar variant="gradient" gradient={{ from: 'indigo', to: 'blue_light' }} radius="xl" />
      <Avatar variant="gradient" gradient={{ from: 'success', to: 'blue_light', deg: 105 }} radius="xl" />
      <Avatar variant="gradient" gradient={{ from: 'success', to: 'blue', deg: 60 }} radius="xl" />
      <Avatar variant="gradient" gradient={{ from: 'orange', to: 'error' }} radius="xl" />
      <Avatar variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }} radius="xl" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Avatar variant="gradient" gradient={{ from: 'indigo', to: 'blue_light' }} radius="xl" />
      <Avatar
        variant="gradient"
        gradient={{ from: 'success', to: 'blue_light', deg: 105 }}
        radius="xl"
      />
      <Avatar variant="gradient" gradient={{ from: 'success', to: 'blue', deg: 60 }} radius="xl" />
      <Avatar variant="gradient" gradient={{ from: 'orange', to: 'error' }} radius="xl" />
      <Avatar
        variant="gradient"
        gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}
        radius="xl"
      />
    </Group>
  );
}

export const gradient: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
