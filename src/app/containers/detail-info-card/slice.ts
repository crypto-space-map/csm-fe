import { PayloadAction } from '@reduxjs/toolkit';

import { useActions } from 'hooks';
import { createSlice } from 'utils/@reduxjs/toolkit';

import type { ContainerState, DetailInfoDto } from './types';
import { sliceKey as name } from './utils';

export const initialState: ContainerState = {
  detailInfo: [],
  overviewTradingStock: '',
  overviewTradingStockLoading: false,
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
  },
});

export const { actions, reducer, name: sliceKey } = providersListSlice;
export const useDispatchAction = () => useActions(actions);
