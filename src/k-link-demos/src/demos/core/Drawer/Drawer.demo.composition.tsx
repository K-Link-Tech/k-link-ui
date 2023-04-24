import React from 'react';
import { Drawer, Group, Button } from '@k-link/core';
import { useDisclosure } from '@k-link/hooks';
import { MantineDemo } from '@k-link/ds';

const code = `
import { useDisclosure } from '@k-link/hooks';
import { Drawer, Button, Group } from '@k-link/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer.Root opened={opened} onClose={close}>
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Drawer title</Drawer.Title>
            <Drawer.CloseButton />
          </Drawer.Header>
          <Drawer.Body>Drawer content</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

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
      <Drawer.Root opened={opened} onClose={close}>
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Drawer title</Drawer.Title>
            <Drawer.CloseButton />
          </Drawer.Header>
          <Drawer.Body>Drawer content</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Group position="center">
        <Button onClick={open}>Open drawer</Button>
      </Group>
    </>
  );
}

export const composition: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
