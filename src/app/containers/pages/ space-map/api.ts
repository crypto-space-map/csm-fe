import { axios } from 'api';

import { CSMMapCategory } from './types';

export async function fetchMapData() {
  return axios.get<Array<CSMMapCategory>>('api/v0/category/tree', { withCredentials: true });
}
