import { createSelector } from '@reduxjs/toolkit';

import { SortingValues } from 'app/components/grid/types';
import { numberSortFunc } from 'app/components/grid/utils';
import type { RootState } from 'types/root-state';

import { initialState } from './slice';

const selectDomain = (state: RootState) => state.detailFund || initialState;

export const selectedInvestorsData = (state: RootState) => selectDomain(state).investorsData;
export const selectedInvestorsDataLoading = (state: RootState) => selectDomain(state).investorsDataLoading;

export const selectedEnrichedInvestorsData = createSelector([selectedInvestorsData], data =>
  data
    ? [...data]
        .sort((...args) =>
          numberSortFunc({
            a: args[0],
            b: args[1],
            fieldName: 'amount',
            sortDirection: SortingValues.DESC,
          })
        )
        .map(({ project, ...rest }, index) => {
          const { name, logo } = project;
          return {
            id: String(index + 1),
            projectName: name,
            projectLogo: logo,
            ...rest,
          };
        })
    : null
);
