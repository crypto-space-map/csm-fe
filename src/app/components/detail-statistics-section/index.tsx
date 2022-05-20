import { useMemo, useEffect, useState } from 'react';

import { CommonStatisticItem } from './common-statistic-item';
import { PercentageStatisticItem } from './percentage-statistic-item';
import { StatisticsSectionWrapper } from './styles';
import { GenerateDataProps, StatisticTypes, StatisticDetailDataDTO } from './types';
import { generateOptions, switchElementPosition } from './utils';
import { WebsiteStatisticItem } from './website-statistic-item';

const selectStatisticItem = (item: GenerateDataProps) => {
  const { type, ...restData } = item;
  switch (type) {
    case StatisticTypes.COMMON:
      return <CommonStatisticItem key={restData.title} {...restData} />;
    case StatisticTypes.PERCENTAGE:
      return <PercentageStatisticItem key={restData.title} {...restData} />;
    case StatisticTypes.WEBSITE:
      return <WebsiteStatisticItem key={restData.title} {...restData} />;
    default:
      return null;
  }
};

interface DetailStatisticsSectionProps {
  data: StatisticDetailDataDTO | null;
  isHide: boolean;
}

export const DetailStatisticsSection = ({ data, isHide }: DetailStatisticsSectionProps) => {
  const preparedData = useMemo(() => (data ? generateOptions(data) : null), [data]);
  const [currentData, setCurrentData] = useState(preparedData);
  useEffect(() => {
    if (isHide && preparedData) {
      const newArr = switchElementPosition([...preparedData]);
      setCurrentData(newArr);
    }
    if (!isHide) {
      setCurrentData(preparedData);
    }
  }, [isHide, preparedData]);

  if (!currentData) return null;

  return (
    <StatisticsSectionWrapper>{currentData.map(item => selectStatisticItem(item))}</StatisticsSectionWrapper>
  );
};
