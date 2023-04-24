import React from 'react';
import { Slider, rem } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import styled from '@emotion/styled';

const code = `
import { Slider } from '@k-link/core';
import styled from '@emotion/styled';

const StyledSlider = styled(Slider)\`
  & .k-link-Slider-bar {
    background-color: pink;
  }

  & .k-link-Slider-thumb {
    border-color: pink;
    background-color: white;
    width: ${rem(24)};
    height: ${rem(24)};
  }
\`;

function Demo() {
  return <StyledSlider defaultValue={40} />;
}
`;

const StyledSlider = styled(Slider)`
  & .k-link-Slider-bar {
    background-color: pink;
  }

  & .k-link-Slider-thumb {
    border-color: pink;
    background-color: white;
    width: ${rem(24)};
    height: ${rem(24)};
  }
`;

function Demo() {
  return <StyledSlider defaultValue={40} />;
}

export const stylesApi: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
