import type { RootState } from 'types/root-state';

import { initialState } from './slice';

const selectDomain = (state: RootState) => state.providers || initialState;

export const selectProviders = (state: RootState) => selectDomain(state).data || [];
