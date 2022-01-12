import { AdditionalValue, StatistiсTitle, MainValue, StatisticItemWrapper } from './styles';
import { StatisticItemProps } from './types';

export const CommonStatisticItem = ({ title, mainValue, secondValue }: StatisticItemProps) => (
  <StatisticItemWrapper>
    <StatistiсTitle>{title}</StatistiсTitle>
    <MainValue>{mainValue}</MainValue>
    <AdditionalValue>{secondValue}</AdditionalValue>
  </StatisticItemWrapper>
);

CommonStatisticItem.defaultProps = {
  secondValue: '',
};
