import React from 'react';
import { Button, Group } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { useToggle, upperFirst } from '@k-link/hooks';

const code = `
import { Button } from '@k-link/core';
import { useToggle } from '@k-link/hooks';

function Demo() {
  const [value, toggle] = useToggle(['blue', 'orange', 'blue_light', 'success']);

  return (
    <Button color={value} onClick={() => toggle()}>
      {value}
    </Button>
  );
}
`;

function Demo() {
  const [value, toggle] = useToggle(['blue', 'orange', 'blue_light', 'success']);

  return (
    <Group position="center">
      <Button color={value} onClick={() => toggle()}>
        {upperFirst(value)}
      </Button>
    </Group>
  );
}

export const useToggleDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
