import React from 'react';
import { Grid } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { ColWrapper as Col } from './_col-wrapper';

const code = `
import { Grid } from '@k-link/core';

function Demo() {
  return (
    <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
    </Grid>
  );
}
`;

function Demo() {
  return (
    <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
      <Col span={4}>1</Col>
      <Col span={4}>2</Col>
      <Col span={4}>3</Col>
    </Grid>
  );
}

export const gutter: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
