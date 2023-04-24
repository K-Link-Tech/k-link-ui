import React from 'react';
import { Slider, RangeSlider, rem } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { IconHeart, IconHeartBroken } from '@tabler/icons-react';

const code = `
import { Slider, RangeSlider, rem } from '@k-link/core';
import { IconHeart, IconHeartBroken } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <Slider
        thumbChildren={<IconHeart size="1rem" />}
        color="error"
        label={null}
        defaultValue={40}
        thumbSize={26}
        styles={{ thumb: { borderWidth: rem(2), padding: rem(3) } }}
      />

      <RangeSlider
        mt="xl"
        styles={{ thumb: { borderWidth: rem(2), padding: rem(3) } }}
        color="error"
        label={null}
        defaultValue={[20, 60]}
        thumbSize={26}
        thumbChildren={[<IconHeart size="1rem" key="1" />, <IconHeartBroken size="1rem" key="2" />]}
      />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Slider
        thumbChildren={<IconHeart size="1rem" stroke={1.5} />}
        color="error"
        label={null}
        defaultValue={40}
        thumbSize={26}
        styles={{ thumb: { borderWidth: rem(2), padding: rem(3) } }}
      />

      <RangeSlider
        mt="xl"
        styles={{ thumb: { borderWidth: rem(2), padding: rem(3) } }}
        color="error"
        label={null}
        defaultValue={[20, 60]}
        thumbSize={26}
        thumbChildren={[
          <IconHeart size="1rem" stroke={1.5} key="1" />,
          <IconHeartBroken size="1rem" stroke={1.5} key="2" />,
        ]}
      />
    </>
  );
}

export const thumbChildren: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
