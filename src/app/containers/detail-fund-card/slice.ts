import { useActions } from 'hooks';
import { createSlice, PayloadAction } from 'utils/@reduxjs/toolkit';

import type { ContainerState, InvestorDTO } from './types';
import { sliceKey as name } from './utils';

export const initialState: ContainerState = {
  investorsData: null,
  investorsDataLoading: false,
};

const providersListSlice = createSlice({
  name,
  initialState,
  reducers: {
    fetchInvestorsData(state, _action: PayloadAction<string>) {
      state.investorsDataLoading = true;
    },
    fetchInvestorsDataSuccess(state, action: PayloadAction<InvestorDTO[]>) {
      state.investorsDataLoading = false;
      state.investorsData = action.payload;
    },
    fetchInvestorsDataFail(state) {
      state.investorsDataLoading = false;
    },
    clearDataAfterChangeFund(state) {
      state.investorsData = initialState.investorsData;
    },
  },
});

export const { actions, reducer, name: sliceKey } = providersListSlice;
export const useDispatchAction = () => useActions(actions);
