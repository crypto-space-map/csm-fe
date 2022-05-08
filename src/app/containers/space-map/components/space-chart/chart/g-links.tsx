import { memo } from 'react';

import { Line } from 'react-konva';
import { useSelector } from 'react-redux';

import { selectPartnerships } from 'app/containers/space-map/selectors';

import { GAreaProps } from '../types';
import { getCircleCoord } from '../utils/helpers';

export const GLinks = memo<GAreaProps>(({ data, currentProject }) => {
  const { projectPartnershipsLoading } = useSelector(selectPartnerships);

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
