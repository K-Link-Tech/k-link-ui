import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Code, Group } from '@k-link/core';

const code = `
import { Code } from '@k-link/core';

function Demo() {
  return (
    <>
      <Code color="error">React.createElement()</Code>
      <Code color="success">React.createElement()</Code>
      <Code color="blue">React.createElement()</Code>
    </>
  );
}
`;

function Demo() {
  return (
    <Group>
      <Code color="error">React.createElement()</Code>
      <Code color="success">React.createElement()</Code>
      <Code color="blue">React.createElement()</Code>
    </Group>
  );
}

export const colors: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
