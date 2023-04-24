import React from 'react';
import { render } from '@testing-library/react';
import {
  checkAccessibility,
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@k-link/tests';
import { Notification, NotificationProps } from './Notification';

const defaultProps: NotificationProps = {
  title: 'test-notification',
  closeButtonProps: { title: 'test-close' },
};

describe('@k-link/core/Notification', () => {
  itRendersChildren(Notification, defaultProps);
  itSupportsProviderVariant(Notification, defaultProps, 'Notification');
  checkAccessibility([<Notification {...defaultProps} />]);
  itSupportsSystemProps({
    component: Notification,
    props: defaultProps,
    displayName: '@k-link/core/Notification',
    refType: HTMLDivElement,
    providerName: 'Notification',
  });

  it('does not render close button if withCloseButton is false', () => {
    const { container: withCloseButton } = render(<Notification {...defaultProps} />);
    const { container: withoutCloseButton } = render(
      <Notification {...defaultProps} withCloseButton={false} />
    );
    expect(withCloseButton.querySelectorAll('.k-link-Notification-closeButton')).toHaveLength(1);
    expect(withoutCloseButton.querySelectorAll('.k-link-Notification-closeButton')).toHaveLength(0);
  });

  it('renders given icon', () => {
    const { container: withIcon } = render(<Notification {...defaultProps} icon="test-icon" />);
    const { container: withoutIcon } = render(<Notification {...defaultProps} icon={null} />);
    expect(withIcon.querySelector('.k-link-Notification-icon').textContent).toBe('test-icon');
    expect(withoutIcon.querySelector('.k-link-Notification-icon')).toBe(null);
  });

  it('displays loader when loading prop is true', () => {
    const { container: loading } = render(
      <Notification {...defaultProps} loading icon="test-icon" />
    );
    const { container: notLoading } = render(
      <Notification {...defaultProps} icon="test-icon" loading={false} />
    );
    expect(loading.querySelector('.k-link-Notification-loader')).toBeInTheDocument();
    expect(loading.querySelector('.k-link-Notification-icon')).toBe(null);
    expect(notLoading.querySelector('.k-link-Notification-loader')).toBe(null);
    expect(notLoading.querySelector('.k-link-Notification-icon')).toBeInTheDocument();
    expect(notLoading.querySelector('.k-link-Notification-icon').textContent).toBe('test-icon');
  });

  it('renders given title', () => {
    const { container: withTitle } = render(<Notification {...defaultProps} title="test-title" />);
    const { container: withoutTitle } = render(<Notification {...defaultProps} title={null} />);
    expect(withTitle.querySelector('.k-link-Notification-title').textContent).toBe('test-title');
    expect(withoutTitle.querySelectorAll('.k-link-Notification-title')).toHaveLength(0);
  });
});
