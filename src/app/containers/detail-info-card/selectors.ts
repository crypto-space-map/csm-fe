import { createSelector } from '@reduxjs/toolkit';

import { SortingValues } from 'app/components/grid/types';
import { numberSortFunc } from 'app/components/grid/utils';
import type { RootState } from 'types/root-state';

import { initialState } from './slice';

const selectDomain = (state: RootState) => state.detailInfo || initialState;

export const selectedExchangesData = (state: RootState) => selectDomain(state).exchangesData.data;
export const selectedExchangesDataLoading = (state: RootState) => selectDomain(state).exchangesData.loading;
export const selectedProjectHeaderData = (state: RootState) => selectDomain(state).projectHeaderData;
export const selectedOverviewExtraData = (state: RootState) => selectDomain(state).overviewExtraData;
export const selectedProjectTicker = (state: RootState) => selectDomain(state).projectHeaderData?.symbol;
export const selectedProjectStatistic = (state: RootState) => selectDomain(state).projectStatistic;
export const selectedProjectLoading = (state: RootState) => selectDomain(state).projectLoading;
export const selectedSocialData = (state: RootState) => selectDomain(state).socialData.data;
export const selectedSocialDataLoading = (state: RootState) => selectDomain(state).socialData.loading;
export const selectedFundsData = (state: RootState) => selectDomain(state).fundsData.data;
export const selectedFundsDataLoading = (state: RootState) => selectDomain(state).fundsData.loading;
export const selectedProjectPartnerships = (state: RootState) => state.spaceMapData.projectPartnerships.data;

export const selectedEnrichedFundsData = createSelector([selectedFundsData], data => {
  if (!data) return null;

  return data.map((item, index) => ({
    id: String(index + 1),
    ...item,
  }));
});

export const selectedEnrichedPartnerships = createSelector([selectedProjectPartnerships], data => {
  const sortedData = [...data].sort((...args) =>
    numberSortFunc({
      a: args[0],
      b: args[1],
      fieldName: 'marketCap',
      sortDirection: SortingValues.DESC,
    })
  );

  const transformedData = sortedData.map((item, index) => ({
    id: String(index + 1),
    ...item,
  }));

  return transformedData;
});

export const selectedEnrichedExchangesData = createSelector([selectedExchangesData], data => {
  if (!data) return null;

  const sortedData = [...data].sort((...args) =>
    numberSortFunc({
      a: args[0],
      b: args[1],
      fieldName: 'persentVolume',
      sortDirection: SortingValues.DESC,
    })
  );

  const transformedData = sortedData.map((item, index) => ({
    id: String(index + 1),
    ...item,
  }));

  return transformedData;
});

export const selectedEnrichedSocialData = createSelector(
  [selectedSocialData],
  data =>
    data?.map((item, index) => ({
      id: String(index + 1),
      ...item,
    })) ?? null
);

export const selectedExchangesPage = (state: RootState) => selectDomain(state).exchangesPage;
