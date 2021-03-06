import { useState, useEffect, useMemo, useCallback } from 'react';

import { GridContent } from './components/grid-content';
import { GridHeader } from './components/grid-header';
import { NoFoundContent } from './components/no-found-content';
import { RefreshContent } from './components/refresh-content';
import { GridWrapper } from './styles';
import { GridProps, SortingValues } from './types';
import { getCompareFunc } from './utils';

export const Grid = <R extends { id: string }>({
  columns,
  rows,
  infinite,
  loading,
  page,
  startedSortedField,
  fetchData,
}: GridProps<R>) => {
  const [sortedField, setSortedField] = useState(startedSortedField || columns[0].field);

  const [sortDirection, setSortDirection] = useState(SortingValues.DESC);
  const [sortedRows, setSortedRows] = useState<R[]>([]);

  const columnWidths = useMemo(() => columns.map(item => `${item.width}px`).join(' '), [columns]);

  const handleChangeSort = useCallback(
    (fieldName: keyof R) => {
      if (sortedField === fieldName) {
        setSortDirection(sortDirection === SortingValues.ASC ? SortingValues.DESC : SortingValues.ASC);
      }
      if (sortedField !== fieldName) {
        setSortDirection(SortingValues.ASC);
        setSortedField(fieldName);
      }
    },
    [setSortDirection, setSortedField, sortDirection, sortedField]
  );

  // TODO Вынести в отдельный хук
  useEffect(() => {
    const newRowsArr = rows?.slice() ?? [];
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

  if (!loading && !rows) {
    return <RefreshContent fetchData={fetchData} />;
  }

  if (!loading && !rows?.length) {
    return <NoFoundContent />;
  }

  return (
    <GridWrapper>
      <GridHeader
        sortedField={sortedField}
        sortDirection={sortDirection}
        handleChangeSort={handleChangeSort}
        columns={columns}
        columnWidths={columnWidths}
      />
      <GridContent
        sortedRows={sortedRows}
        columns={columns}
        columnWidths={columnWidths}
        fetchData={fetchData}
        infinite={infinite}
        loading={loading}
        page={page}
      />
    </GridWrapper>
  );
};
