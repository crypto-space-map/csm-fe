import { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from 'utils/@reduxjs/toolkit';

import type { ContainerState, DetailInfoDto } from './types';
import { sliceKey as name } from './utils';

export const initialState: ContainerState = {
  detailInfo: [],
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
  },
});

export const { actions, reducer, name: sliceKey } = providersListSlice;
