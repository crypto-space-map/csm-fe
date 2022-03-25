import { PayloadAction } from '@reduxjs/toolkit';

import { useActions as useDispatchActionHook } from 'hooks';
import { FundsDTO, InvestorsProps } from 'types/dto';
import { fetchDataInitialState, fetchDataReducers } from 'utils/@reduxjs/fetchData';
import { createSlice } from 'utils/@reduxjs/toolkit';

import { ContainerState, FundItemDTO, PointCoords } from './types';

// The initial state of the PageStoreTypes container
export const initialState: ContainerState = {
  projectName: null,
  fundName: null,
  pointsCoords: [],
  topFunds: {
    data: null,
    ...fetchDataInitialState,
  },
  fundBlockItemsIdList: [],
  fundsData: {
    data: null,
    ...fetchDataInitialState,
  },
  isShowLines: false, // флаг показывать ли связи фондов с проектами
};

const { fetchDataSuccess: fetchTopFundsDataSuccess, fetchDataError: fetchTopFundsDataError } =
  fetchDataReducers<ContainerState['topFunds']['data']>(initialState.topFunds);

const { fetchDataSuccess: fetchFundsDataSuccess, fetchDataError: fetchFundsDataError } = fetchDataReducers<
  ContainerState['fundsData']['data']
>(initialState.fundsData);

const pageStoreTypesSlice = createSlice({
  name: 'pageStore',
  initialState,
  reducers: {
    fetchTopFundsData(state) {
      state.topFunds.loading = true;
    },
    fetchTopFundsDataSuccess(state, action: PayloadAction<{ data: FundItemDTO[] }>) {
      fetchTopFundsDataSuccess(state.topFunds, action);
    },
    fetchTopFundsDataError(state, action: PayloadAction<{ message: string }>) {
      fetchTopFundsDataError(state.topFunds, action);
    },
    fetchFundsData(state, _action: PayloadAction<string>) {
      state.fundsData.loading = true;
    },
    fetchFundsDataSuccess(state, action: PayloadAction<{ data: FundsDTO[] }>) {
      const { data } = action.payload;
      const fundsList = data.reduce<InvestorsProps[]>((sum, current) => {
        sum = [...sum, ...current.investors];
        return sum;
      }, []);
      const filteredList = fundsList.filter(item => item.isOnMap);

      state.fundBlockItemsIdList = filteredList.map(item => item.id);
      fetchFundsDataSuccess(state.fundsData, action);
    },
    fetchFundsDataError(state, action: PayloadAction<{ message: string }>) {
      fetchFundsDataError(state.fundsData, action);
    },

    setProjectName(state, action: PayloadAction<string | null>) {
      state.projectName = action.payload;
    },
    setFundName(state, action: PayloadAction<string | null>) {
      state.fundName = action.payload;
    },
    setIsShowLines(state, action: PayloadAction<boolean>) {
      state.isShowLines = action.payload;
    },
    setFundBlockItemsIdList(state, action: PayloadAction<string[]>) {
      state.fundBlockItemsIdList = action.payload;
    },
    setPointsCoords(state, action: PayloadAction<PointCoords>) {
      state.pointsCoords = [...state.pointsCoords, action.payload];
    },
    clearPointsCoords(state) {
      state.pointsCoords = initialState.pointsCoords;
    },
    clearFundsData(state) {
      state.fundsData.data = initialState.fundsData.data;
    },
    cleadFundBlockItemsIdList(state) {
      state.fundBlockItemsIdList = initialState.fundBlockItemsIdList;
    },
    clearData(state) {
      state.fundName = initialState.fundName;
      state.projectName = initialState.projectName;
      state.fundBlockItemsIdList = initialState.fundBlockItemsIdList;
      state.isShowLines = initialState.isShowLines;
    },
  },
});

export const { actions, reducer, name: sliceKey } = pageStoreTypesSlice;
export const useDispatchAction = () => useDispatchActionHook(actions);
