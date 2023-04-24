import { itRendersChildren, itSupportsSystemProps, itSupportsProviderVariant } from '@k-link/tests';
import { AspectRatio, AspectRatioProps } from './AspectRatio';

const defaultProps: AspectRatioProps = {
  ratio: 16 / 9,
};

describe('@k-link/core/AspectRatio', () => {
  itRendersChildren(AspectRatio, defaultProps);
  itSupportsProviderVariant(AspectRatio, defaultProps, 'AspectRatio');
  itSupportsSystemProps({
    component: AspectRatio,
    props: defaultProps,
    displayName: '@k-link/core/AspectRatio',
    refType: HTMLDivElement,
    providerName: 'AspectRatio',
  });
});
