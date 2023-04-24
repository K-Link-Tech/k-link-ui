import React from 'react';
import { render } from '@testing-library/react';
import { itSupportsSystemProps, itSupportsProviderVariant } from '@k-link/tests';
import { Prism, PrismProps } from './Prism';

const defaultProps: PrismProps = {
  children: 'test',
  withLineNumbers: true,
  language: 'tsx',
};

describe('@k-link/prism/Prism', () => {
  itSupportsProviderVariant(Prism, defaultProps, 'Prism');
  itSupportsSystemProps({
    component: Prism,
    props: defaultProps,
    displayName: '@k-link/prism/Prism',
    refType: HTMLDivElement,
  });

  it('renders tooltip based on noCopy prop', () => {
    const { container: withCopy } = render(<Prism {...defaultProps} noCopy={false} />);
    const { container: withoutCopy } = render(<Prism {...defaultProps} noCopy />);

    expect(withCopy.querySelectorAll('.k-link-Prism-copy')).toHaveLength(1);
    expect(withoutCopy.querySelectorAll('.k-link-Prism-copy')).toHaveLength(0);
  });

  it('renders line numbers based on withLineNumbers prop', () => {
    const { container: withLineNumbers } = render(<Prism {...defaultProps} withLineNumbers />);
    const { container: withoutLineNumbers } = render(
      <Prism {...defaultProps} withLineNumbers={false} />
    );
    expect(withLineNumbers.querySelectorAll('.k-link-Prism-lineNumber')).toHaveLength(
      defaultProps.children.split('\n').length
    );
    expect(withoutLineNumbers.querySelectorAll('.k-link-Prism-lineNumber')).toHaveLength(0);
  });
});
