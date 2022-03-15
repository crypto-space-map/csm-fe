import { memo } from 'react';

import { HierarchyCircularNode } from 'd3';

import { useSpaceMap } from 'app/containers/space-map/hooks';

import { GAreaProps, PackedCategories } from '../types';
import { getCircleCoord } from '../utils/helpers';

const TOOLTIP_MARKER = 'tooltip-marker-';

const getWidth = ({ data: { symbol } }: HierarchyCircularNode<PackedCategories>, multiplier = 1) => {
  const multipliedValue = symbol.length <= 3 ? symbol.length + 1 : symbol.length;
  return multipliedValue * multiplier;
};

export const GTooltips = memo<GAreaProps>(({ data, currentProject }) => {
  const { projectPartnershipsLoading } = useSpaceMap();

  if (!currentProject || projectPartnershipsLoading) return null;
  return (
    <g className="tooltips">
      {data?.map(elem => (
        <>
          <line
            key={`tooltips-line${elem.data.name}`}
            x1={0}
            y1={0}
            x2={getCircleCoord(elem, 'x')}
            y2={getCircleCoord(elem, 'y') - elem.r}
            strokeWidth={1}
            strokeDasharray="1 1"
            fill="none"
            vectorEffect="non-scaling-stroke"
            markerEnd={`url(#${TOOLTIP_MARKER}${elem.data.projectId})`}
          />
          <marker
            refY={30}
            refX={getWidth(elem, 5)}
            key={`marker-point${elem.data.name}`}
            id={`${TOOLTIP_MARKER}${elem.data.projectId}`}
            viewBox={`0 0 ${getWidth(elem, 12)} 50`}
            markerUnits="strokeWidth"
            markerWidth={elem.data.name.length * 10}
            markerHeight="50">
            <rect width={getWidth(elem, 11)} height="24" rx="12" fill="white" />
            <path
              d="M12.5092 0.179343C13.3259 0.179343 13.735 1.16686 13.1574 1.7444L7.40166 7.50018C7.04363 7.85821 6.46315 7.85821 6.10512 7.50018L0.349341 1.7444C-0.228206 1.16686 0.180836 0.179343 0.99761 0.179343H12.5092Z"
              fill="white"
              transform={`translate(${getWidth(elem, 5.5) - 12}, 17) scale(1.5)`}
            />
            <path
              fill="#464646"
              transform={`translate(${getWidth(elem, 5) / elem.data.symbol.length}, 17) scale(0.2)`}
              strokeWidth={1}
              stroke="#464646"
              d={elem.data.symbolPathData}
            />
          </marker>
        </>
      ))}
    </g>
  );
});
