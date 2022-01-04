import { useCallback, useState } from 'react';

import { useSelector } from 'react-redux';

import { useActions } from 'hooks';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { ONLY_NUMBERS_REG_EXP } from 'utils/reg-exp';

import { spaceMapSaga } from './saga';
import { selectMapData } from './selectors';
import { actions, reducer } from './slice';
import { sliceKey } from './utils';

const checkForNumber = (value: number | null, previousVal: number | null) => {
  if (!value) return null;
  const newVal = value.toString().replace(/ /g, '');
  if (!ONLY_NUMBERS_REG_EXP.test(newVal)) return previousVal;
  return +newVal;
};

export function useSpaceMapPageSlice() {
  useInjectReducer({ key: sliceKey, reducer });
  useInjectSaga({ key: sliceKey, saga: spaceMapSaga });
  return useActions(actions);
}

export function useSpaceMap() {
  const { fetchSpaceMapData, fetchProjects, setFilters: setReducerFilters } = useSpaceMapPageSlice();
  const {
    mapTree: { data: spaceMapData, loading: fetchingMapData },
    projects: { data: projects },
    filters: reducerFilters,
  } = useSelector(selectMapData);

  const [filters, setFilters] = useState(reducerFilters);

  const onChangeFilters = useCallback(
    (data: typeof filters) => {
      const parsedData: typeof filters = {
        ...data,
        mCapFrom: checkForNumber(data.mCapFrom, filters.mCapFrom),
        mCapTo: checkForNumber(data.mCapTo, filters.mCapTo),
      };
      setFilters(parsedData);
    },
    [filters.mCapTo, filters.mCapFrom]
  );

  const submitFilters = useCallback(() => {
    setReducerFilters(filters);
  }, [filters, setReducerFilters]);

  return {
    fetchProjects,
    fetchSpaceMapData,
    spaceMapData,
    projects,
    fetchingMapData,
    filters,
    onChangeFilters,
    submitFilters,
  };
}
