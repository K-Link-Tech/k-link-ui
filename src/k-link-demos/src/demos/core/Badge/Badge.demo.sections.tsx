import React from 'react';
import { IconX } from '@tabler/icons-react';
import { MantineDemo } from '@k-link/ds';
import { Group, Badge, ActionIcon, Avatar, rem } from '@k-link/core';

const code = `
import { ActionIcon, Avatar, Badge, Group, rem } from '@k-link/core';
import { IconX } from '@tabler/icons-react';

const avatar = (
  <Avatar
    alt="Avatar for badge"
    size={24}
    mr={5}
    src="./avatar.png"
  />
);

const fullAvatar = (
  <ActionIcon size="xs" radius="xl" variant="transparent">
    <Avatar
      alt="Avatar for badge"
      size={20}
      src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
    />
  </ActionIcon>
);

const removeButton = (
  <ActionIcon size="xs" color="blue" radius="xl" variant="transparent">
    <IconX size={rem(10)} />
  </ActionIcon>
);

function Demo() {
  return (
    <Group>
      <Badge pl={0} size="lg" color="success" radius="xl" leftSection={avatar}>
        Badge with Avatar
      </Badge>
      <Badge size="lg" pl={3} color="success" radius="xl" leftSection={fullAvatar}>
        Badge with full Avatar
      </Badge>
      <Badge variant="outline" pr={3} rightSection={removeButton}>
        Badge with right section
      </Badge>
      <Badge variant="outline" pl={3} leftSection={removeButton}>
        Badge with left section
      </Badge>
    </Group>
  );
}
`;

const avatar = (
  <Avatar
    alt="Avatar for badge"
    size={24}
    mr={5}
    src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
  />
);

const fullAvatar = (
  <ActionIcon size="xs" radius="xl" variant="transparent">
    <Avatar
      alt="Avatar for badge"
      size={20}
      src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
    />
  </ActionIcon>
);

const removeButton = (
  <ActionIcon size="xs" color="blue" radius="xl" variant="transparent">
    <IconX size={rem(10)} />
  </ActionIcon>
);

function Demo() {
  return (
    <Group>
      <Badge pl={0} size="lg" color="success" radius="xl" leftSection={avatar}>
        Badge with Avatar
      </Badge>
      <Badge size="lg" pl={3} color="success" radius="xl" leftSection={fullAvatar}>
        Badge with full Avatar
      </Badge>
      <Badge variant="outline" pr={3} rightSection={removeButton}>
        Badge with right section
      </Badge>
      <Badge variant="outline" pl={3} leftSection={removeButton}>
        Badge with left section
      </Badge>
    </Group>
  );
}

export const sections: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
