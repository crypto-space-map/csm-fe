import { useCallback } from 'react';

import { useSelector } from 'react-redux';

import { useActions } from 'hooks';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { spaceMapSaga } from './saga';
import { selectMapData, selectPartnerships } from './selectors';
import { actions, reducer } from './slice';
import { sliceKey } from './utils';

export function useSpaceMapPageSlice() {
  useInjectReducer({ key: sliceKey, reducer });
  useInjectSaga({ key: sliceKey, saga: spaceMapSaga });
  return useActions(actions);
}

export function useSpaceMap() {
  const { fetchSpaceMapData, fetchProjects, setFilters, fetchPartnerships, clearData } =
    useSpaceMapPageSlice();
  const {
    mapTree: { data: spaceMapData, loading: fetchingMapData, loadError: loadMapDataError },
    projects: { data: projects },
    filters,
  } = useSelector(selectMapData);

  const projectPartnerships = useSelector(selectPartnerships);

  const fetchPartnershipsData = useCallback((val: string) => fetchPartnerships(val), [fetchPartnerships]);

  const clearReducerObjectData = useCallback(
    (payload: ReturnType<typeof clearData>['payload']) => clearData(payload),
    [clearData]
  );

  return {
    fetchProjects,
    fetchSpaceMapData,
    fetchPartnershipsData,
    clearReducerObjectData,
    spaceMapData,
    projects,
    fetchingMapData,
    setFilters,
    filters,
    loadMapDataError,
    projectPartnerships,
  };
}
