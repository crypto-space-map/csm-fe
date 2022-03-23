import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { useActions } from 'hooks';
import { selectedFundName } from 'store/pageStore/selectors';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { detailFundSaga } from './saga';
import { selectedFundData } from './selectors';
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
  const fundName = useSelector(selectedFundName);
  const fundData = useSelector(selectedFundData);

  const { fetchFundData } = useDispatchAction();

  useEffect(() => {
    if (fundName) fetchFundData(fundName);
  }, [fundName, fetchFundData]);

  return {
    isShow: !!fundName,
    fundData,
  };
}
