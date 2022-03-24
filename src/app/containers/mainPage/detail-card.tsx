import { DetailCardWrapper } from 'app/components';
import { DetailFundCard } from 'app/containers/detail-fund-card';
import { DetailInfoCard } from 'app/containers/detail-info-card';

import { useDetailCard } from './hooks';

export const DetailCard = () => {
  const { isShow, isFund, isInfo } = useDetailCard();
  return (
    <DetailCardWrapper show={isShow}>
      {isInfo && <DetailInfoCard />}
      {isFund && <DetailFundCard />}
    </DetailCardWrapper>
  );
};
