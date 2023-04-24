import React from 'react';
import { IconSearch } from '@tabler/icons-react';
import { MantineDemo } from '@k-link/ds';
import { Wrapper } from './_wrapper';

const code = `
import { SpotlightProvider } from '@k-link/spotlight';

function Demo() {
  return (
    <SpotlightProvider
      shortcut="mod + alt + L"
      highlightQuery
      {...otherProps}
    >
      <App />
    </SpotlightProvider>
  );
}
`;

function Demo() {
  return (
    <Wrapper
      searchIcon={<IconSearch size="1.2rem" />}
      searchPlaceholder="Search..."
      shortcut="mod + alt + L"
      highlightQuery
    />
  );
}

export const highlightQuery: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
