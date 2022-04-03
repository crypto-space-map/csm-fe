import { axios } from 'api';
import { FundsDTO } from 'types/dto';

import type { FundItemDTO } from './types';

export async function getTopFundsData() {
  return axios.get<FundItemDTO[]>('funds/top');
}

export async function getFundsData(projectName: string) {
  return axios.get<FundsDTO[]>(`funds?projectId=${projectName}`);
}
