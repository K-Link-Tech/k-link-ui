import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Kbd } from '@k-link/core';

const code = `
import { Kbd } from '@k-link/core';

function Demo() {
  return (
    <>
      <Kbd>⌘</Kbd> + <Kbd>shift</Kbd> + <Kbd>M</Kbd>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Kbd>⌘</Kbd> + <Kbd>shift</Kbd> + <Kbd>M</Kbd>
    </>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
