import React, { useState } from 'react';
import { useDebouncedValue } from '@k-link/hooks';
import { MantineDemo } from '@k-link/ds';
import { TextInput, Text, Button, Flex, Box } from '@k-link/core';

const code = `
import { useState } from 'react';
import { useDebouncedValue } from '@k-link/hooks';
import { TextInput, Text, Button } from '@k-link/core';

function Demo() {
  const [value, setValue] = useState('');
  const [debounced, cancel] = useDebouncedValue(value, 1000);

  return (
    <>
      <TextInput
        label="Enter value to see debounce"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <Button onClick={cancel} size="lg">
        Cancel
      </Button>

      <Text>Value: {value}</Text>
      <Text>Debounced value: {debounced}</Text>
    </>
  );
}
`;

function Demo() {
  const [value, setValue] = useState('');
  const [debounced, cancel] = useDebouncedValue(value, 1000);

  return (
    <Box maw={400} mx="auto">
      <Flex align="flex-end">
        <TextInput
          label="Enter value to see debounce effect"
          placeholder="Enter value to see debounce effect"
          value={value}
          sx={{ flex: 1 }}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
        <Button onClick={cancel} ml={15}>
          Cancel
        </Button>
      </Flex>

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

export const useDebouncedValueCancel: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
