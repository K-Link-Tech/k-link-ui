import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsProviderSize,
  itSupportsProviderVariant,
} from '@k-link/tests';
import { DEFAULT_THEME } from '@k-link/styles';
import { ColorPicker, ColorPickerProps } from './ColorPicker';

const swatches = DEFAULT_THEME.colors.error;
const defaultProps: ColorPickerProps = {};

describe('@k-link/core/ColorPicker', () => {
  itSupportsProviderSize(ColorPicker, defaultProps, 'ColorPicker', 'wrapper');
  itSupportsProviderVariant(ColorPicker, defaultProps, 'ColorPicker', 'wrapper');
  itSupportsSystemProps({
    component: ColorPicker,
    props: defaultProps,
    displayName: '@k-link/core/ColorPicker',
    refType: HTMLDivElement,
    providerName: 'ColorPicker',
  });

  checkAccessibility([
    <ColorPicker
      swatches={swatches}
      format="rgba"
      saturationLabel="Saturation"
      alphaLabel="Alpha"
      hueLabel="Hue"
    />,
  ]);

  it('renders swatches list based on prop', () => {
    const { container: withSwatches } = render(<ColorPicker swatches={swatches} />);
    const { container: withoutSwatches } = render(<ColorPicker />);
    expect(withSwatches.querySelectorAll('.k-link-ColorPicker-swatches')).toHaveLength(1);
    expect(withoutSwatches.querySelectorAll('.k-link-ColorPicker-swatches')).toHaveLength(0);
  });

  it('renders AlphaSlider based on color format', () => {
    const { container: hex } = render(<ColorPicker format="hex" />);
    const { container: rgba } = render(<ColorPicker format="rgba" />);
    expect(hex.querySelectorAll('.k-link-ColorPicker-slider')).toHaveLength(1);
    expect(rgba.querySelectorAll('.k-link-ColorPicker-slider')).toHaveLength(2);
  });

  it('renders picker based on withPicker prop', () => {
    const { container: withPicker } = render(<ColorPicker withPicker />);
    const { container: withoutPicker } = render(<ColorPicker withPicker={false} />);
    expect(withPicker.querySelectorAll('.k-link-ColorPicker-saturation')).toHaveLength(1);
    expect(withoutPicker.querySelectorAll('.k-link-ColorPicker-saturation')).toHaveLength(0);
  });

  it('onChangeEnd should be called if clicked on swatch', () => {
    const spy = jest.fn();
    const { container } = render(
      <ColorPicker onChangeEnd={spy} format="hex" swatches={['#ffffff', '#000000']} />
    );
    fireEvent(
      container.querySelectorAll('.k-link-ColorSwatch-root')[0],
      new MouseEvent('click', { bubbles: true })
    );
    expect(spy).toHaveBeenCalledWith('#ffffff');
  });
});
