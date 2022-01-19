import { fetchDataInitialState, fetchDataReducers } from 'utils/@reduxjs/fetchData';
import { createSlice, PayloadAction } from 'utils/@reduxjs/toolkit';

import { ContainerState, Exchanges, FilterProps, MapDataResponse, Partnership, ProjectData } from './types';
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
  projectPartnerships: {
    data: [],
    ...fetchDataInitialState,
  },
};

const { fetchDataSuccess: fetchSpaceMapDataSuccess, fetchDataError: fetchSpaceMapDataError } =
  fetchDataReducers<ContainerState['mapTree']['data']>(initialState.mapTree);

const { fetchDataSuccess: fetchProjectsSuccess, fetchDataError: fetchProjectsError } = fetchDataReducers<
  ContainerState['projects']['data']
>(initialState.projects);

const { fetchDataSuccess: fetchPartnershipsSuccess, fetchDataError: fetchPartnershipsError } =
  fetchDataReducers<ContainerState['projectPartnerships']['data']>(initialState.projectPartnerships);

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
    // fetch partnerships
    fetchPartnerships(state, _action: PayloadAction<string>) {
      state.projectPartnerships.loading = true;
    },
    fetchPartnershipsSuccess(state, action: PayloadAction<{ data: Partnership[] }>) {
      fetchPartnershipsSuccess(state.projectPartnerships, action);
    },
    fetchPartnershipsError(state, action: PayloadAction<{ message: string }>) {
      fetchPartnershipsError(state.mapTree, action);
    },
    clearData(state, { payload }: PayloadAction<Array<keyof ContainerState>>) {
      const clearedState = payload.reduce(
        (obj, item) => ({ ...state, ...obj, [item]: initialState[item] }),
        {} as ContainerState
      );
      return clearedState;
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
