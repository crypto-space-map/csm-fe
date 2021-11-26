import { memo } from 'react';

import { HeaderSection } from './components/header-section';
import { StatisticsSection } from './components/statistics-section';
import { TabsSection } from './components/tabs-section';
import { DetailWrapper, TopSection } from './styles';

//  TODO потом удалить блок с центральным контентом
export const DetailInfoCard = memo(() => (
  <>
    <div
      style={{
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 600,
        fontSize: 40,
      }}>
      Crypto Space Map HERE
    </div>
    <DetailWrapper>
      <TopSection>
        <HeaderSection />
        <StatisticsSection />
      </TopSection>

      <TabsSection />
    </DetailWrapper>
  </>
));
