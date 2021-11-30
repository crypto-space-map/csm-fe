export interface DetailInfoDto {
  provider_id: number;
  name: string;
}

export interface DetailInfoState {
  detailInfo: DetailInfoDto[];
  detailInfoLoading: boolean;
  overviewTradingStockLoading: boolean;
  overviewTradingStock: string;
}

export type ContainerState = DetailInfoState;
