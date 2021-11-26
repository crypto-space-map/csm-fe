import { ColumnProps } from '../../types';

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
    return <span>{headerCellOptions.valueFormatter(row)}</span>;
  }
  if (headerCellOptions?.renderCell) {
    return headerCellOptions.renderCell(row);
  }
  return <span>{row[fieldName] ?? ''}</span>;
};
