import { itRendersChildren, itSupportsSystemProps, itSupportsProviderVariant } from '@k-link/tests';
import { Footer, FooterProps } from './Footer';

const defaultProps: FooterProps = {
  height: 60,
  children: 'test-footer',
};

describe('@k-link/core/Footer', () => {
  itRendersChildren(Footer, defaultProps);
  itSupportsProviderVariant(Footer, defaultProps, 'Footer');
  itSupportsSystemProps({
    component: Footer,
    props: defaultProps,
    displayName: '@k-link/core/Footer',
    refType: HTMLElement,
    providerName: 'Footer',
  });
});
