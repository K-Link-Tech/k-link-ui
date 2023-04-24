import React from 'react';
import { Tooltip, TooltipProps, Group, Button, Box } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import {
  FLOATING_ARROW_POSITION_DATA,
  FLOATING_POSITION_DATA,
} from '../../../shared/floating-position-data';

const Wrapper = (props: TooltipProps) => (
  <Box p="xl">
    <Group position="center">
      <Tooltip label="Tooltip test" {...props}>
        <Button variant="outline" size="xl">
          With tooltip
        </Button>
      </Tooltip>
    </Group>
  </Box>
);

const codeTemplate = (props: string) => `
import { Tooltip, Button } from '@k-link/core';

function Demo() {
  return (
    <Tooltip
      label="Tooltip test"
     ${props}
    >
      <Button variant="outline" size="xl">
        With tooltip
      </Button>
    </Tooltip>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configuratorProps: { multiline: 3 },
  configurator: [
    {
      name: 'color',
      type: 'color',
      initialValue: 'blue',
    },
    {
      name: 'position',
      type: 'select',
      data: FLOATING_POSITION_DATA,
      initialValue: 'top',
      defaultValue: 'top',
    },
    { name: 'withArrow', type: 'boolean', initialValue: true, defaultValue: false },
    {
      name: 'arrowPosition',
      type: 'select',
      data: FLOATING_ARROW_POSITION_DATA,
      initialValue: 'side',
      defaultValue: 'side',
    },
  ],
};
