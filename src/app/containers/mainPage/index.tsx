import { memo } from 'react';

import { FundsList } from 'app/components/funds-list';
import { useSetNewProject } from 'hooks/use-set-new-project';

import { SpaceChart } from '../space-map/components/space-chart';
import { DetailCard } from './detail-card';
import { useMainPage, useMainPageHistory } from './hooks';

export const MainPage = memo(() => {
  useMainPageHistory();
  const { fundName } = useMainPage();
  const { handleSelectProduct, handleSelectFund } = useSetNewProject();

  return (
    <>
      <SpaceChart handleSelectProduct={handleSelectProduct} />
      <FundsList handleSelectFund={handleSelectFund} selectedFund={fundName} />
      <DetailCard />
    </>
  );
});
