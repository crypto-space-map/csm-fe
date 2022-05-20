import { ProjectChange } from 'common/components/project-change';

import { ProjectChangeWrapper } from './styles';
import { StatisticItemProps } from './types';

export const PercentageStatisticItem = ({ title, mainValue, secondValue = '' }: StatisticItemProps) => (
  <ProjectChangeWrapper>
    <ProjectChange
      percentageChange={mainValue ?? ''}
      priceChange={secondValue}
      changePeriod={title as '24H Change' | '7D Change'}
      lightVariant
      textAlign="end"
    />
  </ProjectChangeWrapper>
);

PercentageStatisticItem.defaultProps = {
  secondValue: '',
};
