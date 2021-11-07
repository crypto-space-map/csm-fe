import { ColumnProps } from './types';

interface CellItemProps {
  row: any;
  fieldName: string;
  headerCellOptions: ColumnProps | undefined;
}
export const CellItem = ({ row, fieldName, headerCellOptions }: CellItemProps) => {
  if (headerCellOptions?.valueFormatter) {
    return <span>{headerCellOptions.valueFormatter(row)}</span>;
  }
  if (headerCellOptions?.renderCell) {
    return headerCellOptions.renderCell(row);
  }
  return <span>{row[fieldName]}</span>;
};
