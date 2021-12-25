import { useSelector } from 'react-redux';

import { useActions } from 'hooks';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { spaceMapSaga } from './saga';
import { selectMapData } from './selectors';
import { actions, reducer } from './slice';
import { sliceKey } from './utils';

export function useSpaceMapPageSlice() {
  useInjectReducer({ key: sliceKey, reducer });
  useInjectSaga({ key: sliceKey, saga: spaceMapSaga });
  return useActions(actions);
}

export function useSpaceMap() {
  const { fetchSpaceMapData, fetchProjects } = useSpaceMapPageSlice();
  const {
    mapTree: { data: spaceMapData, loading: fetchingMapData },
    projects: { data: projects },
  } = useSelector(selectMapData);

  return {
    fetchProjects,
    fetchSpaceMapData,
    spaceMapData,
    projects,
    fetchingMapData,
  };
}
