import { axios } from 'api';

import type { ExchangeDTO, ExchangeRequest, ProjectDataResponseDTO } from './types';

export async function getExchangesData({ projectName, page }: ExchangeRequest) {
  return axios.get<ExchangeDTO[]>(`project/tickers/${projectName}`, { params: { page } });
}

export async function getProjectData(projectId: string) {
  return axios.get<ProjectDataResponseDTO>(`project/${projectId}`);
}
