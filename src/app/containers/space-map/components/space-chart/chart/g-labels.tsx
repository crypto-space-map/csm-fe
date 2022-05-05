import { memo, useEffect, useState } from 'react';

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

export const GLabels = memo<GAreaProps>(({ data, scale = 1 }) => {
  const [currentFontSize, setCurrentFontSize] = useState(12);

  useEffect(() => {
    setCurrentFontSize(currentFontSize / scale);
  }, [scale, currentFontSize]);

  return (
    <>
      {data?.map(elem => (
        <Spring
          key={`categories-headers-${elem.data.key}`}
          from={{ fontSize: currentFontSize, x: 0, y: 0 }}
          to={{
            fontSize: 12 / scale,
            x: getCordsPos(elem, 'x') - getWidth(elem.data.key) / scale,
            y: getCordsPos(elem, 'y') - (elem.data.r || 0) - 20 / scale,
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
              strokeHitEnabled={false}
              strokeScaleEnabled={false}
            />
          )}
        </Spring>
      ))}
    </>
  );
});
