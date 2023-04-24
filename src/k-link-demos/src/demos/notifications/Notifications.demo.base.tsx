import React from 'react';
import { Group, Button } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { notifications } from '@k-link/notifications';

const code = `
import { Group, Button } from '@k-link/core';
import { notifications } from '@k-link/notifications';

function Demo() {
  return (
    <Group position="center">
      <Button
        variant="outline"
        onClick={() =>
          notifications.show({
            title: 'Default notification',
            message: 'Hey there, your code is awesome! 🤥',
          })
        }
      >
        Show notification
      </Button>
    </Group>
  );
}`;

function Demo() {
  return (
    <Group position="center">
      <Button
        variant="outline"
        onClick={() =>
          notifications.show({
            title: 'Default notification',
            message: 'Hey there, your code is awesome! 🤥',
          })
        }
      >
        Show notification
      </Button>
    </Group>
  );
}

export const base: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
