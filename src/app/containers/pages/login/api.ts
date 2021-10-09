import { axios } from 'api';

import type { LoginDTORequestParams, LoginPageStateDTO } from './types';

export async function getToken(params: LoginDTORequestParams) {
  return axios.post<{ token: string }>('logIn', params, { withCredentials: true });
}

export async function getUser() {
  return axios.get<LoginPageStateDTO>('getUser', { withCredentials: true });
}

export async function logOut() {
  return axios.get<''>('logOut', { withCredentials: true });
}
