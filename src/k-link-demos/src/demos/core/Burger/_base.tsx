import React from 'react';
import { useDisclosure } from '@k-link/hooks';
import { Burger } from '@k-link/core';

export function DemoBase(
  props: Omit<React.ComponentPropsWithoutRef<typeof Burger>, 'opened' | 'onChange'>
) {
  const [opened, { toggle }] = useDisclosure(false);
  return <Burger m="xs" opened={opened} onClick={toggle} {...props} />;
}
