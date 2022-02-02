import { memo } from 'react';

import { HierarchyCircularNode } from 'd3';

import { GAreaProps, PackedCategories } from '../types';
import { getCircleCoord } from '../utils/helpers';
import { ChildLabelsText, ParentLabelsText } from './styled';

const PADDING = {
  PARENT: 10,
  CHILD: 2,
};

const Label = memo<{ elem: HierarchyCircularNode<PackedCategories> }>(
  ({
    elem: {
      data: { key, x, y, r },
      children,
    },
  }) => (
    <>
      <ParentLabelsText
        vectorEffect="non-scaling-stroke"
        x={x}
        y={y - r - PADDING.PARENT}
        key={`${x}${y}${r}${key}`}>
        {key}
      </ParentLabelsText>
      {children?.map(item => (
        <ChildLabelsText
          key={`${item.x}${item.y}${item.data.name}`}
          x={getCircleCoord(item, 'x')}
          y={getCircleCoord(item, 'y') - item.r - PADDING.CHILD}
          vectorEffect="non-scaling-stroke"
          fontSize={4}>
          {item.children && item.data?.name}
        </ChildLabelsText>
      ))}
    </>
  )
);

export const GLabels = memo<GAreaProps>(({ data }) => (
  <g className="category-labels">
    {data?.map(elem => (
      <Label elem={elem} key={elem.data.key} />
    ))}
  </g>
));
