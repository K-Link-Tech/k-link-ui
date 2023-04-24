import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Dialog, Group, Button, TextInput, Text } from '@k-link/core';
import { useDisclosure } from '@k-link/hooks';

const code = `
import { useDisclosure } from '@k-link/hooks';
import { Dialog, Group, Button, TextInput, Text } from '@k-link/core';

function Demo() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <Group position="center">
        <Button onClick={toggle}>Toggle dialog</Button>
      </Group>

      <Dialog opened={opened} withCloseButton onClose={close} size="lg" radius="md">
        <Text size="sm" mb="xs" weight={500}>
          Subscribe to email newsletter
        </Text>

        <Group align="flex-end">
          <TextInput placeholder="hello@gluesticker.com" sx={{ flex: 1 }} />
          <Button onClick={close}>Subscribe</Button>
        </Group>
      </Dialog>
    </>
  );
}
`;

function Demo() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <Group position="center">
        <Button onClick={toggle}>Toggle dialog</Button>
      </Group>

      <Dialog opened={opened} withCloseButton onClose={close} size="lg" radius="md">
        <Text size="sm" mb="xs" weight={500}>
          Subscribe to email newsletter
        </Text>

        <Group align="flex-end">
          <TextInput placeholder="hello@gluesticker.com" sx={{ flex: 1 }} />
          <Button onClick={close}>Subscribe</Button>
        </Group>
      </Dialog>
    </>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
