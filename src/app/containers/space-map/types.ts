import { FetchDataState } from 'utils/@reduxjs/fetchData';

export enum Exchanges {
  binance = 'Binance',
  gdax = 'Coinbase',
  huobi = 'Ftx',
  ftx_spot = 'Huobi',
  kucoin = 'Kucoin',
}

export type MapDataResponse = {
  tree: Array<CSMMapCategory>;
  maxMarketCap: number;
  minMarketCap: number;
};

export type CSMMapCategory = {
  id: string;
  name: string;
  children: CSMMapCategory[];
  marketCap: number;
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
  exchanges: Exchanges[];
};

interface MapTree extends FetchDataState {
  data: {
    tree: Array<CSMMapCategory> | null;
    maxMarketCap: number | null;
    minMarketCap: number | null;
  };
}

interface Projects extends FetchDataState {
  data: Array<ProjectData>;
}

export interface SpaceMapPageState {
  mapTree: MapTree;
  projects: Projects;
  filters: FilterProps;
}

export type ContainerState = SpaceMapPageState;
