import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Pagination } from '@k-link/core';

function Demo() {
  return <Pagination total={10} position="center" />;
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
};
