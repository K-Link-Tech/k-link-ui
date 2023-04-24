import React, { useState } from 'react';
import { useDocumentTitle, randomId } from '@k-link/hooks';
import { MantineDemo } from '@k-link/ds';
import { Group, Button } from '@k-link/core';

const code = `
import { useState } from 'react';
import { useDocumentTitle, randomId } from '@k-link/hooks';
import { Button } from '@k-link/core';

function Demo() {
  const [title, setTitle] = useState('');
  useDocumentTitle(title);

  return (
    <Button onClick={() => setTitle(randomId())}>
      Set document title to random id
    </Button>
  );
}`;

function Demo() {
  const [title, setTitle] = useState('');
  useDocumentTitle(title);

  return (
    <Group position="center">
      <Button onClick={() => setTitle(randomId())}>Set document title to random id</Button>
    </Group>
  );
}

export const useDocumentTitleDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
