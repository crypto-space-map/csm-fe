import { axios } from 'api';

import type { LoginDTORequestParams, LoginPageStateDTO } from './types';

export async function getToken(params: LoginDTORequestParams) {
  return axios.post<{ token: string }>('auth/signin', params, { withCredentials: true });
}

export async function registerUser(params: LoginDTORequestParams) {
  return axios.get<LoginPageStateDTO>('registerUser', { withCredentials: true, params });
}

export async function forgotPassword(email: string) {
  return axios.get<LoginPageStateDTO>('registerUser', { withCredentials: true });
}

export async function loginUser(data: LoginDTORequestParams) {
  return axios.post<LoginPageStateDTO>('auth/signin', data);
}

export async function logOut() {
  return axios.get<''>('logOut', { withCredentials: true });
}
