/* eslint-disable import/no-relative-packages */
import React from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { Code, UnstyledButton, RemoveScroll, rem } from '@k-link/core';
import { useSpotlight } from '@k-link/spotlight';
import { HeaderControls } from '@k-link/ds';
import corePackageJson from '../../../../../package.json';
import { Logo } from '../../Logo/Logo';
import { useDirectionContext } from '../DirectionContext';
import useStyles from './HeaderDesktop.styles';

export function HeaderDesktop() {
  const { classes, cx } = useStyles();
  const { dir, toggleDirection } = useDirectionContext();
  const spotlight = useSpotlight();

  return (
    <div className={cx(classes.header, RemoveScroll.classNames.fullWidth)}>
      <div className={classes.mainSection}>
        <div className={classes.logoWrapper}>
          <div className={classes.logo}>
            <Logo />
          </div>

          <UnstyledButton mt={2}>
            <Code className={classes.version}>
              v{corePackageJson.version}{' '}
              <IconChevronDown size={rem(12)} className={classes.chevron} />
            </Code>
          </UnstyledButton>
        </div>
      </div>

      <HeaderControls
        pr="md"
        onSearch={spotlight.openSpotlight}
        githubLink="https://github.com/mantinedev/k-link"
        direction={dir}
        toggleDirection={toggleDirection}
      />
    </div>
  );
}
