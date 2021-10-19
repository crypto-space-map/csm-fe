import { fetchDataReducers, fetchDataInitialState } from 'utils/@reduxjs/fetchData';
import { createSlice } from 'utils/@reduxjs/toolkit';

import type { ContainerState, ProvidersStateDTO } from './types';
import { sliceKey as name } from './utils';

export const initialState: ContainerState = {
  ...fetchDataInitialState,
  data: [],
};

const providersListSlice = createSlice({
  name,
  initialState,
  reducers: {
    ...fetchDataReducers<ProvidersStateDTO>(initialState),
  },
});

export const { actions, reducer, name: sliceKey } = providersListSlice;
