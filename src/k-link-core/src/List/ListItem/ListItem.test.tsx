import React from 'react';
import { render } from '@testing-library/react';
import { itSupportsSystemProps, createContextContainer, itThrowsContextError } from '@k-link/tests';
import { ListItem, ListItemProps } from './ListItem';
import { ListProvider } from '../List.context';

const defaultProps: ListItemProps = {
  icon: '$',
  children: 'test-list-item',
};

const TestContainer = createContextContainer(ListItem, ListProvider, { value: {} });

describe('@k-link/core/ListItem', () => {
  itThrowsContextError(ListItem, defaultProps, 'List component was not found in tree');
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLLIElement,
    displayName: '@k-link/core/ListItem',
    providerName: 'ListItem',
  });

  it('renders icon based on prop', () => {
    const { container: withIcon } = render(<TestContainer icon="$">test-item</TestContainer>);
    const { container: withoutIcon } = render(<TestContainer>test-item</TestContainer>);
    expect(withIcon.querySelectorAll('.k-link-List-itemIcon')).toHaveLength(1);
    expect(withoutIcon.querySelectorAll('.k-link-List-itemIcon')).toHaveLength(0);
  });
});
