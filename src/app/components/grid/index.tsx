import { useState, useMemo, useCallback, /* useEffect */ memo } from 'react';

import { CellItem } from './cell-item';
import { HeaderItem } from './header-item';
import {
  GridWrapper,
  StyledGridContent,
  StyledGridHeader,
  StyledGridContentRow,
  StyledGridRowWrapper,
} from './styles';
import { ColumnProps } from './types';
import { SortingValues } from './utils';

export const Grid = memo(
  <R extends Record<string, any>>({ columns, rows }: { columns: ColumnProps[]; rows: R[] }) => {
    const [sortedField, setSortedField] = useState(columns[0].field);

    const [sortDirection, setSortDirection] = useState(SortingValues.Asc);
    // const [sortedRows, setSortedRows] = useState<any>([]);

    const columnWidths = useMemo(() => columns.map(item => `${item.width}px`).join(' '), [columns]);
    const columnFieldNames = useMemo(() => columns.map(item => item.field), [columns]);

    const handleChangeSort = useCallback(
      (fieldName: string) => {
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

    /*  useEffect(() => {
    const newRowsArr = rows.slice();
    const fieldOptions = columns.find(item => item.field === sortedField);

    if (fieldOptions?.customSortRules && typeof fieldOptions?.customSortRules === 'function') {
      setSortedRows(
        newRowsArr.sort((...args) =>
          fieldOptions.customSortRules({ ...args, fieldName: sortedField, sortDirection })
        )
      );
      return;
    }
    if (fieldOptions?.customSortRules) {
      setSortedRows(
        newRowsArr.sort((...args) => dateSortFunc({ ...args, fieldName: sortedField, sortDirection }))
      );
      return;
    }

    setSortedRows(newRowsArr.sort());
  }, [products, sortedField, sortDirection]); */

    return (
      <GridWrapper>
        <StyledGridHeader columnWidths={columnWidths}>
          {columns.map(item => (
            <HeaderItem
              {...item}
              key={item.field}
              onChangeSortField={handleChangeSort}
              selected={sortedField === item.field}
              sortDirection={sortDirection}
            />
          ))}
        </StyledGridHeader>
        <StyledGridContent>
          {rows.map(item => (
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
  }
);
