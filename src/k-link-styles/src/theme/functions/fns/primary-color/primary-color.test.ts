import { primaryColor } from './primary-color';
import { DEFAULT_THEME } from '../../../default-theme';

describe('@k-link/tss/primary-color', () => {
  it('returns primary color for given color scheme', () => {
    expect(primaryColor(DEFAULT_THEME)()).toBe(DEFAULT_THEME.colors.primary[7]);
    expect(primaryColor(DEFAULT_THEME)('light')).toBe(DEFAULT_THEME.colors.primary[7]);
    expect(primaryColor(DEFAULT_THEME)('dark')).toBe(DEFAULT_THEME.colors.primary[8]);
  });
});
