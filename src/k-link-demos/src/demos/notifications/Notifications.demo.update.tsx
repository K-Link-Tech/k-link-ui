import React from 'react';
import { IconCheck } from '@tabler/icons-react';
import { Group, Button } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { notifications } from '@k-link/notifications';

const code = `
import { Group, Button } from '@k-link/core';
import { notifications } from '@k-link/notifications';
import { IconCheck } from '@tabler/icons-react';

function Demo() {
  return (
    <Group position="center">
      <Button
        variant="outline"
        onClick={() => {
          notifications.show({
            id: 'load-data',
            loading: true,
            title: 'Loading your data',
            message: 'Data will be loaded in 3 seconds, you cannot close this yet',
            autoClose: false,
            withCloseButton: false,
          });

          setTimeout(() => {
            notifications.update({
              id: 'load-data',
              color: 'success',
              title: 'Data was loaded',
              message: 'Notification will close in 2 seconds, you can close this notification now',
              icon: <IconCheck size="1rem" />,
              autoClose: 2000,
            });
          }, 3000);
        }}
      >
        Show update notification
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
        onClick={() => {
          notifications.show({
            id: 'load-data',
            loading: true,
            title: 'Loading your data',
            message: 'Data will be loaded in 3 seconds, you cannot close this yet',
            autoClose: false,
            withCloseButton: false,
          });

          setTimeout(() => {
            notifications.update({
              id: 'load-data',
              color: 'success',
              title: 'Data was loaded',
              message: 'Notification will close in 2 seconds, you can close this notification now',
              icon: <IconCheck size="1rem" />,
              autoClose: 2000,
            });
          }, 3000);
        }}
      >
        Show update notification
      </Button>
    </Group>
  );
}

export const update: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
