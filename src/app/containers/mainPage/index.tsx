import { memo, useCallback, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { FundsList } from 'app/components/funds-list';
import { selectedProjectName, selectedFundName } from 'store/pageStore/selectors';
import { useDispatchAction as pageStoreDispatchAction } from 'store/pageStore/slice';
import { getProductNameFromPath } from 'utils/detail-info';

import { DetailFundCard } from '../detail-fund-card';
import { DetailInfoCard } from '../detail-info-card';
import { SpaceChart } from '../space-map/components/space-chart';

const types: { [key: string]: 'fund' | 'project' } = {
  fund: 'fund',
  project: 'project',
};

export const MainPage = memo(() => {
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
    },
    [setProjectName, history]
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
      const newPath = newFundName ? `$/fund/${newFundName}` : url;

      history.replace(newPath);
      setFundName(newFundName);
    },
    [fundName, url, history, setFundName]
  );

  return (
    <>
      <SpaceChart handleClick={handleClick} />
      <FundsList handleSelectFund={handleSelectFund} selectedFund={fundName} />
      <DetailInfoCard />
      <DetailFundCard />
    </>
  );
});
