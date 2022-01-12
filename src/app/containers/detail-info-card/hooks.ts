import { useCallback } from 'react';

import { useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { useActions } from 'hooks';
import { selectedProjectName } from 'store/pageStore/selectors';
import { useDispatchAction as pageStoreDispatchAction } from 'store/pageStore/slice';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { detailInfoSaga } from './saga';
import { actions, reducer } from './slice';
import { sliceKey } from './utils';

export function useDetailInfoSlice() {
  useInjectReducer({ key: sliceKey, reducer });
  useInjectSaga({ key: sliceKey, saga: detailInfoSaga });
  return useActions(actions);
}

export function useDetailInfo() {
  const history = useHistory();
  const { url } = useRouteMatch();

  const projectName = useSelector(selectedProjectName);

  const { setProjectName } = pageStoreDispatchAction();

  const handleClose = useCallback(() => {
    setProjectName(null);
    history.push(url);
  }, [setProjectName, history, url]);

  return {
    isShow: !!projectName,
    handleClose,
  };
}
