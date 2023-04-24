import React from 'react';
import { useScrollIntoView } from '@k-link/hooks';
import { MantineDemo } from '@k-link/ds';
import { Button, Text, Group, Paper, Box } from '@k-link/core';

const code = `
import { useScrollIntoView } from '@k-link/hooks';
import { Button, Text, Group, Paper, Box } from '@k-link/core';

function Demo() {
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView<
    HTMLDivElement,
    HTMLDivElement
  >();

  return (
    <Group position="center">
      <Paper ref={scrollableRef} h={300} sx={{ overflowY: 'scroll', flex: 1 }}>
        <Box pt={260} pb={450}>
          <Paper
            ref={targetRef}
            p="xl"
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
              width: '100%',
            })}
          >
            <Text>Scroll me into view</Text>
          </Paper>
        </Box>
      </Paper>
      <Button onClick={() => scrollIntoView()}>Scroll to target</Button>
    </Group>
  );
}
`;

function Demo() {
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView<
    HTMLDivElement,
    HTMLDivElement
  >();

  return (
    <Group position="center">
      <Paper ref={scrollableRef} h={300} sx={{ overflowY: 'scroll', flex: 1 }}>
        <Box pt={260} pb={450}>
          <Paper
            ref={targetRef}
            p="xl"
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
              width: '100%',
            })}
          >
            <Text>Scroll me into view</Text>
          </Paper>
        </Box>
      </Paper>
      <Button onClick={() => scrollIntoView()}>Scroll to target</Button>
    </Group>
  );
}

export const useScrollIntoViewParent: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
