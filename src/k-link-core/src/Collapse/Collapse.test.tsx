import React from 'react';
import { itRendersChildren, itSupportsSystemProps } from '@k-link/tests';
import { Collapse, CollapseProps } from './Collapse';

const defaultProps: CollapseProps = {
  in: true,
  children: <div style={{ height: '50rem' }} />,
};

describe('@k-link/core/Collapse', () => {
  itRendersChildren(Collapse, defaultProps);
  itSupportsSystemProps({
    component: Collapse,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@k-link/core/Collapse',
    providerName: 'Collapse',
  });
});
