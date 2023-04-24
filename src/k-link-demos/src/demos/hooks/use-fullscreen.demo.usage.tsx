import React from 'react';
import { useFullscreen } from '@k-link/hooks';
import { MantineDemo } from '@k-link/ds';
import { Button, Group } from '@k-link/core';

const code = `
import { useFullscreen } from '@k-link/hooks';
import { Button } from '@k-link/core';

function Demo() {
  const { toggle, fullscreen } = useFullscreen();

  return (
    <Button onClick={toggle} color={fullscreen ? 'error' : 'blue'}>
      {fullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
    </Button>
  );
}
`;

function Demo() {
  const { toggle, fullscreen } = useFullscreen();

  return (
    <Group position="center">
      <Button onClick={toggle} color={fullscreen ? 'error' : 'blue'}>
        {fullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
      </Button>
    </Group>
  );
}

export const useFullscreenDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
