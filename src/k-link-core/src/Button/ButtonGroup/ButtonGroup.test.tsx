import { itSupportsSystemProps, itRendersChildren } from '@k-link/tests';
import { ButtonGroup, ButtonGroupProps } from './ButtonGroup';

const defaultProps: ButtonGroupProps = {};

describe('@k-link/core/ButtonGroup', () => {
  itRendersChildren(ButtonGroup, defaultProps);
  itSupportsSystemProps({
    component: ButtonGroup,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@k-link/core/ButtonGroup',
    providerName: 'ButtonGroup',
  });
});
