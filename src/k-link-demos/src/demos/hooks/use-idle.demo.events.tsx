import React from 'react';
import { Group, Badge } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { useIdle } from '@k-link/hooks';

const eventsCode = `
import { Badge } from '@k-link/core';
import { useIdle } from '@k-link/hooks';

function Demo() {
  const idle = useIdle(2000, { events: ['click', 'touchstart'] });
  return <Badge color={idle ? 'blue' : 'success'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;

function EventsDemo() {
  const idle = useIdle(2000, { events: ['click', 'touchstart'] });

  return (
    <Group position="center">
      <Badge color={idle ? 'blue' : 'success'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>
    </Group>
  );
}

export const useIdleEvents: MantineDemo = {
  type: 'demo',
  code: eventsCode,
  component: EventsDemo,
};
