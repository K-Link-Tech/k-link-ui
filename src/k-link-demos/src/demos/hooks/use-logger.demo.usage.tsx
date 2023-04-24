import React, { useState } from 'react';
import { useLogger } from '@k-link/hooks';
import { MantineDemo } from '@k-link/ds';
import { Button, Group } from '@k-link/core';

const code = `
import { useState } from 'react';
import { useLogger } from '@k-link/hooks';
import { Button } from '@k-link/core';

function Demo() {
  const [count, setCount] = useState(0);
  useLogger('Demo', [{ count, hello: 'world' }]);
  return <Button onClick={() => setCount((c) => c + 1)}>Update state ({count})</Button>;
}
`;

function Demo() {
  const [count, setCount] = useState(0);
  useLogger('Demo', [{ count, hello: 'world' }]);

  return (
    <Group position="center">
      <Button onClick={() => setCount((c) => c + 1)}>Update state ({count})</Button>
    </Group>
  );
}

export const useLoggerDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
