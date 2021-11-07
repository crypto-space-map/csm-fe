export interface ColumnProps<T, K extends keyof T> {
  field: string;
  headerName: string;
  width: number;
  sortable?: boolean;
  type?: string;
  renderCell?: (row: T) => JSX.Element | null;
  valueFormatter?: (row: T) => string | null;
  customSortRules?: (arg0: T) => number;
}

export interface HeaderItemProps<T, K extends keyof T> extends ColumnProps<T, K> {
  onChangeSortField: (arg0: string) => void;
  selected: boolean;
  sortDirection: string;
}

export interface GridProps<T, K extends keyof T> {
  columns: Array<ColumnProps<T, K>>;
  rows: Array<T>;
}

/*  
https://stackoverflow.com/questions/55012174/why-doesnt-object-keys-return-a-keyof-type-in-typescript

for (const k of Object.keys(pt)) {
        // A valid call iff Object.keys(pt) returns (keyof Point)[]
        fn(k);
    } */
