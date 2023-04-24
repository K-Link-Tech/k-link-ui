import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Tabs } from '@k-link/core';

const code = `
import { Tabs } from '@k-link/core';

function Demo() {
  return (
    <Tabs defaultValue="chat" activateTabWithKeyboard={false}>
      {/* ...content */}
    </Tabs>
  );
}
`;

function Demo() {
  return (
    <Tabs defaultValue="chat" activateTabWithKeyboard={false}>
      <Tabs.List>
        <Tabs.Tab value="chat">Chat</Tabs.Tab>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="account">Account</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="chat" pt="xs">
        Chat panel
      </Tabs.Panel>
      <Tabs.Panel value="gallery" pt="xs">
        Gallery panel
      </Tabs.Panel>
      <Tabs.Panel value="account" pt="xs">
        Account panel
      </Tabs.Panel>
    </Tabs>
  );
}

export const keyboardActivation: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
