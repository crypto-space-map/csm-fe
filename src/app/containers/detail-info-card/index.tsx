import { memo } from 'react';

import { DetailCardWrapper, DetailHeaderSection, DetailStatisticsSection } from 'app/components';

import { TabsSection } from './components/tabs-section';
import { useDetailInfoSlice, useDetailInfo } from './hooks';
import { TopSection } from './styles';

export const DetailInfoCard = memo(() => {
  useDetailInfoSlice();
  const { isShow, handleClose } = useDetailInfo();

  return (
    <DetailCardWrapper show={isShow}>
      <TopSection>
        <DetailHeaderSection onClose={handleClose} />
        <DetailStatisticsSection />
      </TopSection>

      <TabsSection isShow={isShow} />
    </DetailCardWrapper>
  );
});
