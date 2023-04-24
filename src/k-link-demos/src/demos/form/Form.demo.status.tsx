import React from 'react';
import { useForm } from '@k-link/form';
import { MantineDemo } from '@k-link/ds';
import { TextInput, Text, Box } from '@k-link/core';

const code = `
import { useForm } from '@k-link/form';
import { TextInput, Text, Box } from '@k-link/core';

function Demo() {
  const form = useForm({ initialValues: { text: 'initial value' } });

  return (
    <Box maw={400} mx="auto">
      <TextInput
        {...form.getInputProps('text')}
        label="Touched/dirty demo"
        placeholder="Touched/dirty demo"
      />

      <Text size="sm" mt="sm">
        Touched:{' '}
        <Text span color={form.isTouched('text') ? 'blue' : 'error'}>
          {form.isTouched('text') ? 'touched' : 'not touched'}
        </Text>
      </Text>

      <Text size="sm">
        Dirty:{' '}
        <Text span color={form.isDirty('text') ? 'blue' : 'error'}>
          {form.isDirty('text') ? 'dirty' : 'not dirty'}
        </Text>
      </Text>
    </Box>
  );
}
`;

function Demo() {
  const form = useForm({ initialValues: { text: 'initial value' } });

  return (
    <Box maw={400} mx="auto">
      <TextInput
        {...form.getInputProps('text')}
        label="Touched/dirty demo"
        placeholder="Touched/dirty demo"
      />

      <Text size="sm" mt="sm">
        Touched:{' '}
        <Text span color={form.isTouched('text') ? 'blue' : 'error'}>
          {form.isTouched('text') ? 'touched' : 'not touched'}
        </Text>
      </Text>

      <Text size="sm">
        Dirty:{' '}
        <Text span color={form.isDirty('text') ? 'blue' : 'error'}>
          {form.isDirty('text') ? 'dirty' : 'not dirty'}
        </Text>
      </Text>
    </Box>
  );
}

export const status: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
