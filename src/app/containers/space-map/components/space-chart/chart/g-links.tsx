import { memo } from 'react';

import { COLOR_PALLETTE } from 'global/pallette';

import { useSpaceMap } from 'app/containers/space-map/hooks';

import { GAreaProps } from '../types';
import { getCircleCoord } from '../utils/helpers';
import { ProjectLink } from './styled';

export const GLinks = memo<GAreaProps>(({ data, currentProject }) => {
  const { projectPartnershipsLoading } = useSpaceMap();

  if (!currentProject || projectPartnershipsLoading) return null;

  return (
    <g className="links">
      {data?.map(elem => (
        <>
          <ProjectLink
            stroke={COLOR_PALLETTE.MAIN_WHITE}
            key={`links-g-area-${elem.data.key || elem.data.projectId}${elem.data.marketCap}`}
            strokeWidth={1}
            strokeDasharray="4000 4000"
            vectorEffect="non-scaling-stroke"
            x1={getCircleCoord(currentProject, 'x')}
            y1={getCircleCoord(currentProject, 'y')}
            x2={getCircleCoord(elem, 'x')}
            y2={getCircleCoord(elem, 'y')}
          />
        </>
      ))}
    </g>
  );
});
