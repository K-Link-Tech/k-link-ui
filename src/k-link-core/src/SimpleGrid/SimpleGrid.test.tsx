import React from 'react';
import { itRendersChildren, itSupportsSystemProps, itSupportsProviderVariant } from '@k-link/tests';
import { SimpleGrid, SimpleGridProps } from './SimpleGrid';

const defaultProps: SimpleGridProps = {
  cols: 2,
  children: <span>test</span>,
};

describe('@k-link/core/SimpleGrid', () => {
  itRendersChildren(SimpleGrid, defaultProps);
  itSupportsProviderVariant(SimpleGrid, defaultProps, 'SimpleGrid');
  itSupportsSystemProps({
    component: SimpleGrid,
    props: defaultProps,
    displayName: '@k-link/core/SimpleGrid',
    refType: HTMLDivElement,
    providerName: 'SimpleGrid',
  });
});
