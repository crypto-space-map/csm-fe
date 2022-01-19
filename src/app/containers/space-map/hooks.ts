import { useCallback } from 'react';

import { useSelector } from 'react-redux';

import { useActions } from 'hooks';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { spaceMapSaga } from './saga';
import { selectMapData, selectPartnerships } from './selectors';
import { actions, reducer } from './slice';
import { FilterProps } from './types';
import { sliceKey } from './utils';

export function useSpaceMapPageSlice() {
  useInjectReducer({ key: sliceKey, reducer });
  useInjectSaga({ key: sliceKey, saga: spaceMapSaga });
  return useActions(actions);
}

export function useSpaceMap() {
  const {
    fetchSpaceMapData,
    fetchProjects,
    clearFilters,
    fetchPartnerships,
    clearData,
    setFilters: setReducerFilters,
    setCurrentProject: setReducerCurrentProject,
  } = useSpaceMapPageSlice();

  const {
    mapTree: { data: spaceMapData, loading: fetchingMapData, loadError: loadMapDataError },
    projects: { data: projects },
    filters,
  } = useSelector(selectMapData);

  const onClearFilters = useCallback(() => {
    clearFilters();
  }, [clearFilters]);

  const submitFilters = useCallback(
    (data: FilterProps) => {
      setReducerFilters(data);
    },
    [setReducerFilters]
  );
  const { projectPartnerships = [], projectPartnershipsLoading } = useSelector(selectPartnerships);

  const fetchPartnershipsData = useCallback((val: string) => fetchPartnerships(val), [fetchPartnerships]);

  const clearReducerObjectData = useCallback(
    (payload: ReturnType<typeof clearData>['payload']) => clearData(payload),
    [clearData]
  );

  const setCurrentInputProject = useCallback(
    (value: string) => setReducerCurrentProject(value),
    [setReducerCurrentProject]
  );

  return {
    fetchProjects,
    fetchSpaceMapData,
    spaceMapData,
    projects,
    fetchingMapData,
    filters,
    loadMapDataError,
    projectPartnerships,
    projectPartnershipsLoading,
    fetchPartnershipsData,
    clearReducerObjectData,
    onClearFilters,
    submitFilters,
    setCurrentInputProject,
  };
}
