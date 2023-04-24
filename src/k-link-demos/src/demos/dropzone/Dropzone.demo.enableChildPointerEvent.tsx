import React, { useRef } from 'react';
import { Button, Group } from '@k-link/core';
import { Dropzone } from '@k-link/dropzone';
import { MantineDemo } from '@k-link/ds';

const code = `
import { useRef } from 'react';
import { Button, Group } from '@k-link/core';
import { Dropzone } from '@k-link/dropzone';

function Demo() {
  const openRef = useRef<() => void>(null);

  return (
    <>
      <Dropzone
        openRef={openRef}
        onDrop={() => {}}
        activateOnClick={false}
        styles={{ inner: { pointerEvents: 'all' } }}
      >
        <Group position="center">
          <Button onClick={() => openRef.current()}>Select files</Button>
        </Group>
      </Dropzone>
    </>
  );
}

`;

function Demo() {
  const openRef = useRef<() => void>(null);

  return (
    <>
      <Dropzone
        openRef={openRef}
        onDrop={() => {}}
        activateOnClick={false}
        styles={{ inner: { pointerEvents: 'all' } }}
      >
        <Group position="center">
          <Button onClick={() => openRef.current()}>Select files</Button>
        </Group>
      </Dropzone>
    </>
  );
}

export const enableChildPointerEvent: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
