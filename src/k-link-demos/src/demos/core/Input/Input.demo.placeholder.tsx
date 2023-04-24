import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Input } from '@k-link/core';

const code = `
import { Input } from '@k-link/core';

function Demo() {
  return (
    <Input component="button">
      <Input.Placeholder>Placeholder content</Input.Placeholder>
    </Input>
  );
}
`;

function Demo() {
  return (
    <Input component="button">
      <Input.Placeholder>Placeholder content</Input.Placeholder>
    </Input>
  );
}

export const placeholder: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
