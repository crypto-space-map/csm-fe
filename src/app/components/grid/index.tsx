import { useState, useEffect, useMemo, useCallback } from 'react';

import { CellItem } from './cell-item';
import { HeaderItem } from './header-item';
import {
  GridWrapper,
  StyledGridContent,
  StyledGridHeader,
  StyledGridContentRow,
  StyledGridRowWrapper,
} from './styles';
import { GridProps, SortingValues } from './types';
import { getCompareFunc } from './utils';

export const Grid = <R extends { id: string }>({ columns, rows }: GridProps<R>) => {
  const [sortedField, setSortedField] = useState(columns[0].field);

  const [sortDirection, setSortDirection] = useState(SortingValues.Asc);
  const [sortedRows, setSortedRows] = useState<R[]>([]);

  const columnWidths = useMemo(() => columns.map(item => `${item.width}px`).join(' '), [columns]);
  const columnFieldNames = useMemo(() => columns.map(item => item.field), [columns]);

  const handleChangeSort = useCallback(
    (fieldName: keyof R) => {
      if (sortedField === fieldName) {
        setSortDirection(sortDirection === SortingValues.Asc ? SortingValues.Desc : SortingValues.Asc);
      }
      if (sortedField !== fieldName) {
        setSortDirection(SortingValues.Asc);
        setSortedField(fieldName);
      }
    },
    [setSortDirection, setSortedField, sortDirection, sortedField]
  );

  useEffect(() => {
    const newRowsArr = rows.slice();
    const fieldOptions = columns.find(item => item.field === sortedField);
    const compareFunc = getCompareFunc(fieldOptions?.type);

    if (fieldOptions?.customSortRules && typeof fieldOptions?.customSortRules === 'function') {
      const { customSortRules } = fieldOptions;
      setSortedRows(
        newRowsArr.sort((...args) =>
          customSortRules({ a: args[0], b: args[1], fieldName: sortedField, sortDirection })
        )
      );
      return;
    }
    setSortedRows(
      newRowsArr.sort((...args) =>
        compareFunc({ a: args[0], b: args[1], fieldName: sortedField, sortDirection })
      )
    );
  }, [columns, rows, sortedField, sortDirection]);

  return (
    <GridWrapper>
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
      <StyledGridContent>
        {sortedRows.map(item => (
          <StyledGridRowWrapper>
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
    </GridWrapper>
  );
};
