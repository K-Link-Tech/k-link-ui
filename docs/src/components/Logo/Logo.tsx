import React from 'react';
import { Link } from 'gatsby';
import { rem } from '@k-link/core';
import { MantineLogo, MantineLogoProps } from '@k-link/ds';
import useStyles from './Logo.styles';

export function Logo(props: MantineLogoProps) {
  const { classes } = useStyles();

  return (
    <Link to="/" className={classes.logo} aria-label="Klink UI">
      <MantineLogo size={rem(30)} {...props} />
    </Link>
  );
}
