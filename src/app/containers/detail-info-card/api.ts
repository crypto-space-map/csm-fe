import { axios } from 'api';

import type { ExchangeDTO, ExchangeRequest, ProjectDataResponseDTO, SocialDataDTO, FundsDTO } from './types';

export async function getExchangesData({ projectName, page }: ExchangeRequest) {
  return axios.get<ExchangeDTO[]>(`project/tickers/${projectName}`, { params: { page } });
}

export async function getFundsData(projectName: string) {
  return axios.get<FundsDTO[]>(`funds?projectId=${projectName}`);
}

export async function getProjectData(projectId: string) {
  return axios.get<ProjectDataResponseDTO>(`project/${projectId}`);
}

export async function getSocialData(projectId: string) {
  return axios.get<SocialDataDTO[]>(`project/social/${projectId}`);
}
