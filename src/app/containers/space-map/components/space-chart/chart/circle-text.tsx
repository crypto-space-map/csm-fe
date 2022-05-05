import { useMemo } from 'react';

import { animated, Spring } from '@react-spring/konva';
import { HierarchyCircularNode } from 'd3';
import { COLOR_PALLETTE } from 'global/pallette';

import { PackedCategories } from '../types';
import { randomNumber } from '../utils/helpers';

type CircleTextProps = {
  elem: HierarchyCircularNode<PackedCategories>;
  isSelected?: boolean;
  scale: number;
};

const getCordsPos = (elem: HierarchyCircularNode<PackedCategories>, cord: 'x' | 'y') => {
  if (elem.parent) {
    return elem[cord] + elem.parent?.data[cord] - elem.parent?.data.r;
  }
  return elem.data[cord];
};

export const CircleText = ({ elem, isSelected, scale, ...rest }: CircleTextProps) => {
  const tickerFontSize = (elem.r / (elem.data.symbol?.length >= 2 ? elem.data.symbol?.length : 2)) * 2;
  const textFill = isSelected ? COLOR_PALLETTE.POST_DATE_COLOR : COLOR_PALLETTE.MAIN_WHITE;

  const isOpacity = useMemo(() => {
    if (elem.r > 15) return 1;
    if (scale < 2 && elem.r < 15) return 0;
    return 1;
  }, [elem.r, scale]);

  const cords = useMemo(
    () => ({
      x: getCordsPos(elem, 'x') - elem.r / 1.5,
      y: getCordsPos(elem, 'y') - tickerFontSize / 2,
    }),
    [elem, tickerFontSize]
  );
  return (
    <Spring
      key={`circles-tickers-${elem.data.symbol}`}
      from={{ x: randomNumber(0, 1500), y: randomNumber(0, 1500), opacity: 0 }}
      to={{
        opacity: isOpacity,
        x: cords.x || 0,
        y: cords.y || 0,
      }}>
      {props => (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <animated.Text
          {...rest}
          {...props}
          align="center"
          fill={textFill}
          fontSize={tickerFontSize}
          fontFamily="Open Sans , sans-serif"
          text={elem.data.symbol && elem.data.symbol.toUpperCase()}
          globalCompositeOperation="xor"
        />
      )}
    </Spring>
  );
};

CircleText.defaultProps = {
  isSelected: true,
};
