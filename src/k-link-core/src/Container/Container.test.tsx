import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@k-link/tests';
import { Container, ContainerProps } from './Container';

const defaultProps: ContainerProps = {};

describe('@k-link/core/Container', () => {
  itRendersChildren(Container, defaultProps);
  itSupportsProviderVariant(Container, defaultProps, 'Container');
  itSupportsProviderSize(Container, defaultProps, 'Container');
  itSupportsSystemProps({
    component: Container,
    props: defaultProps,
    displayName: '@k-link/core/Container',
    refType: HTMLDivElement,
    providerName: 'Container',
  });
});
