import React from 'react';
import { useDisclosure } from '@k-link/hooks';
import { Modal, Group, Button } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';

const code = `
import { useDisclosure } from '@k-link/hooks';
import { Modal, Group, Button } from '@k-link/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Modal with scroll</p>);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Header is sticky">
        {content}
      </Modal>

      <Group position="center">
        <Button onClick={open}>Open modal</Button>
      </Group>
    </>
  );
}
`;

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Modal with scroll</p>);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Header is sticky">
        {content}
      </Modal>

      <Group position="center">
        <Button onClick={open}>Open modal</Button>
      </Group>
    </>
  );
}

export const overflow: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
