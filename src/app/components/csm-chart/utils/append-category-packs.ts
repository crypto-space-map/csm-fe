import { scaleQuantize, schemeGnBu } from 'd3';

import { CategoryPacksType } from '../types';

const color = scaleQuantize()
  .domain([0, 1])
  .range(schemeGnBu[9] as Iterable<number>);

export const generateCategoryPacks = ({ svg, nodes }: CategoryPacksType) => {
  const categoryPacks = svg
    .append('g')
    .classed('category-packs', true)
    .selectAll('.category-packs')
    .data(nodes)
    .enter()
    .append('g')
    .classed('category-packs', true)
    .attr('transform', d => `translate(${d.x}, ${d.y})`);

  categoryPacks
    .append('circle')
    .attr('r', d => d.r)
    .attr('fill', 'none')
    .attr('stroke', 'none');

  const funds = categoryPacks
    .selectAll('.county-centroid')
    .data(d => d.nodes)
    .enter()
    .append('circle')
    .attr('fill', d => color(d.data.value / 6))
    .classed('county-centroid', true)
    .attr('r', d => d.r)
    .attr('cx', d => d.x)
    .attr('cy', d => d.y)
    .on('click', event => console.log(event.target.__data__));

  funds.append('title').text(d => `${d.data.name}`);
};
