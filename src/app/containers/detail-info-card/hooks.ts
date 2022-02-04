import { useCallback, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { useActions } from 'hooks';
import { selectedProjectName } from 'store/pageStore/selectors';
import { useDispatchAction as pageStoreDispatchAction } from 'store/pageStore/slice';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { useDispatchAction as mapDispatchAction } from '../space-map/slice';
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

  useEffect(() => {
    clearDataAfterChangeProject();
  }, [projectName, clearDataAfterChangeProject]);
}

export function useDetailInfo() {
  const history = useHistory();
  const { url } = useRouteMatch();

  const projectName = useSelector(selectedProjectName);
  const projectHeaderData = useSelector(selectedProjectHeaderData);
  const projectStatistic = useSelector(selectedProjectStatistic);
  const { clearData } = mapDispatchAction();
  const { fetchProjectData } = useDispatchAction();
  const { setProjectName } = pageStoreDispatchAction();

  useEffect(() => {
    if (projectName) fetchProjectData(projectName);
  }, [projectName, fetchProjectData]);

  const handleClose = useCallback(() => {
    setProjectName(null);
    clearData(['projectPartnerships']);
    history.push(url);
  }, [setProjectName, history, url, clearData]);

  return {
    isShow: !!projectName,
    handleClose,
    projectHeaderData,
    projectStatistic,
  };
}
