import { useEffect, useRef } from 'react';

import { css } from '@emotion/react';
import { HierarchyCircularNode, Simulation } from 'd3';

import { GAreaProps, PackedCategories } from '../types';
import { containerCreator } from '../utils/container-creator';
import { getCircleCoord } from '../utils/helpers';

const links = css({ display: 'inherit' }).name;

type GLinksProps = GAreaProps & {
  simulation: Simulation<PackedCategories, undefined> | null;
};

export const GLinks = ({ nodes, simulation, currentProject }: GLinksProps) => {
  const linksRef = useRef<SVGGElement>(null);
  const { component } = containerCreator<SVGGElement, HierarchyCircularNode<PackedCategories>[]>({
    ref: linksRef,
    data: nodes as HierarchyCircularNode<PackedCategories>[],
    className: links,
  });

  useEffect(() => {
    console.log(getCircleCoord(currentProject?.data, 'x'));
    component
      .data(component.data())
      .append('line')
      .join('line')
      .attr('stroke', '#ffffff')
      .attr('stroke-width', 1)
      .attr('stroke-dasharray', 4000)
      .attr('x1', currentProject ? getCircleCoord(currentProject?.data, 'x') : 0)
      .attr('y1', currentProject ? getCircleCoord(currentProject?.data, 'y') : 0)
      .attr('x2', d => 200)
      .attr('y2', d => 200);

    component?.exit().remove();
  }, [component, currentProject]);
  if (!nodes) return null;

  return <g ref={linksRef} className="links" />;
};
