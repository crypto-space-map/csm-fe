import { GridColDef } from '@mui/x-data-grid';

export const addIdToRow = (rows: { [key: string]: unknown }[]) =>
  rows.map((item, index) => ({ id: index, ...item }));

export const enrichColumns = (columns: GridColDef[]) =>
  columns.map(item => ({ ...item, disableColumnMenu: true }));
