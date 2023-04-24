import {
  itSupportsSystemProps,
  itRendersChildren,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@k-link/tests';
import { InputDescription, InputDescriptionProps } from './InputDescription';

const defaultProps: InputDescriptionProps = {};

describe('@k-link/core/InputDescription', () => {
  itRendersChildren(InputDescription, defaultProps);
  itSupportsProviderVariant(InputDescription, defaultProps, 'InputWrapper', 'description');
  itSupportsProviderSize(InputDescription, defaultProps, 'InputWrapper', 'description');
  itSupportsSystemProps({
    component: InputDescription,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@k-link/core/InputDescription',
    providerName: 'InputDescription',
  });
});
