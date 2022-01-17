import { memo } from 'react';

import { DetailCardWrapper, DetailHeaderSection, DetailStatisticsSection } from 'app/components';

import { TabsSection } from './components/tabs-section';
import { useDetailInfoSlice, useDetailInfo } from './hooks';
import { TopSection } from './styles';

export const DetailInfoCard = memo(() => {
  useDetailInfoSlice();
  const { isShow, projectHeaderData, projectStatistic, handleClose } = useDetailInfo();

  return (
    <DetailCardWrapper show={isShow}>
      <TopSection>
        {isShow && (
          <>
            {projectHeaderData && <DetailHeaderSection onClose={handleClose} {...projectHeaderData} />}
            {projectStatistic && <DetailStatisticsSection data={projectStatistic} />}
          </>
        )}
      </TopSection>

      <TabsSection isShow={isShow} />
    </DetailCardWrapper>
  );
});
