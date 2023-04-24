import React from 'react';
import { render } from '@testing-library/react';
import { itSupportsSystemProps } from '@k-link/tests';
import { DEFAULT_THEME } from '@k-link/styles';
import { Loader, LoaderProps } from './Loader';

const defaultProps: LoaderProps = {};

describe('@k-link/core/Loader', () => {
  itSupportsSystemProps({
    component: Loader,
    props: defaultProps,
    displayName: '@k-link/core/Loader',
    providerName: 'Loader',
  });

  it('sets svg width based on size prop', () => {
    const { container } = render(<Loader size="5rem" variant="bars" />);
    expect(container.querySelector('svg')).toHaveAttribute('width', '5rem');
  });

  it('sets svg fill based on color prop', () => {
    const { container } = render(<Loader color="warning.6" variant="bars" />);
    expect(container.querySelector('svg')).toHaveAttribute('fill', DEFAULT_THEME.colors.warning[6]);
  });
});
