import { Fragment, memo, MouseEvent, RefObject, useCallback } from 'react';

import { HierarchyCircularNode } from 'd3';
import { Circle as KonvaCircle } from 'react-konva';

import { useSetNewProject } from 'hooks/use-set-new-project';

import { GAreaProps, PackedCategories } from '../types';
import { getSphereColorParams } from '../utils/colors';
import { transformStylesToString } from '../utils/helpers';
import { useCircleOpacity } from '../utils/use-circle-opacity';
import { CircleText } from './styled';

const getCordsPos = (elem: HierarchyCircularNode<PackedCategories>, cord: 'x' | 'y') => {
  if (elem.parent) {
    return elem[cord] + elem.parent?.data[cord] - elem.parent?.data.r;
  }
  return elem.data[cord];
};

const TOOLTIP_PADDING = 5;

type TooltipProps = {
  tooltipRef: RefObject<HTMLDivElement>;
};

type CircleProps = Omit<GAreaProps, 'data'> &
  TooltipProps & {
    elem: HierarchyCircularNode<PackedCategories>;
  };

const Circle = memo<CircleProps>(
  ({
    elem,
    currentProject,
    setCurrentProject = () => false,
    tooltipRef,
    selectedProjects = [],
    handleSelectFund = () => false,
  }) => {
    const handleClick = useCallback(() => {
      if (currentProject?.data.projectId === elem.data.projectId) return handleSelectFund('');
      return setCurrentProject(elem);
    }, [currentProject?.data.projectId, elem, handleSelectFund, setCurrentProject]);
    const onMouseOver = () => {
      if (tooltipRef.current) {
        tooltipRef.current.style.visibility = 'visible';
      }
    };

    // const onMouseMove = (event: MouseEvent) => {
    //   if (tooltipRef.current) {
    //     const { width, height } = tooltipRef.current.getBoundingClientRect();
    //     const styles = transformStylesToString({
    //       top: `${event.pageY}px`,
    //       left: `${event.pageX}px`,
    //       visibility: 'visible',
    //       transform: `translate(-${width / 2}px, -${height + TOOLTIP_PADDING}px)`,
    //     });
    //     tooltipRef.current.setAttribute('style', styles);
    //     tooltipRef.current.textContent = elem.data.name;
    //   }
    // };

    // const onMouseOut = () => {
    //   if (tooltipRef.current) {
    //     tooltipRef.current.style.visibility = 'hidden';
    //     tooltipRef.current.style.animation = 'none';
    //   }
    // };

    const isTransparent = useCircleOpacity(elem.data);

    // const isSelected =
    //   selectedProjects.some(project => project.data.projectId === elem.data.projectId) ||
    //   (currentProject && elem.data.projectId === currentProject?.data.projectId);

    const tickerFontSize = (elem.r / elem.data.symbol?.length) * 2.5;

    return (
      <>
        <KonvaCircle
          key={`project-circle${elem.data.projectId || elem.data.key}`}
          radius={elem.r || 0.1}
          x={getCordsPos(elem, 'x')}
          y={getCordsPos(elem, 'y')}
          {...getSphereColorParams(elem, isTransparent)}
          onClick={handleClick}
          // opacity={isTransparent ? 0.5 : 1}
          // onMouseMove={onMouseMove}
          // onMouseOver={onMouseOver}
          // onMouseOut={onMouseOut}
          // {...getSphereColorParams(elem, isTransparent)}
        />
        {/* {currentProject && (
          <CircleText
            onClick={handleClick}
            x={scaled(elem.x - elem.r) + elem.r}
            y={scaled(elem.y - elem.r) + elem.r * 1.05}
            isOpacity={!isSelected}
            dominantBaseline="middle"
            fontSize={tickerFontSize}>
            {elem.data.symbol && elem.data.symbol.toUpperCase()}
          </CircleText>
        )} */}
      </>
    );
  }
);

const Circles = memo<GAreaProps & TooltipProps>(({ data, ...rest }) => (
  <>
    {data?.map(elem => (
      <>
        <Circle elem={elem} {...rest} key={elem.data.key || elem.data.projectId} />
      </>
    ))}
  </>
));

export const GCircles = memo(({ data, ...rest }: GAreaProps & TooltipProps) => (
  <>
    {data?.map(
      elem =>
        elem.r && (
          <Fragment key={`project-circle${elem.data?.parent?.id || elem.data.projectId || ''}`}>
            <Circle elem={elem} {...rest} />
            <Circles data={elem.children} {...rest} />
          </Fragment>
        )
    )}
  </>
));
