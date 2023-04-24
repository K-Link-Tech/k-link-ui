import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@k-link/tests';
import { Section, SectionProps } from './Section';

const defaultProps: SectionProps = {
  children: 'test-section',
};

describe('@k-link/core/Section', () => {
  itRendersChildren(Section, defaultProps);
  itIsPolymorphic(Section, defaultProps);
  itSupportsSystemProps({
    component: Section,
    props: defaultProps,
    displayName: '@k-link/core/Section',
    refType: HTMLDivElement,
  });
});
