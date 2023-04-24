import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@k-link/tests';
import { ThemeIcon, ThemeIconProps } from './ThemeIcon';

const defaultProps: ThemeIconProps = {
  children: 'test-icon',
};

describe('@k-link/core/ThemeIcon', () => {
  itRendersChildren(ThemeIcon, defaultProps);
  itSupportsProviderVariant(ThemeIcon, defaultProps, 'ThemeIcon');
  itSupportsProviderSize(ThemeIcon, defaultProps, 'ThemeIcon');
  itSupportsSystemProps({
    component: ThemeIcon,
    props: defaultProps,
    displayName: '@k-link/core/ThemeIcon',
    refType: HTMLDivElement,
    providerName: 'ThemeIcon',
  });
});
