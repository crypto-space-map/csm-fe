import { ProjectChange } from 'common/components/project-change';

import { ProjectChangeWrapper } from './styles';
import { StatisticItemProps } from './types';

export const PercentageStatisticItem = ({ title, mainValue, secondValue = '' }: StatisticItemProps) => {
  const a = '1';
  return (
    <ProjectChangeWrapper>
      <ProjectChange
        percentageChange={mainValue}
        priceChange={secondValue}
        changePeriod={title}
        lightVariant
        textAlign="end"
      />
    </ProjectChangeWrapper>
  );
};

PercentageStatisticItem.defaultProps = {
  secondValue: '',
};
