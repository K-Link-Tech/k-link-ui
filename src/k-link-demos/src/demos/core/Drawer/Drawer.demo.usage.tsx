import React from 'react';
import { Drawer, Button, Group } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { useDisclosure } from '@k-link/hooks';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';

const code = `
import { useDisclosure } from '@k-link/hooks';
import { Drawer, Button, Group } from '@k-link/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Authentication">
        {/* Drawer content */}
      </Drawer>

      <Group position="center">
        <Button onClick={open}>Open Drawer</Button>
      </Group>
    </>
  );
}
`;

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Authentication">
        <AuthenticationForm noPadding noShadow />
      </Drawer>

      <Group position="center">
        <Button onClick={open}>Open Drawer</Button>
      </Group>
    </>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
