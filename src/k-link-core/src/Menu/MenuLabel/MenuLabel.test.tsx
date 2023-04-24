import { itSupportsSystemProps, itRendersChildren, createContextContainer } from '@k-link/tests';
import { MenuLabel, MenuLabelProps } from './MenuLabel';
import { Menu } from '../Menu';

const defaultProps: MenuLabelProps = {};

const TestContainer = createContextContainer<any>(MenuLabel, Menu, { opened: true });

describe('@k-link/core/MenuLabel', () => {
  itRendersChildren(TestContainer, defaultProps);
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@k-link/core/MenuLabel',
    providerName: 'MenuLabel',
  });
});
