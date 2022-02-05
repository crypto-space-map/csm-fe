import { memo } from 'react';

import { COLOR_PALLETTE } from 'global/pallette';

import { useSpaceMap } from 'app/containers/space-map/hooks';

import { GAreaProps } from '../types';
import { getCircleCoord } from '../utils/helpers';
import { ProjectLink, StyledLabel } from './styled';

export const GLinks = memo<GAreaProps>(({ data, currentProject }) => {
  const { projectPartnershipsLoading } = useSpaceMap();

  if (!currentProject || projectPartnershipsLoading) return null;

  return (
    <g className="links">
      {data?.map(elem => (
        <>
          <ProjectLink
            stroke={COLOR_PALLETTE.MAIN_WHITE}
            key={`${elem.x}${elem.y}`}
            strokeWidth={1}
            stroke-dasharray="4000 4000"
            vectorEffect="non-scaling-stroke"
            x1={getCircleCoord(currentProject, 'x')}
            y1={getCircleCoord(currentProject, 'y')}
            x2={getCircleCoord(elem, 'x')}
            y2={getCircleCoord(elem, 'y')}
          />
          {/* <rect
            vectorEffect="non-scaling-size"
            x={getCircleCoord(elem, 'x')}
            y={getCircleCoord(elem, 'y')}
            width="48.59"
            height="24.7534"
            rx="12.3767"
            fill="white"
          />
          <text
            x={getCircleCoord(elem, 'x')}
            y={getCircleCoord(elem, 'y') + 16}
            className="testing"
            vectorEffect="non-scaling-size">
            {elem.data.name}
          </text> */}
        </>
      ))}
    </g>
  );
});
