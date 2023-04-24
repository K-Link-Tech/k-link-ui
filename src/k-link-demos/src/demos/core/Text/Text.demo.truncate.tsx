import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { Text, Box } from '@k-link/core';

const code = `
import { Text, Box } from '@k-link/core';

function Demo() {
  return (
    <Box w={300}>
      <Text truncate>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id
        necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam
        perspiciatis excepturi iste sint itaque sunt laborum. Nihil?
      </Text>
    </Box>
  );
}
`;

function Demo() {
  return (
    <Box w={300}>
      <Text truncate>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id
        necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam
        perspiciatis excepturi iste sint itaque sunt laborum. Nihil?
      </Text>
    </Box>
  );
}

export const truncate: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
