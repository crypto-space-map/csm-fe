import { StatisticItem } from './statistic-item';
import { StatisticsSectionWrapper } from './styles';

const data = [
  {
    id: 1,
    title: 'Market Price',
    increase: '0.0004 BTC',
    rename: '$12.10',
  },
  {
    id: 2,
    title: 'Market Price',
    increase: '0.0004 BTC',
    rename: '$12.10',
  },
  {
    id: 3,
    title: 'Market Price',
    increase: '0.0004 BTC',
    rename: '$12.10',
  },
  {
    id: 4,
    title: 'Market Price',
    increase: '0.0004 BTC',
    rename: '$12.10',
  },
  {
    id: 5,
    title: 'Market Price',
    increase: '0.0004 BTC',
    rename: '$12.10',
  },
  {
    id: 6,
    title: 'Market Price',
    increase: '0.0004 BTC',
    rename: '$12.10',
  },
  {
    id: 7,
    title: 'Market Price',
    increase: '0.0004 BTC',
    rename: '$12.10',
  },
];

// допилить, когда понятно будет как считается эта статистика

export const StatisticsSection = () => (
  <StatisticsSectionWrapper>
    {data.map(item => (
      <StatisticItem key={item.id} {...item} />
    ))}
  </StatisticsSectionWrapper>
);
