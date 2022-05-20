import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { useActions } from 'hooks';
import { selectedProjectName } from 'store/pageStore/selectors';
import { useDispatchAction as pageStoreUseDispatchAction } from 'store/pageStore/slice';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { detailInfoSaga } from './saga';
import { selectedProjectHeaderData, selectedProjectStatistic } from './selectors';
import { actions, reducer, useDispatchAction } from './slice';
import { sliceKey } from './utils';

export function useDetailInfoSlice() {
  useInjectReducer({ key: sliceKey, reducer });
  useInjectSaga({ key: sliceKey, saga: detailInfoSaga });
  return useActions(actions);
}

export function useClearDataAfterChangeNewProject() {
  const projectName = useSelector(selectedProjectName);
  const { clearDataAfterChangeProject } = useDispatchAction();
  const { clearFundsData } = pageStoreUseDispatchAction();

  useEffect(() => {
    clearDataAfterChangeProject();
    clearFundsData();
  }, [projectName, clearFundsData, clearDataAfterChangeProject]);
}

export function useDetailInfo() {
  useDetailInfoSlice();
  useClearDataAfterChangeNewProject();
  const projectName = useSelector(selectedProjectName);
  const projectHeaderData = useSelector(selectedProjectHeaderData);
  const projectStatistic = useSelector(selectedProjectStatistic);
  const { fetchProjectData } = useDispatchAction();

  useEffect(() => {
    if (projectName) fetchProjectData(projectName);
  }, [projectName, fetchProjectData]);

  return {
    isShow: !!projectName,
    projectHeaderData,
    projectStatistic,
  };
}
