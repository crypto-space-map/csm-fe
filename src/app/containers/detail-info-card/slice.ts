import { useActions } from 'hooks';
import { fetchDataReducers, fetchDataInitialState } from 'utils/@reduxjs/fetchData';
import { createSlice, PayloadAction } from 'utils/@reduxjs/toolkit';

import type { ContainerState, ExchangeDTO, ProjectDataResponseDTO } from './types';
import { sliceKey as name } from './utils';

export const initialState: ContainerState = {
  overviewTradingStock: '',
  overviewTradingStockLoading: false,
  exchangesData: [],
  exchangesPage: 1,
  exchangesDataLoading: false,
  projectLoading: false,
  projectStatistic: null,
  projectHeaderData: null,
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
    fetchProjectData(state) {
      state.projectLoading = true;
    },
    fetchProjectDataSuccess(state, action: PayloadAction<ProjectDataResponseDTO>) {
      const {
        payload: {
          name: projectName,
          symbol,
          icon,
          rank,
          marketCap,
          marketPrice,
          priceChangePercentage,
          website,
          totalVolume,
          supply,
        },
      } = action;
      state.projectLoading = false;
      state.projectHeaderData = { name: projectName, symbol, icon, rank };
      state.projectStatistic = {
        marketCap,
        marketPrice,
        website,
        totalVolume,
        priceChangePercentageDay: priceChangePercentage['24h'],
        priceChangePercentageWeek: priceChangePercentage['7d'],
        supplyCirculating: supply.circulating,
        supplyTotal: supply.total,
      };
    },
    fetchProjectDataFail(state) {
      state.projectLoading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = providersListSlice;
export const useDispatchAction = () => useActions(actions);
