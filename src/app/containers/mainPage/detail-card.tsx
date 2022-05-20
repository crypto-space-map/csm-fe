import { useState, useCallback, useEffect } from 'react';

import { DetailCardWrapper } from 'app/components';
import { DetailFundCard } from 'app/containers/detail-fund-card';
import { DetailInfoCard } from 'app/containers/detail-info-card';

import { useDetailCard } from './hooks';

export const DetailCard = () => {
  const [isHide, setIsHide] = useState(false);
  const toggleIsHide = useCallback(() => setIsHide(!isHide), [setIsHide, isHide]);
  const { isShow, isFund, isInfo, isShowGuide } = useDetailCard();

  useEffect(() => {
    // Чтобы не было разворачивания карточки по высоте в момент закрытия ставим таймер
    if (!isShow) setTimeout(() => setIsHide(false), 1000);
  }, [isShow]);

  return (
    <DetailCardWrapper isShow={isShow} isHide={isHide} isShowGuide={isShowGuide}>
      {isInfo && <DetailInfoCard isHide={isHide} toggleIsHide={toggleIsHide} />}
      {isFund && <DetailFundCard isHide={isHide} toggleIsHide={toggleIsHide} />}
    </DetailCardWrapper>
  );
};
