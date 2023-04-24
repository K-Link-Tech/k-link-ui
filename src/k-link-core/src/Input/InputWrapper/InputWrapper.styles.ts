import { createStyles } from '@k-link/styles';

export default createStyles((theme) => ({
  root: {
    ...theme.fn.fontStyles(),
    lineHeight: theme.lineHeight,
  },
}));
