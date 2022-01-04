import { fetchDataInitialState, fetchDataReducers } from 'utils/@reduxjs/fetchData';
import { createSlice, PayloadAction } from 'utils/@reduxjs/toolkit';

import { ContainerState, Exchanges, FilterProps, MapDataResponse, ProjectData } from './types';
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
  filters: {
    mCapFrom: null,
    mCapTo: null,
    exchanges: Object.values(Exchanges),
  },
};

const { fetchDataSuccess: fetchSpaceMapDataSuccess, fetchDataError: fetchSpaceMapDataError } =
  fetchDataReducers<ContainerState['mapTree']['data']>(initialState.mapTree);

const { fetchDataSuccess: fetchProjectsSuccess, fetchDataError: fetchProjectsError } = fetchDataReducers<
  ContainerState['projects']['data']
>(initialState.projects);

const spaceMapPageSlice = createSlice({
  name,
  initialState,
  reducers: {
    /** Fetch main map data */
    fetchSpaceMapData(state) {
      state.mapTree.loading = true;
    },
    fetchSpaceMapDataSuccess(state, action: PayloadAction<{ data: MapDataResponse }>) {
      fetchSpaceMapDataSuccess(state.mapTree, action);
    },
    fetchSpaceMapDataError(state, action: PayloadAction<{ message: string }>) {
      fetchSpaceMapDataError(state.mapTree, action);
    },
    /** Fetch project data */
    fetchProjects(state) {
      state.projects.loading = true;
    },
    fetchProjectsSuccess(state, action: PayloadAction<{ data: ProjectData[] }>) {
      fetchProjectsSuccess(state.projects, action);
    },
    fetchProjectsError(state, action: PayloadAction<{ message: string }>) {
      fetchProjectsError(state.mapTree, action);
    },
    clearData(state) {
      state.mapTree = initialState.mapTree;
      state.projects = initialState.projects;
    },
    setFilters(state, action: PayloadAction<FilterProps>) {
      state.filters = { ...action.payload };
    },
    clearFilters(state) {
      state.filters = initialState.filters;
    },
  },
});

export const { actions, reducer, name: sliceKey } = spaceMapPageSlice;
