import React from 'react';
import { render } from '@testing-library/react';
import {
  itSupportsSystemProps,
  itIsPolymorphic,
  itRendersChildren,
  itSupportsProviderVariant,
} from '@k-link/tests';
import { BackgroundImage, BackgroundImageProps } from './BackgroundImage';

const defaultProps: BackgroundImageProps = {
  src: './image.png',
};

describe('@k-link/core/BackgroundImage', () => {
  itIsPolymorphic(BackgroundImage, defaultProps);
  itRendersChildren(BackgroundImage, defaultProps);
  itSupportsProviderVariant(BackgroundImage, defaultProps, 'BackgroundImage');
  itSupportsSystemProps({
    component: BackgroundImage,
    props: defaultProps,
    displayName: '@k-link/core/BackgroundImage',
    refType: HTMLDivElement,
    providerName: 'BackgroundImage',
  });

  it('sets correct image as background', () => {
    const { container } = render(<BackgroundImage src="./image" />);
    expect(container.firstChild).toHaveStyle({ backgroundImage: "url('./image')" });
  });
});
