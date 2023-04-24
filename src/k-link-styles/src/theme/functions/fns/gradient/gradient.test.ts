import { linearGradient, radialGradient } from './gradient';

describe('@k-link/styles/linear-gradient', () => {
  it('returns correct gradient with two color stops', () => {
    expect(linearGradient(24, '#000', '#fff')).toBe('linear-gradient(24deg, #000 0%, #fff 100%)');
  });

  it('returns correct gradient with multiple color stops', () => {
    expect(linearGradient(133, 'blue', 'error', 'orange', 'blue_light', 'white')).toBe(
      'linear-gradient(133deg, blue 0%, error 25%, orange 50%, blue_light 75%, white 100%)'
    );
  });
});

describe('@k-link/styles/radial-gradient', () => {
  it('returns correct gradient with two color stops', () => {
    expect(radialGradient('#000', '#fff')).toBe('radial-gradient(circle, #000 0%, #fff 100%)');
  });

  it('returns correct gradient with multiple color stops', () => {
    expect(radialGradient('blue', 'error', 'orange', 'blue_light', 'white')).toBe(
      'radial-gradient(circle, blue 0%, error 25%, orange 50%, blue_light 75%, white 100%)'
    );
  });
});
