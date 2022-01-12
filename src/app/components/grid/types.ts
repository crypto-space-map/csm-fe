export enum SortingValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum SortingTypes {
  DATE = 'DATE',
  NUMBER = 'NUMBER',
}

export interface GetCompareValueFuncProps<R> {
  a: R;
  b: R;
  fieldName: keyof R;
}
export interface CompareFuncProps<R> extends GetCompareValueFuncProps<R> {
  sortDirection: SortingValues;
}
export interface ColumnProps<T> {
  field: keyof T;
  headerName?: string;
  renderCustomHeaderName?: () => JSX.Element;
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

export type FetchDataType = (page: number) => void | (() => void);

export type RowObjProps<R> = {
  [key in keyof R]: R[key];
};

export interface GridProps<R> {
  columns: Array<ColumnProps<R>>;
  rows: Array<R>;
  loading?: boolean;
  infinite?: boolean;
  page?: number;
  startedSortedField?: keyof R;
  fetchData: FetchDataType;
}

export type CompareFuncOutputProps = { compareFunc: () => number } | { compareFunc: () => boolean };
