import React, { forwardRef } from 'react';
import { useComponentDefaultProps } from '@k-link/styles';
import { ForwardRefWithStaticComponents } from '@k-link/utils';
import {
  HorizontalSection,
  HorizontalSectionSharedProps,
} from '../HorizontalSection/HorizontalSection';
import { Section } from '../HorizontalSection/Section/Section';

export interface NavbarProps
  extends HorizontalSectionSharedProps,
    React.ComponentPropsWithRef<'nav'> {
  /** Navbar content */
  children: React.ReactNode;
}

type NavbarComponent = ForwardRefWithStaticComponents<NavbarProps, { Section: typeof Section }>;

const defaultProps: Partial<NavbarProps> = {
  fixed: false,
  position: { top: 0, left: 0 },
  hiddenBreakpoint: 'md',
  hidden: false,
};

export const Navbar: NavbarComponent = forwardRef<HTMLElement, NavbarProps>(
  (props: NavbarProps, ref) => {
    const _props = useComponentDefaultProps('Navbar', defaultProps, props);
    return <HorizontalSection section="navbar" __staticSelector="Navbar" ref={ref} {..._props} />;
  }
) as any;

Navbar.Section = Section;
Navbar.displayName = '@k-link/core/Navbar';
