import React from 'react';
import { Group, ScrollArea, Box } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { Content } from './_content';

const code = `
import { ScrollArea, Box } from '@k-link/core';

function Demo() {
  return (
    <Group position="center">
      <ScrollArea
        w={300}
        h={200}
        type="always"
        offsetScrollbars
        styles={(theme) => ({
          scrollbar: {
            '&, &:hover': {
              background:
                theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
            },

            '&[data-orientation="vertical"] .k-link-ScrollArea-thumb': {
              backgroundColor: theme.colors.error[6],
            },

            '&[data-orientation="horizontal"] .k-link-ScrollArea-thumb': {
              backgroundColor: theme.colors.blue[6],
            },
          },

          corner: {
            opacity: 1,
            background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          },
        })}
      >
        <Box w={600}>
          {/* ...content */}
        </Box>
      </ScrollArea>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <ScrollArea
        w={300}
        h={200}
        type="always"
        offsetScrollbars
        styles={(theme) => ({
          scrollbar: {
            '&, &:hover': {
              background:
                theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
            },

            '&[data-orientation="vertical"] .k-link-ScrollArea-thumb': {
              backgroundColor: theme.colors.error[6],
            },

            '&[data-orientation="horizontal"] .k-link-ScrollArea-thumb': {
              backgroundColor: theme.colors.blue[6],
            },
          },

          corner: {
            opacity: 1,
            background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          },
        })}
      >
        <Box w={600}>
          <Content />
        </Box>
      </ScrollArea>
    </Group>
  );
}

export const stylesApi: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
