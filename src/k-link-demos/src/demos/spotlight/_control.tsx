import React from 'react';
import { Button, Group } from '@k-link/core';
import { useSpotlight } from '@k-link/spotlight';

export function SpotlightControl({ buttonLabel }: { buttonLabel?: string }) {
  const spotlight = useSpotlight();
  return (
    <Group position="center">
      <Button onClick={spotlight.openSpotlight}>{buttonLabel || 'Open spotlight'}</Button>
    </Group>
  );
}
