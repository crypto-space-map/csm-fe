import { createSelector } from '@reduxjs/toolkit';

import { SortingValues } from 'app/components/grid/types';
import { numberSortFunc } from 'app/components/grid/utils';
import type { RootState } from 'types/root-state';

import { initialState } from './slice';

const selectDomain = (state: RootState) => state.detailFund || initialState;

export const selectedInvestorsData = (state: RootState) => selectDomain(state).investorsData;
export const selectedInvestorsDataLoading = (state: RootState) => selectDomain(state).investorsDataLoading;
export const selectedFundData = (state: RootState) => selectDomain(state).fundData.data;
export const selectedFundDataLoading = (state: RootState) => selectDomain(state).fundData.loading;
export const selectedProjectIdListFromInvestors = (state: RootState) =>
  selectDomain(state).projectIdListFromInvestors;

export const selectedEnrichedInvestorsData = createSelector([selectedInvestorsData], data => {
  if (!data) return null;

  const sortedData = [...data].sort((...args) =>
    numberSortFunc({
      a: args[0],
      b: args[1],
      fieldName: 'amount',
      sortDirection: SortingValues.DESC,
    })
  );
  const transformedData = sortedData.map(({ project, ...rest }, index) =>
    // const { projectId, isOnMap } = project;
    ({
      id: String(index + 1),
      projectName: project?.name,
      projectLogo: project?.logo,
      projectId: project?.projectId,
      isOnMap: project?.isOnMap,
      ...rest,
    })
  );

  return transformedData;
});
