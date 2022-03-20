import { axios } from 'api';

import type {
  ExchangeDTO,
  ExchangeRequest,
  ProjectDataResponseDTO,
  SocialDataDTO,
  FundsDTO,
  EventsDTO,
  CommunityDTO,
} from './types';

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

export async function getEventsData(projectId: string) {
  return axios.get<EventsDTO>(`project/events/${projectId}`);
}

export async function getCommunityData(projectId: string) {
  // Исправить на актуальный
  return axios.get<CommunityDTO>(`/project/communities/${projectId}`);
}
