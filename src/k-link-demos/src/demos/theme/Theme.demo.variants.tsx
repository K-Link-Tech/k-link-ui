import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { MantineProvider, Button, Group } from '@k-link/core';

const code = `
import { MantineProvider, Button, Group } from '@k-link/core';

function Demo() {
  return (
    <MantineProvider
      theme={{
        components: {
          Button: {
            variants: {
              danger: (theme) => ({
                root: {
                  backgroundColor: theme.colors.error[9],
                  color: theme.colors.error[0],
                  ...theme.fn.hover({ backgroundColor: theme.colors.error[8] }),
                },
              }),

              success: (theme) => ({
                root: {
                  backgroundImage: theme.fn.linearGradient(
                    45,
                    theme.colors.blue_light[theme.fn.primaryShade()],
                    theme.colors.success[theme.fn.primaryShade()],
                    theme.colors.success[theme.fn.primaryShade()]
                  ),
                  color: theme.white,
                },
              }),
            },
          },
        },
      }}
    >
      <Group position="center">
        <Button variant="danger">Danger variant</Button>
        <Button variant="success">Success variant</Button>
      </Group>
    </MantineProvider>
  );
}
`;

function Demo() {
  return (
    <MantineProvider
      inherit
      theme={{
        components: {
          Button: {
            variants: {
              danger: (theme) => ({
                root: {
                  backgroundColor: theme.colors.error[9],
                  color: theme.colors.error[0],
                  ...theme.fn.hover({ backgroundColor: theme.colors.error[8] }),
                },
              }),

              success: (theme) => ({
                root: {
                  backgroundImage: theme.fn.linearGradient(
                    45,
                    theme.colors.blue_light[theme.fn.primaryShade()],
                    theme.colors.success[theme.fn.primaryShade()],
                    theme.colors.success[theme.fn.primaryShade()]
                  ),
                  color: theme.white,
                },
              }),
            },
          },
        },
      }}
    >
      <Group position="center">
        <Button variant="danger">Danger variant</Button>
        <Button variant="success">Success variant</Button>
      </Group>
    </MantineProvider>
  );
}

export const variants: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
