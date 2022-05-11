import { Fragment } from 'react';

import { GAreaProps } from '../types';
import { AnimatedSphere } from './animated-sphere';

const Circles = ({ data, ...rest }: GAreaProps) => (
  <>
    {data?.map(elem => (
      <AnimatedSphere elem={elem} {...rest} key={`circles-group-${elem.data.key || elem.data.projectId}`} />
    ))}
  </>
);

export const GCircles = ({ data, ...rest }: GAreaProps) => (
  <>
    {data?.map(
      elem =>
        elem.r && (
          <Fragment key={`project-circle-wrap${elem.data?.key || elem.data.projectId || ''}`}>
            <AnimatedSphere elem={elem} {...rest} />
            <Circles data={elem.children} {...rest} />
          </Fragment>
        )
    )}
  </>
);
