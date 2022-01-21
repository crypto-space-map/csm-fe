import { RefObject } from 'react';

import { select, BaseType } from 'd3';

import { color } from './colors';

type MapLegend = {
  ref: RefObject<SVGElement>;
  width: number;
};

const CIRCLE = {
  OFFSET: 80,
  RADIUS: 12,
};
export const generateFundsLegend = ({
  ref,
  width = 0,
}: //  width will use with screen-size-hook to centroid elem
MapLegend) => {
  const circleData = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  const legendWidth = CIRCLE.OFFSET * circleData.length + CIRCLE.OFFSET * circleData.length;

  const xLegendPos = width / 2 - legendWidth / 4;

  const legend = select(ref.current)
    .append('g')
    .attr('transform', `translate(${xLegendPos}, -20)`)
    .selectAll(`g`)
    .data(circleData)
    .enter();

  legend
    .append('circle')
    .attr('fill', item => color(item / 100))
    .attr('transform', `translate(0, 20)`)
    .attr('cx', (d, i) => i * CIRCLE.OFFSET)
    .attr('r', CIRCLE.RADIUS)
    .classed('legend-circle', true)
    // .style('filter', 'url(#drop-shadow)')
    .on('click', (event: MouseEvent) => {
      const circle = select(event.target as BaseType);
      const isSelected = circle.attr('stroke') === '#83D9F5';
      circle.attr('stroke', !isSelected ? '#83D9F5' : 'none').attr('stroke-width', 2);
      // TODO   Move out
    });

  legend
    .append('text')
    .attr('transform', `translate(0, ${CIRCLE.RADIUS * 2})`)
    .attr('x', (d, i) => i * CIRCLE.OFFSET + 14)
    .text((d, i) => `${circleData[i - 1] || 0}-${circleData[i] || ''}`)
    .classed('legend-label', true)
    .style('font-size', 14);
};
