import React from 'react';
import { IconPhoto, IconPrinter, IconCameraSelfie } from '@tabler/icons-react';
import { MantineDemo } from '@k-link/ds';
import { Accordion, AccordionProps, useMantineTheme, Box, rem } from '@k-link/core';

const code = `
import { IconPhoto, IconPrinter, IconCameraSelfie } from '@tabler/icons-react';
import { Accordion, useMantineTheme, rem } from '@k-link/core';

function Demo() {
  const theme = useMantineTheme();
  const getColor = (color: string) => theme.colors[color][theme.colorScheme === 'dark' ? 5 : 7];

  return (
    <Accordion variant="contained">
      <Accordion.Item value="photos">
        <Accordion.Control icon={<IconPhoto size={rem(20)} color={getColor('error')} />}>
          Recent photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="print">
        <Accordion.Control icon={<IconPrinter size={rem(20)} color={getColor('blue')} />}>
          Print photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="camera">
        <Accordion.Control icon={<IconCameraSelfie size={rem(20)} color={getColor('success')} />}>
          Camera settings
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
`;

export function IconsReplacementDemo(props: Partial<AccordionProps>) {
  const theme = useMantineTheme();
  const getColor = (color: string) => theme.colors[color][theme.colorScheme === 'dark' ? 5 : 7];

  return (
    <Accordion variant="contained" {...props}>
      <Accordion.Item value="photos">
        <Accordion.Control icon={<IconPhoto size={rem(20)} color={getColor('error')} />}>
          Recent photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="print">
        <Accordion.Control icon={<IconPrinter size={rem(20)} color={getColor('blue')} />}>
          Print photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="camera">
        <Accordion.Control icon={<IconCameraSelfie size={rem(20)} color={getColor('success')} />}>
          Camera settings
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}

function Demo() {
  return (
    <Box maw={400} mx="auto">
      <IconsReplacementDemo />
    </Box>
  );
}

export const icons: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
