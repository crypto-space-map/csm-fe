import type { RootState } from 'types/root-state';

import { initialState } from './slice';

const selectDomain = (state: RootState) => state.spaceMapData || initialState;

export const selectCSMMapData = (state: RootState) => selectDomain(state) || null;
