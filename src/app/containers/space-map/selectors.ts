import type { RootState } from 'types/root-state';

import { initialState } from './slice';

const selectDomain = (state: RootState) => state.spaceMapData || initialState;

export const selectMapData = (state: RootState) => selectDomain(state) || null;

export const selectPartnerships = (state: RootState) => ({
  projectPartnerships: selectDomain(state).projectPartnerships.data?.map(item => item.projectId) || null,
  projectPartnershipsLoading: selectDomain(state).projectPartnerships.loading,
});
