import { Fragment, memo, MouseEvent, useRef } from 'react';

import { BaseType, HierarchyCircularNode, scaleLinear, Selection } from 'd3';

import { GAreaProps, PackedCategories } from '../types';
import { getSphereColorParams } from '../utils/colors';
import { useCircleOpacity } from '../utils/use-circle-opacity';

const TOOLTIP_PADDING = 5;

const scaled = scaleLinear();

type TooltipProps = {
  tooltip: Selection<BaseType, string, HTMLDivElement | null, unknown>;
};

type CircleProps = Omit<GAreaProps, 'data'> &
  TooltipProps & {
    elem: HierarchyCircularNode<PackedCategories>;
  };

const Circle = memo<CircleProps>(({ elem, setCurrentProject = () => false, tooltip }) => {
  const ref = useRef<SVGCircleElement>(null);
  const handleClick = () => setCurrentProject(elem);

  const handleMouseOver = () =>
    tooltip.text(elem.data.name).style('opacity', 1).attr('class', 'tooltip tooltip--hovered');

  const onMouseMove = (event: MouseEvent) => {
    const element = tooltip.node() as Element;
    const { width, height } = element.getBoundingClientRect();
    tooltip
      .style('top', `${event.pageY}px`)
      .style('left', `${event.pageX}px`)
      .style('transform', `translate(-${width / 2}px, -${height + TOOLTIP_PADDING}px)`);
  };

  const onMouseOut = () => tooltip.style('opacity', 0).attr('class', 'tooltip');

  const isTransparent = useCircleOpacity(elem.data);

  return (
    <circle
      ref={ref}
      key={elem.data.key || elem.data.projectId}
      r={elem.r}
      cx={scaled(elem.x)}
      cy={scaled(elem.y)}
      onClick={handleClick}
      onMouseMove={onMouseMove}
      onMouseOver={handleMouseOver}
      onMouseOut={onMouseOut}
      {...getSphereColorParams(elem, isTransparent)}
    />
  );
});

const Circles = memo<GAreaProps & TooltipProps>(({ data, ...rest }) => (
  <>
    {data?.map(elem => (
      <Fragment key={`${elem.data.projectId}${elem.x}${elem.y}`}>
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
      {data.map(item => (
        <g
          transform={`translate(${item.data.x - item.r}, ${item.data.y - item.r})`}
          key={`${item.x}${item.y}${item.data.projectId}`}>
          <Circle elem={item} {...rest} />
          <Circles data={item.children} {...rest} />
        </g>
      ))}
    </g>
  );
});
