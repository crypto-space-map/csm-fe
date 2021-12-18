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
  if (headerCellOptions?.valueFormatter) {
    return <span>{headerCellOptions.valueFormatter(row) ?? <DefaultValue />}</span>;
  }
  if (headerCellOptions?.renderCell) {
    return headerCellOptions.renderCell(row) ?? <DefaultValue />;
  }
  return <span>{row[fieldName] ?? <DefaultValue />}</span>;
};
