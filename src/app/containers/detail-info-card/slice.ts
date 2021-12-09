import { useActions } from 'hooks';
import { fetchDataReducers, fetchDataInitialState } from 'utils/@reduxjs/fetchData';
import { createSlice, PayloadAction } from 'utils/@reduxjs/toolkit';

import type { ContainerState, ExchangeDTO } from './types';
import { sliceKey as name } from './utils';

export const initialState: ContainerState = {
  overviewTradingStock: '',
  overviewTradingStockLoading: false,
  exchangesData: [],
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
    fetchExchangesData(state, _action: PayloadAction<{ page: number }>) {
      state.exchangesDataLoading = true;
    },
    fetchExchangesDataSuccess(state, action: PayloadAction<ExchangeDTO[]>) {
      state.exchangesDataLoading = false;
      state.exchangesData = state.exchangesData.concat(action.payload);
    },
    fetchExchangesDataFail(state) {
      state.exchangesDataLoading = false;
    },
    clearExchangesData(state) {
      state.exchangesData = initialState.exchangesData;
    },
  },
});

export const { actions, reducer, name: sliceKey } = providersListSlice;
export const useDispatchAction = () => useActions(actions);
