import { itSupportsSystemProps } from '@k-link/tests';
import { ColorSlider, ColorSliderProps } from './ColorSlider';

const defaultProps: ColorSliderProps = {
  value: 25,
  onChange: () => {},
  onChangeEnd: () => {},
  size: 'sm',
  maxValue: 360,
  overlays: [{ color: 'error' }],
  round: true,
};

describe('@k-link/core/ColorSlider', () => {
  itSupportsSystemProps({
    component: ColorSlider,
    props: defaultProps,
    displayName: '@k-link/core/ColorSlider',
    refType: HTMLDivElement,
  });
});
