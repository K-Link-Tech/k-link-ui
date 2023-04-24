import React from 'react';
import {
  checkAccessibility,
  itConnectsLabelAndInput,
  itSupportsSystemProps,
  itSupportsWrapperProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@k-link/tests';
import { Radio, RadioProps } from './Radio';
import { RadioGroup } from './RadioGroup/RadioGroup';

const defaultProps: RadioProps = {
  value: 'test-radio',
  label: 'test-radio-label',
};

describe('@k-link/core/Radio', () => {
  itConnectsLabelAndInput(Radio, defaultProps);
  itSupportsWrapperProps(Radio, defaultProps);
  itSupportsProviderVariant(Radio, defaultProps, 'Radio');
  itSupportsProviderSize(Radio, defaultProps, 'Radio');
  checkAccessibility([<Radio {...defaultProps} />]);
  itSupportsSystemProps({
    component: Radio,
    props: defaultProps,
    displayName: '@k-link/core/Radio',
    refType: HTMLInputElement,
    othersSelector: 'input',
    providerName: 'Radio',
  });

  it('exposes RadioGroup as a static component', () => {
    expect(Radio.Group).toBe(RadioGroup);
  });
});
