import type { RootState } from 'types/root-state';

import { initialState } from './slice';

const selectDomain = (state: RootState) => state.user || initialState;

export const selectUserInfo = (state: RootState) => selectDomain(state).data || null;

export const selectLoading = (state: RootState) => selectDomain(state).loading;

export const selectLoadError = (state: RootState) => selectDomain(state).loadError;

export const selectAuth = (state: RootState) => selectDomain(state).isAuth;

export const selectAuthError = (state: RootState) => selectDomain(state).isAuthError;
