import { memo } from 'react';

import { COLOR_PALLETTE } from 'global/pallette';

import { Sizing } from '../types';
import { color } from '../utils/colors';

const CIRCLE = {
  OFFSET: 80,
  RADIUS: 12,
};

const circleData = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const Circle = ({ value = 10, label = '', index = 0 }) => {
  const handleClick = () => false;
  return (
    <>
      <circle fill={color(value / 100)} cx={index * CIRCLE.OFFSET} r={CIRCLE.RADIUS} onClick={handleClick} />
      <text x={index * CIRCLE.OFFSET + 18} y={CIRCLE.RADIUS / 2} fill={COLOR_PALLETTE.MAP_LABELS}>
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
          label={`${circleData[i - 1] || 0}-${circleData[i] || ''}`}
        />
      ))}
    </g>
  );
});
