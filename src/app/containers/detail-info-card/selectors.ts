import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from 'types/root-state';

import { initialState } from './slice';

const selectDomain = (state: RootState) => state.datailInfo || initialState;

export const selectProviders = (state: RootState) => selectDomain(state).detailInfo || [];
export const overviewTradingStock = (state: RootState) => selectDomain(state).overviewTradingStock;
export const overviewTradingStockLoading = (state: RootState) =>
  selectDomain(state).overviewTradingStockLoading;

export const exchangesData = (state: RootState) => selectDomain(state).exchangesData;
export const exchangesDataLoading = (state: RootState) => selectDomain(state).exchangesDataLoading;

export const enrichedExchangesData = createSelector([exchangesData], data =>
  data.map((item, index) => ({
    id: String(index + 1),
    ...item,
  }))
);
