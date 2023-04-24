import { itRendersChildren, itSupportsSystemProps, itSupportsProviderVariant } from '@k-link/tests';
import { Header, HeaderProps } from './Header';

const defaultProps: HeaderProps = {
  height: 60,
  children: 'test-header',
};

describe('@k-link/core/Header', () => {
  itRendersChildren(Header, defaultProps);
  itSupportsProviderVariant(Header, defaultProps, 'Header');
  itSupportsSystemProps({
    component: Header,
    props: defaultProps,
    displayName: '@k-link/core/Header',
    refType: HTMLElement,
    providerName: 'Header',
  });
});
