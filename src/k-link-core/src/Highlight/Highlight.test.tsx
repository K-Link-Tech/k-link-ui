import React from 'react';
import { render } from '@testing-library/react';
import {
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@k-link/tests';
import { Highlight, HighlightProps } from './Highlight';

const defaultProps: HighlightProps = { children: 'Hello', highlight: 'He' };

describe('@k-link/core/Highlight', () => {
  itIsPolymorphic(Highlight as any, defaultProps);
  itSupportsProviderVariant(Highlight, defaultProps, 'Highlight');
  itSupportsProviderSize(Highlight, defaultProps, 'Highlight');
  itSupportsSystemProps({
    component: Highlight,
    props: defaultProps,
    displayName: '@k-link/core/Highlight',
    refType: HTMLDivElement,
  });

  it('highlights correct value', () => {
    const { container } = render(<Highlight highlight="he">Hello</Highlight>);
    expect(container.querySelector('mark').textContent).toBe('He');
  });
});
