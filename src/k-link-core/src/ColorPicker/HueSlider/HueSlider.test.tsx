import React from 'react';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsProviderSize,
  itSupportsProviderVariant,
} from '@k-link/tests';
import { HueSlider, HueSliderProps } from './HueSlider';

const defaultProps: HueSliderProps = {
  value: 150,
  onChange: () => {},
  onChangeEnd: () => {},
  size: 'sm',
};

describe('@k-link/core/HueSlider', () => {
  checkAccessibility([<HueSlider {...defaultProps} aria-label="test-label" />]);
  itSupportsProviderSize(HueSlider, defaultProps, 'HueSlider', 'slider');
  itSupportsProviderVariant(HueSlider, defaultProps, 'HueSlider', 'slider');
  itSupportsSystemProps({
    component: HueSlider,
    props: defaultProps,
    displayName: '@k-link/core/HueSlider',
    refType: HTMLDivElement,
    providerName: 'HueSlider',
  });
});
