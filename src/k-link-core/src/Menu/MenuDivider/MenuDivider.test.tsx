import { itSupportsSystemProps, createContextContainer } from '@k-link/tests';
import { MenuDivider, MenuDividerProps } from './MenuDivider';
import { Menu } from '../Menu';

const defaultProps: MenuDividerProps = {};

const TestContainer = createContextContainer<any>(MenuDivider, Menu, { opened: true });

describe('@k-link/core/MenuDivider', () => {
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@k-link/core/MenuDivider',
    providerName: 'MenuDivider',
  });
});
