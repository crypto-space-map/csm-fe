import { StatisticItem } from './statistic-item';
import { StatisticsSectionWrapper } from './styles';

const data = [
  {
    title: 'Market Price',
    increase: '0.0004 BTC',
    rename: '$12.10',
  },
  {
    title: 'Market Price',
    increase: '0.0004 BTC',
    rename: '$12.10',
  },
  {
    title: 'Market Price',
    increase: '0.0004 BTC',
    rename: '$12.10',
  },
  {
    title: 'Market Price',
    increase: '0.0004 BTC',
    rename: '$12.10',
  },
  {
    title: 'Market Price',
    increase: '0.0004 BTC',
    rename: '$12.10',
  },
  {
    title: 'Market Price',
    increase: '0.0004 BTC',
    rename: '$12.10',
  },
  {
    title: 'Market Price',
    increase: '0.0004 BTC',
    rename: '$12.10',
  },
];

// допилить, когда понятно будет как считается эта статистика

export const StatisticsSection = () => (
  <StatisticsSectionWrapper>
    {data.map(item => (
      <StatisticItem {...item} />
    ))}
  </StatisticsSectionWrapper>
);
