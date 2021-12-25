import { axios } from 'api';

import { MapDataResponse, ProjectData } from './types';

export async function apiFetchMapData() {
  return axios.get<MapDataResponse>('category/tree', { withCredentials: true });
}

export async function apiFetchProjects() {
  return axios.get<ProjectData[]>('project/all?withIcon', { withCredentials: true });
}
