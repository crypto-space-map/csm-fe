import { useMemo } from 'react';

import { StyledGridContent, StyledGridContentRow, StyledGridRowWrapper } from '../../styles';
import { ColumnProps } from '../../types';
import { CellItem } from './cell-item';
import { InfiniteScrollComponent } from './infinite-scroll';

interface GridContentProps<R> {
  sortedRows: R[];
  columns: Array<ColumnProps<R>>;
  columnWidths: string;
  loading?: boolean;
  infinite?: boolean;
  page?: number;
  fetchData: (page: number) => void;
}

export const GridContent = <R extends { id: string }>({
  sortedRows,
  columns,
  columnWidths,
  loading,
  infinite,
  fetchData,
  page,
}: GridContentProps<R>) => {
  const columnFieldNames = useMemo(() => columns.map(item => item.field), [columns]);

  const rows = useMemo(
    () =>
      sortedRows.map(item => (
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
      )),
    [sortedRows, columnFieldNames, columns, columnWidths]
  );

  return (
    <StyledGridContent>
      {infinite ? (
        <InfiniteScrollComponent
          page={page}
          count={sortedRows.length}
          loading={loading}
          fetchData={fetchData}>
          {rows}
        </InfiniteScrollComponent>
      ) : (
        rows
      )}
    </StyledGridContent>
  );
};

GridContent.defaultProps = {
  loading: false,
  infinite: false,
  page: 1,
};
