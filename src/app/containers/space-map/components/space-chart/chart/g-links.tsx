import { memo } from 'react';

import { COLOR_PALLETTE } from 'global/pallette';
import { Line } from 'react-konva';

import { useSpaceMap } from 'app/containers/space-map/hooks';

import { GAreaProps } from '../types';
import { getCircleCoord } from '../utils/helpers';

export const GLinks = memo<GAreaProps>(({ data, currentProject }) => {
  const { projectPartnershipsLoading } = useSpaceMap();

  if (!currentProject || projectPartnershipsLoading) return null;

  return (
    <>
      {data?.map(elem => (
        <Line
          key={`connection-line${elem.data.projectId}`}
          strokeWidth={1}
          stroke="white"
          lineJoin="round"
          strokeScaleEnabled={false}
          points={[
            getCircleCoord(currentProject, 'x'),
            getCircleCoord(currentProject, 'y'),
            getCircleCoord(elem, 'x'),
            getCircleCoord(elem, 'y'),
          ]}
        />
      ))}
    </>
  );
});

// {
//   /* <ProjectLink
//             stroke={COLOR_PALLETTE.MAIN_WHITE}
//             key={`links-g-area-${elem.data.key || elem.data.projectId}${elem.data.marketCap}`}
//             strokeWidth={1}
//             strokeDasharray="4000 4000"
//             vectorEffect="non-scaling-stroke"
//             x1={getCircleCoord(currentProject, 'x')}
//             y1={getCircleCoord(currentProject, 'y')}
//             x2={getCircleCoord(elem, 'x')}
//             y2={getCircleCoord(elem, 'y')}
//           /> */
// }
