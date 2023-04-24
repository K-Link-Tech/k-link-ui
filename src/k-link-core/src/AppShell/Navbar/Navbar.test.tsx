import { itRendersChildren, itSupportsSystemProps, itSupportsProviderVariant } from '@k-link/tests';
import { Navbar, NavbarProps } from './Navbar';
import { Section } from '../HorizontalSection/Section/Section';

const defaultProps: NavbarProps = { children: 'test-navbar' };

describe('@k-link/core/Navbar', () => {
  itRendersChildren(Navbar, defaultProps);
  itSupportsProviderVariant(Navbar, defaultProps, 'Navbar');
  itSupportsSystemProps({
    component: Navbar,
    props: defaultProps,
    displayName: '@k-link/core/Navbar',
    refType: HTMLElement,
    providerName: 'Navbar',
  });

  it('exposes Section as Navbar.Section', () => {
    expect(Navbar.Section).toBe(Section);
  });
});
