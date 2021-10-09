import { axios } from 'api';

import type { ProvidersStateDTO } from './types';

export async function getProviders() {
  return axios.get<ProvidersStateDTO>('getProviders', { withCredentials: true });
}
