import {
  itRendersChildren,
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@k-link/tests';
import { CardSection, CardSectionProps } from './CardSection';

const defaultProps: CardSectionProps = {};

describe('@k-link/core/CardSection', () => {
  itRendersChildren(CardSection, defaultProps);
  itIsPolymorphic(CardSection, defaultProps);
  itSupportsProviderVariant(CardSection, defaultProps, 'Card', 'cardSection');
  itSupportsSystemProps({
    component: CardSection,
    props: defaultProps,
    displayName: '@k-link/core/CardSection',
    refType: HTMLDivElement,
    providerName: 'CardSection',
  });
});
