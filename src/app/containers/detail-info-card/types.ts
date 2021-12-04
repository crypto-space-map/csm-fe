export interface DetailInfoDto {
  provider_id: number;
  name: string;
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
  detailInfo: DetailInfoDto[];
  exchangesData: ExchangeDTO[];
  exchangesDataLoading: boolean;
  detailInfoLoading: boolean;
  overviewTradingStockLoading: boolean;
  overviewTradingStock: string;
}

export type ContainerState = DetailInfoState;
