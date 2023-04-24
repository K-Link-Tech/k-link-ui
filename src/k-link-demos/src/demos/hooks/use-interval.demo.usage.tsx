import React, { useState, useEffect } from 'react';
import { Stack, Button, Text } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { useInterval } from '@k-link/hooks';

const code = `
import { useState, useEffect } from 'react';
import { useInterval } from '@k-link/hooks';
import { Group, Button, Text } from '@k-link/core';

function Demo() {
  const [seconds, setSeconds] = useState(0);
  const interval = useInterval(() => setSeconds((s) => s + 1), 1000);

  useEffect(() => {
    interval.start();
    return interval.stop;
  }, []);

  return (
    <Stack align="center">
      <Text>Page loaded <b>{seconds}</b> seconds ago</Text>
      <Button
        onClick={interval.toggle}
        color={interval.active ? 'error' : 'success'}
        variant="outline"
      >
        {interval.active ? 'Stop' : 'Start'} counting
      </Button>
    </Stack>
  );
}
`;

function Demo() {
  const [seconds, setSeconds] = useState(0);
  const interval = useInterval(() => setSeconds((s) => s + 1), 1000);

  useEffect(() => {
    interval.start();
    return interval.stop;
  }, []);

  return (
    <Stack align="center">
      <Text>
        Page loaded <b>{seconds}</b> seconds ago
      </Text>
      <Button
        onClick={interval.toggle}
        color={interval.active ? 'error' : 'success'}
        variant="outline"
      >
        {interval.active ? 'Stop' : 'Start'} counting
      </Button>
    </Stack>
  );
}

export const useIntervalDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
