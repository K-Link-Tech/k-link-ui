import { itRendersChildren, itSupportsSystemProps, itSupportsProviderVariant } from '@k-link/tests';
import { Mark, MarkProps } from './Mark';

const defaultProps: MarkProps = {
  children: 'test-mark',
};

describe('@k-link/core/Mark', () => {
  itRendersChildren(Mark, defaultProps);
  itSupportsProviderVariant(Mark, defaultProps, 'Mark');
  itSupportsSystemProps({
    component: Mark,
    props: defaultProps,
    displayName: '@k-link/core/Mark',
    refType: HTMLElement,
    providerName: 'Mark',
  });
});
