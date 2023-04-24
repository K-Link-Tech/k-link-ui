import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsWrapperProps,
  itConnectsLabelAndInput,
  itSupportsFocusEvents,
  itHandlesBooleanState,
  itSupportsProviderSize,
  itSupportsProviderVariant,
} from '@k-link/tests';
import { Checkbox, CheckboxProps } from './Checkbox';

const defaultProps: CheckboxProps = {
  label: 'test-label',
};

describe('@k-link/core/Checkbox', () => {
  itSupportsWrapperProps(Checkbox, defaultProps);
  itConnectsLabelAndInput(Checkbox, defaultProps);
  itHandlesBooleanState(Checkbox, defaultProps);
  itSupportsProviderSize(Checkbox, defaultProps, 'Checkbox');
  itSupportsProviderVariant(Checkbox, defaultProps, 'Checkbox');
  itSupportsFocusEvents(Checkbox, defaultProps, 'input');
  checkAccessibility([
    <Checkbox aria-label="Checkbox without label" />,
    <Checkbox label="With label" />,
    <Checkbox id="with-id" label="With id" />,
  ]);

  itSupportsSystemProps({
    component: Checkbox,
    props: defaultProps,
    displayName: '@k-link/core/Checkbox',
    refType: HTMLInputElement,
    othersSelector: 'input',
    providerName: 'Checkbox',
  });

  it('sets disabled attribute on input based on disabled prop', () => {
    render(<Checkbox disabled />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });
});
