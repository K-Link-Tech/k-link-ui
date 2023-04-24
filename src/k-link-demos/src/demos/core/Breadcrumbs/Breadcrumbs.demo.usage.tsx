import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { useMantineTheme, Breadcrumbs, Anchor } from '@k-link/core';

const code = `
import { Breadcrumbs, Anchor } from '@k-link/core';

const items = [
  { title: 'Klink UI', href: '#' },
  { title: 'Klink UI hooks', href: '#' },
  { title: 'use-id', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

function Demo() {
  return (
    <>
      <Breadcrumbs>{items}</Breadcrumbs>
      <Breadcrumbs separator="→" mt="xs">{items}</Breadcrumbs>
    </>
  );
}
`;

const items = [
  { title: 'Klink UI', href: 'https://k-link.dev' },
  { title: 'Klink UI hooks', href: '#' },
  { title: 'use-id', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

function Demo() {
  const theme = useMantineTheme();

  return (
    <>
      <Breadcrumbs>{items}</Breadcrumbs>
      <Breadcrumbs separator={theme.dir === 'ltr' ? '→' : '←'} mt="xs">
        {items}
      </Breadcrumbs>
    </>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
