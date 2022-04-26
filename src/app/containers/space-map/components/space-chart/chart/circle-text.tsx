import { HierarchyCircularNode } from 'd3';
import { Text } from 'react-konva';

import { PackedCategories } from '../types';

type CircleTextProps = {
  elem: HierarchyCircularNode<PackedCategories>;
};

const getCordsPos = (elem: HierarchyCircularNode<PackedCategories>, cord: 'x' | 'y') => {
  if (elem.parent) {
    return elem[cord] + elem.parent?.data[cord] - elem.parent?.data.r;
  }
  return elem.data[cord];
};

export const CircleText = ({ elem, ...rest }: CircleTextProps) => {
  const tickerFontSize = elem.r && elem.data.symbol ? (elem.r / elem.data.symbol?.length) * 2.5 : 0;

  return (
    <Text
      {...rest}
      x={getCordsPos(elem, 'x') - elem.r / 1.2}
      y={getCordsPos(elem, 'y') - elem.r / 2.8}
      fontSize={tickerFontSize}
      text={elem.data.symbol && elem.data.symbol.toUpperCase()}
    />
  );
};
