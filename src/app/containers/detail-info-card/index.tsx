import { memo, useState } from 'react';

import { HeaderSection, StatisticsSection } from './components';
import { TabsSection } from './components/tabs-section';
import { statisticDetailData, headerDetailData } from './constants';
import { useDetailInfoSlice } from './hooks';
import { DetailWrapper, TopSection, TransitionWrapper } from './styles';

//  TODO потом удалить блок с центральным контентом
export const DetailInfoCard = memo(() => {
  useDetailInfoSlice();
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
            <HeaderSection onClose={handleClick} {...headerDetailData} />
            <StatisticsSection data={statisticDetailData} />
          </TopSection>

          <TabsSection />
        </DetailWrapper>
      </TransitionWrapper>
    </>
  );
});
