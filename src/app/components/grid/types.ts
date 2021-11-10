export enum SortingValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum SortingTypes {
  Date = 'DATE',
  Number = 'NUMBER',
}

export interface CompareFuncProps<R> {
  a: R;
  b: R;
  fieldName: keyof R;
  sortDirection: SortingValues;
}
export interface ColumnProps<T> {
  field: keyof T;
  headerName: string;
  width: number;
  sortable?: boolean;
  type?: string;
  renderCell?: (row: T) => JSX.Element | null;
  valueFormatter?: (row: T) => string | null;
  customSortRules?: (row: CompareFuncProps<T>) => number;
}

export interface HeaderItemProps<T> extends ColumnProps<T> {
  onChangeSortField: (arg0: keyof T) => void;
  selected: boolean;
  sortDirection: string;
}

export type RowObjProps<R> = {
  [key in keyof R]: R[key];
};

export interface GridProps<R> {
  columns: Array<ColumnProps<R>>;
  rows: Array<R>;
}

export type CompareFuncOutputProps = { compareFunc: () => number } | { compareFunc: () => boolean };
