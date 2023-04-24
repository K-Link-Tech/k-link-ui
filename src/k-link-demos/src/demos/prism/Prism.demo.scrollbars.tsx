import React from 'react';
import { Text } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { Prism } from '@k-link/prism';

const code = `
import { Text } from '@k-link/core';
import { Prism } from '@k-link/prism';

const longCode = \`
<p>
  Long code that will force Prism to have a horizontal scrollbar, by default, scroll behavior is handled by ScrollArea component, but it can be changed to native browser scrollbars
</p>
\`;

function Demo() {
  return (
    <>
      <Text mb={5}>With ScrollArea component (default):</Text>
      <Prism language="tsx">{longCode}</Prism>

      <Text mb={5} mt="xl">With native scrollbars:</Text>
      <Prism language="tsx" scrollAreaComponent="div">{longCode}</Prism>
    </>
  );
}
`;

const longCode = `<p>
  Long code that will force Prism to have a horizontal scrollbar, by default, scroll behavior is handled by ScrollArea component, but it can be changed to native browser scrollbars
</p>`;

function Demo() {
  return (
    <>
      <Text mb={5}>With ScrollArea component (default):</Text>
      <Prism language="tsx">{longCode}</Prism>
      <Text mb={5} mt="xl">
        With native scrollbars:
      </Text>
      <Prism language="tsx" scrollAreaComponent="div">
        {longCode}
      </Prism>
    </>
  );
}

export const scrollbars: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
