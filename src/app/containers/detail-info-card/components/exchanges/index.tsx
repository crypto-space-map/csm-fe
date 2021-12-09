import { memo, useCallback, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { Grid } from 'app/components';
import { ColumnProps, SortingTypes } from 'app/components/grid/types';

import * as selectors from '../../selectors';
import { useDispatchAction } from '../../slice';
import { ExchangeDTO } from '../../types';
import { headerNames } from './constants';
import { ExchangeWrapper, StyledLink, DecorateHeader } from './styles';
import { getUpdatevalue } from './utils';

interface EnrichedExchangeProps extends ExchangeDTO {
  id: string;
}

const decoratePrice = (row: EnrichedExchangeProps) => {
  const value = row.price;
  if (!value) return null;
  return `$ ${value}`;
};

const decorateVolume = (row: EnrichedExchangeProps) => {
  const value = row.volume;

  if (!value) return null;
  return `$ ${value}`;
};

const decoratePersentVolume = (row: EnrichedExchangeProps) => {
  const value = row.persentVolume;

  if (!value) return null;
  return `${value}%`;
};

const decorateUpdatedAt = (row: EnrichedExchangeProps) => {
  const value = row.updatedAt;

  if (!value) return null;
  return getUpdatevalue(value);
};

const decoratePair = (row: EnrichedExchangeProps) => {
  const { pair, url } = row;
  if (!pair) return null;

  return url ? (
    <StyledLink target="_blank" href={url}>
      {pair}
    </StyledLink>
  ) : (
    <span>{pair}</span>
  );
};

const decorateHeaderPersentVolume = () => <DecorateHeader>{headerNames.persentVolume}</DecorateHeader>;

const decorateExchange = (row: EnrichedExchangeProps) => {
  const value = row.exchange;

  if (!value) return null;
  return <ExchangeWrapper>{value}</ExchangeWrapper>;
};

const columns: ColumnProps<EnrichedExchangeProps>[] = [
  {
    field: 'id',
    headerName: headerNames.id,
    width: 30,
    sortable: false,
    type: SortingTypes.NUMBER,
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
    field: 'updatedAt',
    headerName: headerNames.updated,
    width: 90,
    valueFormatter: decorateUpdatedAt,
    sortable: false,
  },
];

export const Exchanges = memo(() => {
  const { fetchExchangesData, clearExchangesData } = useDispatchAction();

  const enrichedExchangesData = useSelector(selectors.enrichedExchangesData);
  const exchangesDataLoading = useSelector(selectors.exchangesDataLoading);

  const loadData = useCallback(
    (page: number) => {
      fetchExchangesData({ page });
    },
    [fetchExchangesData]
  );

  useEffect(() => {
    loadData(1);
    const clearData = () => clearExchangesData();
    return () => {
      clearData();
    };
  }, [clearExchangesData, loadData]);

  return (
    <Grid
      columns={columns}
      rows={enrichedExchangesData}
      loading={exchangesDataLoading}
      fetchData={loadData}
      infinite
    />
  );
});
