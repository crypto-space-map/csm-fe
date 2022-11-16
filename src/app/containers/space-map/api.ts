import { axios } from 'api';

import { actions } from './slice';
import { MapDataResponse, Partnership, ProjectData } from './types';

const BASIC_EXCHANGES = ['binance', 'gdax', 'huobi', 'ftx_spot', 'kucoin'];

export async function apiFetchMapData(payload: ReturnType<typeof actions.fetchSpaceMapData>['payload']) {
  return axios.get<MapDataResponse>('http://161.97.71.34:8080/api/v1/category/tree', {
    // return axios.get<MapDataResponse>('https://backend.cryptospacemap.com/api/v1/category/tree', {
    withCredentials: true,
    // params: { ...payload },
  });
}

export async function apiFetchProjects() {
  return axios.get<ProjectData[]>('project/all?withIcon', {
    withCredentials: true,
    params: {
      exchanges: BASIC_EXCHANGES.join(','),
    },
  });
}

export async function apiFetchPartners(partnership: string) {
  return axios.get<Partnership[]>(`project/partnerships/${partnership}`, {
    withCredentials: true,
  });
}
