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
            y1={getCircleCoord(elem, 'x')}
            x2={getCircleCoord(elem, 'x')}
            y2={getCircleCoord(elem, 'y')}
            strokeWidth={1}
            strokeDasharray="1 1"
            fill="none"
            vectorEffect="non-scaling-stroke"
            markerEnd={`url(#${TOOLTIP_MARKER}${elem.data.projectId})`}
          />
          <marker
            key={`${elem.data.projectId}${elem.data.marketCap}`}
            id={`${TOOLTIP_MARKER}${elem.data.projectId}`}
            viewBox={`0 0 ${elem.data.name.length * 10} 50`}
            markerUnits="strokeWidth"
            markerWidth={elem.data.name.length * 10}
            markerHeight="50">
            <svg>
              <rect width={elem.data.name.length * 10} height="24" rx="12.3767" fill="white" />
              <path
                d="M12.5092 0.179343C13.3259 0.179343 13.735 1.16686 13.1574 1.7444L7.40166 7.50018C7.04363 7.85821 6.46315 7.85821 6.10512 7.50018L0.349341 1.7444C-0.228206 1.16686 0.180836 0.179343 0.99761 0.179343H12.5092Z"
                fill="white"
                transform={`translate(${elem.data.name.length * 2.5}, 17) scale(1.5)`}
              />
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
