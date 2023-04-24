import React, { useRef } from 'react';
import { useIntersection } from '@k-link/hooks';
import { MantineDemo } from '@k-link/ds';
import { Text, Paper, Box } from '@k-link/core';

const code = `
import { useRef } from 'react';
import { useIntersection } from '@k-link/hooks';
import { Text, Paper, Box } from '@k-link/core';

function Demo() {
  const containerRef = useRef();
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  return (
    <Paper ref={containerRef} h={300} sx={{ overflowY: 'scroll' }}>
      <Box pt={260} pb={280}>
        <Paper
          ref={ref}
          p="xl"
          sx={(theme) => ({
            backgroundColor: entry?.isIntersecting ? theme.colors.success[9] : theme.colors.error[9],
            minWidth: '50%',
          })}
        >
          <Text c="#fff" weight={700}>
            {entry?.isIntersecting ? 'Fully visible' : 'Obscured'}
          </Text>
        </Paper>
      </Box>
    </Paper>
  );
}
`;

function Demo() {
  const containerRef = useRef();
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  return (
    <Paper ref={containerRef} h={300} sx={{ overflowY: 'scroll' }}>
      <Box pt={260} pb={280}>
        <Paper
          ref={ref}
          p="xl"
          sx={(theme) => ({
            backgroundColor: entry?.isIntersecting
              ? theme.colors.success[9]
              : theme.colors.error[9],
            minWidth: '50%',
          })}
        >
          <Text c="#fff" weight={700}>
            {entry?.isIntersecting ? 'Fully visible' : 'Obscured'}
          </Text>
        </Paper>
      </Box>
    </Paper>
  );
}

export const useIntersectionDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
