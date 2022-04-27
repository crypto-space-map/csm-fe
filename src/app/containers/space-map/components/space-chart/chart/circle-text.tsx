import { HierarchyCircularNode } from 'd3';
import { COLOR_PALLETTE } from 'global/pallette';
import { Text } from 'react-konva';

import { PackedCategories } from '../types';

type CircleTextProps = {
  elem: HierarchyCircularNode<PackedCategories>;
  isSelected?: boolean;
};

const getCordsPos = (elem: HierarchyCircularNode<PackedCategories>, cord: 'x' | 'y') => {
  if (elem.parent) {
    return elem[cord] + elem.parent?.data[cord] - elem.parent?.data.r;
  }
  return elem.data[cord];
};

export const CircleText = ({ elem, isSelected, ...rest }: CircleTextProps) => {
  const tickerFontSize = (elem.r / (elem.data.symbol?.length >= 2 ? elem.data.symbol?.length : 2)) * 2;
  const textFill = isSelected ? COLOR_PALLETTE.POST_DATE_COLOR : COLOR_PALLETTE.MAIN_WHITE;

  return (
    <Text
      {...rest}
      x={getCordsPos(elem, 'x') - elem.r / 1.5}
      y={getCordsPos(elem, 'y') - tickerFontSize / 2}
      align="center"
      fill={textFill}
      fontSize={tickerFontSize}
      fontFamily="Open Sans , sans-serif"
      text={elem.data.symbol && elem.data.symbol.toUpperCase()}
      globalCompositeOperation="lighter"
    />
  );
};

CircleText.defaultProps = {
  isSelected: true,
};
