import { memo, useMemo, useRef } from 'react';

import { animated, Spring } from '@react-spring/konva';
import { HierarchyCircularNode } from 'd3';
import { COLOR_PALLETTE } from 'global/pallette';
import { Text as TextShape } from 'konva/lib/shapes/Text';

import { GAreaProps, PackedCategories } from '../types';
import { randomNumber } from '../utils/helpers';

type CircleTextProps = Omit<GAreaProps, 'data'> & {
  elem: HierarchyCircularNode<PackedCategories>;
  isSelected: boolean;
  scale: number;
  handleClick: () => void;
};

const getCordsPos = (elem: HierarchyCircularNode<PackedCategories>, cord: 'x' | 'y') => {
  if (elem.parent) {
    return elem[cord] + elem.parent?.data[cord] - elem.parent?.data.r;
  }
  return elem.data[cord];
};

export const CircleText = memo(
  ({ elem, isSelected, scale, handleClick = () => false, ...rest }: CircleTextProps) => {
    const tickerFontSize = (elem.r / (elem.data.symbol?.length >= 2 ? elem.data.symbol?.length : 2)) * 2;
    const textFill = isSelected ? COLOR_PALLETTE.POST_DATE_COLOR : COLOR_PALLETTE.MAIN_WHITE;
    const textRef = useRef<TextShape>(null);

    const isClickableProject = !!elem.data.projectId;

    const onMouseEnter = () => {
      const stage = textRef.current?.getStage();
      if (stage && isClickableProject) {
        stage.container().style.cursor = 'pointer';
      }
    };

    const onMouseLeave = () => {
      const stage = textRef.current?.getStage();
      if (stage) {
        stage.container().style.cursor = 'default';
      }
    };

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
        from={{ x: randomNumber(10, 1500), y: randomNumber(10, 1500), opacity: 0 }}
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
            ref={textRef}
            align="center"
            fill={textFill}
            fontSize={tickerFontSize}
            fontFamily="Open Sans , sans-serif"
            text={elem.data.symbol && elem.data.symbol.toUpperCase()}
            globalCompositeOperation="xor"
            onClick={handleClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        )}
      </Spring>
    );
  }
);
