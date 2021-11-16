import { RefObject } from 'react';

import { select } from 'd3';

import { SimulationNodeDatumRadial } from '../types';
import { packedChild } from './child-packer';

const PADDING_TOP = 10;

type CategoriesLabelsProps = {
  ref: RefObject<SVGSVGElement>;
  nodes: SimulationNodeDatumRadial[];
};

export const categoriesLabels = ({ ref, nodes }: CategoriesLabelsProps) => {
  /** Root g */
  const labelArea = select(ref.current)
    .append('g')
    .classed('category-labels', true)
    .selectAll('text')
    .data(nodes)
    .enter();

  /** Generate categories labels */
  labelArea
    .append('text')
    .text(item => item.key)
    .classed('label-text', true)
    .attr('x', ({ x }) => x)
    .attr('y', ({ y, r }) => y - r - PADDING_TOP);

  /** Generate categories-child labels */

  labelArea
    .selectAll('.category-labels')
    .data(d => packedChild(d, d.r))
    .join('text')
    .text(item => item.children && item.data.name)
    .classed('label-text child', true)
    .attr('x', ({ x, r }) => x + r * 2)
    .attr('y', ({ y, r }) => y + r - PADDING_TOP * 2);
};
