export type MantineSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | (string & {});
export type MantineNumberSize = MantineSize | number | (string & {});
export type MantineSizes = Record<MantineSize, string>;

export type KlinkSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | (string & {});
export type KlinkNumberSize = KlinkSize | number | (string & {});
export type KlinkSizes = Record<MantineSize | '2xl', string>;
