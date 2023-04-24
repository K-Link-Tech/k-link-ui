import React from 'react';
import { Link } from 'gatsby';
import { Text, Box, Anchor } from '@k-link/core';
import { Prism } from '@k-link/prism';

const code = `
import { Text } from '@k-link/core';

function Demo() {
  return (
    <Text
      sx={(theme) => ({
        background: theme.fn.linearGradient(24, '#000', '#fff'),

        [theme.fn.smallerThan('sm')]: {
          color: theme.fn.rgba('#fff', 0.5),
        },
      })}
    >
      My custom text
    </Text>
  );
}
`;

export function FunctionsDemo() {
  return (
    <Box pt="xl">
      <Text mb="sm">
        You can use{' '}
        <Anchor component={Link} to="/theming/functions/">
          theme functions
        </Anchor>{' '}
        anywhere where Klink UI theme is available:
      </Text>
      <Prism
        language="tsx"
        radius="md"
        noCopy
        styles={(theme) => ({
          code: {
            backgroundColor:
              theme.colorScheme === 'dark' ? `${theme.colors.dark[7]} !important` : undefined,
          },
        })}
      >
        {code}
      </Prism>
    </Box>
  );
}
