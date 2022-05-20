import { StyledGridHeader } from '../../styles';
import { ColumnProps, SortingValues } from '../../types';
import { HeaderItem } from './header-item';

interface GridContentProps<R> {
  sortedField: keyof R;
  columns: Array<ColumnProps<R>>;
  columnWidths: string;
  sortDirection: SortingValues;
  handleChangeSort: (arg0: keyof R) => void;
}

export const GridHeader = <R,>({
  sortedField,
  columns,
  columnWidths,
  sortDirection,
  handleChangeSort,
}: GridContentProps<R>) => (
  <StyledGridHeader columnWidths={columnWidths}>
    {columns.map(item => (
      <HeaderItem
        {...item}
        key={`${item.width} ${item.field}`}
        onChangeSortField={handleChangeSort}
        selected={sortedField === item.field}
        sortDirection={sortDirection}
      />
    ))}
  </StyledGridHeader>
);
