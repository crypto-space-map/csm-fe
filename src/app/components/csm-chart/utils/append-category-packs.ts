import { scaleQuantize, schemeGnBu, scaleLinear } from 'd3';

import { CategoryPacksType } from '../types';
import { packedChild } from './child-packer';

const scaled = scaleLinear();

const color = scaleQuantize()
  .domain([0, 1])
  .range(schemeGnBu[9] as Iterable<number>);

export const generateCategoryPacks = ({ svg, nodes }: CategoryPacksType) => {
  const categoryPacks = svg
    .append('g')
    .classed('category-packs', true)
    .selectAll('.centroids')
    .data(nodes)
    .enter()
    .append('g')
    .classed('category', true)
    .attr('transform', d => `translate(${d.x - d.r}, ${d.y - d.r})`);

  const funds = categoryPacks
    .selectAll('.category')
    .data(d => packedChild(d, d.r))
    .enter()
    .append('circle')
    .attr('fill', d => (!!d.children ? 'none' : color(d.value / 6)))
    .attr('stroke', d => (!!d.children ? 'white' : 'none'))
    .attr('stroke-dasharray', '10,10')
    .attr('stroke-width', 1)
    .classed('fund', true)
    .attr('r', d => d.r)
    .attr('cx', d => scaled(d.x))
    .attr('cy', d => d.y)

    .on('click', event => console.log(event.target.__data__));

  funds.append('title').text(d => `${d.data.name}`);
};
