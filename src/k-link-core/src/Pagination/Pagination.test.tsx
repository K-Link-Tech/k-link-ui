import React from 'react';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@k-link/tests';
import { render } from '@testing-library/react';
import { Pagination, PaginationProps } from './Pagination';

const defaultProps: PaginationProps = {
  total: 10,
  getControlProps: () => ({ 'aria-label': 'test-label' }),
};

describe('@k-link/core/Pagination', () => {
  checkAccessibility([<Pagination {...defaultProps} />]);
  itSupportsProviderVariant(Pagination, defaultProps, 'Pagination', ['control']);
  itSupportsProviderSize(Pagination, defaultProps, 'Pagination', ['control']);
  itSupportsSystemProps({
    component: Pagination,
    props: defaultProps,
    displayName: '@k-link/core/Pagination',
    providerName: 'Pagination',
  });

  it('renders nothing if total value is negative', () => {
    const { container } = render(<Pagination total={-10} />);
    expect(container.firstChild).toBe(null);
  });

  it('renders nothing if total value is zero', () => {
    const { container } = render(<Pagination total={0} />);
    expect(container.firstChild).toBe(null);
  });
});
