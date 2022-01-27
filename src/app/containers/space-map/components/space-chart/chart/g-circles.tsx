import { memo, useLayoutEffect, useRef } from 'react';

import { css } from '@emotion/react';
import { HierarchyCircularNode, scaleLinear } from 'd3';
import { COLOR_PALLETTE } from 'global/pallette';

import { GAreaProps, PackedCategories } from '../types';
import { packedChild } from '../utils/child-packer';
import { containerCreator } from '../utils/container-creator';
import { getCircleColor } from '../utils/helpers';

const STROKE_DASHARRAY = '4,4';

const circles = css({ display: 'inherit' }).name;

const scaled = scaleLinear();

export const GCircles = memo<GAreaProps>(({ nodes, setCurrentProject }) => {
  const circlesRef = useRef<SVGGElement>(null);

  const getSphereColor = (item: PackedCategories) =>
    !item.children
      ? (typeof item.data.projectWeight !== 'undefined' &&
          getCircleColor({
            projectWeight: item.data.projectWeight,
            isTransparent: false,
          })) ||
        '#383838'
      : 'none';

  useLayoutEffect(() => {
    const onClick = (_event: MouseEvent, item: HierarchyCircularNode<PackedCategories>) => {
      if (item && setCurrentProject) {
        // fetchPartnershipsData(item.data.projectId);
        setCurrentProject(item);
      }
    };

    if (nodes?.length) {
      const { component, className } = containerCreator<SVGGElement, typeof nodes>({
        ref: circlesRef,
        data: nodes,
        className: circles,
      });

      const areas = component
        .data(component.data())
        .attr('transform', item => `translate(${item.data.x - item.data.r}, ${item.data.y - item.data.r})`);

      areas
        .selectAll(`.${className}`)
        .enter()
        .data(item => packedChild(item, item.r))
        .enter()
        .append('circle')
        .attr('stroke', item =>
          item.children ? COLOR_PALLETTE.MAP_DOTTED_CIRCLES : COLOR_PALLETTE.MAP_CHILD_DASH_ARRAY
        )
        .attr('stroke-dasharray', item => (item.children ? STROKE_DASHARRAY : 'none'))
        .attr('stroke-width', 0.4)
        .attr('fill', item => getSphereColor(item.data))
        .attr('r', item => item.data.r)
        .attr('cx', item => scaled(item.data.x))
        .attr('cy', item => scaled(item.data.y))
        .on('click', onClick);
    }
  }, [nodes, setCurrentProject]);

  return <g ref={circlesRef} className="circles-map" />;
});
