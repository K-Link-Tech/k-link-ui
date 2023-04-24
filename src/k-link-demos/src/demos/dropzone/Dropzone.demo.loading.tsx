import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { BaseDemo } from './_base';

const code = `
import { Dropzone } from '@k-link/dropzone';

function Demo() {
  return (
    <Dropzone loading>
      {/* children */}
    </Dropzone>
  );
}
`;

function Demo() {
  return <BaseDemo loading />;
}

export const loading: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
