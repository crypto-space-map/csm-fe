import { select, BaseType } from 'd3';

import { CategoryPacksType, PackedCategories } from '../types';
import { color } from './colors';

type MapLegend = Omit<CategoryPacksType, 'fundsTooltip'>;

const CIRCLE = {
  OFFSET: 80,
  RADIUS: 12,
};
export const generateFundsLegend = ({
  svg,
  nodes,
}: //  width will use with screen-size-hook to centroid elem
MapLegend) => {
  const getCirclesValues = (data: PackedCategories[]) => {
    const values = data.reduce((acc, node) => {
      if (node.children) {
        acc.concat(getCirclesValues(node.children));
        node.children.map(item => acc.push(item.marketCap));
      }
      return acc;
    }, [] as number[]);

    return values;
  };

  const circleData = [...new Set(getCirclesValues(nodes))].sort((a, b) => a - b);

  const width = parseInt(svg.style('width'), 10);

  const legend = svg
    .append('g')
    .attr('transform', `translate(${width / 10}, 0)`)
    .selectAll(`g`)
    .data(circleData)
    .enter();

  legend
    .append('circle')
    .attr('fill', item => color(item / 6))
    .attr('transform', `translate(0, 20)`)
    .attr('cx', (d, i) => i * CIRCLE.OFFSET)
    .attr('r', CIRCLE.RADIUS)
    .classed('legend-circle', true)
    .style('filter', 'url(#drop-shadow)')
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
    .text((d, i) => `${circleData[i - 1] || 0}0-${circleData[i] || ''}0`)
    .classed('legend-label', true)
    .style('font-size', 14);
};
