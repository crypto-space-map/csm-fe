import { memo } from 'react';

import { Spring, animated } from '@react-spring/konva';
import { COLOR_PALLETTE } from 'global/pallette';

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
      <Spring
        key={`categories-headers-${elem.data.key}`}
        from={{ fontSize: 12, x: 0, y: 0 }}
        to={{
          fontSize: 12 / (scale || 1),
          x: getCordsPos(elem, 'x') - getWidth(elem.data.key) / (scale || 1),
          y: getCordsPos(elem, 'y') - (elem.data.r || 0) - 20 / (scale || 1),
        }}>
        {props => (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          <animated.Text
            {...props}
            key={`category-labels-${elem.data.key}`}
            text={capitalizeFirstLetter(elem.data.key || '')}
            fill={COLOR_PALLETTE.MAIN_WHITE}
            // x={getCordsPos(elem, 'x') - getWidth(elem.data.key) / scale}
            // y={getCordsPos(elem, 'y') - elem.data.r - 20 / scale}
            fillEnabled
            hitStrokeWidth="auto"
            strokeScaleEnabled={false}
          />
        )}
      </Spring>
    ))}
  </>
));
