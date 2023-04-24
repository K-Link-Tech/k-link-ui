import type { AvatarStylesNames } from '@k-link/core';

export const Avatar: Record<AvatarStylesNames, string> = {
  parentRoot: 'Container Root element',
  root: 'Root element',
  image: 'Main img tag, rendered when src is set to valid image url',
  placeholder: 'Placeholder element, rendered when src is null or image cannot be loaded',
  placeholderIcon: 'Default placeholder icon',
  addIcon: 'Add Avatar placeholder icon',
  activeStatusContainer: 'Online active status icon wrapper',
  activeStatusIcon: 'Online active status icon',
};
