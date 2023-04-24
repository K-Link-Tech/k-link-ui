import {
  itSupportsSystemProps,
  createContextContainer,
  itRendersChildren,
  itThrowsContextError,
} from '@k-link/tests';
import { TabsList, TabsListProps } from './TabsList';
import { TabsProvider } from '../TabsProvider';
import { TABS_ERRORS } from '../Tabs.errors';

const defaultProps: TabsListProps = {
  children: 'Test children',
};

const TestContainer = createContextContainer(TabsList, TabsProvider);

describe('@k-link/core/TabsList', () => {
  itThrowsContextError(TabsList, defaultProps, TABS_ERRORS.context);
  itRendersChildren(TestContainer, defaultProps);
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@k-link/core/TabsList',
    providerName: 'TabsList',
  });
});
