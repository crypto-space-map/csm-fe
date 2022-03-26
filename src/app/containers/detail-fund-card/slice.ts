import { useActions } from 'hooks';
import { fetchDataInitialState, fetchDataReducers } from 'utils/@reduxjs/fetchData';
import { createSlice, PayloadAction } from 'utils/@reduxjs/toolkit';

import type { ContainerState, InvestorDTO, FundDataDTO } from './types';
import { sliceKey as name } from './utils';

export const initialState: ContainerState = {
  investorsData: null,
  investorsDataLoading: false,
  fundData: {
    data: null,
    ...fetchDataInitialState,
  },
};

const { fetchDataSuccess: fetchFundDataSuccess, fetchDataError: fetchFundDataError } = fetchDataReducers<
  ContainerState['fundData']['data']
>(initialState.fundData);

const providersListSlice = createSlice({
  name,
  initialState,
  reducers: {
    fetchFundData(state, _action: PayloadAction<string>) {
      state.fundData.loading = true;
    },
    fetchFundDataSuccess(state, action: PayloadAction<{ data: FundDataDTO }>) {
      fetchFundDataSuccess(state.fundData, action);
    },
    fetchFundDataError(state, action: PayloadAction<{ message: string }>) {
      fetchFundDataError(state.fundData, action);
    },
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
      state.fundData.data = initialState.fundData.data;
    },
  },
});

export const { actions, reducer, name: sliceKey } = providersListSlice;
export const useDispatchAction = () => useActions(actions);
