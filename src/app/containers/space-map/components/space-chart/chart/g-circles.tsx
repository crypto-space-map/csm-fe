import { Fragment, memo } from 'react';

import { GAreaProps } from '../types';
import { AnimatedSphere } from './animated-sphere';

const Circles = memo(({ data, opacityList, ...rest }: Omit<GAreaProps, 'selectedProjects'>) => (
  <>
    {data?.map(elem => {
      const isTransparent = (opacityList && opacityList[elem.data.id]) ?? false;
      return (
        <AnimatedSphere
          elem={elem}
          isTransparent={isTransparent}
          {...rest}
          key={`circles-group-${elem.data.key || elem.data.projectId}`}
        />
      );
    })}
  </>
));

export const GCircles = memo(({ data, ...rest }: GAreaProps) => (
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
));
