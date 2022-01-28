import { BaseType, Selection } from 'd3';

import { PackedCategories } from '../types';
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
  svg: Selection<BaseType, unknown, null, undefined>;
  nodes: PackedCategories[];
};

export const categoriesLabels = ({ svg, nodes }: CategoriesLabelsProps) => {
  /** Root g */
  const labelArea = svg
    .append('g')
    .classed(CLASSNAMES.CATEGORY_LABELS, true)
    .selectAll('text')
    .data(nodes)
    .enter();

  /** Generate categories labels */
  labelArea
    .append('text')
    .text(item => item.key || '')
    .classed('label-text', true)
    .attr('x', ({ x }) => x)
    .attr('y', ({ y, r }) => y - r - PADDING.PARENT);
  labelArea.merge(labelArea);
  labelArea.exit().remove();
};

export const generateChildLabels = (elem: Selection<SVGGElement, PackedCategories, SVGGElement, unknown>) =>
  elem
    .selectAll(`.${CLASSNAMES.LABEL_TEXT} ${CLASSNAMES.CHILD}`)
    .data(d => packedChild(d, d.r))
    .join('foreignObject')
    .attr('x', ({ x, r }) => x - r) /** place at centre of circle */
    .attr('y', ({ y, r }) => y - r - PADDING.CHILD) /** top position */
    .attr('height', ({ r }) => r) /** circle radius height */
    .attr('width', ({ r }) => r * 2) /** circle size width */
    .style('font-size', ({ r }) => (r / 3 > 12 ? 12 : r / 3))
    .html(item => `${(item.children && item.data?.name) || ''}`)
    .classed(`${CLASSNAMES.LABEL_TEXT} ${CLASSNAMES.CHILD}`, true);
