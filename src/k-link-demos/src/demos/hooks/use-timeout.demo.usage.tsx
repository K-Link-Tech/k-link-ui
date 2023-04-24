import React, { useState } from 'react';
import { Button, Text, Group } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { randomId, useTimeout } from '@k-link/hooks';

const code = `
import { useState } from 'react';
import { Button, Text, Group } from '@k-link/core';
import { randomId, useTimeout } from '@k-link/hooks';

function Demo() {
  const [value, setValue] = useState('');
  const { start, clear } = useTimeout(() => setValue(randomId()), 1000);

  return (
    <Group>
      <Button onClick={start} variant="outline">
        Start
      </Button>
      <Button onClick={clear} variant="outline" color="error">
        Clear
      </Button>
      <Text>Random value: {value}</Text>
    </Group>
  );
}
`;

function Demo() {
  const [value, setValue] = useState('');
  const { start, clear } = useTimeout(() => setValue(randomId()), 1000);

  return (
    <Group>
      <Button onClick={start} variant="outline">
        Start
      </Button>
      <Button onClick={clear} variant="outline" color="error">
        Clear
      </Button>
      <Text>Random value: {value}</Text>
    </Group>
  );
}

export const useTimeoutDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
