import { memo, useCallback, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { Grid } from 'app/components';
import { ColumnProps, SortingTypes } from 'app/components/grid/types';
import { selectedProjectName } from 'store/pageStore/selectors';
import { getTransformedPrice } from 'utils/detail-info';

import {
  selectedEnrichedExchangesData,
  selectedExchangesDataLoading,
  selectedExchangesPage,
} from '../../selectors';
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
  return getTransformedPrice(value);
};

const decorateVolume = (row: EnrichedExchangeProps) => {
  const value = row.volume;

  if (!value) return null;
  return getTransformedPrice(value);
};

const decoratePersentVolume = (row: EnrichedExchangeProps) => {
  const value = row.persentVolume;

  if (!value) return value === null ? '--' : '<0.1%';
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
    width: 110,
    renderCell: decorateExchange,
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
    width: 70,
    valueFormatter: decoratePrice,
    type: SortingTypes.NUMBER,
    textAlign: 'right',
  },
  {
    field: 'volume',
    headerName: headerNames.volume,
    width: 85,
    valueFormatter: decorateVolume,
    type: SortingTypes.NUMBER,
    textAlign: 'right',
  },
  {
    field: 'persentVolume',
    renderCustomHeaderName: decorateHeaderPersentVolume,
    width: 90,
    valueFormatter: decoratePersentVolume,
    type: SortingTypes.NUMBER,
    textAlign: 'right',
  },
  {
    field: 'updatedAt',
    headerName: headerNames.updated,
    width: 90,
    valueFormatter: decorateUpdatedAt,
    type: SortingTypes.DATE,
    textAlign: 'right',
  },
];

export const Exchanges = memo(() => {
  const { fetchExchangesData } = useDispatchAction();

  const enrichedExchangesData = useSelector(selectedEnrichedExchangesData);
  const exchangesDataLoading = useSelector(selectedExchangesDataLoading);
  const exchangesPage = useSelector(selectedExchangesPage);
  const projectName = useSelector(selectedProjectName);

  const loadData = useCallback(
    (page: number) => {
      if (projectName) fetchExchangesData({ projectName, page });
    },
    [projectName, fetchExchangesData]
  );

  useEffect(() => {
    if (!enrichedExchangesData) loadData(exchangesPage);
  }, [enrichedExchangesData, exchangesPage, loadData]);

  return (
    <Grid
      columns={columns}
      rows={enrichedExchangesData}
      loading={exchangesDataLoading}
      fetchData={loadData}
      infinite
      page={exchangesPage}
      startedSortedField="persentVolume"
    />
  );
});
