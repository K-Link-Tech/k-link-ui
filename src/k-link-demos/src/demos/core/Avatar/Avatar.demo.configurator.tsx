import React from 'react';
import { Avatar, AvatarProps, Group } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { avatars } from './_mockdata';

function Wrapper(props: AvatarProps) {
  return (
    <Group position="center">
      <Avatar {...props} />
    </Group>
  );
}

const codeTemplate = (props: string) => `
import { Avatar } from '@k-link/core';

function Demo() {
  return <Avatar${props} />;
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: 'variant',
      type: 'segmented',
      initialValue: 'light',
      defaultValue: 'light',
      data: [
        { label: 'light', value: 'light' },
        { label: 'filled', value: 'filled' },
        { label: 'outline', value: 'outline' },
      ],
    },
    { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
    { name: 'color', type: 'color', initialValue: 'gray', defaultValue: 'gray' },
    { name: 'showOnlineActive', type: 'boolean', initialValue: 'false', defaultValue: 'false' },
    { name: 'isAddAvatar', type: 'boolean', initialValue: 'false', defaultValue: 'false' },
    {
      name: 'src',
      type: 'string',
      initialValue: avatars[1],
    },
  ],
};
