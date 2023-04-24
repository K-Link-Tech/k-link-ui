import { randomId } from './random-id';

describe('@k-link/hooks/random-id', () => {
  it('returns random id with k-link- prefix', () => {
    expect(randomId().includes('k-link-')).toBe(true);
    expect(randomId()).toHaveLength(18);
  });
});
