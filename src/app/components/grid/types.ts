export interface ColumnProps {
  field: string;
  headerName: string;
  width: number;
  sortable?: boolean;
  type?: string;
  renderCell?: <T extends Record<string, any>>(row: T) => JSX.Element | null;
  valueFormatter?: (row: any) => string | null;
  customSortRules?: (arg0: any) => number;
}

export interface HeaderItemProps extends ColumnProps {
  onChangeSortField: (arg0: string) => void;
  selected: boolean;
  sortDirection: string;
}

/*  
https://stackoverflow.com/questions/55012174/why-doesnt-object-keys-return-a-keyof-type-in-typescript

for (const k of Object.keys(pt)) {
        // A valid call iff Object.keys(pt) returns (keyof Point)[]
        fn(k);
    } */
