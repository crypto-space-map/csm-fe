import { Fragment, RefObject, useCallback, useRef } from 'react';

import { Spring, animated } from '@react-spring/konva';
import { HierarchyCircularNode } from 'd3';
import { Circle as CircleShape } from 'konva/lib/shapes/Circle';

import { GAreaProps, PackedCategories } from '../types';
import { getSphereColorParams } from '../utils/colors';
import { getCordsPos, randomNumber } from '../utils/helpers';
import { useCircleOpacity } from '../utils/use-circle-opacity';
import { CircleText } from './circle-text';

type TooltipProps = {
  tooltipRef: RefObject<HTMLDivElement>;
};

type CircleProps = Omit<GAreaProps, 'data'> &
  TooltipProps & {
    elem: HierarchyCircularNode<PackedCategories>;
  };

const Circle = ({
  elem,
  currentProject,
  setCurrentProject = () => false,
  selectedProjects = [],
  handleSelectFund = () => false,
  scale = 0,
}: CircleProps) => {
  const circleRef = useRef<CircleShape>(null);
  const isClickableProject = !!elem.data.projectId;
  const handleClick = useCallback(() => {
    if (isClickableProject) {
      if (currentProject?.data.projectId === elem.data.projectId) return handleSelectFund('');
      return setCurrentProject(elem);
    }
    return null;
  }, [currentProject?.data.projectId, elem, handleSelectFund, isClickableProject, setCurrentProject]);

  const onMouseEnter = () => {
    const stage = circleRef.current?.getStage();
    if (stage && isClickableProject) {
      stage.container().style.cursor = 'pointer';
    }
  };

  const onMouseLeave = () => {
    const stage = circleRef.current?.getStage();
    if (stage) {
      stage.container().style.cursor = 'default';
    }
  };

  const isTransparent = useCircleOpacity(elem.data);

  const isSelected =
    selectedProjects.some(project => project.data.projectId === elem.data.projectId) ||
    (currentProject && elem.data.projectId === currentProject?.data.projectId);

  return (
    <Spring
      key={`categories-headers-${elem.parent}`}
      from={{ x: randomNumber(0, 1500), y: randomNumber(0, 1500) }}
      to={{
        x: getCordsPos(elem, 'x'),
        y: getCordsPos(elem, 'y'),
      }}>
      {props => (
        <>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <animated.Circle
            {...props}
            ref={circleRef}
            key={`project-circle${elem.data.projectId}`}
            radius={elem.r || 0.1}
            {...getSphereColorParams(elem, isTransparent)}
            onClick={handleClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            strokeScaleEnabled={false}
            dash={[10, 10]}
          />
          <CircleText
            {...props}
            elem={elem}
            key={`project-text${elem.data.projectId}`}
            isSelected={!!currentProject && !isSelected}
            scale={scale}
            // TODO доделать props types
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            onClick={handleClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        </>
      )}
    </Spring>
  );
};
const Circles = ({ data, ...rest }: GAreaProps & TooltipProps) => (
  <>
    {data?.map(elem => (
      <Circle elem={elem} {...rest} key={`circles-group-${elem.data.key || elem.data.projectId}`} />
    ))}
  </>
);

export const GCircles = ({ data, ...rest }: GAreaProps & TooltipProps) => (
  <>
    {data?.map(
      elem =>
        elem.r && (
          <Fragment key={`project-circle-wrap${elem.data?.key || elem.data.projectId || ''}`}>
            <Circle elem={elem} {...rest} />
            <Circles data={elem.children} {...rest} />
          </Fragment>
        )
    )}
  </>
);
