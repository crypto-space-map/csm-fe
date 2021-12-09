import { PayloadAction } from '@reduxjs/toolkit';

import { useActions } from 'hooks';
import { createSlice } from 'utils/@reduxjs/toolkit';

import type { ContainerState, DetailInfoDto, ExchangeDTO } from './types';
import { sliceKey as name } from './utils';

export const initialState: ContainerState = {
  detailInfo: [],
  overviewTradingStock: '',
  overviewTradingStockLoading: false,
  exchangesData: [],
  exchangesDataLoading: false,
  detailInfoLoading: false,
};

const providersListSlice = createSlice({
  name,
  initialState,
  reducers: {
    fetchDetialInfo(state) {
      state.detailInfoLoading = true;
    },
    fetchDetialInfoSuccess(state, action: PayloadAction<DetailInfoDto[]>) {
      state.detailInfoLoading = false;
      state.detailInfo = action.payload;
    },
    fetchDetialInfoFail(state) {
      state.detailInfoLoading = false;
    },

    fetchOverviewTradingStock(state) {
      state.detailInfoLoading = true;
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
