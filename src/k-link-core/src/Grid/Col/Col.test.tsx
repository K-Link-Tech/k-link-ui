import {
  itSupportsSystemProps,
  createContextContainer,
  itThrowsContextError,
  itSupportsProviderVariant,
} from '@k-link/tests';
import { GridProvider } from '../Grid.context';
import { Col, ColProps } from './Col';

const defaultProps: ColProps = {
  span: 12,
};

const TestContainer = createContextContainer(Col, GridProvider, {
  value: {
    gutter: 'md',
    grow: false,
    columns: 12,
  },
});

describe('@k-link/core/Col', () => {
  itThrowsContextError(Col, defaultProps, 'Grid component was not found in tree');
  itSupportsProviderVariant(TestContainer, defaultProps, 'Grid', 'col');
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@k-link/core/Col',
    providerName: 'GridCol',
  });
});
