import { useCallback, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { selectedProjectName, selectedFundName } from 'store/pageStore/selectors';
import { useDispatchAction as pageStoreDispatchAction } from 'store/pageStore/slice';
import { getProductNameFromPath } from 'utils/detail-info';

const types: { [key: string]: 'fund' | 'project' } = {
  fund: 'fund',
  project: 'project',
};

export function useMainPage() {
  const history = useHistory();
  const { url } = useRouteMatch();
  const fundName = useSelector(selectedFundName);
  const projectName = useSelector(selectedProjectName);
  const { setProjectName, setFundName } = pageStoreDispatchAction();

  const { pathname } = history.location;

  const handleClick = useCallback(
    (project: string) => {
      history.push(`/project/${project}`);
      setProjectName(project);
      if (fundName) setFundName(null); // нужно для того, чтобы убрать уже открытую карточку инвестора
    },
    [history, setProjectName, fundName, setFundName]
  );

  // Инициализация выставления нейма продукта или фонда в стор
  useEffect(() => {
    const projectNameFromUrl = getProductNameFromPath(pathname, types.project);
    const fundNameFromUrl = getProductNameFromPath(pathname, types.fund);

    if (!projectName && projectNameFromUrl) {
      setProjectName(projectNameFromUrl);
    }

    if (!fundName && fundNameFromUrl) {
      setFundName(fundNameFromUrl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectFund = useCallback(
    name => {
      const newFundName = name === fundName ? null : name;
      const newPath = newFundName ? `/fund/${newFundName}` : url;

      history.push(newPath);
      setFundName(newFundName);
      if (projectName) setProjectName(null); // нужно для того, чтобы убрать уже открытую карточку проекта
    },
    [fundName, url, history, setFundName, projectName, setProjectName]
  );

  return { fundName, handleClick, handleSelectFund };
}
