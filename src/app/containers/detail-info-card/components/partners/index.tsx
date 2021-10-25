import { memo } from 'react';

import LinkIcon from '@mui/icons-material/Link';
import { GridColDef, GridRenderCellParams, GridValueFormatterParams } from '@mui/x-data-grid';
import moment from 'moment';

import { Grid } from 'app/components/grid';

import { fieldNames, headerNames, products } from './constants';
import { cutLink } from './utils';
import { StyledLink, AnnLink, InvestorsLinkWrapper } from './styles';
import { InvestorsProps } from './types';

const decorateMcap = (params: GridValueFormatterParams) => {
  const mcap = params.getValue(params.id, fieldNames.mcap);
  const mcapInit = params.getValue(params.id, fieldNames.mcapInit);
  if (!mcap) return null;
  return `${mcap} ${mcapInit}`;
};

const decorateDate = (params: GridValueFormatterParams) => {
  const value = params.getValue(params.id, fieldNames.date) as unknown as string;
  if (!value) return null;
  return moment(value).format('DD MMMM YYYY');
};

const decorateAnn = (params: GridRenderCellParams) => {
  const value = params.getValue(params.id, fieldNames.ann) as unknown as string;
  if (!value) return null;
  return (
    <>
      <AnnLink target="_blank" href={value}>
        <LinkIcon /> <span>{cutLink(value)}</span>
      </AnnLink>
    </>
  );
};

const columns: GridColDef[] = [
  {
    field: fieldNames.id,
    headerName: headerNames.id,
    width: 50,
    sortable: false,
  },
  {
    field: fieldNames.partner,
    headerName: headerNames.partner,
    width: 150,
    // renderCell: decorateInvestors,
  },
  {
    field: fieldNames.mcap,
    headerName: headerNames.mcap,
    width: 110,
    valueFormatter: decorateMcap,
  },
  {
    field: fieldNames.date,
    headerName: headerNames.date,
    width: 130,
    type: 'date',
    valueFormatter: decorateDate,
  },
  {
    field: fieldNames.ann,
    headerName: headerNames.ann,
    sortable: false,
    /* width: 70, */
    renderCell: decorateAnn,
  },
];

export const Partners = memo(() => <Grid columns={columns} rows={products} />);

/* TODO
- сортировка mcap
- многоточие у ссылок
- авто 
*/
