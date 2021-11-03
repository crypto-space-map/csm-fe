import { memo } from 'react';

import { HeaderSection } from './components/header-section';
import { StatisticsSection } from './components/statistics-section';
import { TabsSection } from './components/tabs-section';
import { DetailWrapper, TopSection } from './styles';

export const DetailInfoCard = memo(() => (
  <DetailWrapper>
    <TopSection>
      <HeaderSection />
      <StatisticsSection />
    </TopSection>

    <TabsSection />
  </DetailWrapper>
));
