import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Divider } from '@k-link/core';

const code = `
import { Divider } from '@k-link/core';

function Demo() {
  return (
    <>
      <Divider my="sm" />
      <Divider my="sm" variant="dashed" />
      <Divider my="sm" variant="dotted" />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Divider my="sm" />
      <Divider my="sm" variant="dashed" />
      <Divider my="sm" variant="dotted" />
    </>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
