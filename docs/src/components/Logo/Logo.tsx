import React from 'react';
import { Group, Text } from '@k-link/core';
import { Link } from 'gatsby';
// import { rem } from '@k-link/core';
// import { MantineLogoProps } from '@k-link/ds';
import useStyles from './Logo.styles';
import klinklogo from './klink-logo.svg';

export function Logo() {
  const { classes } = useStyles();

  return (
    <Link to="/" className={classes.logo} aria-label="Klink UI">
      {/* <MantineLogo size={rem(30)} {...props} /> */}
      <Group spacing={4}>
        <img src={klinklogo} alt="klink logo" width={30} height={30} />
        <Text>K-link</Text>
      </Group>
    </Link>
  );
}
