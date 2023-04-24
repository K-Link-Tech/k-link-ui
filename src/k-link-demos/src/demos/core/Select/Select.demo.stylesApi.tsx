import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Select } from '@k-link/core';

const code = `
import { Select } from '@k-link/core';

function Demo() {
  return (
    <Select
      placeholder="Custom active styles"
      label="Custom active styles"
      defaultValue="Vue"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      styles={(theme) => ({
        item: {
          // applies styles to selected item
          '&[data-selected]': {
            '&, &:hover': {
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.success[9] : theme.colors.success[1],
              color: theme.colorScheme === 'dark' ? theme.white : theme.colors.success[9],
            },
          },

          // applies styles to hovered item (with mouse or keyboard)
          '&[data-hovered]': {},
        },
      })}
    />
  );
}
`;

function Demo() {
  return (
    <Select
      maw={360}
      mx="auto"
      placeholder="Custom active styles"
      label="Custom active styles"
      defaultValue="Vue"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      withinPortal
      styles={(theme) => ({
        item: {
          // applies styles to selected item
          '&[data-selected]': {
            '&, &:hover': {
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.success[9] : theme.colors.success[1],
              color: theme.colorScheme === 'dark' ? theme.white : theme.colors.success[9],
            },
          },

          // applies styles to hovered item (with mouse or keyboard)
          '&[data-hovered]': {},
        },
      })}
    />
  );
}

export const stylesApi: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
