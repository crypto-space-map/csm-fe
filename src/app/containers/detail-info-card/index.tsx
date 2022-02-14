import { memo } from 'react';

import { DetailHeaderSection, DetailStatisticsSection } from 'app/components';

import { TabsSection } from './components/tabs-section';
import { useDetailInfoSlice, useDetailInfo, useClearDataAfterChangeNewProject } from './hooks';
import { TopSection } from './styles';

export const DetailInfoCard = memo(() => {
  useDetailInfoSlice();
  useClearDataAfterChangeNewProject();
  const { isShow, projectHeaderData, projectStatistic } = useDetailInfo();

  return (
    <>
      <TopSection>
        {isShow && (
          <>
            {projectHeaderData && <DetailHeaderSection {...projectHeaderData} />}
            {projectStatistic && <DetailStatisticsSection data={projectStatistic} />}
          </>
        )}
      </TopSection>

      <TabsSection isShow={isShow} />
    </>
  );
});
