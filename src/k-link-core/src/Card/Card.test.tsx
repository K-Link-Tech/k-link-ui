import {
  itRendersChildren,
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@k-link/tests';
import { Card, CardProps } from './Card';
import { CardSection } from './CardSection/CardSection';

const defaultProps: CardProps = {
  children: 'test-card',
};

describe('@k-link/core/Card', () => {
  itRendersChildren(Card, defaultProps);
  itIsPolymorphic(Card, defaultProps);
  itSupportsProviderVariant(Card, defaultProps, 'Card');
  itSupportsSystemProps({
    component: Card,
    props: defaultProps,
    displayName: '@k-link/core/Card',
    refType: HTMLDivElement,
    providerName: 'Card',
  });

  it('exposes CardSection as Card.Section', () => {
    expect(Card.Section).toBe(CardSection);
  });
});
