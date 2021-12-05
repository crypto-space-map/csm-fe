import type { RootState } from 'types/root-state';

import { initialState } from './slice';

const selectDomain = (state: RootState) => state.datailInfo || initialState;

export const selectProviders = (state: RootState) => selectDomain(state).detailInfo || [];
export const overviewTradingStock = (state: RootState) => selectDomain(state).overviewTradingStock;
export const overviewTradingStockLoading = (state: RootState) =>
  selectDomain(state).overviewTradingStockLoading;
