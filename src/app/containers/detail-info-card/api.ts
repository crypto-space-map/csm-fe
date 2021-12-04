import { axios } from 'api';

import type { DetailInfoDto, ExchangeDTO } from './types';

export async function getDetailInfoCard() {
  return axios.get<DetailInfoDto[]>('getDetailInfoCard', { withCredentials: true });
}

export async function getExchangesData() {
  return axios.get<ExchangeDTO[]>('http://49.12.13.50/api/v0/project/tickers/solana');
}
