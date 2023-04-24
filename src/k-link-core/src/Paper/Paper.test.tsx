import {
  itRendersChildren,
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@k-link/tests';
import { Paper, PaperProps } from './Paper';

const defaultProps: PaperProps = {};

describe('@k-link/core/Paper', () => {
  itRendersChildren(Paper, defaultProps);
  itIsPolymorphic(Paper, defaultProps);
  itSupportsProviderVariant(Paper, defaultProps, 'Paper');
  itSupportsSystemProps({
    component: Paper,
    props: defaultProps,
    displayName: '@k-link/core/Paper',
    refType: HTMLDivElement,
    providerName: 'Paper',
  });
});
