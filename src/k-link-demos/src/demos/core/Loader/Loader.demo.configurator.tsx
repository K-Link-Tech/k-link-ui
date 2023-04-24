import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Loader, LoaderProps, Group } from '@k-link/core';

function Wrapper(props: LoaderProps) {
  return (
    <Group position="center">
      <Loader {...props} />
    </Group>
  );
}

const codeTemplate = (props: string) => `
import { Loader } from '@k-link/core';

function Demo() {
  return <Loader${props} />;
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
    {
      name: 'variant',
      type: 'segmented',
      initialValue: 'oval',
      defaultValue: 'oval',
      data: [
        { value: 'oval', label: 'Oval' },
        { value: 'bars', label: 'Bars' },
        { value: 'dots', label: 'Dots' },
      ],
    },
  ],
};
