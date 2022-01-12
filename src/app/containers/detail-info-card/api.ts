import { axios } from 'api';

import type { ExchangeDTO, ExchangeRequest, ProjectDataResponseDTO } from './types';

export async function getExchangesData(projectId: string, params: ExchangeRequest) {
  return axios.get<ExchangeDTO[]>(`project/tickers/${projectId}`, { params });
}

export async function getProjectData(projectId: string) {
  return axios.get<ProjectDataResponseDTO>(`project/${projectId}`);
}
