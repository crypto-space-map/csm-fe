import { axios } from 'api';

import { MapDataResponse, ProjectData } from './types';

const BASIC_EXCHANGES = ['binance', 'gdax', 'huobi', 'ftx_spot', 'kucoin'];

export async function apiFetchMapData() {
  return axios.get<MapDataResponse>('category/tree', { withCredentials: true });
}

export async function apiFetchProjects() {
  return axios.get<ProjectData[]>('project/all?withIcon', {
    withCredentials: true,
    params: {
      exchanges: BASIC_EXCHANGES.join(','),
    },
  });
}
