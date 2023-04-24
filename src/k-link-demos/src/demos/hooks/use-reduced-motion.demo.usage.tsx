import React from 'react';
import { Group, Badge } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { useReducedMotion } from '@k-link/hooks';

const code = `
import { Badge } from '@k-link/core';
import { useReducedMotion } from '@k-link/hooks';

function Demo() {
  const reduceMotion = useReducedMotion();

  return (
    <Badge
      color={reduceMotion ? 'error' : 'success'}
      style={{ transitionDuration: reduceMotion ? '0ms' : '200ms' }}
      variant="filled"
    >
      {reduceMotion ? 'You prefer to reduce motion' : 'You prefer not to reduce motion'}
    </Badge>
  );
}`;

function Demo() {
  const reduceMotion = useReducedMotion();
  return (
    <Group position="center">
      <Badge
        color={reduceMotion ? 'error' : 'success'}
        style={{ transitionDuration: reduceMotion ? '0ms' : '200ms' }}
        variant="filled"
      >
        {reduceMotion ? 'You prefer to reduce motion' : 'You prefer not to reduce motion'}
      </Badge>
    </Group>
  );
}

export const useReducedMotionDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
