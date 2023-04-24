import React from 'react';
import { Group, Badge } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { useIdle } from '@k-link/hooks';

const code = `
import { Badge } from '@k-link/core';
import { useIdle } from '@k-link/hooks';

function Demo() {
  const idle = useIdle(2000);
  return <Badge color={idle ? 'blue' : 'success'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;

function Demo() {
  const idle = useIdle(2000);

  return (
    <Group position="center">
      <Badge color={idle ? 'blue' : 'success'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>
    </Group>
  );
}

export const useIdleDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
