import {
  createStyles,
  MantineNumberSize,
  MantineColor,
  CSSObject,
  MantineTheme,
  MantineGradient,
  rem,
  getSize,
} from '@k-link/styles';

export const AVATAR_VARIANTS = ['filled', 'light', 'gradient', 'outline'];

export interface AvatarStylesParams {
  radius: MantineNumberSize;
  color: MantineColor;
  withinGroup: boolean;
  spacing: MantineNumberSize;
  gradient: MantineGradient;
}

export const sizes = {
  xs: rem(24),
  sm: rem(32),
  md: rem(40),
  lg: rem(48),
  xl: rem(56),
  '2xl': rem(64),
};

export const statusIconSizes = {
  xs: rem(6),
  sm: rem(8),
  md: rem(10),
  lg: rem(12),
  xl: rem(14),
  '2xl': rem(16),
};

interface GetGroupStylesInput {
  withinGroup: boolean;
  spacing: MantineNumberSize;
  theme: MantineTheme;
}

function getGroupStyles({ withinGroup, spacing, theme }: GetGroupStylesInput): CSSObject {
  if (!withinGroup) {
    return null;
  }

  return {
    marginLeft: `calc(${getSize({ size: spacing, sizes: theme.spacing })} * -1)`,
    backgroundColor: `${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
    border: `${rem(2)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
  };
}

interface GetVariantStylesInput {
  theme: MantineTheme;
  variant: string;
  color: MantineColor;
  gradient: MantineGradient;
}

function getVariantStyles({ theme, variant, color, gradient }: GetVariantStylesInput) {
  const colors = theme.fn.variant({ variant, color, gradient });

  if (AVATAR_VARIANTS.includes(variant)) {
    return {
      placeholder: {
        color: colors.color,
        backgroundColor: colors.background,
        backgroundImage: variant === 'gradient' ? colors.background : undefined,
        border: `${rem(variant === 'gradient' ? 0 : 1)} solid ${colors.border}`,
      },

      placeholderIcon: {
        color: colors.color,
      },
    };
  }

  return {};
}

export default createStyles(
  (
    theme,
    { radius, withinGroup, spacing, color, gradient }: AvatarStylesParams,
    { variant, size }
  ) => {
    const variantStyles = getVariantStyles({ theme, color, gradient, variant });
    return {
      parentRoot: {
        position: 'relative',
      },

      root: {
        ...theme.fn.focusStyles(),
        WebkitTapHighlightColor: 'transparent',
        boxSizing: 'border-box',
        position: 'relative',
        display: 'block',
        userSelect: 'none',
        overflow: 'hidden',
        borderRadius: theme.fn.radius(radius),
        textDecoration: 'none',
        border: 0,
        backgroundColor: 'transparent',
        padding: 0,
        width: getSize({ size, sizes }),
        minWidth: getSize({ size, sizes }),
        height: getSize({ size, sizes }),
        ...getGroupStyles({ withinGroup, spacing, theme }),
      },

      image: {
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        display: 'block',
      },

      placeholder: {
        ...theme.fn.fontStyles(),
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        userSelect: 'none',
        borderRadius: theme.fn.radius(radius),
        fontSize: `calc(${getSize({ size, sizes })} / 2.5)`,
        ...variantStyles.placeholder,
      },

      placeholderIcon: {
        width: '70%',
        height: '70%',
        ...variantStyles.placeholderIcon,
      },

      addIcon: {
        width: '100%',
        height: '100%',
        cursor: 'pointer',
      },

      activeStatusContainer: {
        position: 'absolute',
        right: '-1px',
        bottom: '-1px',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: statusIconSizes[size],
        minWidth: statusIconSizes[size],
        height: statusIconSizes[size],
      },

      activeStatusIcon: {
        width: '100%',
        height: '100%',
        color: theme.colors[color]?.[6],
      },
    };
  }
);
