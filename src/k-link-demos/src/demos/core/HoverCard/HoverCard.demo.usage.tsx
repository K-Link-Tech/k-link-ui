import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { HoverCard, Button, Text, Group } from '@k-link/core';

const code = `
import { HoverCard, Button, Text, Group } from '@k-link/core';

function Demo() {
  return (
    <Group position="center">
      <HoverCard width={280} shadow="md">
        <HoverCard.Target>
          <Button>Hover to reveal the card</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">
            Hover card is revealed when user hovers over target element, it will be hidden once
            mouse is not over both target and dropdown elements
          </Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}

`;

function Demo() {
  return (
    <Group position="center">
      <HoverCard width={280} shadow="md">
        <HoverCard.Target>
          <Button>Hover to reveal the card</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">
            Hover card is revealed when user hovers over target element, it will be hidden once
            mouse is not over both target and dropdown elements
          </Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
