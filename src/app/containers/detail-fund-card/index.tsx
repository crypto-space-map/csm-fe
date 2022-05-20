import { memo, useMemo } from 'react';

import { DetailHeaderSection, DetailStatisticsSection } from 'app/components';
import { TopSection } from 'app/components/detail-common-components';

import { TabsSection } from './components/tabs-section';
import { useDetailFundSlice, useDetailFund, useClearDataAfterChangeNewFund } from './hooks';

interface DetailFundCardProps {
  isHide: boolean;
  toggleIsHide: () => void;
}

const defaultValue = 'default';

export const DetailFundCard = memo((props: DetailFundCardProps) => {
  useDetailFundSlice();
  useClearDataAfterChangeNewFund();
  const { fundData, isShow } = useDetailFund();
  const { isHide } = props;

  const statisticsData = useMemo(
    () => ({
      website: fundData?.website ?? '',
    }),
    [fundData?.website]
  );
  const fundName = fundData?.name ?? defaultValue;

  return (
    <>
      <TopSection isHide={isHide}>
        {isShow && fundData && (
          <>
            <DetailHeaderSection showExtraInfo={false} name={fundName} icon={fundData?.logo} {...props} />
            <DetailStatisticsSection data={statisticsData} isHide={isHide} />
          </>
        )}
      </TopSection>

      <TabsSection />
    </>
  );
});
