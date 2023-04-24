import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@k-link/tests';
import { Title, TitleProps } from './Title';

const defaultProps: TitleProps = {};

describe('@k-link/core/Title', () => {
  itRendersChildren(Title, defaultProps);
  itSupportsProviderVariant(Title, defaultProps, 'Title');
  itSupportsProviderSize(Title, defaultProps, 'Title');
  itSupportsSystemProps({
    component: Title,
    props: defaultProps,
    displayName: '@k-link/core/Title',
    refType: HTMLHeadingElement,
    providerName: 'Title',
  });
});
