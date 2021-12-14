import type { FetchDataState, NewFetchDataState } from 'utils/@reduxjs/fetchData';

export interface ExchangeRequest {
  page: number;
}
export interface ExchangeDTO {
  exchange: string;
  url: string;
  pair: string;
  price: number;
  volume: number;
  persentVolume?: string;
  updatedAt: string;
}

/* export interface DetailInfoState {
  exchangesData: ExchangeDTO[];
  exchangesDataLoading: boolean;
  overviewTradingStockLoading: boolean;
  overviewTradingStock: string;
} */
interface OverviewTradingStockProps extends Omit<FetchDataState, 'data'> {
  data: string;
}

interface ExchangesDataOptionsProps extends Omit<FetchDataState, 'data'> {
  data: ExchangeDTO[];
}
export type DetailInfoState = {
  overviewTradingStock: NewFetchDataState<string>;
  exchangesData: NewFetchDataState<ExchangeDTO[]>;
};

export type ContainerState = DetailInfoState;
