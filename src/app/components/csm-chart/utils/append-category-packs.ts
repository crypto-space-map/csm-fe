import { scaleQuantize, schemeGnBu, scaleLinear, HierarchyCircularNode } from 'd3';
import { COLOR_PALLETTE } from 'global/pallette';

import { generateChildLabels } from '.';
import { CategoryPacksType, SimulationNodeDatumRadial } from '../types';
import { packedChild } from './child-packer';

const TOOLTIP_PADDING = 5;

const CLASSNAMES = {
  CENTROIDS: 'centroids',
  CATEGORY_PACKS: 'category-packs',
  CATEGORY: 'category',
  FUND: 'fund',
  CATEGORY_LABELS: 'category-labels',
  LABEL_TEXT: 'label-text',
  TOOLTIP: { NORMAL: 'tooltip', HOVERED: 'tooltip tooltip--hovered' },
};

const scaled = scaleLinear();

const color = scaleQuantize()
  .domain([0, 1])
  .range(schemeGnBu[9] as Iterable<number>);

export const generateCategoryPacks = ({ svg, nodes, fundsTooltip }: CategoryPacksType) => {
  const elem = fundsTooltip.node() as HTMLDivElement;

  const onMouseOver = (event: MouseEvent, item: HierarchyCircularNode<SimulationNodeDatumRadial>) =>
    fundsTooltip.text(item.data.name).attr('class', CLASSNAMES.TOOLTIP.HOVERED);

  const onMouseMove = (event: MouseEvent) => {
    const { width, height } = elem.getBoundingClientRect();
    fundsTooltip
      .style('top', `${event.pageY}px`)
      .style('left', `${event.pageX}px`)
      .style('transform', `translate(-${width / 2}px, -${height + TOOLTIP_PADDING}px)`);
  };
  const onMouseOut = () => fundsTooltip.style('opacity', 0).attr('class', CLASSNAMES.TOOLTIP.NORMAL);

  /** Generate categories */

  const categoryPacks = svg
    .append('g')
    .classed(CLASSNAMES.CATEGORY_PACKS, true)
    .selectAll(`.${CLASSNAMES.CENTROIDS}`)
    .data(nodes)
    .enter()
    .append('g')
    .classed(CLASSNAMES.CATEGORY, true)
    .attr('transform', item => `translate(${item.x - item.r}, ${item.y - item.r})`);

  /** Generate funds */

  categoryPacks
    .selectAll(`.${CLASSNAMES.CATEGORY}`)
    .data(item => packedChild(item, item.r))
    .enter()
    .append('circle')
    .attr('fill', item => (!!item.children && item.value ? 'none' : color(item?.value / 6)))
    .attr('stroke', item =>
      !!item.children ? COLOR_PALLETTE.MAP_DOTTED_CIRCLES : COLOR_PALLETTE.MAP_CHILD_DASH_ARRAY
    )
    .attr('stroke-dasharray', item => (!!item.children ? '10,10' : 'none'))
    .attr('stroke-width', 1)
    .classed(CLASSNAMES.FUND, true)
    .attr('r', item => item.r)
    .attr('cx', item => scaled(item.x))
    .attr('cy', item => item.y)
    .on('click', event => console.log(event.target.__data__))
    /** TODO навесить экшн онклик */
    .on('mousemove', onMouseMove)
    .on('mouseover', onMouseOver)
    .on('mouseout', onMouseOut);

  /** Generate categories-child labels */
  generateChildLabels(categoryPacks);
};
