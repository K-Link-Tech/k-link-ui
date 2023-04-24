import { getGradientColorStops } from './get-gradient-color-stops';

describe('@k-link/styles/get-gradient-color', () => {
  it('returns correct color steps', () => {
    expect(getGradientColorStops(['#000', '#fff'])).toBe('#000 0%, #fff 100%');
    expect(getGradientColorStops(['blue', 'error', 'orange', 'blue_light', 'white'])).toBe(
      'blue 0%, error 25%, orange 50%, blue_light 75%, white 100%'
    );
  });
});
