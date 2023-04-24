import React, { useState } from 'react';
import { useDebouncedValue } from '@k-link/hooks';
import { MantineDemo } from '@k-link/ds';
import { TextInput, Text, Box } from '@k-link/core';

const code = `
import { useState } from 'react';
import { useDebouncedValue } from '@k-link/hooks';
import { TextInput, Text } from '@k-link/core';

function Demo() {
  const [value, setValue] = useState('');
  const [debounced] = useDebouncedValue(value, 200);

  return (
    <>
      <TextInput
        label="Enter value to see debounce"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <Text>Value: {value}</Text>
      <Text>Debounced value: {debounced}</Text>
    </>
  );
}
`;

function Demo() {
  const [value, setValue] = useState('');
  const [debounced] = useDebouncedValue(value, 200);

  return (
    <Box maw={400} mx="auto">
      <TextInput
        label="Enter value to see debounce effect"
        placeholder="Enter value to see debounce effect"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
      <Text mt="sm">
        <Text component="span" color="dimmed" size="sm">
          Value:
        </Text>{' '}
        {value.trim() || '[empty string]'}
      </Text>
      <Text>
        <Text component="span" color="dimmed" size="sm">
          Debounced value:
        </Text>{' '}
        {debounced.trim() || '[empty string]'}
      </Text>
    </Box>
  );
}

export const useDebouncedValueUsage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
