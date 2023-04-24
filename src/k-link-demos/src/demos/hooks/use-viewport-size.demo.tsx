import React from 'react';
import { useViewportSize } from '@k-link/hooks';
import { MantineDemo } from '@k-link/ds';
import { Text } from '@k-link/core';

const code = `
import { useViewportSize } from '@k-link/hooks';

function Demo() {
  const { height, width } = useViewportSize();
  return <>Width: {width}, height: {height}</>;
}
`;

function Demo() {
  const { height, width } = useViewportSize();

  return (
    <Text align="center">
      Width: {width}, height: {height}
    </Text>
  );
}

export const useViewportSizeDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
