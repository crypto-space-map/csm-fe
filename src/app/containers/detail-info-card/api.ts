import { axios } from 'api';

import type { DetailInfoDto } from './types';

export async function getDetailInfoCard() {
  return axios.get<DetailInfoDto[]>('getDetailInfoCard', { withCredentials: true });
}
