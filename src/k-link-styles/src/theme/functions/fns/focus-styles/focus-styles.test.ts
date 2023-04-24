import { focusStyles } from './focus-styles';
import { DEFAULT_THEME } from '../../../default-theme';

describe('@k-link/styles/focus-styles', () => {
  it('uses primaryColor from given theme', () => {
    expect(
      (
        focusStyles({ ...DEFAULT_THEME, primaryColor: 'error' })()['&:focus'] as any
      ).outline.includes(DEFAULT_THEME.colors.error[5])
    ).toBe(true);
  });

  it('produces :focus and :focus-visible selectors', () => {
    const styles = focusStyles({ ...DEFAULT_THEME, primaryColor: 'error' })();
    expect(styles['&:focus']).toBeDefined();
    expect(styles['&:focus:not(:focus-visible)']).toBeDefined();
  });

  it('if selector is provided, then it should be used', () => {
    const styles = focusStyles({ ...DEFAULT_THEME, primaryColor: 'error' })('.selector:focus');
    expect(styles['.selector:focus']).toBeDefined();
    expect(styles['.selector:focus:not(:focus-visible)']).toBeDefined();
  });
});
