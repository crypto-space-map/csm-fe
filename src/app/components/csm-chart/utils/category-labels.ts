import { RefObject } from 'react';

import { select } from 'd3';

import { SimulationNodeDatumRadial } from '../types';

const PADDING_TOP = 10;

type CategoriesLabelsProps = {
  ref: RefObject<SVGSVGElement>;
  nodes: SimulationNodeDatumRadial[];
};

export const categoriesLabels = ({ ref, nodes }: CategoriesLabelsProps) => {
  select(ref.current)
    .append('g')
    .classed('category-labels', true)
    .selectAll('text')
    .data(nodes)
    .enter()
    .append('text')
    .text(item => item.key)
    .classed('label-text', true)
    .attr('x', ({ x }) => x)
    .attr('y', ({ y, r }) => y - r - PADDING_TOP);
};
