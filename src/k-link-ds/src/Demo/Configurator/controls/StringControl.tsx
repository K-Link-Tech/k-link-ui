import React from 'react';
import { TextInput } from '@k-link/core';
import { upperFirst } from '@k-link/hooks';

interface StringControlProps {
  value: string;
  label: string;
  onChange(value: string): void;
}

export function StringControl({ value, label, onChange, ...others }: StringControlProps) {
  return (
    <TextInput
      {...others}
      label={upperFirst(label)}
      placeholder={upperFirst(label)}
      value={value}
      onChange={(event) => onChange(event.currentTarget.value)}
    />
  );
}

StringControl.initialValue = '';
