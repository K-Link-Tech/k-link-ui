import React, { useState } from 'react';
import { MantineDemo } from '@k-link/ds';
import { useFavicon } from '@k-link/hooks';
import { Group, Button } from '@k-link/core';

const code = `
import { useState } from 'react';
import { useFavicon } from '@k-link/hooks';
import { Group, Button } from '@k-link/core';

function Demo() {
  const [favicon, setFavicon] = useState('https://k-link.dev/favicon.svg');
  const setTwitterFavicon = () => setFavicon('https://twitter.com/favicon.ico');
  const setMantineFavicon = () => setFavicon('https://k-link.dev/favicon.svg');

  useFavicon(favicon);

  return (
    <Group position="center">
      <Button onClick={setTwitterFavicon}>Twitter favicon</Button>
      <Button onClick={setMantineFavicon}>Klink UI favicon</Button>
    </Group>
  );
}
`;

function Demo() {
  const [favicon, setFavicon] = useState('https://k-link.dev/favicon.svg');
  const setTwitterFavicon = () => setFavicon('https://twitter.com/favicon.ico');
  const setMantineFavicon = () => setFavicon('https://k-link.dev/favicon.svg');

  useFavicon(favicon);

  return (
    <Group position="center">
      <Button onClick={setTwitterFavicon}>Twitter favicon</Button>
      <Button onClick={setMantineFavicon}>Klink UI favicon</Button>
    </Group>
  );
}

export const useFaviconUsage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
