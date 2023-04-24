import React from 'react';
import type { MantineColor } from '@k-link/styles';

export interface LoaderProps extends React.ComponentPropsWithoutRef<'svg'> {
  size: number | string;
  color: MantineColor;
}
