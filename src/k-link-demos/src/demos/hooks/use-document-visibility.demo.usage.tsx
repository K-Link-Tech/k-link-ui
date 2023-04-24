import React from 'react';
import { Text } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { useDocumentTitle, useDocumentVisibility } from '@k-link/hooks';

const code = `
import { Text } from '@k-link/core';
import { useDocumentTitle, useDocumentVisibility } from '@k-link/hooks';

function Demo() {
  const documentState = useDocumentVisibility();
  useDocumentTitle(\`Document is \${documentState}\`);
  return <Text>Switch to another tab to see document title change</Text>;
}
`;

function Demo() {
  const documentState = useDocumentVisibility();
  useDocumentTitle(`Document is ${documentState}`);
  return <Text>Switch to another tab to see document title change</Text>;
}

export const useDocumentVisibilityDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
