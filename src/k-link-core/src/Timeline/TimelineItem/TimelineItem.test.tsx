import React from 'react';
import { render, screen } from '@testing-library/react';
import { itRendersChildren, itSupportsSystemProps } from '@k-link/tests';
import { TimelineItem, TimelineItemProps } from './TimelineItem';

const defaultProps: TimelineItemProps = {};

describe('@k-link/core/TimelineItem', () => {
  itRendersChildren(TimelineItem, defaultProps);
  itSupportsSystemProps({
    component: TimelineItem,
    props: defaultProps,
    displayName: '@k-link/core/TimelineItem',
    refType: HTMLDivElement,
    providerName: 'TimelineItem',
  });

  it('renders given bullet', () => {
    render(<TimelineItem bullet="test-bullet" />);
    expect(screen.getByText('test-bullet')).toBeInTheDocument();
  });

  it('renders given title', () => {
    render(<TimelineItem title="test-title" />);
    expect(screen.getByText('test-title')).toBeInTheDocument();
  });
});
