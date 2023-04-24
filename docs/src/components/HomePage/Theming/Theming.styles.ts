import { createStyles, rem } from '@k-link/core';

export default createStyles((theme) => ({
  prism: {
    '& pre': {
      backgroundColor: `${
        theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white
      } !important`,
      borderRadius: theme.radius.md,
      padding: rem(14),
      paddingTop: rem(30),
      paddingBottom: rem(30),
    },

    '& .k-link-ScrollArea-viewport': {
      borderRadius: theme.radius.md,
    },

    '& .k-link-ScrollArea-root': {
      marginTop: theme.spacing.xl,
      borderRadius: theme.radius.md,
      boxShadow: theme.shadows.md,
    },
  },
}));
