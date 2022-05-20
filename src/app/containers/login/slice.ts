import { fetchDataReducers, fetchDataInitialState } from 'utils/@reduxjs/fetchData';
import { createSlice, PayloadAction } from 'utils/@reduxjs/toolkit';

import type { ContainerState, LoginDTORequestParams } from './types';
import { sliceKey as name } from './utils';

// The initial state of the DeparturesPage container
export const initialState: ContainerState = {
  ...fetchDataInitialState,
  data: null,
  isAuth: false,
  recoverMsgSended: false,
  userMail: null,
  isAuthError: false,
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
    setAuthError(state, action: PayloadAction<{ isError: boolean }>) {
      state.isAuthError = action.payload.isError;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fetchUser(state, _action: PayloadAction<LoginDTORequestParams>) {
      state.loading = true;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    registerUser(state, _action: PayloadAction<LoginDTORequestParams>) {
      state.loading = true;
    },
    recoverMsg(state, action: PayloadAction<{ email: string }>) {
      state.loading = true;
      state.userMail = action.payload.email;
    },
    recoverMsgSended(state) {
      state.recoverMsgSended = true;
    },
    logOut(state) {
      state.isAuth = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = loginPageSlice;
