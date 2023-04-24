import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Input, InputBase } from '@k-link/core';

const code = `
import { Input, InputBase } from '@k-link/core';

function Demo() {
  return (
    <InputBase component="button" label="Input base button with placeholder">
      <Input.Placeholder>Placeholder content</Input.Placeholder>
    </InputBase>
  );
}
`;

function Demo() {
  return (
    <InputBase component="button" label="Input base button with placeholder">
      <Input.Placeholder>Placeholder content</Input.Placeholder>
    </InputBase>
  );
}

export const basePlaceholder: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
