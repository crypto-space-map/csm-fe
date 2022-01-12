import { useMemo } from 'react';

import { CommonStatisticItem } from './common-statistic-item';
import { PercentageStatisticItem } from './percentage-statistic-item';
import { StatisticsSectionWrapper } from './styles';
import { GenerateDataProps, StatisticTypes } from './types';
import { generateOptions } from './utils';
import { WebsiteStatisticItem } from './website-statistic-item';

interface StatisticsSectionProps<T> {
  data: T;
}

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

export const StatisticsSection = <T extends Record<string, unknown>>({
  data,
}: StatisticsSectionProps<T>) => {
  const preparedData = useMemo(() => generateOptions(data), [data]);
  console.log(preparedData);
  return (
    <StatisticsSectionWrapper>
      {preparedData.map(item => selectStatisticItem(item))}
      {/* {preparedData.map(item => (
        <StatisticItem key={item.title} {...item} />
      ))} */}
    </StatisticsSectionWrapper>
  );
};
