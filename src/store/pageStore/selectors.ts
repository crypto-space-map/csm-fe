// import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from 'types/root-state';

import { initialState } from './slice';

const selectDomain = (state: RootState) => state.pageStore || initialState;

export const selectedProjectName = (state: RootState) => selectDomain(state).projectName;
export const selectedFundName = (state: RootState) => selectDomain(state).fundName;
