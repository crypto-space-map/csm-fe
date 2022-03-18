import { Fragment, memo } from 'react';

import { HierarchyCircularNode } from 'd3';

import { GAreaProps, PackedCategories } from '../types';
import { getCircleCoord } from '../utils/helpers';

const LABEL_PATH_DATA = 'LABEL_PATH_DATA';

const getWidth = ({ data: { key = '' } }: HierarchyCircularNode<PackedCategories>, multiplier = 1) => {
  const multipliedValue = key.length <= 3 ? key.length + 1 : key.length;
  return multipliedValue * multiplier;
};

const splitName = (val: string) => val.replace(/[()\s]/g, '');

export const GLabels = memo<GAreaProps>(({ data }) => (
  <g className="category-labels">
    {data?.map(elem => (
      <Fragment key={`scaled-tooltips${elem.data.key}${elem.x}`}>
        <line
          key={`tooltips-line${elem.data.key}${elem.x}`}
          x1={0}
          y1={0}
          x2={getCircleCoord(elem.data, 'x')}
          y2={getCircleCoord(elem.data, 'y') - elem.r}
          strokeWidth={1}
          strokeDasharray="1 1"
          fill="none"
          vectorEffect="non-scaling-stroke"
          markerEnd={`url(#${LABEL_PATH_DATA}${splitName(elem.data.key || '')})`}
        />
        <marker
          refY={10}
          refX={getWidth(elem, 4)}
          key={`marker-point${elem.data.name}`}
          id={`${LABEL_PATH_DATA}${splitName(elem.data.key || '')}`}
          viewBox="0 0 200 10"
          markerUnits="strokeWidth"
          markerWidth="200"
          markerHeight="80">
          <path fill="white" transform="scale(0.2)" strokeWidth={1} d={elem.data.namePathData} />
        </marker>
      </Fragment>
    ))}
  </g>
));
