import { memo } from 'react';

import { GridColDef, GridRenderCellParams, GridValueFormatterParams } from '@mui/x-data-grid';

import { Grid } from 'app/components';

import { fieldNames, headerNames, products } from './constants';
import { ExchangeWrapper, StyledLink } from './styles';

const decoratePrice = (params: GridValueFormatterParams) => {
  const value = params.getValue(params.id, fieldNames.price);

  if (!value) return null;
  return `$${value}`;
};

const decorateVolume = (params: GridValueFormatterParams) => {
  const value = params.getValue(params.id, fieldNames.volume);

  if (!value) return null;
  return `$${value}`;
};

const decoratePersentVolume = (params: GridValueFormatterParams) => {
  const value = params.getValue(params.id, fieldNames.persentVolume);

  if (!value) return null;
  return `${value}%`;
};

const decoratePair = (params: GridRenderCellParams) => {
  const pairName = params.getValue(params.id, fieldNames.pairName) as unknown as string;
  const pairLink = params.getValue(params.id, fieldNames.pairLink) as unknown as string;
  if (!pairName || !pairLink) return null;
  return (
    <>
      <StyledLink target="_blank" href={pairLink}>
        {pairName}
      </StyledLink>
    </>
  );
};

const decorateExchange = (params: GridRenderCellParams) => {
  const exchange = params.getValue(params.id, fieldNames.exchange) as unknown as string;

  if (!exchange) return null;
  return <ExchangeWrapper>{exchange}</ExchangeWrapper>;
};

const columns: GridColDef[] = [
  {
    field: fieldNames.id,
    headerName: headerNames.id,
    width: 50,
    sortable: false,
  },
  {
    field: fieldNames.exchange,
    headerName: headerNames.exchange,
    width: 120,
    renderCell: decorateExchange,
    sortable: false,
  },
  {
    field: fieldNames.pairName,
    headerName: headerNames.pairName,
    width: 100,
    renderCell: decoratePair,
    sortable: false,
  },
  {
    field: fieldNames.price,
    headerName: headerNames.price,
    width: 80,
    valueFormatter: decoratePrice,
    sortable: false,
  },
  {
    field: fieldNames.volume,
    headerName: headerNames.volume,
    width: 120,
    valueFormatter: decorateVolume,
    sortable: false,
  },
  {
    field: fieldNames.persentVolume,
    headerName: headerNames.persentVolume,
    width: 90,
    valueFormatter: decoratePersentVolume,
    sortable: false,
  },
  {
    field: fieldNames.updated,
    headerName: headerNames.updated,
    width: 90,
    sortable: false,
  },
];

export const Exchanges = memo(() => <Grid columns={columns} rows={products} />);

/* TODO
- сортировка mcap
- многоточие у ссылок
- авто 
*/
