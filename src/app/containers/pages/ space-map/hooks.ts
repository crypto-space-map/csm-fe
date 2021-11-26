import { useSelector } from 'react-redux';

import { useActions } from 'hooks';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { spaceMapSaga } from './saga';
import { selectCSMMapData } from './selectors';
import { actions, reducer } from './slice';
import { sliceKey } from './utils';

export function useSpaceMapPageSlice() {
  useInjectReducer({ key: sliceKey, reducer });
  useInjectSaga({ key: sliceKey, saga: spaceMapSaga });
  return useActions(actions);
}

export function useSpaceMap() {
  const { fetchData } = useSpaceMapPageSlice();
  const spaceMapData = useSelector(selectCSMMapData);

  return {
    fetchSpaceMapData: fetchData,
    spaceMapData,
  };
}
