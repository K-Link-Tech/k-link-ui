import {
  itSupportsSystemProps,
  itRendersChildren,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@k-link/tests';
import { InputError, InputErrorProps } from './InputError';

const defaultProps: InputErrorProps = {};

describe('@k-link/core/InputError', () => {
  itRendersChildren(InputError, defaultProps);
  itSupportsProviderVariant(InputError, defaultProps, 'InputWrapper', 'error');
  itSupportsProviderSize(InputError, defaultProps, 'InputWrapper', 'error');
  itSupportsSystemProps({
    component: InputError,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@k-link/core/InputError',
    providerName: 'InputError',
  });
});
