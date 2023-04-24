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
        onClick={() => notifications.show({ message: 'I will close in 4 seconds' })}
      >
        Notifications Provider timeout
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          notifications.show({
            message: 'I will close in 500ms',
            autoClose: 500,
          })
        }
      >
        Closes in 500ms
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          notifications.show({
            color: 'blue',
            title: 'I will never close',
            message: 'unless you click X',
            autoClose: false,
          })
        }
      >
        Never closes automatically
      </Button>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Button
        variant="outline"
        onClick={() => notifications.show({ message: 'I will close in 4 seconds' })}
      >
        Notifications Provider timeout
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          notifications.show({
            message: 'I will close in 500ms',
            autoClose: 500,
          })
        }
      >
        Closes in 500ms
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          notifications.show({
            color: 'blue',
            title: 'I will never close',
            message: 'unless you click X',
            autoClose: false,
          })
        }
      >
        Never closes automatically
      </Button>
    </Group>
  );
}

export const autoclose: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
