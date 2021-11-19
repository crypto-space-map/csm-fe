import { RefObject } from 'react';

import { select, Selection } from 'd3';

import { SimulationNodeDatumRadial } from '../types';
import { packedChild } from './child-packer';

const PADDING_TOP = 10;

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
    .attr('y', ({ y, r }) => y - r - PADDING_TOP);
};

export const generateChildLabels = (
  elem: Selection<SVGGElement, SimulationNodeDatumRadial, SVGGElement, unknown>
) =>
  elem
    .selectAll(`.${CLASSNAMES.LABEL_TEXT} ${CLASSNAMES.CHILD}`)
    .data(d => packedChild(d, d.r))
    .join('text')
    .append('tspan')
    .text(item => item.children && item.data?.name?.split(' ')[0])
    .classed(`${CLASSNAMES.LABEL_TEXT} ${CLASSNAMES.CHILD}`, true)
    .attr('x', ({ x }) => x)
    .attr('y', ({ y, r }) => y - r)
    .append('tspan')
    .text(item => item.children && item.data?.name?.split(' ')[1])
    .classed(`${CLASSNAMES.LABEL_TEXT} ${CLASSNAMES.CHILD}`, true)
    .attr('x', ({ x }) => x)
    .attr('y', ({ y, r }) => y - r + 12);
