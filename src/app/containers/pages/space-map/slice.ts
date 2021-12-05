import { fetchDataInitialState, fetchDataReducers } from 'utils/@reduxjs/fetchData';
import { createSlice, PayloadAction } from 'utils/@reduxjs/toolkit';

import type { ContainerState, MapDataResponse, ProjectData } from './types';
import { sliceKey as name } from './utils';

// The initial state of the DeparturesPage container
export const initialState: ContainerState = {
  mapTree: {
    data: {
      tree: null,
      maxMarketCap: null,
      minMarketCap: null,
    },
    ...fetchDataInitialState,
  },
  projects: {
    data: [],
    ...fetchDataInitialState,
  },
};

const { fetchDataSuccess: fetchSpaceMapDataSuccess, ...restMapReducerProps } = fetchDataReducers<
  ContainerState['mapTree']['data']
>(initialState.mapTree);

const { fetchDataSuccess: fetchProjectsSuccess, ...restProjectReducerProps } = fetchDataReducers<
  ContainerState['projects']['data']
>(initialState.projects);

const loginPageSlice = createSlice({
  name,
  initialState,
  reducers: {
    fetchSpaceMapData(state) {
      state.mapTree.loading = true;
    },
    fetchSpaceMapDataSuccess(state, action: PayloadAction<{ data: MapDataResponse }>) {
      fetchSpaceMapDataSuccess(state.mapTree, action);
    },
    fetchProjects(state) {
      state.projects.loading = true;
    },
    fetchProjectsSuccess(state, action: PayloadAction<{ data: ProjectData[] }>) {
      fetchProjectsSuccess(state.projects, action);
    },
    ...restProjectReducerProps,
  },
});

export const { actions, reducer, name: sliceKey } = loginPageSlice;
