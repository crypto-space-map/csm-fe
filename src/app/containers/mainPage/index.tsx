import { memo } from 'react';

import { FundsList } from 'app/components/funds-list';

import { DetailFundCard } from '../detail-fund-card';
import { DetailInfoCard } from '../detail-info-card';
import { SpaceChart } from '../space-map/components/space-chart';
import { useMainPage } from './hooks';

export const MainPage = memo(() => {
  const { fundName, handleClick, handleSelectFund } = useMainPage();

  return (
    <>
      <SpaceChart handleClick={handleClick} />
      <FundsList handleSelectFund={handleSelectFund} selectedFund={fundName} />
      <DetailInfoCard />
      <DetailFundCard />
    </>
  );
});
