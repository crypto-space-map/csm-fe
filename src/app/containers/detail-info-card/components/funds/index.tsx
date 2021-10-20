//@ts-nocheck
import { memo } from 'react';

import LinkIcon from '@mui/icons-material/Link';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import moment from 'moment';

import { Grid } from 'app/components/grid';

import { fieldNames, headerNames, products } from './constants';
import { StyledLink, AnnLink, InvestorsLinkWrapper } from './styles';
import { InvestorsProps } from './types';

const decorateAmount = (params: GridRenderCellParams) => {
  const value = params.getValue(params.id, fieldNames.amount);
  if (!value) return null;
  return `$ ${value.toLocaleString()}`;
};

const decorateDate = (params: GridRenderCellParams) => {
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
        <LinkIcon /> <span>Link</span>
      </AnnLink>
    </>
  );
};

const decorateInvestors = (params: GridRenderCellParams) => {
  const value = params.getValue(params.id, fieldNames.investors) as unknown as InvestorsProps[];
  if (!value) return null;

  return (
    <>
      {value.map((item, i, array) => (
        <InvestorsLinkWrapper>
          <StyledLink target="_blank" href={item.link}>
            {item.title}
          </StyledLink>
          {array.length - 1 !== i ? <span>,</span> : null}
        </InvestorsLinkWrapper>
      ))}
    </>
  );
};

const columns: GridColDef[] = [
  {
    field: fieldNames.fundrasingRound,
    headerName: headerNames.fundrasingRound,
    width: 115,
    disableColumnMenu: true,
  },
  {
    field: fieldNames.investors,
    headerName: headerNames.investors,
    width: 243,
    sortable: false,
    renderCell: decorateInvestors,
  },
  {
    field: fieldNames.amount,
    headerName: headerNames.amount,
    width: 110,
    type: 'number',
    valueFormatter: decorateAmount,
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
    width: 70,
    renderCell: decorateAnn,
    headerAlign: 'right',
  },
];

export const Funds = memo(() => (
  <div style={{ height: 400, width: '100%' }}>
    <Grid columns={columns} rows={products} />
  </div>
));
