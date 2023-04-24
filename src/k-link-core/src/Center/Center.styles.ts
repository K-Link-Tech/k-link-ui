import { createStyles } from '@k-link/styles';

export interface CenterStylesParams {
  inline: boolean;
}

export default createStyles((theme, { inline }: CenterStylesParams) => ({
  root: {
    display: inline ? 'inline-flex' : 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
