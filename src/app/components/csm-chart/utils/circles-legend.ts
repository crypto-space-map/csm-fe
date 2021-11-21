import { CategoryPacksType, SimulationNodeDatumRadial } from '../types';
import { color } from './colors';

const CIRCLES_OFFSET = 90;

type MapLegend = Omit<CategoryPacksType, 'fundsTooltip'>;

export const generateFundsLegend = ({
  svg,
  nodes,
}: //  width will use with screen-size-hook to centroid elem
MapLegend) => {
  const getCirclesValues = (data: SimulationNodeDatumRadial[]) => {
    const values = data.reduce((acc, node) => {
      if (node.children) {
        acc.concat(getCirclesValues(node.children));
        node.children.map(item => acc.push(item.value));
      }
      return acc;
    }, [] as number[]);

    return values;
  };

  const width = parseInt(svg.style('width'), 10);

  console.log(width);

  const circleData = [...new Set(getCirclesValues(nodes))].sort((a, b) => a - b);

  const legend = svg
    .append('g')
    .attr('transform', `translate(${width / 10}, 0)`)
    .selectAll(`g`)
    .data(circleData)
    .enter();

  legend
    .append('circle')
    .attr('fill', item => color(item / 6))
    .attr('cy', 20)
    .attr('cx', (d, i) => i * CIRCLES_OFFSET)
    .attr('r', 12)
    .style('filter', 'url(#drop-shadow)');

  legend
    .append('text')
    .attr('y', 26)
    .attr('x', (d, i) => i * CIRCLES_OFFSET + 18)
    .text((d, i) => `${circleData[i - 1] || 0} - ${circleData[i] || ''}`)
    .classed('legend-label', true)
    .style('font-size', 16);
};
