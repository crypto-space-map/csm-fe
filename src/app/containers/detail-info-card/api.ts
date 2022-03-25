import { axios } from 'api';

import type {
  ExchangeDTO,
  ExchangeRequest,
  ProjectDataResponseDTO,
  SocialDataDTO,
  EventsDTO,
} from './types';

export async function getExchangesData({ projectName, page }: ExchangeRequest) {
  return axios.get<{ data: ExchangeDTO[] }>(`project/tickers/${projectName}`, { params: { page } });
}

export async function getProjectData(projectId: string) {
  return axios.get<ProjectDataResponseDTO>(`project/${projectId}`);
}

export async function getSocialData(projectId: string) {
  return axios.get<SocialDataDTO[]>(`project/social/${projectId}`);
}

export async function getEventsData(projectId: string) {
  return axios.get<EventsDTO>(`project/events/${projectId}`);
}
