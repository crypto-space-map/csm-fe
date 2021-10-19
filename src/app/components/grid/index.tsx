import { memo } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { addIdToRow, enrichColumns } from './utils';

interface GridProps {
  columns: GridColDef[];
  rows: { [key: string]: unknown }[];
}

const useStyles = makeStyles({
  root: {
    '&.MuiDataGrid-root ': {
      border: 'none',
    },

    '& .MuiDataGrid-renderingZone': {
      maxHeight: 'none !important',
      minHeight: '0px !important',
    },
    '& .MuiDataGrid-row': {
      maxHeight: 'none !important',
      minHeight: '0px !important',
    },

    '&.MuiDataGrid-root .MuiDataGrid-cell': {
      flexWrap: 'wrap',
      lineHeight: 'unset !important',
      maxHeight: 'none !important',
      minHeight: '0px !important',
      whiteSpace: 'normal',
      padding: '10px',
    },

    '&.MuiDataGrid-root .MuiDataGrid-cell:focus': {
      outline: 'none',
    },

    '&.MuiDataGrid-root .MuiDataGrid-columnHeaderTitleContainer': {
      padding: '0px',
      lineHeight: 'unset !important',
      overflow: 'unset !important',
      whiteSpace: 'unset !important',
    },

    '&.MuiDataGrid-root .MuiDataGrid-columnHeaderTitle': {
      overflow: 'unset !important',
      whiteSpace: 'unset !important',
      lineHeight: '16px !important',
    },

    '&.MuiDataGrid-columnContainer': {
      lineHeight: 'unset !important',
      maxHeight: 'none !important',
      minHeight: '0px !important',
    },

    '&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus': {
      outline: 'none',
    },

    '&.MuiDataGrid-root .MuiDataGrid-columnSeparator': {
      visibility: 'hidden',
    },
    '&.MuiDataGrid-root .MuiDataGrid-cell--withRenderer': {
      alignItems: 'unset',
    },
  },
});

export const Grid = memo(({ columns, rows }: GridProps) => {
  const classes = useStyles();

  return (
    <DataGrid
      rows={addIdToRow(rows)}
      columns={enrichColumns(columns)}
      hideFooter
      disableSelectionOnClick
      disableColumnSelector
      className={classes.root}
    />
  );
});
