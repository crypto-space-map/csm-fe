import type { RootState } from 'types/root-state';

import { initialState } from './slice';
import { CategoryPathData } from './types';

const selectDomain = (state: RootState) => state.spaceMapData || initialState;

export const selectMapData = (state: RootState) => selectDomain(state) || null;

export const selectPartnerships = (state: RootState) => ({
  projectPartnerships: selectDomain(state).projectPartnerships.data?.map(item => item.projectId) || [],
  projectPartnershipsLoading: selectDomain(state).projectPartnerships.loading,
});

export const selectFilters = (state: RootState) => selectDomain(state).filters;

export const selectCategoriesParentPathData = (state: RootState) =>
  selectDomain(state).mapTree.data.tree?.reduce((acc, { sortingNumber, parentPathData, parent }) => {
    const isIncludes = acc.some(elem => elem.sortingNumber === sortingNumber);
    if (!isIncludes && parentPathData) {
      acc = [...acc, { sortingNumber, parentPathData, parent: parent || null }];
    }
    return acc;
  }, [] as CategoryPathData[]);

export const selectMapTree = (state: RootState) => selectDomain(state).mapTree.data;

export const selectMapTreeCaps = (state: RootState) => ({
  maxMarketCap: selectDomain(state).mapTree.data.maxMarketCap,
  minMarketCap: selectDomain(state).mapTree.data.minMarketCap,
});

export const selectMapCurrentProject = (state: RootState) => selectDomain(state).currentProject;
