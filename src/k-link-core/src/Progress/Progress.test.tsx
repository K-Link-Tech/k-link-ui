import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@k-link/tests';
import { Progress, ProgressProps } from './Progress';

const defaultProps: ProgressProps = {
  value: 80,
};

describe('@k-link/core/Progress', () => {
  checkAccessibility([<Progress value={80} aria-label="test-progress" />]);
  itSupportsProviderVariant(Progress, defaultProps, 'Progress');
  itSupportsSystemProps({
    component: Progress,
    props: defaultProps,
    displayName: '@k-link/core/Progress',
    refType: HTMLDivElement,
    providerName: 'Progress',
  });

  it('renders given amount of sections', () => {
    const { container } = render(
      <Progress
        value={84}
        sections={[
          { value: 40, color: 'blue_light' },
          { value: 20, color: 'error' },
          { value: 15, color: 'success' },
        ]}
      />
    );

    expect(container.querySelectorAll('.k-link-Progress-bar')).toHaveLength(3);
  });

  it('passes value prop to progressbar', () => {
    render(<Progress value={84} />);
    expect(screen.getByRole('progressbar')).toHaveStyle({ width: '84%' });
  });

  it('has correct aria attributes', () => {
    render(<Progress value={84} />);
    const element = screen.getByRole('progressbar');
    expect(element).toHaveAttribute('aria-valuenow', '84');
    expect(element).toHaveAttribute('aria-valuemin', '0');
    expect(element).toHaveAttribute('aria-valuemax', '100');
  });

  it('supports props on sections', async () => {
    const spy = jest.fn();
    const { container } = render(
      <Progress
        sections={[
          { value: 20, color: 'blue_light', onClick: spy },
          { value: 30, color: 'orange' },
        ]}
      />
    );

    await userEvent.click(container.querySelectorAll('.k-link-Progress-bar')[0]);
    expect(spy).toHaveBeenCalledTimes(1);
    await userEvent.click(container.querySelectorAll('.k-link-Progress-bar')[1]);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
