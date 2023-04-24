import { itSupportsSystemProps, itSupportsProviderVariant } from '@k-link/tests';
import { Table, TableProps } from './Table';

const defaultProps: TableProps = {};

describe('@k-link/core/Table', () => {
  itSupportsProviderVariant(Table, defaultProps, 'Table');
  itSupportsSystemProps({
    component: Table,
    props: defaultProps,
    displayName: '@k-link/core/Table',
    refType: HTMLTableElement,
    providerName: 'Table',
  });
});
