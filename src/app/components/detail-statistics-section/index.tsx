import { useMemo } from 'react';

import { CommonStatisticItem } from './common-statistic-item';
import { PercentageStatisticItem } from './percentage-statistic-item';
import { StatisticsSectionWrapper } from './styles';
import { GenerateDataProps, StatisticTypes, StatisticDetailDataDTO } from './types';
import { generateOptions } from './utils';
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

export const DetailStatisticsSection = ({ data }: { data: StatisticDetailDataDTO | null }) => {
  const preparedData = useMemo(() => (data ? generateOptions(data) : null), [data]);

  if (!preparedData) return null;

  return (
    <StatisticsSectionWrapper>
      {preparedData.map(item => selectStatisticItem(item))}
    </StatisticsSectionWrapper>
  );
};
