import { axios } from 'api';

import { MapDataResponse, ProjectData } from './types';

export async function apiFetchMapData() {
  return axios.get<MapDataResponse>('api/v0/category/tree', { withCredentials: true });
}

export async function apiFetchProjects() {
  return axios.get<ProjectData[]>('api/v0/project/all?withIcon', { withCredentials: true });
}
