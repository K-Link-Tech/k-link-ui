import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { useMantineTheme, ColorSwatch, Group } from '@k-link/core';

const code = `
import { ColorSwatch, Group, useMantineTheme } from '@k-link/core';

function Demo() {
  const theme = useMantineTheme();
  const swatches = Object.keys(theme.colors).map((color) => (
    <ColorSwatch key={color} color={theme.colors[color][6]} />
  ));

  return (
    <Group position="center" spacing="xs">
      {swatches}
    </Group>
  );
}
`;

function Demo() {
  const theme = useMantineTheme();
  const swatches = Object.keys(theme.colors).map((color) => (
    <ColorSwatch key={color} color={theme.colors[color][6]} />
  ));

  return (
    <Group position="center" spacing="xs">
      {swatches}
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
