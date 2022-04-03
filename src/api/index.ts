import axiosOriginal from 'axios';
import qs from 'qs';

/* AXIOS INSTANCE */
const setBackendUrl = () =>
  // some backend
  'http://49.12.13.50/api/v1/';
const formatParams = (params: Record<string, unknown>): string =>
  qs.stringify(params, { indices: false, arrayFormat: 'repeat' });

export const axios = axiosOriginal.create({
  baseURL: `${setBackendUrl()}`,
  paramsSerializer: formatParams,
});
