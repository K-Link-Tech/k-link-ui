import React from 'react';
import { Group, Button } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { useClipboard } from '@k-link/hooks';

const code = `
import { Button } from '@k-link/core';
import { useClipboard } from '@k-link/hooks';

function Demo() {
  const clipboard = useClipboard({ timeout: 500 });

  return (
    <Button
      color={clipboard.copied ? 'success' : 'blue'}
      onClick={() => clipboard.copy('Hello, world!')}
    >
      {clipboard.copied ? 'Copied' : 'Copy'}
    </Button>
  );
}`;

function Demo() {
  const clipboard = useClipboard({ timeout: 500 });

  return (
    <Group position="center">
      <Button
        color={clipboard.copied ? 'success' : 'blue'}
        onClick={() => clipboard.copy('Hello, world!')}
      >
        {clipboard.copied ? 'Copied' : 'Copy'}
      </Button>
    </Group>
  );
}

export const useClipboardDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
