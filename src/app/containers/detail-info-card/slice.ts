import { useActions } from 'hooks';
import { createSlice, PayloadAction } from 'utils/@reduxjs/toolkit';

import type { ContainerState, ExchangeDTO, ExchangeRequest } from './types';
import { sliceKey as name } from './utils';

export const initialState: ContainerState = {
  overviewTradingStock: '',
  overviewTradingStockLoading: false,
  exchangesData: [],
  exchangesPage: 1,
  exchangesDataLoading: false,
};

const providersListSlice = createSlice({
  name,
  initialState,
  reducers: {
    fetchOverviewTradingStock(state) {
      state.overviewTradingStockLoading = true;
    },
    fetchOverviewTradingStockSuccess(state, action: PayloadAction<string>) {
      state.overviewTradingStockLoading = false;
      state.overviewTradingStock = action.payload;
    },
    fetchOverviewTradingStockFail(state) {
      state.overviewTradingStockLoading = false;
    },
    fetchExchangesData(state, _action: PayloadAction<ExchangeRequest>) {
      state.exchangesDataLoading = true;
    },
    fetchExchangesDataSuccess(state, action: PayloadAction<ExchangeDTO[]>) {
      state.exchangesDataLoading = false;
      // TODO сделать фильтрацию дублей
      state.exchangesData = state.exchangesData.concat(action.payload);
    },
    fetchExchangesDataFail(state) {
      state.exchangesDataLoading = false;
    },
    clearExchangesData(state) {
      state.exchangesData = initialState.exchangesData;
    },
    setExchangesPage(state, action: PayloadAction<number>) {
      state.exchangesPage = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = providersListSlice;
export const useDispatchAction = () => useActions(actions);
