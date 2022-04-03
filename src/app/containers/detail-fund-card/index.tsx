import { memo, useMemo } from 'react';

import { DetailHeaderSection, DetailStatisticsSection } from 'app/components';

import { TabsSection } from './components/tabs-section';
import { useDetailFundSlice, useDetailFund, useClearDataAfterChangeNewFund } from './hooks';
import { TopSection } from './styles';

const defaultValue = 'default';

export const DetailFundCard = memo(() => {
  useDetailFundSlice();
  useClearDataAfterChangeNewFund();
  const { fundData, isShow } = useDetailFund();

  const statisticsData = useMemo(
    () => ({
      website: fundData?.website ?? '',
    }),
    [fundData?.website]
  );
  const fundName = fundData?.name ?? defaultValue;

  return (
    <>
      <TopSection>
        {isShow && fundData && (
          <>
            <DetailHeaderSection showExtraInfo={false} name={fundName} icon={fundData?.logo} />
            <DetailStatisticsSection data={statisticsData} />
          </>
        )}
      </TopSection>

      <TabsSection />
    </>
  );
});
