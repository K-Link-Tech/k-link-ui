import { MantineNumberSize } from '@k-link/styles';
import { createSafeContext } from '@k-link/utils';

export type ScrollAreaComponent = React.FC<{
  mah: React.CSSProperties['maxHeight'];
  children: React.ReactNode;
}>;

interface ModalContext {
  yOffset: string | number;
  radius: MantineNumberSize;
  scrollAreaComponent: ScrollAreaComponent;
}

export const [ModalProvider, useModalContext] = createSafeContext<ModalContext>(
  'Modal component was not found in tree'
);
