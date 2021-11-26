import { fetchDataReducers, fetchDataInitialState } from 'utils/@reduxjs/fetchData';
import { createSlice } from 'utils/@reduxjs/toolkit';

import type { ContainerState } from './types';
import { sliceKey as name } from './utils';

// The initial state of the DeparturesPage container
export const initialState: ContainerState = {
  ...fetchDataInitialState,
  data: null,
};

const loginPageSlice = createSlice({
  name,
  initialState,
  reducers: {
    ...fetchDataReducers<any>(initialState),
  },
});

export const { actions, reducer, name: sliceKey } = loginPageSlice;
