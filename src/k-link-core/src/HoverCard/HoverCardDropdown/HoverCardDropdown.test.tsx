import {
  itSupportsSystemProps,
  createContextContainer,
  itThrowsContextError,
  itRendersChildren,
} from '@k-link/tests';
import { HoverCardDropdown, HoverCardDropdownProps } from './HoverCardDropdown';
import { HoverCard } from '../HoverCard';
import { HOVER_CARD_ERRORS } from '../HoverCard.errors';

const defaultProps: HoverCardDropdownProps = {};

const TestContainer = createContextContainer(HoverCardDropdown, HoverCard, {
  initiallyOpened: true,
});

describe('@k-link/core/HoverCardDropdown', () => {
  itThrowsContextError(HoverCardDropdown, defaultProps, HOVER_CARD_ERRORS.context);
  itRendersChildren(TestContainer, defaultProps);

  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    displayName: '@k-link/core/HoverCardDropdown',
    providerName: 'HoverCardDropdown',
  });
});
