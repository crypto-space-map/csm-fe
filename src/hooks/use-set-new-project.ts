import { useCallback } from 'react';

import { useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { selectedProjectName, selectedFundName } from 'store/pageStore/selectors';
import { useDispatchAction as pageStoreDispatchAction } from 'store/pageStore/slice';
import { addNewPath, getTheLastPath } from 'utils/router-history';

export const useSetNewProject = () => {
  const history = useHistory();
  const { url } = useRouteMatch();
  const fundName = useSelector(selectedFundName);
  const projectName = useSelector(selectedProjectName);

  const { setProjectName, setFundName } = pageStoreDispatchAction();

  const handleSelectProduct = useCallback(
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
    (name: string) => {
      const newFundName = name === fundName ? null : name;
      const newPath = newFundName ? `/fund/${newFundName}` : url;

      addNewPath(newPath);
      history.push(newPath);
      setFundName(newFundName);
      if (projectName) setProjectName(null); // нужно для того, чтобы убрать уже открытую карточку проекта
    },
    [fundName, url, history, setFundName, projectName, setProjectName]
  );

  const handleSelectAnotherRoute = useCallback(
    (path: string) => {
      const lastPath = getTheLastPath();

      if (lastPath !== path) {
        addNewPath(path);
        history.push(path);

        // Зануляем карточку
        if (fundName) setFundName(null);
        if (projectName) setProjectName(null);
      }
    },
    [fundName, history, setFundName, projectName, setProjectName]
  );

  return { handleSelectProduct, handleSelectFund, handleSelectAnotherRoute };
};
