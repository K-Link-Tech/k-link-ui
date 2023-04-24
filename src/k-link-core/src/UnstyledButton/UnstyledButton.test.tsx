import {
  itRendersChildren,
  itSupportsFocusEvents,
  itSupportsSystemProps,
  itIsPolymorphic,
  itSupportsProviderVariant,
} from '@k-link/tests';
import { UnstyledButton, UnstyledButtonProps } from './UnstyledButton';

const defaultProps: UnstyledButtonProps = {};

describe('@k-link/core/UnstyledButton', () => {
  itRendersChildren(UnstyledButton, defaultProps);
  itSupportsProviderVariant(UnstyledButton, defaultProps, 'UnstyledButton');
  itIsPolymorphic(UnstyledButton, defaultProps);
  itSupportsFocusEvents(UnstyledButton, defaultProps, 'button');
  itSupportsSystemProps({
    component: UnstyledButton,
    props: defaultProps,
    displayName: '@k-link/core/UnstyledButton',
    refType: HTMLButtonElement,
    providerName: 'UnstyledButton',
  });
});
