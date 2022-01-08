import { AdditionalValue, StatistiсTitle, MainValue, StatisticItemWrapper } from './styles';

interface StatisticItemProps {
  title: string;
  main: string;
  additional: string;
}

export const StatisticItem = ({ title, main, additional }: StatisticItemProps) => (
  <StatisticItemWrapper>
    <StatistiсTitle>{title}</StatistiсTitle>
    <MainValue>{main}</MainValue>
    <AdditionalValue>{additional}</AdditionalValue>
  </StatisticItemWrapper>
);
