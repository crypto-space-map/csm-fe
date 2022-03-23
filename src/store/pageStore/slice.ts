import { PayloadAction } from '@reduxjs/toolkit';

import { useActions as useDispatchActionHook } from 'hooks';
import { createSlice } from 'utils/@reduxjs/toolkit';

import { ContainerState, FundOptionsProps } from './types';

// The initial state of the PageStoreTypes container
export const initialState: ContainerState = {
  projectName: null,
  fundName: null,
  fundOptions: null,
};

const pageStoreTypesSlice = createSlice({
  name: 'pageStore',
  initialState,
  reducers: {
    setProjectName(state, action: PayloadAction<string | null>) {
      state.projectName = action.payload;
    },
    setFundName(state, action: PayloadAction<string | null>) {
      state.fundName = action.payload;
    },
    setFundOptions(state, action: PayloadAction<FundOptionsProps>) {
      state.fundOptions = action.payload;
    },
    clearData(state) {
      state.fundName = initialState.fundName;
      state.projectName = initialState.projectName;
      state.fundOptions = initialState.fundOptions;
    },
  },
});

export const { actions, reducer, name: sliceKey } = pageStoreTypesSlice;
export const useDispatchAction = () => useDispatchActionHook(actions);
