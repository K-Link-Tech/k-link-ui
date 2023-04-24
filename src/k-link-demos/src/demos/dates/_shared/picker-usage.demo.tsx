import React, { useState } from 'react';
import { MantineDemo } from '@k-link/ds';
import { Group } from '@k-link/core';

const getCode = (name: string) => `
import { useState } from 'react';
import { Group } from '@k-link/core';
import { ${name} } from '@k-link/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <${name} value={value} onChange={setValue} />
    </Group>
  );
}
`;

function getDemo(Component: React.FC<any>) {
  return () => {
    const [value, setValue] = useState<Date | null>(null);
    return (
      <Group position="center">
        <Component value={value} onChange={setValue} />
      </Group>
    );
  };
}

export function getPickerUsageDemo(Component: React.FC<any>): MantineDemo {
  return {
    type: 'demo',
    code: getCode(Component.displayName.replace('@k-link/dates/', '')),
    component: getDemo(Component),
  };
}
