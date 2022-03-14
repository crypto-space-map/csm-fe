import { memo } from 'react';

import { DetailHeaderSection, DetailStatisticsSection } from 'app/components';

import { TabsSection } from './components/tabs-section';
import { useDetailFundSlice, useDetailFund, useClearDataAfterChangeNewFund } from './hooks';
import { TopSection } from './styles';

const defaultValue = 'default';

export const DetailFundCard = memo(() => {
  useDetailFundSlice();
  useClearDataAfterChangeNewFund();
  const { fundData } = useDetailFund();

  const statisticsData = { website: fundData?.website ?? defaultValue };
  const fundName = fundData?.name ?? defaultValue;

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
