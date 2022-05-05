import { MouseEvent } from 'react';

import { useSelector } from 'react-redux';

import { selectFilters } from 'app/containers/space-map/selectors';
import { useDispatchAction as chartDispatchActions } from 'app/containers/space-map/slice';
import { QuestionMark } from 'assets/icons';

import { color } from '../utils/colors';
import {
  FilterWeightItem,
  FilterWeightItemCircle,
  LightTooltip,
  StyledWeightFilter,
  StyledWeightWrapper,
  StyledWeightFilterWrapper,
} from './styled';

const CROSS_PATH =
  'M0.32191 14.1276C-0.106452 14.556 -0.106386 15.2504 0.322042 15.6788C0.75047 16.1071 1.44502 16.1071 1.87337 15.6787L8.00014 9.55129L14.1274 15.6781C14.5558 16.1064 15.2504 16.1064 15.6787 15.6781C16.1071 15.2498 16.1071 14.5552 15.6787 14.1269L9.55135 7.99998L15.6783 1.87242C16.1065 1.44402 16.1065 0.749525 15.6781 0.321206C15.2497 -0.107123 14.5551 -0.107058 14.1268 0.321338L7.99992 6.44878L1.87262 0.321864C1.44424 -0.106487 0.74968 -0.106487 0.321296 0.321864C-0.107099 0.750227 -0.107099 1.44472 0.321296 1.87309L6.44882 8.00009L0.32191 14.1276Z';

const CrossSvg = () => (
  <svg>
    <path d={CROSS_PATH} />
  </svg>
);

const circleData = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const WeightTooltip = () => (
  <StyledWeightWrapper>
    <LightTooltip
      arrow
      title="Total number of project
             connections with investors
             and other projects">
      <span>
        <QuestionMark />
      </span>
    </LightTooltip>
    Connections:
  </StyledWeightWrapper>
);

const FilterElement = ({ value = 0, index = 0 }) => {
  const { partnersWeight } = useSelector(selectFilters);
  const { setFilters } = chartDispatchActions();
  const isIncludesFilter = partnersWeight.includes(value);
  const handleClick = (event: MouseEvent) => {
    event.stopPropagation();
    if (isIncludesFilter) {
      const trimmedArr = partnersWeight.filter(item => item !== value) || [];
      return setFilters({ partnersWeight: trimmedArr });
    }
    const pushedFilterArr = [...partnersWeight, value].sort((a, b) => a - b);
    return setFilters({ partnersWeight: pushedFilterArr });
  };
  const label = `${circleData[index] || 0}${circleData[index + 1] ? '-' : '+'}${
    circleData[index + 1] - 1 || ''
  }`;
  return (
    <FilterWeightItem isSelected={isIncludesFilter} onClick={handleClick}>
      <FilterWeightItemCircle background={color(value / 100)}>
        {isIncludesFilter && <CrossSvg />}
      </FilterWeightItemCircle>
      {label}
    </FilterWeightItem>
  );
};

export const ProjectWeightFilter = () => (
  <StyledWeightFilterWrapper>
    <StyledWeightFilter id="range-block">
      <WeightTooltip />
      {circleData.map((elem, index) => (
        <FilterElement value={elem} index={index} key={`weight-filter-${elem}`} />
      ))}
    </StyledWeightFilter>
  </StyledWeightFilterWrapper>
);
