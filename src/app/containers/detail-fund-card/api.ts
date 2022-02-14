import { axios } from 'api';

import type { InvestorDTO } from './types';

export async function getInvestorsData(investorId: string) {
  return axios.get<InvestorDTO[]>(`funds?investorId=${investorId}`);
}
