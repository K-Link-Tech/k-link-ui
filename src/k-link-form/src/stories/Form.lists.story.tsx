import React from 'react';
import { TextInput, Switch, ActionIcon, Group, Text, Button } from '@k-link/core';
import { randomId } from '@k-link/hooks';
import { FormBase } from './_base';
import { useForm } from '../use-form';

export default { title: 'Form' };

export function Lists() {
  const form = useForm({
    initialValues: {
      employees: [
        { name: '', active: false, key: randomId() },
        { name: '', active: false, key: randomId() },
        { name: '', active: false, key: randomId() },
      ],
    },

    validate: {
      employees: {
        name: (value) => (value.length < 2 ? 'Too short' : null),
      },
    },
  });

  const fields = form.values.employees.map((item, index) => (
    <Group key={item.key} mt="xs">
      <TextInput
        placeholder="John Doe"
        sx={{ flex: 1 }}
        {...form.getInputProps(`employees.${index}.name`)}
      />
      <Switch
        label="Active"
        {...form.getInputProps(`employees.${index}.active`, { type: 'checkbox' })}
      />
      <ActionIcon color="error" onClick={() => form.removeListItem('employees', index)}>
        $
      </ActionIcon>
    </Group>
  ));

  return (
    <FormBase form={form}>
      {fields.length > 0 ? (
        <Group mb="xs">
          <Text weight={500} size="sm" sx={{ flex: 1 }}>
            Name
          </Text>
          <Text weight={500} size="sm" pr={90}>
            Status
          </Text>
        </Group>
      ) : (
        <Text color="dimmed" align="center">
          No one here...
        </Text>
      )}

      {fields}

      <Group position="center" mt="md">
        <Button
          onClick={() =>
            form.insertListItem('employees', { name: '', active: false, key: randomId() })
          }
        >
          Add employee
        </Button>
      </Group>
    </FormBase>
  );
}
