import { itRendersChildren, itSupportsSystemProps, itSupportsProviderVariant } from '@k-link/tests';
import { Stack, StackProps } from './Stack';

const defaultProps: StackProps = {};

describe('@k-link/core/Stack', () => {
  itRendersChildren(Stack, defaultProps);
  itSupportsProviderVariant(Stack, defaultProps, 'Stack');
  itSupportsSystemProps({
    component: Stack,
    props: defaultProps,
    displayName: '@k-link/core/Stack',
    refType: HTMLDivElement,
    providerName: 'Stack',
  });
});
