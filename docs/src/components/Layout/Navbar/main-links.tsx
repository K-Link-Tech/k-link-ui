import React from 'react';
import { DEFAULT_THEME } from '@k-link/core';
import { IconCode, IconStar, IconRocket } from '@tabler/icons-react';
import { MantineLogo } from '@k-link/ds';

export default [
  {
    to: '/pages/getting-started/',
    label: 'Getting started',
    color: DEFAULT_THEME.colors.blue[5],
    icon: IconRocket,
  },
  {
    to: '/pages/basics/',
    label: 'Learn the basics',
    color: DEFAULT_THEME.colors.purple[5],
    icon: IconStar,
  },
  {
    to: '/pages/about/',
    label: 'About Klink UI',
    color: DEFAULT_THEME.colors.indigo[5],
    icon: (props: any) => <MantineLogo type="mark" {...props} />,
    rawIcon: true,
  },
  {
    to: 'https://ui.mantine.dev/',
    label: 'Klink UI',
    color: DEFAULT_THEME.colors.blue_light[5],
    icon: (props: any) => <MantineLogo type="mark" variant="ui.mantine.dev" {...props} />,
    rawIcon: true,
  },
  { to: '/pages/contributing/', label: 'Contribute', color: '#000', icon: IconCode },
];
