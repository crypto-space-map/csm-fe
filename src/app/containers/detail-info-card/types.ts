export interface DetailInfoDto {
  provider_id: number;
  name: string;
}

export interface DetailInfoState {
  detailInfo: DetailInfoDto[];
  detailInfoLoading: boolean;
}

export type ContainerState = DetailInfoState;
