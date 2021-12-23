import { memo } from 'react';

import { DetailCardWrapper, DetailHeaderSection, DetailStatisticsSection } from 'app/components';

import { TabsSection } from './components/tabs-section';
import { useDetailFund } from './hooks';
import { TopSection } from './styles';

export const DetailFundCard = memo(() => {
  const { isShow, isShowBackArrow, handleClose } = useDetailFund();
  return (
    <DetailCardWrapper show={isShow}>
      <TopSection>
        <DetailHeaderSection showBackArrow={isShowBackArrow} showExtraInfo={false} onClose={handleClose} />
        <DetailStatisticsSection />
      </TopSection>

      <TabsSection />
    </DetailCardWrapper>
  );
});
