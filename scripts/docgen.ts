import path from 'path';
import fs from 'fs-extra';
import { DeclarationPath } from './docgen/get-declarations-list';
import { generateDeclarations } from './docgen/generate-declarations';

const EXTRA_FILES_PATHS = [
  // Tabs
  '../src/k-link-core/src/Tabs/TabsList/TabsList.tsx',
  '../src/k-link-core/src/Tabs/Tab/Tab.tsx',
  '../src/k-link-core/src/Tabs/TabsPanel/TabsPanel.tsx',
  '../src/k-link-core/src/Tabs/Tabs.tsx',

  // Accordion
  '../src/k-link-core/src/Accordion/AccordionControl/AccordionControl.tsx',
  '../src/k-link-core/src/Accordion/AccordionItem/AccordionItem.tsx',
  '../src/k-link-core/src/Accordion/AccordionPanel/AccordionPanel.tsx',

  // Tooltip
  '../src/k-link-core/src/Tooltip/TooltipFloating/TooltipFloating.tsx',
  '../src/k-link-core/src/Tooltip/TooltipGroup/TooltipGroup.tsx',

  // Popover
  '../src/k-link-core/src/Popover/PopoverTarget/PopoverTarget.tsx',
  '../src/k-link-core/src/Popover/PopoverDropdown/PopoverDropdown.tsx',

  // HoverCard
  '../src/k-link-core/src/HoverCard/HoverCardTarget/HoverCardTarget.tsx',
  '../src/k-link-core/src/HoverCard/HoverCardDropdown/HoverCardDropdown.tsx',

  // Menu
  '../src/k-link-core/src/Menu/MenuTarget/MenuTarget.tsx',
  '../src/k-link-core/src/Menu/MenuDropdown/MenuDropdown.tsx',
  '../src/k-link-core/src/Menu/MenuItem/MenuItem.tsx',
  '../src/k-link-core/src/Menu/MenuLabel/MenuLabel.tsx',

  // Input
  '../src/k-link-core/src/Input/InputLabel/InputLabel.tsx',
  '../src/k-link-core/src/Input/InputWrapper/InputWrapper.tsx',
  '../src/k-link-core/src/Input/InputDescription/InputDescription.tsx',
  '../src/k-link-core/src/Input/InputError/InputError.tsx',

  // List
  '../src/k-link-core/src/List/ListItem/ListItem.tsx',

  // Avatar
  '../src/k-link-core/src/Avatar/AvatarGroup/AvatarGroup.tsx',

  // Checkbox
  '../src/k-link-core/src/Checkbox/CheckboxGroup/CheckboxGroup.tsx',

  // Switch
  '../src/k-link-core/src/Switch/SwitchGroup/SwitchGroup.tsx',

  // Radio
  '../src/k-link-core/src/Radio/RadioGroup/RadioGroup.tsx',

  // Chip
  '../src/k-link-core/src/Chip/ChipGroup/ChipGroup.tsx',

  // Grid
  '../src/k-link-core/src/Grid/Col/Col.tsx',

  // Button
  '../src/k-link-core/src/Button/ButtonGroup/ButtonGroup.tsx',

  // Timeline
  '../src/k-link-core/src/Timeline/TimelineItem/TimelineItem.tsx',

  // Slider
  '../src/k-link-core/src/Slider/Slider/Slider.tsx',
  '../src/k-link-core/src/Slider/RangeSlider/RangeSlider.tsx',

  // AppShell
  '../src/k-link-core/src/AppShell/Navbar/Navbar.tsx',
  '../src/k-link-core/src/AppShell/Header/Header.tsx',
  '../src/k-link-core/src/AppShell/Footer/Footer.tsx',
  '../src/k-link-core/src/AppShell/Aside/Aside.tsx',

  // Stepper
  '../src/k-link-core/src/Stepper/Step/Step.tsx',

  // Pagination
  '../src/k-link-core/src/Pagination/PaginationRoot/PaginationRoot.tsx',
  '../src/k-link-core/src/Pagination/PaginationItems/PaginationItems.tsx',

  // Carousel
  '../src/k-link-carousel/src/Carousel.tsx',
  '../src/k-link-carousel/src/CarouselSlide/CarouselSlide.tsx',

  // Other
  '../src/k-link-notifications/src/Notifications/Notifications.tsx',
  '../src/k-link-prism/src/Prism/Prism.tsx',
  '../src/k-link-spotlight/src/SpotlightProvider.tsx',
  '../src/k-link-modals/src/ModalsProvider.tsx',
  '../src/k-link-tiptap/src/RichTextEditor.tsx',
  '../src/k-link-nprogress/src/NavigationProgress.tsx',
  '../src/k-link-dropzone/src/Dropzone.tsx',
  '../src/k-link-dropzone/src/DropzoneFullScreen.tsx',
];

const PATHS: DeclarationPath[] = [
  { type: 'package', path: path.join(__dirname, '../src/k-link-core/src') },
  { type: 'package', path: path.join(__dirname, '../src/k-link-dates/src/components') },
  { type: 'package', path: path.join(__dirname, '../src/k-link-dropzone/src') },
  ...EXTRA_FILES_PATHS.map((filePath) => ({
    type: 'file' as const,
    path: path.join(__dirname, filePath),
  })),
];

fs.ensureDirSync(path.join(__dirname, '../docs/.docgen'));

fs.writeJSONSync(path.join(__dirname, '../docs/.docgen/docgen.json'), generateDeclarations(PATHS), {
  spaces: 2,
});
