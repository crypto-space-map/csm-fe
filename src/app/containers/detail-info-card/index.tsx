import { memo, useState } from 'react';

import { HeaderSection } from './components/header-section';
import { StatisticsSection } from './components/statistics-section';
import { TabsSection } from './components/tabs-section';
import { DetailWrapper, TopSection, TransitionWrapper } from './styles';

//  TODO потом удалить блок с центральным контентом
export const DetailInfoCard = memo(() => {
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    setIsShow(!isShow);
  };
  return (
    <>
      <div
        style={{
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 600,
          fontSize: 40,
          overflow: 'hidden',
        }}>
        <button onClick={handleClick}>ddd</button>
        Crypto Space Map HERE
      </div>

      <TransitionWrapper open={isShow}>
        <DetailWrapper>
          <TopSection>
            <HeaderSection onClose={handleClick} />
            <StatisticsSection />
          </TopSection>

          <TabsSection />
        </DetailWrapper>
      </TransitionWrapper>
    </>
  );
});
