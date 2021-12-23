import { axios } from 'api';

import type { ExchangeDTO, ExchangeRequest } from './types';

export async function getExchangesData({ projectName, page }: ExchangeRequest) {
  return axios.get<ExchangeDTO[]>(`project/tickers/${projectName}`, { params: { page } });
}
