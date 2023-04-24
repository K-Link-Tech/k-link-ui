import React from 'react';
import { Grid } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { ColWrapper as Col } from './_col-wrapper';

const code = `
import { Grid } from '@k-link/core';

function Demo() {
  return (
    <Grid>
      <Col span="content">fit content</Col>
      <Col span={6}>2</Col>
    </Grid>
  );
}
`;

function Demo() {
  return (
    <Grid>
      <Col span="content">fit content</Col>
      <Col span={6}>2</Col>
    </Grid>
  );
}

export const content: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
