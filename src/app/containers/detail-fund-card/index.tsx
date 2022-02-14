import { memo } from 'react';

import { DetailCardWrapper, DetailHeaderSection, DetailStatisticsSection } from 'app/components';

import { TabsSection } from './components/tabs-section';
import { useDetailFundSlice, useDetailFund, useClearDataAfterChangeNewFund } from './hooks';
import { TopSection } from './styles';

export const DetailFundCard = memo(() => {
  useDetailFundSlice();
  useClearDataAfterChangeNewFund();
  const { isShow, isShowBackArrow, handleClose, fundOptions } = useDetailFund();
  // TODO выпилить после появления апишки
  const statisticsData = { website: fundOptions?.website ?? 'cms.com' };
  const fundName = fundOptions?.name ?? 'DefaultFond';

  return (
    <DetailCardWrapper show={isShow}>
      <TopSection>
        <DetailHeaderSection
          showBackArrow={isShowBackArrow}
          showExtraInfo={false}
          onClose={handleClose}
          name={fundName}
        />
        <DetailStatisticsSection data={statisticsData} />
      </TopSection>

      <TabsSection />
    </DetailCardWrapper>
  );
});
