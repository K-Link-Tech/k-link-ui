import {
  createContextContainer,
  itSupportsSystemProps,
  itThrowsContextError,
  itRendersChildren,
} from '@k-link/tests';
import { PopoverDropdown, PopoverDropdownProps } from './PopoverDropdown';
import { Popover } from '../Popover';
import { POPOVER_ERRORS } from '../Popover.errors';

const defaultProps: PopoverDropdownProps = {};

const TestContainer = createContextContainer(PopoverDropdown, Popover, { opened: true });

describe('@k-link/core/PopoverDropdown', () => {
  itThrowsContextError(PopoverDropdown, defaultProps, POPOVER_ERRORS.context);
  itRendersChildren(TestContainer, defaultProps);

  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    displayName: '@k-link/core/PopoverDropdown',
    providerName: 'PopoverDropdown',
  });
});
