import React, { useState } from 'react';
import { MantineDemo } from '@k-link/ds';
import { ActionIcon, Group, ColorSwatch, Text } from '@k-link/core';
import { IconColorPicker } from '@tabler/icons-react';
import { useEyeDropper } from '@k-link/hooks';

const code = `
import { useState } from 'react';
import { ActionIcon, Group, ColorSwatch, Text } from '@k-link/core';
import { IconColorPicker } from '@tabler/icons-react';
import { useEyeDropper } from '@k-link/hooks';

function Demo() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(null);
  const { supported, open } = useEyeDropper();

  const pickColor = async () => {
    try {
      const { sRGBHex } = await open();
      setColor(sRGBHex);
    } catch (e) {
      setError(e);
    }
  };

  if (!supported) {
    return <Text ta="center">EyeDropper API is not supported in your browser</Text>;
  }

  return (
    <Group>
      <ActionIcon variant="default" onClick={pickColor}>
        <IconColorPicker size="1rem" stroke={1.5} />
      </ActionIcon>
      {color ? (
        <Group spacing="xs">
          <ColorSwatch color={color} />
          <Text>Picked color: {color}</Text>
        </Group>
      ) : (
        <Text>Click the button to pick color</Text>
      )}
      {error && <Text color="error">Error: {error?.message}</Text>}
    </Group>
  );
}
`;

function Demo() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(null);
  const { supported, open } = useEyeDropper();

  const pickColor = async () => {
    try {
      const { sRGBHex } = await open();
      setColor(sRGBHex);
    } catch (e) {
      setError(e);
    }
  };

  if (!supported) {
    return <Text ta="center">EyeDropper API is not supported in your browser</Text>;
  }

  return (
    <Group>
      <ActionIcon variant="default" onClick={pickColor}>
        <IconColorPicker size="1rem" stroke={1.5} />
      </ActionIcon>
      {color ? (
        <Group spacing="xs">
          <ColorSwatch color={color} />
          <Text>Picked color: {color}</Text>
        </Group>
      ) : (
        <Text>Click the button to pick color</Text>
      )}
      {error && <Text color="error">Error: {error?.message}</Text>}
    </Group>
  );
}

export const useEyeDropperUsage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
