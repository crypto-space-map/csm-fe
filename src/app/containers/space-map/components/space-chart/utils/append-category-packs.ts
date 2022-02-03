import { scaleLinear, HierarchyCircularNode } from 'd3';
import { COLOR_PALLETTE } from 'global/pallette';

import { CategoryPacksType, PackedCategories } from '../types';
import { packedChild } from './child-packer';
import { getCircleColor, getProjectsVsCoords } from './helpers';
import { generateChildLabels } from './labels';

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

const STROKE_DASHARRAY = '4,4';

const scaled = scaleLinear();

export const generateCategoryPacks = ({
  svg,
  nodes,
  fundsTooltip,
  mCapFrom = null,
  mCapTo = null,
  exchanges = [],
  maxMarketCap,
  minMarketCap,
  projectPartnerships,
  fetchPartnershipsData,
  setProject,
}: CategoryPacksType) => {
  const elem = fundsTooltip.node() as HTMLDivElement;
  const isTransparent = ({ marketCap, projectId, exchanges: itemExchangesArr }: PackedCategories) => {
    let opacity = false;
    const lessCapFrom = mCapFrom || minMarketCap;
    const moreCapTo = mCapTo || maxMarketCap;

    if (mCapTo || mCapFrom) {
      if (marketCap < lessCapFrom || marketCap > moreCapTo) {
        opacity = true;
      }
    }
    const isIncludes = itemExchangesArr?.some(item => exchanges.includes(item));
    const isLinked = projectId && projectPartnerships?.includes(projectId);
    if (!isIncludes) opacity = true;
    if (isIncludes && projectPartnerships.length && !isLinked) opacity = true;
    return opacity;
  };

  const onMouseOver = (event: MouseEvent, item: HierarchyCircularNode<PackedCategories>) => {
    fundsTooltip.text(item.data.name).attr('class', CLASSNAMES.TOOLTIP.HOVERED);
  };

  const onMouseMove = (event: MouseEvent) => {
    const { width, height } = elem.getBoundingClientRect();
    fundsTooltip
      .style('top', `${event.pageY}px`)
      .style('left', `${event.pageX}px`)
      .style('transform', `translate(-${width / 2}px, -${height + TOOLTIP_PADDING}px)`);
  };
  const onMouseOut = () => fundsTooltip.style('opacity', 0).attr('class', CLASSNAMES.TOOLTIP.NORMAL);

  const onClick = (_event: MouseEvent, item: HierarchyCircularNode<PackedCategories>) => {
    if (item.data.projectId) {
      fetchPartnershipsData(item.data.projectId);
      setProject(item);
    }
  };

  /** get sphere color */

  const getSphereColor = (item: HierarchyCircularNode<PackedCategories>) =>
    !item.children
      ? (item.data.projectWeight &&
          getCircleColor({
            projectWeight: item.data.projectWeight,
            isTransparent: isTransparent(item.data),
          })) ||
        '#383838'
      : 'none';

  /** Generate categories */

  const categoryPacks = svg
    .insert('g')
    .classed(CLASSNAMES.CATEGORY_PACKS, true)
    .selectAll(`.${CLASSNAMES.CENTROIDS}`)
    .data(nodes)
    .enter()
    .append('g')
    .classed(CLASSNAMES.CATEGORY, true)
    .attr('transform', item => `translate(${item.x - item.r}, ${item.y - item.r})`);

  /** Generate funds */

  const circles = categoryPacks
    .selectAll(`.${CLASSNAMES.CATEGORY}`)
    .data(item => packedChild(item, item.r))
    .enter()
    .append('circle')
    .attr('fill', item => getSphereColor(item))
    .attr('stroke', item =>
      !!item.children ? COLOR_PALLETTE.MAP_DOTTED_CIRCLES : COLOR_PALLETTE.MAP_CHILD_DASH_ARRAY
    )
    .attr('stroke-dasharray', item => (!!item.children ? STROKE_DASHARRAY : 'none'))
    .attr('stroke-width', 0.5)
    .classed(CLASSNAMES.FUND, item => !item.children)
    .attr('r', item => item.r)
    .attr('cx', item => scaled(item.x))
    .attr('cy', item => scaled(item.y))
    .on('click', onClick)
    .on('mousemove', onMouseMove)
    .on('mouseover', onMouseOver)
    .on('mouseout', onMouseOut);

  /** Generate categories-child labels */
  generateChildLabels(categoryPacks);

  /** Get data vs cords */
  const circlesData = getProjectsVsCoords(circles.data());

  return circlesData;
};