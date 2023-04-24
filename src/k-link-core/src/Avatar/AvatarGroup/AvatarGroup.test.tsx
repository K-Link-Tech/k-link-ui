import { itSupportsSystemProps, itRendersChildren, itSupportsProviderVariant } from '@k-link/tests';
import { AvatarGroup, AvatarGroupProps } from './AvatarGroup';

const defaultProps: AvatarGroupProps = {
  children: 'test-children',
};

describe('@k-link/core/AvatarGroup', () => {
  itRendersChildren(AvatarGroup, defaultProps);
  itSupportsProviderVariant(AvatarGroup, defaultProps, 'AvatarGroup');
  itSupportsSystemProps({
    component: AvatarGroup,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@k-link/core/AvatarGroup',
    providerName: 'AvatarGroup',
  });
});
