import React from 'react';
import { useOs } from '@k-link/hooks';
import { MantineDemo } from '@k-link/ds';
import { Text } from '@k-link/core';

const code = `
import { useOs } from '@k-link/hooks';

function Demo() {
  const os = useOs();
  return <>Your os is <b>{os}</b></>;
}
`;

function Demo() {
  const os = useOs();
  return (
    <Text align="center">
      Your os is <b>{os}</b>
    </Text>
  );
}

export const useOsDemo: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
