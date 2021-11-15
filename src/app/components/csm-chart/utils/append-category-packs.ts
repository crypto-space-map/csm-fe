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
    .data(d => {
      console.log(d);
      return d.nodes;
    })
    .enter()
    .append('circle')
    .attr('fill', d => (!!d.data.children ? 'none' : color(d.data.value / 6)))
    .attr('stroke', d => (!!d.data.children ? 'white' : 'none'))
    .attr('stroke-dasharray', '10,10')
    .attr('stroke-width', 1)
    .classed('county-centroid-vs-child', d => !!d.data.children)
    .attr('r', d => d.r)
    .attr('cx', d => d.x)
    .attr('cy', d => d.y);

  funds.append('title').text(d => `${d.data.name}`);
};
