import { createStyles, rem } from '@k-link/core';

export default createStyles((theme) => ({
  image: {
    boxShadow: theme.shadows.md,
    borderRadius: theme.radius.md,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[3]
    }`,
  },
}));
