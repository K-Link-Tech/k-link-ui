import React, { useState } from 'react';
import { MantineDemo } from '@k-link/ds';

const getCode = (name: string) => `
import { useState } from 'react';
import { ${name} } from '@k-link/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <${name}
      type="range"
      label="Pick dates range"
      placeholder="Pick dates range"
      value={value}
      onChange={setValue}
      mx="auto"
      maw={400}
    />
  );
}
`;

function getDemo(Component: React.FC<any>) {
  return () => {
    const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
    return (
      <Component
        type="range"
        label="Pick dates range"
        placeholder="Pick dates range"
        value={value}
        onChange={setValue}
        mx="auto"
        maw={400}
      />
    );
  };
}

export function getPickerInputRangeDemo(Component: React.FC<any>): MantineDemo {
  return {
    type: 'demo',
    code: getCode(Component.displayName.replace('@k-link/dates/', '')),
    component: getDemo(Component),
  };
}
