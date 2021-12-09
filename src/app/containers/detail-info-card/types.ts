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

export interface DetailInfoState {
  exchangesData: ExchangeDTO[];
  exchangesDataLoading: boolean;
  overviewTradingStockLoading: boolean;
  overviewTradingStock: string;
  exchangesPage: number;
}

export type ContainerState = DetailInfoState;
