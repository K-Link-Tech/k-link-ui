import React from 'react';
import { itSupportsSystemProps } from '@k-link/tests';
import { SliderRoot, SliderRootProps } from './SliderRoot';

const defaultProps: SliderRootProps = {
  size: 10,
  children: <div />,
  disabled: false,
  variant: '',
};

describe('@k-link/core/SliderRoot', () => {
  itSupportsSystemProps({
    component: SliderRoot,
    props: defaultProps,
    displayName: '@k-link/core/SliderRoot',
    refType: HTMLDivElement,
  });
});
