import { FetchDataState } from 'utils/@reduxjs/fetchData';

export enum Exchanges {
  binance = 'Binance',
  gdax = 'Coinbase',
  huobi = 'Huobi',
  ftx_spot = 'Ftx',
  kucoin = 'Kucoin',
}

export type ExchangesType = keyof typeof Exchanges;

export type Partnership = {
  announcement: string;
  date: string;
  icon: string;
  marketCap: number;
  name: string;
  projectId: string;
};

export type MapDataResponse = {
  tree: Array<MapCategory>;
  maxMarketCap: number;
  minMarketCap: number;
};

export type MapCategory = {
  id: string;
  name: string;
  children: MapCategory[];
  exchanges?: ExchangesType[];
  marketCap: number;
  projectId?: string;
  projectWeight?: number;
};

export type ProjectData = {
  icon: string;
  id: string;
  name: string;
  projectId: string;
  symbol: string;
  marketCap: number;
};

export type FilterProps = {
  mCapFrom: number | null;
  mCapTo: number | null;
  exchanges: ExchangesType[];
  partnersWeight: string[];
};

interface MapTree extends FetchDataState {
  data: {
    tree: Array<MapCategory> | null;
    maxMarketCap: number | null;
    minMarketCap: number | null;
  };
}

interface Projects extends FetchDataState {
  data: Array<ProjectData>;
}

interface Partnerships extends FetchDataState {
  data: Partnership[];
}
export interface SpaceMapPageState {
  mapTree: MapTree;
  projects: Projects;
  filters: FilterProps;
  projectPartnerships: Partnerships;
}

export type ContainerState = SpaceMapPageState;
