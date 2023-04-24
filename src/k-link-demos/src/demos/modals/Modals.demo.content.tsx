import React from 'react';
import { TextInput, Button, Group } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { modals } from '@k-link/modals';

const code = `
import { TextInput, Button, Group } from '@k-link/core';
import { modals } from '@k-link/modals';

function Demo() {
  return (
    <Group position="center">
      <Button
        onClick={() => {
          modals.open({
            title: 'Subscribe to newsletter',
            children: (
              <>
                <TextInput label="Your email" placeholder="Your email" data-autofocus />
                <Button fullWidth onClick={modals.closeAll} mt="md">
                  Submit
                </Button>
              </>
            ),
          });
        }}
      >
        Open content modal
      </Button>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Button
        onClick={() => {
          modals.open({
            title: 'Subscribe to newsletter',
            children: (
              <>
                <TextInput label="Your email" placeholder="Your email" data-autofocus />
                <Button fullWidth onClick={modals.closeAll} mt="md">
                  Submit
                </Button>
              </>
            ),
          });
        }}
      >
        Open content modal
      </Button>
    </Group>
  );
}

export const content: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
