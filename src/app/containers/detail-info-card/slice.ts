import { useActions } from 'hooks';
import { createSlice, PayloadAction } from 'utils/@reduxjs/toolkit';
import { getPersentageVolume } from 'utils/detail-info';

import type { ContainerState, ExchangeDTO, ExchangeRequest, ProjectDataResponseDTO } from './types';
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
    fetchExchangesData(state, _action: PayloadAction<ExchangeRequest>) {
      state.exchangesDataLoading = true;
    },
    fetchExchangesDataSuccess(state, action: PayloadAction<ExchangeDTO[]>) {
      state.exchangesDataLoading = false;
      const totalVolume = state.projectStatistic?.totalVolume?.usd || 0;

      // TODO сделать фильтрацию дублей
      const newExchangesData = state.exchangesData.concat(action.payload).map(item => {
        if (!item?.persentVolume) {
          return { ...item, persentVolume: getPersentageVolume(item.volume, totalVolume) };
        }
        return item;
      });

      state.exchangesData = newExchangesData;
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
    fetchProjectData(state, _action: PayloadAction<string>) {
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
          priceChangePercentage: { '24h': priceChangePercentageDay, '7d': priceChangePercentageWeek },
          marketPrice,
          website,
          totalVolume,
          supply,
        },
      } = action;

      state.projectLoading = false;
      state.projectHeaderData = { name: projectName, symbol, icon, rank };
      state.projectStatistic = {
        marketPrice,
        priceChangePercentageDay,
        priceChangePercentageWeek,
        website,
        marketCap,
        totalVolume,
        supplyCirculating: supply.circulating,
        supplyTotal: supply.total,
      };
    },
    fetchProjectDataFail(state) {
      state.projectLoading = false;
    },
    clearDataAfterChangeProject(state) {
      state.exchangesData = initialState.exchangesData;
      state.exchangesPage = initialState.exchangesPage;
    },
  },
});

export const { actions, reducer, name: sliceKey } = providersListSlice;
export const useDispatchAction = () => useActions(actions);
