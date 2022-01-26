import { memo, useLayoutEffect, useRef } from 'react';

import { select, scaleLinear } from 'd3';

import { PackedCategories } from '../types';
import { packedChild } from '../utils/child-packer';
import { containerCreator } from '../utils/container-creator';

const scaled = scaleLinear();

export const GCircles = memo(({ nodes }) => {
  const circlesRef = useRef<SVGGElement>(null);

  useLayoutEffect(() => {
    const gCircles = containerCreator<SVGGElement, PackedCategories[]>({ ref: circlesRef, data: nodes });
    const elem = select<Element, PackedCategories>(gCircles.node() as Element);
    if (elem && nodes?.length) {
      const categoryPacks = elem
        .classed('CLASSNAMES.CATEGORY', true)
        .attr('transform', item => `translate(${item.x - item.r}, ${item.y - item.r})`);

      const circles = categoryPacks
        .selectAll(`.CLASSNAMES.CATEGORY`)
        .data(item => packedChild(item, item.r))
        .enter()
        .append('circle')
        .attr('fill', 'red')
        .attr('r', item => item.r)
        .attr('cx', item => scaled(item.x))
        .attr('cy', item => scaled(item.y));
    }
  }, [nodes]);

  return <g ref={circlesRef} />;
});
