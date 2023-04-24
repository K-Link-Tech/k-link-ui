import React from 'react';
import {
  itSupportsSystemProps,
  checkAccessibility,
  itSupportsFocusEvents,
  itSupportsProviderVariant,
  itSupportsProviderSize,
  itSupportsInputProps,
} from '@k-link/tests';
import { TimeInput, TimeInputProps } from './TimeInput';

const defaultProps: TimeInputProps = {
  label: 'test-label',
};

describe('@k-link/core/TimeInput', () => {
  checkAccessibility([<TimeInput label="test-input" />, <TimeInput aria-label="test-input" />]);
  itSupportsInputProps(TimeInput, defaultProps, 'TimeInput');
  itSupportsFocusEvents(TimeInput, defaultProps, 'input');
  itSupportsProviderVariant(TimeInput, defaultProps, 'TimeInput', ['root', 'input', 'label']);
  itSupportsProviderSize(TimeInput, defaultProps, 'TimeInput', ['root', 'input', 'label']);
  itSupportsSystemProps({
    component: TimeInput,
    props: defaultProps,
    refType: HTMLInputElement,
    displayName: '@k-link/dates/TimeInput',
    othersSelector: 'input',
    providerName: 'TimeInput',
  });
});
