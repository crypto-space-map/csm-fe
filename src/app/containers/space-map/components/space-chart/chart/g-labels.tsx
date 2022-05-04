import { memo } from 'react';

import { COLOR_PALLETTE } from 'global/pallette';
import { Text } from 'react-konva';

import { GAreaProps } from '../types';
import { capitalizeFirstLetter, getCordsPos } from '../utils/helpers';

const getWidth = (value?: string) => {
  if (value) {
    return value.length * 4;
  }
  return 0;
};

export const GLabels = memo<GAreaProps>(({ data, scale = 1 }) => (
  <>
    {data?.map(elem => (
      <Text
        fontSize={12 / scale}
        key={`category-labels-${elem.data.key}`}
        text={capitalizeFirstLetter(elem.data.key || '')}
        fill={COLOR_PALLETTE.MAIN_WHITE}
        x={getCordsPos(elem, 'x') - getWidth(elem.data.key) / scale}
        y={getCordsPos(elem, 'y') - elem.data.r - 20 / scale}
        fillEnabled
        strokeHitEnabled={false}
        strokeScaleEnabled={false}
      />
    ))}
  </>
));
