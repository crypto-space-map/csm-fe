import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from 'types/root-state';

import { initialState } from './slice';

const selectDomain = (state: RootState) => state.datailInfo || initialState;

export const overviewTradingStock = (state: RootState) => selectDomain(state).overviewTradingStock.data;
export const overviewTradingStockLoading = (state: RootState) =>
  selectDomain(state).overviewTradingStock.loading;

export const exchangesData = (state: RootState) => selectDomain(state).exchangesData.data;
export const exchangesDataLoading = (state: RootState) => selectDomain(state).exchangesData.loading;

export const enrichedExchangesData = createSelector([exchangesData], data =>
  data.map((item, index) => ({
    id: String(index + 1),
    ...item,
  }))
);
