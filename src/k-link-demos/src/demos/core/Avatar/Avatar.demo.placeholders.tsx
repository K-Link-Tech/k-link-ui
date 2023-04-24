import React from 'react';
import { IconStar } from '@tabler/icons-react';
import { MantineDemo } from '@k-link/ds';
import { Avatar, Group } from '@k-link/core';

const code = `
import { Avatar } from '@k-link/core';
import { IconStar } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      {/* Default placeholder */}
      <Avatar src={null} alt="no image here" />

      {/* Default placeholder with custom color */}
      <Avatar src={null} alt="no image here" color="indigo" />

      {/* Placeholder with initials */}
      <Avatar src={null} alt="Vitaly Rtishchev" color="error">VR</Avatar>

      {/* Placeholder with custom icon */}
      <Avatar color="blue" radius="xl">
        <IconStar size="1.5rem" />
      </Avatar>
    </>
  );
}

`;

function Demo() {
  return (
    <Group position="center">
      <Group position="center">
        <Avatar src={null} alt="no image here" />
        <Avatar src={null} alt="no image here" color="indigo" />
        <Avatar src={null} alt="no image here" color="error">
          VR
        </Avatar>
        <Avatar color="blue" radius="xl">
          <IconStar size="1.5rem" />
        </Avatar>
      </Group>
    </Group>
  );
}

export const placeholders: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
