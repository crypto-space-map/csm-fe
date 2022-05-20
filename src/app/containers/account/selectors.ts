import type { RootState } from 'types/root-state';

import { initialState } from './slice';

const selectDomain = (state: RootState) => state.account || initialState;

export const selectCurrentMenuTab = (state: RootState) => selectDomain(state).selectedTab || null;
