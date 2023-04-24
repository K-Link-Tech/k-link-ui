import { createStyles } from '@k-link/core';

export default createStyles((theme) => ({
  logo: {
    ...theme.fn.focusStyles(),
    textDecoration: 'none',
    userSelect: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));
