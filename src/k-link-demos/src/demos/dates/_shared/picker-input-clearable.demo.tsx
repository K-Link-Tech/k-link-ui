import React from 'react';
import { MantineDemo } from '@k-link/ds';

const getCode = (name: string) => `
import { ${name} } from '@k-link/dates';

function Demo() {
  return (
    <${name}
      clearable
      defaultValue={new Date()}
      label="Pick date"
      placeholder="Pick date"
      mx="auto"
      maw={400}
    />
  );
}
`;

function getDemo(Component: React.FC<any>) {
  return () => (
    <Component
      clearable
      defaultValue={new Date()}
      label="Pick date"
      placeholder="Pick date"
      mx="auto"
      maw={400}
    />
  );
}

export function getPickerInputClearableDemo(Component: React.FC<any>): MantineDemo {
  return {
    type: 'demo',
    code: getCode(Component.displayName.replace('@k-link/dates/', '')),
    component: getDemo(Component),
  };
}
