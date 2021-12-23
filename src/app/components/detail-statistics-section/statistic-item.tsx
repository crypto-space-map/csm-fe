import { Increase, StatistiсTitle, Rename, StatisticItemWrapper } from './styles';

interface StatisticItemProps {
  title: string;
  rename: string;
  increase: string;
}

export const StatisticItem = ({ title, rename, increase }: StatisticItemProps) => (
  <StatisticItemWrapper>
    <StatistiсTitle>{title}</StatistiсTitle>
    <Rename>{rename}</Rename>
    <Increase>{increase}</Increase>
  </StatisticItemWrapper>
);
