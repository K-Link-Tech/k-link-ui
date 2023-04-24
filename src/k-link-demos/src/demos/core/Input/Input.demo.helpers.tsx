import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Input } from '@k-link/core';

const code = `
import { Input } from '@k-link/core';

function Demo() {
  return (
    <>
      <Input.Label required>Input label</Input.Label>
      <Input.Description>Input description</Input.Description>
      <Input.Error>Input error</Input.Error>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Input.Label required>Input label</Input.Label>
      <Input.Description>Input description</Input.Description>
      <Input.Error>Input error</Input.Error>
    </>
  );
}

export const helpers: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
