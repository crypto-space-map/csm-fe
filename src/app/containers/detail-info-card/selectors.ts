import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from 'types/root-state';

import { initialState } from './slice';

const selectDomain = (state: RootState) => state.datailInfo || initialState;

export const selectedOverviewTradingStock = (state: RootState) => selectDomain(state).overviewTradingStock;
export const selectedOverviewTradingStockLoading = (state: RootState) =>
  selectDomain(state).overviewTradingStockLoading;

export const selectedExchangesData = (state: RootState) => selectDomain(state).exchangesData;
export const selectedExchangesDataLoading = (state: RootState) => selectDomain(state).exchangesDataLoading;
export const selectedProjectHeaderData = (state: RootState) => selectDomain(state).projectHeaderData;
export const selectedProjectStatistic = (state: RootState) => selectDomain(state).projectStatistic;

export const selectedEnrichedExchangesData = createSelector([selectedExchangesData], data =>
  data.map((item, index) => ({
    id: String(index + 1),
    ...item,
  }))
);

export const selectedExchangesPage = (state: RootState) => selectDomain(state).exchangesPage;
