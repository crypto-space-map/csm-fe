import { axios } from 'api';

import type { ExchangeDTO, ExchangeRequest } from './types';

export async function getExchangesData(projectId: string, params: ExchangeRequest) {
  return axios.get<ExchangeDTO[]>(`project/tickers/${projectId}`, { params });
}
