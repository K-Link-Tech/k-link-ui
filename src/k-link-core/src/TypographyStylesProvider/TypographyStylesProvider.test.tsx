import { itRendersChildren, itSupportsSystemProps, itSupportsProviderVariant } from '@k-link/tests';
import {
  TypographyStylesProvider,
  TypographyStylesProviderProps,
} from './TypographyStylesProvider';

const defaultProps: TypographyStylesProviderProps = {
  children: 'test-children',
};

describe('@k-link/core/TypographyStylesProvider', () => {
  itRendersChildren(TypographyStylesProvider, defaultProps);
  itSupportsProviderVariant(TypographyStylesProvider, defaultProps, 'TypographyStylesProvider');
  itSupportsSystemProps({
    component: TypographyStylesProvider,
    props: defaultProps,
    displayName: '@k-link/core/TypographyStylesProvider',
    refType: HTMLDivElement,
  });
});
