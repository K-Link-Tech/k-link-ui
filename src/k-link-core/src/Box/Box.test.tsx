import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@k-link/tests';
import { Box, BoxProps } from './Box';

const defaultProps: BoxProps = {};

describe('@k-link/core/Box', () => {
  itRendersChildren(Box as any, defaultProps);
  itIsPolymorphic(Box as any, defaultProps);
  itSupportsSystemProps({
    component: Box,
    props: defaultProps,
    displayName: '@k-link/core/Box',
    refType: HTMLDivElement,
  });
});
