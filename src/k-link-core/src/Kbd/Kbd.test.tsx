import { itRendersChildren, itSupportsSystemProps, itSupportsProviderVariant } from '@k-link/tests';
import { Kbd, KbdProps } from './Kbd';

const defaultProps: KbdProps = {
  children: 'test',
};

describe('@k-link/core/Kbd', () => {
  itRendersChildren(Kbd, defaultProps);
  itSupportsProviderVariant(Kbd, defaultProps, 'Kbd');
  itSupportsSystemProps({
    component: Kbd,
    props: defaultProps,
    displayName: '@k-link/core/Kbd',
    refType: HTMLElement,
    providerName: 'Kbd',
  });
});
