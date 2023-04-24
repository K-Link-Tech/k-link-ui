import React from 'react';
import { IconArrowUp } from '@tabler/icons-react';
import { useWindowScroll } from '@k-link/hooks';
import { MantineDemo } from '@k-link/ds';
import { Button, Text, Transition, Affix, rem } from '@k-link/core';

const code = `
import { IconArrowUp } from '@tabler/icons-react';
import { useWindowScroll } from '@k-link/hooks';
import { Affix, Button, Text, Transition, rem } from '@k-link/core';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Text align="center">Affix is located at the bottom of the screen, scroll to see it</Text>
      <Affix position={{ bottom: rem(20), right: rem(20) }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftIcon={<IconArrowUp size="1rem" />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}
`;

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Text align="center">Affix is located at the bottom of the screen, scroll to see it</Text>
      <Affix position={{ bottom: rem(20), right: rem(20) }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftIcon={<IconArrowUp size="1rem" />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
