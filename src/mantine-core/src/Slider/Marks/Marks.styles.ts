import { createStyles, MantineColor, rem, getSize } from '@mantine/styles';
import { sizes } from '../SliderRoot/SliderRoot.styles';

interface MarksStyles {
  color: MantineColor;
  disabled: boolean;
}

export default createStyles((theme, { color, disabled }: MarksStyles, { size }) => ({
  marksContainer: {
    position: 'absolute',
    right: getSize({ sizes, size }),
    left: getSize({ sizes, size }),
  },

  markWrapper: {
    position: 'absolute',
    top: `calc(${rem(getSize({ sizes, size }))} / 2)`,
    zIndex: 2,
    height: 0,
  },

  mark: {
    boxSizing: 'border-box',
    border: `${rem(2)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
    height: getSize({ sizes, size }),
    width: getSize({ sizes, size }),
    borderRadius: 1000,
    transform: `translateX(calc(-${getSize({ sizes, size })} / 2))`,
    backgroundColor: theme.white,
    pointerEvents: 'none',
  },

  markFilled: {
    borderColor: disabled
      ? theme.colorScheme === 'dark'
        ? theme.colors.dark[3]
        : theme.colors.gray[4]
      : theme.fn.variant({ variant: 'filled', color }).background,
  },

  markLabel: {
    transform: `translate(-50%, calc(${theme.spacing.xs} / 2))`,
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    userSelect: 'none',
  },
}));
