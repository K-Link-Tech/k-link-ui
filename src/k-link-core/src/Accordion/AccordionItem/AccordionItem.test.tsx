import {
  itSupportsSystemProps,
  createContextContainer,
  itRendersChildren,
  itThrowsContextError,
} from '@k-link/tests';
import { AccordionItem, AccordionItemProps } from './AccordionItem';
import { AccordionProvider } from '../AccordionProvider';
import { ACCORDION_ERRORS } from '../Accordion.errors';

const defaultProps: AccordionItemProps = {
  value: 'test',
  children: 'Test item',
};

const TestContainer = createContextContainer(AccordionItem, AccordionProvider, { order: 3 });

describe('@k-link/core/AccordionItem', () => {
  itRendersChildren(TestContainer, defaultProps);
  itThrowsContextError(AccordionItem, defaultProps, ACCORDION_ERRORS.context);
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@k-link/core/AccordionItem',
    providerName: 'AccordionItem',
  });
});
