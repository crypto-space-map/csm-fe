import { AdditionalValue, StatistiсTitle, MainValue, StatisticItemWrapper } from './styles';
import { StatisticItemProps } from './types';
import { emptyValue } from './utils';

export const CommonStatisticItem = ({ title, mainValue, secondValue }: StatisticItemProps) => (
  <StatisticItemWrapper>
    <StatistiсTitle>{title}</StatistiсTitle>
    <MainValue>{mainValue || emptyValue}</MainValue>
    <AdditionalValue>{secondValue || emptyValue}</AdditionalValue>
  </StatisticItemWrapper>
);

CommonStatisticItem.defaultProps = {
  secondValue: '',
};
