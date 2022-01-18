import { useCallback } from 'react';

import { useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { selectedProjectName, selectedFundName } from 'store/pageStore/selectors';
import { useDispatchAction as pageStoreDispatchAction } from 'store/pageStore/slice';

export function useDetailFund() {
  const history = useHistory();
  const { url } = useRouteMatch();

  const fundName = useSelector(selectedFundName);
  const projectName = useSelector(selectedProjectName);

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
  };
}
