import { createSelector, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../types/root-state';

export interface FetchDataState {
  loading: boolean;
  loadError: string | null;
  data: unknown;
}

export interface NewFetchDataState<T> {
  loading: boolean;
  loadError: string | null;
  data: T;
}

export const fetchDataInitialState: Omit<FetchDataState, 'data'> = {
  loading: false,
  loadError: null,
};

const getKeyNames = (name: string) => ({
  fetchData: `fetch${name}Data`,
  fetchDataSuccess: `fetch${name}DataSuccess`,
  fetchDataError: `fetch${name}DataError`,
  clearData: `clear${name}Data`,
  reloadData: `reload${name}Data`,
});

export function fetchDataReducers<TData, TPayload = void>(initialState: { data: TData | null }) {
  return {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fetchData: (state: FetchDataState, _action: PayloadAction<TPayload>) => {
      state.loading = true;
    },
    fetchDataSuccess(state: FetchDataState, action: PayloadAction<{ data: TData }>) {
      state.loading = false;
      state.loadError = null;
      state.data = action.payload.data;
    },
    fetchDataError(state: FetchDataState, action: PayloadAction<{ message: string }>) {
      state.loading = false;
      state.loadError = action.payload.message;
    },
    clearData(state: FetchDataState) {
      state.data = initialState.data;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reloadData(state: FetchDataState) {},
  };
}

export function fetchDataReducersWithName<
  TData,
  TPayload = void
  // TState extends Record<string, FetchDataState>,
>(name: string, initialState: Record<string, FetchDataState>) {
  const keyNames = getKeyNames(name as string);
  return {
    [keyNames.fetchData]: (state: typeof initialState, _action: PayloadAction<TPayload>) => {
      state[name].loading = true;
    },
    [keyNames.fetchDataSuccess]: (state: typeof initialState, action: PayloadAction<TData>) => {
      state[name].loading = false;
      state[name].loadError = null;
      state[name].data = action.payload;
    },
    [keyNames.fetchDataError]: (state: typeof initialState, action: PayloadAction<string>) => {
      state[name].loading = false;
      state[name].loadError = action.payload;
    },
    [keyNames.clearData]: (state: typeof initialState) => {
      state[name].data = initialState[name].data;
    },
    [keyNames.reloadData]: (_state: typeof initialState) => {},
  };
}

export function createFetchingStateSelector(selectDomain: (state: RootState) => FetchDataState) {
  return createSelector(
    [(state: RootState) => selectDomain(state).loading, (state: RootState) => selectDomain(state).loadError],
    (loading, loadError) => ({ loading, loadError })
  );
}
