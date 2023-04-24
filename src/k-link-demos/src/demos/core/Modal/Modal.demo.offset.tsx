import React from 'react';
import { Modal, Group, Button } from '@k-link/core';
import { useDisclosure } from '@k-link/hooks';
import { MantineDemo } from '@k-link/ds';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';

const code = `
import { useDisclosure } from '@k-link/hooks';
import { Modal, Button, Group } from '@k-link/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" yOffset="1vh" xOffset={0}>
        {/* Modal content */}
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

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" yOffset="1vh" xOffset={0}>
        <AuthenticationForm noShadow noPadding />
      </Modal>

      <Group position="center">
        <Button onClick={open}>Open modal</Button>
      </Group>
    </>
  );
}

export const offset: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
