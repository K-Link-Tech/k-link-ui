import { createStyles } from '@k-link/core';

export default createStyles(() => ({
  placeholder: {},

  input: {
    cursor: 'pointer',
    lineHeight: 'unset',

    '&[data-read-only]': {
      cursor: 'default',
    },
  },
}));
