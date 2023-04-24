import { itRendersChildren, itSupportsStyle, itSupportsOthers, itSupportsRef } from '@k-link/tests';
import { SelectScrollArea } from './SelectScrollArea';

describe('@k-link/core/SelectScrollArea', () => {
  itRendersChildren(SelectScrollArea, {});
  itSupportsStyle(SelectScrollArea, {});
  itSupportsOthers(SelectScrollArea, {});
  itSupportsRef(SelectScrollArea, {}, HTMLDivElement);

  it('has correct displayName', () => {
    expect(SelectScrollArea.displayName).toStrictEqual('@k-link/core/SelectScrollArea');
  });
});
