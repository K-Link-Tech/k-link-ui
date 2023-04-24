import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { MantineProvider, Button } from '@k-link/core';

const code = `
import { MantineProvider, Button } from '@k-link/core';

function Demo() {
  return (
    <MantineProvider
      inherit
      theme={{
        components: {
          Button: {
            defaultProps: (theme) => ({
              color: theme.colorScheme === 'dark' ? 'orange' : 'blue_light',
            }),
          },
        },
      }}
    >
      <Button>Demo button</Button>
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
            defaultProps: (theme) => ({
              color: theme.colorScheme === 'dark' ? 'orange' : 'blue_light',
            }),
          },
        },
      }}
    >
      <Button>Demo button</Button>
    </MantineProvider>
  );
}

export const defaultPropsTheme: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
