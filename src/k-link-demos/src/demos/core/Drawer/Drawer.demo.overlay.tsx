import React from 'react';
import { Drawer, Group, Button } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { useDisclosure } from '@k-link/hooks';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';

const code = `
import { useDisclosure } from '@k-link/hooks';
import { Drawer, Group, Button } from '@k-link/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{ opacity: 0.5, blur: 4 }}
      >
        {/* Drawer content */}
      </Drawer>

      <Group position="center">
        <Button onClick={open}>Open drawer</Button>
      </Group>
    </>
  );
}
`;

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{ opacity: 0.5, blur: 4 }}
      >
        <AuthenticationForm noPadding noShadow />
      </Drawer>

      <Group position="center">
        <Button onClick={open}>Open drawer</Button>
      </Group>
    </>
  );
}

export const overlay: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
