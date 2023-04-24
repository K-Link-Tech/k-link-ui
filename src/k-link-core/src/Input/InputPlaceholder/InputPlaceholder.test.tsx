import { itSupportsSystemProps, itRendersChildren } from '@k-link/tests';
import { InputPlaceholder, InputPlaceholderProps } from './InputPlaceholder';

const defaultProps: InputPlaceholderProps = {};

describe('@k-link/core/InputPlaceholder', () => {
  itRendersChildren(InputPlaceholder, defaultProps);
  itSupportsSystemProps({
    component: InputPlaceholder,
    props: defaultProps,
    refType: HTMLSpanElement,
    displayName: '@k-link/core/InputPlaceholder',
    providerName: 'InputPlaceholder',
  });
});
