import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { MediaQuery, Text, em } from '@k-link/core';

const code = `
import { MediaQuery, Text } from '@k-link/core';

function Demo() {
  return (
    <MediaQuery
      query="(max-width: ${em(1200)}) and (min-width: ${em(800)})"
      styles={(theme) => ({
        fontSize: theme.fontSizes.lg,
        '&:hover': { backgroundColor: theme.fn.primaryColor(), color: theme.white },
      })}
    >
      <Text>(max-width: ${em(1200)}) and (min-width: ${em(800)}) breakpoints</Text>
    </MediaQuery>
  );
}
`;

function Demo() {
  return (
    <MediaQuery
      query={`(max-width: ${em(1200)}) and (min-width: ${em(800)})`}
      styles={(theme) => ({
        fontSize: theme.fontSizes.lg,
        '&:hover': { backgroundColor: theme.fn.primaryColor(), color: theme.white },
      })}
    >
      <Text>
        (max-width: {em(1200)}) and (min-width: {em(800)}) breakpoints
      </Text>
    </MediaQuery>
  );
}

export const theme: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
