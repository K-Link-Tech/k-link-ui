import React from 'react';
import { IconCheck } from '@tabler/icons-react';
import { Group, Button } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
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
        Default
      </Button>

      <Button
        variant="outline"
        color="success"
        onClick={() =>
          notifications.show({
            color: 'success',
            title: 'You did great',
            message: 'Data was saved',
            icon: <IconCheck size="1rem" />,
          })
        }
      >
        Teal with icon
      </Button>

      <Button
        variant="outline"
        color="error"
        onClick={() =>
          notifications.show({
            color: 'error',
            title: 'Bummer!',
            message: 'You have no right to do this',
          })
        }
      >
        Red color
      </Button>

      <Button
        variant="outline"
        color="pink"
        onClick={() =>
          notifications.show({
            color: 'pink',
            title: 'I will never close',
            message: 'unless you click X',
            autoClose: false,
          })
        }
      >
        Never closes automatically
      </Button>

      <Button
        variant="outline"
        color="indigo"
        onClick={() =>
          notifications.show({
            color: 'indigo',
            title: 'Custom autoClose timeout',
            message: 'notification will be closed in 10 seconds',
            autoClose: 10000,
          })
        }
      >
        10 seconds timeout
      </Button>

      <Button
        variant="outline"
        color="blue_light"
        onClick={() => {
          notifications.show({
            id: 'data-loading',
            color: 'blue_light',
            loading: true,
            title: 'Loading your data',
            message: 'Data will be loaded in 3 seconds, you cannot close this yet',
            autoClose: false,
            withCloseButton: false,
          });

          setTimeout(() => {
            notifications.update({
              id: 'data-loading',
              color: 'success',
              title: 'Data was loaded',
              message: 'Notification will close in 3 seconds, you can close this notification now',
              icon: <IconCheck size="1rem" />,
              autoClose: 3000,
            });
          }, 3000);
        }}
      >
        Loading state and update
      </Button>
    </Group>
  );
}

export const root: MantineDemo = {
  type: 'demo',
  component: Demo,
};
