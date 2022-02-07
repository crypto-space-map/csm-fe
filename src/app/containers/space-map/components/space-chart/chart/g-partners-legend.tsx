import { memo } from 'react';

import { COLOR_PALLETTE } from 'global/pallette';
import { useSelector } from 'react-redux';

import { selectFilters } from 'app/containers/space-map/selectors';
import { useDispatchAction as chartDispatchActions } from 'app/containers/space-map/slice';

import { Sizing } from '../types';
import { color } from '../utils/colors';

const CIRCLE = {
  OFFSET: 86,
  RADIUS: 12,
};

const circleData = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const Circle = ({ value = 0, label = '', index = 0 }) => {
  const { partnersWeight } = useSelector(selectFilters);
  const { setFilters } = chartDispatchActions();
  const isIncludesFilter = partnersWeight.includes(value);
  const handleClick = () => {
    if (isIncludesFilter) {
      const trimmedArr = partnersWeight.filter(item => item !== value) || [];
      return setFilters({ partnersWeight: trimmedArr });
    }
    const pushedFilterArr = [...partnersWeight, value].sort((a, b) => a - b);
    return setFilters({ partnersWeight: pushedFilterArr });
  };

  const selectedStyles = isIncludesFilter ? { stroke: '#83D9F5', strokeWidth: 2 } : {};
  return (
    <>
      <circle
        fill={color(value / 100)}
        cx={index * CIRCLE.OFFSET}
        r={CIRCLE.RADIUS}
        onClick={handleClick}
        {...selectedStyles}
      />
      <text x={index * CIRCLE.OFFSET + 14} y={CIRCLE.RADIUS / 2} fill={COLOR_PALLETTE.MAP_LABELS}>
        {label}
      </text>
    </>
  );
};

export const GPartnersLegend = memo<Omit<Sizing, 'height'>>(({ width }) => {
  const legendWidth = CIRCLE.OFFSET * circleData.length + CIRCLE.OFFSET * circleData.length;
  const xLegendPos = width / 2 - legendWidth / 4;

  return (
    <g transform={`translate(${xLegendPos}, 0)`}>
      {circleData.map((item, i) => (
        <Circle
          key={`legend${item}`}
          value={item}
          index={i}
          label={`${circleData[i] || 0}${circleData[i + 1] ? '-' : '+'}${circleData[i + 1] - 1 || ''}`}
        />
      ))}
    </g>
  );
});
