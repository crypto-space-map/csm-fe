import { Fragment, memo, MouseEvent, RefObject, useCallback, useRef } from 'react';

import { HierarchyCircularNode, scaleLinear } from 'd3';

import { useSetNewProject } from 'hooks/use-set-new-project';

import { GAreaProps, PackedCategories } from '../types';
import { getSphereColorParams } from '../utils/colors';
import { transformStylesToString } from '../utils/helpers';
import { useCircleOpacity } from '../utils/use-circle-opacity';

const TOOLTIP_PADDING = 5;

const scaled = scaleLinear();

type TooltipProps = {
  tooltipRef: RefObject<HTMLDivElement>;
};

type CircleProps = Omit<GAreaProps, 'data'> &
  TooltipProps & {
    elem: HierarchyCircularNode<PackedCategories>;
  };

const Circle = memo<CircleProps>(({ elem, currentProject, setCurrentProject = () => false, tooltipRef }) => {
  const ref = useRef<SVGCircleElement>(null);
  const { handleSelectFund } = useSetNewProject();
  const handleClick = useCallback(() => {
    if (currentProject?.data.projectId === elem.data.projectId) return handleSelectFund('');
    return setCurrentProject(elem);
  }, [currentProject?.data.projectId, elem, handleSelectFund, setCurrentProject]);
  const onMouseOver = () => {
    if (tooltipRef.current) {
      tooltipRef.current.style.visibility = 'visible';
    }
  };

  const onMouseMove = (event: MouseEvent) => {
    if (tooltipRef.current) {
      const { width, height } = tooltipRef.current.getBoundingClientRect();
      const styles = transformStylesToString({
        top: `${event.pageY}px`,
        left: `${event.pageX}px`,
        visibility: 'visible',
        transform: `translate(-${width / 2}px, -${height + TOOLTIP_PADDING}px)`,
      });
      tooltipRef.current.setAttribute('style', styles);
      tooltipRef.current.textContent = elem.data.name;
    }
  };

  const onMouseOut = () => {
    if (tooltipRef.current) {
      tooltipRef.current.style.visibility = 'hidden';
      tooltipRef.current.style.animation = 'none';
    }
  };

  const isTransparent = useCircleOpacity(elem.data);

  return (
    <>
      <circle
        ref={ref}
        key={`project-circle${elem.data.parent || elem.data.projectId}`}
        r={elem.r || 0.1}
        cx={scaled(elem.x)}
        cy={scaled(elem.y)}
        vectorEffect="non-scaling-stroke"
        onClick={handleClick}
        onMouseMove={onMouseMove}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        {...getSphereColorParams(elem, isTransparent)}
        fill={`url(#${elem?.data?.projectId || 'none'})`}
      />
      <linearGradient id={elem.data.projectId} x1="0" y1="0" x2="100%" y2="0">
        <stop offset="3%" stopColor="#242424" />
        <stop offset="100%" stopColor={getSphereColorParams(elem, isTransparent).fill} />
      </linearGradient>
    </>
  );
});

const Circles = memo<GAreaProps & TooltipProps>(({ data, ...rest }) => (
  <>
    {data?.map(elem => (
      <Fragment key={`circle-group${elem.data.projectId}${elem.x}${elem.y}`}>
        <Circle elem={elem} {...rest} />
        <Circles data={elem.children} {...rest} />
      </Fragment>
    ))}
  </>
));

export const GCircles = memo(({ data, ...rest }: GAreaProps & TooltipProps) => {
  if (!data) return null;

  return (
    <g className="circles-map">
      {data.map(
        item =>
          item.r && (
            <g
              transform={`translate(${item.data.x - item.r}, ${item.data.y - item.r})`}
              key={`circles-map-g${item.data.x}${item.data.y}`}>
              <Circle elem={item} {...rest} />
              <Circles data={item.children} {...rest} />
            </g>
          )
      )}
    </g>
  );
});
