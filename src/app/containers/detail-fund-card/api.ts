import { axios } from 'api';

import type { InvestorDTO, FundDataDTO } from './types';

export async function getInvestorsData(investorId: string) {
  return axios.get<InvestorDTO[]>(`funds?investorId=${investorId}`);
}

export async function getFundData(fundId: string) {
  return axios.get<FundDataDTO>(`funds/${fundId}`);
}
