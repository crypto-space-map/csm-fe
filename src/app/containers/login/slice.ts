import { fetchDataReducers, fetchDataInitialState } from 'utils/@reduxjs/fetchData';
import { createSlice, PayloadAction } from 'utils/@reduxjs/toolkit';

import type { ContainerState, LoginDTORequestParams } from './types';
import { sliceKey as name } from './utils';

// The initial state of the DeparturesPage container
export const initialState: ContainerState = {
  ...fetchDataInitialState,
  data: null,
  isAuth: false,
};

const loginPageSlice = createSlice({
  name,
  initialState,
  reducers: {
    /** READ */
    ...fetchDataReducers<any, LoginDTORequestParams>(initialState),
    /** SET USER AUTHORIZED */
    setAuth(state, action: PayloadAction<{ isAuth: boolean }>) {
      state.isAuth = action.payload.isAuth;
    },
    fetchUser(state) {
      state.loading = true;
    },
    registerUser(state) {
      state.loading = true;
    },
    logOut(state) {
      state.isAuth = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = loginPageSlice;
