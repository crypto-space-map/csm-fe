import { Fragment, RefObject, useCallback, useRef } from 'react';

import { HierarchyCircularNode } from 'd3';
import { Circle as CircleShape } from 'konva/lib/shapes/Circle';
import { Circle as KonvaCircle } from 'react-konva';

import { GAreaProps, PackedCategories } from '../types';
import { getSphereColorParams } from '../utils/colors';
import { getCordsPos } from '../utils/helpers';
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
    <>
      <KonvaCircle
        ref={circleRef}
        key={`project-circle${elem.data.projectId}`}
        radius={elem.r || 0.1}
        x={getCordsPos(elem, 'x')}
        y={getCordsPos(elem, 'y')}
        {...getSphereColorParams(elem, isTransparent)}
        onClick={handleClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        strokeScaleEnabled={false}
        dash={[10, 10]}
      />
      <CircleText
        elem={elem}
        key={`project-text${elem.data.projectId}`}
        isSelected={!!currentProject && !isSelected}
        // TODO доделать props types
        onClick={handleClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </>
  );
};
const Circles = ({ data, ...rest }: GAreaProps & TooltipProps) => (
  <>
    {data?.map(elem => (
      <>
        <Circle elem={elem} {...rest} key={elem.data.key || elem.data.projectId} />
      </>
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
