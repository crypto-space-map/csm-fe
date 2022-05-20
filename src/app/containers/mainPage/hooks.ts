import { useCallback, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  selectedProjectName,
  selectedFundName,
  selectedTopFunds,
  selectedTopFundsLoading,
  selectedIsShowGuide,
} from 'store/pageStore/selectors';
import { useDispatchAction as pageStoreDispatchAction } from 'store/pageStore/slice';
import { getProductNameFromPath } from 'utils/detail-info';
import {
  setFirstValueFromUrl,
  removeTheLastPath,
  addNewPath,
  getPathsHistory,
  getTheLastPath,
} from 'utils/router-history';
import { clearSessionStorageItems, ItemNames } from 'utils/session-storage';

const types: { [key: string]: 'fund' | 'project' } = {
  fund: 'fund',
  project: 'project',
};

export function useMainPageHistory() {
  const history = useHistory();

  const { setProjectName, setFundName, clearData } = pageStoreDispatchAction();

  const historyCallback = useCallback(
    (location, action) => {
      const { pathname } = location;
      const projectNameFromUrl = getProductNameFromPath(pathname, types.project);
      const fundNameFromUrl = getProductNameFromPath(pathname, types.fund);
      const pathsHistory = getPathsHistory();
      const lastPath = getTheLastPath();
      const prevPath = pathsHistory[pathsHistory.length - 2];

      // чистим данные, если мы находимяся в корне "/" и у нас в истории есть элементы
      if (pathname === '/' && pathsHistory.length) {
        clearData();
        clearSessionStorageItems([ItemNames.PATHS_HISTORY]);
      }

      if (action === 'POP' && (projectNameFromUrl || fundNameFromUrl) && lastPath !== pathname) {
        // Если нажали кнопку назад и пришедший путь равен предпоследнему в массиве, то затираем последний
        if (prevPath === pathname) {
          removeTheLastPath();
        } else if (lastPath !== pathname) {
          addNewPath(pathname);
        }

        if (projectNameFromUrl) {
          setProjectName(projectNameFromUrl);
          setFundName(null);
        }

        if (fundNameFromUrl) {
          setFundName(fundNameFromUrl);
          setProjectName(null);
        }
      }
    },
    [clearData, setProjectName, setFundName]
  );

  history.listen(historyCallback);
}

export function useMainPage() {
  const history = useHistory();
  const fundName = useSelector(selectedFundName);
  const projectName = useSelector(selectedProjectName);
  const topFunds = useSelector(selectedTopFunds);
  const fetchingFunds = useSelector(selectedTopFundsLoading);

  const {
    setProjectName,
    setFundName,
    fetchTopFundsData,
    fetchFundsData,
    setFundBlockItemsIdList,
    setIsShowLines,
    setPointsCoords,
    clearPointsCoords,
  } = pageStoreDispatchAction();

  const { pathname } = history.location;

  // Инициализация выставления нейма продукта или фонда в стор
  useEffect(() => {
    const projectNameFromUrl = getProductNameFromPath(pathname, types.project);
    const fundNameFromUrl = getProductNameFromPath(pathname, types.fund);

    if (!projectName && projectNameFromUrl) {
      setProjectName(projectNameFromUrl);
      setFirstValueFromUrl(pathname);
    }

    if (!fundName && fundNameFromUrl) {
      setFundName(fundNameFromUrl);
      setFirstValueFromUrl(pathname);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!topFunds && !fetchingFunds) fetchTopFundsData();
  }, [fetchTopFundsData, topFunds, fetchingFunds]);

  useEffect(() => {
    if (projectName) fetchFundsData(projectName);
  }, [fetchFundsData, projectName]);

  useEffect(() => {
    if (fundName) setFundBlockItemsIdList([fundName]);
    if (fundName && setIsShowLines) setIsShowLines(false);
  }, [setFundBlockItemsIdList, fundName, setIsShowLines]);

  return { setPointsCoords, clearPointsCoords };
}

export function useDetailCard() {
  const fundName = useSelector(selectedFundName);
  const projectName = useSelector(selectedProjectName);
  const isShowGuide = useSelector(selectedIsShowGuide);

  return {
    isShow: !!fundName || !!projectName,
    isInfo: !!projectName,
    isFund: !!fundName,
    isShowGuide,
  };
}
