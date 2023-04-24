import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Button, ButtonGroupProps, Group } from '@k-link/core';

const codeTemplate = (props: string) => `
import { Button } from '@k-link/core';

function Demo() {
  return (
    <Button.Group${props}>
      <Button variant="default">First</Button>
      <Button variant="default">Second</Button>
      <Button variant="default">Third</Button>
    </Button.Group>
  );
}
`;

function Wrapper(props: ButtonGroupProps) {
  return (
    <Group position="center">
      <Button.Group {...props}>
        <Button variant="default">First</Button>
        <Button variant="default">Second</Button>
        <Button variant="default">Third</Button>
      </Button.Group>
    </Group>
  );
}

export const group: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: 'orientation',
      type: 'segmented',
      data: [
        { value: 'horizontal', label: 'Horizontal' },
        { value: 'vertical', label: 'Vertical' },
      ],
      initialValue: 'horizontal',
      defaultValue: 'horizontal',
    },
  ],
};
