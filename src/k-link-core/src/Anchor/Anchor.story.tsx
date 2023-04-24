import React from 'react';
import { Anchor } from './Anchor';

export default { title: 'Anchor' };

export function CustomComponent() {
  return (
    <div style={{ padding: 40 }}>
      <Anchor component="button" type="button" color="error.9">
        Anchor as button
      </Anchor>

      <br />

      <Anchor component="span">Anchor as span</Anchor>
    </div>
  );
}

export function WithTextProps() {
  return (
    <div style={{ padding: 40 }}>
      <Anchor size="lg" weight={700} color="error">
        Text props
      </Anchor>
    </div>
  );
}

export function InheritFontSize() {
  return (
    <div style={{ padding: 40, fontSize: 50 }}>
      <Anchor href="https://k-link.dev/">Should be 50px</Anchor>
    </div>
  );
}

export function WithUnderlineProp() {
  return (
    <div style={{ padding: 40 }}>
      <Anchor href="/">Underline should be ENABLED</Anchor>
      <br />
      <Anchor href="/" underline={false}>
        Underline should be DISABLED
      </Anchor>
    </div>
  );
}
