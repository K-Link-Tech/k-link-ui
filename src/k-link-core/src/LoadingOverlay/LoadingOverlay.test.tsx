import React from 'react';
import { render } from '@testing-library/react';
import { itSupportsSystemProps, itSupportsProviderVariant } from '@k-link/tests';
import { LoadingOverlay, LoadingOverlayProps } from './LoadingOverlay';

const defaultProps: LoadingOverlayProps = {
  visible: true,
};

describe('@k-link/core/LoadingOverlay', () => {
  itSupportsProviderVariant(LoadingOverlay, defaultProps, 'LoadingOverlay');
  itSupportsSystemProps({
    component: LoadingOverlay,
    props: defaultProps,
    displayName: '@k-link/core/LoadingOverlay',
    refType: HTMLDivElement,
    providerName: 'LoadingOverlay',
  });

  it('renders based on visible prop', () => {
    const { container: notVisible } = render(<LoadingOverlay visible={false} />);
    const { container: visible } = render(<LoadingOverlay visible />);
    expect(notVisible.querySelector('.k-link-LoadingOverlay-root')).toBe(null);
    expect(visible.querySelector('.k-link-LoadingOverlay-root')).toBeInTheDocument();
  });
});
