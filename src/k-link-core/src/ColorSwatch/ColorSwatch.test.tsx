import {
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@k-link/tests';
import { ColorSwatch, ColorSwatchProps } from './ColorSwatch';

const defaultProps: ColorSwatchProps = {
  color: '#fff',
};

describe('@k-link/core/ColorSwatch', () => {
  itIsPolymorphic(ColorSwatch as any, defaultProps);
  itSupportsProviderVariant(ColorSwatch, defaultProps, 'ColorSwatch');
  itSupportsProviderSize(ColorSwatch, defaultProps, 'ColorSwatch');
  itSupportsSystemProps({
    component: ColorSwatch,
    props: defaultProps,
    displayName: '@k-link/core/ColorSwatch',
    refType: HTMLDivElement,
    providerName: 'ColorSwatch',
  });
});
