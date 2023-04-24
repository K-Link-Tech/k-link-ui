import React from 'react';
import { Group, CopyButton, ActionIcon, Tooltip } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { IconCopy, IconCheck } from '@tabler/icons-react';

const code = `
import { CopyButton, ActionIcon, Tooltip } from '@k-link/core';
import { IconCopy, IconCheck } from '@tabler/icons-react';

function Demo() {
  return (
    <CopyButton value="https://k-link.dev" timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
          <ActionIcon color={copied ? 'success' : 'gray'} onClick={copy}>
            {copied ? <IconCheck size="1rem" /> : <IconCopy size="1rem" />}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <CopyButton value="https://k-link.dev" timeout={2000}>
        {({ copied, copy }) => (
          <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
            <ActionIcon color={copied ? 'success' : 'gray'} onClick={copy}>
              {copied ? <IconCheck size="1rem" /> : <IconCopy size="1rem" />}
            </ActionIcon>
          </Tooltip>
        )}
      </CopyButton>
    </Group>
  );
}

export const tooltip: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
