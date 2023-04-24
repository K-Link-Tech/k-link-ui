import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Button, Group } from '@k-link/core';

const code = `
import { Button } from '@k-link/core';

function Demo() {
  return (
    <>
      <Button variant="gradient" gradient={{ from: 'indigo', to: 'blue_light' }}>Indigo blue_light</Button>
      <Button variant="gradient" gradient={{ from: 'success', to: 'blue_light', deg: 105 }}>Lime green</Button>
      <Button variant="gradient" gradient={{ from: 'success', to: 'blue', deg: 60 }}>Teal blue</Button>
      <Button variant="gradient" gradient={{ from: 'orange', to: 'error' }}>Orange red</Button>
      <Button variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>Peach</Button>
    </>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Button variant="gradient" gradient={{ from: 'indigo', to: 'blue_light' }}>
        Indigo blue_light
      </Button>
      <Button variant="gradient" gradient={{ from: 'success', to: 'blue_light', deg: 105 }}>
        Lime green
      </Button>
      <Button variant="gradient" gradient={{ from: 'success', to: 'blue', deg: 60 }}>
        Teal blue
      </Button>
      <Button variant="gradient" gradient={{ from: 'orange', to: 'error' }}>
        Orange red
      </Button>
      <Button variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>
        Peach
      </Button>
    </Group>
  );
}

export const gradient: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
