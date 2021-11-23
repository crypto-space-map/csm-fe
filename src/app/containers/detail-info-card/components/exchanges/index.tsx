import { memo } from 'react';

import { Grid } from 'app/components';
import { ColumnProps } from 'app/components/grid/types';

import { headerNames, products } from './constants';
import { ExchangeWrapper, StyledLink, DecorateHeader } from './styles';
import { ExchangesProps } from './types';

const decoratePrice = (row: ExchangesProps) => {
  const value = row.price;
  if (!value) return null;
  return `$${value}`;
};

const decorateVolume = (row: ExchangesProps) => {
  const value = row.volume;

  if (!value) return null;
  return `$${value}`;
};

const decoratePersentVolume = (row: ExchangesProps) => {
  const value = row.persentVolume;

  if (!value) return null;
  return `${value}%`;
};

const decoratePair = (row: ExchangesProps) => {
  const { pair, pairLink } = row;
  if (!pair || !pairLink) return null;
  return (
    <>
      <StyledLink target="_blank" href={pairLink}>
        {pair}
      </StyledLink>
    </>
  );
};

const decorateHeaderPersentVolume = () => <DecorateHeader>{headerNames.persentVolume}</DecorateHeader>;

const decorateExchange = (row: ExchangesProps) => {
  const value = row.exchange;

  if (!value) return null;
  return <ExchangeWrapper>{value}</ExchangeWrapper>;
};

const columns: ColumnProps<ExchangesProps>[] = [
  {
    field: 'id',
    headerName: headerNames.id,
    width: 30,
    sortable: false,
  },
  {
    field: 'exchange',
    headerName: headerNames.exchange,
    width: 120,
    renderCell: decorateExchange,
    sortable: false,
  },
  {
    field: 'pair',
    headerName: headerNames.pair,
    width: 80,
    renderCell: decoratePair,
    sortable: false,
  },
  {
    field: 'price',
    headerName: headerNames.price,
    width: 80,
    valueFormatter: decoratePrice,
    sortable: false,
  },
  {
    field: 'volume',
    headerName: headerNames.volume,
    width: 100,
    valueFormatter: decorateVolume,
    sortable: false,
  },
  {
    field: 'persentVolume',
    renderCustomHeaderName: decorateHeaderPersentVolume,
    width: 100,
    valueFormatter: decoratePersentVolume,
    sortable: false,
  },
  {
    field: 'updated',
    headerName: headerNames.updated,
    width: 90,
    sortable: false,
  },
];

export const Exchanges = memo(() => <Grid columns={columns} rows={products} />);
