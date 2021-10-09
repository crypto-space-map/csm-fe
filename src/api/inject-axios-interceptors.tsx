import { AxiosError, AxiosRequestConfig } from 'axios';
import { RouteComponentProps } from 'react-router-dom';

import { deleteCookie, getCookie } from 'utils/cookie';

import { axios } from './index';

type History = RouteComponentProps['history'];

interface RequestConfig extends AxiosRequestConfig {
  headers?: Record<string, string>;
}
/* 
  simple use case 
  shoud be rewritten in future
*/
axios.interceptors.request.use(
  (requestConfig: RequestConfig): RequestConfig => {
    const token = getCookie('token');
    if (token) {
      requestConfig.headers = {
        ...requestConfig.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return requestConfig;
  },
  (error: AxiosError) => Promise.reject(error)
);
/* 
  simple use case 
  shoud be rewritten in future
  for navigation inside of application
*/
export const setupInterceptors = (history: History) => {
  axios.interceptors.response.use(
    res => res,
    (err: AxiosError) => {
      const status = err.response?.status;
      if (status === 401) {
        const token = getCookie('token');
        if (token) deleteCookie('token');
        if (history.location.pathname !== '/login') history.push('/login');
      }

      return Promise.reject(err);
    }
  );
};
