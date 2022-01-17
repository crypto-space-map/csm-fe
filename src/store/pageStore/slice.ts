import { PayloadAction } from '@reduxjs/toolkit';

import { useActions as useDispatchActionHook } from 'hooks';
import { createSlice } from 'utils/@reduxjs/toolkit';

import { ContainerState } from './types';

// The initial state of the ZoneTypes container
export const initialState: ContainerState = {
  projectName: null,
  fundName: null,
};

const zoneTypesSlice = createSlice({
  name: 'pageStore',
  initialState,
  reducers: {
    setProjectName(state, action: PayloadAction<string | null>) {
      state.projectName = action.payload;
    },
    setFundName(state, action: PayloadAction<string | null>) {
      state.fundName = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = zoneTypesSlice;
export const useDispatchAction = () => useDispatchActionHook(actions);
