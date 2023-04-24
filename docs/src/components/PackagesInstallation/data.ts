export const PACKAGES_DATA = [
  {
    package: '@k-link/hooks',
    description: 'Hooks for state and UI management',
    dependencies: ['@k-link/hooks'],
  },
  {
    package: '@k-link/core',
    description: 'Core components library: inputs, buttons, overlays, etc.',
    dependencies: ['@k-link/hooks', '@k-link/core'],
  },
  {
    package: '@k-link/form',
    description: 'Form management library',
    dependencies: ['@k-link/form'],
  },
  {
    package: '@k-link/dates',
    description: 'Date inputs, calendars',
    dependencies: ['@k-link/hooks', '@k-link/core', '@k-link/dates', 'dayjs'],
  },
  {
    package: '@k-link/notifications',
    description: 'Notifications system',
    dependencies: ['@k-link/hooks', '@k-link/core', '@k-link/notifications'],
  },
  {
    package: '@k-link/prism',
    description: 'Code highlight with your theme colors and styles',
    dependencies: ['@k-link/hooks', '@k-link/core', '@k-link/prism'],
  },
  {
    package: '@k-link/tiptap',
    description: 'Rich text editor based on Tiptap',
    dependencies: [
      '@k-link/hooks',
      '@k-link/core',
      '@k-link/tiptap',
      '@tabler/icons-react@1.119.0',
      '@tiptap/react',
      '@tiptap/extension-link',
      '@tiptap/starter-kit',
    ],
  },
  {
    package: '@k-link/dropzone',
    description: 'Capture files with drag and drop',
    dependencies: ['@k-link/hooks', '@k-link/core', '@k-link/dropzone'],
  },
  {
    package: '@k-link/carousel',
    description: 'Embla based carousel component',
    dependencies: ['@k-link/hooks', '@k-link/core', '@k-link/carousel', 'embla-carousel-react'],
  },
  {
    package: '@k-link/spotlight',
    description: 'Overlay command center',
    dependencies: ['@k-link/hooks', '@k-link/core', '@k-link/spotlight'],
  },
  {
    package: '@k-link/modals',
    description: 'Centralized modals manager',
    dependencies: ['@k-link/hooks', '@k-link/core', '@k-link/modals'],
  },
  {
    package: '@k-link/nprogress',
    description: 'Navigation progress',
    dependencies: ['@k-link/hooks', '@k-link/core', '@k-link/nprogress'],
  },
];
