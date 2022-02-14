import { useCallback, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { useActions } from 'hooks';
import { selectedProjectName, selectedFundName, selectedFundOptions } from 'store/pageStore/selectors';
import { useDispatchAction as pageStoreDispatchAction } from 'store/pageStore/slice';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { detailFundSaga } from './saga';
import { actions, reducer, useDispatchAction } from './slice';
import { sliceKey } from './utils';

export function useDetailFundSlice() {
  useInjectReducer({ key: sliceKey, reducer });
  useInjectSaga({ key: sliceKey, saga: detailFundSaga });
  return useActions(actions);
}

export function useClearDataAfterChangeNewFund() {
  const fundName = useSelector(selectedFundName);
  const { clearDataAfterChangeFund } = useDispatchAction();

  useEffect(() => {
    clearDataAfterChangeFund();
  }, [fundName, clearDataAfterChangeFund]);
}

export function useDetailFund() {
  const history = useHistory();
  const { url } = useRouteMatch();

  const fundName = useSelector(selectedFundName);
  const projectName = useSelector(selectedProjectName);
  const fundOptions = useSelector(selectedFundOptions);

  const { setFundName } = pageStoreDispatchAction();

  const handleClose = useCallback(() => {
    if (projectName) {
      history.goBack();
    } else {
      history.replace(url);
    }

    setFundName(null);
  }, [setFundName, history, projectName, url]);

  return {
    isShow: !!fundName,
    isShowBackArrow: !!projectName,
    handleClose,
    fundOptions,
  };
}
