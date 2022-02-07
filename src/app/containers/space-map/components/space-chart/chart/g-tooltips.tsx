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
            x1={getCircleCoord(elem, 'x')}
            y1={getCircleCoord(elem, 'x') - elem.r}
            x2={getCircleCoord(elem, 'x')}
            y2={getCircleCoord(elem, 'y') - elem.r}
            strokeWidth={1}
            // strokeDasharray="4000 4000"
            vectorEffect="non-scaling-stroke"
            markerEnd={`url(#${TOOLTIP_MARKER}${elem.data.projectId})`}
          />
          <marker
            id={`${TOOLTIP_MARKER}${elem.data.projectId}`}
            viewBox="0 0 80 80"
            x={getCircleCoord(elem, 'x')}
            y={getCircleCoord(elem, 'y')}
            markerUnits="strokeWidth"
            markerWidth="100"
            markerHeight="80">
            <rect
              x="0"
              y="0"
              width="50"
              height="24"
              rx="12.3767"
              fill="white"
              vectorEffect="non-scaling-size"
            />
            <text x="0" y="12" fontSize={8}>
              {elem.data.projectId}
            </text>
          </marker>
        </>
      ))}
    </g>
  );
});
