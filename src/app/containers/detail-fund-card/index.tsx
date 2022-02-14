import { memo } from 'react';

import { DetailHeaderSection, DetailStatisticsSection } from 'app/components';

import { TabsSection } from './components/tabs-section';
import { useDetailFundSlice, useDetailFund, useClearDataAfterChangeNewFund } from './hooks';
import { TopSection } from './styles';

export const DetailFundCard = memo(() => {
  useDetailFundSlice();
  useClearDataAfterChangeNewFund();
  const { fundOptions } = useDetailFund();
  // TODO выпилить после появления апишки
  const statisticsData = { website: fundOptions?.website ?? 'cms.com' };
  const fundName = fundOptions?.name ?? 'DefaultFond';

  return (
    <>
      <TopSection>
        <DetailHeaderSection showExtraInfo={false} name={fundName} />
        <DetailStatisticsSection data={statisticsData} />
      </TopSection>

      <TabsSection />
    </>
  );
});
