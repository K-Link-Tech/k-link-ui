import React from 'react';
import { checkAccessibility, itSupportsSystemProps } from '@k-link/tests';
import { render } from '@testing-library/react';
import { Step, StepProps } from './Step';

const defaultProps: StepProps = {};

describe('@k-link/core/Step', () => {
  checkAccessibility([<Step aria-label="Test" />, <Step title="Test" />, <Step label="Test" />]);
  itSupportsSystemProps({
    component: Step,
    props: defaultProps,
    displayName: '@k-link/core/Step',
    refType: HTMLButtonElement,
    providerName: 'StepperStep',
  });

  it('renders icon when withIcon is true', () => {
    const { container: withIcon } = render(<Step withIcon />);
    const { container: withoutIcon } = render(<Step withIcon={false} />);
    expect(withIcon.querySelectorAll('.k-link-Step-stepIcon')).toHaveLength(1);
    expect(withoutIcon.querySelectorAll('.k-link-Step-stepIcon')).toHaveLength(0);
  });

  it('renders step body if Step has label or description', () => {
    const { container: withLabel } = render(<Step label="test-label" />);
    const { container: withDescription } = render(<Step description="test-description" />);
    const { container: withoutBody } = render(<Step />);

    expect(withoutBody.querySelectorAll('.k-link-Step-stepBody')).toHaveLength(0);
    expect(withLabel.querySelector('.k-link-Step-stepLabel').textContent).toBe('test-label');
    expect(withDescription.querySelector('.k-link-Step-stepDescription').textContent).toBe(
      'test-description'
    );
  });

  it('sets button tabIndex based on allowStepClick prop', () => {
    const { container: interactive } = render(<Step allowStepClick />);
    const { container: nonInteractive } = render(<Step allowStepClick={false} />);
    expect(interactive.firstChild).toHaveAttribute('tabindex', '0');
    expect(nonInteractive.firstChild).toHaveAttribute('tabindex', '-1');
  });
});
