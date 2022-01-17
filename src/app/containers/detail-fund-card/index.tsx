import { memo } from 'react';

import { DetailCardWrapper, DetailHeaderSection, DetailStatisticsSection } from 'app/components';

import { headerDetailData } from '../detail-info-card/constants';
import { TabsSection } from './components/tabs-section';
import { useDetailFund } from './hooks';
import { TopSection } from './styles';

export const DetailFundCard = memo(() => {
  const { isShow, isShowBackArrow, handleClose } = useDetailFund();
  return (
    <DetailCardWrapper show={isShow}>
      <TopSection>
        <DetailHeaderSection
          showBackArrow={isShowBackArrow}
          showExtraInfo={false}
          onClose={handleClose}
          {...headerDetailData}
        />
        <DetailStatisticsSection data={{ website: 'https://ffff.com' }} />
      </TopSection>

      <TabsSection />
    </DetailCardWrapper>
  );
});
