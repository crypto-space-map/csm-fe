/* eslint-disable max-lines */
import { memo } from 'react';

import styled from '@emotion/styled';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { addIdToRow, enrichColumns } from './utils';

interface GridProps<T extends GridColDef, R> {
  columns: T[];
  rows: R[];
}

const StyledDataGrid = styled(DataGrid)`
  /*   border: none;

  & .MuiDataGrid-renderingZone {
    max-height: none !important;
    min-height: 0px !important;
  }

  & .MuiDataGrid-row {
    max-height: none !important;
    min-height: 0px !important;
  }

  & .MuiDataGrid-cell {
    flex-wrap: wrap;
    line-height: unset !important;
    max-height: none !important;
    min-height: 0px !important;
    white-space: normal;
    padding: 10px;
  }

  & .MuiDataGrid-cell:focus {
    outline: none;
  }

  & .MuiDataGrid-columnHeader:focus-within .MuiDataGrid-cell:focus-within {
    outline: none;
  }

  & .MuiDataGrid-columnHeaderTitleContainer {
    padding: 0px;
    line-height: unset !important;
    overflow: unset !important;
    white-space: unset !important;
    align-items: baseline;
  }

  & .MuiDataGrid-columnHeaderWrapper {
    align-items: baseline;
  }

  & .MuiDataGrid-columnHeaderTitle {
    overflow: unset !important;
    white-space: unset !important;
    line-height: 16px !important;
    text-transform: capitalize;
  }

  & .MuiDataGrid-columnsContainer {
    line-height: unset !important;
    max-height: none !important;
    min-height: 0px !important;
    padding-bottom: 16px;
  }

  & .MuiDataGrid-columnHeader:focus {
    outline: none;
  }

  & .MuiDataGrid-columnSeparator {
    visibility: hidden;
  }
  & .MuiDataGrid-cell--withRenderer {
    align-items: unset;
  }
  & .MuiDataGrid-columnHeader .MuiDataGrid-iconButtonContainer {
    visibility: visible;
    width: 13px;
    height: 13px;
  }

   & .MuiIconButton-root MuiIconButton-sizeSmall {
    width: 13px;
    height: 13px;
  }

  & .MuiDataGrid-columnHeader:not(.MuiDataGrid-columnHeader--sorted) .MuiDataGrid-sortIcon {
    opacity: 0.5;
    transition: unset;
  } */
`;

/* const useStyles = makeStyles({
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

    '&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within, .MuiDataGrid-root .MuiDataGrid-cell:focus-within':
      {
        outline: 'none',
      },

    '&.MuiDataGrid-root .MuiDataGrid-columnHeaderTitleContainer': {
      padding: '0px',
      lineHeight: 'unset !important',
      overflow: 'unset !important',
      whiteSpace: 'unset !important',
      alignItems: 'baseline',
    },

    '&.MuiDataGrid-root .MuiDataGrid-columnHeaderWrapper': {
      alignItems: 'baseline',
    },

    '&.MuiDataGrid-root .MuiDataGrid-columnHeaderTitle': {
      overflow: 'unset !important',
      whiteSpace: 'unset !important',
      lineHeight: '16px !important',
      textTransform: 'capitalize',
    },

    '&.MuiDataGrid-root .MuiDataGrid-columnsContainer': {
      lineHeight: 'unset !important',
      maxHeight: 'none !important',
      minHeight: '0px !important',
      paddingBottom: '16px',
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

    '&.MuiDataGrid-root .MuiDataGrid-columnHeader .MuiDataGrid-iconButtonContainer': {
      visibility: 'visible',
      width: '13px',
      height: '13px',
    },

    '&.MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall': {
      width: '13px',
      height: '13px',
    },

    '&.MuiDataGrid-root .MuiDataGrid-columnHeader:not(.MuiDataGrid-columnHeader--sorted) .MuiDataGrid-sortIcon':
      {
        opacity: '0.5',
        transition: 'unset',
      },
  },
});
 */

export const Grid = memo(({ columns, rows }: GridProps) => {
  return (
    <StyledDataGrid
      rows={addIdToRow(rows)}
      columns={enrichColumns(columns)}
      hideFooter
      disableSelectionOnClick
      disableColumnSelector
      components={{
        ColumnUnsortedIcon: ArrowDropDownIcon,
        ColumnSortedAscendingIcon: ArrowDropDownIcon,
        ColumnSortedDescendingIcon: ArrowDropUpIcon,
      }}
    />
  );
});
