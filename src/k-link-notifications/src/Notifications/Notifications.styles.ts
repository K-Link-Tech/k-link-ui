import { createStyles } from '@k-link/core';

//TODO: need to uncomment back and change 'any' type
// interface NotificationsStylesParams {
//   zIndex: React.CSSProperties['zIndex'];
// }

// export default createStyles((theme, { zIndex }: NotificationsStylesParams) => ({
export default createStyles((theme, { zIndex }: any) => ({
  notifications: {
    width: `calc(100% - ${theme.spacing.md} * 2)`,
    boxSizing: 'border-box',
    position: 'fixed',
    zIndex,
  },

  notification: {
    '&:not(:first-of-type)': {
      marginTop: theme.spacing.sm,
    },
  },
}));
