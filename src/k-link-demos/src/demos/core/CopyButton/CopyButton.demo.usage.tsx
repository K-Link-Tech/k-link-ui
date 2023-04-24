import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Group, CopyButton, Button } from '@k-link/core';

const code = `
import { CopyButton, Button } from '@k-link/core';

function Demo() {
  return (
    <CopyButton value="https://k-link.dev">
      {({ copied, copy }) => (
        <Button color={copied ? 'success' : 'blue'} onClick={copy}>
          {copied ? 'Copied url' : 'Copy url'}
        </Button>
      )}
    </CopyButton>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <CopyButton value="https://k-link.dev">
        {({ copied, copy }) => (
          <Button color={copied ? 'success' : 'blue'} onClick={copy}>
            {copied ? 'Copied url' : 'Copy url'}
          </Button>
        )}
      </CopyButton>
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
