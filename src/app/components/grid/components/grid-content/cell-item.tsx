import { useMemo } from 'react';

import { StyledCellItem } from '../../styles';
import { ColumnProps } from '../../types';
import { DefaultValue } from './default-value';

interface CellItemProps<R, F> {
  row: R;
  headerCellOptions: ColumnProps<R> | undefined;
  fieldName: F;
}

export const CellItem = <R, F extends keyof R>({
  headerCellOptions,
  row,
  fieldName,
}: CellItemProps<R, F>) => {
  const cell = useMemo(() => {
    if (headerCellOptions?.valueFormatter) {
      return <span>{headerCellOptions.valueFormatter(row) ?? <DefaultValue />}</span>;
    }
    if (headerCellOptions?.renderCell) {
      return headerCellOptions.renderCell(row) ?? <DefaultValue />;
    }
    return <span>{row[fieldName] ?? <DefaultValue />}</span>;
  }, [fieldName, headerCellOptions, row]);

  return <StyledCellItem textAlign={headerCellOptions?.textAlign}>{cell}</StyledCellItem>;
};
