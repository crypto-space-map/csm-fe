import axiosOriginal from 'axios';
import qs from 'qs';

/* AXIOS INSTANCE */
const setBackendUrl = () =>
  // some backend
  // 'https://backend.cryptospacemap.com/api/v1/';
  `http://161.97.71.34:8080/api/v1`;
const formatParams = (params: Record<string, unknown>): string =>
  qs.stringify(params, { indices: false, arrayFormat: 'repeat' });

export const axios = axiosOriginal.create({
  baseURL: `${setBackendUrl()}`,
  paramsSerializer: formatParams,
});
