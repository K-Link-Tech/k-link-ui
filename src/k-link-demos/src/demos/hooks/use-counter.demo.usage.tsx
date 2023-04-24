import React from 'react';
import { Group, Button, Text } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { useCounter } from '@k-link/hooks';

const code = `
import { Group, Button, Text } from '@k-link/core';
import { useCounter } from '@k-link/hooks';

function Demo() {
  const [count, handlers] = useCounter(0, { min: 0, max: 10 });

  return (
    <>
      <Text>Count: {count}</Text>
      <Group position="center">
        <Button onClick={handlers.increment}>Increment</Button>
        <Button onClick={handlers.decrement}>Decrement</Button>
        <Button onClick={handlers.reset}>Reset</Button>
        <Button onClick={() => handlers.set(5)}>Set 5</Button>
      </Group>
    </>
  );
}
`;

function Demo() {
  const [count, handlers] = useCounter(0, { min: 0, max: 10 });

  return (
    <>
      <Text size="md" align="center" py="xs">
        Count: {count}
      </Text>
      <Group position="center">
        <Button variant="outline" size="xs" onClick={handlers.increment}>
          Increment
        </Button>
        <Button variant="outline" size="xs" onClick={handlers.decrement}>
          Decrement
        </Button>
        <Button variant="outline" size="xs" onClick={handlers.reset}>
          Reset
        </Button>
        <Button variant="outline" size="xs" onClick={() => handlers.set(5)}>
          Set 5
        </Button>
      </Group>
    </>
  );
}

export const useCounterDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
