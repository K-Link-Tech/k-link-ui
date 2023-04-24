import React from 'react';
import { useDisclosure } from '@k-link/hooks';
import { MantineDemo } from '@k-link/ds';
import { Popover, Text, Button } from '@k-link/core';

const code = `
import { useDisclosure } from '@k-link/hooks';
import { Popover, Text, Button } from '@k-link/core';

function Demo() {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <Popover width={200} position="bottom" withArrow shadow="md" opened={opened}>
      <Popover.Target>
        <Button onMouseEnter={open} onMouseLeave={close}>
          Hover to see popover
        </Button>
      </Popover.Target>
      <Popover.Dropdown sx={{ pointerEvents: 'none' }}>
        <Text size="sm">This popover is shown when user hovers the target element</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`;

function Demo() {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <Popover width={200} position="bottom" withArrow shadow="md" opened={opened}>
      <Popover.Target>
        <Button onMouseEnter={open} onMouseLeave={close}>
          Hover to see popover
        </Button>
      </Popover.Target>
      <Popover.Dropdown sx={{ pointerEvents: 'none' }}>
        <Text size="sm">This popover is shown when user hovers the target element</Text>
      </Popover.Dropdown>
    </Popover>
  );
}

export const hover: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
