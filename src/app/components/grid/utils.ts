import { GridColDef, GridAlignment } from '@mui/x-data-grid';

const alignLeft: GridAlignment = 'left';

export const addIdToRow = (rows: { [key: string]: unknown }[]) =>
  rows.map((item, index) => ({ id: index + 1, ...item }));

export const enrichColumns = (columns: GridColDef[]) =>
  columns.map(item => ({ disableColumnMenu: true, headerAlign: alignLeft, ...item }));
