import React from 'react';
import { render, screen } from '@testing-library/react';
import { itSupportsSystemProps, createContextContainer, itThrowsContextError } from '@k-link/tests';
import { PaginationDots, PaginationDotsProps } from './PaginationDots';
import { PaginationRoot } from '../PaginationRoot/PaginationRoot';

const TestComponent = createContextContainer(PaginationDots, PaginationRoot, { total: 10 });

const defaultProps: PaginationDotsProps = {};

describe('@k-link/core/PaginationDots', () => {
  itThrowsContextError(
    PaginationDots,
    defaultProps,
    'Pagination.Root component was not found in tree'
  );

  itSupportsSystemProps({
    component: TestComponent,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@k-link/core/PaginationDots',
    providerName: 'PaginationDots',
  });

  it('allows to change dots icon', () => {
    render(<TestComponent icon={() => <div>test-dots</div>} />);
    expect(screen.getByText('test-dots')).toBeInTheDocument();
  });
});
