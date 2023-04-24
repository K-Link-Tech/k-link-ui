import { itRendersChildren, itSupportsSystemProps, itSupportsProviderVariant } from '@k-link/tests';
import { ScrollArea, ScrollAreaProps } from './ScrollArea';

const defaultProps: ScrollAreaProps = {};

describe('@k-link/core/ScrollArea', () => {
  itRendersChildren(ScrollArea, defaultProps);
  itSupportsProviderVariant(ScrollArea, defaultProps, 'ScrollArea');
  itSupportsSystemProps({
    component: ScrollArea,
    props: defaultProps,
    displayName: '@k-link/core/ScrollArea',
    refType: HTMLDivElement,
    providerName: 'ScrollArea',
  });
});

describe('@k-link/core/ScrollArea.Autosize', () => {
  itRendersChildren(ScrollArea.Autosize, defaultProps);
  itSupportsProviderVariant(ScrollArea.Autosize, defaultProps, 'ScrollArea');
  itSupportsSystemProps({
    component: ScrollArea.Autosize,
    props: defaultProps,
    displayName: '@k-link/core/ScrollAreaAutosize',
    refType: HTMLDivElement,
    providerName: 'ScrollAreaAutosize',
  });
});
