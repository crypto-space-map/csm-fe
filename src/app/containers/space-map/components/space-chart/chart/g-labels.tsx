import { memo } from 'react';

import { HierarchyCircularNode } from 'd3';

import { GAreaProps, PackedCategories } from '../types';
import { ParentLabelsText } from './styled';

const PADDING = {
  PARENT: 10,
  CHILD: 12,
};

const Label = memo<{ elem: HierarchyCircularNode<PackedCategories> }>(
  ({
    elem: {
      data: { key, x, y, r },
    },
  }) => (
    <ParentLabelsText x={x} y={y - r - PADDING.PARENT}>
      {key}
    </ParentLabelsText>
  )
);

export const GLabels = memo<GAreaProps>(({ data }) => (
  <g className="category-labels">
    {data?.map(elem => (
      <Label elem={elem} key={elem.data.key} />
    ))}
  </g>
));
