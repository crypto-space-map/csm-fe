import { useCallback, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { selectedProjectName, selectedFundName } from 'store/pageStore/selectors';
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
  const { url } = useRouteMatch();
  const fundName = useSelector(selectedFundName);
  const projectName = useSelector(selectedProjectName);
  const { setProjectName, setFundName } = pageStoreDispatchAction();

  const { pathname } = history.location;

  const handleClick = useCallback(
    (project: string) => {
      const newPath = `/project/${project}`;
      const lastPath = getTheLastPath();

      if (lastPath !== newPath) {
        history.push(newPath);
        addNewPath(newPath);
        setProjectName(project);
        if (fundName) setFundName(null); // нужно для того, чтобы убрать уже открытую карточку инвестора
      }
    },
    [history, setProjectName, fundName, setFundName]
  );

  const handleSelectFund = useCallback(
    name => {
      const newFundName = name === fundName ? null : name;
      const newPath = newFundName ? `/fund/${newFundName}` : url;

      addNewPath(newPath);
      history.push(newPath);
      setFundName(newFundName);
      if (projectName) setProjectName(null); // нужно для того, чтобы убрать уже открытую карточку проекта
    },
    [fundName, url, history, setFundName, projectName, setProjectName]
  );

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

  return { fundName, handleClick, handleSelectFund };
}

export function useDetailCard() {
  const fundName = useSelector(selectedFundName);
  const projectName = useSelector(selectedProjectName);

  return {
    isShow: !!fundName || !!projectName,
    isInfo: !!projectName,
    isFund: !!fundName,
  };
}
