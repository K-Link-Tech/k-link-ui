import React, { useState } from 'react';
import { useMantineTheme, Group, Text, rem } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { useMove } from '@k-link/hooks';

const code = `
import { useState } from 'react';
import { useMantineTheme, Group, Text, rem } from '@k-link/core';
import { useMove } from '@k-link/hooks';

function Demo() {
  const theme = useMantineTheme();
  const [value, setValue] = useState(0.2);
  const { ref } = useMove(({ x }) => setValue(x));

  return (
    <>
      <Group position="center">
        <div
          ref={ref}
          style={{
            width: rem(400),
            height: rem(16),
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
            position: 'relative',
          }}
        >
          {/* Filled bar */}
          <div
            style={{
              width: \`\${value * 100}%\`,
              height: rem(16),
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.blue[9] : theme.colors.blue[2],
            }}
          />

          {/* Thumb */}
          <div
            style={{
              position: 'absolute',
              left: \`calc(\${value * 100}% - \${rem(8)})\`,
              top: 0,
              width: rem(16),
              height: rem(16),
              backgroundColor: theme.colors.blue[7],
            }}
          />
        </div>
      </Group>

      <Text align="center" mt="sm">
        Value: {Math.round(value * 100)}
      </Text>
    </>
  );
}`;

function Demo() {
  const theme = useMantineTheme();
  const [value, setValue] = useState(0.2);
  const { ref } = useMove(({ x }) => setValue(x));

  return (
    <>
      <Group position="center">
        <div
          ref={ref}
          style={{
            width: rem(400),
            height: rem(16),
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
            position: 'relative',
          }}
        >
          {/* Filled bar */}
          <div
            style={{
              width: `${value * 100}%`,
              height: rem(16),
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.blue[9] : theme.colors.blue[2],
            }}
          />

          {/* Thumb */}
          <div
            style={{
              position: 'absolute',
              left: `calc(${value * 100}% - ${rem(8)})`,
              top: 0,
              width: rem(16),
              height: rem(16),
              backgroundColor: theme.colors.blue[7],
            }}
          />
        </div>
      </Group>

      <Text align="center" mt="sm">
        Value: {Math.round(value * 100)}
      </Text>
    </>
  );
}

export const useMoveHorizontal: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
