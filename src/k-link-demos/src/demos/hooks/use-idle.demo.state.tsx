import React from 'react';
import { Group, Badge } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { useIdle } from '@k-link/hooks';

const initialStateCode = `
import { Badge } from '@k-link/core';
import { useIdle } from '@k-link/hooks';

function Demo() {
  const idle = useIdle(2000, { initialState: false });
  return <Badge color={idle ? 'blue' : 'success'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;

function InitialStateDemo() {
  const idle = useIdle(2000, { initialState: false });

  return (
    <Group position="center">
      <Badge color={idle ? 'blue' : 'success'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>
    </Group>
  );
}

export const useIdleInitialState: MantineDemo = {
  type: 'demo',
  code: initialStateCode,
  component: InitialStateDemo,
};
