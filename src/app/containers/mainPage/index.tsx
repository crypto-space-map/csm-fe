import { memo } from 'react';

import { FundsList } from 'app/components/funds-list';

import { SpaceChart } from '../space-map/components/space-chart';
import { DetailCard } from './detail-card';
import { useMainPage, useMainPageHistory } from './hooks';

export const MainPage = memo(() => {
  useMainPageHistory();
  const { fundName, handleClick, handleSelectFund } = useMainPage();

  return (
    <>
      <SpaceChart handleClick={handleClick} />
      <FundsList handleSelectFund={handleSelectFund} selectedFund={fundName} />
      <DetailCard />
    </>
  );
});
