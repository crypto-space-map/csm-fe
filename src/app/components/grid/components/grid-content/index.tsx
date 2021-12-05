import { useMemo } from 'react';

import { StyledGridContent, StyledGridContentRow, StyledGridRowWrapper } from '../../styles';
import { ColumnProps } from '../../types';
import { CellItem } from './cell-item';

interface GridContentProps<R> {
  sortedRows: R[];
  columns: Array<ColumnProps<R>>;
  columnWidths: string;
}

export const GridContent = <R extends { id: string }>({
  sortedRows,
  columns,
  columnWidths,
}: GridContentProps<R>) => {
  const columnFieldNames = useMemo(() => columns.map(item => item.field), [columns]);
  return (
    <StyledGridContent>
      {sortedRows.map(item => (
        <StyledGridRowWrapper key={item.id}>
          <StyledGridContentRow columnWidths={columnWidths}>
            {columnFieldNames.map(name => (
              <CellItem
                key={`${name} ${item.id}`}
                row={item}
                fieldName={name}
                headerCellOptions={columns.find(column => column.field === name)}
              />
            ))}
          </StyledGridContentRow>
        </StyledGridRowWrapper>
      ))}
    </StyledGridContent>
  );
};
