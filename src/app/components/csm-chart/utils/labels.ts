import { RefObject } from 'react';

import { select, Selection } from 'd3';

import { SimulationNodeDatumRadial } from '../types';
import { packedChild } from './child-packer';

const PADDING = {
  PARENT: 10,
  CHILD: 12,
};

const CLASSNAMES = {
  CATEGORY_LABELS: 'category-labels',
  CHILD: 'child',
  LABEL_TEXT: 'label-text',
};

type CategoriesLabelsProps = {
  ref: RefObject<SVGSVGElement>;
  nodes: SimulationNodeDatumRadial[];
};

export const categoriesLabels = ({ ref, nodes }: CategoriesLabelsProps) => {
  /** Root g */
  const labelArea = select(ref.current)
    .append('g')
    .classed(CLASSNAMES.CATEGORY_LABELS, true)
    .selectAll('text')
    .data(nodes)
    .enter();

  /** Generate categories labels */
  labelArea
    .append('text')
    .text(item => item.key)
    .classed('label-text', true)
    .attr('x', ({ x }) => x)
    .attr('y', ({ y, r }) => y - r - PADDING.PARENT);
};

export const generateChildLabels = (
  elem: Selection<SVGGElement, SimulationNodeDatumRadial, SVGGElement, unknown>
) =>
  elem
    .selectAll(`.${CLASSNAMES.LABEL_TEXT} ${CLASSNAMES.CHILD}`)
    .data(d => packedChild(d, d.r))
    .join('foreignObject')
    .attr('x', ({ x, r }) => x - r) /** place at centre of circle */
    .attr('y', ({ y, r }) => y - r - PADDING.CHILD) /** top position */
    .attr('height', ({ r }) => r * 2) /** circle radius height */
    .attr('width', ({ r }) => r * 2) /** circle size width */
    .html(item => `${(item.children && item.data?.name) || ''}`)
    .classed(`${CLASSNAMES.LABEL_TEXT} ${CLASSNAMES.CHILD}`, true);
