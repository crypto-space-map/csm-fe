import { useActions } from 'hooks';
import { fetchDataInitialState, fetchDataReducers } from 'utils/@reduxjs/fetchData';
import { createSlice, PayloadAction } from 'utils/@reduxjs/toolkit';

import type {
  ContainerState,
  ExchangeDTO,
  ExchangeRequest,
  ProjectDataResponseDTO,
  SocialDataDTO,
  EventsDTO,
  CommunityDTO,
} from './types';
import { sliceKey as name } from './utils';

export const initialState: ContainerState = {
  overviewExtraData: null,
  exchangesPage: 1,
  projectLoading: false,
  projectStatistic: null,
  projectHeaderData: null,
  exchangesData: {
    data: null,
    ...fetchDataInitialState,
  },
  eventsData: {
    data: null,
    ...fetchDataInitialState,
  },
  socialData: {
    data: null,
    ...fetchDataInitialState,
  },
  communityData: {
    data: null,
    ...fetchDataInitialState,
  },
};

const { fetchDataError: fetchExchangesDataError } = fetchDataReducers<
  ContainerState['exchangesData']['data']
>(initialState.exchangesData);

const { fetchDataSuccess: fetchComminityDataSuccess, fetchDataError: fetchComminityDataError } =
  fetchDataReducers<ContainerState['communityData']['data']>(initialState.communityData);

const { fetchDataSuccess: fetchEventsDataSuccess, fetchDataError: fetchEventsDataError } = fetchDataReducers<
  ContainerState['eventsData']['data']
>(initialState.eventsData);

const { fetchDataSuccess: fetchSocialDataSuccess, fetchDataError: fetchSocialDataError } = fetchDataReducers<
  ContainerState['socialData']['data']
>(initialState.socialData);

const providersListSlice = createSlice({
  name,
  initialState,
  reducers: {
    fetchSocialData(state, _action: PayloadAction<string>) {
      state.socialData.loading = true;
    },
    fetchSocialDataSuccess(state, action: PayloadAction<{ data: SocialDataDTO[] }>) {
      fetchSocialDataSuccess(state.socialData, action);
    },
    fetchSocialDataError(state, action: PayloadAction<{ message: string }>) {
      fetchSocialDataError(state.socialData, action);
    },

    fetchEventsData(state, _action: PayloadAction<string>) {
      state.eventsData.loading = true;
    },
    fetchEventsDataSuccess(state, action: PayloadAction<{ data: EventsDTO }>) {
      fetchEventsDataSuccess(state.eventsData, action);
    },
    fetchEventsDataError(state, action: PayloadAction<{ message: string }>) {
      fetchEventsDataError(state.eventsData, action);
    },

    fetchComminityData(state, _action: PayloadAction<string>) {
      state.communityData.loading = true;
    },
    fetchComminityDataSuccess(state, action: PayloadAction<{ data: CommunityDTO }>) {
      fetchComminityDataSuccess(state.communityData, action);
    },
    fetchComminityDataError(state, action: PayloadAction<{ message: string }>) {
      fetchComminityDataError(state.communityData, action);
    },

    fetchExchangesData(state, _action: PayloadAction<ExchangeRequest>) {
      state.exchangesData.loading = true;
    },
    fetchExchangesDataSuccess(state, action: PayloadAction<{ data: ExchangeDTO[] }>) {
      state.exchangesData.loading = false;
      // TODO сделать фильтрацию дублей
      state.exchangesData.data = action.payload.data;
    },
    fetchExchangesDataError(state, action: PayloadAction<{ message: string }>) {
      fetchExchangesDataError(state.exchangesData, action);
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
          priceChange: { '24h': priceChangePercentageDay, '7d': priceChangePercentageWeek },
          marketPrice,
          website,
          totalVolume,
          supply,
          category,
          description,
          explorers,
          maxVolumeExchange,
        },
      } = action;

      state.projectLoading = false;
      state.projectHeaderData = { name: projectName, symbol, icon, rank };
      state.overviewExtraData = { category, description, explorers, maxVolumeExchange };

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
    fetchProjectDataError(state) {
      state.projectLoading = false;
    },
    setExchangesPage(state, action: PayloadAction<number>) {
      state.exchangesPage = action.payload;
    },
    clearDataAfterChangeProject(state) {
      state.exchangesData.data = initialState.exchangesData.data;
      state.exchangesPage = initialState.exchangesPage;
      state.socialData.data = initialState.socialData.data;
      state.eventsData.data = initialState.eventsData.data;
      state.communityData.data = initialState.communityData.data;
    },
  },
});

export const { actions, reducer, name: sliceKey } = providersListSlice;
export const useDispatchAction = () => useActions(actions);
