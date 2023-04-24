import { themeColor } from './theme-color';
import { DEFAULT_THEME } from '../../../default-theme';

const getThemeColor = themeColor(DEFAULT_THEME);

describe('@k-link/styles/theme-color', () => {
  it('returns correct shade of given color', () => {
    expect(getThemeColor('error.3', 3)).toBe(DEFAULT_THEME.colors.error[3]);
  });

  it('returns primary color shade if color was not provided', () => {
    expect(getThemeColor(null, 5)).toBe(DEFAULT_THEME.colors[DEFAULT_THEME.primaryColor][5]);
  });

  it('allows to disable primary color fallback', () => {
    expect(getThemeColor('#783298', 5, false)).toBe('#783298');
  });

  it('allows to get color by index', () => {
    expect(getThemeColor('error.1')).toBe(DEFAULT_THEME.colors.error[1]);
    expect(getThemeColor('error.1', 5)).toBe(DEFAULT_THEME.colors.error[1]);
    expect(getThemeColor('error.11', null, false)).toBe('error.11');
  });

  it('returns color with primary shade if shade is not specified', () => {
    expect(getThemeColor('orange.6')).toBe(DEFAULT_THEME.colors.orange[6]);
  });
});
