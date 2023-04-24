import { itRendersChildren, itSupportsSystemProps, itSupportsProviderVariant } from '@k-link/tests';
import { Skeleton, SkeletonProps } from './Skeleton';

const defaultProps: SkeletonProps = {};

describe('@k-link/core/Skeleton', () => {
  itRendersChildren(Skeleton, defaultProps);
  itSupportsProviderVariant(Skeleton, defaultProps, 'Skeleton');
  itSupportsSystemProps({
    component: Skeleton,
    props: defaultProps,
    displayName: '@k-link/core/Skeleton',
    refType: HTMLDivElement,
    providerName: 'Skeleton',
  });
});
