import { createSelector, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../types/root-state';

export interface FetchDataState {
  loading: boolean;
  loadError: string | null;
  data: unknown;
}

export const fetchDataInitialState: Omit<FetchDataState, 'data'> = {
  loading: false,
  loadError: null,
};

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

export function createFetchingStateSelector(selectDomain: (state: RootState) => FetchDataState) {
  return createSelector(
    [(state: RootState) => selectDomain(state).loading, (state: RootState) => selectDomain(state).loadError],
    (loading, loadError) => ({ loading, loadError })
  );
}
