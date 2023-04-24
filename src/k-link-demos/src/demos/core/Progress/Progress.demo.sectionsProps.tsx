import React, { useState } from 'react';
import { MantineDemo } from '@k-link/ds';
import { Progress, Text } from '@k-link/core';

const code = `
import { useState } from 'react';
import { Progress, Text } from '@k-link/core';

function Demo() {
  const [hovered, setHovered] = useState(-1);
  const reset = () => setHovered(-1);
  return (
    <>
      <Progress
        onMouseLeave={() => setHovered(-1)}
        size="xl"
        sections={[
          { value: 40, color: 'blue_light', onMouseEnter: () => setHovered(0), onMouseLeave: reset },
          { value: 20, color: 'blue', onMouseEnter: () => setHovered(1), onMouseLeave: reset },
          { value: 15, color: 'indigo', onMouseEnter: () => setHovered(2), onMouseLeave: reset },
        ]}
      />
      <Text>Hovered section: {hovered === -1 ? 'none' : hovered}</Text>
    </>
  );
}
`;

function Demo() {
  const [hovered, setHovered] = useState(-1);
  const reset = () => setHovered(-1);
  return (
    <>
      <Progress
        onMouseLeave={() => setHovered(-1)}
        size="xl"
        sections={[
          {
            value: 40,
            color: 'blue_light',
            onMouseEnter: () => setHovered(0),
            onMouseLeave: reset,
          },
          { value: 20, color: 'blue', onMouseEnter: () => setHovered(1), onMouseLeave: reset },
          { value: 15, color: 'indigo', onMouseEnter: () => setHovered(2), onMouseLeave: reset },
        ]}
      />
      <Text>Hovered section: {hovered === -1 ? 'none' : hovered}</Text>
    </>
  );
}

export const sectionsProps: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
