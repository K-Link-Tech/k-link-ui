import React from 'react';
import {
  itSupportsSystemProps,
  createContextContainer,
  itIsPolymorphic,
  itThrowsContextError,
} from '@k-link/tests';
import { render, screen } from '@testing-library/react';
import {
  PaginationFirst,
  PaginationLast,
  PaginationNext,
  PaginationPrevious,
  PaginationEdgeProps,
} from './PaginationEdges';
import { PaginationRoot } from '../PaginationRoot/PaginationRoot';

const defaultProps: PaginationEdgeProps = {};

function isSupportsCustomIcon(Component: React.FC<any>) {
  it('supports custom icon', () => {
    render(<Component {...defaultProps} icon={() => <div>test-icon</div>} />);
    expect(screen.getByText('test-icon')).toBeInTheDocument();
  });
}

describe('@k-link/core/PaginationNext', () => {
  const TestComponent = createContextContainer(PaginationNext, PaginationRoot, { total: 10 });

  itThrowsContextError(
    PaginationNext,
    defaultProps,
    'Pagination.Root component was not found in tree'
  );

  itIsPolymorphic(TestComponent, defaultProps);
  isSupportsCustomIcon(TestComponent);
  itSupportsSystemProps({
    component: TestComponent,
    props: defaultProps,
    refType: HTMLButtonElement,
    displayName: '@k-link/core/PaginationNext',
    providerName: 'PaginationNext',
  });
});

describe('@k-link/core/PaginationPrevious', () => {
  const TestComponent = createContextContainer(PaginationPrevious, PaginationRoot, { total: 10 });

  itThrowsContextError(
    PaginationPrevious,
    defaultProps,
    'Pagination.Root component was not found in tree'
  );

  itIsPolymorphic(TestComponent, defaultProps);
  isSupportsCustomIcon(TestComponent);
  itSupportsSystemProps({
    component: TestComponent,
    props: defaultProps,
    refType: HTMLButtonElement,
    displayName: '@k-link/core/PaginationPrevious',
    providerName: 'PaginationPrevious',
  });
});

describe('@k-link/core/PaginationFirst', () => {
  const TestComponent = createContextContainer(PaginationFirst, PaginationRoot, { total: 10 });

  itThrowsContextError(
    PaginationFirst,
    defaultProps,
    'Pagination.Root component was not found in tree'
  );

  itIsPolymorphic(TestComponent, defaultProps);
  isSupportsCustomIcon(TestComponent);
  itSupportsSystemProps({
    component: TestComponent,
    props: defaultProps,
    refType: HTMLButtonElement,
    displayName: '@k-link/core/PaginationFirst',
    providerName: 'PaginationFirst',
  });
});

describe('@k-link/core/PaginationLast', () => {
  const TestComponent = createContextContainer(PaginationLast, PaginationRoot, { total: 10 });

  itThrowsContextError(
    PaginationLast,
    defaultProps,
    'Pagination.Root component was not found in tree'
  );

  itIsPolymorphic(TestComponent, defaultProps);
  isSupportsCustomIcon(TestComponent);
  itSupportsSystemProps({
    component: TestComponent,
    props: defaultProps,
    refType: HTMLButtonElement,
    displayName: '@k-link/core/PaginationLast',
    providerName: 'PaginationLast',
  });
});
