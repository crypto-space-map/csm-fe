import { memo } from 'react';

import { DetailHeaderSection, DetailStatisticsSection } from 'app/components';
import { TopSection } from 'app/components/detail-common-components';

import { TabsSection } from './components/tabs-section';
import { useDetailInfoSlice, useDetailInfo, useClearDataAfterChangeNewProject } from './hooks';

interface DetailInfoCardProps {
  isHide: boolean;
  toggleIsHide: () => void;
}

export const DetailInfoCard = memo((props: DetailInfoCardProps) => {
  useDetailInfoSlice();
  useClearDataAfterChangeNewProject();
  const { isShow, projectHeaderData, projectStatistic } = useDetailInfo();
  const { isHide } = props;

  return (
    <>
      <TopSection isHide={isHide}>
        {isShow && (
          <>
            {projectHeaderData && <DetailHeaderSection {...projectHeaderData} {...props} />}
            {projectStatistic && <DetailStatisticsSection data={projectStatistic} isHide={isHide} />}
          </>
        )}
      </TopSection>

      <TabsSection isShow={isShow} />
    </>
  );
});
