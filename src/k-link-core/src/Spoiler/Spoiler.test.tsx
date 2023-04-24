import React from 'react';
import {
  checkAccessibility,
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@k-link/tests';
import { Spoiler, SpoilerProps } from './Spoiler';

const defaultProps: SpoilerProps = {
  maxHeight: 100,
  showLabel: 'show',
  hideLabel: 'hide',
  children: 'test-children',
};

describe('@k-link/core/Spoiler', () => {
  checkAccessibility([<Spoiler {...defaultProps} />]);
  itRendersChildren(Spoiler, defaultProps);
  itSupportsProviderVariant(Spoiler, defaultProps, 'Spoiler');
  itSupportsSystemProps({
    component: Spoiler,
    props: defaultProps,
    displayName: '@k-link/core/Spoiler',
    refType: HTMLDivElement,
    providerName: 'Spoiler',
  });
});
