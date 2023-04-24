import React from 'react';
import { IconStar } from '@tabler/icons-react';
import { Avatar, Group } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { avatars } from './_mockdata';

const code = `
import { Avatar } from '@k-link/core';
import { IconStar } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      {/* With image */}
      <Avatar src="avatar.png" alt="it's me" />

      {/* Default placeholder */}
      <Avatar radius="xl" />

      {/* Letters with xl radius */}
      <Avatar color="blue_light" radius="xl">MK</Avatar>

      {/* Custom placeholder icon */}
      <Avatar color="blue" radius="sm">
        <IconStar size="1.5rem" />
      </Avatar>
    </>
  );
}

`;

function Demo() {
  return (
    <Group position="center">
      <Avatar src={avatars[0]} alt="it's me" />
      <Avatar radius="xl" />
      <Avatar color="blue_light" radius="xl">
        MK
      </Avatar>
      <Avatar color="blue" radius="xl">
        <IconStar size="1.5rem" />
      </Avatar>
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
