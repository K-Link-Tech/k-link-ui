import React, { useState, useCallback } from 'react';
import { Button, Group } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { useEventListener } from '@k-link/hooks';

const code = `
import { useState, useCallback } from 'react';
import { Button, Group } from '@k-link/core';
import { useEventListener } from '@k-link/hooks';

function Demo() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + 1), []);
  const ref = useEventListener('click', increment);

  return (
    <Group position="center">
      <Button ref={ref}>Button clicks: {count}</Button>
    </Group>
  );
}
`;

function Demo() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + 1), []);
  const ref = useEventListener('click', increment);

  return (
    <Group position="center">
      <Button ref={ref}>Button clicks: {count}</Button>
    </Group>
  );
}

export const useEventListenerDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
