import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from 'types/root-state';

import { initialState } from './slice';

const selectDomain = (state: RootState) => state.pageStore || initialState;

export const selectedProjectName = (state: RootState) => selectDomain(state).projectName;
export const selectedFundName = (state: RootState) => selectDomain(state).fundName;
export const selectedIsShowLines = (state: RootState) => selectDomain(state).isShowLines;
export const selectedPointsCoords = (state: RootState) => selectDomain(state).pointsCoords;
export const selectedTopFunds = (state: RootState) => selectDomain(state).topFunds.data;
export const selectedTopFundsLoading = (state: RootState) => selectDomain(state).topFunds.loading;
export const selectedFundsData = (state: RootState) => selectDomain(state).fundsData.data;
export const selectedFundsDataLoading = (state: RootState) => selectDomain(state).fundsData.loading;
export const selectedFundBlockItemsIdList = (state: RootState) => selectDomain(state).fundBlockItemsIdList;

export const selectedEnrichedFundsData = createSelector([selectedFundsData], data => {
  if (!data) return null;

  return data.map((item, index) => ({
    id: String(index + 1),
    ...item,
  }));
});
