import {
  itRendersChildren,
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@k-link/tests';
import { Center, CenterProps } from './Center';

const defaultProps: CenterProps = {
  children: 'test-center',
};

describe('@k-link/core/Center', () => {
  itRendersChildren(Center, defaultProps);
  itIsPolymorphic(Center, defaultProps);
  itSupportsProviderVariant(Center, defaultProps, 'Center');
  itSupportsSystemProps({
    component: Center,
    props: defaultProps,
    displayName: '@k-link/core/Center',
    refType: HTMLDivElement,
    providerName: 'Center',
  });
});
