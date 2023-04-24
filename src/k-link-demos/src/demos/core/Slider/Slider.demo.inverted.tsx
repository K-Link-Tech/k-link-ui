import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { RangeSlider, Slider } from '@k-link/core';

const code = `
import { RangeSlider, Slider } from '@k-link/core';

function Demo() {
  return (
    <>
      <Slider inverted defaultValue={80} py="xl" />
      <RangeSlider inverted defaultValue={[40, 80]} py="xl" />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Slider inverted defaultValue={80} py="xl" />
      <RangeSlider inverted defaultValue={[40, 80]} py="xl" />
    </>
  );
}

export const inverted: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
