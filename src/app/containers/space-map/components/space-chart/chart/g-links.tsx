import { memo, useMemo } from 'react';

import { COLOR_PALLETTE } from 'global/pallette';

import { useSpaceMap } from 'app/containers/space-map/hooks';

import { GAreaProps } from '../types';
import { getCircleCoord, getIncludesProjects, getAllProjects } from '../utils/helpers';

export const GLinks = memo<GAreaProps>(({ data, currentProject }) => {
  const { projectPartnerships, projectPartnershipsLoading } = useSpaceMap();

  const allProjects = useMemo(() => getAllProjects(data || []), [data]);

  const foundedProjects = getIncludesProjects(allProjects, [...new Set(projectPartnerships)]);

  if (!currentProject || projectPartnershipsLoading) return null;

  return (
    <g className="links">
      {foundedProjects?.map(elem => (
        <line
          stroke={COLOR_PALLETTE.MAIN_WHITE}
          key={`${elem.x}${elem.y}`}
          strokeWidth={1}
          strokeDasharray={4000}
          x1={getCircleCoord(currentProject, 'x')}
          y1={getCircleCoord(currentProject, 'y')}
          x2={getCircleCoord(elem, 'x')}
          y2={getCircleCoord(elem, 'y')}
        />
      ))}
    </g>
  );
});
