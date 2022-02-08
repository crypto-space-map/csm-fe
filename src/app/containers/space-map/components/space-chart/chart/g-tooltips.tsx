import { memo } from 'react';

import { useSpaceMap } from 'app/containers/space-map/hooks';

import { GAreaProps } from '../types';
import { getCircleCoord } from '../utils/helpers';

const TOOLTIP_MARKER = 'tooltip-marker-';

export const GTooltips = memo<GAreaProps>(({ data, currentProject }) => {
  const { projectPartnershipsLoading } = useSpaceMap();

  if (!currentProject || projectPartnershipsLoading) return null;
  return (
    <g className="tooltips">
      {data?.map(elem => (
        <>
          <line
            key={`${elem.data.projectId}${elem.data.marketCap}`}
            x1={getCircleCoord(elem, 'x')}
            y1={getCircleCoord(elem, 'x') - elem.r}
            x2={getCircleCoord(elem, 'x')}
            y2={getCircleCoord(elem, 'y') - elem.r}
            strokeWidth={1}
            strokeDasharray="1 1"
            vectorEffect="non-scaling-stroke"
            markerEnd={`url(#${TOOLTIP_MARKER}${elem.data.projectId})`}
          />
          <marker
            key={`${elem.data.projectId}${elem.data.marketCap}`}
            id={`${TOOLTIP_MARKER}${elem.data.projectId}`}
            viewBox={`0 0 ${elem.data.name.length * 10} 50`}
            x={getCircleCoord(elem, 'x')}
            y={getCircleCoord(elem, 'y')}
            markerUnits="strokeWidth"
            markerWidth={elem.data.name.length * 10}
            markerHeight="50">
            <svg>
              <rect width={elem.data.name.length * 9} height="24" rx="12.3767" fill="white" />
              <path
                fill="black"
                transform="translate(6, 17) scale(0.2)"
                strokeWidth={1}
                stroke="#000000"
                d={elem.data.svgPathData}
              />
            </svg>
          </marker>
        </>
      ))}
    </g>
  );
});
