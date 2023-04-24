import React from 'react';
import { Modal, Group, Button, useMantineTheme } from '@k-link/core';
import { useDisclosure } from '@k-link/hooks';
import { MantineDemo } from '@k-link/ds';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';

const code = `
import { useDisclosure } from '@k-link/hooks';
import { Modal, useMantineTheme } from '@k-link/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
      >
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
  const theme = useMantineTheme();

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
      >
        <AuthenticationForm noPadding noShadow />
      </Modal>

      <Group position="center">
        <Button onClick={open}>Open modal</Button>
      </Group>
    </>
  );
}

export const overlay: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
