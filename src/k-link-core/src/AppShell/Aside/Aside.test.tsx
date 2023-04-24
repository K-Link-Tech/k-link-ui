import { itRendersChildren, itSupportsSystemProps, itSupportsProviderVariant } from '@k-link/tests';
import { Aside, AsideProps } from './Aside';
import { Section } from '../HorizontalSection/Section/Section';

const defaultProps: AsideProps = { children: 'test-aside' };

describe('@k-link/core/Aside', () => {
  itRendersChildren(Aside, defaultProps);
  itSupportsProviderVariant(Aside, defaultProps, 'Aside');
  itSupportsSystemProps({
    component: Aside,
    props: defaultProps,
    displayName: '@k-link/core/Aside',
    refType: HTMLElement,
    providerName: 'Aside',
  });

  it('exposes Section as Aside.Section', () => {
    expect(Aside.Section).toBe(Section);
  });
});
