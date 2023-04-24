import React from 'react';
import { useWindowScroll } from '@k-link/hooks';
import { MantineDemo } from '@k-link/ds';
import { Button, Text, Group } from '@k-link/core';

const code = `
import { useWindowScroll } from '@k-link/hooks';
import { Button, Text, Group } from '@k-link/core';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Group position="center">
      <Text>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </Text>
      <Button onClick={() => scrollTo({ y: 0 })}>Scroll to top</Button>
    </Group>
  );
}
`;

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Group position="center">
      <Text>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </Text>
      <Button onClick={() => scrollTo({ y: 0 })}>Scroll to top</Button>
    </Group>
  );
}

export const useWindowScrollDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
